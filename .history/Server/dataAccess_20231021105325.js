const swapi = require('swapi-node');

async function getCharacterByName(name){
    try {
        const characterData = await swapi.get('people', { search: name });
        return characterData.results[0];
    } catch (error) {
        console.error('Error fetching character data:', error);
        throw error;
    }
};
module.exports = {
    getCharacterByName,
};