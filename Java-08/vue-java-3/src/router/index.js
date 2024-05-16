import { createRouter, createWebHistory } from 'vue-router'
import LearningResources from "@/components/learning-resources/LearningResources.vue";
import AddLearningResource from "@/components/learning-resources/AddLearningResource.vue";
import UpdateLearningResource from "@/components/learning-resources/UpdateLearningResource.vue";


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
    {
        path: '/update/:id',
        name: 'update-resource',
        component: UpdateLearningResource
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;