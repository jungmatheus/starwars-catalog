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
    document.getElementsByClassName("detail1")[0].innerText = data.name
    document.getElementsByClassName("detail2")[0].innerText = data.height
    document.getElementsByClassName("detail3")[0].innerText = data.mass
    document.getElementsByClassName("detail4")[0].innerText = data.hair_color
    document.getElementsByClassName("detail5")[0].innerText = data.skin_color
    document.getElementsByClassName("detail6")[0].innerText = data.eye_color
    document.getElementsByClassName("detail7")[0].innerText = data.birth_year
    document.getElementsByClassName("detail8")[0].innerText = data.gender

    response = await fetch(data.homeworld)
    data = await response.json()
    document.getElementsByClassName("detail9")[0].innerText = data.name
    document.getElementsByClassName("detail10")[0].innerText = data.rotation_period
    document.getElementsByClassName("detail11")[0].innerText = data.orbital_period
    document.getElementsByClassName("detail12")[0].innerText = data.diameter
    document.getElementsByClassName("detail13")[0].innerText = data.climate
    document.getElementsByClassName("detail14")[0].innerText = data.gravity
    document.getElementsByClassName("detail15")[0].innerText = data.terrain
    document.getElementsByClassName("detail16")[0].innerText = data.population
}

request()