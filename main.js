const container = document.querySelector(".js-container");
const maxSnowFlakes = 99;
const flakesArr = [];

const createSnowFall = () => {
  if (flakesArr.length < maxSnowFlakes) {
    const snowflake = document.createElement("div");
    let transformValue = Math.random() * 360;

    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.fontSize = Math.random() * 15 + 20 + "px";
    snowflake.style.animationDuration = Math.random() * 2 + 7 + "s";
    snowflake.style.transform = `rotate(-${transformValue}deg)`;

    snowflake.classList.add("snowflake");
    snowflake.textContent = "❆"; // ❆
    container.append(snowflake);
    flakesArr.push(snowflake);

    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
      flakesArr.splice(flakesArr.indexOf(snowflake), 1);
    });
  }
};

setInterval(createSnowFall, 500);
