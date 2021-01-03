//plus
let btnplus = document.getElementsByClassName("add");
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    btnplus[i].nextElementSibling.innerHTML++;
    somme();
  });
}

// minus
let btnminus = document.querySelectorAll(".minus");
for (let btn of btnminus) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.innerHTML > 0) {
      btn.previousElementSibling.innerHTML--;
      somme();
    }
  });
}

// Delete 
let trush = Array.from(document.querySelectorAll(".fa-trash-alt"));
trush.map((el) =>
  el.addEventListener("click", function () {
    el.parentNode.remove();
    somme();
  })
);

// somme
function somme() {
  let price = document.getElementsByClassName("pris");
  let qte = document.getElementsByClassName("qte");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum;
}

//Like
let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("red");
  });
}