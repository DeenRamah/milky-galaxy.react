const express = require("express")
const app = express();
const cors = require ("cors")

app.use(cors())
app.use(express.json())


//create arrays rep planet and speed and distance
const planets = [
    {name: "Sun", radius: 100, distance: 0, rotationSpeed: 0},
    {name: "Mercury", radius: 10, distance: 10, rotationSpeed: 0.09},
    {name: "Venus", radius: 15, distance: 20, rotationSpeed: 0.07},
    {name: "Earth", radius: 25, distance: 30, rotationSpeed: 0.04},
    {name: "Mars", radius: 20, distance: 40, rotationSpeed: 0.05},
    {name: "Jupiter", radius: 60, distance: 50, rotationSpeed: 0.055},
    {name: "Satan", radius: 30, distance: 60, rotationSpeed: 0.065},
    {name: "Urenus", radius: 40, distance: 70, rotationSpeed: 0.046},
    {name: "Neptune", radius: 35, distance: 80, rotationSpeed: 0.08},
    {name: "Pluto", radius: 50, distance: 90, rotationSpeed: 0.085}
]
//setting up function to update the positions of planets based on their speed

function updtpPos() {
    planets.forEach((planet) =>{
        planet.rotationSpeed =+ 0.001 // the rotation speed will be increasing with time
        const angle = planet.rotationSpeed % (2 * Math.PI)//ensure the angle remains in the circle regardless of the speed
        planet.x = planet.distance * Math.cos(angle)
        planet.y = planet.distance * Math.sin(angle)
    })
}
//using setInterval() to call updateplaneposition function at regular interval uing websocket or socket.io

setInterval(() =>{
    updtpPos();
}, 100) //update every 100ms

app.get("/planets", (req, res) => {
    res.json(planets)
})


const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log(`The server is running mate in ${PORT}`)
})
//http://localhost:4444