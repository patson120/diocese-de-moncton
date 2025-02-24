import { BASE_URL } from "@/constants";
import { fetchAPI } from "@/_lib";


export async function fetchActualites() {
    try {
        let url = `${BASE_URL}/actualites`
        let body = {}
        const headers = {}

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 10000); // 10 seconds timeout
        },)
        return await fetchAPI(url, 'GET', headers, body);

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

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 10000); // 10 seconds timeout
        },)
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchEvents() {
    try {
        let url = `${BASE_URL}/proisses`;
        let body = {}
        const headers = {}

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 10000); // 10 seconds timeout
        },)
        return await fetchAPI(url, 'GET', headers, body);

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

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 10000); // 10 seconds timeout
        },)
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}