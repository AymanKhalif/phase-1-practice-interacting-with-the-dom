document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector("#counter");
  const minusBtn = document.querySelector("#minus");
  const plusBtn = document.querySelector("#plus");
  const heartBtn = document.querySelector("#heart");
  const pauseBtn = document.querySelector("#pause");
  const restartBtn = document.querySelector("#restart");
  const likesList = document.querySelector(".likes");
  const commentsList = document.querySelector(".comments");
  const commentForm = document.querySelector("#comment-form");
  const commentInput = document.querySelector("#comment-input");

  let count = 0;
  let timerId = setInterval(incrementCounter, 1000);
  let isPaused = false;

  function incrementCounter() {
    if (!isPaused) {
      count++;
      counter.textContent = count;
    }
  }

  function decrementCounter() {
    count--;
    counter.textContent = count;
  }

  function addLike() {
    const li = document.createElement("li");
    li.textContent = `${count} has been liked`;
    likesList.append(li);
  }

  function togglePause() {
    isPaused = !isPaused;
    minusBtn.disabled = isPaused;
    plusBtn.disabled = isPaused;
    heartBtn.disabled = isPaused;
    restartBtn.disabled = isPaused;
    pauseBtn.textContent = isPaused ? "resume" : "pause";
  }

  function restart() {
    count = 0;
    counter.textContent = count;
    likesList.innerHTML = "";
    commentsList.innerHTML = "";
    isPaused = false;
    pauseBtn.textContent = "pause";
  }

  function addComment(e) {
    e.preventDefault();
    const comment = commentInput.value;
    const p = document.createElement("p");
    p.textContent = comment;
    commentsList.append(p);
    commentInput.value = "";
  }

  minusBtn.addEventListener("click", decrementCounter);
  plusBtn.addEventListener("click", incrementCounter);
  heartBtn.addEventListener("click", addLike);
  pauseBtn.addEventListener("click", togglePause);
  restartBtn.addEventListener("click", restart);
  commentForm.addEventListener("submit", addComment);
});
