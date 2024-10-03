const db = require('../util/db');

// Obtener habilidad A por ID
async function getSkillAById(id) {
    const [rows] = await db.execute('SELECT name, effect FROM skills_a WHERE id = ?', [id]);
    return rows.length > 0 ? rows : null;
}

// Obtener habilidad B por ID
async function getSkillBById(id) {
    const [rows] = await db.execute('SELECT name, effect FROM skills_b WHERE id = ?', [id]);
    return rows.length > 0 ? rows : null;
}

// Obtener habilidad C por ID
async function getSkillCById(id) {
    const [rows] = await db.execute('SELECT name, effect FROM skills_c WHERE id = ?', [id]);
    return rows.length > 0 ? rows : null;
}

module.exports = {
    getSkillAById,
    getSkillBById,
    getSkillCById
};

