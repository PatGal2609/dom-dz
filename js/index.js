let tovarWatch = [
    {
        nameTovar: "Фитнес-браселет DEXP SB60",
        imgTovar: "./img/bracelet.jpg",
        corpus: "черный",
        remen: "черный",
        displaySize: "0.96",
        displayType: "OLED",
        bleutooth: true,
        OS: {
            os1: "Android 4.2",
            os2: "ios 8",
        }
    },
    {
        nameTovar: "Смарт-часы RunGo W2",
        imgTovar: "./img/smart1.jpg",
        corpus: "зеленый",
        remen: "зеленый",
        displaySize: ".3",
        displayType: "TFT (TN)",
        bleutooth: true,
        OS: {
            os1: "Android",
            os2: "ios",
        }
    },
    {
        nameTovar: "Смарт-часы Welbe Prime",
        imgTovar: "./img/smart2.jpg",
        corpus: "черный",
        remen: "розовый",
        displaySize: "1,69",
        displayType: "IPS",
        bleutooth: true,
        OS: {
            os1: "Android 5.0",
            os2: "ios 9",
        }
    },
];

let cards = Array.from(document.querySelectorAll('.card'));
console.log(cards);

cards.forEach(function(elem,index)
{
    elem.querySelector('.card-img-top').src = tovarWatch[index].imgTovar;
    elem.querySelector('.card-title').innerHTML = `<br>${tovarWatch[index].nameTovar}`;
    elem.querySelector('.card-text').innerHTML = `<br>Корпус: ${tovarWatch[index].corpus}<br>Ремешок: ${tovarWatch[index].remen}<br>Размер дисплея: ${tovarWatch[index].displaySize}<br>Тип дисплея: ${tovarWatch[index].displayType}<br> Блютуз: ${tovarWatch[index].bleutooth}<br>Операционные системы: ${tovarWatch[index].OS.os1}, ${tovarWatch[index].OS.os2}`
});


let endSold = new Date('2024-1-01'); 
let date = new Date();
let toEndOfSold = endSold - date;
let timeTo = document.querySelector('.timeTo');
let day = document.querySelector('.day')
let hours = document.querySelector('.hours')
let minute = document.querySelector('.minute')
let second= document.querySelector('.second')
day.innerHTML = Math.floor(toEndOfSold/(1000*60*60*24));
hours.innerHTML = Math.floor((toEndOfSold / (1000*60*60)) % 24);
minute.innerHTML = Math.floor((toEndOfSold / (1000*60)) % 60);
second.innerHTML = Math.floor(toEndOfSold/(1000) % 60);
diviser = document.querySelector('.d1')
// timeTo.innerHTML = `${day}  ${hours}  ${minute}  ${second} `;