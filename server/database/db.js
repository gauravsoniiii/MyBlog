import mongoose from "mongoose"




export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-db.sagma.mongodb.net/?retryWrites=true&w=majority&appName=blog-db`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
        
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

export default Connection;