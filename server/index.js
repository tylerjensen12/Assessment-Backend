const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, getRubiks, deleteRubiks, updateRubiks} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get('/api/rubiks', getRubiks)
app.delete('/api/rubiks/:id', deleteRubiks)
app.put('/api/rubiks/:id', updateRubiks)

app.listen(4000, () => console.log("Server running on 4000"));
