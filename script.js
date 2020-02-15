function addFavthings(){
    var ul = document.getElementById("favlist");
    var favthing = document.getElementById("favthing");
    var li = document.createElement("li");
    li.setAttribute('id',favthing.value);
    li.appendChild(document.write('<a href="http://www.google.com/search?q='+favthing.value+'">'+favthing.value+'</a>'));
    ul.appendChild(li);
}