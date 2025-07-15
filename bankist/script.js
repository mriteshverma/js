'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const stickyNav = function (entries, observer) {

    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky'); else nav.classList.remove('sticky');
};



const headerObserver = new IntersectionObserver(stickyNav, {
    root: null, // Browser body scroll.
    threshold: 0,
    rootMargin: `-${navHeight}px`
}).observe(header);


// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {

    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target)
    })

}
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})

allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
});

const imgTargets = document.querySelectorAll('.features__img');

const lazyLoad = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target)
}
const imageObserver = new IntersectionObserver(lazyLoad, {
    root: null,
    threshold: 0,
    rootMargin: '-200px'
});

imgTargets.forEach(img => imageObserver.observe(img));