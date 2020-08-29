window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

var loader = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function() {

    loader.style.display = 'none';

});