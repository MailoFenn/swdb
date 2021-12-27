export default class SwapiService {
    _baseUrl = 'https://swapi.dev/api'

    getResponse = async (url) => {
        const result = await fetch(url)
        return await result.json()
    }

    getAllPlanets = async () => {
        const res = await this.getResponse(`${this._baseUrl}/planets/`)
        return res.results.map(this._transformPlanet)
    }

    getPlanet = async (id) => {
        const planet = await this.getResponse(`${this._baseUrl}/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllPeople = async () => {
        const res = await this.getResponse(`${this._baseUrl}/people/`)
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const res = await this.getResponse(`${this._baseUrl}/people/${id}`)
        return this._transformPerson(res)
    }

    // getAllStarships = async () => {
    //     const url = `${this._baseUrl}/starships/`
    //     return await this._transformPlanet(this.getResponse(url))
    // }
    //
    // getStarship = async (id) => {
    //     const url = `${this._baseUrl}/starships/${id}/`
    //     return await this.getResponse(url)
    // }

    _transformPlanet(planet) {
        return {
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson(person) {
        return {
            name: person.name
        }
    }
}