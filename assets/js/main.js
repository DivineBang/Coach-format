/* 
const videoPlayer = document.querySelector('.video__player');
const playButton = document.querySelector('.video__play-btn');
const videoContainer = document.querySelector('.video__project');

const FULLSCREEN_FLAG_KEY = 'video_fullscreen';

function toggleVideo() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.style.display = 'none';
    videoContainer.requestFullscreen();
    localStorage.setItem(FULLSCREEN_FLAG_KEY, 'true'); // сохраняем флаг
  } else {
    videoPlayer.pause();
    playButton.style.display = 'block';
    document.exitFullscreen();
    localStorage.removeItem(FULLSCREEN_FLAG_KEY); // удаляем флаг
  }
}

function checkFullscreenFlag() {
  const isFullscreen = localStorage.getItem(FULLSCREEN_FLAG_KEY) === 'true';
  if (isFullscreen) {
    videoPlayer.pause();
    playButton.style.display = 'block';
    videoContainer.requestFullscreen();
  }
}




videoContainer.addEventListener('click', toggleVideo);
window.addEventListener('load', checkFullscreenFlag); */

// Текст


/* задаем функцию для выбора случайного элемента */
function randomElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

/* получаем все элементы */
const items = document.querySelectorAll('.circle__text > p');

/* задаем переменную для текущего элемента */
let currentElement = null;

/* задаем функцию для показа следующего элемента */
function showNextElement() {
  /* выбираем случайный элемент */
  const nextElement = randomElement(items);

  /* проверяем, что текущий элемент не равен следующему */
  if (nextElement !== currentElement) {
    /* скрываем текущий элемент */
    if (currentElement !== null) {
      currentElement.classList.remove('show');
      currentElement.classList.add('hide');
    }

    /* показываем следующий элемент */
    nextElement.classList.remove('hide');
    nextElement.classList.add('show');

    /* сохраняем следующий элемент как текущий */
    currentElement = nextElement;
  } else {
    /* если следующий элемент равен текущему, выбираем новый элемент */
    showNextElement();
  }
}

/* показываем первый элемент сразу */
showNextElement();

/* задаем интервал для показа следующего элемента каждые 2 секунды */
setInterval(showNextElement, 3000);

//Видео

const videoPlayer = document.querySelector('.video__player');
const playButton = document.querySelector('.video__play-btn');
const videoContainer = document.querySelector('.video__project');
const modal = document.querySelector('.modal');

let isFullscreen = false;

function toggleVideo() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.style.display = 'none';
  } else {
    videoPlayer.pause();
    playButton.style.display = 'block';
  }
}

function toggleFullscreen() {
  if (isFullscreen) {
    document.exitFullscreen();
    isFullscreen = false;
  } else {
    videoContainer.requestFullscreen();
    isFullscreen = true;
  }
}

function openModal() {
  modal.classList.add('modal--open');
}

function closeModal() {
  modal.classList.remove('modal--open');
}

videoContainer.addEventListener('click', function(event) {
  
  if (!event.target.closest('.video__play-btn')) {
    toggleVideo();
  }
});

videoContainer.addEventListener('dblclick', function() {
  toggleFullscreen();
});


videoPlayer.addEventListener('dblclick', function(event) {
  event.stopPropagation(); 
  toggleFullscreen();
});



const infoTextYellow = document.querySelector('.info__text_yellow');
const infoTextYellow2 = document.querySelector('.info__text_yellow-2');

const infoSet = document.querySelectorAll('.info__set-none');
const infoSet2 = document.querySelectorAll('.info__set-none-2');

infoTextYellow.addEventListener('click', function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение ссылки

    infoSet.forEach(function(item) {
        if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'flex'; // показываем элементы, если они были скрыты
        } else {
            item.style.display = 'none'; // скрываем элементы, если они были видимы
        }
    });
});


infoTextYellow2.addEventListener('click', function(event) {
  event.preventDefault(); // предотвращаем стандартное поведение ссылки

  infoSet2.forEach(function(item) {
      if (item.style.display === 'none' || item.style.display === '') {
          item.style.display = 'flex'; // показываем элементы, если они были скрыты
      } else {
          item.style.display = 'none'; // скрываем элементы, если они были видимы
      }
  });
});


$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    centerPadding: '5px',
    slidesToShow: 1
    
  });
});


const planKey = document.querySelector('.plan__img');
const planD = document.querySelector('.plan__img-2');
const planM = document.querySelector('.plan__img-3');
const planL = document.querySelector('.plan__img-4');
const planI = document.querySelector('.plan__img-5');




document.querySelector('.plan__wrapp').addEventListener('mouseover', () => {
  planKey.src = 'assets/img/key2.png';
});

document.querySelector('.plan__wrapp').addEventListener('mouseout', () => {
  planKey.src = 'assets/img/key.png';
});

document.querySelector('.plan__wrapp-2').addEventListener('mouseover', () => {
  planD.src = 'assets/img/decision2.png';
});

document.querySelector('.plan__wrapp-2').addEventListener('mouseout', () => {
  planD.src = 'assets/img/decision3.png';
});

document.querySelector('.plan__wrapp-3').addEventListener('mouseover', () => {
  planM.src = 'assets/img/motivation2.png';
});

document.querySelector('.plan__wrapp-3').addEventListener('mouseout', () => {
  planM.src = 'assets/img/motivation.png';
});

document.querySelector('.plan__wrapp-4').addEventListener('mouseover', () => {
  planL.src = 'assets/img/link2.png';
});

document.querySelector('.plan__wrapp-4').addEventListener('mouseout', () => {
  planL.src = 'assets/img/link.png';
});


document.querySelector('.plan__wrapp-5').addEventListener('mouseover', () => {
  planI.src = 'assets/img/idea2.png';
});

document.querySelector('.plan__wrapp-5').addEventListener('mouseout', () => {
  planI.src = 'assets/img/idea.png';
});