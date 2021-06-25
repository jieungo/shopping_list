`use strict`;

const deleteBtn = document.querySelector(".fa-trash-alt");
const parent = document.querySelector(".middle");
const child = document.querySelector(".shopping__list");
const addBtn = document.querySelector('.add__btn');

deleteBtn.addEventListener('click', function() {
    alert("목록을 삭제하시겠습니까?");
    if(true) {
        parent.removeChild(child);
    } else {
        return
    }
});

addBtn.addEventListener('click', function() {
    const input = document.querySelector('.shopping__list-add').value;

    //새로운 ul 만든다

    //새로운 li 만든다

    //li 안에 input 과 함께 delelteBtn 을 넣는다 (휴지통 아이콘)

    //li를 ul에 넣는다

    //ul을 middle div안에 넣는다

})

