var dataColors = [
    '#FF8000',
    '#9eb9f3',
    '#86c45e',
    '#f6cf71'
];

var colors = [
    '#E1F5A9',
    '#E6E0F8'
]

var currentEvidenceSet = -1;

var data = {
    evidenceSet1: {
        basalBodyTemperature: [
            { label: 'Lower Range', value: 100,},
            { label: 'Higher Range', value: 0,},
            //{ label: 'globalRelevance', value: 100},
        ],

        globalRelevance:  [
            { label: 'Basal Body Temperature', value: 100 },
            { label: 'Mucus', value: 0 },
        ],

        mucus: [
            { label: 's1', value: 57.5 },
            { label: 's2', value: 7.3 },
            { label: 's3', value: 2.5 },
            { label: 's4', value: 32.7 },
        ],

        phase: [
            { label: 'Menstruation', value: 52.5 },
            { label: 'Follicular', value: 42.5 },
            { label: 'Ovulation', value: 5 },
            { label: 'Luteal', value: 0 }
        ],
        bleeding: [
            { label: 'Menses', value: 52.5,},
            { label: 'No', value: 47.5},
        ],
        localRelevance: [//is an array because some evidence sets have multiple assignments
            [
                { label:'Menstruation', value: 18.63 },
                { label:'Follicular', value: 15.08 },
                { label:'Ovulation', value: 1.77 },
                { label:'Luteal', value: -35.47 }
            ]
        ],
        localRelevanceLabels: [
            [
                { label:'type', value: 'Basal Body Temperature' },
                { label:'range', value: 'lower range' },
            ]
        ]
    },
    evidenceSet2: {
        basalBodyTemperature: [
            { label: 'Lower Range', value: 0,},
            { label: 'Higher Range', value: 100,},
        ],

        globalRelevance:  [
            { label: 'Basal Body Temperature', value: 100 },
            { label: 'Mucus', value: 0 },
        ],

        mucus: [
            { label: 's1', value: 89.8 },
            { label: 's2', value: 0.4 },
            { label: 's3', value: 8 },
            { label: 's4', value: 1.8 },
        ],

        phase: [
            { label: 'Menstruation', value: 0 },
            { label: 'Follicular', value: 0 },
            { label: 'Ovulation', value: 0 },
            { label: 'Luteal', value: 100 }
        ],
        bleeding: [
            { label: 'Menses', value: 0,},
            { label: 'No', value: 100},
        ],
        localRelevance: [
            [
                { label:'Menstruation', value: -33.86 },
                { label:'Follicular', value: -27.41 },
                { label:'Ovulation', value: -3.23 },
                { label:'Luteal', value: 64.5 }
            ]
        ],
        localRelevanceLabels: [
            [
                { label:'type', value: 'Basal Body Temperature' },
                { label:'range', value: 'higher range' },
            ]
        ]
    },
    evidenceSet3: {
        basalBodyTemperature: [
            { label: 'Lower Range', value: 100,},
            { label: 'Higher Range', value: 0,},
        ],

        globalRelevance:  [
            { label: 'Basal Body Temperature', value: 45 },
            { label: 'Mucus', value: 55 },
        ],

        mucus: [
            { label: 's1', value: 0 },
            { label: 's2', value: 0 },
            { label: 's3', value: 100 },
            { label: 's4', value: 0 },
        ],

        phase: [
            { label: 'Menstruation', value: 0.2 },
            { label: 'Follicular', value: 23 },
            { label: 'Ovulation', value: 76.8 },
            { label: 'Luteal', value: 0 }
        ],
        bleeding: [
            { label: 'Menses', value: 0.2,},
            { label: 'No', value: 99.8},
        ],
        localRelevance: [
            [
                { label:'Menstruation', value: 0.13 },
                { label:'Follicular', value: 14.7 },
                { label:'Ovulation', value: 49 },
                { label:'Luteal', value: -63.82 }
            ],
            [
                { label:'Menstruation', value: -52.29 },
                { label:'Follicular', value: -19.47 },
                { label:'Ovulation', value: 71.75 },
                { label:'Luteal', value: 0.01 }
            ]
        ],
        localRelevanceLabels: [
            [
                { label:'type', value: 'Basal Body Temperature' },
                { label:'range', value: 'lower range' },
            ],
            [
                { label:'type', value: 'Mucus' },
                { label:'range', value: 'S3' },
            ]
        ]
    },
    evidenceSet4: {
        basalBodyTemperature: [
            { label: 'Lower Range', value: 100,},
            { label: 'Higher Range', value: 0,},
        ],

        globalRelevance:  [
            { label: 'Basal Body Temperature', value: 20 },
            { label: 'Mucus', value: 80 },
        ],

        mucus: [
            { label: 's1', value: 0 },
            { label: 's2', value: 0 },
            { label: 's3', value: 0 },
            { label: 's4', value: 100 },
        ],

        phase: [
            { label: 'Menstruation', value: 0 },
            { label: 'Follicular', value: 94.1 },
            { label: 'Ovulation', value: 5.9 },
            { label: 'Luteal', value: 0 }
        ],
        bleeding: [
            { label: 'Menses', value: 0,},
            { label: 'No', value: 100},
        ],
        localRelevance: [
            [
                { label:'Menstruation', value: 0 },
                { label:'Follicular', value: 2.69 },
                { label:'Ovulation', value: 0.17 },
                { label:'Luteal', value: -2.86 }
            ],
            [
                { label:'Menstruation', value: -52.48 },
                { label:'Follicular', value: 51.6 },
                { label:'Ovulation', value: 0.88 },
                { label:'Luteal', value: -0.01 }
            ]
        ],
        localRelevanceLabels: [
            [
                { label:'type', value: 'Basal Body Temperature' },
                { label:'range', value: 'lower range' },
            ],
            [
                { label:'type', value: 'Mucus' },
                { label:'range', value: 's4' },
            ]
        ]
    }
};