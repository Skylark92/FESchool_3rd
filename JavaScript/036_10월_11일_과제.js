/* 연습문제 1. */
const data1 = [10, 20, 30, 10, 20, 30, 40, 10];

// 평균
let 전체합 = 0;
for (i = 0; i < data1.length; i++) {
    전체합 += data1[i];
}
let 평균 = 전체합 / data1.length;

// 분산
let 편차합 = 0;
for (i = 0; i < data1.length; i++) {
    편차합 += (data1[i] - 평균) ** 2;
}
let 분산 = 편차합 / data1.length;
let 표준편차 = 분산 ** 0.5;

/* 연습문제 2. */
const data2 = "5, 4, 10, 2, 5";

const array2 = data2.split(",");

let sum = 0;
for (i = 0; i < array2.length; i++) {
    sum += +array2[i];
}
let avg = sum / array2.length;

/* 연습문제 3. */
const data3 = [11, 22, 33, 111, 2];

let sum3 = 0;
for (i = 0; i < data3.length; i++) {
    if (String(data3[i]).split("").length === 1) {
        sum3 += +data3[i];
    } else {
        sum3 += String(data3[i])
            .split("")
            .reduce((a, b) => {
                return +a + +b;
            });
    }
}

console.log(sum3);

/* 연습문제 4. */
let input4 = prompt("숫자를 입력해주세요.").split("").reverse();

// 반복문만 사용하여 숫자단위 콤마 찍기
let result4 = [];

for (i = 0; i < input4.length; i++) {
    if (i !== 0 && i % 3 === 0) {
        result4.push(",");
    }
    result4.push(input4[i]);
}

console.log(result4.reverse().join(""));

// 반복문만 사용하여 숫자단위 콤마 없애기

let 숫자 = prompt("숫자를 콤마로 구분하여 입력해주세요.").split("");

console.log(숫자.filter((a) => a !== ",").join(""));

// 문자열 뒤집기

let 문자열 = prompt("문자열을 입력해주세요.");

console.log(문자열.split("").reverse().join(""));

/* 연습문제 5. */
// 로또 만들기

const 번호 = [];

function getLotto(c) {
    let 추첨 = 0;
    for (i = 0; i < c; i++) {
        추첨 = Math.floor(Math.random() * 46) + 1;
        if (번호.includes(추첨)) {
            i--;
            continue;
        } else {
            번호.push(추첨);
        }
    }
}
