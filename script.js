//1 FOR
const dienos = Number.parseInt(window.prompt('Kiek dienų buvo dresuojamas Zinas?'));
let visasLaikas = 0;
for (let i = 1; i <= dienos; i++) {
    let laikas = Number.parseInt(window.prompt(`Kiek minučių buvo dresuojamas Zinas ${i} dieną?`));
    visasLaikas += laikas;
}
console.log(`Per ${dienos} dienas Zinas buvo dresuojamas ${visasLaikas} minučių.`);
console.log(`Vidutiniškai per dieną katinas buvo dresuojamas ${Math.round(visasLaikas / dienos * 100) /100} minučių.`);

//2
let pradzioje = Number.parseInt(window.prompt('Kiek braškių prinoko pirmąją dieną?'));
const daugiau = Number.parseInt(window.prompt('Keliomis braškėmis kiekvieną dieną prinoksta daugiau nei prieš tai buvusią?'));
const dien = Number.parseInt(window.prompt('Įveskite dienų skaičių'));
let visoBraskiu = pradzioje;

for (i = 2; i <= dien; i++) {
    pradzioje += daugiau;
    visoBraskiu += pradzioje;
}

console.log(`Per ${dien} dienas/-ų prinoko ${visoBraskiu} braškės/-ių.`);

//3
let kaina = Number.parseInt(window.prompt('Kokia pradinė prekės kaina?'));
const dalyviai = Number.parseInt(window.prompt('Kiek yra aukciono dalyvių?'));

for (i = 1; i <= dalyviai; i++) {
    let didinimas = Number.parseInt(window.prompt(`Kiek padidinti prekės kainą pasiūlė ${i} dalyvis?`));
    kaina += didinimas;
}
console.log(`Galutinė prekės kaina bus ${kaina} litai/-ų.`);

//4
const duotasSkaicius = Number.parseInt(window.prompt('Įveskite skaičių'));
let dalikliuSuma = 0;

for (i = 1; i < duotasSkaicius; i++) {
    if (duotasSkaicius % i === 0)
    dalikliuSuma += i;
}

if (duotasSkaicius === dalikliuSuma) 
    console.log('Skaičius tobulas');
    else
    console.log('Skaičius nėra tobulas');

//5
let skaicius = Number.parseInt(window.prompt('Įveskite skaitmenį nuo 1 iki 9'));
const nariai = Number.parseInt(window.prompt('Kelių sekos narių sumą norite rasti?'));
let suma = skaicius;

for (i = 2; i <= nariai; i++) {
    skaicius = skaicius * 10 + skaicius;
    suma += skaicius;
}
console.log(`Pirmųjų ${nariai} sekos narių suma yra ${suma}.`);

//1 WHILE
const m = Number.parseInt(window.prompt('Įveskite pirmą skaičių'));;
const n = Number.parseInt(window.prompt('Įveskite antrą skaičių'));;
let bmk = m;

while (bmk % n != 0) {
    bmk += m;
}
console.log('bmk = ' + bmk);

//2
let pradinisAtlyginimas = Number.parseInt(window.prompt('Koks atlyginimas mokamas programuotojui?'));
const padidinimas = Number.parseInt(window.prompt('Kiek eurų darbdavys pažadėjo padidinti atlyginimą kas mėnesį?'));
let poMetu = pradinisAtlyginimas;
let po3Menesiu = pradinisAtlyginimas;
let i = 1;

while (i <= 12) {
    poMetu = poMetu + padidinimas;
    i++;
}
console.log(`Po metų atlyginimas bus ${poMetu} eurų.`);

i = 1;

while (i <= 3) {
    po3Menesiu = po3Menesiu + padidinimas;
    i++;
}
console.log(`Po 3 mėnesių atlyginimas bus ${po3Menesiu} eurų.`);

i = 0;
const dvigubas = pradinisAtlyginimas * 2;
let atlyginimas = pradinisAtlyginimas;

while (atlyginimas <= dvigubas) {
    atlyginimas += padidinimas;
    i++;
}
console.log(`Po ${i} mėnesių jo atlyginimas bus daugiau nei dvigubai didesnis.`);

i = 0;
atlyginimas = pradinisAtlyginimas;

while (atlyginimas < 4000) {
    atlyginimas += padidinimas;
    i++;
}
console.log(`Po ${i} mėnesių jo atlyginimas bus ne mažesnis už 4000 eurų.`);

//3
let sk = Number.parseInt(window.prompt('Įveskite skaičių'));
let atbulai = 0;
let skaitmuo = 0;

while (sk > 0) {
    skaitmuo = sk % 10;
    atbulai = atbulai * 10 + skaitmuo;
    sk = Math.floor(sk / 10);
}

console.log(atbulai);

//4
let skaic = Number.parseInt(window.prompt('Įveskite natūralųjį skaičių'));
let sumaa = 0;
let masyvas = [];
let i = 1;

while (sumaa < skaic) {
    sumaa = sumaa + i;
    masyvas.push(i);
    i++;
}

if (sumaa === skaic) 
    console.log(masyvas);
    else
    console.log('Tokios sekos nėra.');

//5
let skM = Number.parseInt(window.prompt('Įveskite pirmąjį natūralųjį skaičių'));
let skN = Number.parseInt(window.prompt('Įveskite antrąjį natūralųjį skaičių'));
let i = 1;
let dbd = 0;

while (i <= skM) {
    if (skM % i === 0 && skN % i === 0)
    dbd = i;
    i++;
}

if (dbd === 1) 
    console.log('Skaičiai tarpusavy pirminiai.');
else
    console.log('Skaičiai tarpusavy sudėtiniai.');

//6
let ska = Number.parseInt(window.prompt('Įveskite natūralųjį skaičių'));
let fakt = 1;
let i = 0;

do {
    i++; 
    fakt = fakt * i;  
} while (fakt < ska);

if (fakt === ska)
    console.log(`Skaičius yra ${i} faktorialas.`);
    else
    console.log('Skaičius nėra faktorialas.');

//1 Masyvai
const spinduliai = [2, 4, 7, 4, 6, 1, 5, 7, 5, 7];
const max = spinduliai.reduce(function(a, b){
    return Math.max(a, b);
});
const maxSpinduliai = spinduliai.filter(function(item){
    return item === max;
});
console.log(`Didžiausias spindulys: ${max}, didžiausių apskritimų yra: ${maxSpinduliai.length}.`);

//2
const indeliai = [1000, 955, 200, 1420, 2000, 605, 750, 500, 3050, 5400, 1200];
let daugiauNei1000 = 0;

for (vienas of indeliai) {
    if (vienas > 1000)
    daugiauNei1000++;
}
console.log('Žmonių, kurių indėlis daugiau nei 1000Lt: ' + daugiauNei1000);

//3
const praleistosPamokos = [1, 5, 2, 11, 4, 5, 3, 12, 7, 6];
praleistosPamokos.sort(function(a, b){
    return b - a;
});

console.log(praleistosPamokos);

//4
const kartoteka = [10, 16, 25, 11, 27, 49, 42, 56, 23, 26];
console.log(kartoteka);
kartoteka.forEach(function(korteles, skyrius){
    if (skyrius % 2 === 0)
    kartoteka[skyrius] = korteles + skyrius;
});
console.log(kartoteka);

//5
const pazymiai = [[8, 9, 6], [3, 5, 9], [7, 10, 10], [8, 5, 8], [7, 8, 9], [6, 8, 10]];
console.log(pazymiai);
let pazymiuSuma = 0;
let vidurkis = 0;
let vidurkiai = [];

for (mokinys of pazymiai) {
    for (pazymys of mokinys) {
        pazymiuSuma += pazymys; 
    }
    vidurkis = Math.round(pazymiuSuma / mokinys.length * 100) / 100;
    vidurkiai.push(vidurkis);
    pazymiuSuma = 0;
}

console.log(vidurkiai);