const express = require ('express')
const router = express.Router()

router.post('/userlist',(req,res)=>{
 
    try {
       
        res.send([global.userlist])
        
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})

module.exports = router;
