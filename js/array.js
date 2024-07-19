console.log("Hello")
//array- dizi
//Bunlar web servislerinden gelecek

//Built-in : Bir dil içerisinde daha önce tanımlanmış değişkenler, fonksiyonlar, sınıflar.
//Bir dilin özelliklerine hakim olduğunuzda neleri yapıp yapmaayacağınızı bilirsiniz ve yeni den tekereleği icat etmezsiniz. 
//Dizinin indeksi 0 dan başlar
const courses = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongoDB", "React Native"]

console.log(courses)
console.log(courses.length)
console.log(courses[0])
console.log(courses.length - 1)


//Array Manipulation
courses[0] = "Python"
console.log(courses)
console.table(courses)
console.info(courses)
//mor olanlar fonksiyon maviler ise değişken
console.log(courses.length) //değişken
console.log(courses.lastIndexOf("MongoDB")) //fonksiyon gördüğü son indeksi bulur.
console.log(courses.includes("MongoDB")) //fonksiyon
console.log(courses.reverse("MongoDB")) //fonksiyon - gördüğü ilk indeksi bulur.
console.log(courses.push("React Native")) //fonksiyon

//Değişkenlerin değerleri birbirlerine aktarılabilir.

//Kopyalama
const c = [1, 2, 3, 4]
const d = c;
console.log(c === d);
c[0] = 500;
console.log("c : ", c);
console.log("d : ", d);

//Tek eşittir = değer tanımlamak için
//Çift eşittir == değerleri karşılaştırmak için
//Üç eşittir === hem değeri hem tipini karşılaştırmak için

const fruitList = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya"];

const upfruitList = ["papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "watermelon"];

//Diziyi birleştirme
const newfruitList = fruitList.concat(upfruitList)
console.log(newfruitList)


//Diziyi dilimlere, parçalara ayırma
const slicedfruitList = newfruitList.slice(2, 6)
console.log(slicedfruitList)

//Dizide arama yapma.(İlk bulduğu date i yazdırır.)
const firstIndex = newfruitList.indexOf("date")
console.log(firstIndex) 

//splite bak.

//Diziyi birleştirirve belli bir formata dönüştürür.
const joinedArray = newfruitList.join(" ** ")
console.log(joinedArray)

//Diziden son elemanı çıkarır.
const poppedArray = newfruitList.pop()
console.log(poppedArray) //çıkarılan elemanı gösterir
console.log(newfruitList) //diziyi son eleman yokkemn döndürür

//Diziye eleman ekleme
const pushedArray = newfruitList.push("Pitahaya")
console.log(newfruitList)

//Dizilerdeki reduce, filter ve map fonksiyonlarını araştır.

//iteration : Dizi elemanlarını gezme

const friends = ["Ahmet", "Mehmet", "Veli"]


//tüm programlama dillerinde olan klasik for döngüsü

console.log ("Klasik for ile: ")
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}


console.log ("For Each ile: ")
friends.forEach(friend => {
    console.log(friend)
});

//For of yapısı
console.log ("For Of ile: ")
for (let friend of friends) { //in yaparsan indexi veriyor of yaparsan değeri veriyor.
    console.log(friend)
}