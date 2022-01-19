import React, {Component} from "react";
import Header from "../Header/Header";
import './App.css'
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetail from "../PersonDetail/PersonDetail";
import SwapiService from "../../Services/SwapiService";

export default class App extends Component {
    swapi = new SwapiService()
    state = {
        randomPlanet: {
            data: {},
            loading: true,
            isError: false
        },
        personList: {
            data: [],
            loading: true,
            isError: false
        },
        selectedItem: {
            data: {},
            loading: true,
            isError: false
        },
        selectedId: null
    }

    componentDidMount() {
        this.updateRandomPlanet()
        this.interval = setInterval(this.updateRandomPlanet, 30000)
        this.updatePersonList()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.selectedId !== this.state.selectedId) {
            this.updatePerson()
        }
    }

    onItemClick = (id) => {
        this.setState({
            selectedId: id
        })
        // this.updatePerson()
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

    updateRandomPlanet = () => {
        const randomId = Math.floor(Math.random() * 17) + 2
        this.swapi.getPlanet(randomId)
            .then(res => {this.onRandomPlanet(res)})
            .catch(this.onError)
    }

    updatePerson = () => {
        this.swapi.getPerson(this.state.selectedId).then(person => {
            this.setState({
                selectedItem: {
                    data: person,
                    loading: false,
                    isError: false
                }
            })
        })
    }

    updatePersonList() {
        this.swapi.getAllPeople().then(persons => {
            this.setState({
                personList: {
                    data: persons,
                    loading: false,
                    isError: false
            }
            })
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
                            state={this.state.personList.data}
                            loading={this.state.personList.loading}
                            onPersonClick={this.onItemClick}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetail
                            selectedItem={this.state.selectedItem.data}
                            selectedId={this.state.selectedId}
                        />
                    </div>
                </div>
            </div>
        )
    }
}