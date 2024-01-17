/*------------------------------------------*/
/*            DATA TYPES                    */
/*----------------------------------------- */

x = 15
console.log(typeof x);

x = 15.32
console.log(typeof x);
// ikisi de number 


/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x = 15.34
console.log(typeof x)

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür

yas = 40
sayı = 56.87
console.log(yas);

sonuç = (sayı * 5) + 6
console.log(sonuç);

const pi = Math.PI
console.log(pi);

//? ondalıklı kısmı düzenlemek için kullanılan yöntemler ,aşağıdakilere ek olarak floor ve ceildde kullanılır.
// round
let yuvarlanmışsonuç = Math.round(sonuç)
console.log("sonuç:", sonuç);
console.log(yuvarlanmışsonuç);

// trunch round ile benzer ama en çok round kullanılır.

let truncsonuç = Math.trunc(sonuç)
console.log(truncsonuç);

// virgülden sonra gelen ondalık kısmından kaç tane göstermesini istiyorsanız tofixed (sayı)
// Bir sayı tofixed uygulandığında sonucu stringtir.

let fixedsonuç = sonuç.toFixed(2)
console.log(fixedsonuç);

// ! RANDOM metodu
// rastgele sayı üretmek için kullanılır.
// 0-1 arasında bir sayı üretir. ne zaman ihtiyaç olur? 
console.log(Math.round(Math.random() * 10));
// consolda sayfayı yeniledikçe sayı değişir.

// !sayının üssünü almak için
console.log(Math.pow(5, 3));
// ! sayının karekökü
console.log(Math.sqrt(144));

// console.clear ile consolu temizler


// !!STRİNG DATA TYPE


// let str1= "merhaba dünya 'hello'" bu şekilde de kullanılır.çift tırnakta.aşağıdaki şekildede kullanabilirz.
let str5 = "merhaba dünya\"hello"
let str1 = "merhaba dünya"
let str2 = 'merhaba dünya'
// burası dinamiklik sağlar.consola baktığımızda ad değiştikçe consolda da değişir.
ad = "helen"
let str3 = `merhaba dünya ${ad}`

console.log(str3);
// aşağıdaki kullanım genelde kullanılmaz bilelim diye verdi hoca
// let str4=new String("merhaba dünya")
console.log(typeof str4);
console.log(str1)
// parçalı olarak görebiliyoruz.index noya göre.peki harfi değiştirebiliyormuyuz
str1[4] = "ü"
// hata almayız ama değiştiremiyoruz.
console.log(str1[4])

str1 = "merhaba fs16"
console.log(str1);

let kimlik = 2552144412
let adsoyad = "john smith"
// !stringler yazılırken değişkenlerde kullanabilmemizi sağlar.
// console.log("personelimiz",adsoyad,"in kimlik numarası:",kimlik); BU UZUN OLUR ALTTAKİ DAHA KOLAY VE BUNU KULLANMALIYIZ.
console.log(`personelimiz ${adsoyad}'in kimlik numarası ${kimlik}`);

// !!BOOLEAN

// true ya da false değeri tutar.

let değer = 0
console.log(Boolean(değer));
// sıfır false

let değer2 = 1155
console.log(Boolean(değer2));
let değer3 = "abc"
console.log(Boolean(değer3));
// içi dolu olanalar genelde true 
let değer4 = ('')
console.log(Boolean(değer4));
// let değer5=null()
// console.log(Boolean(değer5));
let değer6 = undefined
console.log(Boolean(değer6));
// bunlar false döndürür.


let isopen = true

if (isopen == true) {
    console.log("sisteminiz açık");
}
else {
    console.log("sisteminiz kapalı");
}



/*-------------------------------------- */

// !NULL 
// biz bunu nerde kullnanacağız. şu an için değişken tanımlamyacağım hata vermemesi için bunu yazabilirz.
let personal = null
console.log(typeof null);
console.log(null + 5);
// bunu dedğimiz dede 0 olarak almış olacak.en çok boş geçemediğimiz yerlere kullanırız. baş ağğrıtmaz. satirda hata laınca ilerlemek için


// !!UNDEFİNED bir hata değildir bana tekrar değer döndür demek istiyor.içi dolmuş olcak.
// tanımladıktan sonra değer verebiliriz. hata vermez boş gözükür ama sonra veririz. sonra dödüğümüzde değer verebiliriz.
let phonenumber;
console.log(phonenumber);
console.log(typeof phonenumber);

phonenumber = "05343434444"
console.log(typeof phonenumber);

console.log(null == undefined);
// tipini false diyor ama eşittir true yapıyor bu javascriptle ilgili tipini javascripte bırakmamak gerek yeri gelinec göreceğiz.
console.log(null === undefined);

// !!NaN -> Not a number
let n;
let result = n+15
console.log(result);
// n ile 15 toplayamazsın n bir sayı değildir.
// sadece kelime girilmesi bir yerde bunun nun mı olduğunu bakmak için kullanabiliriz kontrol işlemleri yapabilirz.bunu ilerdede görürüz


// ! isnun ile sonuç nun mı değil mi kontrol ederiz.
console.log(isNaN(result));

let m;
let result2 =15
console.log(isNaN(result2));

// todo: NON PRİMITIVE
// ARRAY,OBJECT
// array
let personallist=["Ali","Ayşe","fatma"]
console.log(personallist);
// object
let personaldata={name:"ali",surname:"dilek"}
console.log(personaldata);

