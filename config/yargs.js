const pokemon = {
    alias: 'p',
    desc: 'Pokemon a obtener',
    demand: true
}

const argv = require('yargs').options({ pokemon }).argv;

module.exports = {
    argv
}