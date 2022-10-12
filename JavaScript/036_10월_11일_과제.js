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

/* 연습문제 4. */
let input4 = prompt('숫자를 입력해주세요');

let result4 = '';
for (i = 1; i < input4.length; i++) {
    input4[-i]
}