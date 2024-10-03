const focus = [
    {
    descripcion: "Alfonse ~ Heir to Openness", 
    imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/alfons_heir_to_openness_slide01.png",
    },
    {
    descripcion: "Felix ~ Sword Savant", 
    imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/felix_sword_savant_slide01.png",
    },
    {
     descripcion: "Bernadetta ~ Sheltered Loner", 
     imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/bernadeta_sheltered_loner_slide01.png",
    },
    {
    descripcion: "Robin ~ Exalt s Right Hand", 
    imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/reflet_exalts_right_hand_slide01.png",
   }
];

module.exports = class fcontrol  {

constructor(mi_descripcion, mi_imagen) {

    this.descripcion = mi_descripcion;
    this.imagen = mi_imagen;
}

save() {

    focus.push(this);

}

static fetchAll() {

    return focus;

}

}

