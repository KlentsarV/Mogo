

let userStatus = sessionStorage.getItem('user-status');



let info = document.querySelector('.user_info'),

    btnIn = document.querySelector('.button_in'),
    suit = document.querySelector('.section_one'),
    autorization = document.querySelector('.authorization'),
    active = document.querySelector('.user_info--nan');

if (userStatus) {
    if (userStatus === '1') {
        autorization.classList.add('authorization--active');
        suit.classList.remove('section_one--active');
    }
}


btnIn.addEventListener("click", function () {
    let userName = document.querySelector('.user_name').value,
        userPassword = document.querySelector('.user_password').value;
    if (userName === "Vlad" && userPassword === "1234") {
        autorization.classList.add('authorization--active');
        suit.classList.remove('section_one--active');

        sessionStorage.setItem('user-status', '1');
    }

    else {
        active.classList.add('user_info--active');
    }
});


let intro = document.querySelector('.intro');
let header = document.querySelector('.header');
let scroollOfSet = 0;

let introH = intro.clientHeight;
console.log(introH)

window.addEventListener("scroll", function () {
    scroollOfSet = window.pageYOffset;
    console.log(scroollOfSet)

    if ((scroollOfSet * 1.05) >= introH) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
});

//button

/* nav_btn data scroll*/

function setupNavigation(navButton, scrollTo) {
    const navElem = document.querySelector(navButton);
    navElem.addEventListener("click", function (event) {
        event.preventDefault();

        let sectionToScroll = document.querySelector(scrollTo);
        sectionToScroll.scrollIntoView({
            behavior: "smooth"
        });
    });
}

setupNavigation('#nav_cl--abaut', '#abaut_page');

setupNavigation('#nav_cl--services', '#services_page');

setupNavigation('#nav_cl--team', '#section--team');

setupNavigation('#nav_cl--blog', '#section--blog');



/*lern more*/
const more = document.querySelector('.btn1');
more.addEventListener("click", function setScrollItnoView(top) {

    const foother = document.querySelector('.foother')
    foother.scrollIntoView({

        behavior: "smooth"
    })
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop)
});

/*slider*/


let selector = '.slider_j';
let sliderElems = document.querySelectorAll(selector);
let welcomeList = ['Welcome to mogo', 'Lets to Work', 'About us Wise', 'Contact with us'];

//console.log(sliderElems);

const slider = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});


function clearActiveClass() {
    sliderElems.forEach(function (elem) {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active');
            setTimeout(function () {
                let line = elem.querySelector('.slider-line');
                line.style.width = 0;
            }, 100);
        }
    });
}


sliderElems.forEach(function (elem, index) {
    elem.addEventListener('click', function (event) {
        clearActiveClass();
        //console.log(index);
        let title = document.querySelector('.intro_tittle');
        let newTitle = document.createElement('h4');
        newTitle.classList.add('intro_tittle');
        newTitle.innerText = welcomeList[index];


        title.parentNode.replaceChild(newTitle, title)

        event.target.classList.add('active');
        setTimeout(function () {
            let line = event.target.querySelector('.slider-line');
            let percent = (100 / sliderElems.length) * (index + 1);

            line.style.width = percent + '%';
        }, 100);
    })
})

//acardion





document.querySelectorAll('.element_header').forEach((el) => {

    el.addEventListener('click', () => {
        let arrow = el.querySelector('.element_row')
        let contant = el.nextElementSibling;

        console.log(contant);
        if (contant.style.maxHeight) {
            document.querySelectorAll('.element_info').forEach((el) => el.style.maxHeight = null)
            contant.style.border = 0;
            arrow.style.transform = null;

        }

        else {
            document.querySelectorAll('.element_info').forEach((el) => el.style.maxHeight = null)

            contant.style.maxHeight = '250px';
            contant.style.border = ' 1px solid #e4e4e4';
            contant.style.borderTop = '0px';
            arrow.style.transform = 'rotate(180deg)'
        }


    });

});


//images



document.querySelectorAll('.works_ph').forEach((el) => {
    el.addEventListener('click', () => {
        let img = el.querySelector('.works_img')
        if (img.style.height) {
            img.style.height = null;
            img.style.width = null;
        }
        else {
            img.style.height = '800px';
            img.style.width = '800px';
        }
    })

})


