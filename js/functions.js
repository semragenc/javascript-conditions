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
const isName = prompt("Adınız: ")
const isSurname = prompt("Soyadınız: ")
alert("Merhaba " + isName + " " + isSurname)

//
const sayiBir = prompt("Birinci Sayıyı giriniz: ")
const sayiIki = prompt("İkinci Sayıyı giriniz: ")

toplamHesapla(sayiBir , sayiIki)

function toplamHesapla(a , b) {
    alert(parseInt(a) + parseInt(b))
}