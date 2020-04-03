// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдгэлэе
var activePlayer = 1;
//  Тоглогчын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;
// Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em> Yes!</em>";

// Программ эхлэхэд бэлтгэе.
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("Шоо: " + dice);
