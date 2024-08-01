//function keyword ile tanımlanır.
//fonsiyon adı
//Süslü parantezler içine çalışmasını istediğimiz komutları listelenir.
//Functions Definitions

function add(birinciSayi, ikinciSayi) { 
    console.log("Toplam: ", birinciSayi + ikinciSayi)
}

//Function Execution -Function Call
add(8, 15)
console.log("Global Scope Level 1")
//Reusable Code -Clean Code

function saveUserToken(token) {
    localStorage.setItem("token", token)
    //console.log(token)
}

saveUserToken("fgdfgdfg3323eeg")

function topla() {
    //console.log(arguments)
    const args = Array.from(arguments)
    console.log(args)

    let toplam = 0
    args.forEach((arg) => {
        toplam += arg
    })
    console.log("Toplam: ", toplam)
    //bu şekilde içi boş bir fonsiyona gelen değerleri topluyor ve yazdırıyoruz.
}   

topla(1, 2, 3, 4, 5)

//Doğrudan function ile çalışmaz.Function keyword ü tanımlanmalı. 
const cikart = function () {
    const numbers = Array.from(arguments)

    let cikarmaSonucu = 0
    numbers.forEach((number) => {
        cikarmaSonucu -= number
    })
    return cikarmaSonucu
}

const sonuc = cikart(1, 2, 3, 4, 36)
console.log(sonuc)

function ortalamaHesapla() {
    const args = Array.from(arguments)
    let toplam = 0
    args.forEach((number) => {
        toplam += number //Bunları sırayla gez ve kümülatif toplayarak git
    })
    return toplam / args.length//dizinin uzunluğu
}

const ortalama = ortalamaHesapla(1, 2, 3, 4, 36)
console.log(ortalama)

console.log("Çiçek böcek lale gül arı papatya vernik")

//

const TIMEOUT_TIME = 1000
const date = new Date() //Her yerden erişmek istediğimiz şeyleri global olarak tanımla.

function checkTimeOut() {
    const date = new Date()
    console.log("Timeout", TIMEOUT_TIME) //fonssyion içi innner tanımlanır. Global olmaz. 
}
console.log(date) //global olarak erişemiyor. Süslü tırnak içi önemli 
checkTimeOut();

//STACK FUNCTİON
//interpreter dil - Javascript, python, satır satır çalışıtırılır.
//compiler dil - Java,C# 
function fnA() {
    console.log("A Fonksiyonu")
}

function fnB() {
    console.log("B Fonksiyonu")
}

function fnC() {
    console.log("C Fonksiyonu")
}
fnA()
fnB()
fnC()

//Obje Kavramı 
const student = {
    name: "Semra",
    age: 28,
    gender: "woman",
    city: "Balıkesir",
    language: "Turkish",
    isMarried: true,
    programmingLanguages: ["Python", "Dart", "Javascript"]
}
//Key - Value
student.age = 30
console.log("Öğrencinin Yaşı: ", student.age)
console.log("Öğrencinin Adı: ",student.name)
console.log("Öğrencinin Bildiği Diller: ", student.programmingLanguages)
//
//onst isName = prompt("Adınız: ")
//const isSurname = prompt("Soyadınız: ")
//alert("Merhaba " + isName + " " + isSurname)

//
//const sayiBir = prompt("Birinci Sayıyı giriniz: ")
//const sayiIki = prompt("İkinci Sayıyı giriniz: ")

//toplamHesapla(sayiBir , sayiIki)

function toplamHesapla(a , b) {
    alert(parseInt(a) + parseInt(b))
}
 //messagePiece = message.split(" ").length
    //return messagePiece * pricePerWord;
function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;

}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
console.log(calculateEngravingPrice("JavaScript is in my blood", 20))
console.log(calculateEngravingPrice("Web-development is creative work", 40))
console.log(calculateEngravingPrice("Web-development is creative work", 20))

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const result = planets.slice(1, 3);
console.log(result); // ["Mars", "Venus"]
console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

planets.push("Jupiter")
planets.push("Saturn", "Neptune")
console.log(planets)
//
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1,4);
const lastThreeEls = fruits.slice(-3);

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const all= firstArray.concat(secondArray);

console.log(all); // ["Mercury", "Venus", "Mars", "Jupiter"];


//indexOf() metodu, elemanları karşılaştırırken katı eşitlik (===) gerçekleştirir.

function getSlice(array, value) {
    const index = array.indexOf(value);
    
    if (index === -1) {
        return [];
    }
    
    return array.slice(0, index + 1);
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"))
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"))

//push
const tags = [];

for(let i = 0; i < 3; i += 1) {
	tags.push(`tag-${i}`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]


function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
