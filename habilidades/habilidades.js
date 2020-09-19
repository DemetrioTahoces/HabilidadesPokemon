const axios = require('axios');

const getHabilities = async(pokemon) => {

    const encodedUrl = encodeURI(pokemon);

    const instance = axios.create({
        baseURL: `https://pokeapi.co/api/v2/pokemon/${encodedUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'da5eec06cdmshe3d780d7fde37d3p14f5d4jsn813354bb74a1' }
    });

    const resp = await instance.get();
    const abilities = resp.data.abilities;

    if (abilities.length === 0) {
        throw new Error(`${pokemon} no tiene habilidades`);
    }

    const listAbilities = [];
    abilities.forEach(element => listAbilities.push(element.ability));
    return listAbilities;
}

const getDescription = async(url) => {

    const resp = await axios.get(url);
    entries = resp.data.effect_entries;

    if (entries.length === 0) {
        throw new Error('Esta habilidad no tiene efectos');
    }

    let effect = 'Esta habilidad no esta en inglés';
    entries.forEach(element => {
        if (!element.language.name.localeCompare('en')) {
            effect = element.effect;
        }
    });

    return effect;
}

module.exports = {
    getHabilities,
    getDescription
}