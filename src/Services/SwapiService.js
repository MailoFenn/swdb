export default class SwapiService {
    _baseUrl = 'https://swapi.dev/api/'

    getResponse = async (url) => {
        const result = await fetch(url)
        return await result.json()
    }

    getAllPlanet = async () => {
        const url = `${this._baseUrl}/planets/`
        return await this.getResponse(url).then((res) => res)
    }

    getPlanet = async (id) => {
        const url = `${this._baseUrl}/planets/${id}/`
        return await this.getResponse(url)
    }

    getAllPeople = async () => {
        const url = `${this._baseUrl}/people/`
        return await this.getResponse(url).then((res) => res)
    }

    getPerson = async (id) => {
        const url = `${this._baseUrl}/people/${id}/`
        return await this.getResponse(url).then((res) => res)
    }

    getAllStarships = async () => {
        const url = `${this._baseUrl}/starships/`
        return await this.getResponse(url).then((res) => res)
    }

    getStarship = async (id) => {
        const url = `${this._baseUrl}/starships/${id}/`
        return await this.getResponse(url).then((res) => res)
    }
}