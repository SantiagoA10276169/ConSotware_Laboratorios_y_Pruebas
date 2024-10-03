console.log("Hello Summoner!");

const boton = document.getElementById('bottom_Summon');

const summons = [
    {
        description: "you got a 5 stars Celica", 
        imagen:"https://pm1.narvii.com/6551/f0a8ccb8bc04bd57eb1ec8a118df34cb7d116743_hq.jpg",
    },
    {
        description: "you got Eliwood", 
        imagen:"https://i.redd.it/bjrxka45en3z.png",
    },
    {
        description: "you got Marth", 
        imagen:"https://cdn.vox-cdn.com/thumbor/nSMHNpUUtJbk1jkh1YTMOhR3fdQ=/0x0:1440x2560/1120x0/filters:focal(0x0:1440x2560):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7925497/Screenshot_20170202_191501.png",
    },
    {
        description: "you got Elincia", 
        imagen:"https://mmosumo.com/wp-content/uploads/2020/03/wfewfe.jpg",
    },
    {
        description: "you got Tiki (Adult)", 
        imagen:"https://orig00.deviantart.net/6df3/f/2017/037/5/8/i_got_tiki_in_my_fe_heroes_squad__by_sephy90-day5vx8.jpg",
    },
    {
        description: "you got Lyn", 
        imagen:"https://i.pinimg.com/originals/99/04/81/9904817dc8a760338a0776e531178f2c.jpg",
    },
]

boton.onclick = () => {
    console.log("Your Hero is...");

    const imagen = document.getElementById('Imagen_B1');

    const num_summon = Math.floor(Math.random() * 6);

    imagen.alt = summons[num_summon].description;

    imagen.src = summons[num_summon].imagen;
}