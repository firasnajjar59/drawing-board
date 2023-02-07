for (let i = 1; i <= 484; i++) {
  let id = "item" + i;
  //   console.log(id);
  document.getElementById(id).setAttribute("onclick", `clr(${id})`);
  console.log(document.getElementById(id).getAttribute("class"));
}

function clr(a) {
  let def = "div1";
  if (a.getAttribute("class") == def) {
    a.setAttribute("class", "div2");
  } else {
    a.setAttribute("class", "div1");
  }
}
function render(){
  document.getElementById("container").style.display = "none";
  document.getElementById("container").offsetHeight;
  document.getElementById("container").removeAttribute("style");
}

function reloadpage() {
  window.location.reload();
}

function starttype() {
  for (let i = 1; i <= 484; i++) {
    let id = "item" + i;

    document.getElementById(id).setAttribute("class", `div1`);
  }
  document.getElementById("container").style.display = "none";
  document.getElementById("container").offsetHeight;
  document.getElementById("container").removeAttribute("style");
}

