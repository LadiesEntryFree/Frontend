import $api from "../http";

export default class ObjectService {
    static async getObjects(amount, page) {
        const response = await $api.get('/registry/objects/', {
            params: {
                pageNumber: page,
                pageSize: amount
            }
        })
        return response.data
    }

    static async getObjectsByFilter(filter) {
        const response = await $api.post('/registry/objects-by-filter/', {filter})
        return response.data
    }

    static async createObject(object) {
        const response = await $api.post('/api/v1/objects/new', {object})
        return response.data
    }

    static async uploadFiles(file) {
        const formData = new FormData()
        formData.append('file', file)
        console.log(formData)
        const response = await $api.post('/api/v1/files/upload', formData)
        return response
    }
}