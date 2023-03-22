window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    document.querySelector("span#shoutLoader").innerText = "shoutPutter";
    document.querySelector("div#iShout").removeAttribute("class")
    event.preventDefault();
  };
};