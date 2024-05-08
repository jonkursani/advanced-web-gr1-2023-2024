import { createRouter, createWebHistory } from 'vue-router'
import LearningResources from "@/components/learning-resources/LearningResources.vue";
import AddLearningResource from "@/components/learning-resources/AddLearningResource.vue";


const routes = [
    {
        path: '/',
        name: 'resources',
        component: LearningResources
    },
    {
        path: '/add',
        name: 'add-resource',
        component: AddLearningResource
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;