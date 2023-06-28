document.addEventListener("DOMContentLoaded", function(){


    var navitems=document.getElementsByClassName('nav');
    
    let navArray=Array.from(navitems);
    
    function getIndex(element,array){
    
        for(let i=0;i<array.length;i++){
                if(array[i]===element){
                    return i;
                }
        }
    
    }

    function showImg(index){

        let imgList=document.querySelectorAll('.scrollimg');

        for(let i=0;i<imgList.length;i++){

            if(i==index){
                imgList[i].style.display='flex';
            }
            else{
                imgList[i].style.display='none';

            }
        }
        

    }
    
    function showNav(e){
        let index=getIndex(e,navArray);
        let box=document.getElementById(`${e.innerHTML}`);
        box.style.left=(`${155+ index*100}px`);
        box.style.display='flex';
    }
    
    function hideNav(e){
        let hideIndex=getIndex(e,navArray);
        let item=document.getElementById(`${e.innerHTML}`);
        item.style.display='none';
    }
    
    function hideNavOther(e){
        for(let i=0;i<navArray.length;i++){
            let otheritem=document.getElementById(`${navArray[i].innerHTML}`);
            if(navArray[i]!=e && otheritem.style.display=='flex'){
                otheritem.style.display='none';
                
            }
        }
    }
    
    navArray.forEach((e)=>{
        e.addEventListener('mouseover',()=>{
            
            let navIt=document.getElementById(`${e.innerHTML}`)
            if(navIt.style.display!=='flex'){
                
                showNav(e);
                hideNavOther(e);
            }
            else{
                hideNav(e);
            }
        })
    })

    
    let imgbtn=document.querySelectorAll('.circles');

    imgbtn.forEach((e)=>{
        e.addEventListener('mouseover',()=>{
            let imgIndex=getIndex(e,imgbtn);
            showImg(imgIndex);

        })
    })

    let counter=0;
    let searchbox=document.getElementById('searchbox');
    let inputbox=document.getElementById('inputbtn');
    searchbox.addEventListener('click',()=>{
        if(counter==0){
            searchbox.style.left='50px';
            inputbox.style.display='flex';
            counter++;

        }
        else{
            searchbox.style.left='110px';
            inputbox.style.display='none';
            counter--;
        }
    })






})
