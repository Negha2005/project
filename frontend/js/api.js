const API_URL = 'http://localhost:5000/api';

class API {
    static async login(email, password) {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            if (!response.ok) throw new Error(data.error);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async searchServices(service, location) {
        try {
            const response = await fetch(
                `${API_URL}/services/search?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`
            );
            const data = await response.json();
            if (!response.ok) throw new Error(data.error);
            return data;
        } catch (error) {
            throw error;
        }
    }
}