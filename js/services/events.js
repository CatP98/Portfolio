import { displayElement } from './dynamicElements.js';

export function aboutOptionEvent() {
    const aboutOption = document.querySelector('.about'); 

    // Make sure the element exists and then attach the event listener
    if (aboutOption) {
        aboutOption.addEventListener('click', () => {
            displayElement('about'); 
        });
    } else {
        console.error('About option element not found.');
    }
}
export function letsStartAuthEvent() {
    const aboutOption = document.querySelector('.auth'); 

    // Make sure the element exists and then attach the event listener
    if (aboutOption) {
        aboutOption.addEventListener('click', () => {
            displayElement('about'); 
        });
    } else {
        console.error('About option element not found.');
    }
}