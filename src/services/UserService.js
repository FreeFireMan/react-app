export class UserService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    getUsers() {
        return fetch(this.url)
            .then(value => value.json())
    }

    getUserById(id) {
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }
}