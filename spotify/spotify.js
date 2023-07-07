// Song List
let songs=[
    "songs/Mere-Samne-Wali-Karan-Nawani.mp3",
    "songs/new_192_Saari Ki Saari 2.0 - Darshan Raval.mp3",
    "songs/Aankhon Se Batana(PagalWorld.com.se).mp3",
    "songs/Aise-Kyun-(Ghazal-Version)(PagalWorldl).mp3",
    "songs/Mann-Bharryaa-2.0(PagalWorldl).mp3",
    "songs/Memories---Maroon-5-320-(PagalWorld).mp3",
    "songs/Dandelions(PaglaSongs).mp3",
    "songs/Night-Changes(PagalWorld).mp3",
    "songs/Louis_Tomlinson_-_Two_of_Us_(Jesusful.com).mp3",
    "songs/Khalid_Ft_Halsey_-_Eastside.mp3"
]

// Playlist Info
let numberOfSongs=document.getElementById('songsAndDur');
numberOfSongs.innerHTML=`${songs.length} songs &#183; Utsav Shah!`


// All other Variables Declaration : Accessing DOM Elements
let play=document.getElementById('play'); // Play button
let progressBar=document.getElementById('progressbar'); // Song Progress Bar
let nextSong=document.getElementById('next'); // Next button
let prevSong=document.getElementById('previous'); // Previous Button
let songNumber=document.querySelectorAll('.srno'); // Song Number in list
let songBars=document.getElementsByClassName('song'); // Whole Song Div
let volumeControl=document.getElementById('soundcontrol'); // volumecontroller
let shuffle=document.getElementById('shuffle'); // shuffle button
let loop=document.getElementById('loop'); // loop button


let songPreview=document.getElementsByClassName('preview'); // Preview of song 

let songPreviewArr=Array.from(songPreview);
document.querySelector('.songInfo').innerHTML=songPreviewArr[0].innerHTML; // Display of current song in Play area : default first song

let check=[new Audio(songs[0])]; // First song will be played by default if play button is clicked

songPreviewArr.forEach((e)=>{
    e.addEventListener('click',()=>{
        let currentSong=document.querySelector('.songInfo');
        currentSong.innerHTML=e.innerHTML; // Updating the playArea current song info

        if(check.length==1){
            check[0].pause();
            check=[];
        } // If a song is played currently and another song is clicked, previous song will be paused and check array will be empty to store new song
        
        let songAccess=songs[songPreviewArr.indexOf(e)]; // accessing a song corresponding to clicked SongPreview in main list
        let song=new Audio(songAccess); // Creating an audio element for that song
        song.play(); // Playing the song
        play.innerHTML=`<img src="icons/icons8-pause-50.png" alt="">`; // Changing play button to pause as song is played
        check.push(song); // Updating the check array: It means, in check there will be one song always

        updateProgress(); // Function to update Progress Bar
        
    })

    
})

// To get play icon when mouse over a particular songbar in main list
let songBarsArr=Array.from(songBars)
songBarsArr.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        songNumber[songBarsArr.indexOf(e)+1].innerHTML=`<div class="icon control" id="play">
        <img src="icons/icons8-play-50.png" alt=""></div>`;

    })
    e.addEventListener('mouseout',()=>{
        songNumber[songBarsArr.indexOf(e)+1].innerHTML=`${songBarsArr.indexOf(e)+1}`;

    })
})

// Pausing and Playing the song
play.addEventListener('click',()=>{

    if(check[0].paused){
        check[0].play();
        play.innerHTML=`<img src="icons/icons8-pause-50.png" alt="">`;
    }
    else{
        check[0].pause();
        play.innerHTML=`<img src="icons/icons8-play-50.png" alt="">`;

    }
    updateProgress();
})

// Event listener to next button
nextSong.addEventListener('click',()=>{
        if(shuffle.style.backgroundColor=='green'){
            shufflePlay(); // If shuffle is on, then next button will also play random song
        }
        else{
            
            let currSong=check[0].getAttribute('src'); // getting current song address
            let currIndex=songs.indexOf(currSong); // to get the index of current song in song list
            currIndex++; // increasing index by one to play next song
            changeSong(currIndex); // changing song function
        }
})

// Event listener to previous button

prevSong.addEventListener('click',()=>{
    if(shuffle.style.backgroundColor=='green'){
            shufflePlay(); // If shuffle is on, then previous button will also play random song
    }
    else{
        let currSong=check[0].getAttribute('src');
        let currIndex=songs.indexOf(currSong);
        currIndex--;
        changeSong(currIndex);
    }
   
})

// adding change event listener to volumecontroller to change the volume of song
volumeControl.addEventListener('change',()=>{
    check[0].volume=(volumeControl.value)/100;

})

// shuffle ON/OFF
shuffle.addEventListener('click',()=>{
    
    if(shuffle.style.backgroundColor=='transparent'){
        shuffle.style.backgroundColor='green';
    }
    else{
        shuffle.style.backgroundColor='transparent';
    }

})

// loop ON/OFF
loop.addEventListener('click',()=>{
    if(loop.style.backgroundColor=='transparent'){
        loop.style.backgroundColor='green';
    }
    else{
        loop.style.backgroundColor='transparent';
    }
})

// Updating the progressbar using updateProgress function
function updateProgress(){

    if(check.length!=0){
        // Added time update event listener on played song 
        check[0].addEventListener('timeupdate',()=>{
            // to update the progress bar
            progressBar.value=parseInt((check[0].currentTime/check[0].duration) * 100);

            // at the end of the song
            if(check[0].currentTime==check[0].duration){
                // if shuffle and loop both are on, song will be looped
                if(shuffle.style.backgroundColor=='green' && loop.style.backgroundColor=='green' ){
                    loopPlay();
                }
                
                // if only shuffle is on: songs will be played in shuffle manner
                else if(shuffle.style.backgroundColor=='green'){
                    shufflePlay();
                }

                // if loop is on: current song will be loop until user change the song
                else if(loop.style.backgroundColor=='green'){
                    loopPlay();
                }

                // if nothing is selected, next song will be played automatically
                else{
                    autoPlay();
                }
            }
        })
    }

    // seeking the song according to progress bar value
    progressBar.addEventListener('change',()=>{
        check[0].currentTime=parseInt((progressBar.value * check[0].duration)/100);
        
    })

}

// Change song function taking index of song
function changeSong(index){
    let currentSong=document.querySelector('.songInfo');
    currentSong.innerHTML=songPreviewArr[index].innerHTML; // updating the playBox song info
    check[0].pause(); //pausing the current song
    check=[]; // emptying the container
    let song=new Audio(songs[index]); // creating a new song item according to provided index
    song.play(); // playing the song
    check.push(song); // updating check array with the current song
    progressBar.value=0; // initiallizing progressbar to again zero
    updateProgress(); // updating progressbar

    //updating play pause button
    if( play.innerHTML==`<img src="icons/icons8-play-50.png" alt="">`){
        play.innerHTML=`<img src="icons/icons8-pause-50.png" alt="">`
    }
}


// Autoplay function to play the next song automatically

function autoPlay(){
    let currSong=check[0].getAttribute('src');
    let currIndex=songs.indexOf(currSong);
    currIndex++;
    changeSong(currIndex);
}

// shuffle play the songs from the list by providing custom index to changesong function using Math.random
function shufflePlay(){
    let currIndex=Math.round(Math.random()*songs.length);
    changeSong(currIndex);
}

// looping the current song using changesong function by passing same index as of current song
function loopPlay(){
    let currSong=check[0].getAttribute('src');
    let currIndex=songs.indexOf(currSong);
    changeSong(currIndex);
}


