let li = document.querySelectorAll("li");
let charP  = document.querySelectorAll(".char-p");
let charName = document.querySelector(".char-name");
let planetP = document.querySelectorAll(".planet-p");
let planetName = document.querySelector(".planet-name");

async function getRequest() {


    const request = await fetch("https://swapi.dev/api/people/");
    const data = await request.json();

    console.log(data);

    for(let i = 0; i < li.length; i++) {

        li[i].innerHTML = data.results[i].name;
    }
    
    for(let i = 0; i < li.length; i++) {

        li[i].addEventListener("click", function() {

                charName.innerHTML = data.results[i].name;
                charP[0].innerHTML = "Height: " + data.results[i].height + "cm";
                charP[1].innerHTML = "Mass: " +  data.results[i].mass + "kg";
                charP[2].innerHTML = "Hair color: " + data.results[i].hair_color;
                charP[3].innerHTML = "Skin color: " + data.results[i].skin_color;
                charP[4].innerHTML = "Eye color: " +  data.results[i].eye_color;
                charP[5].innerHTML = "Birth year: " + data.results[i].birth_year;
                charP[6].innerHTML = "Gender: " + data.results[i].gender;
       

                let fetchPlanet = async function() {
                    const requestPlanet = await fetch(data.results[i].homeworld);
                    const planetData = await requestPlanet.json();
                    
                    console.log(planetData)
                    planetName.innerHTML = planetData.name;
                    planetP[0].innerHTML = "Rotation period: " + planetData.rotation_period + " days";
                    planetP[1].innerHTML = "Orbital period: " +  planetData.orbital_period + " days";
                    planetP[2].innerHTML = "Diameter: " +  planetData.diameter + "km";
                    planetP[3].innerHTML = "Climate: " +  planetData.climate;
                    planetP[4].innerHTML = "Gravity: " + planetData.gravity;
                    planetP[5].innerHTML = "Terrain: " +  planetData.terrain;

                }

                fetchPlanet();
                
          
    
    
            li[i].classList.add("li-clicked");
            li[i].innerHTML = li[i].innerHTML + "▸";
    
        })
        
    }




}

getRequest();


