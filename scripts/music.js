const Music_FileName = [
    "",
    "Markul - Syrena",
    "Markul - Episode 2",
    "Markul - Карусель",
    "Markul - Белка",
    "Markul - Episode 3",
    "Markul feat. SALUKI - Без фокусов",
    "Markul - Cheat Code",
    "Markul - Episode 4",
    "Markul - Бумеранг",
    "Markul - Cuba Libre",
    "Markul - Никто не увидит",
    "Markul - Episode 5",
    "Markul - Вредные привычки",
    "Markul feat. ANIKV - Rick James",
    "Markul - Zima Blue",
    "Markul - Episode 6",
    "Markul - Лабиринт",
    "Markul feat. Dyce - Dali",
    "Markul - Полёт нормальный",
    "Markul - 10,000 Ночей"
];
let randomMusic_FileName = Array.from(Music_FileName);

const Music_Download = [
    "",
    "https://kmuz.net/mp3-track/1256242980-markul-syrena",
    "https://kmuz.net/mp3-track/1668960390-markul-episode-2",
    "https://kmuz.net/mp3-track/1236956775-markul-karusel",
    "https://kmuz.net/mp3-track/284855360-markul-belka",
    "https://kmuz.net/mp3-track/2134549025-markul-episode-3",
    "https://kmuz.net/mp3-track/1182447618-markul-saluki-bez-fokusov",
    "https://kmuz.net/mp3-track/750444515-markul-cheat-code",
    "https://kmuz.net/mp3-track/200996284-markul-episode-4",
    "https://kmuz.net/mp3-track/1299419388-markul-bumerang",
    "https://kmuz.net/mp3-track/1379601309-markul-cuba-libre",
    "https://kmuz.net/mp3-track/964370814-markul-nikto-ne-uvidit",
    "https://kmuz.net/mp3-track/129714015-markul-episode-5",
    "https://kmuz.net/mp3-track/371976677-markul-vrednye-privychki",
    "https://kmuz.net/mp3-track/1861967160-markul-anikv-rick-james",
    "https://kmuz.net/mp3-track/1225372597-markul-zima-blue",
    "https://kmuz.net/mp3-track/893088537-markul-episode-6",
    "https://kmuz.net/mp3-track/477861626-markul-labirint",
    "https://kmuz.net/mp3-track/2059119835-markul-dyce-dali",
    "https://kmuz.net/mp3-track/1107018420-markul-polyot-normalnyj",
    "https://kmuz.net/mp3-track/675010709-markul-10000-nochej",
];
const music_Max = Music_FileName.length - 1;
let music_OnRandom = false;
let music_Id = Music_RandomTreck();
let music_OldId = 0;
let music_Play = true;
let music_Muted = false;
let music_Volume = 1;
let music_PlayBackRate = 1;
let music_SelectTime = null;

let Music_ExecutorHref = new Map([
    ["Markul", "https://ru.wikipedia.org/wiki/Markul"],
    ["SALUKI", "https://ru.wikipedia.org/wiki/Saluki"],
    ["ANIKV", "https://ru.wikipedia.org/wiki/ANIKV"],
    ["Dyce", "https://dtf.ru/u/459777-spiderman68/957190-dyce-biografiya-tvorchestvo-i-lichnaya-zhizn"],
]);

function Music_Treck() {
    let message = "";
    let music_Player = document.getElementById("music_player");
    let music_Message = document.getElementById("music_message");
    let music_Number = document.getElementById("music_number");
    let ExecutorOne = Music_Executor(music_Id);
    let Feat = Music_IsExecutor(music_Id) == -1 ?
        "" : " feat. ";
    let Executor = Music_IsExecutor(music_Id) == -1 ? 
        "Исполнитель " : "Исполнители ";
    music_Player.src=`.\\music\\${Music_FileName[music_Id]}.mp3`;
    music_Player.autoplay = music_Play == true ? 
        "autoplay" : "";
    music_Player.muted = music_Muted == true ? 
        "muted" : "";
    music_Player.playbackRate = music_PlayBackRate;
    music_Player.volume = music_Volume;

    if(music_OnRandom == true) {
        music_Number.innerText = `( ${(music_Max-randomMusic_FileName.length+1)}/${music_Max} )`;
    } else {
        music_Number.innerText = `( ${(music_Id)}/${music_Max} )`;
    }
    
    if (Feat.length > 0) {
        let parts = Music_FileName[music_Id].slice(Music_FileName[music_Id].indexOf('feat.')+6).split(' ');
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] == '-') break;
            message += ` <a href="${Music_ExecutorHref.get(parts[i])}" title="Ссылка на биографию ${parts[i]}" target="_blank"><i >${parts[i]}</i></a>`; 
        }
    }
    music_Message.innerHTML = Executor + 
        `<a href="${Music_ExecutorHref.get(ExecutorOne)}" title="Ссылка на биографию ${ExecutorOne}" target="_blank"><i >${ExecutorOne}</i></a>` + Feat + message + `, трек 
        <a href="${Music_Download[music_Id]}" title="Ссылка на трек &#8220;${MusicName(music_Id)}&#8220; ${Music_Year(music_Id)}" target="_blank">
            <cite>"${MusicName(music_Id)}" ${Music_Year(music_Id)}</cite>
        </a>.`;

    return;
}

function Music_Year(id) {
    return (1 <= id <= 20) ? "(2021)" : "(years)";
}

function Music_IsExecutor(id) {
    return Music_FileName[id].indexOf('feat.');
}

function Music_Executor(id) {
    return Music_FileName[id].slice(0, Music_FileName[id].indexOf(' '));
}

function MusicName(id) {
    return Music_FileName[id].slice(Music_FileName[id].indexOf('-') + 2);
}

function Music_Volume(value) {
    let music_Player = document.getElementById("music_player");
    let music_Vol = document.getElementById("music_volume");
    music_Player.muted = value == 0 ? !music_Player.muted : false;
    music_Muted = music_Player.muted;

    if(value != 0) {
        if(value == -1 && music_Player.volume >= 0.1) {
            music_Player.volume -= 0.1; 
        } 
        else if(value == 1 && music_Player.volume < 1) {
            music_Player.volume += 0.1; 
        }
        music_Volume = music_Player.volume;
        music_Vol.innerText = Math.floor(music_Player.volume * 100);
    }
    if (music_Player.muted == true || music_Player.volume < 0.01) {
        music_Vol.style.color = "red";
    } else {
        music_Vol.style.color = "lime";
    }
    return;
}

function Music_PauseTrack() {
    let music_Player = document.getElementById("music_player");
    let music_Pause = document.getElementById("music_pause");

    if (music_Player.paused == false) {
        music_Pause.style = "value:Старт;color:lime;";
        music_Player.pause();
    } else {
        music_Pause.style = "value:Пауза;color:red;";
        music_Player.play();
    }
    music_Play = !music_Play;
    return;
}

function Music_NextTrack(value) {
    if (music_OnRandom == true) {
        if (value != 1) return;
        music_OldId = music_Id;
        music_Id = Music_IsRandom();
    } else {
        music_OldId = music_Id;
        if(value < 0) {
            music_Id = music_Id - 1 < 1 ?
                music_Max : --music_Id;
        } else {
            music_Id = music_Id + 1 > music_Max ? 
                1 : ++music_Id;
        }
    }
    Music_Treck();
    Music_ListSelectColor();
    return;
}

Music_LoadTracks();

function Music_LoadTracks() {
    randomMusic_FileName = Array.from(Music_FileName);
    return;
}

function Music_IsRandom() {
    if (randomMusic_FileName.length <= 1) {
        Music_LoadTracks();
        Music_ListResetColors();
        return Music_IsRandom();
    }
    let rand = Music_RandomTreck();
    let music = Music_FileName.indexOf(randomMusic_FileName[rand]);
    randomMusic_FileName.splice(rand, 1);
    return music;
}

function Music_RandomTreck() {
    let rand = Math.floor(Math.random() * randomMusic_FileName.length);
    return rand < 1 ? 1 : rand;
}

function Music_RandomTrack() {
    music_OnRandom = !music_OnRandom;
    let music_Previoustrack = document.getElementById("music_previoustrack");
    if (music_OnRandom == true) {
        music_Previoustrack.style.background = TopStatus == false ? "#178282" : "black";
        music_Id = Music_IsRandom();
        Music_Treck();
        
    } else {
        document.getElementById("music_number").innerText = `( ${(music_Id)}/${music_Max} )`;
        music_Previoustrack.style.background = TopStatus == false ? "#96acac" : "#383838";
        Music_LoadTracks();
    }
    Music_ListResetColors();
    Music_ListSelectColor();
    return;
}

function Music_ListCreate() {
    let music_List = document.getElementById("music_list");
    let message = "";
    for (let i = 1; i <= music_Max; i++) {
        if (i == music_Id) {
            if(TopStatus == false) {
                message += `<option id=music_list_${i} style="background:lime;" value="${i}" selected>${i}. ${Music_FileName[i]} </option>`;
            } else {
                message += `<option id=music_list_${i} style="background:white;" value="${i}" selected>${i}. ${Music_FileName[i]} </option>`;
            }
        }
        else if (randomMusic_FileName.indexOf(Music_FileName[i]) == -1) {
            if(TopStatus == false) {
                message += `<option id=music_list_${i} style="background:red" value="${i}" >${i}. ${Music_FileName[i]} </option>`;
            } else {
                message += `<option id=music_list_${i} style="background:#383838" value="${i}" >${i}. ${Music_FileName[i]} </option>`;
            }
        } else {
            if(TopStatus == false) {
                message += `<option id=music_list_${i} style="background:#b3cccc;" value="${i}">${i}. ${Music_FileName[i]} </option>`;
            } else {
                message += `<option id=music_list_${i} style="background:grey;" value="${i}">${i}. ${Music_FileName[i]} </option>`;
            }
        }
    }
    music_List.innerHTML = message;
    return;
}

function Music_ListSelectColor() {
    let music_List = document.getElementById("music_list");
    music_List.options[music_Id-1].selected = true;
    music_List.options[music_Id-1].style.background = TopStatus == false ? "lime" : "white";

    if(music_OldId > 0) {
        if(TopStatus == false) {
            if(music_OnRandom == true) {
                music_List.options[music_OldId-1].style.background = "red";
            } else {
                music_List.options[music_OldId-1].style.background = "#b3cccc";
            }
        } else {
            if(music_OnRandom == true) {
                music_List.options[music_OldId-1].style.background = "#383838";
            } else {
                music_List.options[music_OldId-1].style.background = "grey";
            }
        }
    }
    return;
}

function Music_ListSetSelection() {
    let music_List = document.getElementById("music_list");
    music_List.options[music_Id-1].selected = true;
    music_SelectTime = null;
    return;
}

function Music_ListResetColors() {
    music_OldId = 0;
    let music_List = document.getElementById("music_list");
    for (let i = 1; i <= music_Max; i++) {
        music_List.options[i-1].style.background = TopStatus == false ? "#b3cccc" : "grey";
    }
    return;
}

function Music_Select() {
    if (music_OnRandom == true) return Music_ListSetSelection();
    let music_List = document.getElementById("music_list");
    let music_Select = +music_List.options[music_List.selectedIndex].value;
    if(music_Id == music_Select) return true;
    music_OldId = music_Id;
    music_Id = music_Select;
    music_SelectTime = null;
    Music_Treck();
    Music_ListSelectColor();
    return;
}

function Music_PlayBackRate(value) {
    let music_Player = document.getElementById("music_player");
    let music_Playbackrate = document.getElementById("music_playbackrate");

    if (value == false && music_PlayBackRate > 0.1) {
        music_PlayBackRate += -0.05;
    }
    else if (value == true && music_PlayBackRate < 2.0){
        music_PlayBackRate += 0.05;
    }
    music_Player.playbackRate = music_PlayBackRate;
    music_Playbackrate.innerText = music_PlayBackRate.toFixed(2);
    return;
}

function Music_CurrentTime(value) {
    let music_Player = document.getElementById("music_player");
    music_Player.currentTime += value == false ? -5 : +5;
    return;
}

function Music_ConvertTime(time) {
    let seconds = Math.ceil(time - 1);
    let minutes = Math.ceil(time / 60 - 1);
    let ext_seconds = Math.ceil(time % 60 - 1);

    if (seconds < 1) return `00:00`;
    else if (seconds < 10) return `00:0${seconds}`;
    else if (seconds < 60) return `00:${seconds}`;
    else if (seconds < 600) {
        if (ext_seconds < 10) {
            return `0${minutes}:0${ext_seconds}`;
        } else {
            return `0${minutes}:${ext_seconds}`;
        }
    }
    else if (ext_seconds < 10) {
        return `${minutes}:0${ext_seconds}`;
    }
    else return `${minutes}:${ext_seconds}`;
}

setInterval(Music_AudioStatus, 500);
function Music_AudioStatus() {
    let music_Player = document.getElementById("music_player");
    let music_Time = document.getElementById("music_time");
    let music_List = document.getElementById("music_list");
    let music_Select = music_List.options[music_List.selectedIndex].value;
    
    if (music_Id != music_Select) {
        if (music_SelectTime == null) {
            music_SelectTime = +new Date() + 3000;
        }
        if (music_SelectTime <= new Date()) {
            Music_ListSetSelection();
        }
    }
    if (music_Player.ended) {
        Music_NextTrack(+1);
    }
    if (music_Player.paused == true && music_Play == true) {
        music_Player.play();
    }
    if(music_Player.duration >= 0) {
        music_Time.innerText = `${Music_ConvertTime(music_Player.currentTime)} / ${Music_ConvertTime(music_Player.duration)}`;
        music_progress.value = music_Player.currentTime;
        music_progress.max = music_Player.duration;
    }
    return;
}

document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case "MediaTrackPrevious": {
            Music_NextTrack(-1);
            break;
        }
        case "MediaTrackNext": {
            Music_NextTrack(+1);
            break;
        }
        case "MediaPlayPause": {  
            let music_Player = document.getElementById("music_player");
            let music_Pause = document.getElementById("music_pause");
            music_Play = music_Player.paused;
            if (music_Player.paused) {
                music_Pause.value = "Пауза";
                music_Pause.style.color = "red";
            } else {
                music_Pause.value = "Старт";
                music_Pause.style.color = "lime";
            }
            break;
        }
        //default: {console.log(event.code);alert(event.code);break;}
    }
});

document.onclick = function(e) {
    if (!e) { 
        e = window.event; 
    }
    //document.getElementById("test").innerText = `X: ${getX(e)}, Y: ${getY(e)}`;
    if (getX(e) >= 559 && getX(e) <= 960 && getY(e) >= 3883  && getY(e) <= 3904) {
        let value =  (getX(e) - 559) / ((960 - 559) / 100);
        let music_Player = document.getElementById("music_player");
        music_Player.currentTime = music_Player.duration / 100 * value;
    }

    function getX(e) {
        if (e.pageX) return e.pageX;
        else if (e.clientX) return e.clientX + ( document.documentElement.scrollLeft || document.body.scrollLeft ) - document.documentElement.clientLeft;
        return 0;
    }
    
    function getY(e) {
        if (e.pageY) return e.pageY;
        else if (e.clientY) return e.clientY + ( document.documentElement.scrollTop || document.body.scrollTop ) - document.documentElement.clientTop;
        return 0;
    }
}