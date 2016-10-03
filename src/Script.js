
function Timer() {
	setTimeout(ChangeTheText, 600000);
}


function ChangeTheText() {
	var texts = ["Никто не сможет стать выдающимся программистом, изучая компьютерные науки, или выдающимся художником, изучая кисти и краски.",
		"Задумчивая душа склоняется к одиночеству.",
		"В теории, теория и практика неразделимы. На практике это не так.",
		"Другом является такой человек, с которым я могу быть искреним. В его присутствии я могу думать вслух.",
		"Если не оказываешь сопротивления, имеешь неприятности, унижения и притеснения всё большие.",
		"Трудно найти слова, когда действительно есть, что сказать.",
		"Общественное мнение правит людьми.",
		"Главная жизненная задача человека — дать жизнь самому себе.",
		"Мы не планируем наше творчество. Ведь тогда это уже не будет творчеством. Мы делаем то, что чувствуем.",
		"Есть два вида знаний: одно — словами выражаемое, другое — точное, понимаемое духом, но не вложеноие в слова."

	];
	var doc = document.getElementById("text");

	var number = Math.floor(Math.random() * (texts.length) + 0);
	doc.innerHTML = "<center>" + texts[number] + "</center>";
	document.body.style.height = doc.scrollHeight + 40;

	BG();
}
function BG() {
	Timer();
	var back = document.getElementById("background");
	bd = document.body.style;
	bd.background = 'url(bg2.png)';

	background.opacity = 0;
	System.Gadget.beginTransition();
	
}
ChangeTheText();

