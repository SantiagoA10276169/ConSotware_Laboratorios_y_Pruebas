const skills = require('../models/skills.models');

exports.get_home = async (req, res, next) => {
    try {
        const username = req.session.username || '';

        const skillA_Marth = await skills.getSkillAById(7);
        const skillB_Marth = await skills.getSkillBById(8);
        const skillC_Marth = await skills.getSkillCById(9);

        const skillA_Celica = await skills.getSkillAById(10);
        const skillB_Celica = await skills.getSkillBById(11);
        const skillC_Celica = await skills.getSkillCById(12);

        const skillA_Alm = await skills.getSkillAById(4);
        const skillB_Alm = await skills.getSkillBById(5);
        const skillC_Alm = await skills.getSkillCById(6);

        const skillA_Sigurd = await skills.getSkillAById(1);
        const skillB_Sigurd = await skills.getSkillBById(2);
        const skillC_Sigurd = await skills.getSkillCById(3);

        res.render('home', {
            username,
            lords: [
                { name: "Marth", skillA: skillA_Marth[0], skillB: skillB_Marth[0], skillC: skillC_Marth[0], image: 'URL_DE_IMAGEN_MARTH' },
                { name: "Celica", skillA: skillA_Celica[0], skillB: skillB_Celica[0], skillC: skillC_Celica[0], image: 'URL_DE_IMAGEN_CELICA' },
                { name: "Alm", skillA: skillA_Alm[0], skillB: skillB_Alm[0], skillC: skillC_Alm[0], image: 'URL_DE_IMAGEN_ALM' },
                { name: "Sigurd", skillA: skillA_Sigurd[0], skillB: skillB_Sigurd[0], skillC: skillC_Sigurd[0], image: 'URL_DE_IMAGEN_SIGURD' }
            ]
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener las habilidades");
    }
};
