/*eslint-env browser*/

//무승부일시 추가 + 초기화

var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';
var 결과 = document.createElement('div');
//input의 값이 value
//태그 안 글자는 textContent

//함수를 변수에 저장한다.
//e.target === 클릭된 애, e.target.parentNode === 클릭된 애 부모 태그
var 비동기콜백 = function (이벤트) {
    console.log(이벤트.target); //칸
    console.log(이벤트.target.parentNode); //줄
    console.log(이벤트.target.parentNode.parentNode); //테이블

    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    if (칸들[몇줄][몇칸].textContent !== '') { //칸이 이미 채워져 있는가?
        console.log('빈칸아닙니다.');
    } else { //빈칸이면
        console.log('빈칸입니다.');
        칸들[몇줄][몇칸].textContent = 턴;
        //세칸이 채워졌는지 체크
        var 다참 = false;
        //가로줄 검사
        if (칸들[몇줄][0].textContent === 턴 &&
            칸들[몇줄][1].textContent === 턴 &&
            칸들[몇줄][2].textContent === 턴) {
            다참 = true;
        }
        //세로줄 검사
        if (칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴) {
            다참 = true;
        }
        //대각선 검사 abs(): 절대값, 무조건 양수로 만든다.
        if (몇줄 - 몇칸 === 0) { //대각선 검사 필요한 경우
            if (칸들[0][0].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][2].textContent === 턴
            ) {
                다참 = true;
            }
        }
        if (몇줄 - 몇칸 === 0) {
            if (칸들[0][2].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[0][2].textContent === 턴
            ) {
                다참 = true;
            }
        }
        //다 찼으면
        if (다참) {
            결과.textContent = 턴 + '님이 승리!';
            console.log(턴 + '님이 승리!');
            //초기화 forEach -> 배열 반복문 여기선 이차원배열이므로 이중 forEach필요
            턴 = 'X';
            칸들.forEach(function (줄) {
                줄.forEach(function (칸) {
                    칸.textContent = '';
                });
            });
        } else { //다 안 찼으면
            if (턴 === 'X') {
                턴 = 'O';
            } else {
                턴 = 'X';
            }
        }
    }
};

//3X3칸을 준비한다.
for (var i = 1; i <= 3; i++) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j = 1; j <= 3; j++) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸);
        줄.append(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);

console.log('줄들', 줄들, '칸들', 칸들);
