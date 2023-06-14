const mongoose = require ('mongoose');

const mongoURI = process.env.DATABASE
const mongoDB = async ()=>{ 
     await mongoose.connect(mongoURI,{useUnifiedTopology:true,useNewUrlParser:true},async(err,result)=>{
          if (err) console.log("---",err)
     else {
          console.log("connected");
         
          const userlist = await mongoose.connection.db.collection("registers").find({}).toArray();

          global.userlist = userlist;
          
                        
}
});}
module.exports = mongoDB;