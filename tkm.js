let oyuncuSkor = 0;
let pcSkor = 0;

function oyna(oyuncuSecimi){
    const secenekler = ['tas','kagit','makas'];

    const randomSayi = Math.floor(Math.random() * 3);
    const pcSecim = secenekler[randomSayi];

    const userImg = document.getElementById('user-hand');
    const pcImg = document.getElementById('pc-hand');

    userImg.classList.remove('animate-left');
    pcImg.classList.remove('animate-right');

    void userImg.offsetWidth;
    void pcImg.offsetWidth;

    userImg.src = `${oyuncuSecimi}.png`;
    pcImg.src = `${pcSecim}.png`;

    userImg.classList.add('animate-left');
    pcImg.classList.add('animate-right');

let sonuc ="";

if(pcSecim === oyuncuSecimi){
    sonuc = "Berabere!";
}
else if(
    (oyuncuSecimi ==='tas' && pcSecim ==='makas') ||
    (oyuncuSecimi ==='kagit' && pcSecim ==='tas') ||
    (oyuncuSecimi ==='makas' && pcSecim ==='kagit') 
){
    sonuc = "!Kazandınız!";
    oyuncuSkor++;
}
else {
    sonuc = "Kaybettiniz";
    pcSkor++;
}

document.getElementById('skor').innerHTML = 
        `Siz: ${oyuncuSkor} | Bilgisayar: ${pcSkor} <br> <b>${sonuc}</b>`;
}