function addFavthings(){
    var ul = document.getElementById("favlist");
    var favthing = document.getElementById("favthing");
    var li = document.createElement("li");
    li.setAttribute('id',favthing.value);
    li.appendChild(document.createTextNode(favthing.value));
    ul.appendChild(li);
}
