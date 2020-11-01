let li = document.querySelectorAll("li");



for(let i = 0; i < li.length; i++) {
    
    li[i].addEventListener("click", function() {

        li[i].classList.add("li-clicked");
        li[i].innerHTML = li[i].innerHTML + "▸";

    })
    
}




