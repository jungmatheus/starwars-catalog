let li = document.querySelectorAll("li");



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
    console.log(data.mass)
    console.log(data.hair_color)
    console.log(data.skin_color)
    console.log(data.eye_color)
    console.log(data.birth_year)
    console.log(data.gender)

    response = await fetch(data.homeworld)
    data = await response.json()

    console.log(data.name)
    console.log(data.rotation_period)
    console.log(data.orbital_period)
    console.log(data.diameter)
    console.log(data.climate)
    console.log(data.gravity)
    console.log(data.terrain)
    console.log(data.population)
	//document.getElementByClassName("name")[0].innerHTML = name
}

request()