var dataColors = [
    '#f6cf71',
    '#9eb9f3',
    '#86c45e',
    '#f89c74'
];

var data = {
    evidenceSet1: {
        basalBodyTemperature: {
            lowerRange: 100,
            higherRange: 0,
            globalRelevance: 100
        },
        mucus: {
            s1: 57.5,
            s2:7.3,
            s3:2.5,
            s4:32.7,
            globalRelevance: 0
        },
        phase: [
            { label: 'menstruation', value: 52.5 },
            { label: 'follicular', value: 42.5 },
            { label: 'ovulation', value: 5 },
            { label: 'luteal', value: 0 }
        ],
        bleeding: {
            yes: 52.5,
            no: 47.5
        },
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