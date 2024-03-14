var getRequest = new XMLHttpRequest();

getRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     document.getElementById("text").innerHTML = xhttp.responseText;
  }
};

function update() {
  console.log("updated");
  getRequest.send();
}
getRequest.open("GET", "https://www.jsonkeeper.com/b/S6B8", true);