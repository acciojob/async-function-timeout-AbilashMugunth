let text = document.querySelector("#text");
let delay = document.querySelector("#delay");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

btn.addEventListener("click", () => {
  hello(text.value, delay.value);
});

async function hello(text, delay) {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });

  const data = await p1;
  output.innerHTML = data;
}
