function eraseCharts(){
    document.querySelector('#area1').innerHTML = '';
    document.querySelector('#area2').innerHTML = '';
    document.querySelector('#area3').innerHTML = '';
    document.querySelector('#area4').innerHTML = '';
}

function createCharts( number ){
    createPie(
        '#area3',
        data['evidenceSet' + number].phase.map(function(d) { return d.value; }),
        data['evidenceSet' + number].phase.map(function(d) { return d.label; }),
        400,
        dataColors
    );

    createDivergingBar( 
        data['evidenceSet' + number].localRelevance[0].map(
            function( d ) { 
                return d.value;
            }
        ),
        250,
        150,
        100,
        20
    );

    createBarHorizontal(
        data['evidenceSet' + number].basalBodyTemperature.map(function(d) { return d.value; }),
        data['evidenceSet' + number].basalBodyTemperature.map(function(d) { return d.label; }),
        300,
        140,
        20,
        '#E1F5A9'
    );

    createBarHorizontal(
        data['evidenceSet' + number].mucus.map(function(d) { return d.value; }),
        data['evidenceSet' + number].mucus.map(function(d) { return d.label; }),
        300,
        200,
        20,
        '#E6E0F8'
    );

    createBarHorizontal(
        data['evidenceSet' + number].bleeding.map(function(d) { return d.value; }),
        data['evidenceSet' + number].bleeding.map(function(d) { return d.label; }),
        300,
        200,
        20,
        '#F8E0E6',
    );


    createPie(
        '#area2',
        data['evidenceSet' + number].globalRelevance.map(function(d) { return d.value; }),
        data['evidenceSet' + number].globalRelevance.map(function(d) { return d.label; }),
        150,
        colors
    );

}

//initial view
createCharts( 1 );