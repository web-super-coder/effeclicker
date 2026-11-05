    let box = document.querySelector(".tshirtC")
    let count = document.querySelector(".clickCounts")
    let selectTSColor = document.getElementById("select1");
    let sparkles = document.querySelector(".sparkle")
    let selectEColor = document.getElementById("effectColor")
    let effect = document.getElementById("Effect")
    let totalClicks = Number(localStorage.getItem("totalClicks")) || 0;
    let selectAvt = document.getElementById("avatarSelect")
function addClicks(amount) {
    clicks += amount;
    totalClicks += amount;
    saveClicks();
    saveTotalClicks();
}
    function saveTotalClicks() {
    localStorage.setItem("totalClicks", totalClicks);
} 
    selectEColor.addEventListener("change", function() {
      let selectedColor = selectEColor.value;
      effect.src = `effects/beginner effects/${selectedColor}.gif`;
      saveEffectC()
      if(selectedColor=="green") {
        effect.style.opacity = 0.8;
      }
    });
    
      let saved = document.cookie
        .split("; ")
        .find(row => row.startsWith("clicks="));

      let clicks = Number(localStorage.getItem("clicks")) || 0;

      count.textContent = clicks;
      function saveClicks() {
        localStorage.setItem("clicks", clicks);
      }
      function m(n, decimals = 2) {
    if (!Number.isFinite(n)) return "0";

    const suffixes = ["", "k", "M", "B", "T", "Qa", "Qi","SX","SP","Oc","No","Dc","UNDE","DUOD","TRED","QAD","QID","SXD","SPD","OCD","NOD","VIG","UVI","DVI","TVI","QaVI","QiVI","SxVI","SpVI","OcVI","NoVI","TG","QaG","QiG","SxG","SpG","OcG","NoG","QAG","QiAG","SxAG","SpAG","OcAG","NoAG","QIG","QiIG","SxIG","SpIG","OcIG","NoIG","QSG","QiSG","SxSG","SpSG","OcSG","NoSG","QPG","QiPG","SxPG","SpPG","OcPG","NoPG","QOG","QiOG","SxOG","SpOG","OcOG","NoOG","QNG","QiNG","SxNG","SpNG","OcNG","NoNG","QDG","QiDG","SxDG","SpDG","OcDG","NoDG","QUG","QiUG","SxUG","SpUG","OcUG","NoUG","QVG","QiVG","SxVG","SpVG","OcVG","NoVG","QTG","QiTG","SxTG","SpTG","OcTG","NoTG","QAG","QiAG","SxAG","SpAG","OcAG","NoAG","QIG","QiIG","SxIG","SpIG","OcIG","NoIG","QSG","QiSG","SxSG","SpSG","OcSG","NoSG","QPG","QiPG","SxPG","SpPG","OcPG","NoPG","QOG","QiOG","SxOG","SpOG","OcOG","NoOG","QNG","QiNG","SxNG","SpNG","OcNG","NoNG","QDG","QiDG","SxDG","SpDG","OcDG","NoDG","QUG","QiUG","SxUG","SpUG","OcUG","NoUG","QVG","QiVG","SxVG","SpVG","OcVG","NoVG","QTG","QiTG","SxTG","SpTG","OcTG","NoTG","QAG","QiAG","SxAG","SpAG","OcAG","NoAG","QIG","QiIG","SxIG","SpIG","OcIG","NoIG","QSG","QiSG","SxSG","SpSG","OcSG","NoSG","QPG","QiPG","SxPG","SpPG","OcPG","NoPG","QOG","QiOG","SxOG","SpOG","OcOG","NoOG","QNG","QiNG","SxNG","SpNG","OcNG","NoNG","QDG","QiDG","SxDG","SpDG","OcDG","NoDG","QUG","QiUG","SxUG","SpUG","OcUG","NoUG","QVG","QiVG","SxVG","SpVG","OcVG","NoVG","QTG","QiTG","SxTG","SpTG","OcTG","NoTG","QAG","QiAG","SxAG","SpAG","OcAG","NoAG","QIG","QiIG","SxIG","SpIG","OcIG","NoIG","QSG","QiSG","SxSG","SpSG","OcSG","NoSG"];

    let tier = Math.floor(Math.log10(Math.abs(n)) / 3);
    tier = Math.max(0, Math.min(tier, suffixes.length - 1));

    let scaled = n / Math.pow(1000, tier);

    // Prevent displaying 1000k instead of 1M
    if (Math.abs(scaled) >= 999.995 && tier < suffixes.length - 1) {
        tier++;
        scaled = n / Math.pow(1000, tier);
    }

    return scaled.toFixed(decimals) + suffixes[tier];
}
    document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault();
    if (event.repeat) return;
    let amount = 1 + upgrades;
    addClicks(amount)
  }
});
    box.addEventListener("click", function() {
      let amount = 1 + upgrades;
      addClicks(amount)
    });
    box.addEventListener("click", function () {
      box.classList.remove("shk-11-active");
      void box.offsetWidth;
      box.classList.add("shk-11-active");
});
    document.addEventListener("keyup", function (event) {
      if(event.key === " "){
      box.classList.remove("shk-11-active");
      void box.offsetWidth;
      box.classList.add("shk-11-active");
      }
});
    box.addEventListener("animationend", function () {
      box.classList.remove("shk-11-active");
});
    /*upgrade shop*/
/* upgrade shop */
const amt = document.getElementById("amountBuy");
const price = document.querySelector(".price");
const buyB = document.getElementById("buyButton");
const upgradeNum = document.querySelector(".upgradeNum");
let priceMultiplier = Number(localStorage.getItem("priceMultiplier")) || 50;
let upgrades = Number(localStorage.getItem("upgrades")) || 0;

upgradeNum.textContent = upgrades;
amt.addEventListener("input", function () {
  if (this.value === "") return;
  if (Number(this.value) > 1000000000) {
    this.value = "1000000000";
  } else if (Number(this.value) < 0) {
    this.value = "0";
  }
});
amt.addEventListener("keydown", function(event) {
  if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === "-"|| event.key === "."|| event.key === ",") {
    event.preventDefault();
    decs.value = "";
  }
});
    let savedUpgrade = document.cookie
      .split("; ")
      .find(row => row.startsWith("upgrades="));
      upgradeNum.textContent = upgrades;
      function saveUpgrades() {
        localStorage.setItem("upgrades", upgrades);
      }
amt.addEventListener("input", function () {
  price.textContent = (Number(amt.value) * priceMultiplier).toFixed(0);
  let priceValue = Number(amt.value) * priceMultiplier;
  var amtt = amt;
})
buyB.addEventListener("click", function () {
  const amount = Number(amt.value);
    const priceValue = Math.floor(amount * priceMultiplier);
    if (!Number.isInteger(amount) || amount <= 0) {
        return;
    }
    if (clicks >= priceValue) {
        clicks -= priceValue;
        upgrades += amount;
        upgradeNum.textContent = upgrades;
        priceMultiplier *= 1.2;
        count.textContent = clicks;
        upgradeNum.textContent = upgrades;
        price.textContent = Math.floor(amount * priceMultiplier);
        localStorage.setItem("clicks", clicks);
        localStorage.setItem("upgrades", upgrades);
        localStorage.setItem("priceMultiplier", priceMultiplier);
    }
    else {
      
    }
});
  const shopButton = document.getElementById("shopButton");
  const buyMenu = document.getElementById("buyMenu");
  let rankTxt = document.getElementById("rankTxt")
  shopButton.addEventListener("click", function (event) {
      if (buyMenu.style.opacity === "0") {
        buyMenu.style.opacity = "1";
        buyMenu.style.pointerEvents = "auto";
      }
      else {
        buyMenu.style.opacity = "0";
        buyMenu.style.pointerEvents = "none";
      }
});
const downloadButton = document.getElementById("downloadB");
document.addEventListener("click", (e) => {
  if (
    !buyMenu.contains(e.target) &&
    !shopButton.contains(e.target)
  ) {
    buyMenu.style.opacity = "0";
    buyMenu.style.pointerEvents = "none";
  }
});
/* download idea
    <a download="">
      <button id="downloadB">download file</button>
    </a>
downloadButton.addEventListener("click", function () {
    // txt file 
    const saveData =
        "Clicker Game Save\n" +
        "Clicks: " + clicks + "\n" +
        "Upgrades: " + upgrades + "\n" +
        "Price Multiplier: " + priceMultiplier;

    const blob = new Blob(
        [saveData],
        { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "clicker-save.txt";

    link.click();

    URL.revokeObjectURL(url);
});
*/
/*other stuff*/
var Interval = window.setInterval(each, 1);
var decSettings = 2;
function each(){
  count.textContent = m(clicks,decSettings);
  shopButton.blur();
  box.blur()
  updateRank()
};
window.onload = each;
var decs = document.getElementById("deciSettings")
decs.addEventListener("keydown", function(event) {
  if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === "-"|| event.key === "."|| event.key === ",") {
    event.preventDefault();
    amt.value = "";
  }
});
decs.addEventListener("input",function(event) {
  decSettings = decs.value;
})
decs.addEventListener("input", function () {
  if (this.value === "") return;
  if (Number(this.value) > 50) {
    this.value = "50";
    decSettings = "50";
  } else if (Number(this.value) < 0) {
    this.value = "0";
  }
});
(() => {
    // Function to create a sparkle at a given position
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        // Style directly via sparkles.style
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.background = 'radial-gradient(circle, #ffe605, rgba(255,255,0,0))';
        sparkle.style.width = `${Math.random() * 8 + 4}px`;
        sparkle.style.height = sparkle.style.width;

        document.body.appendChild(sparkle);

        // Remove sparkle after animation ends
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    // Create sparkles on mouse move
    document.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 3; i++) {
            const offsetX = e.clientX + (Math.random() * 20 - 10);
            const offsetY = e.clientY + (Math.random() * 20 - 10);
            createSparkle(offsetX, offsetY);
        }
    });
})();
let effectC = localStorage.getItem("effectColor") || "red";
selectEColor.value = effectC;
effect.src = `effects/beginner effects/${effectC}.gif`;
function saveEffectC() {
    effectC = selectEColor.value;
    localStorage.setItem("effectColor", effectC);
}

function rankT(amtClick,amtUpgrade,rank) {
  if(totalClicks >= amtClick) {
    if(upgrades >= amtUpgrade) {
      rankTxt.textContent = rank;
    }
  };
};
function updateRank() {
rankT(0,0,"Just Started")
rankT(100,1,"Played The Game Before")
rankT(1000,0,"Noob")
rankT(5000,0,"Beginner")
rankT(30000+0,0,"Pretty Mid")
rankT(50000,0,"Grinder")
rankT(100000,0,"SUPER Grinder")
rankT(200000,0,"ULTRA Grinder")
rankT(300000,0,"TRYHARD Grinder")
rankT(500000,0,"ULTRAMATE GRINDER")
rankT(1000000,0,"Have Some Aura")
rankT(5000000,0,"Kinda Pro")
rankT(7500000,0,"hmm")
rankT(10000000,0,"PRO")
rankT(15000000,0,"GREAT PRO")
rankT(20000000,0,"SUPER PRO")
rankT(30000000,0,"WOW PRO")
rankT(50000000,0,"ULTRA PRO")
rankT(100000000,0,"ULTRAMATE PRO")
rankT(120000000,0,"SUPER ULTRAMATE PRO")
rankT(150000000,0,"GLOBE PRO")
rankT(200000000,0,"WORLD PRO")
rankT(250000000,0,"Soon At Champions...")
rankT(300000000,0,"Rly Soon Champions")
rankT(400000000,0,"OMG ULTRAMATE PRO")
rankT(500000000,0,"CHAMPIONS")
rankT(750000000,0,"GLOBE CHAMPIONS")
rankT(1000000000,0,"WORLD CHAMPIONS")
rankT(1250000000,0,"SUPER CHAMPIONS")
rankT(1500000000,0,"ULTRA CHAMPIONS")
rankT(1750000000,0,"ULTRAMATE CHAMPIONS")
rankT(2000000000,0,"ULTRASUPER CHAMPIONS")
rankT(3500000000,0,"EPIC")
rankT(4500000000,0,"SUPER EPIC")
rankT(5500000000,0,"ULTRAMATE EPIC")
rankT(6000000000,0,"MYTHIC")
rankT(7000000000,0,"SUPER MYTHIC")
rankT(9000000000,0,"ULTRA MYTHIC")
rankT(10000000000,0,"!BILLION!")
rankT(12500000000,0,"ULTRAMATE MYTHIC")
rankT(17500000000,0,"LEGANDARY")
rankT(20000000000,0,"SUPER LEGANDARY")
rankT(25000000000,0,"ULTRA LEGANDARY")
rankT(30000000000,0,"ULTRAMATE LEGENDARY")
rankT(300000000000,0,"the next one will take a long time")
rankT(30000000000,0,"ULTRAMATE LEGENDARY")
rankT(50000000000,0,"RAREST CHAMPIONS")
rankT(60000000000,0,"Becoming a legend 7B")
rankT(70000000000,0,"LEGEND")
rankT(80000000000,0,"TRUE LEGEND")
rankT(90000000000,0,"SUPER LEGEND")
rankT(100000000000,0,"ULTRA LEGEND")
rankT(150000000000,0,"ULTRAMATE LEGEND")
rankT(200000000000,0,"NEVER ENDING LEGEND")
rankT(300000000000,0,"LEGEND AURA FOR U")
rankT(400000000000,0,"AURA KING/QUEEN")
rankT(450000000000,0,"AURA BILLIONARE")
rankT(500000000000,0,"U OWN A PLANET")
rankT(600000000000,0,"AURA SOLAR")
rankT(800000000000,0,"SOON 10B!!!")
rankT(1000000000000,0,"CRAZY PLAYER")
rankT(1500000000000,0,"NEVER ENDING RANK")
rankT(4000000000000,0,"TRUE NEVER ENDING")
rankT(9000000000000,0,"ez player")
rankT(10000000000000,0,"ALL AURA TRANSFER")
}
// saves 2
const shirtColors = ["red", "blue", "cyan", "green", "lime", "orange", "pink", "purple", "black", "white", "yellow"];
let tShirtColor = (localStorage.getItem("TShirtColor") || "red").toLowerCase();
if (!shirtColors.includes(tShirtColor)) tShirtColor = "red";
let avatarType = localStorage.getItem("avatarType") === "cat" ? "cat" : "character";

function getAvatarPath(color, type) {
    const requestedColor = (color || "red").toLowerCase();
    const safeColor = shirtColors.includes(requestedColor) ? requestedColor : "red";
    const safeType = type === "cat" ? "cat" : "character";
    const fileColor = safeType === "cat" && safeColor !== "black"
        ? safeColor
        : safeColor.charAt(0).toUpperCase() + safeColor.slice(1);
    return `Avatar/${safeType}/${fileColor}Sh.gif`;
}

selectTSColor.value = tShirtColor;
selectAvt.value = avatarType;

function saveTShirtC() {
    const selectedColor = selectTSColor.value.toLowerCase();
    tShirtColor = shirtColors.includes(selectedColor) ? selectedColor : "red";
    localStorage.setItem("TShirtColor", tShirtColor);
    box.src = getAvatarPath(tShirtColor, avatarType);
}

function saveAvatarType() {
    avatarType = selectAvt.value === "cat" ? "cat" : "character";
    localStorage.setItem("avatarType", avatarType);
    box.src = getAvatarPath(tShirtColor, avatarType);
}

selectTSColor.addEventListener("change", saveTShirtC);
selectAvt.addEventListener("change", saveAvatarType);
box.src = getAvatarPath(tShirtColor, avatarType);
//infoMenu
let infoBtn = document.getElementById("infoBtn");
let infoMenu = document.getElementById("infoMenu");
let closeInfoBtn = document.getElementById("closeInfoBtn");

infoBtn.addEventListener("click", function () {
    infoMenu.classList.toggle("show");
});

closeInfoBtn.addEventListener("click", function () {
    infoMenu.classList.remove("show");
});
/* © 2026 @web-super-coder. All Rights Reserved.

      This game contains original content created by
      @web-super-coder, as well as certain AI-assisted
      materials.

      Original content is protected by applicable
      copyright laws. Third-party materials remain
      subject to their respective licenses and rights.
*/
