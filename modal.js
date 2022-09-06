const projectsC = document.querySelector('.works');
const works = [
  {
    title: 'Keeping track of hundreds of components',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: 'images/5G.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-post Stories2 Gain+Glory',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: 'images/5G.png',
    lang_list: ['Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-post Stories3 Gain+Glory',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lore   Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: 'images/5G.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-post Stories4 Gain+Glory',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: 'images/5G.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-post Stories5 Gain+Glory',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: 'images/5G.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-post Stories6 Gain+Glory',
    description:
            'A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry" s standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.',
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: 'images/5G.png',
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github', 'Codekit', 'Codepen'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
];

// const workCardShouldReverse = (index) => {
//     if (index % 2 === 0) {
//         return 'row-reverse work-item-2';
//     }
//     return 'work-item-1';
// };
const languageHtml = (workObj, key, langList = '') => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang < 4 ) { langList += `<li class="lang-list-item">${workObj[key].lang_list[lang]}</li> `; }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
};

const languageHtml2 = (workObj, key, langList = '') => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang ) { langList += `<li class="lang-list-item">${workObj[key].lang_list[lang]}</li> `; }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
};

let workCard = '';

const appendWorks = (works) => {
  for (let i = 0; i < works.length; i += 1) {
    // eslint-disable-next-line no-unused-vars
    workCard + = `<div class="workp${i+1} work-card">
        <img class="Wimage" src="${works[i].featured_image}" alt="${works[i].title}" />
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
  <div class="wrap1-img"><img class="wrap1-img-img" src="${works[j].featured_image}" alt="${works[j].title}" /></div>
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