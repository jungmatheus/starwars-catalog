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




async function request() {
    let response = await fetch("https://swapi.dev/api/people/1/")
    let data = await response.json()
    console.log(data.name)
    console.log(data.height)
	//document.getElementByClassName("name")[0].innerHTML = name
}

request()