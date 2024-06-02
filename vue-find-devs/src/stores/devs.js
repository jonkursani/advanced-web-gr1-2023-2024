import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useDevsStore = defineStore('devs', () => {
    const devs = ref([
        {
            id: 1,
            firstName: 'Filan',
            lastName: 'Fisteku',
            bio: 'Hello I am Filan Fisteku Fullstack developer',
            areas: ['Frontend', 'Backend', 'Fullstack'],
            hourlyRate: 30
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            bio: 'Hello I am John Doe Frontend developer',
            areas: ['Frontend'],
            hourlyRate: 15
        },
        {
            id: 3,
            firstName: 'Jane',
            lastName: 'Doe',
            bio: 'Hello I am Jane Doe Backend developer',
            areas: ['Backend'],
            hourlyRate: 20
        },
    ]);

    // getters
    const allDevs = computed(() => {
        return devs.value;
    })

    return {allDevs}
})