import {defineStore} from "pinia";
import {ref} from "vue";

export const useResourceStore
    = defineStore('resource', () => {

    const resources = ref([]);

    function addResource(resource) {
        resources.value.unshift({
            id: new Date().toISOString(),
            ...resource
        })
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

    return { resources, addResource, deleteResource, updateResource }
})