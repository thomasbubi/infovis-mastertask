function eraseCharts(){
    document.querySelector('#area1').innerHTML = '';
    document.querySelector('#area2').innerHTML = '';
    document.querySelector('#area3').innerHTML = '';
    document.querySelector('#area4').innerHTML = '';
}

function createCharts( number, localRelevanceNumber ){
    
    currentEvidenceSet = number;
    
    createPie(
        '#area3',
        data['evidenceSet' + number].phase.map(function(d) { return d.value; }),
        data['evidenceSet' + number].phase.map(function(d) { return d.label; }),
        400,
        dataColors
    );

    createDivergingBar( 
        data['evidenceSet' + number].localRelevance[localRelevanceNumber].map(
            function( d ) { 
                return d.value;
            }
        ),
        250,
        150,
        100,
        20
    );
    
    if( data['evidenceSet' + number].localRelevance.length === 1 ){
        document.querySelector('#local-relevance-buttons').style.display='none';
    } else {
        document.querySelector('#local-relevance-buttons').style.display='block';
        document.querySelector('#local-relevance-buttons > button:first-child').innerHTML = data['evidenceSet' + number].localRelevanceLabels[0][0].value;
        document.querySelector('#local-relevance-buttons > button:last-child').innerHTML = data['evidenceSet' + number].localRelevanceLabels[1][0].value;
    }

    createBarHorizontal(
        data['evidenceSet' + number].basalBodyTemperature.map(function(d) { return d.value; }),
        data['evidenceSet' + number].basalBodyTemperature.map(function(d) { return d.label; }),
        300,
        140,
        20,
        '#E1F5A9',
        title01 = 'Basal Body Temperature'
    );

    createBarHorizontal(
        data['evidenceSet' + number].mucus.map(function(d) { return d.value; }),
        data['evidenceSet' + number].mucus.map(function(d) { return d.label; }),
        300,
        200,
        20,
        '#E6E0F8',
        title02 = 'Mocus'
    );

    createBarHorizontal(
        data['evidenceSet' + number].bleeding.map(function(d) { return d.value; }),
        data['evidenceSet' + number].bleeding.map(function(d) { return d.label; }),
        300,
        200,
        20,
        '#F8E0E6',
        title03 = 'Bleeding'
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
createCharts( 1, 0 );
