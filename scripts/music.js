const Music_AlbumArtist = [ // исполнитель альбома
    ,
    "Markul",
    "Markul",
    "pyrokinesis",
    "STED.D",
    "STED.D",
];

const Music_AlbumName = [ // название альбома
    ,
    "Great Depression",
    "Sense of Human",
    "Геометрия тьмы",
    "ДЕПРЕССИИ НЕ СУЩЕСТВУЕТ",
    "ДЕПРЕССИЯ СУЩЕСТВУЕТ"
];

const Music_AlbumYear = [ // год альбома
    ,
    2018,
    2021,
    2022,
    2019,
    2022,
];

const Music_FileName = [ // список треков альбома
    ,[
        ,
        "Markul - Отрицание",
        "Markul - Компас",
        "Markul - 25",
        "Markul - Деньги на ветер",
        "Markul - Blues",
        "Markul - Без тебя",
        "Markul - Худший друг",
        "Markul - Миражи",
        "Markul - Серпантин",
    ], [
        ,
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
        "Markul - 10,000 ночей",
    ], [
        ,
        "pyrokinesis - Притча во языцех (Интро)",
        "pyrokinesis - Претор был прав",
        "pyrokinesis - Радуга земного тяготения",
        "pyrokinesis - А что если смерть существо",
        "pyrokinesis - Герметика",
        "pyrokinesis - Я верю только в неизбежность зла",
        "pyrokinesis - Ветрянка",
        "pyrokinesis - Аморе, аморе",
        "pyrokinesis - Нежное электричество",
        "pyrokinesis - В джазе одни девчонки",
        "pyrokinesis - Шерше ля фам",
        "pyrokinesis - Люблю грозу в начале мая",
        "pyrokinesis - Шёпот далёких звёзд",
        "pyrokinesis - Эдельвейс",
        "pyrokinesis - Люди, хтонь, небытие",
        "pyrokinesis - Докучные сказки, докучные сказки, докучные",
        "pyrokinesis - Отказываю небу",
        "pyrokinesis - Геометрия тьмы",
        "pyrokinesis - Время и камушки (Аутро)",
        "pyrokinesis - Время вернуться назад",
        "pyrokinesis - Что отличает птицу от летучей мыши",
        "pyrokinesis - Звёзды все принадлежат богам",
    ], [
        "STED.D - Записки на теле",
        "STED.D - Однажды мне сказали",
        "STED.D - Жатва",
        "STED.D - Не знаю, где мы",
        "STED.D feat. Егор Натс - Мы не навсегда",
        "STED.D - Проводник",
        "STED.D - Призраки",
        "STED.D - Я убью тебя",
    ], [
        ,
        "STED.D - Все могло быть хуже",
        "STED.D feat. Егор Натс - Что-то сдохло внутри",
        "STED.D - Она сказала мне",
        "STED.D - Все, что ты хотел знать",
        "STED.D - Свет и тень",
        "STED.D - Твой страх, моя глупость",
        "STED.D - Шанс",
        "STED.D - Освещаю путь",
    ],
];

const Music_Album_Href = (text) => `https://music.yandex.ru/search?text=${text}`; // ссылка на альбом

const Music_ExecutorHref = (name) => { // ссылка на википедию
    if (name == "SALUKI")
        return "https://ru.wikipedia.org/wiki/Saluki";
    else if (name == "Dyce") 
        return "https://dtf.ru/u/459777-spiderman68/957190-dyce-biografiya-tvorchestvo-i-lichnaya-zhizn";
    else if (name == "Егор Натс") {
        return "https://artchange.ru/publ/photo_biography/musical_artists/egor_nats/16-1-0-654";
    }
    else 
        return `https://ru.wikipedia.org/wiki/${name}`;
}

let Music_AlbumID = Music_RandomAlbumID(); // включение рандомного альбома
let music_Max = Music_FileName[Music_AlbumID].length - 1; // максимальный трек

let Music_RandomFileName = Array.from(Music_FileName[Music_AlbumID]); // список рандомных треков
let music_OnRandom = false;
let music_Id = Music_RandomTreck();
let music_OldId = 0;
let music_Play = true;
let music_Muted = false;
let music_Volume = 1;
let music_PlayBackRate = 1;
let music_SelectTrackTime = null;
let music_SelectAlbumTime = null;

function Music_ShowAlbumImage() { // выбор рандомного альбома
    let music_Photo_Href = document.getElementById("music_photo_href");
    let music_Image = document.getElementById("music_image");
    let music_Executor = document.getElementById("music_executor");
    let music_Album_Href = document.getElementById("music_album_href");
    let music_Namealbum = document.getElementById("music_namealbum");
    let image_src = `./images/${Music_AlbumArtist[Music_AlbumID]} - ${Music_AlbumName[Music_AlbumID]}.jpg`;
    let album_title = `"${Music_AlbumName[Music_AlbumID]}" (${Music_AlbumYear[Music_AlbumID]})`;
    
    music_Photo_Href.title = Music_AlbumArtist[Music_AlbumID];
    music_Photo_Href.href = Music_ExecutorHref(Music_AlbumArtist[Music_AlbumID]);
    music_Image.src = image_src;
    music_Image.alt = Music_AlbumArtist[Music_AlbumID];
    music_Executor.innerText = Music_AlbumArtist[Music_AlbumID];
    music_Executor.href = Music_ExecutorHref(Music_AlbumArtist[Music_AlbumID]);
    music_Executor.title = Music_AlbumArtist[Music_AlbumID];
    music_Album_Href.href = Music_Album_Href(`${Music_AlbumArtist[Music_AlbumID]} - ${Music_AlbumName[Music_AlbumID]}`);
    music_Album_Href.title = `Ссылка на альбом ${album_title}`;
    music_Namealbum.innerText = album_title;
    return;
}

function Music_Treck() { // запуск проигрывателя
    let message = "";
    let music_Player = document.getElementById("music_player");
    let music_Message = document.getElementById("music_message");
    let music_Number = document.getElementById("music_number");
    let ExecutorOne = Music_Executor(music_Id);
    let Feat = Music_IsExecutor(music_Id) == -1 ?
        "" : " feat. ";
    let Executor = Music_IsExecutor(music_Id) == -1 ? 
        "Исполнитель " : "Исполнители ";
    let Album = `${Music_AlbumArtist[Music_AlbumID]} - ${Music_AlbumName[Music_AlbumID]} (${Music_AlbumYear[Music_AlbumID]})`;
    music_Player.src=`.\\music\\${Album}\\${Music_FileName[Music_AlbumID][music_Id]}.mp3`;
    music_Player.autoplay = music_Play == true ? 
        "autoplay" : "";
    music_Player.muted = music_Muted == true ? 
        "muted" : "";
    music_Player.playbackRate = music_PlayBackRate;
    music_Player.volume = music_Volume;

    if (music_OnRandom == true) {
        music_Number.innerText = `( ${(music_Max-Music_RandomFileName.length+1)}/${music_Max} )`;
    } else {
        music_Number.innerText = `( ${(music_Id)}/${music_Max} )`;
    }
    
    if (Feat.length > 0) {
        let parts = Music_FileName[Music_AlbumID][music_Id].slice(Music_FileName[Music_AlbumID][music_Id].indexOf('feat.')+6).split(' ');

        for (let i = 0; i < parts.length; i++) {
            if (parts[i] == '-') break;
            if (parts[i+1] != '-') {
                parts[i] = parts[i] + " " + parts[i+1];
                parts[i+1] = "";
            }
            message += ` <a href="${Music_ExecutorHref(parts[i])}" title="Ссылка на биографию ${parts[i]}" target="_blank"><i >${parts[i]}</i></a>`; 
        }
    }
    music_Message.innerHTML = Executor + 
        `<a href="${Music_ExecutorHref(ExecutorOne)}" title="Ссылка на биографию ${ExecutorOne}" target="_blank"><i >${ExecutorOne}</i></a>` + Feat + message + `, трек 
        <a href="https://new.soundmax.me/search/${Music_FileName[Music_AlbumID][music_Id]}" title="Ссылка на трек &#8220;${MusicName(music_Id)}&#8220; (${Music_AlbumYear[Music_AlbumID]})" target="_blank">
            <cite>"${MusicName(music_Id)}" (${Music_AlbumYear[Music_AlbumID]})</cite>
        </a>.`;

    return;
}

function Music_IsExecutor(id) { // есть ли исполнитель на feat
    return Music_FileName[Music_AlbumID][id].indexOf('feat.');
}

function Music_Executor(id) { // начальный исполнитель
    return Music_FileName[Music_AlbumID][id].slice(0, Music_FileName[Music_AlbumID][id].indexOf(' '));
}

function MusicName(id) { // название трека
    return Music_FileName[Music_AlbumID][id].slice(Music_FileName[Music_AlbumID][id].indexOf('-') + 2);
}

function Music_Volume(value) { // редактор громкости
    let music_Player = document.getElementById("music_player");
    let music_Vol = document.getElementById("music_volume");
    music_Player.muted = value == 0 ? !music_Player.muted : false;
    music_Muted = music_Player.muted;

    if (value != 0) {
        if (value == -1 && music_Player.volume >= 0.1) {
            music_Player.volume -= 0.1; 
        } 
        else if (value == 1 && music_Player.volume < 1) {
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

function Music_PauseTrack() { // запуск/остановка проигрывателя
    let music_Player = document.getElementById("music_player");
    let music_Pause = document.getElementById("music_pause");

    if (music_Player.paused == false) {
        music_Pause.innerText = "Старт";
        music_Pause.style.color = "lime";
        music_Player.pause();
    } else {
        music_Pause.innerText = "Пауза";
        music_Pause.style.color = "red";
        music_Player.play();
    }
    music_Play = !music_Play;
    return;
}

function Music_NextTrack(value) { // переключение треков
    if (music_OnRandom == true) {
        if (value != 1) return;
        music_OldId = music_Id;
        music_Id = Music_IsRandom();
    } else {
        music_OldId = music_Id;
        if (value < 0) {
            music_Id = music_Id - 1 < 1 ?
                music_Max : --music_Id;
        } else {
            music_Id = music_Id + 1 > music_Max ? 
                1 : ++music_Id;
        }
    }
    Music_Treck();
    Music_TrackListSelectColor();
    return;
}

Music_LoadTracks();

function Music_LoadTracks() { // добавление все треков альбоме в рандомный список
    Music_RandomFileName = Array.from(Music_FileName[Music_AlbumID]);
    return;
}

function Music_IsRandom() { // удаление строчки из рандомного списка, если их нет, то обнуление
    if (Music_RandomFileName.length <= 1) {
        Music_LoadTracks();
        Music_TrackListResetColors();
        return Music_IsRandom();
    }
    let rand = Music_RandomTreck();
    let music = Music_FileName[Music_AlbumID].indexOf(Music_RandomFileName[rand]);
    Music_RandomFileName.splice(rand, 1);
    return music;
}

function Music_RandomAlbumID() { // Рандомный альбом
    let rand = Math.floor(Math.random() * Music_AlbumArtist.length);
    return rand < 1 ? 1 : rand;
}

function Music_RandomTreck() { // выбор рандомного трека
    let rand = Math.floor(Math.random() * Music_RandomFileName.length);
    return rand < 1 ? 1 : rand;
}

function Music_RandomTrack() { //  включения режима "рандомного трека"
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
    Music_TrackListResetColors();
    Music_TrackListSelectColor();
    return;
}

function Music_CreateAlbumsList() { // Создание "альбом-листа"
    let music_AlbumsList = document.getElementById("music_albumlist");
    let message = "";
    for (let i = 1; i < Music_AlbumName.length; i++) {
        if (i == Music_AlbumID) {
            if (TopStatus == false) {
                message += `<option id=music_albumlist_${i} style="background:lime;" value="${i}" selected>${i}. ${Music_AlbumArtist[i]} - "${Music_AlbumName[i]}" (${Music_AlbumYear[i]})</option>`;
            } else {
                message += `<option id=music_albumlist_${i} style="background:white;" value="${i}" selected>${i}. ${Music_AlbumArtist[i]} - "${Music_AlbumName[i]}" (${Music_AlbumYear[i]})</option>`;
            }
        } else {
            if (TopStatus == false) {
                message += `<option id=music_albumlist_${i} style="background:#b3cccc;" value="${i}">${i}. ${Music_AlbumArtist[i]} - "${Music_AlbumName[i]}" (${Music_AlbumYear[i]})</option>`;
            } else {
                message += `<option id=music_albumlist_${i} style="background:grey;" value="${i}">${i}. ${Music_AlbumArtist[i]} - "${Music_AlbumName[i]}" (${Music_AlbumYear[i]})</option>`;
            }
        }
    }
    music_AlbumsList.innerHTML = message;
    return;
}

function Music_CreateTracksList() { // создание "плей-листа"
    let music_TrackList = document.getElementById("music_tracklist");
    let message = "";
    for (let i = 1; i <= music_Max; i++) {
        if (i == music_Id) {
            if (TopStatus == false) {
                message += `<option id=music_tracklist_${i} style="background:lime;" value="${i}" selected>${i}. ${Music_FileName[Music_AlbumID][i]} </option>`;
            } else {
                message += `<option id=music_tracklist_${i} style="background:white;" value="${i}" selected>${i}. ${Music_FileName[Music_AlbumID][i]} </option>`;
            }
        }
        else if (Music_RandomFileName.indexOf(Music_FileName[Music_AlbumID][i]) == -1) {
            if (TopStatus == false) {
                message += `<option id=music_tracklist_${i} style="background:red" value="${i}" >${i}. ${Music_FileName[Music_AlbumID][i]} </option>`;
            } else {
                message += `<option id=music_tracklist_${i} style="background:#383838" value="${i}" >${i}. ${Music_FileName[Music_AlbumID][i]} </option>`;
            }
        } else {
            if (TopStatus == false) {
                message += `<option id=music_tracklist_${i} style="background:#b3cccc;" value="${i}">${i}. ${Music_FileName[Music_AlbumID][i]} </option>`;
            } else {
                message += `<option id=music_tracklist_${i} style="background:grey;" value="${i}">${i}. ${Music_FileName[Music_AlbumID][i]} </option>`;
            }
        }
    }
    music_TrackList.innerHTML = message;
    return;
}

function Music_TrackListSelectColor() { // цвет фона "плей-листа" взависимости от статуса
    let music_TrackList = document.getElementById("music_tracklist");
    music_TrackList.options[music_Id-1].selected = true;
    music_TrackList.options[music_Id-1].style.background = TopStatus == false ? "lime" : "white";

    if (music_OldId > 0) {
        if (TopStatus == false) {
            if (music_OnRandom == true) {
                music_TrackList.options[music_OldId-1].style.background = "red";
            } else {
                music_TrackList.options[music_OldId-1].style.background = "#b3cccc";
            }
        } else {
            if (music_OnRandom == true) {
                music_TrackList.options[music_OldId-1].style.background = "#383838";
            } else {
                music_TrackList.options[music_OldId-1].style.background = "grey";
            }
        }
    }
    return;
}

function Music_AlbumListSetSelection() { // выбрать главный пункт в "альбом-листе"
    let music_AlbumList = document.getElementById("music_albumlist");
    music_AlbumList.options[Music_AlbumID-1].selected = true;
    music_SelectAlbumTime = null;
    return;
}

function Music_TrackListSetSelection() { // выбрать главный пункт в "плей-листе"
    let music_TrackList = document.getElementById("music_tracklist");
    music_TrackList.options[music_Id-1].selected = true;
    music_SelectTrackTime = null;
    return;
}

function Music_TrackListResetColors() { // очистка фона "плей-листа"
    music_OldId = 0;
    let music_TrackList = document.getElementById("music_tracklist");
    for (let i = 1; i <= music_Max; i++) {
        music_TrackList.options[i-1].style.background = TopStatus == false ? "#b3cccc" : "grey";
    }
    return;
}

function Music_SelectAlbum() { // выбрать трек из "альбом-листа"
    if (music_OnRandom == true) return Music_AlbumListSetSelection();
    let music_AlbumList = document.getElementById("music_albumlist");
    let music_SelectAlbum = +music_AlbumList.options[music_AlbumList.selectedIndex].value;
    if (Music_AlbumID == music_SelectAlbum) return true;
    Music_AlbumID = music_SelectAlbum;
    music_Id = 1;
    music_Max = Music_FileName[Music_AlbumID].length - 1;
    Music_RandomFileName = Array.from(Music_FileName[Music_AlbumID]);
    music_SelectAlbumTime = null;
    Music_ShowAlbumImage();
    Music_CreateAlbumsList();
    Music_CreateTracksList();
    Music_Treck();
    return;
}

function Music_SelectTrack() { // выбрать трек из "плей-листа"
    if (music_OnRandom == true) return Music_TrackListSetSelection();
    let music_TrackList = document.getElementById("music_tracklist");
    let music_SelectTrack = +music_TrackList.options[music_TrackList.selectedIndex].value;
    if (music_Id == music_SelectTrack) return true;
    music_OldId = music_Id;
    music_Id = music_SelectTrack;
    music_SelectTrackTime = null;
    Music_Treck();
    Music_TrackListSelectColor();
    return;
}

function Music_PlayBackRate(value) { // изменение скорости трека
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

function Music_CurrentTime(value) { // перемотка на 5 секунд вперёд/назад
    let music_Player = document.getElementById("music_player");
    music_Player.currentTime += value == false ? -5 : +5;
    return;
}

function Music_ConvertTime(time) { // конверт корректного отображения времени
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
function Music_AudioStatus() { // CallBack проирывателя
    let music_Player = document.getElementById("music_player");
    let music_Time = document.getElementById("music_time");
    let music_TrackList = document.getElementById("music_tracklist");
    let music_SelectTrack = music_TrackList.options[music_TrackList.selectedIndex].value;
    let music_AlbumList = document.getElementById("music_albumlist");
    let music_SelectAlbum = music_AlbumList.options[music_AlbumList.selectedIndex].value;
    
    if (Music_AlbumID != music_SelectAlbum) {
        if (music_SelectAlbumTime == null) {
            music_SelectAlbumTime = +new Date() + 3000;
        }
        if (music_SelectAlbumTime <= new Date()) {
            Music_AlbumListSetSelection();
        }
    }
    if (music_Id != music_SelectTrack) {
        if (music_SelectTrackTime == null) {
            music_SelectTrackTime = +new Date() + 3000;
        }
        if (music_SelectTrackTime <= new Date()) {
            Music_TrackListSetSelection();
        }
    }
    if (music_Player.ended) {
        Music_NextTrack(+1);
    }
    if (music_Player.paused == true && music_Play == true) {
        music_Player.play();
    }
    if (music_Player.duration >= 0) {
        music_Time.innerText = `${Music_ConvertTime(music_Player.currentTime)} / ${Music_ConvertTime(music_Player.duration)}`;
        music_progress.value = music_Player.currentTime;
        music_progress.max = music_Player.duration;
    }
    return;
}

document.addEventListener('keydown', function(event) { // реакция на нажатие кнопок
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
            if (music_Player.paused == false) {
                music_Pause.innerText = "Старт";
                music_Pause.style.color = "lime";
            } else {
                music_Pause.innerText = "Пауза";
                music_Pause.style.color = "red";
            }
            break;
        }
        //default: {console.log(event.code);alert(event.code);break;}
    }
});

document.onclick = function(e) { // кликабельная область проигрывателя
    if (!e) { 
        e = window.event; 
    }
    let Xmix = 560, Xmax; 
    let Ymin = 3921, Ymax;
    if(window.matchMedia("only screen and (max-width: 980px)").matches) {
        Xmix = 328;
        Ymin = 4266;
    }
    Xmax = Xmix + 400;
    Ymax = Ymin + 20;
    //alert(`X: ${getX(e)}, Y: ${getY(e)}`);
    console.log(`X: ${getX(e)}, Y: ${getY(e)}`);
    if ( getX(e) >= Xmix && getX(e) <= Xmax && getY(e) >= Ymin && getY(e) <= Ymax ) {
        let value = ( getX(e) - Xmix ) / ( ( Xmax - Xmix ) / 100 );
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

// Загрузка
Age();
SelectTopic();
Music_Treck();
Music_Volume(0);
Music_ShowAlbumImage();
Music_CreateAlbumsList();	
Music_CreateTracksList();
onmousebutton_matetiallearn(1,false);
onmousebutton_matetiallearn(2,false);
onmousebutton_topic(false);