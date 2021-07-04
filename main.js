`use strict`;

const deleteBtn = document.querySelector(".fa-trash-alt");
const middle = document.querySelector(".middle");
const addBtn = document.querySelector('.add__btn');
const shopList = document.getElementsByClassName("shopping__list");
const shopItem = document.getElementsByClassName("shopping__list-items");
const input = document.getElementById('inputReset');


function makeList(e) {
    
    let text = input.value;
    
    if(text == '') {
        e.preventDefault();
    } else {
        //새로운 ul 만든다
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'shopping__list');
        
        //새로운 li와 delete icon 만든다
        const li = document.createElement('li');
        li.setAttribute('class', 'shopping__list-items');
        const i = document.createElement('i');
        i.setAttribute('class', 'fas fa-check');
        
        //li 안에 input 추가
        li.append(text);
        
        //li와 delete icon 를 ul에 넣는다
        ul.appendChild(li);
        ul.appendChild(i);
        
        //ul을 middle div안에 넣는다
        middle.appendChild(ul);
    
        //input 초기화 및 자동 입력 포커스 주기
        inputReset();

        //shopping items delete 기능
        i.addEventListener('click', function() { 
            i.remove();
            ul.remove();
            li.remove();
        })
    }
};

function inputReset() {
    input.value = "";
    input.focus();
    }

    
input.addEventListener('keypress', function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        makeList();
    }
})
    
addBtn.addEventListener('click', function() {
    makeList();
});


