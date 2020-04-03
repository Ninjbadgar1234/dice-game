// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдгэлэе
var activePlayer = 1;
//  Тоглогчын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;
// Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Программ эхлэхэд бэлтгэе.
// document.querySelector("#score-0").textContent = 0; // querySelector oor DOM oos classaar ni Id gaar ni nereer ni geh met haij boldog ch ElementById gaas udaan uchir ni olon elemtees analiz hiideg uchir MUN haih utgiinha id bol # class bol . geh met zvilsiig hiij ugnu
document.getElementById("score-0").textContent = 0; // harin ElementById ni zuwhun Id gaar ni haih uchraas ilvv hurdag olno. Mun # geh temdeglege hiih shaardlagagvi
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// console.log("Шоо: " + diceNumber);

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("SHoo buulaa: " + diceNumber);
});
