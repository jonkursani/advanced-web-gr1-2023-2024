import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useResourceStore
    = defineStore('resource', () => {

    const resources = ref([]);
    const requestUrl = 'https://learning-resources-gr1-default-rtdb.firebaseio.com/resources.json';

    async function getAllResources() {
        // fetch(requestUrl)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch()

        const response = await fetch(requestUrl);
        const data = await response.json();

        resources.value = [];
        for (const key in data) {
            resources.value.push({
                fid: key,
                id: data[key].id,
                title: data[key].title,
                description: data[key].description,
                resourcePlace: data[key].resourcePlace,
                link: data[key].link,
            })
        }

        // console.log(resources.value)
    }

    async function addResource(resource) {
        const resourceToSave = {
            id: new Date().toISOString(),
            ...resource
        }
        await fetch(requestUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resourceToSave)
        });
    }

    function deleteResource(id) {
        resources.value = resources.value.filter(resource => resource.id !== id);
    }

    function updateResource(resource) {
        const resourceIndex = resources.value
            .findIndex(res => res.id === resource.id)

        resources.value[resourceIndex].title = resource.title;
        resources.value[resourceIndex].description = resource.description;
        resources.value[resourceIndex].resourcePlace = resource.resourcePlace;
        resources.value[resourceIndex].link = resource.link;
    }


    return {resources, addResource, deleteResource, updateResource, getAllResources}
})