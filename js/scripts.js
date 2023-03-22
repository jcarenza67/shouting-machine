window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    const shoutLoaderInput = document.getElementById("shoutLoaderInput").value;

    document.querySelector("span#shoutPutter").innerText = shoutLoaderInput;

    document.querySelector("div#iShout").removeAttribute("class")
    event.preventDefault();
  };
};