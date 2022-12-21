function OpenLink(id) {
    let name = ["ноутбуки", "смартфоны", "кофе"];
    let href = [
        "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA",
        "https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD",
        "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%84%D0%B5"
    ];
    let offer = confirm(`Вы действительно хотите перейти по ссылке, чтобы прочитать про ${name[id]} ?`, "Да", "Нет");
   
    if (!offer) {
        alert(`Вы отказались просматривать дополнительную информацию про ${name[id]}!`);
        return;
    }
    window.open(href[id], '_blank');
    return;
}

let newSymbolID = 1;
setInterval(TimeLogoСolor, 100);
function TimeLogoСolor() {
    let oldid = newSymbolID == 1 ? 14 : newSymbolID - 1;
    let elem = document.getElementById(`logo_${oldid}`);
    elem.style.color = "#0000e6";
    elem = document.getElementById(`logo_${newSymbolID}`);
    elem.style.color = "yellow";
    newSymbolID = newSymbolID < 14 ? ++newSymbolID : 1;
    return;
}

let headerColor = 1;
let headerTextID = 1;
setInterval(HatColor,  500);
function HatColor() {
    let elem = document.getElementById(`header_${headerTextID}`);
    let changecolor = ["", "white", "yellow", "red", "black", "#61a4ad", "pink", "green", "cyan", ""];
    elem.style.color = changecolor[headerColor];

    if (headerTextID == 6) {
        headerColor = headerColor <= 8 ? ++headerColor : 1;
        
    }
    headerTextID = headerTextID < 6 ? ++headerTextID : 1;
    return;
}

let photoappears = 0.0;
let photoappears_timer = setInterval(PhotoAppears, 25);
function PhotoAppears() {
    let main_Photo = document.getElementById("main_photo");
    
    if (photoappears < 1.0) {
        photoappears += 0.01;
    } else {
        clearInterval(photoappears_timer);
        photoappears = Math.floor(photoappears);
    }
    main_Photo.style.opacity = photoappears;
    return;
}