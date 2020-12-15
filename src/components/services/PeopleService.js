export default class PeopleService {

url = '';

     getAllPeople(){
         return fetch(this.url)
            .then(value => value.json())
    }

}