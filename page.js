function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("colorChange").style.color = randomColor;
}

function generateNickname() {
  document.getElementById("puttoout").value;
  const gInput = document.getElementById("puttoout").value;
  console.log(gInput);
}
