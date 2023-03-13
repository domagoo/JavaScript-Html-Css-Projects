const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('animated-bg');
const animated_texts = document.querySelectorAll('animated-bg-text');

setTimeout(getData, 2500);

function getData(){
    header.innerHTML = '<img src= "https://source.unsplash.com/gySMaocSdqs" alt="" />';

    title.innerHTML = 'Lorem ipsum dolor sit amet';

    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quam?';

    profile_img.innerHTML = ' <img src="https://source.unsplash.com/siNDDi9RpVY" alt="" />';

    name.innerHTML = 'John Doe';

    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

    animated_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}