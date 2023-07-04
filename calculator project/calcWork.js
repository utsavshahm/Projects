let buttons=document.getElementsByClassName('content');
let str="";

let btnArr=Array.from(buttons);
btnArr.forEach((e)=>{
    e.addEventListener("click",()=>display(e));
})

var inputfill=document.getElementById('input');
function display(e){
    if(e.innerHTML=='AC'){
        inputfill.value='';
        str='';
    }
    else if(e.innerHTML=='Back'){
        str=str.substring(0,str.length-1);
        inputfill.value=str;
    }
    else if(e.innerHTML=='='){
        str=eval(str);
        inputfill.value=str;

    }
    else{
        str+=e.innerHTML;
        inputfill.value=str;

    }


    
}