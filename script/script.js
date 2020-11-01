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
    document.getElementsByClassName("detail2")[0].innerText = "Height: " + data.height + "cm"
    document.getElementsByClassName("detail3")[0].innerText = "Mass: " + data.mass + "kg"
    document.getElementsByClassName("detail4")[0].innerText = "Hair color: " + data.hair_color
    document.getElementsByClassName("detail5")[0].innerText = "Skin color: " + data.skin_color
    document.getElementsByClassName("detail6")[0].innerText = "Eye color: " + data.eye_color
    document.getElementsByClassName("detail7")[0].innerText = "Birth Year: " + data.birth_year
    document.getElementsByClassName("detail8")[0].innerText = "Gender: " + data.gender

    response = await fetch(data.homeworld)
    data = await response.json()
    document.getElementsByClassName("detail9")[0].innerText = data.name
    document.getElementsByClassName("detail10")[0].innerText = "Rotation period: " + data.rotation_period + "h"
    document.getElementsByClassName("detail11")[0].innerText = "Orbital period: " + data.orbital_period + " days"
    document.getElementsByClassName("detail12")[0].innerText = "Diameter: " + data.diameter + "km"
    document.getElementsByClassName("detail13")[0].innerText = "Climate: " + data.climate
    document.getElementsByClassName("detail14")[0].innerText = "Gravity: " + data.gravity
    document.getElementsByClassName("detail15")[0].innerText = "Terrain: " + data.terrain
    document.getElementsByClassName("detail16")[0].innerText = "Population: " + data.population
}

request()