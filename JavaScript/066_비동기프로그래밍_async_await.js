// 모던 자바스크립트 예제
async function f() {
    return 100;
}

f().then(alert); // 100

////////////////////

async function f() {
    return "hello world";
}

f()
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(" ")[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    });

///////////////////

// 모던 자바스크립트 예제
async function f() {
    return 100;
}

f().then(alert); // 100

////////////////////

async function f() {
    return "hello world";
}
console.log("!");
f()
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(" ")[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    });
console.log("!!");

////////////////////

// 기다린 것
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000);
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    alert(result); // "완료!"
}

f();

/////////////////

// 기다리지 않은 것
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000);
    });

    let result = promise;
    console.log(result);
    alert(result);
}

f();

/////////////////

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 10000);
    });

    let result = promise;
    console.log(result);
    alert(result);
    return "hello";
}

f(); // Promise {<fulfilled>: 'hello'}

////////////////

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료");
            resolve("완료!");
        }, 1000);
    });

    let result = promise;
    console.log(result);
    alert(result);
    return "hello";
}

f(); // Promise {<fulfilled>: 'hello'}
