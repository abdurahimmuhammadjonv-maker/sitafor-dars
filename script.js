
const click = document.getElementById('click');
const red = document.getElementById('red');

click.addEventListener('click', () => {
    if (red.style.backgroundColor === 'red') {
        red.style.backgroundColor = 'white';
        click.innerHTML = 'Yoqish';
    } else {
        red.style.backgroundColor = 'red';
        click.innerHTML = "O'chirish";
    }
});
