const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}

//
const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
}
//

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
    return 0;
    break;
  case "professional":
    return 20;
    break;
  case "organization":
    return 50;
    break;
  default:
   return "Invalid subscription type!";
  }
}

getSubscriptionPrice("professional")
getSubscriptionPrice("organization")
getSubscriptionPrice("starter")
getSubscriptionPrice("random")
getSubscriptionPrice("premium")

//Mantıksal Operatörler
// < , >, >=, <=, ==, !=, ===, !==
// && : VE
// || : VEYA
// ! : DEĞİLSE

//Karar Yapıları
//if ,else if, else
//switch, case, break, default
//while, do while


let user = {
    name: "Semra",
    age: 16,
    email: "aaa@gmail.com",
    password: "123",
    city: "İstanbul",
    country: "Turkey"
}

//case: yaş 18 den büyükler kullanıcılar sistemde ebeveyn kontrolü olmadan ödeme yapabilir.

if (user.age >= 18) {
    console.log("Kullanıcı yaşı: ", user.age, "ödeme yapabilir")/*iki şartında doğru olduğu durumda çalışır.*/
} else if (user.age < 18 && user.age >= 15) {
    console.log(
        "Kullanıcı ebeveyn kontrolünde ödeme yapailir.")
} else {
    console.log("Kullanıcı ödeme yapamaz.")
}

const a = 15
const b = "15"

if (a === b) {
    console.log("a ile b aynıdır.")
} else {
    console.log("a ile b farklıdır.")
}

//== eşit mi diye sorsan tipini bir görür arkada eşitler ve eşittir der.
// Eğer === eşittir koyarsak tipine de bakıyor yani eşit olmadığını söyler. Çünkü biri string biri number
//MANTIKSAL OPERATÖRLERLE İLGİLİ DENEMELER YAP

if (true || false) {
    console.log("Veya Durumu Gerçekleşti.")
}

switch (user.age) {
    case user.age >= 18:
        console.log("Kullanıcı yaşı: ", user.age, "ödeme yapabilir")
        break;
    case user.age < 18 && user.age >= 15:
        console.log(
            "Kullanıcı ebeveyn kontrolünde ödeme yapailir.")
        break;
    default:
        console.log("Kullanıcı ödeme yapamaz.")
        break; 
}

//if else ile switch case yaptığı aynı GENELDE İF ELSE KULLANILIR.

/*
while (user.age < 18 && user.age >= 15) {
        console.log("Kullanıcı yaşı: ", user.age, "ödeme yapabilir")
        break;
}
*/
//for döngüsü 
const users = [
    "Abdullah",
    "Mehmet",
    "Ahmet",
    "Ali",
    "Veli",
    "Zeynep",
    "Fatih",
    "Cemal"
]
//String Literals 


console.log(users)

for (let i = 0; i < users.length; i++) {
    console.log( i+1, users[i])
}
//Back Think ``
//for (let i = 0; i < users.length; i++) {
//    console.log(`${i + 1} ${users[i]}`)
//}

//foreach

//users.forEach((user, index) => {
//    console.log(`${index + 1} ${user}`)
//})

//Fonksiyonlar
//Single Responsibility Principle

function login(username, password) {
    if (username === "Semra" && password === "123") {
        console.log("Giriş Yapıldı.")
    } else {
        console.log("Giriş Yapılamadı.")
    }
}

function register(username, password, email) {
    if (username === "Semra" && password === "123" && email === "aaa@gmail.com") {
        console.log("Kayıt Yapıldı.")
    } else {
        console.log("Kayıt Yapılamadı.")
    }
}

function forgotPassword(email) {
    if (email === "aaa@gmail.com") {
        console.log("Parola sıfırlama maili gönderildi.")
    } else {
        console.error("Parola sıfırlama maili gönderilemedi.")
    }

}

//Fonsiyon Temel Parçaları

// Fonskiyon adı : login
// Fonksiyon Parametreleri : username, password
// Geri Dönüş: return

//Geri Dönüşümlü Fonksiyonlar
function sum(a, b) {
    return a + b
}
const total = sum(50, 20)
console.log("Toplam: ", total)


//
const compareA = (a, b) => {
    return a > b
}

const result = compareA(21, 20)
console.log("Sonuc: ", result)

//String Methodlar

const ad = " Semra Genç     "

console.log(ad.toUpperCase()) //hepsi büyük harf
console.log(ad.toLowerCase()) //hepsi küçük harf
console.log(ad.trim()) //baş ve sondaki boşlukları alır.
console.log(ad.includes("Genç")) //içinde aratılan ifade var mı?
console.log(ad.charAt(3))
console.log(ad.slice(4, 8)) 
let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}
console.log(price);

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
}

checkAge(20)
checkAge(17)
checkAge(10)
checkAge(30)


function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(200, 20)
checkStorage(200, 150)
checkStorage(150, 180)

let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'



