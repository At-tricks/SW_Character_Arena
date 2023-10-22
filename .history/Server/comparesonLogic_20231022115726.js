function convertTextAttributeValues(character1, character2) {



};

function compareAttributes(character1, character2) {
    const attributes = [
        'birth_year',
        'height',
        'mass',
        'homeworld',
        'species',
        'eye_color',
        'hair_color',
        'vehicles',
    ];

    const result = {};

    for (const attribute of attributes) {
        const value1 = character1[attribute];
        const value2 = character2[attribute];

        if (value1 === value2) {
            result[attribute] = 'Equal';
        } else if (
            (typeof value1 === 'string' && typeof value2 === 'string' && value1 > value2) ||
            (Array.isArray(value1) && Array.isArray(value2) && value1.length > value2.length)
        ) {
            result[attribute] = character1.name;
        } else {
            result[attribute] = character2.name;
        }
    }
    return result;
}

function calculateOverallWinner(comparisonResult, character1, character2) {
    let character1BetterCount = 0;
    let character2BetterCount = 0;

    for (const attribute in comparisonResult) {
        if (comparisonResult[attribute] === character1.name) {
            character1BetterCount++;
        } else if (comparisonResult[attribute] === character2.name) {
            character2BetterCount++;
        }
    }

    if (character1BetterCount > character2BetterCount) {
        return character1.name;
    } else if (character2BetterCount > character1BetterCount) {
        return character2.name;
    } else {
        return 'Equal';
    }
}

module.exports = {
    compareAttributes,
    calculateOverallWinner,
};