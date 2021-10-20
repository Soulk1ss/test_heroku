const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res)=> {
    res.send("pass")
})

app.listen(PORT, () => {
  console.log(`server is run at port ${PORT}`);
});
