const express = require("express");

const routerCategories = require("./router/categories");

const app = express();

app.use(express.json());

//htt://localhost:4004/categories + GET
//htt://localhost:4004/categories/1 + GET
//htt://localhost:4004/categories + POST + 
app.use("/categories", routerCategories);

app.listen(4004);

