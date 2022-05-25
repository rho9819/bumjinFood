var index = 0;   //이미지에 접근하는 인덱스
window.onload = function(){
    slideShow();
}

function slideShow() {
var i;
var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
}
index++;
if (index > x.length) {
    index = 1;  //인덱스가 초과되면 1로 변경
}   
x[index-1].style.display = "block";  //해당 인덱스는 block으로
setTimeout(slideShow, 3000);   //함수를 3초마다 호출

}   

let btn = document.getElementById('logoposition');
let menu = document.getElementById('menu');
btn.addEventListener("click", ()=>{
    if(menu.style.display=='none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
});

// function modal(id) {
//     var zIndex = 9999;
//     var modal = document.getElementById(id);

//     // 모달 div 뒤에 희끄무레한 레이어
//     var bg = document.createElement('div');
//     bg.setStyle({
//         position: 'fixed',
//         zIndex: zIndex,
//         left: '0px',
//         top: '0px',
//         width: '100%',
//         height: '100%',
//         overflow: 'auto',
//         // 레이어 색갈은 여기서 바꾸면 됨
//         backgroundColor: 'rgba(0,0,0,0.4)'
//     });
//     document.body.append(bg);

//     // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
//     modal.querySelector('.modal_close_btn').addEventListener('click', function() {
//         bg.remove();
//         modal.style.display = 'none';
//     });

//     modal.setStyle({
//         position: 'fixed',
//         display: 'block',
//         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

//         // 시꺼먼 레이어 보다 한칸 위에 보이기
//         zIndex: zIndex + 1,

//         // div center 정렬
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         msTransform: 'translate(-50%, -50%)',
//         webkitTransform: 'translate(-50%, -50%)'
//     });
// }

// // Element 에 style 한번에 오브젝트로 설정하는 함수 추가
// Element.prototype.setStyle = function(styles) {
//     for (var k in styles) this.style[k] = styles[k];
//     return this;
// };
// function modalOpen(idNum) {
//     modal(`my_modal${idNum}`);
// }