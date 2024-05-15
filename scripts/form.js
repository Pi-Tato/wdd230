const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
//const e1 = document.querySelector('#e1');
const btn = document.querySelector('#btn');

p2.addEventListener('focusout', controlar);
btn.addEventListener('click', );

function controlar()
{
    if (p1.value !== p2.value) {
        alert("Your passwords don't match!");
        p1.value = "";
        p2.value = "";
        p1.focus();
    }
}