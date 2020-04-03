// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдгэлэе
var activePlayer = 0;
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

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 дотор санамсаргүй нэг утга гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //   Шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  //   Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    // 1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //   if(activePlayer === 0 ){
    //       activePlayer = 1;
    //   }else{ activePlayer = 0; }   // Энэ арга болон доод талын арга яг адилхан

    switchToNextPLayer();
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчын цуглуулсан ээлжийн оноог глобал оноон дээр нь нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  //   Дэлгэц дээр оноог нь өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогч хожсон эсэхийг (Оноо нь 100-с их эсэх) шалгах
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //Тоглогчын ээлжийг солино
    switchToNextPLayer();
  }

  //   switchToNextPLayer();
});

function switchToNextPLayer() {
  // Ээлжийн оноог нь 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //   Тоглогчын ээлжийг солино.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгох
  diceDom.style.display = "none";
}

// Шинээр тоглоом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", function() {
  alert("clicked");
});
