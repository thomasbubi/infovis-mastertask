createPie(
    data.evidenceSet1.phase.map(function(d) { return d.value; }),
    data.evidenceSet1.phase.map(function(d) { return d.label; }),
    400
);

createDivergingBar( 
    data.evidenceSet1.localRelevance[0].map(
        function( d ) { 
            return d.value;
        }
    ),
    250,
    150,
    100,
    20
);

/*
//maybe useful later
data.evidenceSet1.localRelevance[0].filter(
    function( elem ) { 
        if(typeof elem.value == 'number') return elem.value;
    }
)
*/

createBarHorizontal(
    data.evidenceSet1.mucus.map(function(d) { return d.value; }),
    data.evidenceSet1.mucus.map(function(d) { return d.label; }),
    300,
    200,
    20,
);

createBarHorizontal(
    data.evidenceSet1.basalBodyTemperature.map(function(d) { return d.value; }),
    data.evidenceSet1.basalBodyTemperature.map(function(d) { return d.label; }),
    300,
    140,
    20,
);

createBarHorizontal(
    data.evidenceSet1.bleeding.map(function(d) { return d.value; }),
    data.evidenceSet1.bleeding.map(function(d) { return d.label; }),
    300,
    200,
    20,
);

