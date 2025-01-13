define(['pipAPI', 'pipScorer'], function(APIConstructor, Scorer) {
    var API = new APIConstructor();

    return API.script({
        settings: {
            canvas: {maxWidth: 800}, // Breite des Experimentfensters
        },
        categories: {
            target: {
                name: 'Technologie', // Name der Zielkategorie
                stimulusMedia: [ // Begriffe für Technologie
                    {word: 'Smartphone'},
                    {word: 'Tablet'},
                    {word: 'Alexa'},
                    {word: 'Smart Home'},
                    {word: 'Smartwatch'},
                    {word: 'Sprachassistent'},
                    {word: 'Staubsaugroboter'},
                    {word: 'Smarter Fernseher'}
                ],
                stimulusCss: {color: '#31B404', 'font-size': '2em'} // Design-Anpassungen
            },
            attribute1: {
                name: 'Fortschritt', // Positive Attribute
                stimulusMedia: [
                    {word: 'modern'},
                    {word: 'praktisch'},
                    {word: 'hilfreich'},
                    {word: 'effizient'},
                    {word: 'innovativ'},
                    {word: 'zukunftsorientiert'},
                    {word: 'komfortabel'},
                    {word: 'inspirierend'}
                ],
                stimulusCss: {color: '#0000FF', 'font-size': '2em'}
            },
            attribute2: {
                name: 'Überwachung', // Negative Attribute
                stimulusMedia: [
                    {word: 'unsicher'},
                    {word: 'überwachend'},
                    {word: 'gefährlich'},
                    {word: 'kontrollierend'},
                    {word: 'invasiv'},
                    {word: 'manipulierend'},
                    {word: 'unberechenbar'},
                    {word: 'riskant'}
                ],
                stimulusCss: {color: '#FF0000', 'font-size': '2em'}
            }
        },
        trials: [
            {
                input: [
                    {handle: 'left', on: 'keypressed', key: 'e'},
                    {handle: 'right', on: 'keypressed', key: 'i'}
                ],
                layout: [
                    {media: {word: 'Drücke E für Fortschritt oder Technologie'}, location: {left: 5, top: 10}},
                    {media: {word: 'Drücke I für Überwachung oder Technologie'}, location: {right: 5, top: 10}}
                ],
                interactions: [
                    {conditions: [{type: 'inputEquals', value: 'left'}], actions: [{type: 'endTrial', correct: true}]},
                    {conditions: [{type: 'inputEquals', value: 'right'}], actions: [{type: 'endTrial', correct: false}]}
                ]
            }
        ]
    });
});
