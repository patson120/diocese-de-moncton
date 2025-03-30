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
        throw new Error('Failed to fetch actualites data.');
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
        throw new Error('Failed to fetch paroisses data.');
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
        throw new Error('Failed to fetch evenements data.');
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
        throw new Error('Failed to fetch archeveques data.');
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
        throw new Error('Failed to fetch mot_archeve data.');
    }
}

export async function fetchMouvements(params: string = "") {
    try {
        let url = `${BASE_URL}/mouvements${params}`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch mouvements data.');
    }
}


export async function fetchCategories(params: string = "") {
    try {
        let url = `${BASE_URL}/categories${params}`;
        let body = {}
        const headers = {}
        return await fetchAPI(url, 'GET', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch categories data.');
    }
}

export async function createDon(body: any) {
    try {
        let url = `${BASE_URL}/don`;
        const headers = {}
        return await fetchAPI(url, 'POST', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to create don data.');
    }
}

export async function subscribeToNewsletter(body: any) {
    try {
        let url = `${BASE_URL}/newsletter_emails`;
        const headers = {}
        return await fetchAPI(url, 'POST', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to subscribe');
    }
}

export async function sendMessage(body: any) {
    try {
        let url = `${BASE_URL}/messages_contact`;
        const headers = {}
        return await fetchAPI(url, 'POST', headers, body);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to send message');  
    }
}