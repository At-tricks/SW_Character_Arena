const swapi = require('swapi-node');
const attributes = require('./attributeModel');

//Return all Character names
async function getAllPeopleNames() {
    try {
        const allPeople = await swapi.get('people');
        const peopleNames = allPeople.results.map((person) => person.name);
        return peopleNames;
    } catch (error) {
        console.error('Error fetching people names:', error);
        throw error;
    }
}

//Return all possible eye colors of characters
async function getAllEyeColors() {
    try {
        const allPeople = await swapi.get('people');
        const eyeColors = new Set();

        allPeople.results.forEach((person) => {
            eyeColors.add(person.eye_color);
        });

        return Array.from(eyeColors);
    } catch (error) {
        console.error('Error fetching eye color data:', error);
        throw error;
    }
}

//Return all possible Hair Colors of characters
async function getAllHairColors() {
    try {
        const allPeople = await swapi.get('people');
        const hairColors = new Set();

        allPeople.results.forEach((person) => {
            hairColors.add(person.hair_color);
        });

        return Array.from(hairColors);
    } catch (error) {
        console.error('Error fetching hair color data:', error);
        throw error;
    }
}

//Return character home world's Name and Diameter
async function getHomeWorldDetails(url) {
    if (!url || url.length === 0) {
        return {
            name: 'Unknown',
            diameter: "0",
        };
    };

    try {
        const homeWorldData = await swapi.get(url);
        return {
            name: homeWorldData.name,
            diameter: homeWorldData.diameter,
        };
    } catch (error) {
        console.error('Error fetching homeWorld data:', error);
    }
}

//Return character species' Name and Life Span
async function getSpeciesDetails(url) {
    if (!url || url.length === 0) {
        return {
            name: 'Unknown',
            lifeSpan: "0",
        };
    };

    try {
        const speciesData = await swapi.get(url);
        return {
            name: speciesData.name,
            lifeSpan: speciesData.average_lifespan,
        };
    } catch (error) {
        console.error('Error fetching species data:', error);
    }
}

//Return character vehicale's Name and Cargo Capacity
async function getVehicleDetails(url) {
    if (!url || url.length === 0) {
        return {
            name: 'Unknown',
            cargoCapacity: "0",
        };
    };

    try {
        const vehicleData = await swapi.get(url);
        return {
            name: vehicleData.name,
            cargoCapacity: vehicleData.cargo_capacity,
        };
    } catch (error) {
        console.error('Error fetching vehicle data:', error);
    }
}

//Return Character attributes
async function getCharacterByName(name) {
    try {
        const characterData = await swapi.get('people', {
            search: name
        });
        const character = characterData.results[0];
        let characterAttributes = new attributes(character);

        // Fetch additional data
        characterAttributes.homeWorld = await getHomeWorldDetails(character.homeworld);
        characterAttributes.species = await getSpeciesDetails(character.species[0]);
        characterAttributes.vehicles = await getVehicleDetails(character.vehicles[0]);

        return characterAttributes;

    } catch (error) {
        console.error('Error fetching character data:', error);
        throw error;
    }
};

module.exports = {
    getAllPeopleNames,
    getAllEyeColors,
    getAllHairColors,
    getCharacterByName,
};