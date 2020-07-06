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
        mucus: [
            { label: 's1', value: 57.5 },
            { label: 's2', value: 7.3 },
            { label: 's3', value: 2.5 },
            { label: 's4', value: 32.7 },
            //{ label: 'globalRelevance', value: 0 }
        ],
        phase: [
            { label: 'menstruation', value: 52.5 },
            { label: 'follicular', value: 42.5 },
            { label: 'ovulation', value: 5 },
            { label: 'luteal', value: 0 }
        ],
        bleeding: [
            { label: 'yes', value: 52.5,},
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
        ],
        localRelevanceTemp: [

        ]
    }/*,//just added one for now, so it's less work improving the structure of the objects
    evidenceSet2: {
        
    },
    evidenceSet3: {
        
    },
    evidenceSet4: {
        
    },*/
};