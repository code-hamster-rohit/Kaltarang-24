const totalTime = 273*22;
function getHandle(className) {
    return document.querySelector('.' + className);
}
function oneAfterAnother() {
    // display the first content
    getHandle('preloader-text').textContent = 'Rewinding time...'

    // display the second content
    setTimeout(() => {
        getHandle('preloader-text').textContent = 'Collecting all the memories...'
    }, totalTime / 3);

    // display the third content
    setTimeout(() => {
        getHandle('preloader-text').textContent = 'Patching up the blunders...'
    }, totalTime / 3 * 2);

    // reroute to the home page
    setTimeout(() => {
        window.location.href = 'landing.html';
    }, totalTime-200);
}
window.onload = oneAfterAnother();