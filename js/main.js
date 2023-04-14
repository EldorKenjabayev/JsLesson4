/* let c = +prompt('to`rt xonali sonni kiriting :::')
c1 = c % 10
c2 = c % 100
c3 =  Math.floor(c2 /10) 
c4 = c % 1000
c5 = Math.floor(c4 / 100)
c6 = c % 10000
c7 = Math.floor(c6 / 1000)
alert(c1+c3+c5+c7)

let a = +prompt('uch xonali sonni kiriting :::' )
a1 = a % 10
a2 = a % 100
a3 =  Math.floor(a2 /10) 
a4 = a % 1000
a5 = Math.floor(a4 / 100)
alert(a5 + a3 + a1) 



let b = +prompt('ikki xonali sonini kiriting :::')
b1 = b % 10
b2 = b % 100
b3 = Math.floor(b2 / 10)
alert(b1 + b3) */

let kiritilganson = document.getElementById('kiritilganson')
let son = document.getElementById('son')

function sonningRaqmlar() {
  let number = +prompt("Iltimos, Hohlagan sonni kiriting:");
  let sum = 0;
  kiritilganson.innerHTML =+ number + kiritilganson.innerHTML
  while (number) {
      sum += (number % 10);
      number = Math.floor(number / 10);
    }
    
    return sum;
}

let sum = sonningRaqmlar()
son.innerHTML=+sum+son.innerHTML
