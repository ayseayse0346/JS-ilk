x = 15
ad = "helen"
yas =40

console.log(yas);
console.log(ad);
// JAVASCRİPTTE DEĞİŞKENLER
// cons-let
// ES6dan sonra gelen yapılardır.
// değişken tanımlama için kullanılr
// !! CONST değiştirilemeyen
// const:constant:sabit
const tckimlik=123456789
tckimlik=5234121454
// alınacak hata 

// !LET değiştirilebilen
let toplam=0

x=60
y=70
toplam=x+y
console.log(toplam);

// GLOBAL ALAN 
// program içinde her ortamdan ulaşılabilen alandır.

// LOCAL ALAN 
// bir blok içidir. {}ile ifade edilen bölümler bloklardır.if bloğu ,whilw,for

const sayı=5

{
    // burası lokal alan
    console.log(sayı)
    const pi =3.14
}
// burda göremeyiz
console.log(pi);

// !!VAR heryerde geçerli global alanda da lokal alanda da kullanırız ama sınırlandırma nispeten iyiidr.lokalde tanımladığımı lokalde globalde kullandığımı lokalde kullanırım ama global alanda heryerden ulaşılabilir.apartman daire gibi.

// ! var heryerden erişilebilir.yeniden tanımlanabilir.
var number =90

{
console.log(number);
number =50
// number =50 burda hem 50 hem 90 verir. bu da kafa karşıklığı olur değerini aynı verme 
}

console.log(number);

// var number =90

// {
// console.log(number);
// }

// console.log(number);
/*
her iki yerde de tanımladı var değişkenini 
*/

