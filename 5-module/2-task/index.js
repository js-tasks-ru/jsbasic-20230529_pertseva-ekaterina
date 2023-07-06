function toggleText() {
let text = document.querySelector("#text")
document.querySelector(".toggle-text-button").addEventListener("click", () =>{
  text.hidden == true ? text.hidden = false : text.hidden = true;
});
}
