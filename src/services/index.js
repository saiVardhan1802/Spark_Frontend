export const API_URL = import.meta.env.VITE_API_URL;

export async function signUp({ data }) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function login({ data }) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

// http://localhost:3000/api/auth/login

/* 
    {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzMzNjdiYjUyYjc2ZTEzYWQ1MDkyOCIsImlhdCI6MTc0MDg0OTI0NX0.qagZTkAiFubgUWMgjtnrJnbG76UoYdOBpm-eiSyl73k","message":"Login successful"}

*/