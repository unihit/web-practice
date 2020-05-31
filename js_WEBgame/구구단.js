/*eslint-env browser*/

var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + ' 는?';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
//입력창.type = 'number'; // 타입을 숫자로 지정하면 들어온 문자를 숫자로 인식
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력'; //버튼에 글자 출력
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(e) {
    e.preventDefault();
//    console.log(결과, 입력창.value);
    if (결과 === Number(입력창.value)) {
        결과창.textContent = '딩동댕';
        숫자1 = Math.ceil(Math.random() * 9) + 1;
        숫자2 = Math.ceil(Math.random() * 9) + 1;
        결과 = 숫자1 * 숫자2;
        단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?';

        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
});


// 1~9까지의 숫자 랜덤으로 생성
//while (true) {
//    // floor()는 내림함수 ceil() 올림함수
//    var 숫자1 = Math.ceil(Math.random() * 9) + 1;
//    var 숫자2 = Math.ceil(Math.random() * 9) + 1;
//
//    var 결과 = 숫자1 * 숫자2;
//    var 조건 = true;
//
//    while (조건) {
//        var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?');
//
//        if (결과 === Number(답)) {
//            // 답이 맞았을 때 반복을 멈춘다.
//            alert('딩동댕');
//            조건 = false;
//        } else {
//            alert('땡');
//        }
//    }
//}
