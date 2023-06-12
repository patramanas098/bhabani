const mongoose = require ('mongoose');
const mongoURI = "mongodb+srv://patramanas098:$1m1Padhan@cluster0.9mr9ya0.mongodb.net/localservice?retryWrites=true&w=majority"
const mongoDB = async ()=>{ 
     await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
          if (err) console.log("---",err)
     else {
          console.log("connected");
         
          const userlist = await mongoose.connection.db.collection("registers").find({}).toArray();

          global.userlist = userlist;
          
                        
}
});}
module.exports = mongoDB;