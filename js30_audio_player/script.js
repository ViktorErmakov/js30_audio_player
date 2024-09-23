
let playNum = 0;
const content = [];
contentAudio = {
    audioSrc: 'assets/audio/beyonce.mp3',
    audioArtist: 'Beyonce',
    audioSong: "Don't Hurt Yourself",
    imgSrc: 'assets/img/dontstartnow.png'
}
content.push(contentAudio);

contentAudio = {
    audioSrc: 'assets/audio/dontstartnow.mp3',
    audioArtist: 'Dua Lipa',
    audioSong: "Don't Start Now",
    imgSrc: 'assets/img/lemonade.png'
}
content.push(contentAudio);

contentAudio = {
    audioSrc: 'assets/audio/Руки Вверх - Какая ты.mp3',
    audioArtist: 'Руки Вверх',
    audioSong: "Какая ты",
    imgSrc: 'assets/img/RukiVverh_1.jpeg'
}
content.push(contentAudio);

contentAudio = {
    audioSrc: 'assets/audio/Руки Вверх - Расскажи мне.mp3',
    audioArtist: 'Руки Вверх',
    audioSong: "Расскажи мне",
    imgSrc: 'assets/img/RukiVverh_2.jpeg'
}
content.push(contentAudio);

const wrapper = document.querySelector('.wrapper');
const playButton = document.querySelector('.PlayPause');
const nextButton = document.querySelector('.forward');
const prevButton = document.querySelector('.backward');
const blurBlock = document.querySelector('.blur');
let length = document.querySelector('.length');
let time = document.querySelector('.time');
let audioArtist = document.querySelector('h1');
let audioSong = document.querySelector('.title');
let image = document.querySelector('.picture');
const progressBar = document.querySelector('#progress-bar');
const audio = new Audio();
let piece = 0;



function playAudio() {
    playButton.classList.toggle('isPlay');

    if (playButton.classList.contains('isPlay')) {
        audio.currentTime = 0;
        // length.textContent = convertTime(audio.duration);
        // progressBar.max = parseInt(audio.duration);

        setInterval(() => {
            time.textContent = convertTime(audio.currentTime);
            piece = audio.currentTime / audio.duration;
            
            
        }, 1000);

        audio.play();
    } else {
        audio.pause();
    }
}

function playNext() {

    playButton.classList.remove('isPlay');
    if (playNum === content.length - 1) {
        playNum = 0;
    } else {
        playNum += 1;
    };

    playContinue();

}

function playPrev() {

    playButton.classList.remove('isPlay');
    if (playNum === 0) {
        playNum = content.length - 1;
    } else {
        playNum -= 1;
    }

    playContinue();

}

function playContinue() {

    fillContent();

    image.classList.add('animation');
    setTimeout(() => {
        image.src = `${content[playNum].imgSrc}`;
        image.classList.remove('animation');
    }, 1000);

    playAudio();

}

function fillContent() {

    audio.src = content[playNum].audioSrc;
    audioSong.textContent = content[playNum].audioSong;
    audioArtist.textContent = content[playNum].audioArtist;
    wrapper.style.backgroundImage = `url(${content[playNum].imgSrc})`;

}

function progressBarClick() {
    console.log('progressBar.textContent')
}

function convertTime(inputSeconds) {
    let sec = Math.floor(inputSeconds % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    let min = Math.floor(inputSeconds / 60);
    return min + ':' + sec;
}

playButton.addEventListener('click', playAudio);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
progressBar.addEventListener('click', progressBarClick);
image.src = `${content[playNum].imgSrc}`;
fillContent();

audio.addEventListener("loadeddata", () => {
        // console.log(audio.duration);
        // console.log(new Date(0, 0, 0, 0, 0, 0, audio.duration));
        // console.log(new Date(0, 0, 0, 0, 0, 0, audio.duration).getMinutes());
        length.textContent = convertTime(audio.duration);
    }, false
);
