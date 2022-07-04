let search;

function getSearchTerm() {
  search = document.location.search;
  if (search) {
    pairs = search.substring(1).split('&');
    for (let pair of pairs) {
      pair = pair.split('=');
      if (pair[0] === 'q') {
        return pair[1];
      }
    }
  }
}

function updateAnchor(anchor) {
  if (document.location.search !== search) {
    anchor.href = `https://www.google.com/search?q=${getSearchTerm()}`;
  }
}

let div = document.createElement("div");
document.body.appendChild(div);
div.style.position = "fixed";
div.style.bottom = "0px";
div.style.right = "0px";
div.style.padding = "10px";
div.style.zIndex = "100";
div.style.color = "hsla(146, 100%, 20%, 1.0)";
div.style.backgroundColor = "#01FF70";

let anchor = document.createElement("a");
div.appendChild(anchor);
anchor.innerText = "Switch to Google";
updateAnchor(anchor);

// Keep watching for URL changes
setInterval(() => updateAnchor(anchor), 1000);
