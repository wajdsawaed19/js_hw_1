

//HW אירועי דפדפן

//task1
<div id="hoverBox" style="width:100px; height:100px; background-color: gray;"></div>

<script>
  const box = document.getElementById("hoverBox");
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
  });
</script>


//task2
<div id="hoverBox2" style="width:100px; height:100px; background-color: gray;"></div>

<script>
  const box2 = document.getElementById("hoverBox2");
  box2.addEventListener("mouseover", () => {
    box2.style.backgroundColor = "lightblue";
  });
  box2.addEventListener("mouseout", () => {
    box2.style.backgroundColor = "gray";
  });
</script>

//task3
<button id="clickBtn">לחץ כאן</button>
<p>נלחץ: <span id="clickCount">0</span> פעמים</p>

<script>
  let count = 0;
  const btn = document.getElementById("clickBtn");
  const span = document.getElementById("clickCount");

  btn.addEventListener("click", () => {
    count++;
    span.textContent = count;
  });
</script>
 