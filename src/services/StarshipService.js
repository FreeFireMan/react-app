export default class StarshipService {

    url = 'https://swapi.dev/api/starships';

    async getStarships() {
        return await fetch(this.url)
            .then(value => value.json())
            .then(value => value.results)
    }

    async getStarshipById(id) {
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value);
    }
}