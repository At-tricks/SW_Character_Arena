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


