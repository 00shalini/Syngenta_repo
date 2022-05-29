const express = require("express");
const foodDeliveryRoutes = require("./src/Food_Delivery/routes");
const app = express();
const port = 3000;

// get
app.use(express.json());
app.get("/", (req,res) => {
    res.send("hello");
});

app.use("/api/v1/fooddelivery" ,foodDeliveryRoutes);
app.listen(port,() =>console.log(`app listening to port ${port}`));