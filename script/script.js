let li = document.querySelectorAll("li");

async function request() {


    const getRequest = await fetch("https://swapi.dev/api/people/");
    const data = await getRequest.json();

    console.log(data);
}

request();

for(let i = 0; i < li.length; i++) {

    li[i].addEventListener("click", function() {

        li[i].classList.add("li-clicked");
        li[i].innerHTML = li[i].innerHTML + "▸";

    })
    
}




