import React, {Component} from "react";
import Header from "../Header/Header";
import './App.css'
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetail from "../PersonDetail/PersonDetail";
import SwapiService from "../../Services/SwapiService";

export default class App extends Component {
    swapi = new SwapiService()
    randomId = Math.floor(Math.random() * 17) + 2
    state = {
        randomPlanet: {
            data: {},
            loading: true,
            isError: false
        },
        personList: [],
    }

    constructor() {
        super();
        this.updateRandomPlanet()
        this.updatePersonList()
    }

    onRandomPlanet(randomPlanet) {
        this.setState({
            randomPlanet: {
                data: randomPlanet,
                loading: false,
                isError: false
            }
        })
    }

    onError() {
        this.setState({
            randomPlanet: {
                data: {},
                loading: false,
                isError: true
            }
        })
    }

    updateRandomPlanet() {
        this.swapi.getPlanet(this.randomId)
            .then(res => {this.onRandomPlanet(res)})
            .catch(err => {this.onError()})
    }

    updatePersonList() {
        this.swapi.getAllPeople().then(person => {
            let personList = [...person]
            this.setState({personList})
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet
                    state={this.state.randomPlanet.data}
                    loading={this.state.randomPlanet.loading}
                    isError={this.state.randomPlanet.isError}
                />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            state={this.state.personList}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetail/>
                    </div>
                </div>
            </div>
        )
    }
}