import axios from "axios";

const url = "http://localhost:5000/api/users/"

class postUsers {
    static getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    resolve(response.data)
                })
                .catch(error => reject(error));
        });
    }
}

export default postUsers; 