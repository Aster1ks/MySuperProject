
const a = 4
const b = 52
const c = 2
// пришли к нас из Html



function disk(a1, b1, c1) {

    return b1 * b1 - 4 * a1 * c1;

}

function mateh(a1, b1, c1) { 
    
    if(a1 === 0){
        arrROOT[0] = arrROOT[1] = (-c1 / b1);
        return arrROOT ;
    }

    let arrROOT = [0, 0];

    const D = disk(a1, b1, c1);


    if(D === 0) {
        arrROOT[0] = arrROOT[1] = -b1 / (2 * a1);

    }
    else if(D < 0) { 
        console.log("Нет Корней");
        return;
    }
    else if(D > 0) {
        arrROOT[0] = (-b1 + Math.sqrt(D)) / (2 * a1);
        arrROOT[1] = (-b1 - Math.sqrt(D)) / (2 * a1);
    }
        return arrROOT;

} 
//КНОПКА  посчитать и вызовится это функция
let roots = mateh(a,b,c)  
// Вывод результата в html  
console.log("Корень x1 = " + roots[0], "\nКорень x2 = " + roots[1]); //Логирование


 
         