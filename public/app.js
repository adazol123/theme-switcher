const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const testDark = document.querySelector('html');

const body = document.body;

// apply the cached theme on reload
const  theme = localStorage.getItem('theme');
const  isSolar = localStorage.getItem('isSolar');


if (theme) {
    testDark.setAttribute('data-color-mode',theme)
    isSolar && body.classList.add('solar')

}


darkButton.onclick = () => {
    // body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    testDark.setAttribute('data-color-mode', 'dark')
    console.log(testDark)

}

lightButton.onclick = () => {
    // body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    testDark.setAttribute('data-color-mode', 'light')
    console.log(testDark)
}

solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar')
        solarButton.style.cssText = `
            --bg-solar: var(--yellow);
        `
        solarButton.innerText = 'solarize';
        localStorage.removeItem('isSolar')
    } else {
        body.classList.add('solar')
        solarButton.style.cssText = `
        --bg-solar: white;
        `   
        solarButton.innerText = 'normalize';
    }
}