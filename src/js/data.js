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
        phase: {
            menstruation: 52.5,
            follicular: 42.5,
            ovulation: 5,
            luteal: 0
        },
        bleeding: {
            yes: 52.5,
            no: 47.5
        },
        localRelevance: [//is an array because some evidence sets have multiple assignments
            {
                type: 'Basal Body Temperature',
                range: 'lower range',
                menstruation: 18.63,
                follicular: 15.08,
                ovulation: 1.77,
                luteal: -35.47
            }
        ]
    }/*,//just added one for now, so it's less work improving the structure of the objects
    evidenceSet2: {
        
    },
    evidenceSet3: {
        
    },
    evidenceSet4: {
        
    },*/
};

console.log(data)