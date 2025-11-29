document.addEventListener("DOMContentLoaded", () => {
  const datetime = document.getElementById("datetime");
  if (datetime) {
    datetime.innerHTML = new Date().toLocaleString();
  }
});
