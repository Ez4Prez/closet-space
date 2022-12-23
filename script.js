const h2 = document.createElement("h2");
h2.textContent = "Come out with the old, get in with the new";
document.querySelector("body").appendChild(h2);
h2.addEventListener('mouseover', function () {h2.style.backgroundColor = "deeppink"})
h2.addEventListener('mouseleave', function () {h2.style.backgroundColor = "darkblue"})