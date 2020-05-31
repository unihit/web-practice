/*eslint-env browser*/

// 끝말잇기 양식검색
// 제시어 몇글자 중에서 한 단어를 랜덤으로 골라 첫단어를 만들고 제한시간 내에 많은 끝말잇기를 맞춰서 최고 점수를 낸다.

var 단어 = document.createElement('div');
단어.textContent = '제로초'; //페이지에 출력
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼)

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력'; //버튼에 글자 출력
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

// 반복문을 이벤트 리스너로 대체
// function은 콜백함수
// 콜백함수로 끝글자와 첫글자를 확인
// 태그 안에 들어가는 것은 textContent이고 input값에 들어가는 값은 value
// 폼태그를 이용해서 enter를 사용해 버튼이 입력되도록 조정
폼.addEventListener('submit', function 콜백함수(이벤트) {
    이벤트.preventDefault(); //폼에 enter를 입력하면 기본적으로 새로고침 혹은 다른페이지로 넘어가게 되어있다. 기본동작을 바꾸기 위해서 preven사용
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
        // '안녕하세요'.length = 5-4 = 1
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
});

// var word = "제로초";
// var answer = prompt(word);
//
// while(true) {
//   if (word[word.length-1] === answer[0]) {
//     //맞았을 때
//     word = answer;
//   } else {
//     //대답을 다시한다.
//     alert('땡');
//   }
// }
