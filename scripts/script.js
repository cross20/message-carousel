const mall = document.querySelector('.mall');

/** Adds event listeners to all buttons used to build the mall */
function addMallActions() {
    const buildStore = document.querySelector('.build-store');
    const buildAnchorStore = buildStore.querySelector('.build-anchor-store');
    buildAnchorStore.addEventListener('click', () => {
        const anchorStore = document.createElement('div');
        anchorStore.className = 'anchor-store';

        const storeFront = document.createElement('p');
        storeFront.textContent = 'This is an anchor store';

        anchorStore.appendChild(storeFront);
        mall.appendChild(anchorStore);
    });
}

addMallActions();