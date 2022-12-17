const burger = document.querySelector('.header__burger');
const menuTop = document.querySelector('.top__nav');
const menuBottom = document.querySelector('.bottom__nav');
const topLink = document.querySelectorAll('.top__link');
const bottomLink = document.querySelectorAll('.bottom__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active');
  menuTop.classList.toggle('top__nav--active');
  menuBottom.classList.toggle('bottom__nav--active');
  document.body.classList.toggle('stop__scroll');
})

topLink.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('stop__scroll');
  })
})

bottomLink.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('stop__scroll');
  })
})


const liveBtn = document.querySelector('.header__live');
const bottomRadioWrapper = document.querySelector('.bottom__radio--wrapper');

liveBtn.addEventListener('click', () => {
  liveBtn.classList.toggle('header__live--active');
  bottomRadioWrapper.classList.toggle('bottom__radiowrapper--active');
})



let play = 0;

function togglePlay(element) {
  if (element.classList.contains('play')) {
    element.classList.remove('play');
    play = 0;
  } else {
    if (play === 0) {
      element.classList.add('play');
    }  else {
      play.classList.remove('play');
      element.classList.add('play');
    };
    play = element;
  };
}


const headerPlay = document.querySelectorAll('.bottom__radio');

headerPlay.forEach((element) => {
  element.addEventListener('click', () => {
    togglePlay(element);
  })
})


const podcastsPlay = document.querySelectorAll('.card__play');

podcastsPlay.forEach((element) => {
  element.addEventListener('click', () => {
      togglePlay(element);
  })
})


const playlistsPlay = document.querySelectorAll('.playlists__item');

playlistsPlay.forEach((element) => {
  element.addEventListener('click', () => {
      togglePlay(element);
  })
})


const podcastsMore = document.querySelector('.podcasts__btn');
const podcastsItems = document.querySelectorAll('.podcasts__item');

podcastsMore.addEventListener('click', () => {
  podcastsItems.forEach((el) => {
    el.classList.add('podcasts__item--visible');
  })
  podcastsMore.classList.add('podcasts__btn--hidden');
})


const element = document.querySelector('#select-author');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: true,
  placeholderValue: null,
  itemSelectText: ''
});


const guestsBtn = document.querySelectorAll('.guests__btn');

guestsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('guests__btn--active');
  })
})

const bioBtn = document.querySelectorAll('.btn__bio');
const guestsContent = document.querySelectorAll('.guests__content');

bioBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    guestsContent.forEach((e) => {e.classList.remove('guests__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__content--active');
  })
})


const swiper = new Swiper('.swiper', {
  slidesPerView: 2.1,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 30,

      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 30,

      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
    }
  }
});


const playlistsSwiper = new Swiper('.playlists__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 15,
  slideClass: 'swiper-slide',
});


const searchBtn = document.querySelector('.header__search');
const searchBar = document.querySelector('.header__searchbar');

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('header__searchbar--active');
})


const loginBtn = document.querySelectorAll('.header__login');
const loginBar = document.querySelector('.header__loginbar');
const loginClose = document.querySelector('.login__close');

loginBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    loginBar.classList.add('header__loginbar--active');
    document.body.classList.add('stop__scroll');
  })
});

loginClose.addEventListener('click', () => {
  loginBar.classList.remove('header__loginbar--active');
  document.body.classList.remove('stop__scroll');
})

new JustValidate('.about__form', {
  rules: {
    comment: {
      required: true,
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
    check: {
      required: true
    }
  },
  messages: {
    comment: {
      required: 'Вы не ввели комментарий'
    },
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Имя должно содержать минимум 2 символа',
      maxLength: 'Имя должно содежать не больше 30 символов'
    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Некорректный e-mail'
    },
    check: {
      required: 'Требуется согласие на обработку персональных данных'
    }
  },
});


const label = document.querySelectorAll('.playlists__label');

label.forEach((el) => {
  el.addEventListener('click', () => {
    label.forEach((el) => {
      el.classList.remove('playlists__label--active');
    });
    el.classList.add('playlists__label--active');
  })
});