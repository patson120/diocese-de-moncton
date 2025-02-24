import { BASE_URL } from "@/constants";
import { fetchAPI } from "@/_lib";


export async function fetchActualites() {
    try {
        let url = `${BASE_URL}/actualites`
        let body = {}
        const headers = {}

        // await new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(true), 1000); // 4 seconds timeout
        // },)
        setTimeout( async () => {
            return await fetchAPI(url, 'GET', headers, body);
        }, 5000);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchParoisses() {
    try {
        let url = `${BASE_URL}/proisses`
        let body = {}
        const headers = {}

        // await new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(true), 1000); // 5 seconds timeout
        // },)
        setTimeout( async () => {
            return await fetchAPI(url, 'GET', headers, body);
        }, 5000);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchEvents() {
    try {
        let url = `${BASE_URL}/evenements`;
        let body = {}
        const headers = {}

        // await new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(true), 3000); // 3 seconds timeout
        // },)
        setTimeout( async () => {
            return await fetchAPI(url, 'GET', headers, body);
        }, 5000);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchArcheveques() {
    try {
        let url = `${BASE_URL}/archeveques`;
        let body = {}
        const headers = {}

        // await new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(true), 1000); // 1 seconds timeout
        // },)
        setTimeout( async () => {
            return await fetchAPI(url, 'GET', headers, body);
        }, 5000);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}