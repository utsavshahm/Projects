function switchNight(){

    var link=document.head.getElementsByTagName('link')[0];

    link.setAttribute('href','animation-night.css');
    
    
    



    let btn=document.getElementById('night-btn');
    btn.innerHTML='Switch to Light Mode';
    btn.setAttribute('onclick','switchLight()');
    

}

function switchLight(){
    var link=document.head.getElementsByTagName('link')[0];

    link.setAttribute('href','animation.css');
    
    let btn=document.getElementById('night-btn');
    btn.innerHTML='Switch to Night Mode';
    btn.setAttribute('onclick','switchNight()');

}