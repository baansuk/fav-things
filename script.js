function addFavthings(){
    var ul = document.getElementById("favlist");
    var favthing = document.getElementById("favthing");
    var li = document.createElement("li");
    li.setAttribute('id',favthing.value);
    li.appendChild(document.createTextNode(favthing.value));
    ul.appendChild(li);
}

var input = document.getElementById("favthing");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("fav_btn").click();
  }
});
