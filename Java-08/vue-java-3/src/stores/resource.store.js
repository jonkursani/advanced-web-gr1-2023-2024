import {defineStore} from "pinia";
import {computed, ref} from "vue";
import client from "@/helpers/client.js";
import ResourceService from "@/services/resource.service.js";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import {db} from "@/helpers/firebase.js";


export const useResourceStore
    = defineStore('resource', () => {

    const resources = ref([]);
    const requestUrl = 'https://learning-resources-gr1-default-rtdb.firebaseio.com/resources.json';
    const error = ref('');
    const loading = ref(false);

    async function getResource(id) {
        try {
            loading.value = true;

            const docRef = doc(db, "resources", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (e) {

        } finally {
            loading.value = false
        }
    }


    async function getAllResources() {
        // fetch(requestUrl)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch()

        // fetch
        // const response = await fetch(requestUrl);
        // const data = await response.json();

        try {
            // axios
            // const response = await axios.get(requestUrl);
            // const data = await ResourceService.getAllResources();
            // console.log(data)

            // resources.value = [];
            // for (const key in data) {
            //     resources.value.push({
            //         fid: key,
            //         id: data[key].id,
            //         title: data[key].title,
            //         description: data[key].description,
            //         resourcePlace: data[key].resourcePlace,
            //         link: data[key].link,
            //     })
            // }

            loading.value = true;
            const querySnapshot = await getDocs(collection(db, "resources"));
            resources.value = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                resources.value.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    resourcePlace: doc.data().resourcePlace,
                    link: doc.data().link,
                })
            });


        } catch (e) {
            // console.log(e)
            error.value = '😒 Error fetching resources.';
        } finally {
            loading.value = false;
        }



        // console.log(resources.value)
    }

    async function addResource(resource) {
        const resourceToSave = {
            // id: new Date().toISOString(),
            ...resource
        }
        // await fetch(requestUrl, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(resourceToSave)
        // });

        // await axios.post(requestUrl, resourceToSave)
        // await client.post('resources.json', resourceToSave);
        await addDoc(collection(db, "resources"), resourceToSave);
    }

    async function deleteResource(id) {
        try {
            loading.value = true;
            await deleteDoc(doc(db, "resources", id));
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false;
            await getAllResources();
        }
    }

    async function updateResource(resource) {
        const resourceRef = doc(db, "resources", resource.id);
        await updateDoc(resourceRef, resource);
    }


    return {resources, addResource, deleteResource, updateResource, getAllResources, error, loading, getResource}
})