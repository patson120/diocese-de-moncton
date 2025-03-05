import { BASE_URL } from "@/constants";
import { fetchAPI } from "@/_lib";


export async function fetchActualites() {
    try {
        let url = `${BASE_URL}/actualites`
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchParoisses() {
    try {
        let url = `${BASE_URL}/paroisses`
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

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
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchMessages() {
    try {
        let url = `${BASE_URL}/archeveques`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchMouvements() {
    try {
        let url = `${BASE_URL}/mouvements`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}