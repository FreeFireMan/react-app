export default class PlanetService {
    url = 'https://swapi.dev/api/planets'

   getAllPlanets() {
        return fetch(this.url)
            .then(value => value.json())
    }

    getPlanetById(id) {
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }
}