import { BASE_URL } from "@/constants";
import { fetchAPI } from "@/_lib";


export async function fetchActualites(params: string = "") {
    try {
        let url = `${BASE_URL}/actualites${params}`;        
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchParoisses(params: string = "") {
    try {
        let url = `${BASE_URL}/paroisses${params}`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchEvents(params: string = "") {
    try {
        let url = `${BASE_URL}/evenements${params}`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchArcheveques(params: string = "") {
    try {
        let url = `${BASE_URL}/archeveques${params}`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchMessages(params: string = "") {
    try {
        let url = `${BASE_URL}/mot_archeve${params}`;
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