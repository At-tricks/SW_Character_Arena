const {
    getAllEyeColors,
    getAllHairColors
} = require('./dataAccess');

//Helper function for convertAttributesToInt
async function convertColorAttributesToInt() {
    // Retrieve available eye colors and hair colors
    const eyeColors = await getAllEyeColors();
    const hairColors = await getAllHairColors();

    const eyeColorValues = {};
    const hairColorValues = {};

    // Assign unique integer values to each eye color
    let uniqueValue = 10;
    for (const color of eyeColors) {
        eyeColorValues[color] = uniqueValue;
        uniqueValue += 10; // Increase by 10 for uniqueness
    }

    console.log("convertColorAttributesToInt Eye color object: ", eyeColorValues);

    uniqueValue = 10;

    // Assign unique integer values to each hair color
    for (const color of hairColors) {
        hairColorValues[color] = uniqueValue;
        uniqueValue += 10;
    }

    console.log("convertColorAttributesToInt Hair color object:", hairColorValues);


    return {
        eyeColors: eyeColorValues,
        hairColors: hairColorValues,
    };
};

//Helper function for convertAttributesToInt
function parseIntOrNestedAttribute(value, nestedValue, defaultValue) {
    if (value === defaultValue) {
        return parseInt(defaultValue);
    }
    return parseInt(nestedValue);
}

//Convert all attributes of character object to int
async function convertAttributesToInt(character) {
    const colorValueSets = await convertColorAttributesToInt();

    // Convert height, mass and birth_year to integers  (e.g. of Birth year format, "33BBY")
    character.birthYear = parseInt(character.birthYear);
    character.height = parseInt(character.height);
    character.mass = parseInt(character.mass);

    // Map the character's eyeColor and hairColor to its corresponding integer value
    if (character.eyeColor !== "0" && colorValueSets.eyeColors[character.eyeColor] !== undefined) {
        character.eyeColor = colorValueSets.eyeColors[character.eyeColor];
    } else {
        character.eyeColor = parseInt(character.eyeColor);
    };
    console.log("convertAttributesToInt character.eyeColor :", character.eyeColor);

    if (character.hairColor !== "0" && colorValueSets.hairColors[character.hairColor] !== undefined) {
        character.hairColor = colorValueSets.hairColors[character.hairColor];
    } else {
        character.hairColor = parseInt(character.hairColor)
    }
    console.log("convertAttributesToInt character.hairColor :", character.hairColor);

    // Convert nested object attributes
    character.homeWorld = parseIntOrNestedAttribute(character.homeWorld, character.homeWorld.diameter, "0");
    character.species = parseIntOrNestedAttribute(character.species, character.species.lifeSpan, "0");
    character.vehicles = parseIntOrNestedAttribute(character.vehicles, character.vehicles.cargoCapacity, "0");

    return character
};

//Compare the two characters' attributes
function compareAttributes(character1, character2) {
    // Initialize results and wins for each character
    const results = {
        character1: {
            wins: 0,
            attributes: {},
        },
        character2: {
            wins: 0,
            attributes: {},
        },
    };

    // Define a comparison configuration object
    const attributeComparisonConfig = {
        birthYear: 'lower', //lower birth year wins
        height: 'higher', //higher height wins
        mass: 'higher', //higher mass wins
        eye_color: 'higher', //higher eye color wins (using the integer value)
        hair_color: 'higher', //higher hair color wins (using the integer value)
        homeWorld: 'higher', //higher homeWorld  wins (using the diameter value)
        species: 'higher', //higher species wins (using the lifeSpan value)
        vehicles: 'higher', //higher vehicle wins (using the cargoCapacity value)
    };

    // Convert attribute values to integers 
    character1 = convertAttributesToInt(character1);
    character2 = convertAttributesToInt(character2);

    // Loop through the attributes defined in the configuration
    for (const attribute in attributeComparisonConfig) {
        const comparisonType = attributeComparisonConfig[attribute];
        const value1 = character1;
        const value2 = character2;

        console.log("compareAttributes value1 :", value1);
        console.log("compareAttributes value2 :", value2);

        if (comparisonType === 'lower') {
            if (value1 < value2) {
                results.character1.wins++;
                results.character1.attributes[attribute] = 'Win';
                results.character2.attributes[attribute] = 'Lose';
            } else if (value2 < value1) {
                results.character2.wins++;
                results.character1.attributes[attribute] = 'Lose';
                results.character2.attributes[attribute] = 'Win';
            } else {
                results.character1.attributes[attribute] = 'Equal';
                results.character2.attributes[attribute] = 'Equal';
            }
        } else if (comparisonType === 'higher') {
            if (value1 > value2) {
                results.character1.wins++;
                results.character1.attributes[attribute] = 'Win';
                results.character2.attributes[attribute] = 'Lose';
            } else if (value2 > value1) {
                results.character2.wins++;
                results.character1.attributes[attribute] = 'Lose';
                results.character2.attributes[attribute] = 'Win';
            } else {
                results.character1.attributes[attribute] = 'Equal';
                results.character2.attributes[attribute] = 'Equal';
            }
        }
    }
    return results;
};

function calculateOverallWinner(comparisonResults) {
    let character1WinCount = comparisonResults.character1.wins;
    let character2WinCount = comparisonResults.character2.wins;

    if (character1WinCount > character2WinCount) {
        return character1.name;
    } else if (character2WinCount > character1WinCount) {
        return character2.name;
    } else {
        return 'Equal';
    }
};

module.exports = {
    compareAttributes,
    calculateOverallWinner,
};