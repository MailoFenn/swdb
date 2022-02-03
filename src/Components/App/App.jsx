import React, {Component} from "react";
import Header from "../Header/Header";
import './App.css'
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetail from "../PersonDetail/PersonDetail";
import SwapiService from "../../Services/SwapiService";
import Row from "../Row/Row";

export default class App extends Component {
    swapi = new SwapiService()
    state = {
        randomPlanet: {
            data: {},
            loading: true,
            isError: false
        },
        itemList: {
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
        this.updateItemList(this.swapi.getAllPeople)
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

    updateItemList(getData) {
        this.setState({
            itemList: {
                loading: true
            }
        })
        getData().then(planet => {
            this.setState({
                itemList: {
                    data: planet,
                    loading: false,
                    isError: false
                }
            })
        })
    }

    render() {
        const itemList = <ItemList
                            state={this.state.itemList.data}
                            loading={this.state.itemList.loading}
                            onPersonClick={this.onItemClick}
                        />

        const personDetails = <PersonDetail
                            selectedItem={this.state.selectedItem.data}
                            selectedId={this.state.selectedId}
                        />
        return (
            <div>
                <Header
                    getAllPlanet={() => {
                        this.updateItemList(this.swapi.getAllPlanets)
                    }}
                    getAllPerson={() => {
                        this.updateItemList(this.swapi.getAllPeople)
                    }}
                    getAllStarship={() => {
                        this.updateItemList(this.swapi.getAllStarships)
                    }}
                />
                <RandomPlanet
                    state={this.state.randomPlanet.data}
                    loading={this.state.randomPlanet.loading}
                    isError={this.state.randomPlanet.isError}
                />
                <Row left={itemList} right={personDetails}/>
            </div>
        )
    }
}