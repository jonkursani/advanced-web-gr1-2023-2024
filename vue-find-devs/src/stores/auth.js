import {defineStore} from "pinia";
import client from "@/helpers/client.js";
import {computed, ref} from "vue";
import {jwtDecode} from "jwt-decode";


export const useAuthStore = defineStore('auth', () => {

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts'
    const apiKey = 'AIzaSyA0_AX5dY1fMwYcUjFYhl_wpaA79boeOVY';
    const token = ref(localStorage.getItem('token') || null)

    async function logIn(user) {
        const response = await client.post(`${url}:signInWithPassword?key=${apiKey}`, user)

        // console.log(response)
        if (response.data) {
            localStorage.setItem('token', response.data.idToken)
            token.value = response.data.idToken;
        }

        // console.log(response)
    }

    async function signUp(user) {
        const response = await client.post(`${url}:signUp?key=${apiKey}`, user)
        // console.log(response)
    }

    function logOut() {
        if (isLoggedIn.value) {
            localStorage.removeItem('token');
            token.value = null;
            // await client.post(`${url}:signUp?key=${apiKey}`, user)
        }
    }

    // getters
    const loggedInUser = computed(() => {
        // nese ka token dekodoje
        return token.value ? jwtDecode(token.value) : null;
    })

    const isLoggedIn = computed(() => {
        return !!token.value;
    })

    return {logIn, signUp, loggedInUser, logOut, isLoggedIn}
})