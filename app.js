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

    // Энэ тоглогчын цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
    // Хэрэв идэвхитэй тоглогч нь 0 байтал 1 болго.
    // Үгүй бол тоглогчыг 0 болго

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active"); // end remove bolon add ashiglaj bolno gehde Toggle function ni  baiwal ustgadag baihgui bol tuhain classiig nemdeg uchir ilvv amar gesn vg.
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгох 1 үед
    diceDom.style.display = "none";
  }
});
