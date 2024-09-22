
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
const audio = document.querySelector('audio');
const playButton = document.querySelector('.PlayPause');
const nextButton = document.querySelector('.forward');
const prevButton = document.querySelector('.backward');
let audioArtist = document.querySelector('h1');
let audioSong = document.querySelector('.title');
let image = document.querySelector('.picture');

audio.src = content[playNum].audioSrc;
audioSong.textContent = content[playNum].audioSong;
audioArtist.textContent = content[playNum].audioArtist;
wrapper.style.backgroundImage = `url(${content[playNum].imgSrc})`;
image.src = `${content[playNum].imgSrc}`;
// image.style.backgroundImage = `url(${content[playNum].imgSrc})`;


function playAudio() {
    playButton.classList.toggle('isPlay');

    if (playButton.classList.contains('isPlay')) {
        // audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
}

function playNext() {
    
    playButton.classList.toggle('isPlay');
    if (playNum === content.length - 1) {
        playNum = 0;
    } else {
        playNum += 1;
    };
    audio.src = content[playNum].audioSrc;
    audioSong.textContent = content[playNum].audioSong;
    audioArtist.textContent = content[playNum].audioArtist;
    wrapper.style.backgroundImage = `url(${content[playNum].imgSrc})`;

    image.classList.add('animation');
    setTimeout(() => {
        image.src = `${content[playNum].imgSrc}`;
        image.classList.remove('animation');
    }, 1000);
    
    playButton.classList.remove('isPlay');
    playAudio();
}

function playPrev() {
    
    playButton.classList.toggle('isPlay');
    if (playNum === 0) {
        playNum = content.length - 1;
    } else {
        playNum -= 1;
    }
    audio.src = content[playNum].audioSrc;
    audioSong.textContent = content[playNum].audioSong;
    audioArtist.textContent = content[playNum].audioArtist;
    wrapper.style.backgroundImage = `url(${content[playNum].imgSrc})`;
    
    image.classList.add('animation');
    setTimeout(() => {
        image.src = `${content[playNum].imgSrc}`;
        image.classList.remove('animation');
    }, 1000);
    
    playButton.classList.remove('isPlay');
    playAudio();
}

playButton.addEventListener('click', playAudio);
nextButton.addEventListener('click', playNext)
prevButton.addEventListener('click', playPrev)
