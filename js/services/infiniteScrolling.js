export function addInfiniteScrolling(containerSelector, listElementSelector) {
    const container = document.querySelector(containerSelector);
    
    container.addEventListener('scroll', () => {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            loadMore(container, listElementSelector); // Load more content
        }
    });
}

function loadMore(container, listElementSelector) {
    console.log('Loading more content...');

    const numberOfBoxes = nbOfBoxesInScreen(container, listElementSelector);
    
    // You can implement API call logic or DOM manipulation here to load more boxes
    console.log(`Currently, there are ${numberOfBoxes} boxes visible on the screen.`);
}

function nbOfBoxesInScreen(container, listElementSelector) {
    const containerHeight = container.getBoundingClientRect().height;
    const listElement = document.querySelector(listElementSelector);
    const listElementHeight = listElement.getBoundingClientRect().height;

    const numberOfBoxes = Math.ceil(listElementHeight / containerHeight);
    console.log('nb of elements per page', numberOfBoxes);
    return numberOfBoxes;
}
