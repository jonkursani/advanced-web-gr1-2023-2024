import client from "@/helpers/client.js";

class ResourceService {
    async getAllResources() {
        // console.log('here')
        const response = await client.get('resources.json');
        // console.log(response)
        return response.data;
    }
}

export default new ResourceService();