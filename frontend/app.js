const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Create arrays representing planets and their properties
const planets = [
  // The planet objects you already have
];

// Setting up function to update the positions of planets based on their speed
function updatePos() {
  planets.forEach((planet) => {
    planet.rotationSpeed += 0.001; // The rotation speed will be increasing with time
    const angle = planet.rotationSpeed % (2 * Math.PI);
    planet.x = planet.distance * Math.cos(angle);
    planet.y = planet.distance * Math.sin(angle);
  });
}

// Using setInterval() to call updatePos() function at a regular interval (using WebSocket or Socket.io)
setInterval(() => {
  updatePos();
}, 100); // Update every 100ms

app.get("/planets", (req, res) => {
  res.json(planets);
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`The server is running mate in ${PORT}`);
});
