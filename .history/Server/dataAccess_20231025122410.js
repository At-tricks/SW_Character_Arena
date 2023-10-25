const swapi = require('swapi-node');

/* async function handleMissingAttribute(attribute, getDataFunction) {
    if (!attribute || attribute.length === 0) {
        return "0"
    }
    try {
        // Fetch additional data
        return await getDataFunction(attribute);
    } catch (error) {
        console.error(`Error fetching ${attribute} data:`, error);
        return "0"; // or use a sentinel value
    }
}

*/

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
            diameter: "0",
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
            diameter: "0",
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


        // Fetch additional data
        character.homeWorld = getHomeWorldDetails(character.homeworld);
        character.species = getSpeciesDetails(character.species);
        character.vehicles = getVehicleDetails(character.vehicles);

        return character;

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