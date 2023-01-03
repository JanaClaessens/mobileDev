class WordpressService {
    constructor(username, password) {
        this.username = username
        this.password = password
        this.token = null
    }

    async login(){
        // Krijgt een nieuwe JWT token
        console.log("logging in")

        let login = {
            username: this.username,
            password: this.password
        }

        let result = await fetch("https://janaclaessens.be/wp-json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        let json = await result.json()
        this.token = json.token
    }

    async getAllProducts() {
        console.log(this.username)
    }

    async getProductById(productId) {

    }
}

let service = new WordpressService("cms-app-user", "v#RjwT%nNB$(pvvADkRDVUE8")
export default service