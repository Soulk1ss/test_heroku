const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors())

app.get("/api", (req, res)=> {
    res.send("pass")
})

app.listen(PORT, () => {
  console.log(`server is run at port ${PORT}`);
});
