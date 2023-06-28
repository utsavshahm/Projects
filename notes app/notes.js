function newNote(){
    const content= document.getElementById('note-take');
    content.innerText='';
    let titleOfNote=document.createElement('input');
    titleOfNote.setAttribute('type','text');
    titleOfNote.setAttribute('value','Add a Title');
    const titleStyle={
        "border":0,
        "fontSize":'30px',
        "fontWeight":'bold',
        "width":'inherit',
        'background-color':'rgba(255, 255, 0, 0.266)'

    }
    
    Object.assign(titleOfNote.style,titleStyle);


    document.body.appendChild(titleOfNote);

}