export default class SwapiService {
    _baseUrl = 'https://swapi.dev/api'

    getResponse = async (url) => {
        const result = await fetch(url)
        if (!result.ok) {
            throw new Error(`could not fetch ${url}, received ${result.status}`)
        }
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

    getAllStarships = async () => {
        const res = await this.getResponse(`${this._baseUrl}/starships/`)
        return res.results.map(this._transformStarship)
    }

    getStarship = async (id) => {
        const url = `${this._baseUrl}/starships/${id}/`
        return await this.getResponse(url)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        const id = item.url.match(idRegExp)[1]
        return id
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name
        }
    }
}