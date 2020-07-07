var radioButtons = document.querySelectorAll('input[type="radio"]');

for(var i=0; i<radioButtons.length; i++){
    
    radioButtons[i].onchange = function(e){
        var value = e.target.value;
    }
}