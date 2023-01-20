const projectsC = document.querySelector('.works');
const works = [
  {
    title: 'Awesome-books-ES6',
    imgTitle1: 'Add a New Book Tab',
    imgTitle2: 'Keeping track of hundreds of components',
    imgTitle3: 'Keeping track of hundreds of components',
    description:
            'Awesome-books ES6 is primarily built on ES6 standards, an Application that Captures & deletes Books. Built with JavaScript, Html, CSS entered',
    detail: "Awesome-books ES6 is primarily built on ES6 standards, an Application that Captures & deletes Books. Built with JavaScript, Html, CSS entered Awesome Books is a simple Books managment app that can best fit a library in which a user can add and remove books. the webpage will show the user current books in local storage.built with vanilla JavaScript",
    featured_image1: 'images/AwesomeBooks.png',
    featured_image2: 'images/AwesomeBooks1.png',
    featured_image3: 'images/AwesomeBooks2.png',
    lang_list: ['css', 'html', 'JavaScript',  'Github'],
    source: 'https://github.com/canon20paul/Portfolio-Paul-Malongo',
    live_demo: ' https://canon20paul.github.io/Portfolio-Paul-Malongo/',
  },
  {
    title: 'LeaderBoard Game Data App',
    imgTitle1: 'Keeping track of hundreds of components',
    imgTitle2: 'Keeping track of hundreds of components',
    imgTitle3: 'Keeping track of hundreds of components',
    description:
            'A simple Leaderboard Application Project. An application that Captures and manages game scores.',
    detail: "A simple Leaderboard Application Project. An application that Captures and manages game scores. A Game is initialized by pulling an id using an API after which records are taken and utilized. Asides Html5 and CSS, its Interactions are enhanced with JavaScript and Bundled with webpack.",
    featured_image1: 'images/leaderboard.png',
    featured_image2: 'images/leaderboard1.png',
    featured_image3: 'images/leaderboard.png',
    lang_list: ['Github', 'webpack', 'Html', 'javaScript', 'css'],
    source: 'https://github.com/canon20paul/Leaderboard',
    live_demo: 'https://canon20paul.github.io/Leaderboard/',
  },
  {
    title: 'Jobster API + FrontEnd',
    imgTitle1: 'Keeping track of hundreds of components',
    imgTitle2: 'Keeping track of hundreds of components',
    imgTitle3: 'Keeping track of hundreds of components',
    description:
            'The JobsterAPI is built from Modification to a copy of a JobsAPI project to Link it to a React FrontEnd pre built in a client file with additional data.',
    detail: "The JobsterAPI is built from Modification to a copy of a JobsAPI project to Link it to a React FrontEnd pre built in a client file with additional data. Profile Interface to Manage userdetails - Add job interface to add and remove jobs - Alljobs interface to search and display jobs - Stats interface to provide relevant job Application processes",
    featured_image1: 'images/jobster1.png',
    featured_image2: 'images/jobster2.png',
    featured_image3: 'images/jobster3.png',
    lang_list: ['css', 'html', 'React', 'Nodejs', 'Github', 'express', 'javascript','mongoDb','jwt'],
    source: 'https://github.com/canon20paul/JobsterAPI-FrontEnd',
    live_demo: 'https://node-course-jobster-api-10vu.onrender.com//',
  },
  {
    title: 'Multi-post Stories4 Gain+Glory',
    imgTitle1: 'Keeping track of hundreds of components',
    imgTitle2: 'Keeping track of hundreds of components',
    imgTitle3: 'Keeping track of hundreds of components',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: 'images/AwesomeBooks.png',
    featured_image2: 'images/AwesomeBooks.png',
    featured_image3: 'images/AwesomeBooks.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-Paul-Malongo',
    live_demo: ' https://canon20paul.github.io/Portfolio-Paul-Malongo/',
  },
  {
    title: 'Multi-post Stories5 Gain+Glory',
    imgTitle1: 'Keeping track of hundreds of components',
    imgTitle2: 'Keeping track of hundreds of components',
    imgTitle3: 'Keeping track of hundreds of components',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: 'images/AwesomeBooks.png',
    featured_image2: 'images/AwesomeBooks.png',
    featured_image3: 'images/AwesomeBooks.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-Paul-Malongo',
    live_demo: ' https://canon20paul.github.io/Portfolio-Paul-Malongo/',
  },
  {
    title: 'Redux E commerce',
    imgTitle1: 'Shopping Home Page',
    imgTitle2: 'Add New Items',
    imgTitle3: 'The Cat',
    description:
            'Project Mearnt to demonstrate the Core shopping functionality embeded in an Ecommerce site.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: 'images/redux-ecom1.png',
    featured_image2: 'images/redux-ecom2.png',
    featured_image3: 'images/redux-ecom4.png',
    lang_list: ['css', 'html', 'bootsrap', 'Nodejs', 'Github', 'Redux', 'React', 'JavaScript'],
    source: 'https://github.com/canon20paul/Redux-ecom',
    live_demo: ' https://github.com/canon20paul/Redux-ecom/',
  },
];

const languageHtml = (workObj, key, langList = '') => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang < 4) { langList += `<li class="lang-list-item">${workObj[key].lang_list[lang]}</li> `; }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
};

const languageHtml2 = (workObj, key, langList = '') => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang) {
      langList += `<li class="lang-list-item">${workObj[key].lang_list[lang]}</li> `;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
};

let workCard = '';

const appendWorks = (works) => {
  for (let i = 0; i < works.length; i += 1) {
    workCard += ` <div class="workp${i + 1} work-card">
        <img class="Wimage" src="${works[i].featured_image1}" alt="${works[i].imgTitle1}" />
        <div class="work-frame">
        <h3 class="work-title">${works[i].title}</h3>
      <ul class="lang" id="card-languages">
    ${languageHtml(works, i)}
    </ul>
    <button type="submit" class="buttonW" onclick="blurOut(), popUpDiv(${[i]}), href='#wrap-header';">
    See Project
    </button>
    </div>
    </div> `;
  }
};
appendWorks(works);
projectsC.innerHTML = workCard;
// eslint-disable-next-line no-unused-vars
function popUpDiv(j) {
  const wrap = document.createElement('section');
  const wrap1 = document.createElement('div');
  wrap.classList.add('wrap');
  wrap1.classList.add('wrap1');
  wrap1.innerHTML = ` <section class="wrap"><div class="wrap1">
  <div class="xx"><input type="submit" value="" class="xx-img"  onclick="removeBlur()" /></div>
  <div class="wrap1-img"><img class="wrap1-img-img" src="${works[j].featured_image1}" alt="${works[j].imgTitle1}" /></div>
  <div class="wrap1-img"><img class="wrap1-img-img" src="${works[j].featured_image2}" alt="${works[j].imgTitle2}" /></div>
  <div class="wrap1-img"><img class="wrap1-img-img" src="${works[j].featured_image3}" alt="${works[j].imgTitle3}" /></div>
  <div id="wrap-header" class="wrap-header"><h3>${works[j].title}</h3></div>
  <div class="wrap-bottom">
  <ul class="lang" id="card-languages">
    ${languageHtml2(works, j)}
    </ul>
    <p class="wrap-detail">${works[j].detail}</p>
  <div class="btnD"> <button type="submit" id="source" class="btnPP source"><a href="${works[j].source}"><span class="spanS">See Source</span><img class="btnPP-imgS" src="images/githubL.png" alt=""></a></button>
  <button type="submit" id="live" class=" btnPP live"><a href="${works[j].live_demo}"><span class="spanL">See Live</span><img class="btnPP-imgL" src="images/live.png" alt=""></a></button> </div>
  </div>
 
  </div>
  </section>`;
  wrap.appendChild(wrap1);
  document.body.appendChild(wrap);
  document.documentElement.scrollTop = 0;
}
// eslint-disable-next-line no-unused-vars
function blurOut() {
  const blur = document.querySelector('.main-wrapper');
  blur.setAttribute('id', 'blur');
}
// eslint-disable-next-line no-unused-vars
function removeBlur() {
  document.querySelector('.main-wrapper').removeAttribute('id');
  document.querySelector('.main-wrapper').removeAttribute('id');
  const shut = document.querySelector('.wrap');
  shut.remove();
}