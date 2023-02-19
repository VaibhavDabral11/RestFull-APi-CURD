import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import express from 'express';
import mysql from 'mysql'
import { json } from 'stream/consumers'
var app = express()
app.use(express.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'password',
    database: 'Article'
})

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("The databased is conneected to this website. The wesite is live on localhost . This app have for operation of restfull  api like create, delete , update  and read . This app also have other feature like (create , createall , update , updateall , read one ,read all , delete one , deleteall ).");
        console.log("");
    }
})
app.get("/api1", (req, res) => {
    res.json({
        success: 1,
        message: "This is rest apis working"
    });
});
//1. read == get(Api: 1)
app.get("/readall", async(req, res) => {
    const users = await prisma.Article1_Table.findMany();
    res.json(users);
    console.log(users);

});
//2. create == post(Api: 2)(Manually)
app.get("/create", async(req, res) => {
    const many = await prisma.Article1_Table.createMany({
        data: [{
            id: 1,
            Title: "Coding Habits",
            Author: " Robon Gupta",
            Content: "Article based on coding habits",
            Rating: 8
        }, {
            id: 2,
            Title: "Bug",
            Author: "Manav Gupta",
            Content: "Article based on type of bugs",
            Rating: 9
        }],
    });
    res.json(many);
    console.log(many);
});
//2. create == post(Api: 2)(input using postman)
app.post("/inputcreate", async(req, res) => {   // async function by using await (do not distub other functions ) which return promice
    console.log({ "Received Data from Client": req.body })
    const { id, Title, Author, Content, Rating } = req.body; //requset to acquire the data from the "/inputcreate" end point
    const result = await prisma.Article1_Table.createMany({  
        data: {
            id,
            Title,
            Author,
            Content,
            Rating,
        },
    });
    res.json(result);
    console.log(result);
});
//3. update == put(Api: 3)
app.put("/updaterecord", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { id, Title, Author, Content, Rating } = req.body;
    const up = await prisma.Article1_Table.update({
        where: {
            id
        },
        data: {
            Title,
            Author,
            Content,
            Rating,
        },
    });
    res.json(up);
    console.log(up);
});
//4. update == patch(Api: 4)
app.patch("/updaterecord1", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { id, Title, Author, Content, Rating } = req.body;
    const up = await prisma.Article1_Table.update({
        where: {
            id
        },
        data: {
            Title,
            Author,
            Content,
            Rating,
        },
    });
    res.json(up);
    console.log(up);
});
//5. Delete == delete(Api: 5)
app.delete("/deleterecord", async(req, res) => {
    console.log({ "Received Data from Client": req.body })
    const { id } = req.body;
    const delet = await prisma.Article1_Table.delete({ 
        where: {
            id,
        },
    });
    res.json(delet);
    console.log(delet);
});
//6. Deleteall == delete(Api: 6)
app.get("/deleteall", async(req, res) => {
    const users = await prisma.Article1_Table.deleteMany();
    res.json(users)
    console.log(users);
});

app.listen(3000, () => {
    console.log("th eserver is live in the backend .");
});