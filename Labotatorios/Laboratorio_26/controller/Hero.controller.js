exports.get_Hero = (request, response, next) => {
    const randomId = Math.floor(Math.random() * 1147) + 1;

    fetch('https://feh-pi.vercel.app/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query MyQuery {
                    heroes(idNums: ${randomId}) {
                        name(language: USEN) {
                            value
                        }
                        origins
                        resplendentExists
                        imageUrl
                        maxDragonflowers
                        honorType
                        movementType
                        epithet(language: USEN) {
                            value
                        }
                        resplendentImageUrl
                        growthRates {
                            atk
                            def
                            hp
                            res
                            spd
                        }
                        baseStats {
                            atk
                            hp
                            res
                            spd
                            def
                        }
                    }
                }
            `
        }),
    })
    .then((res) => res.json())
    .then((result) => {
        const hero = result?.data?.heroes ? result.data.heroes[0] : null;

        if (!hero) {
            response.status(404).send('Hero not found for the selected ID.');
            return;
        }

        // Si alguna propiedad no está presente, la inicializamos como "N/A" o valores predeterminados
        const honorType = hero.honorType || 'N/A';
        const origins = hero.origins || 'Unknown';

        response.render('Hero.ejs', {
            username: request.session.username || '',
            heroName: hero.name?.value || 'N/A',
            epithet: hero.epithet?.value || 'N/A',
            imageUrl: hero.imageUrl || '',
            resplendentImageUrl: hero.resplendentImageUrl || '',
            resplendentExists: hero.resplendentExists || false,
            maxDragonflowers: hero.maxDragonflowers || 0,
            movementType: hero.movementType || 'Unknown',
            honorType: honorType, // Aseguramos que honorType siempre se pase
            origins: origins,     // Origen del héroe
            baseStats: hero.baseStats || { hp: 0, atk: 0, def: 0, res: 0, spd: 0 },
            growthRates: hero.growthRates || { hp: 0, atk: 0, def: 0, res: 0, spd: 0 }
        });
    })
    .catch((error) => {
        console.log('Error fetching hero data:', error);
        response.status(500).send('Error fetching hero data');
    });
};

exports.post_Hero = (request, response, next) => {
    response.redirect('/Hero');
};
