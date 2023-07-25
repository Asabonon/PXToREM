// 10000px = 625 rem
// 1 rem = 16px
/*
//* ввод значения в px
let str = '123px';

//* отделение числа от px
let beforePx = Number(str.slice(0,3));
console.log(beforePx);
console.log(typeof(beforePx));

//* преобразование в rem
let rem = 0.0625;
let afterRem = rem * beforePx;
console.log(afterRem);

//* вывод rem
let finalRem = afterRem + 'rem';
console.log(finalRem);
*/

/*
let str = "font: 400 16px 'Montserrat', sans-serif;"

console.log(str.includes('px'));
console.log(str.search('px'));

let beforePx = Number(str.slice( str.search('px')-2, str.search('px'))) // только двузначные в одной строке
console.log(beforePx)

let rem = 0.0625;
let afterRem = rem * beforePx;
console.log(afterRem);

let finalRem = afterRem + 'rem';
console.log(finalRem);

let finalStr = str.slice(0, str.search('px')-2) + finalRem + str.slice(str.search('px')+2);
console.log(finalStr);
*/


// не работает, если ошибочное px было ДО



let str = ""

const submitBtn = document.getElementById('save');
submitBtn.onclick = function () {
    str = document.getElementById('BeforeStr').value;
    element = document.querySelector('.beforeInPX');
    element.innerHTML = str;

    if (!str.includes('px')) {
        element = document.querySelector('.selector');
        element.innerHTML = str;
    }

    while (str.includes('px')) {

        if (!isNaN(str[str.search('px')-1])) {
            console.log('fine');
        } else {
            console.log('error');
            break;
        }
        console.log(str.includes('px'));
        console.log(str.search('px')); 
        
        // ' '... = [?]
        //px = [12] // p = [12], x [] = p [] + 1, x [] = [13]
        // ...' ' = [12+2]
        
        let nextStr = str;
        console.log('str = ' + nextStr);
        
        // убираю с конца до px
        while (nextStr[nextStr.length-2]+nextStr[nextStr.length-1] !== 'px') {
        
            // console.log(nextStr[nextStr.length-2]+nextStr[nextStr.length-1]);
            // console.log(nextStr.length)
            // console.log(!nextStr.includes(' '))
        
            nextStr = nextStr.slice(0, nextStr.lastIndexOf(' '));
            console.log('nextStr = ' + nextStr);
            if (nextStr.length === 0 || !nextStr.includes(' '))  {
                break;
            }
        }
        
        // убираю начало до последнего пробела, если найден px
        if (nextStr[nextStr.length-2]+nextStr[nextStr.length-1] === 'px') {
            nextStr = nextStr.slice(nextStr.lastIndexOf(' ')+1, nextStr.length);
            console.log(nextStr);
        }
        
        console.log(str.indexOf(nextStr)); // поиск значения в px в изначальной строке
        
        let beforePx = nextStr.slice(0, nextStr.indexOf('px'));
        
        //убрали px и превратили в число
        beforePx = Number(beforePx);
        console.log(beforePx);
        
        
        let rem = 0.0625;
        let afterRem = rem * beforePx;
        console.log(afterRem);
        
        let finalRem = afterRem + 'rem';
        console.log(finalRem);
        
        str = str.slice(0, str.indexOf(nextStr)) + finalRem + str.slice(str.indexOf(nextStr)+finalRem.length);
        console.log('final === ', str);
        
        element = document.querySelector('.selector');
        element.innerHTML = str;
        
        }


    
}

// input.addEventListener("input", updateValue);

// function updateValue(e){
//     log.textContent = e.target.value;

// }



// input_str.input_str
// input_str.innerHTML =










