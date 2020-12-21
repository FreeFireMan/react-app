export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    getUsers() {
        return fetch(this.url)
            .then(value => value.json())
    }

    getUserById(id) {
        return fetch(`${this.url}/${id}`)
            .then(value => {
                if(!value.ok){
                    throw new Error('User not found');
                }
               return  value.json()
            })
    }
}
// fetch(`https://api.github.com/repos/gudh/ihove/forks`)
//     .then(res => res.ok ? res : Promise.reject(res))
//     .then(data => console.log('+', data))
//     .catch(() => console.log('some error'));
