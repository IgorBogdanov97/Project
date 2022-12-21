import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Index() {
  return (
    <div className="Index">
		<header className="logo_type" id="UP">
			<h1 title="Bogdanov Igor Mikhaylovich" style={{"textAlign":"center"}}><span id="logo_1">B</span><span id="logo_2">I</span><span id="logo_3">M</span><span id="logo_4">-</span><span id="logo_5">T</span><span id="logo_6">e</span><span id="logo_7">c</span><span id="logo_8">h</span><span id="logo_9">n</span><span id="logo_10">o</span><span id="logo_11">l</span><span id="logo_12">o</span><span id="logo_13">g</span><span id="logo_14">y</span></h1>
		</header>
		<nav className="header">
			<ul>
				<li><a id="header_1" title="Главная страница" href="HTML.html">Главная</a></li>
				<li><a id="header_2" title="https://vk.com/igor___bogdanov" href="https://vk.com/igor___bogdanov">ВКонтакте</a></li>
				<li><a id="header_3" title="https://www.instagram.com/igor______bogdanov/" href="https://www.instagram.com/igor______bogdanov/">Instagram</a></li>
				<li><a id="header_4" title="igorbogdanov97@mail.ru" href="https://e.mail.ru/compose/">Mail</a></li>
				<li><a id="header_5" title="igorbogdanov228@gmail.com" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTMDgrQKqdwQkrZwqFzvWQGwZCqFVzjNXzhCLSqMcTvDSvXhJbTcghbbFLFCXWkmrMbcdLl">Gmail</a></li>
				<li><a id="header_6" title="justin22819" href="https://join.skype.com/invite/mWhlfEEjHiYO">Skype</a></li>
			</ul>
		</nav>
		<figure style={{"textAlign":"center"}}>
			<a href="https://vk.com/igor___bogdanov" title="Богданов Игорь Михайлович" target="_blank"><img id="main_photo" src='./Igor_Bogdanov.jpg' alt="Богданов Игорь Михайлович" style={{"opacity":"0.0", "width":"400px", "height":"500px", "borderRadius":"5%", "outline":"#178282 solid 4px", "Zindex":"-1"}} /></a>
			<br />
			<figcaption><a href="https://vk.com/igor___bogdanov" title="Богданов Игорь Михайлович" target="_blank"><i>Богданов Игорь Михайлович</i></a></figcaption>
		</figure>
		<table className="table_1" style={{"textShadow":"1px 1px 8px white", "fontSize":"105%"}}>
			<caption>Анкета</caption>
				<colgroup>
					<col span="1" style={{"background":"#178282"}} />
					<col span="1" style={{"background":"#50b4b4"}} />
				</colgroup>
				<tbody>
					<tr><td><b title="Наименование">Наименование: </b></td><td><b style={{"color":"navy"}}>Описание:</b></td></tr>
					<tr><td><b title="Имя пользователя">Имя: </b></td><td style={{"color":"navy"}}>Игорь</td></tr>
					<tr><td><b title="Отчество пользователя">Отчество: </b></td><td style={{"color":"navy"}}>Михайлович</td></tr>
					<tr><td><b title="Фамилия пользователя">Фамилия: </b></td><td style={{"color":"navy"}}>Богданов</td></tr>
					<tr><td><b title="Дата и рождения пользователя">Дата рождения: </b></td><td style={{"color":"navy"}}>09/08/1997</td></tr>
					<tr><td><b title="Возраст пользователя">Возраст: </b></td><td style={{"color":"navy"}}>25 лет</td></tr>
					<tr><td><b title="Рост пользователя">Рост: </b></td><td style={{"color":"navy"}}>184 см</td></tr>
					<tr><td><b title="Вес пользователя">Вес: </b></td><td style={{"color":"navy"}}>80 кг</td></tr>
					<tr><td><b title="Семейное положение пользователя">Семейное положение: </b></td><td style={{"color":"navy"}}>Не женат</td></tr>
					<tr><td><b title="Место рождения пользователя">Место рождения: </b></td><td style={{"color":"navy"}}>Туркменистан, г. Ашхабад</td></tr>
					<tr><td><b title="Адрес пользователя пользователя">Адрес: </b></td><td style={{"color":"navy"}}>Беларусь, г. Минск, ул. Фогеля д. 5, кв. 41</td></tr>
					<tr><td><b title="Домашний телефон пользователя">Домашний телефон: </b></td><td style={{"color":"navy"}}>+375 17 347 29 41</td></tr>
					<tr><td><b title="Мобильный телефон пользователя">Мобильный телефон: </b></td><td style={{"color":"navy"}}>+375 29 164 00 27 (velcom)</td></tr>
					<tr><td><b title="Образование пользователя">Образование: </b></td><td style={{"color":"navy"}}>«Среднее специальное»</td></tr>
					<tr><td><b title="Учебное заведение пользователя">Учебное заведение: </b></td><td style={{"color":"navy", "width":"70%"}}>Филиал БНТУ «Минский Государственный Политехнический Колледж»</td></tr>
					<tr><td><b title="Квалификация пользователя">Квалификация: </b></td><td style={{"color":"navy"}}>«Техник-электрик»</td></tr>
					<tr><td><b title="Специальность пользователя">Специальность: </b></td><td style={{"color":"navy"}}>«Автоматизированные электроприводы»</td></tr>
					<tr><td><b title="Место работы пользователя">Место работы: </b></td><td style={{"color":"navy"}}>ООО «СтройМонтажЭнергоСети»</td></tr>
					<tr><td><b title="Должность пользователя">Должность: </b></td><td style={{"color":"navy"}}>«Монтажник наружного трубопровода»</td></tr>
					<tr><td><b title="Ранг в IT индустрии пользователя">Ранг в IT индустрии: </b></td><td style={{"color":"navy"}}>«Junior Developer»</td></tr>
					<tr><td><b title="Ссылка на ВКонтакте пользователя">Ссылка на ВКонтакте: </b></td><td><a href="https://vk.com/igor___bogdanov" title="https://vk.com/igor___bogdanov" target="_blank">igor___bogdanov</a></td></tr>
					<tr><td><b title="Ссылка на Instagram.com пользователя">Ссылка на Instagram: </b></td><td><a href="https://www.instagram.com/igor______bogdanov/" title="https://www.instagram.com/igor______bogdanov/" target="_blank">igor______bogdanov</a></td></tr>
					<tr><td><b title="Ссылка на Mail пользователя">Ссылка на Mail: </b></td><td><a href="https://e.mail.ru/compose/" title="igorbogdanov97@mail.ru" target="_blank">igorbogdanov97@mail.ru</a></td></tr>
					<tr><td><b title="Ссылка на Gmail пользователя">Ссылка на Gmail: </b></td><td><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTMDgrQKqdwQkrZwqFzvWQGwZCqFVzjNXzhCLSqMcTvDSvXhJbTcghbbFLFCXWkmrMbcdLl" title="igorbogdanov228@gmail.com" target="_blank">igorbogdanov228@gmail.com</a></td></tr>
					<tr><td><b title="Ссылка на Skype пользователя">Ссылка на Skype: </b></td><td><a href="https://join.skype.com/invite/mWhlfEEjHiYO" title="justin22819">justin22819</a></td></tr>
				</tbody>
		</table>
		<p style={{"textAlign":"center", "color":"white", "textShadow":"1px 1px 2px black"}}>Когда хочешь ускорить процесс обучения программирования:) <span style={{"fontSize":"30px"}}>😂</span></p>
		<figure style={{"textAlign":"center"}}>
			<img src="./Jim_Carrey.gif" alt="Актёр Джим Керри" title="Актёр Джим Керри" style={{"width":"400px", "height":"200px", "borderRadius":"5%", "outline":"#178282 solid 4px"}} />
			<figcaption style={{"color":"white", "textShadow":"1px 1px 2px black"}}>Актёр 
				<a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D1%80%D1%80%D0%B8,_%D0%94%D0%B6%D0%B8%D0%BC" title="Ссылка на биографию Джима Керри" target="_blank"><i> Джим Керри</i></a>, фрагмент из фильма
				<a href="https://kinogo-film.xyz/komediya/1843-bryus-vsemoguschiy.html" title="Ссылка на фильм &#8220;Брюс Всемогущий&#8220; (2003)" target="_blank"><cite> "Брюс Всемогущий" (2003)</cite></a>.
			</figcaption>
		</figure>
		<p style={{"textAlign":"center", "color":"white", "textShadow":"1px 1px 2px black"}}><dfn style={{"color":"black", "textShadow":"1px 1px 2px white"}}>Карта изображения</dfn> — это изображение с кликабельными областями.</p>
		<figure style={{"textAlign":"center"}}>
			<img src="./gadgets_and_coffee.jpg" alt="Гаджеты и кофе" title="Гаджеты и кофе" style={{"width":"400px", "height":"380px", "borderRadius":"5%", "outline":"#178282 solid 4px"}} useMap="#gadgets_and_coffee" />
			<map name="gadgets_and_coffee">
				<area shape="rect" coords="33,43,274,348" alt="Ноутбук" title="Ноутбук — переносной компьютер, в корпусе которого объединены типичные компоненты ПК, включая дисплей, клавиатуру и устройство указания, а также аккумуляторные батареи. Ноутбуки отличаются небольшими размерами и весом, время автономной работы ноутбуков варьируется в пределах от 2 до 15 часов." onClick="OpenLink(0)" />
				<area shape="rect" coords="290,172,335,243" alt="Смартфон" title="Смартфо́н — мобильный телефон, дополненный функциональностью карманного персонального компьютера. Также коммуникатор — карманный персональный компьютер, дополненный функциональностью мобильного телефона." onClick="OpenLink(1)" />
				<area shape="circle" coords="341,297,50" alt="Кофе" title="Ко́фе — напиток из жареных и перемолотых зёрен кофейного дерева или кофейного куста." onClick="OpenLink(2)" />
			</map>
		</figure>
		<p style={{"marginLeft":"450px", "color":"white", "textShadow":"1px 1px 2px black"}}>
			<i>"Если технология не освобождает людей от рутины, чтобы они могли преследовать 
			<br />более высокие цели человечества, тогда весь технический прогресс бессмысленен."</i>
			<br /><br />
			<a title="Ссылка на биографию Жака Фреско" href="https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B5%D1%81%D0%BA%D0%BE,_%D0%96%D0%B0%D0%BA" target="_blank"><i>- Жак Фреско ©</i></a>
		</p>
		<p style={{"textAlign":"center", "color":"white", "textShadow":"1px 1px 2px black"}}>
			<dfn style={{"color":"black", "textShadow":"1px 1px 2px white"}}>Видео</dfn> — электронная технология формирования, записи, обработки, передачи, хранения и
			<br />
			<span style={{"marginLeft":"6px"}}>воспроизведения подвижного изображения, основанная на принципах телевидения, а также</span>
			<br />
			<span style={{"marginLeft":"-150px"}}>аудиовизуальное произведение, записанное на физическом носителе.</span>
		</p>
		<div style={{"textAlign":"center"}}><video src="./GameExtream-RPG [RUS].mp4" poster="./screensaver_video_gameextream.jpg" style={{"width":"500px", "height":"400px", "outline":"#178282 solid 4px"}} controls></video></div>
		<p style={{"textAlign":"center", "color":"white", "textShadow":"1px 1px 2px black"}}>Видеообзор SAMP сервера, проекта <a href="https://vk.com/gameextream" title="Ссылка на группу vk.com GameExtream-RPG" target="_blank"><cite>GameExtream-RPG</cite></a>.</p>
		<p style={{"textAlign":"center", "color":"white", "textShadow":"1px 1px 2px black"}}><i style={{"color":"black", "textShadow":"1px 1px 2px white"}}>Аудио</i> — это общий термин, относящийся к звуковым технологиям.</p>
		<figure style={{"textAlign":"center"}}>
			<a href="https://ru.wikipedia.org/wiki/Markul" title="Markul" target="_blank"><img src="./Markul - Sense of Human.jpg" alt="Markul" style={{"width":"400px", "height":"400px", "outline":"#178282 solid 4px"}} /></a>
			<figcaption>
				<p style={{"color":"white", "textShadow":"1px 1px 2px black"}}>
					Исполнитель <a href="https://ru.wikipedia.org/wiki/Markul" title="Markul" target="_blank"><i>Markul</i></a> - обложка музыкального альбома  <a href="https://sound-fun.online/album/142458/" title="Ссылка на альбом &#8220;Sense of Human&#8220; (2021)" target="_blank"><cite>"Sense of Human" (2021)</cite></a>.
				</p>
			</figcaption>
		</figure>
		<div style={{"textAlign":"center", "background":"#178282", "borderRadius":"10%", "outline":"black solid 1px", "margin":"15px 500px 15px 500px"}}>
			<audio id="music_player" type="audio/wav"></audio>
			<br />
			<div style={{"position":"relative", "top":"-12px", "color":"white", "textShadow":"1px 1px 2px black"}}>Проигрыватель</div>
			<div style={{"position":"relative", "top":"-35px"}}>
			<progress id="music_progress" style={{"width":"400px", "height":"50px", "position":"relative", "bottom":"-17.5px"}}></progress>
				<div className="notselection" id="music_time" style={{"textAlign":"center", "position":"relative", "bottom":"17.5px", "color":"lime", "textShadow":"1px 1px 1px black"}}></div>
				<p style={{"textAlign":"center", "color":"white", "textShadow":"1px 1px 1px black"}}><span id="music_number" style={{"color":"lime"}}></span> <span id="music_message"></span></p>
				<div style={{"text-align":"center"}}>
					<span style={{"color":"white", "textShadow":"1px 1px 2px black"}}>Список:</span>
					<select id="music_list"></select>
					<input type="button" value="Выбрать" style={{"background":"#b3cccc"}} onClick="Music_Select()" />
				</div>
				<button id="music_previoustrack" type="button" style={{"background":"#b3cccc", "marginTop":"5px", "padding":"1px 15px"}} onClick="Music_NextTrack(-1)">{"<<"} Предыдущий</button>
				<button id="music_pause" type="button" style={{"background":"#b3cccc", "padding":"1px 5px", "color":"#ff0000e6", "textShadow":"1px 1px 2px black"}} onClick="Music_PauseTrack()">Пауза</button>
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 15px"}} onClick="Music_NextTrack(+1)">Следующий {">>"}</button>
				<input id="music_random" type="button" style={{"background":"#b3cccc", "padding":"1px 15px"}} onClick="Music_RandomTrack()" title="Случайный трек" value="🔀" />
				<br />
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 49px", "marginTop":"5px"}} onClick="Music_Volume(-1)">-</button>
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 49px"}} onClick="Music_Volume(0)">Звук: <font id="music_volume" style={{"color":"lime", "textShadow:":"1px 1px 2px black"}}>100</font></button>
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 49px"}} onClick="Music_Volume(1)">+</button>
				<br />
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 10px", "marginTop":"5px"}} onClick="Music_CurrentTime(false)">{"<<"} -5 секунд</button>
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 10px"}} onClick="Music_PlayBackRate(false)">-</button> 
				<span style={{"color":"white", "textShadow":"1px 1px 2px black"}}>
					Ускорение: <span id="music_playbackrate" style={{"color":"lime"}}>1.0</span>
				</span> 
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 10px"}} onClick="Music_PlayBackRate(true)">+</button>
				<button type="button" style={{"background":"#b3cccc", "padding":"1px 10px"}} onClick="Music_CurrentTime(true)">+5 секунд {">>"}</button>
			</div>
			<script>
				Music_Treck();
				Music_ListCreate();
			</script>
		</div>
	</div>
  );
}

export default Index;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);