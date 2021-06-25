`use strict`;

const deleteBtn = document.querySelector(".fa-trash-alt");
const parent = document.querySelector(".middle");
const child = document.querySelector(".shopping__list");
const addBtn = document.querySelector('.add__btn');

deleteBtn.addEventListener('click', function() {
    confirm("목록을 삭제하시겠습니까?");
    if(true) {
        parent.removeChild(child);
    } else {
        return
    }
});


addBtn.addEventListener('click', function() {
    const input = document.querySelector('.shopping__list-add').value;
    input.value= "";
    
    //새로운 ul 만든다
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'shopping__list');

    //새로운 li와 delete icon 만든다
    const li = document.createElement('li');
    li.setAttribute('class', 'shopping__list-items');
    const i = document.createElement('i');
    i.setAttribute('class', 'far fa-trash-alt');

    //li 안에 input 추가
    li.append(input);

    //li와 delete icon 를 ul에 넣는다
    ul.appendChild(li);
    ul.appendChild(i);

    //ul을 middle div안에 넣는다
    parent.appendChild(ul);
})

