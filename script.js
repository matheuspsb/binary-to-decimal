var d = document.querySelector('#d');
var b = document.querySelector('#b');

b.onclick = function(){
    var vl = document.querySelector('#bi').value;
    document.querySelector('.d').innerHTML = parseInt(vl, 2 ).toString(10)
}

d.onclick = function(){
    
    var vl = document.querySelector('#di').value;
    document.querySelector('.b').innerHTML = ( vl>>>0 ).toString(2)
}