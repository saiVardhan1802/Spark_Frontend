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

// Function to get user data
export const getUser = async (userId, token) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

// Function to update user data
export const updateUser = async (userId, token, updates) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(updates)
        });
        if (!response.ok) {
            throw new Error("Failed to update user data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


// http://localhost:3000/api/auth/login

/* 
    {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzMzNjdiYjUyYjc2ZTEzYWQ1MDkyOCIsImlhdCI6MTc0MDg0OTI0NX0.qagZTkAiFubgUWMgjtnrJnbG76UoYdOBpm-eiSyl73k","message":"Login successful"}

*/