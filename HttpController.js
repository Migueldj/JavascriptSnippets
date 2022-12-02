import axios from 'axios';

export class HttpRequest {
    async post(url, json, config) {
        const response = await axios.post(url, json, config)
        return response
    }

    async put(url, json, config) {
        const response = await axios.post(url, json, config)
        return response
    }

    async get(url, params) {
        const response = await axios.get(url)
        return response
    }

    async delete(url, data){
        const response = await axios.delete(url, data)
        return response
    }
}
