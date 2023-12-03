function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("header").style.color = randomColor;
}
