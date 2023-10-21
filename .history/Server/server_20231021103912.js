const express = require('express');
const swapi = require('swapi-node');
const app = express();
const port = 3000;

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

app.get('/search', async (req, res) => {
    const character1 = req.query.character1;
    const character2 = req.query.character2;

    if(!character1 || !character2){
        res.status(400).json({error: 'Both character names are required'});
        return
    }

    try{
        const {name1, name2} = req.query;
        const character1Data = await swapi.get('people',{search: character1});
        const character2Data = await swapi.get('people', {search: character2});


        res.json({character1: character1Data, character2: character2Data});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});
