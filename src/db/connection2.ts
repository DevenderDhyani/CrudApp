import mongoose from 'mongoose';

async function mongoDb() {
    try {
        await mongoose.connect("mongodb+srv://devenderdhyani:Witz%402024@cluster0.gfpsm.mongodb.net/prisma?retryWrites=true&w=majority");
        console.log("Connected2 to MongoDB");

    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}
mongoDb();
export default mongoose
