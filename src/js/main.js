/*createPie( 
    data.evidenceSet1.phase.map(function(d) { return d.value; }),
    data.evidenceSet1.phase.map(function(d) { return d.label; }),
    500
);*/

createDivergingBar( 
    data.evidenceSet1.localRelevance[0].map(
        function( d ) { 
            return d.value;
        }
    ),
    500,
    300,
    200,
    40
);

/*
//maybe useful later
data.evidenceSet1.localRelevance[0].filter(
    function( elem ) { 
        if(typeof elem.value == 'number') return elem.value;
    }
)
*/