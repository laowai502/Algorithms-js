const pro = new Promise((resolve, reject) => {
    const innerpro = new Promise((r, reject) => {
        setTimeout(() => {
            r(1);
        });
        console.log(2);
        r(3); // 此处已经处理完 resolve promise 的状态
    });
    resolve(4);
    innerpro.then((res) => console.log(res));
    console.log('laowai');
});

pro.then((res) => console.log(res));
console.log('end');


// 2 laowai end 3 4

// javascript 有同步任务 -> 微任务 -> 宏任务
// Promise 的创建是同步任务，.then 才是异步 属于微任务