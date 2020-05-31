/*eslint-env browser*/

//Array(숫자)로 빈 배열을 만든다.
//fill()을 해줘야 undefined 45개가 찬다.
//empty의 특징: 반복문 불가!

//map() 매칭해주는 함수 새로운 배열 맵에 매칭해준다.
var 후보군 = Array(45).fill().map(function(요소, 인덱스) {
//    console.log(요소, 인덱스 + 1);
    return 인덱스 + 1;
});

console.log(후보군);

//배열숫자 차례대로 6개를 뽑는다.
var 셔플 = [];
while (후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}

console.log(셔플);
// 보너스로 마지막 숫자 가져오기
var 보너스 = 셔플[셔플.length - 1];


//.slice(): 0, 1, 2, 3, 4, 5
//.sort(function (p, c) {return p - c;}): 숫자 순서대로 정렬 | {return c - p}으로 내림차순으로 정렬
//뺀 결과가 0보타 크면 순서를 바꾼다.
var 당첨숫자들 = 셔플
    .slice(0, 6)
    .sort(function(p, c) {
        return p - c;
    });

console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);
