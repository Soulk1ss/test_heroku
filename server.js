const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())
const server = require('http').createServer(app);

app.get("/api", (req, res)=> {
    res.send("pass")
})

server.listen(PORT, () => {
  console.log(`server is run at port ${PORT}`);
});
