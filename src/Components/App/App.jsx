import React, {Component} from "react";
import Header from "../Header/Header";
import './App.css'
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetail from "../PersonDetail/PersonDetail";
import SwapiService from "../../Services/SwapiService";

export default class App extends Component {
    swapi = new SwapiService()
    random = this.swapi.getPlanet(1).then(res => res)
    state = {
        randomPlanet: {}
    }

    constructor() {
        super();
        this.updateRandomPlanet()
    }

    onRandomPlanet(randomPlanet) {
        this.setState({randomPlanet})
    }

    updateRandomPlanet() {
        this.swapi.getPlanet(1).then((res) => {
            this.onRandomPlanet(res)
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet
                    state={this.state.randomPlanet}
                />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetail/>
                    </div>
                </div>
            </div>
        )
    }
}