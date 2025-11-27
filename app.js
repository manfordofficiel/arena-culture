let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

  let likeCount = 0;
  let loveCount = 0;
  let commentCount = 0;

  function like() {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
  }

  function love() {
    loveCount++;
    document.getElementById("loveCount").innerText = loveCount;
  }

  function toggleComment() {
    const section = document.getElementById("commentSection");
    section.style.display = section.style.display === "none" ? "block" : "none";
  }

  function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");
    const text = commentInput.value.trim();
    if (text !== "") {
      const li = document.createElement("li");
      li.textContent = text;
      commentList.appendChild(li);
      commentCount++;
      document.getElementById("commentCount").innerText = commentCount;
      commentInput.value = "";
    }
  }
      function renderComments() {
      const list = document.getElementById("commentList");
      list.innerHTML = "";
      const limit = 5;
      for (let i = 0; i < commentList.length; i++) {
        const li = document.createElement("li");
        li.textContent = commentList[i];
}
}


