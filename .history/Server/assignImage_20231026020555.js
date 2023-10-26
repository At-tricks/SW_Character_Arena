//Should add the the character image to the character object
const characterImages = {
    "Luke Skywalker": "Luke-Skywalker3.jpeg",
    "C-3PO": "C-3PO_2.jpg",
    "R2-D2": "R2-D2_2.jpg",
    "Darth Vader": "Darth-Vader2.jpg",
    "Leia Organa": "Leia-Organa3.jpg",
    "Owen Lars": "owen-lars.jpg",
    "Beru Whitesun lars": "Beru-Whitesun-lars3.jpeg",
    "R5-D4": "R5-D4.jpg",
    "Biggs Darklighter": "Biggs-Darklighter2.jpg",
    "Obi-Wan Kenobi": "Obi-Wan-Kenobi2.jpg",
    "Anakin Skywalker": "Anakin-Skywalker1.jpg",
    "Wilhuff Tarkin": "Wilhuff-Tarkin1.jpg",
    "Chewbacca": "Chewbacca2.jpg",
    "Han Solo": "Han-Solo1.jpeg",
    "Greedo": "Greedo1.jpg",
    "Jabba Desilijic Tiure": "Jabba-Desilijic-Tiure.jpeg",
    "Wedge Antilles": "Wedge-Antilles.jpeg",
    "Jek Tono Porkins": "Jek-Tono-Porkins.jpeg",
    "Yoda": "Yoda1.jpg",
    "Palpatine": "Palpatine1.jpeg",
    "Boba Fett": "Boba-Fett1.jpeg",
    "IG-88": "ig-88_2.jpeg",
    "Bossk": "Bossk3.jpg",
    "Lando Calrissian": "Lando-Calrissian1.jpeg",
    "Lobot": "Lobot1.jpg",
    "Ackbar": "Ackbar1.jpeg",
    "Mon Mothma": "Mon-Mothma2.jpeg",
    "Arvel Crynyd": "Arvel-Crynyd1.jpeg",
    "Wicket Systri Warrick": "Wicket-Systri-Warrick1.jpeg",
    "Nien Nunb": "Nien-Nunb1.jpeg",
    "Qui-Gon Jinn": "Qui-Gon_Jinn1.jpeg",
    "Nute Gunray": "Nute-Gunray2.jpg",
    "Finis Valorum": "Finis-Valorum1.jpeg",
    "Padmé Amidala": "Padmé-Amidala1.jpeg",
    "Jar Jar Binks": "Jar-Jar-Binks1.jpeg",
    "Roos Tarpals": "Roos-Tarpals1.jpeg",
    "Rugor Nass": "Rugor-Nass1.jpg",
    "Ric Olié": "Ric-Olié1.jpg",
    "Watto": "Watto1.jpeg",
    "Sebulba": "Sebulba1.jpeg",
    "Quarsh Panaka": "Quarsh-Panaka1.jpg",
    "Shmi Skywalker": "Shmi-Skywalker2.jpg",
    "Darth Maul": "Darth-Maul2.jpeg",
    "Bib Fortuna": "Bib-Fortuna1.jpeg",
    "Ayla Secura": "Aayla-Secura1.jpeg",
    "Ratts Tyerel": "Ratts-Tyerel1.jpg",
    "Dud Bolt": "Dud-Bolt1.jpg",
    "Gasgano": "Gasgano1.jpg",
    "Ben Quadinaros": "Ben-Quadinaros1.jpg",
    "Mace Windu": "Mace-Windu3.jpeg",
    "Ki-Adi-Mundi": "Ki-Adi-Mundi2.jpg",
    "Kit Fisto": "Kit-Fisto1.jpeg",
    "Eeth Koth": "Eeth-Koth1.jpeg",
    "Adi Gallia": "Adi-Gallia1.jpeg",
    "Saesee Tiin": "Saesee-Tiin1.jpeg",
    "Yarael Poof": "Yarael-Poof1.jpeg",
    "Plo Koon": "Plo-Koon3.jpg",
    "Mas Amedda": "Mas-Amedda2.jpeg",
    "Gregar Typho": "Gregar-Typho1.jpg",
    "Cordé": "Cordé1.jpg",
    "Cliegg Lars": "Cliegg-Lars1.jpg",
    "Poggle the Lesser": "Poggle-the-Lesser1.jpg",
    "Luminara Unduli": "Luminara-Unduli1.jpeg",
    "Barriss Offee": "Barriss-Offee1.jpeg",
    "Dormé": "Dormé2.jpg",
    "Dooku": "Dooku1.jpeg",
    "Bail Prestor Organa": "Bail-Prestor-Organa1.jpg",
    "Jango Fett": "Jango-Fett1.jpeg",
    "Zam Wesell": "Zam-Wesell1.jpeg",
    "Dexter Jettster": "Dexter-Jettster3.jpg",
    "Lama Su": "Lama-Su1.jpg",
    "Taun We": "Taun-We2.jpg",
    "Jocasta Nu": "Jocasta-Nu1.jpeg",
    "R4-P17": "R4-P17_2.jpg",
    "Wat Tambor": "Wat-Tambor1.jpg",
    "San Hill": "San-Hill3.jpg",
    "Shaak Ti": "Shaak-ti1.jpeg",
    "Grievous": "Grievous1.jpeg",
    "Tarfful": "Tarfful2.jpg",
    "Raymus Antilles": "Raymus-Antilles1.jpg",
    "Sly Moore": "Sly-Moore1.jpeg",
    "Tion Medon": "Tion-Medon1.jpeg"
};

function getCharacterImage(name) {
    // Check if the character name exists in the characterImages object
    if (name in characterImages) {
        // If found, return the corresponding image URL
        return characterImages[name];
    } else {
        // If not found, return null
        return null;
    }
};
