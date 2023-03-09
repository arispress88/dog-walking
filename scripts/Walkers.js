// import { CityList } from "./CityList.js"
import { getCities, getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
       
        const itemClicked = clickEvent.target

        
        if (itemClicked.id.startsWith("walker")) {

            const [,walkerId] = itemClicked.id.split("--")

          
            for (const walker of walkers) {

             
                if (walker.id === parseInt(walkerId)) {
                    let walkerCities = getWalkerCities()
                    const matchingWalkerCityObjects = []
                    for (const walkerCityObject of walkerCities) {
                        if (walkerCityObject.walkerId === parseInt(walkerId)) {
                            matchingWalkerCityObjects.push(walkerCityObject)
                        }
                    }

                    let cities = getCities()

                    let cityString = ""

                    for (const matchingObject of matchingWalkerCityObjects){
                        for (const singleCity of cities){
                            if(singleCity.id === matchingObject.cityId){
                                cityString += `${singleCity.name}`
                            }
                        }
                    }
                    
                    window.alert(`${walker.name} services ${cityString}`)
                }
            }
        }
    }
)

let walkers = getWalkers()


// const filterWalkerCitiesByWalker = (walker) => {
//     let assignments = []
//     for (const assignment of walkerCities) {
//         if (assignment.walkerId === walkers.id) {
//             assignments.push(assignment)
//         }
//     }

//     return assignments
// }

// const assignedCityNames = (assignments) => {
//     let cityNames = ""
//     for (const assignment of assignments) {
//         for (const city of cities) {
//             if (city.id === assignment.cityId) {
//                 cityNames = `${cityNames} and ${city.name}`
//             }
//         }
        
//     }

//     return cityNames
// }

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    
    return walkerHTML
}

