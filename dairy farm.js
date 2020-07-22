var icon = document.getElementById("icon")
var menu = document.getElementById("menu")

icon.addEventListener('click', function(){
   if(menu.style.display === 'none'){
       menu.style.display = 'block';
   } else{
       menu.style.display = 'none';
   }
})
setInterval(function(){
    var i = document.getElementById("change").innerHTML
    if(i == "GROW..."){
        document.getElementById("change").innerHTML = "DRINK..."
    }else if(i == "DRINK..."){
        document.getElementById("change").innerHTML = "LIVE..."
    }else{
        document.getElementById("change").innerHTML = "GROW..."
    }
}, 3000)