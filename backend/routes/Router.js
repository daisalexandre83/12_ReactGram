const express = require("express");
const router = express();

router.use("/api/users",require("./UserRouter"));
router.use("/api/photos",require("./PhotoRouter"));

//teste route
router.get("/",(req,res) =>{
    res.send("API Working!")
});


module.exports = router;