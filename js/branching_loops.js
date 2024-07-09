const beklenen = "Atlantis"


console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null

//Problem : Bir kişinin yaşını öğrenmek istemesi
//Data Structure : Şimdii zaman-sayısal veri, Doğduğu Zaman-sayısal veri
//Çıktı : Kullanıcının yaşı- sdayısal veri

//Time Complexity:
//1- programın geliştirlme süresi
//2- programın çalışırken harcayacağı zaman

//Space Complexity : Programın hafızada kapladığı alanın hesaplanması.

//Big 0 Notion: Algoritmanın Sınırlandırılması

//Divide And Conquer : Büyük problemleri parçala küçük ve basit probblemler haline getir. Küçük problemi çözerken büyük problemi de çözmüş ol.

//Brute Force: Çözümü sadeleştirmek

//Flow Chart: Problemleri görselleştirme Yönetim (smartdraw)

//Pseudo Kod: Kullanıının Sisteme Kayıt olması
//1. Kullanıcının mailini al
//2. Kullanıcının şifresini al
//3. Kullanıcının şifresini tekrar al
//4. Kullanıcının cep numarasını al
//5. Kullanıcının mail ve cep numarasına doğrulama kodunu gönder
//6. Kullanıcının aldığı doğrulama kodunu sisteme girmesini sağla ve doğruluğunu kontrol et.
//7. Kullanıcının kaydını gerçekleştir. Kullanıcıya karşılama maili gönder. 

function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
}

checkAccess("pro")
checkAccess("starter")
checkAccess("vip")
checkAccess("free")

//

function getSubstring(string, length) {
   return string.slice(0, length);
}


getSubstring("Hello world", 3)
getSubstring("Hello world", 5)
getSubstring("Hello world", 8)
getSubstring("Hello world", 11)
getSubstring("Hello world", 0)

//
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"

console.log('saMsUng' === 'samsung'); // false
console.log('saMsUng' === 'SAMSUNG'); // false

const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true

///////////////////////////////////////////////////////


const kullanicilar = [
    {
        name: "Semra",
        age: 28,
        gender: "female",
        employeType: "developer"
    },
    {
        name: "Gençay",
        age: 31,
        gender: "male",
        employeType: "developer"
    },
    {
        name: "Temel",
        age: 79,
        gender: "male",
        employeType: "manager"
    },
    {
        name: "Atlantis",
        age: 0,
        gender: "female",
        employeType: "manager"
    },
    {
        name: "Ayşen",
        age: 59,
        gender: "female",
        employeType: "driver"
    }
]
//
let totalCount = 0;

kullanicilar.forEach((kullanici) => {
    if (kullanici.name.includes("a")) {
        totalCount ++ 
    }
})

console.log("Toplam ismine a harfi geçenler: ", totalCount)
//
let totalAge = 0;

kullanicilar.forEach((kullanici) => {
    totalAge += kullanici.age
})
console.log("Kullanıcıların yaşlarının toplamı: ",totalAge)
//
let avarageAge = 0;

kullanicilar.forEach((kullanici) => {
     avarageAge += kullanici.age
})
console.log("Kullanıcıların yaşlarının ortalaması: ", avarageAge / kullanicilar.length)
//
let totalFemale = 0
kullanicilar.forEach((kullanici) => {
    if (kullanici.gender == "female") {
        totalFemale++
    }
})
console.log("Kadın sayısı: ", totalFemale)
//
let totalMale = 0
kullanicilar.forEach((kullanici) => {
    if (kullanici.gender == "male") {
        totalMale++
    }
})
console.log("Erkek sayısı: ", totalMale)

//
let totalDeveloper = 0
kullanicilar.forEach((kullanici) => {
    if (kullanici.employeType == "developer") {
        totalDeveloper++
    }
})
console.log("Toplam developer sayısı: ", totalDeveloper)

//

let totalManager = 0
kullanicilar.forEach((kullanici) => {
    if (kullanici.employeType == "manager") {
        totalManager++
    }
})
console.log("Toplam manager sayısı: ", totalManager)

//

let totalDriver= 0
kullanicilar.forEach((kullanici) => {
    if (kullanici.employeType == "driver") {
        totalDriver++
    }
})
console.log("Toplam driver sayısı: ", totalDriver)
console.log("Kullanıcılar: ", kullanicilar)

//Listeye daha sonra veri ekleyebiliyorum : PUSH İLE
kullanicilar.push({ name: "Can", age: 10, gender: "male", employeType: "HR" })

//Lisrtedeki son eklenen elemanı silebiliyorum: POP İLE
kullanicilar.pop()

//Listeyi filtreler: FİLTER İLE
const filteredUser = kullanicilar.filter((kullanici) => {
    return kullanici.age > 30
})
console.log("Filtrelenen kişiler: ", filteredUser)

//Listeyi değiştirebilirim: MAP İLE
const mappedUser = kullanicilar.map((kullanici) => {
    if (kullanici.name === "Can") {
        kullanici.name = "Obama"
    }
    return kullanici
})
console.log(mappedUser)

//Sıralama işlemi yapabilirim : SORTED İLE
const sortedUser = kullanicilar.sort((a, b) => {
    return b.age - a.age
})
console.log(sortedUser)

//

function calculateTotal(number) {
  let count = 1;
  let total = 0;

  while (count <= number) {
    total += count;
    count += 1;
  }

  return total;
}
