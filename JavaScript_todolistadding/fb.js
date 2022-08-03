var btn = document.getElementById("cbtn")
var i1 = document.getElementById("input1")
var ul = document.getElementById("ul1")
btn.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(i1.value));
    ul.append(li)
})
