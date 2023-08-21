import mongoose from "mongoose";
const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
      await mongoose.connect("mongodb+srv://welldatabase:lihaz1212@cluster0.qva8alg.mongodb.net/portfolio?retryWrites=true&w=majority");
    
    } catch (error) {
      throw new Error("Connection failed!");
    }
  };
  
  export default connect;