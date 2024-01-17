/*---------------OPERATORS------------------*/

// !!ARİTHMETİC OPERATORS(4 işlem ve üssü ve % yani kalan )

let a=10
let b=2

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);  
console.log(a%b);
// saat dakika saniye falan hesaplar yapabiliriz.
console.log(360/60);
console.log(375%60);


let result =365/6
console.log(result);
// nasıl yuvarlarız?math round ile 
// bana sadece 60 göstersin istersek sadece tam sayı kısmı için math trunc 

console.log(Math.trunc(result));
// tofixed stringe dönüştürür.
console.log(result.toFixed(2));
console.log( typeof result.toFixed(2));

// saat ve dakika bulma

let time=375

let hour=Math.trunc(time/60)
console.log(hour);

let munite=375%60
console.log(munite);
console.log(` 375 dakika${hour}:${munite}`);

// İNCREMENT/DECREMENT

// post ve pre olarak da adlandırılır

// POST İNCREMENT (önce değişkenin kendisi sonra artır--> önce yaz sonra artır. azalamada da aynı)
let x=5
console.log(x++);
console.log(x);
console.log(x--);
console.log(x);

// pre increment (önce artır sonra yaz) azaltmaa da aynı

console.log(++x);
console.log(--x);


/*-----------------ASSİGMENT OPERAYORS (ATAMA OPERATÖRLERİ)------------------ */
// let t=10
// let l=5

// console.log(t);
// console.log(l);


let t=10
let l=5
// t=l
console.log(t);
console.log(l);
// console.log(t=t+l);
console.log(t+=l);
console.log(t-=l);
console.log(t*=l);
console.log(t/=l);
console.log(t**=l);
console.log(t%=l);


// not math.trunch ile ilgili 
let sayı=45.9888
console.log(Math.trunc(sayı));
console.log(sayı);


/*----------COMPARASİON OPERATOR------ */
// karşılaştırma operatörleri bize Blolean sonuç döndürür.
let c=2
let d="2"
console.log(typeof c);
console.log(typeof d);
console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c!==d);

console.log(3>2);
console.log(3>=2);
console.log(3<2);
console.log(3<=2);

/*---------logigal operators----- */

// ! AND--> && (VE ANLAMINDADIR)

// mükemmelliyetçi herşey true olacak yoksa true vermez 

console.log(Boolean("merhaba"));
console.log(Boolean(0));
console.log(Boolean(2));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));

console.log(0 && [] && 2);
// false olunca direkt false verir. ilk gördüğü false verr.diğerleriine bakmaz bile 

console.log([] && "merhaba" && 5);
//  sonuncu trueyu yazar. 

//  !! OR -->||(veya)

// herşey false olsa bile bir tane true , true döndürmeye yeter.
// eğer içinde false olan değerler olsa ilk gördüğü false değerini döndürür.hepsi false ise en son false değerini verir.

console.log(0 || null || undefined);
console.log(0 || null || undefined || 2);
console.log("merhaba" || null || undefined || 2);
// !! !--> false olan değerin tersini almak istediğimizde herhangi bir şeyi tam tersi için kapalıysa açılsın ,açıksa kapansın.
console.log(! null);

