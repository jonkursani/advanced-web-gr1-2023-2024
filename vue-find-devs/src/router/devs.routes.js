import DevsList from "@/views/devs/DevsListView.vue";
import DevDetails from "@/views/devs/DevDetailsView.vue";
import ContactDev from "@/views/requests/ContactDevView.vue";

export default [
    {
        path: '/devs',
        name: 'devs',
        component: DevsList,
        meta: {requiresAuth: true}
    },
    {
        path: '/devs/:id',
        name: 'dev-details',
        component: DevDetails,
        meta: {requiresAuth: true},
        children: [
            {
                path: 'contact',
                name: 'contact-dev',
                component: ContactDev,
            }
        ]
    }
]