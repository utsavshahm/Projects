let hamnav=document.getElementsByClassName('container')[0];

let lines=document.querySelectorAll('.line');

let count=0;
hamnav.addEventListener('click',()=>{

    if(count==0){
        lines[0].style.transform='translateY(60px) rotate(45deg)';
        lines[1].style.transform='translateX(-279px)';
        lines[1].style.opacity=0;
        lines[2].style.transform='translateY(-60px) rotate(-45deg)' ;
        lines.forEach((e)=>{
            e.style.backgroundColor='#ed8532d4';
        })

        count++;
    }
    else{
        lines[0].style.transform='translateY(0px) rotate(0deg)';
        lines[1].style.transform='translateX(0px)';
        lines[1].style.opacity=1;
        lines[2].style.transform='translateY(0px) rotate(0deg)' ;
        lines.forEach((e)=>{
            e.style.backgroundColor='white';
        })
        count--;
        
    }
    

})