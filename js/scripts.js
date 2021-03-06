// aside-menu activator

const burger = document.querySelector('.burger');
const activeElements = [...document.querySelectorAll('.active')];

const displayAsideMenu = () => {
    for (let key in activeElements) {
        activeElements[key].classList.toggle('show')
    }
}

burger.addEventListener('click', displayAsideMenu);

//s1 animation

let activeSlide = 0;
const colorImg = document.querySelector('.color');
const greyImg = document.querySelector('.grey');
const h1 = document.querySelector('.member h1');
const h2 = document.querySelector('.member h2');

const colorImages = ['assets/welcome-slider/s1.png', 'assets/welcome-slider/s2.png', 'assets/welcome-slider/s3.png'];
const greyImages = ['assets/welcome-slider/s1a.png', 'assets/welcome-slider/s2a.png', 'assets/welcome-slider/s3a.png'];
const names = ['Anna Deadline', 'Mark Flexible', 'Joe TeamPlayer'];
const professions = ['JS Programmer', 'UX UI designer', 'front-end developer'];

const changeSlideTime = 5000;

const changeSlide = () => {
    activeSlide++;

    if (activeSlide === colorImages.length) {
        activeSlide = 0;
    }

    colorImg.src = colorImages[activeSlide];
    greyImg.src = greyImages[activeSlide];
    h1.textContent = names[activeSlide];
    h2.textContent = professions[activeSlide];
}

setInterval(changeSlide, changeSlideTime);

//menu-go-to-section, arrow-clicked-go-t0-top

$('aside li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]"
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    });
})

$('.arrow').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.jumbotron').offset().top
    })
})
//opinions

const slideList = [
    {
        image: 'assets/opinions/portrait1.jpg',
        opinion: 'Opinion no ONE: They floated in the human system. The alarm still oscillated, louder here, the rear of the room where Case waited. After the postoperative check at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. The alarm still oscillated, louder here.',
        jobTitle: 'Job Title One'
    },
    {
        image: 'assets/opinions/portrait2.jpg',
        opinion: 'Opinion no TWO: Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a heroin factory.A narrow wedge of light from a half - open service hatch framed a heap of discarded fiber optics and the chassis of a painted jungle.',
        jobTitle: 'Job Title TWO'
    },
    {
        image: 'assets/opinions/portrait3.jpg',
        opinion: 'He???d waited in the center of his closed left eyelid. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. All the speed he took, all the turns he???d taken and the corners he???d cut in Night City, and still he???d see the matrix in his jacket pocket.',
        jobTitle: 'Job Title THREE'
    },
    {
        image: 'assets/opinions/portrait4.jpg',
        opinion: 'Opinion no FOUR: All the speed he took, all the turns he???d taken and the corners he???d cut in Night City, and still he???d see the matrix in his jacket pocket. Molly hadn???t seen the dead girl???s face swirl like smoke,',
        jobTitle: 'Job Title FOUR'
    },
    {
        image: 'assets/opinions/portrait5.jpg',
        opinion: 'Opinion no FIVE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium',
        jobTitle: 'Job Title FIVE'
    }
]

const image = document.querySelector('.s4-carusel-photo-wrapper img');
const opinion = document.querySelector('.s4-carusel-wrapper blockquote i');
const jobTitle = document.querySelector('.s4-carusel-wrapper h3');
const time = 5000;
let activeOpinionSlide = 0;
const spansWrapper = document.querySelector('.dots');

for (let i = 0; i < slideList.length; i++) {
    const span = document.createElement('span');
    const att = document.createAttribute('id');
    att.value = i;
    span.setAttributeNode(att);
    spansWrapper.appendChild(span);
}

document.querySelector('.dots span:first-child').classList.add('active');
const spans = [...document.querySelectorAll('.dots span')];

const changeActiveDot = () => {
    const activeSpan = spans.findIndex(span =>
        span.classList.contains('active'));

    spans[activeSpan].classList.remove('active');
    spans[activeOpinionSlide].classList.add('active');
}


const changeOpinionSlide = () => {
    activeOpinionSlide++;
    if (activeOpinionSlide === slideList.length) {
        activeOpinionSlide = 0;
    }
    image.src = slideList[activeOpinionSlide].image;
    opinion.textContent = slideList[activeOpinionSlide].opinion;
    jobTitle.textContent = slideList[activeOpinionSlide].jobTitle;
    changeActiveDot();
}

let intervalIndex = setInterval(changeOpinionSlide, time);

const changeSlideByClick = function (e) {
    const spanClicked = e.target.id;
    activeOpinionSlide = spanClicked;
    image.src = slideList[activeOpinionSlide].image;
    opinion.textContent = slideList[activeOpinionSlide].opinion;
    jobTitle.textContent = slideList[activeOpinionSlide].jobTitle;
    changeActiveDot();
    clearInterval(intervalIndex);
    intervalIndex = setInterval(changeOpinionSlide, time);
}

spans.forEach(span => span.addEventListener('click', changeSlideByClick));

// onScroll activators

$(document).on('scroll', function () {

    //rightBottomArrowActivator

    const windowHeight = $(window).height();
    const currentScrollValue = $(this).scrollTop();
    const arrow = $('.arrow');
    const s1 = $('.s1');
    const s1Height = s1.height();
    const s1FromTop = s1.offset().top;

    if (currentScrollValue > s1Height + s1FromTop - windowHeight) {
        arrow.addClass('visible');
    } else {
        arrow.removeClass('visible');
    }

    // offer

    if (currentScrollValue > s1Height + s1FromTop - windowHeight) {
        $('.offer-one, .offer-two, .offer-three, .offer-four')
            .addClass('activated');
    }

    // s2 left/right pictures

    const s2 = $('.s2');
    const s2Height = s2.height();
    const s2FromTop = s2.offset().top;

    if (currentScrollValue > s2Height + s2FromTop - windowHeight * 1.3) {
        $('.s2 .photo-one-wrapper, .s2 .photo-two-wrapper')
            .addClass('activated');
    }

    // s3 clients' logos

    const s3 = $('.s3');
    const s3Height = s3.height();
    const s3FromTop = s3.offset().top;

    if (currentScrollValue > s3Height + s3FromTop - windowHeight * 1.3) {
        $('.s3-right-wrapper .logo-wrapper img')
            .addClass('activated');
    }

    // s4 mac-shake

    const s4 = $('.s4');
    const s4Height = s4.height();
    const s4FromTop = s4.offset().top;

    if (currentScrollValue > s4Height + s4FromTop - windowHeight * 1.3) {
        $('.s4 .s4-photo-wrapper img')
            .addClass('activated');
    }
});


//popup-modal activator

const buttons = [...document.querySelectorAll('.modal-activator')];
const modal = document.querySelector('.modal-wrapper');
const cancelButton = document.querySelector('.modal-form-wrapper button.cancel');
const bluredArea = document.querySelector('main');

const popUpModalActivator = () => {
    modal.classList.add('active');
    bluredArea.classList.add('blured');
}

cancelButton.addEventListener('click', () => {
    modal.classList.remove('active');
    bluredArea.classList.remove('blured');
});

buttons.forEach(button => button.addEventListener('click', popUpModalActivator));
