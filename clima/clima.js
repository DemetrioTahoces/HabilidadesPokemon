const axios = require('axios');

const getClima = async(city) => {
    const url = `api.openweathermap.org/data/2.5/weather?APPID=da98f7ecbf4c81b90f3b2c8281f4f3c6&q=${city}&units=metric`;
    console.log(url);
    const resp = await axios.get(url);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}