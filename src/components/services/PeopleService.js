export default class PeopleService {

url = 'https://swapi.dev/api/people';

     getAllPeople(){
         return fetch(this.url)
            .then(value => value.json())

    }

    async getPlanetById(id) {
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }

}