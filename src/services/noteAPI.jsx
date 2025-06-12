import axios from 'axios'

const API_URL = "https://yrclijpkvgsukyyqqqbo.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyY2xpanBrdmdzdWt5eXFxcWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODY5MjksImV4cCI6MjA2NTI2MjkyOX0.sKeruVEWmNS4hS1gX119sP4e1tW4mac0_8-tpTNMamI"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },

    async updateNote(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
        return response.data
    }


    // async updateNote(id, updatedData) {
    //     const response = await axios.patch(
    //         ${API_URL}?id=eq.${id},
    //         updatedData,
    //         { headers }
    //     );
    //     return response.data;
    // }        
};