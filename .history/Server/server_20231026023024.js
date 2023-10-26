const express = require('express');
const dataAccess = require('./dataAccess');
const character = require('./characterModel')
const missingData = require('./missingDatalogic')
const characterImage = require('./assignImage')
const compareson = require('./comparisonLogic')
const app = express();

app.get('/people-names', async (req, res) => {
    try {
        const allCharacterNames = await dataAccess.getAllPeopleNames();
        res.json(allCharacterNames);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
        error: 'Internal server error'
        });
    }
});

/* app.get('/character-details', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}); */

app.get('/search', async (req, res) => {
    //Get character names
    //const character1Name = req.query.character1;
    //const character2Name = req.query.character2;

    //test names
    const character1Name = "Luke Skywalker";
    const character2Name = "R2-D2";

    //Check than both are populated
    if (!character1Name || !character2Name) {
        res.status(400).json({
            error: 'Both character names are required'
        });
        return;
    }

    try {
        //Get character attributes from api
        const character1Attributes = await dataAccess.getCharacterByName(character1Name);
        const character2Attributes = await dataAccess.getCharacterByName(character2Name);

        //Get character image
        const character1Image = await characterImage.getCharacterImage(character1Name);
        const character2Image = await characterImage.getCharacterImage(character2Name);

        //Check and hanle missing attribute values
        character1Attributes = await missingData.replaceMissingValues(character1Attributes);
        character2Attributes = await missingData.replaceMissingValues(character2Attributes);

        //Add image to character models and return the models at this point
        const character1 = new character(character1Name, character1Attributes, character1Image)
        const character2 = new character(character2Name, character2Attributes, character2Image)

        // Compare character attributes
        const comparisonResult = compareson.compareAttributes(character1Attributes, character2Attributes);

        //Calculate winner character
        const overallWinner = compareson.calculateOverallWinner(comparisonResult)

        res.json({
            characters: {character1, character2},
            comparisonResult,
            overallWinner
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
});