$(document).ready(function(){
	const mainSwiper = new Swiper('.slider', {
		// параметры слайдера
  		loop: true,// Слайдер будет бесконечно работать

  		// подключение пагинации
  		pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
    		clickable: true,
 		},

 		// автопролистывание
  		autoplay: {
    		delay: 8000,
			disableOnInteraction: false,
		},
	});

	const slider_propoisal = new Swiper('.slider-proposal', {
		// параметры слайдера
  	loop: true,// Слайдер будет бесконечно работать
    spaceBetween: 79, // расстояние между слайдами


		// подключеник стрелок
 		navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
  		},

    // автопролистывание
      autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },

      slidesPerView: 3, // Количество видимых слайдов

      slidesPerGroup: 3, // Количество пролистываемых слайдов


  });


  const modal_slider = new Swiper ('.modal-slider', {
    slidesPerView: 1, // Количество видимых слайдов
    direction: 'vertical', // вертикальный слайдер
    thumbs: {
      swiper: {
        el: '.mini-slider',
        spaceBetween: 44.64,
        slidesPerView: 4, // Количество видимых слайдов
        direction: 'vertical',
      }
    },
  });


  const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;
  const autorizationElem = document.querySelector('.autorization');
  const loginElem = document.querySelector('.login');
  const loginForm = document.querySelector('.login-form');
  const emailInput = document.querySelector('.login-email');
  const passwordInput = document.querySelector('.login-password');
  const loginSignup = document.querySelector('.login-signup');
  const buttonElem = document.querySelector('.button-authorization');
  const userElem = document.querySelector('.user');
  const userNameElem = document.querySelector('.user-name');
  const exitElem = document.querySelector('.exit');
  const editElem = document.querySelector('.user-info');
  const editContainer = document.querySelector('.edit-container');
  const editUsername = document.querySelector('.edit-username');
  const editPhotoURL = document.querySelector('.edit-photo');
  const userPhotoElem = document.querySelector('.user-photo');
  const news4 = document.querySelector('.news-4');
  const btnNew = document.querySelector('.button-new');
  const addNewElem = document.querySelector('.add-new-form');

  const listUsers = [
    {
      id: '01',
      email: 'ilya.kurochkin.02@mail.ru',
      password: '12345',
      displayName: 'Илья',
      photo: 'img/avatar.jpg',
    },
    {
      id: '02',
      email: 'kia002@mail.ru',
      password: '1234567',
      displayName: 'Киа',
      photo: 'img/avatar.jpg',
    }
  ];

  const setUsers = {
    user: null,
    logIn(email, password, handler) {
      if(!regExpValidEmail.test(email)) return alert('Ошибка: email неверный!')
       const user = this.getUser(email);
       if(user && user.password === password) {
        this.authorizedUser(user);
        handler();
       } else {
        alert('Пользователь с такими данными не найден!');
       }
    },
    logOut(handler) {
      this.user = null;
      handler();
    },
    signUp(email, password, handler) {
      if(!regExpValidEmail.test(email)) return alert('Ошибка: email неверный!')
      if(!email.trim() || !password.trim()) {
        alert('Введите данные');
        return;
      }
      if(!this.getUser(email)) {
        const user = {email, password, displayName: email.substring(0, email.indexOf('@'))};
        listUsers.push(user);
        this.authorizedUser(user);
        handler();
      }
      else {
        alert('Пользователь с таким email уже зарегистрирован!')
      }
    },
    editUser(userName, userPhoto, handler){
      if(userName) {
        this.user.displayName = userName;
      }
      if(userPhoto){
        this.user.photo = userPhoto;
      }
      handler();
    },
    getUser(email) {
      return listUsers.find(item => item.email === email)
    },
    authorizedUser(user){
      this.user = user;
    }
  };

  const setNews4 = {
    allNews4 : [
      {
        title: 'Мода',
        text: 'Лучшее решение в покупке обуви - как скидки помогают собрать базовый гардероб',
        trailer: 'img/pexels-apostolos-vamvouras-2285500.jpg',
        date: '28.06.2021, 12:00:00',
        author: {displayName: 'ilya', photo: 'img/avatar.jpg'},
      },
      {
        title: 'Мода',
        text: 'Лучшее решение в покупке обуви - как скидки помогают собрать базовый гардероб',
        trailer: 'img/pexels-apostolos-vamvouras-2285500.jpg',
        date: '26.06.2021, 15:30:00',
        author: {displayName: 'ilya', photo: 'img/avatar.jpg'},
      },
      {
        title: 'Мода',
        text: 'Лучшее решение в покупке обуви - как скидки помогают собрать базовый гардероб',
        trailer: 'img/pexels-apostolos-vamvouras-2285500.jpg',
        date: '26.06.2021, 15:30:00',
        author: {displayName: 'ilya', photo: 'img/avatar.jpg'},
      }
    ],
    addNew(title, text, trailer, author, handler) {
      this.allNews4.unshift({
        title,
        text,
        trailer,
        author: {
          displayName: setUsers.user.displayName,
          photo: setUsers.user.photo,
        },
        date: new Date().toLocaleDateString(),
      })
      if(handler) {
        handler();
      }
    }
  };


  const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);
    if(user) {
      buttonElem.style.display = 'none';
      loginElem.style.display = 'none';
      userElem.style.display = 'inline-block';
      enter();
      userNameElem.textContent = user.displayName;
      userPhotoElem.src = user.photo || userPhotoElem.src;
      btnNew.classList.add('visible');

    } else {
      buttonElem.style.display = 'inline-block';
      loginElem.style.display = 'inline-block';
      userElem.style.display = 'none';
      news4.classList.add('visible');
      btnNew.classList.remove('visible');
      addNewElem.classList.remove('visible');
    }
  };


  const showAddNew = () => {
    news4.classList.remove('visible');
    btnNew.classList.remove('visible');
    addNewElem.classList.add('visible');
  };

  const showAllNews4 = () => {
    let new4HTML = '';
    setNews4.allNews4.forEach(({title, text, trailer, date, author}) => {
      new4HTML += `
        <div class="news-big-card new-4">
          <div class="news-big-image">
            <img src=${trailer || "img/pexels-apostolos-vamvouras-2285500.jpg"} alt="Мода" class="news-big-wallper">
          </div>
          <div class="news-big-wrapper">
            <h4 class="news-1-title news-big-title">${title}</h4>
            <p class="news-1-description news-big-description">${text}</p>
            <a href="#" class="news-read">Читать</a>
          </div>
          <hr class="news-big-hr">
          <div class="news-4-author">
            <img src=${ author.photo || img/avatar.jpg} alt="Аватар" class="author-photo">
            <span class="author-name">${author.displayName}</span>
          </div>
          <p class="date">${date}</p>
        </div>
      `;
    })
    news4.innerHTML = new4HTML;
    btnNew.classList.add('visible');
    addNewElem.classList.remove('visible');
    news4.classList.add('visible');
  };


  const init = () => {
    loginForm.addEventListener('submit', event => {
      event.preventDefault();
      setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
      loginForm.reset();
    });

    loginSignup.addEventListener('click', event => {
      event.preventDefault();
      setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
      loginForm.reset();
    });

    exitElem.addEventListener('click', event => {
      event.preventDefault();
      setUsers.logOut(toggleAuthDom);
    });

    editElem.addEventListener('click', event => {
      event.preventDefault();
      editContainer.classList.toggle('visible');
      editUsername.value = setUsers.user.displayName;
    });

    editContainer.addEventListener('submit', event => {
      event.preventDefault();
      setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
      editContainer.classList.remove('visible');
    });

    btnNew.addEventListener('click', event => {
      event.preventDefault();
      showAddNew();
    });

   addNewElem.addEventListener('submit', event =>{
      event.preventDefault();
      const {title, text, trailer} = addNewElem.elements;

      if(title.value.length < 6) {
        alert('Слишком короткий заголовок!');
        return;
      }

      if(text.value.length > 60) {
        alert('Слишком большое описание анонса новости!');
        return;
      }

      if(text.value.length < 6) {
        alert('Слишком короткое описание анонса новости!');
        return;
      }

      setNews4.addNew(title.value, text.value, trailer.value, showAllNews4);
      addNewElem.classList.remove('visible');
    });

    showAllNews4();
    toggleAuthDom();
  };

  document.addEventListener('DOMContentLoaded', init);

  init();

  function enter() {
    document.getElementById("enter-btn").onclick = $.fancybox.close();
  };
});