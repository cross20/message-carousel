/** A set of elements that change position. */ 
const carousel = document.querySelector('.carousel');

// Retrieve form div to access its children.
const form = document.querySelector('.form');

// Add event listener to submit button to add new paragraphs to the carousel.
const submit = form.querySelector('button');
submit.addEventListener('click', () => {
    // Get input element to retrieve its value.
    const input = form.querySelector('input');

    // Do not append empty paragraph elements.
    if (input.value.trim() !== '') {
        // Create new paragraph to append to the carousel.
        const newParagraph = document.createElement('p');
        newParagraph.textContent = input.value.trim();
    
        // Append new paragraph to carousel.
        carousel.appendChild(newParagraph);
    }
    
    // Reset the input.
    input.value = '';
    input.focus();
});