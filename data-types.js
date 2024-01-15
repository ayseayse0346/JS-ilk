/*------------------------------------------*/
/*            DATA TYPES                    */
/*----------------------------------------- */

x=15
console.log(typeof x);

x=15.32
console.log(typeof x);
// ikisi de number 


/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x=15.34
console.log(typeof x)

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür

yas=40
sayı=56.87
console.log(yas);

sonuç=(sayı*5)+6
console.log(sonuç);

const pi=Math.PI
console.log(pi);

//? ondalıklı kısmı düzenlemek için kullanılan yöntemler ,aşağıdakilere ek olarak floor ve ceildde kullanılır.
// round
let yuvarlanmışsonuç=Math.round(sonuç)
console.log("sonuç:",sonuç);
console.log(yuvarlanmışsonuç);

// trunch round ile benzer ama en çok round kullanılır.

let truncsonuç=Math.trunc(sonuç)
console.log(truncsonuç);

// virgülden sonra gelen ondalık kısmından kaç tane göstermesini istiyorsanız tofixed (sayı)

let fixedsonuç=sonuç. toFixed(2)
console.log(fixedsonuç);

// ! RANDOM metodu
// rastgele sayı üretmek için kullanılır.
// 0-1 arasında bir sayı üretir. ne zaman ihtiyaç olur? 
console.log(Math.round(Math.random()*10));
// consolda sayfayı yeniledikçe sayı değişir.

// !sayının üssünü almak için
console.log(Math.pow(5,3));
// ! sayının karekökü
console.log(Math.sqrt(144));

// console.clear ile consolu temizler
