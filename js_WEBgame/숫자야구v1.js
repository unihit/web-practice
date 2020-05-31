/*eslint-env browser*/
// x 추가사항: 답변할 때마다 기회가 몇 번 남았는지 표시 추가, 예외처리? 겹치는 숫자 제외


//동기방식은 코드가 순서대로 실행되는 것을 말한다.
//비동기 방식은 코드가 순서대로 실해되지 않는것이다.
//이벤트리스너는 비동기 방식으로 코드가 언제 실행될지 알 수 없다.
var 바디 = document.body;

var 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var 숫자배열 = [];

//pop: 마지막 것 뽑기 - 뒤에서부터 하나씩 뽑아나간다. 9, 8, 7, 6, ... 숫자후보에서 값이 빠진다.
//shift: 처음 것 뽑기 - 앞에서부터 하나씩 뽑는다. 1, 2, 3, 4, ... 숫자후보에서 값이 빠진다.
//push: 배열의 마지막에 추가 [1] -> [2, 1] -> [3, 2, 1] 숫자배열에 값이 들어간다.
//unshift: 배열의 처음에 추가  [1] -> [1, 2] 숫자배열에 값이 들어간다.
//splice(위치, 개수): 배열의 인덱스 위치로부터 개수만큼 배열에서 뽑는다.
//배열에서 빠진 부분은 undefined로 채워진다. 0~8까지 [0]을 붙이지 않으면 배열값이 되버린다.
for (var i = 0; i < 4; i++) {
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    숫자배열.push(뽑은것);
}

console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
입력창.type = 'text';
입력창.maxLength = 4;
폼.append(입력창)

var 틀린횟수 = 0;

var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);

// 문자.split(구분자) -> 배열전환: 문자를 배열로 표기해준다.
// 배열.join(구분자) -> 문자전환: 배열 안의 것을 합쳐서 표시해준다.

폼.addEventListener('submit', function 비동기(e) { // 엔터를 쳤을 때
    e.preventDefault();
    var 답 = 입력창.value;
    //    console.log(답, 숫자배열, 답===숫자배열.join(''));

    if (답 === 숫자배열.join('')) { // 답이 맞으면
        결과.textContent = '홈런';
        입력창.value = '';
        입력창.focus();

        숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        숫자배열 = [];
        for (var i = 0; i < 4; i++) {
            var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            숫자배열.push(뽑은것);
        }
        틀린횟수 = 0;
    } else { // 답이 틀리면
        var 답배열 = 답.split('');
        var 스트라이크 = 0;
        var 볼 = 0;
        틀린횟수++;
        if (틀린횟수 > 9) {
            결과.textContent = '9번 넘게 틀려서 패배! 답은' + 숫자배열.join(',');
            입력창.value = '';
            입력창.focus();
            //            다음문제 제작
            숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            숫자배열 = [];
            for (var i = 0; i < 4; i++) {
                var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
                숫자배열.push(뽑은것);
            }
            틀린횟수 = 0;
        } else { // 9번 미만일 경우
            console.log('답이 틀리면', 답배열);
            for (var i = 0; i < 4; i++) {
                if (Number(답배열[i]) === 숫자배열[i]) { // 같은 자리인지 확인
                    console.log('같은 자리?');
                    스트라이크++;
                    //                배열.indexof(값): 값의 위치를 알 수 있다. 값이 없으면 -1
                } else if (숫자배열.indexOf(Number(답배열[i])) > -1) { // 같은 자리는 아니지만, 숫자가 겹치는지 확인
                    console.log('겹치는 숫자?');
                    볼++;
                }
            }
            if (스트라이크 === 0 && 볼 === 0) {
                결과.textContent = '아웃!';
                입력창.value = '';
                입력창.focus();
            } else {
                결과.textContent = 스트라이크 + '스트라이크 ' + 볼 + '볼입니다.';
                입력창.value = '';
                입력창.focus();
            }
        }
    }
});
