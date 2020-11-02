let li = document.querySelectorAll("li");
let charP = document.querySelectorAll(".char-p");
let charName = document.querySelector(".char-name");
let planetP = document.querySelectorAll(".planet-p");
let planetName = document.querySelector(".planet-name");
let ul = document.querySelector("ul");
let loading1 = document.querySelector("loading1");
let loading2 = document.querySelector("loading2");
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
let pages = document.querySelector("pages");





    let page = "https://swapi.dev/api/people/";

let run = function() {

    const request = fetch(page);

    request.then(function(response) {
        const data = response.json();

        data.then(function (result) {


            let liCheck = 0;
            page = result.next;
            
         
            for (let i = 0; i < li.length; i++) {


                li[i].innerHTML = result.results[i].name;

                li[i].addEventListener("click", function () {



                    let listAnimation = function () {
                        if (charP[0].innerHTML.length > 0) {
                            li[liCheck].classList.remove("li-clicked");
                            li[liCheck].innerHTML = result.results[liCheck].name;
                            console.log("happens")
                            liCheck = i;
                            li[i].innerHTML = li[i].innerHTML + "▸";
                            li[i].classList.add("li-clicked");

                        }
                        else {
                            liCheck = i;
                            li[i].classList.add("li-clicked");
                            li[i].innerHTML = li[i].innerHTML + "▸";
                        }

                    }

                    listAnimation();

                    let drawDetails = function () {
                        charName.innerHTML = result.results[i].name;
                        charP[0].innerHTML = "Height: " + result.results[i].height + "cm";
                        charP[1].innerHTML = "Mass " + result.results[i].mass + "kg";
                        charP[2].innerHTML = "Hair color: " + result.results[i].hair_color;
                        charP[3].innerHTML = "Skin color: " + result.results[i].skin_color;
                        charP[4].innerHTML = "Eye color: " + result.results[i].eye_color;
                        charP[5].innerHTML = "Birth year: " + result.results[i].birth_year;
                        charP[6].innerHTML = "Gender: " + result.results[i].gender;
                    }
                    drawDetails();


                    let fetchPlanet = function () {
                        const requestPlanet = fetch(result.results[i].homeworld);

                        requestPlanet.then(function(planetResponse) {
                            const planetData = planetResponse.json();

                            planetData.then(function(planetResult) {
   
                                planetName.innerHTML = planetResult.name;
                                planetP[0].innerHTML = "Rotation period: " + planetResult.rotation_period + " days";
                                planetP[1].innerHTML = "Orbital period: " + planetResult.orbital_period + " days";
                                planetP[2].innerHTML = "Diameter: " + planetResult.diameter + "km";
                                planetP[3].innerHTML = "Climate: " + planetResult.climate;
                                planetP[4].innerHTML = "Gravity: " + planetResult.gravity;
                                planetP[5].innerHTML = "Terrain: " + planetResult.terrain;

                            })
                        })

                        requestPlanet.catch(function() {
                            console.log("loading");
                        })

                    }
                    fetchPlanet();



                })

            }
        })

    })

    request.catch(function() {
        console.log("loading");
    })


}  

    
run();
buttonRight.addEventListener("click", function() {
    run();
})




