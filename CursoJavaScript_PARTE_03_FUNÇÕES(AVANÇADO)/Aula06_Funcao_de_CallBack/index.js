function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min; // pega um numeri randomico;
    return Math.floor(num)
}
console.log(rand());

function f1(callBack) {
    setTimeout(() => { // essse setTimeOut é so uma simulação de um loading na web
        console.log("f1");
        if (callBack) callBack(); //se callback existir, executa Callback
    }, rand());
    
}
function f2(callBack) {
    setTimeout(() => {
        console.log("f2");
        if (callBack) callBack();
    }, rand());
    
}
function f3(callBack) {
    setTimeout(() => {
        console.log("f3");
        if (callBack) callBack();
    }, rand());
    
}
// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log("Hello world");
            
//         }); //callBack
//     });
// })

// isso obriga a seguir esta ordem, executa so qnd um executa7

f1(f1Callback);
function f1Callback() {
    f2(f2CallBack);
}

function f2CallBack() {
    f3(f3CallBack);
}

function f3CallBack() {
    console.log("Hello mundo");
    
}

// Isso é um callack organizado, uma funcao chama a outra