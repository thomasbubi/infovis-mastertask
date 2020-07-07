var radioButtons = document.querySelectorAll('input[type="radio"]');

for(var i=0; i<radioButtons.length; i++){
    
    radioButtons[i].onchange = function(e){
        var value = e.target.value;
        eraseCharts();
        createCharts( value, 0 );
    }
}

document.querySelectorAll('#local-relevance-buttons > button').forEach(function(button){
    var index = button.dataset['index'];
    button.addEventListener('click', function(){
        eraseCharts();
        createCharts( currentEvidenceSet, index );
    })
});