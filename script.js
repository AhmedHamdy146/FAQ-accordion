const btns = document.querySelectorAll(".ques .flex");
for (const btn of btns) {
  btn.addEventListener("click", () => {
    const parag = btn.parentElement.lastElementChild;
    if (btn.classList.contains("open")) {
      btn.classList.toggle("open");
      btn.children[1].src = `./assets/images/icon-plus.svg`;
      parag.style.height = "0";
    } else {
      btn.classList.toggle("open");
      btn.children[1].src = `./assets/images/icon-minus.svg`;
      parag.style.height = "fit-content";
    }
  });
}

function start(btn) {
  const parag = btn.parentElement.lastElementChild;
  btn.classList.toggle("open");
  btn.children[1].src = `./assets/images/icon-minus.svg`;
  parag.style.height = "fit-content";
}

start(btns[0]);
