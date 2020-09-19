const argv = require('./config/yargs').argv;
const habilidades = require('./habilidades/habilidades');
//const clima = require('./clima/clima');
require('colors');

habilidades.getHabilities(argv.pokemon).then(abilities => {
    abilities.forEach(ability => {
        const name = ability.name;
        habilidades.getDescription(ability.url).then(description => console.log(`\n${name}:\n${description}\n`.yellow));
    })
});

//clima.getClima('London,uk').then(console.log);