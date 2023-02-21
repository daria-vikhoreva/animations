'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation, macbookAnimation;

btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg)'},
            {transform: 'translateY(10px) rotate(10deg) scale(1.1)'},
            {transform: 'translateY(-10px) rotate(-10deg) scale(1.2)'},
            {transform: 'translateY(0) rotate(0deg)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
})


btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([
            {transform: 'translateY(0)'},
            {transform: 'translateY(5px)'},
            {transform: 'translateY(-5px)'},
            {transform: 'translateY(0)'}
        ], {
            duration: 2000,
            iterations: Infinity
        });
    } else if (macbookAnimation.playState === 'paused') {
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }
})
