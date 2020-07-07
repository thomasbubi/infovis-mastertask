var dataColors = [
    '#f6cf71',
    '#9eb9f3',
    '#86c45e',
    '#f89c74'
];

var data = {
    evidenceSet1: {
        basalBodyTemperature: [
            { label: 'lower Range', value: 100,},
            { label: 'higher Range', value: 0,},
            //{ label: 'globalRelevance', value: 100},
        ],
        basalBodyTemperatureGlobalRelevance: 100,
        mucus: [
            { label: 's1', value: 57.5 },
            { label: 's2', value: 7.3 },
            { label: 's3', value: 2.5 },
            { label: 's4', value: 32.7 },
        ],
        mucusGlobalRelevance: 0,
        phase: [
            { label: 'menstruation', value: 52.5 },
            { label: 'follicular', value: 42.5 },
            { label: 'ovulation', value: 5 },
            { label: 'luteal', value: 0 }
        ],
        bleeding: [
            { label: 'menses', value: 52.5,},
            { label: 'no', value: 47.5},
        ],
        localRelevance: [//is an array because some evidence sets have multiple assignments
            [
                //{ label:'type', value: 'Basal Body Temperature' },
                //{ label:'range', value: 'lower range' },
                { label:'menstruation', value: 18.63 },
                { label:'follicular', value: 15.08 },
                { label:'ovulation', value: 1.77 },
                { label:'luteal', value: -35.47 }
            ]
        ]
    },
    evidenceSet2: {
        basalBodyTemperature: [
            { label: 'lower Range', value: 0,},
            { label: 'higher Range', value: 100,},
        ],
        basalBodyTemperatureGlobalRelevance: 100,
        mucus: [
            { label: 's1', value: 89.8 },
            { label: 's2', value: 0.4 },
            { label: 's3', value: 8 },
            { label: 's4', value: 1.8 },
        ],
        mucusGlobalRelevance: 0,
        phase: [
            { label: 'menstruation', value: 0 },
            { label: 'follicular', value: 0 },
            { label: 'ovulation', value: 0 },
            { label: 'luteal', value: 100 }
        ],
        bleeding: [
            { label: 'menses', value: 0,},
            { label: 'no', value: 100},
        ],
        localRelevance: [
            [
                //{ label:'type', value: 'Basal Body Temperature' },
                //{ label:'range', value: 'higher range' },
                { label:'menstruation', value: -33.86 },
                { label:'follicular', value: -27.41 },
                { label:'ovulation', value: -3.23 },
                { label:'luteal', value: 64.5 }
            ]
        ]
    },
    evidenceSet3: {
        basalBodyTemperature: [
            { label: 'lower Range', value: 100,},
            { label: 'higher Range', value: 0,},
        ],
        basalBodyTemperatureGlobalRelevance: 45,
        mucus: [
            { label: 's1', value: 0 },
            { label: 's2', value: 0 },
            { label: 's3', value: 100 },
            { label: 's4', value: 0 },
        ],
        mucusGlobalRelevance: 0,
        phase: [
            { label: 'menstruation', value: 0.2 },
            { label: 'follicular', value: 23 },
            { label: 'ovulation', value: 76.8 },
            { label: 'luteal', value: 0 }
        ],
        bleeding: [
            { label: 'menses', value: 0.2,},
            { label: 'no', value: 99.8},
        ],
        localRelevance: [
            [
                //{ label:'type', value: 'Basal Body Temperature' },
                //{ label:'range', value: 'lower range' },
                { label:'menstruation', value: 0.13 },
                { label:'follicular', value: 14.7 },
                { label:'ovulation', value: 49 },
                { label:'luteal', value: -63.82 }
            ],
            [
                //{ label:'type', value: 'Mucus' },
                //{ label:'range', value: 's3' },
                { label:'menstruation', value: -52.29 },
                { label:'follicular', value: -19.47 },
                { label:'ovulation', value: 71.75 },
                { label:'luteal', value: 0.01 }
            ]
        ]
    },
    evidenceSet4: {
        basalBodyTemperature: [
            { label: 'lower Range', value: 100,},
            { label: 'higher Range', value: 0,},
        ],
        basalBodyTemperatureGlobalRelevance: 20,
        mucus: [
            { label: 's1', value: 0 },
            { label: 's2', value: 0 },
            { label: 's3', value: 0 },
            { label: 's4', value: 100 },
        ],
        mucusGlobalRelevance: 0,
        phase: [
            { label: 'menstruation', value: 0 },
            { label: 'follicular', value: 94.1 },
            { label: 'ovulation', value: 5.9 },
            { label: 'luteal', value: 0 }
        ],
        bleeding: [
            { label: 'menses', value: 0,},
            { label: 'no', value: 100},
        ],
        localRelevance: [
            [
                //{ label:'type', value: 'Basal Body Temperature' },
                //{ label:'range', value: 'lower range' },
                { label:'menstruation', value: 0 },
                { label:'follicular', value: 2.69 },
                { label:'ovulation', value: 0.17 },
                { label:'luteal', value: -2.86 }
            ],
            [
                //{ label:'type', value: 'Mucus' },
                //{ label:'range', value: 's4' },
                { label:'menstruation', value: -52.48 },
                { label:'follicular', value: 51.6 },
                { label:'ovulation', value: 0.88 },
                { label:'luteal', value: -0.01 }
            ]
        ]
    }
};