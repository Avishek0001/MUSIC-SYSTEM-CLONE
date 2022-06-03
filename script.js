const music = new Audio('songs/1.mp3');


const songs = [
    {
        id:'1',
        songName:` Night Changes <br>
        <div class="subtitle">One Direction</div>` ,
        poster:"SongsImage/1.jpg",
    },
    {
        id:'2',
        songName:` GRATEFULL <br>
        <div class="subtitle">Neffex</div>` ,
        poster:"SongsImage/2.jpg" ,
        // left songslist
    },
    {
        id:'3',
        songName:` Heat Waves <br>
        <div class="subtitle">Glass Animals</div>` ,
        poster:"SongsImage/3.jpg" ,
        // left songslist
    },
    {
        id:'4',
        songName:` Faded <br>
        <div class="subtitle">Alan Walker</div>` ,
        poster:"SongsImage/4.jpg" ,
        // left songslist
    },
        {
        id:'5',
        songName:` Humsafar <br>
        <div class="subtitle">Akhil Sachdeva</div>` ,
        poster:"SongsImage/5.jpg" ,
        // left songslist
    },
    {
        id:'6',
        songName:` RAAZ <br>
        <div class="subtitle">Arijit Singh</div>` ,
        poster:"SongsImage/6.jpg" ,
        // left songslist
    },
    {
        id:'7',
        songName:` IK KAHANI <br>
        <div class="subtitle">Gajendra Verma</div>` ,
        poster:"SongsImage/7.jpg" ,
        // left songslist
    },
    {
        id:'8',
        songName:` Chogada <br>
        <div class="subtitle">Darshan Raval</div>` ,
        poster:"SongsImage/8.jpg", 
        
    },
    {
        id:'9',
        songName:` Tu hi Yaar Mera <br>
        <div class="subtitle">Arijit Singh</div>` ,
        poster:"SongsImage/9.jpg" ,

    },
    {
        id:'10',
        songName:` Kheni Hundi C <br>
        <div class="subtitle">AP Dhillon</div>` ,
        poster:"SongsImage/10.jpg" ,
        
    },
    {
        id:'11',
        songName:` Mehrma <br>
        <div class="subtitle">Darshan Raval</div>` ,
        poster:"SongsImage/11.jpg", 
        
    },
    {
        id:'12',
        songName:` Meherbani <br>
        <div class="subtitle">Arko</div>` ,
        poster:"SongsImage/12.jpg" ,
        // left songslist
    },
    
    
    {   id:'13',
        songName:` Shiddat<br>
        <div class="subtitle">Mana Bhardwaj</div>` ,
        poster:"SongsImage/13.jpg" ,
        // left songslist
    },

    {   id:'14',
    songName:` Pasoori<br>
    <div class="subtitle">Mana Coke Studio</div>` ,
    poster:"SongsImage/14.jpg" ,
    // left songslist
},
    {   id:'15',
    songName:` Abhi Abhi<br>
    <div class="subtitle">Jism 2</div>` ,
    poster:"SongsImage/15.jpg" ,
    // left songslist
}
    
,
    {   id:'16',
    songName:` Chidiya<br>
    <div class="subtitle">Dark Music</div>` ,
    poster:"SongsImage/16.jpg" ,
    // left songslist
}
    


]
Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
})

// search data 

let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
const {id,songName,poster}= element;
let card = document.createElement('a');
card.classList.add('card');
card.href='#' + id;
card.innerHTML=`               
        <img src="${poster}" alt="">
        <div class="content">
           ${songName}
        </div>`;
        search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for(let i=0;i<items.length;i++){
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if(text_value.toUpperCase().indexOf(input_value)>-1){
            items[i].style.display = "flex";
        }else{
            items[i].style.display = "none";
        }
        if(input.value ==0){
            search_result.style.display='none';
        }
        else{
            
            search_result.style.display='';
        }
    }
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
// let songItem = document.getElementsByClassName('songItem');

// songItem.addEventListener('click',()=>{
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
}
    else {
music.pause();
masterPlay.classList.add('bi-play-fill');
masterPlay.classList.remove('bi-pause-fill');
wave.classList.remove('active2');

}
})

    


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
     
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
        
    })
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background ="rgb(105,105,170,0)";
    })
}

let index = 0;

let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src=`songs/${index}.mp3`;
        poster_master_play.src=`SongsImage/${index}.jpg`;
        music.play();
    let song_title = songs.filter((ele)=>{
    return ele.id == index;
})

song_title.forEach(ele=>{
    let {songName} = ele;
    title.innerHTML=songName;
})

masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');

// music.addEventListener('ended',()=>{
//     masterPlay.classList.add('bi-play-fill');
//     masterPlay.classList.remove('bi-pause-fill');
//     wave.classList.remove('active2');
// })
makeAllBackgrounds();
Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background ="rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_durr = music.duration;

    let min = Math.floor(music_durr/60);
    let sec = Math.floor(music_durr%60);

    if(sec<10){
        sec=`0${sec}`;
    }

    currentEnd.innerHTML = `${min}:${sec}`;

    
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    
    if(sec1<10){
        sec1 =`0${sec1}`;
    }
    
    currentStart.innerText = `${min1} :${sec1}`;

    let progessbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progessbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime= seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    // masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index ++;
    music.src=`songs/${index}.mp3`;
    poster_master_play.src=`SongsImage/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })
    
    song_title.forEach(ele=>{
        let {songName} = ele;
        title.innerHTML=songName;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background ="rgb(105,105,170,0)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');

let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
if(vol.value==0){
    vol_icon.classList.remove('bi-volume-down');
    vol_icon.classList.add('bi-volume-mute');
    vol_icon.classList.remove('bi-volume-up');
}
if(vol.value>0){
    vol_icon.classList.add('bi-volume-down');
    vol_icon.classList.remove('bi-volume-mute');
    vol_icon.classList.remove('bi-volume-up');
}
if(vol.value> 50){
    vol_icon.classList.remove('bi-volume-down');
    vol_icon.classList.remove('bi-volume-mute');
    vol_icon.classList.add('bi-volume-up');
}

let vol_a = vol.value;
vol_bar.style.width = `${vol_a}%`;
vol_dot.style.left = `${vol_a}%`;
music.volume = vol_a/100;

})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`songs/${index}.mp3`;
    poster_master_play.src=`SongsImage/${index}.jpg`;
    music.play();
let song_title = songs.filter((ele)=>{
return ele.id == index;
})

song_title.forEach(ele=>{
let {songName} = ele;
title.innerHTML=songName;
})

makeAllPlays();
document.getElementById(`${index}`).classList.remove('bi-play-fill');
document.getElementById(`${index}`).classList.add('bi-pause-fill');
makeAllBackgrounds();
Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background ="rgb(105, 105, 170, .1)";

})

next.addEventListener('click',()=>{
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src=`songs/${index}.mp3`;
    poster_master_play.src=`SongsImage/${index}.jpg`;
    music.play();
let song_title = songs.filter((ele)=>{
return ele.id == index;
})

song_title.forEach(ele=>{
let {songName} = ele;
title.innerHTML=songName;
})

makeAllPlays();
document.getElementById(`${index}`).classList.remove('bi-play-fill');
document.getElementById(`${index}`).classList.add('bi-pause-fill');
makeAllBackgrounds();
Array.from(document.getElementsByClassName('songItem'))[`${index}`].style.background ="rgb(105, 105, 170, .1)";

})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click' ,()=>{
    pop_song.scrollLeft -=330;
})
right_scroll.addEventListener('click' ,()=>{
    pop_song.scrollLeft +=330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click',()=>{
    item.scrollLeft -=330;
})
right_scrolls.addEventListener('click',()=>{
    item.scrollLeft +=330;
})

