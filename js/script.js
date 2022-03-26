document.querySelector(".btn").addEventListener("click", (e) => {
  const button = e.currentTarget;
  button.classList.add("disabled");
  button.disabled = true;
});
