'use strict';
// let form1 = document.querySelector('.form1');
// form1.onsubmit = function (event) {
//     event.preventDefault();
// }
// --создаем форму
let inputForm = document.createElement('input');
inputForm.classList.add('form_input');
// inputForm.id = 'text-input';
let btnAdd = document.createElement('button');
btnAdd.innerText = 'Add';
btnAdd.classList.add('form_btn');
let formNew = document.createElement('form');
formNew.classList.add('form2');
formNew.appendChild(inputForm);
formNew.appendChild(btnAdd);
let section = document.getElementsByTagName('section');
section[0].appendChild(formNew);
// --


let liAll;
btnAdd.onclick = function () {
    // event.preventDefault();
    if (inputForm.value === '') {
        // console.log('пусто');
    } else {
        let ul = document.querySelector('ul');
        let liNew = document.createElement('li');
        ul.appendChild(liNew);
        let label = document.createElement('label');
        liNew.appendChild(label);
        // label.htmlFor = 'box-new';

        let input = document.createElement('input');
        input.type = 'checkbox';
        label.appendChild(input);
        // input.id = 'box-new';

        let span = document.createElement('span');
        label.appendChild(span);
        span.innerText = inputForm.value;
        inputForm.value = '';
        // event.preventDefault;

        // let span2 = document.createElement('span');
        // span2.classList.add('pan-group');
        // span2.textContent = 'for the next lessons about CSS';
        // label.appendChild(span2);
        //=
        let btnDel = document.createElement('button');
        btnDel.classList.add('form_btn');
        liNew.appendChild(btnDel);
        btnDel.innerText = 'Del';

        liAll = document.querySelectorAll("li");
        btnDel.onclick = function () {
            let del = btnDel.closest('li');
            // btnDel = liAll[liAll.length - 1].remove(); //удаляю ли
            del.remove();
            // console.log(del);
        };


    }

};

// -- добавляем Del
let li = document.querySelectorAll('li'); // ЭТОТ
for (let i = 0; i < li.length; i++) {
    let btnDel = document.createElement('button');
    btnDel.classList.add('form_btn');
    li[i].appendChild(btnDel);
    btnDel.innerText = 'Del';
    btnDel.onclick = function () {
        // btnDel = li[i].remove(); //удаляю список
        let del = btnDel.closest('li');
        del.remove();
    };
}
// --
let liHov = document.querySelectorAll('li');

for (let i = 0; i < liHov.length; i++) {
    liHov[i].onmousemove = function () {
        liHov[i].classList.add('item--hover');
    };
    liHov[i].onmouseleave = function () {
        liHov[i].classList.remove('item--hover');
    };
}

let tooltip = document.createElement('div');
tooltip.classList.add('ba-tooltip');
tooltip.innerHTML = "Введите, что нужно купить";
let tooltip2 = document.querySelector('.form_input');
formNew.insertBefore(tooltip, tooltip2);//вставляю перед формой
// tooltip.style.visibility = "hidden";
tooltip.style.cssText = "visibility: hidden; background-color: #0053A5; color: #fff; border-radius: 4px; min-height: 50px; text-align: center; position: absolute";
// tooltip.style.cssText = "position:absolute; color: red";

// let coords = tooltip.getBoundingClientRect();
// console.log(coords);
// console.log(coords.left);
// console.log(coords.top);
// console.log(coords.top - 80);
// console.log(coords.bottom);
// console.log(inputForm.offsetHeight);

// tooltip.style.left = coords.left + "px";
// tooltip.style.top = coords.top + -90 + "px";

// inputForm.onmouseleave = function () {
inputForm.onblur = function () {
    tooltip.style.visibility = "hidden";
};
// inputForm.onmousemove = function () {
inputForm.onfocus = function () {
    tooltip.style.visibility = "visible";
};

