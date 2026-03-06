let step = 0

function no(){

step++

if(step == 1){
document.getElementById("photo").src = "images/sobak.jpg"
}

if(step == 2){
document.getElementById("photo").src = "images/kot2.jpg"
}

if(step == 3){
document.getElementById("photo").src = "images/sobak2.jpg"

/* убираем кнопку НЕТ */
document.getElementById("noBtn").style.display = "none"
}

}

function yes(){

document.body.innerHTML = `

<div class="feed">

<div class="post">
<img src="images/photo1.jpg">
<p>С 8 Марта, моё солнышко! 🌷 Пусть каждый день дарит тебе улыбки и приятные сюрпризы. Ты самая красивая, самая добрая и самая любимая. Оставайся всегда такой же замечательной! Люблю тебя сильно сильно❤️</p>
<button onclick="like(this)">❤️ <span>159</span></button>
</div>

<div class="post">
<img src="images/photo2.jpg">
<p>А также жди сегодня подарок к 13:00🌷</p>
<button onclick="like(this)">❤️ <span>105</span></button>
</div>

<div class="post">
<img src="images/photo3.jpg">
<p>Лююблю тебя сильно сильно, а также уже сильно по тебе соскучился❤️</p>
<button onclick="like(this)">❤️ <span>59</span></button>
</div>

</div>

`

// Добавляем класс для страницы с постами
document.body.classList.add('posts-page');
}

function like(button){

if(button.classList.contains("liked")){
return
}

let span = button.querySelector("span")
let count = parseInt(span.innerText)

span.innerText = count + 1

button.classList.add("liked")
button.style.color = "red"

}

// При загрузке страницы добавляем класс center-page для главной
document.addEventListener('DOMContentLoaded', function() {
document.body.classList.add('center-page');
});
