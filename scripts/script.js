function OpenLink(id) {
    let name = ["ноутбуки", "смартфоны", "кофе"];
    let href = [
        "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA",
        "https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD",
        "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%84%D0%B5"];
    let offer = confirm(`Вы действительно хотите перейти по ссылке, чтобы прочитать про ${name[id]} ?`, "Да", "Нет");
    if (!offer) return alert(`Вы отказались просматривать дополнительную информацию про ${name[id]}!`);
    window.open(href[id], '_blank');
    return;
}

let newSymbolID = 1;
let TopStatus = false;

setInterval(TimeLogoСolor, 100);
function TimeLogoСolor() {
    let oldid = newSymbolID == 1 ? 14 : newSymbolID - 1;
   
    if(TopStatus == false) {
        document.getElementById(`logo_${oldid}`).style.color = "#0000e6";
        document.getElementById(`logo_${newSymbolID}`).style.color = "yellow";
    } else {
        document.getElementById(`logo_${oldid}`).style.color = "#505050";
        document.getElementById(`logo_${newSymbolID}`).style.color = "white";
    }
    newSymbolID = newSymbolID < 14 ? 
        ++newSymbolID : 1;
    return;
}

let headerColor = 1;
let headerTextID = 1;

setInterval(HatColor,  500);
function HatColor() {
    let changecolor = TopStatus == false ?
        ["", "white", "olive", "yellow", "red", "black", "chocolate", "pink", "green", "cyan", "mediumvioletred", "brown", ""] :
        ["white", "grey", "white", "grey", "white", "grey", "white", "grey", "white", "grey", "white", "grey", "white"];
    document.getElementById(`header_${headerTextID}`).style.color = changecolor[headerColor];

    if (headerTextID == 6) {
        if (headerColor <= 12) {
            headerColor++;
        } else {
            headerColor = 1;
        }
    }
    if (headerTextID < 6) {
        headerTextID++;
    } else {
        headerTextID = 1;
    }
    return;
}

let photoappears = 0.0;
let photoappears_timer = setInterval(PhotoAppears, 25);
function PhotoAppears() {
    if (TopStatus == true) return;
    photoappears += 0.01;
    if (photoappears >= 1.0) {
        clearInterval(photoappears_timer);
        photoappears = Math.floor(photoappears);
    }
    document.getElementById("main_photo").style.opacity = photoappears;
    return;
}

let style = document.createElement('style');

function SelectTopic(value=!TopStatus) {
    headerColor = 1;
    TopStatus = value;
    Music_CreateTracksList();
    Music_CreateAlbumsList();

    if (value == false) {
        document.getElementById("button_topic").style = "color:white;background:black;";
        document.getElementById("button_topic").value = "Тёмная тема";
    } else {
        document.getElementById("button_topic").style = "color:black;background:white;";
        document.getElementById("button_topic").value = "Светлая тема";
    }
    if (value == false) {
        document.body.style.background = "";
        for (let i = 1; i < 15; i++) {
            if (i < 15) {
                document.getElementById(`logo_${i}`).style.color = "";
            }
            if (i < 13) {
                document.getElementById(`navid_${i}`).style.background = "";
            }
        }
        document.getElementById("main_photo").style = "";
        document.getElementById("main_photo").style.opacity = "1";
        document.getElementById("table_1_cool_1").style = "";
        document.getElementById("table_1_cool_2").style = "";
        document.getElementById("table_1").classList.remove("hover_2");
        document.getElementById("table_1").classList.add("hover_1");
        document.getElementById("image_Jim_Carrey").style.outline = "";
        document.getElementById("gadget_sand_coffee").style.outline = "";
        document.getElementById("video_gameextream").style.outline = "";
        document.getElementById("music_image").style.outline = "";
        document.getElementById("music-panel").style.background = "";
        document.getElementById("music_progress").classList.remove("music_night_1");
        document.getElementById("music_progress").classList.remove("music_night_2");
        document.getElementById("music_progress").classList.remove("music_night_3");
        document.getElementById("music_progress").classList.add("music_day_1");
        document.getElementById("music_progress").classList.add("music_day_2");
        document.getElementById("music_progress").classList.add("music_day_3");
        document.getElementById("music_albumlist").style.background = "";
        document.getElementById("music_tracklist").style.background = "";
        if (music_OnRandom == true) {
            document.getElementById("music_previoustrack").style.background = "#178282";
        } else {
            document.getElementById("music_previoustrack").style.background = "";
        }
        document.getElementById("music_pause").style.background = "";
        document.getElementById("music_nexttrack").style.background = "";
        document.getElementById("music_minus").style.background = "";
        document.getElementById("music_volum").style.background = "";
        document.getElementById("music_plus").style.background = "";
        document.getElementById("music_currenttime_-5second").style.background = "";
        document.getElementById("music_playbackrate-").style.background = "";
        document.getElementById("music_speedtext").style.background = "";
        document.getElementById("music_playbackrate+").style.background = "";
        document.getElementById("music_currenttime_+5second").style.background = "";
        document.getElementById("matetial_learn_1").style = "background:#1aa1a1;color:black;";
        document.getElementById("matetial_learn_2").style = "background:#1aa1a1;color:black";
        document.getElementById("copyright").style.color = "black";
    } else {
        document.body.style.background = "#383838";
        for (let i = 1; i < 15; i++) {
            if (i < 15) {
                document.getElementById(`logo_${i}`).style.color = "#505050";
            }
            if (i < 7) {
                document.getElementById(`header_${i}`).style.color = "grey";
            }
            if (i < 13) {
                document.getElementById(`navid_${i}`).style.background = "#2c2c2c";
            }
        }
        document.getElementById("main_photo").style = "outline:#2c2c2c solid 4px;opacity:0.5;";
        document.getElementById("table_1_cool_1").style.background = "#383838";
        document.getElementById("table_1_cool_2").style.background = "grey";
        document.getElementById("table_1").classList.remove("hover_1");
        document.getElementById("table_1").classList.add("hover_2");
        document.getElementById("image_Jim_Carrey").style.outline = "#2c2c2c solid 4px";
        document.getElementById("gadget_sand_coffee").style.outline = "#2c2c2c solid 4px";
        document.getElementById("video_gameextream").style.outline = "#2c2c2c solid 4px";
        document.getElementById("music_image").style.outline = "#2c2c2c solid 4px";
        document.getElementById("music-panel").style.background = "#2c2c2c";
        document.getElementById("music_progress").classList.remove("music_day_1");
        document.getElementById("music_progress").classList.remove("music_day_2");
        document.getElementById("music_progress").classList.remove("music_day_3");
        document.getElementById("music_progress").classList.add("music_night_1");
        document.getElementById("music_progress").classList.add("music_night_2");
        document.getElementById("music_progress").classList.add("music_night_3");
        document.getElementById("music_albumlist").style.background = "white";
        document.getElementById("music_tracklist").style.background = "white";
        if (TopStatus == true && music_OnRandom == true) {
            document.getElementById("music_previoustrack").style.background = "black";
        } else {
            document.getElementById("music_previoustrack").style.background = "#383838";
        }
        document.getElementById("music_pause").style.background = "#383838";
        document.getElementById("music_nexttrack").style.background = "#383838";
        document.getElementById("music_minus").style.background = "#383838";
        document.getElementById("music_volum").style.background = "#383838";
        document.getElementById("music_plus").style.background = "#383838";
        document.getElementById("music_currenttime_-5second").style.background = "#383838";
        document.getElementById("music_playbackrate-").style.background = "#383838";
        document.getElementById("music_speedtext").style.background = "#383838";
        document.getElementById("music_playbackrate+").style.background = "#383838";
        document.getElementById("music_currenttime_+5second").style.background = "#383838";
        document.getElementById("matetial_learn_1").style = "background:#2c2c2c;color:white;";
        document.getElementById("matetial_learn_2").style = "background:#2c2c2c;color:white;";
        document.getElementById("table_1").classList.remove("table_1_1");
        document.getElementById("table_1").classList.add("table_1_2");
        document.getElementById("copyright").style.color = "white";
    }
    return;
}

function onmousebutton_navid(id, value) {
    let elem = document.getElementById(`${id}`);
    if (value == false) {
        if (TopStatus == false) {
            elem.style.background = "#178282";
        } else {
            elem.style.background = "#2c2c2c";
        }
        
    } else {
        if(TopStatus == false) {
            elem.style.background = "#1aa1a1";
        } else {
            elem.style.background = "#696969";
        }
    }
    return;
}

function onmousebutton_music(name, value) {
    if (name == "music_previoustrack" && music_OnRandom == true) return true;
    let elem = document.getElementById(name);
    if (TopStatus == false) {
        if(value == true) {
            elem.style.background = "#b0c4c4";
        } else {
            elem.style.background = "";
        }
    } else {
        if(value == true) {
            elem.style.background = "grey";
        } else {
            elem.style.background = "#383838";
        }        
    }
    return;
}

function onmousebutton_matetiallearn(id, value) {
    let elem = document.getElementById(`matetial_learn_${id}`);
    if (value == false) {
        if(TopStatus == false) {
            elem.style = "background:#1aa1a1;";
        } else {
            elem.style = "background:#2c2c2c;color:white;";
        }
    } else {
        if(TopStatus == false) {
            elem.style = "background:#50b4b4;";
        } else {
            elem.style = "background:#BEBEBE;";            
        }
    }
    return;
}

function onmousebutton_topic(value) {
    let elem = document.getElementById("button_topic");
    if (value == false) {
        if (TopStatus == false) {
            elem.style = "color:black;background:white;";
        } else {
            elem.style = "color:white;background:black;";    
        }
    } else {
        if (TopStatus == false) {
            elem.style = "color:white;background:black;";
        } else {
            elem.style = "color:black;background:white;";    
        }
    }
    return;
}

function Age() {
    let birthday = new Date(1997, 7, 9, 14);
    let birthday_year = birthday.getFullYear();
    let birthday_value = birthday.getMonth() * 30 * 24 + birthday.getDate() * 24 + birthday.getHours();
    let data = new Date();
    let year = data.getFullYear();
    let year_value = data.getMonth() * 30 * 24 + data.getDate() * 24 + data.getHours();
    year = year - birthday_year;
    if (birthday_value > year_value) {
        year--;
    }
    document.getElementById("age").innerText = year + " " + AgeText(year);
    return;
}

function AgeText(value) {
    value = value % 100;
    if (value > 20) {
        value = value % 10;
    }
    if (value < 0) return "неизвестен";
    else if (value == 1) return "год";
    else if (value >= 2 && value <= 4) return "года";
    else return "лет";
}

document.getElementById('menu-button').addEventListener('click', () => {
    const nav = document.getElementById('nav');
    if(nav.style.visibility == "" || nav.style.visibility != 'visible') {
        nav.style.visibility = 'visible';
    }
    else {        
        nav.style.visibility = 'hidden';
    }
});

window.addEventListener('resize', () => {
    const nav = document.getElementById('nav');
    const menu_Button = document.getElementById('menu-button');
    if(document.documentElement.clientWidth < 1000) {
        nav.style.visibility = 'hidden';
        menu_Button.style.visibility = 'visible';
    } else {
        nav.style.visibility = 'visible';
        menu_Button.style.visibility = 'hidden';
    }
  });