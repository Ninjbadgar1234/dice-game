// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
var hedHurtel;

// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
// Аль тоглогчын шоо шидэх ээлж вэ
var activePlayer;

// Хоёр тоглогчын цуглуулсан оноонууд
var scores;

// Идэвхитэй тоглогчын цуглуулж буй ээлжийн оноо.
var roundScore;

var diceDom = document.querySelector(".dice");
// Тоглоомыг эхлүүлнэ
initGame();
alert(
  "Тоглоомын дүрэм: Хэрвээ 1 буувал өрсөлдөгчрүү автоматаар шилжинэ мөн HOLD товчыг дарснаар та оноогоо хадгалж өрсөлдөгч рүү тоглолт шилжинэ түрүүлж " +
    hedHurtel +
    "-н оноонд хүрсэн нь ялагч болно. Амжилт хүсье!"
);
// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  hedHurtel = prompt("Хэдрүү уралдах вэ? Тоогоо оруулна уу.");
  // Тоглоом эхэллээ гэдэг төлөвт оруулна.
  isNewGame = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  diceDom.style.display = "none";
  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

// console.log("Шоо: " + diceNumber);

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame === true) {
    // 1-6 дотор санамсаргүй нэг утга гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //   Шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.style.display = "block";

    //   Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      // 1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //   if(activePlayer === 0 ){
      //       activePlayer = 1;
      //   }else{ activePlayer = 0; }   // Энэ арга болон доод талын арга яг адилхан

      switchToNextPLayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр эхлэнэ үү.");
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    // Уг тоглогчын цуглуулсан ээлжийн оноог глобал оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //   Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Уг тоглогч хожсон эсэхийг (Оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= hedHurtel) {
      // Тоглоомыг дууссан төлөвт оруулна.
      isNewGame = false;
      // Ялагч гэсэн Текстыг нэрнийх нь оронд гаргана.
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
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр тоглоно уу!");
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

// New Game буюу Шинээр тоглоом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
