var btn = document.getElementById("cbtn")
var i1 = document.getElementById("input1")
var ul = document.getElementById("ul1")
var ls = document.getElementsByTagName("li")
btn.addEventListener("click", function(){
    if(i1.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(i1.value));
        ul.append(li)
        i1.value="";
    }
})

i1.addEventListener("keypress", function(event){
    if (event.code === "Enter"){
        var li = document.createElement("li");
        
        li.appendChild(document.createTextNode(i1.value));
        var b = document.createElement("button")
        b["id"] = i1.value
        b.appendChild(document.createTextNode("clickme!!"))
        li.appendChild(b)
        ul.append(li)
        i1.value="";

    }    
})

function liall(){
    for (var i = 0;i < ls.length; i++)
        console.log(ls[i].classList)
}

for (var i = 0;i < ls.length; i++){
        ls[i].addEventListener("click", function oao(){
            var det = this.className;
            this.setAttribute("class", "done cl")
            console.log(det.split(' ')[0])
            /* liall()*/
        })
}