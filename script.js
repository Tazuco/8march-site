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

<h1 style="text-align:center;margin-top:20px;">С 8 Марта ❤️</h1>

<div class="feed">

<div class="post">
<img src="images/photo1.jpg">
<p>Первый день отпуска 😎</p>
<button onclick="like(this)">❤️ <span>0</span></button>
</div>

<div class="post">
<img src="images/photo2.jpg">
<p>Собираем чемоданы 🧳</p>
<button onclick="like(this)">❤️ <span>0</span></button>
</div>

<div class="post">
<img src="images/photo3.jpg">
<p>Уже на море 🌊</p>
<button onclick="like(this)">❤️ <span>0</span></button>
</div>

</div>

`
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