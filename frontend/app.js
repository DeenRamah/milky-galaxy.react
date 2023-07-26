import React, { useEffect, useState } from  "react";
import axios from  "axios";
import "./import express from 'express'";

//import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    //this.server.use(routes);
  }
}

export default new App().server;
import { response } from "express";

function App(){
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        // fetching data from the backend server
        axios.get("/http://localhost:4444/planets").then((response) =>{
            setPlanets(response.data);
        })
    }, []);
    
    return (
        <div className="app">
            <h1>3D planet visuliser</h1>
            <div className="planet-container">
                {planets.map((planet) =>(
                    <div
                    key={planet.name}
                    className = "planet"
                    style={{
                        width: planet.radius * 2 + "px",
                        height: planet.radius * 2 + "px",
                        left: `calc(50% -${planet.x}px)`,
                        top:`calc(50% - ${planet.y}px)`,
                    }}
                    >
                        {planet.name}
                        </div>
                ))}
            </div>
        </div>
    );
    
}

export default App;