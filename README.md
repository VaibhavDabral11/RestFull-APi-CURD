# RESTFULL API
A RESTful API is a type of web service that follows the principles of Representational State Transfer (REST) architecture. It allows clients to communicate with a server through standard HTTP requests and responses using a uniform interface.

The key characteristics of a RESTful API are:

1. Resource-based: Each entity that the API manages is considered a resource, and each resource should have a unique identifier (URI). The API should allow clients to perform CRUD (Create, Read, Update, Delete) operations on these resources.

2. Client-server architecture: The client and server are independent of each other, and they communicate through standard HTTP methods and status codes.

3. Stateless: Each request from the client to the server should contain all the necessary information to complete the request. The server should not store any client context between requests.

4. Cacheable: Responses from the server can be cached to improve performance.

5. Layered system: The API can be deployed on multiple layers (such as load balancers, caches, and gateways) to improve scalability and performance.

6. Uniform interface: The API should use a consistent and standardized set of methods and status codes for communicating with clients. Typically, these methods are GET, POST, PUT, DELETE, and PATCH.

Designing a RESTful API involves defining the resources, their URIs, and the methods that clients can use to interact with them. The API should also define the expected request and response formats, including any required parameters or headers.
Documentation and testing are essential components of building a RESTful API. Clients need to understand how to interact with the API and how to handle errors or unexpected responses.

Overall, a well-designed RESTful API can provide a scalable, reliable, and flexible way to expose data and functionality to clients.

## Article(nodejs-project)

This project is based on RESTfull Api .A RESTful API (Representational State Transfer API) is a type of API that uses HTTP requests to GET, PUT, POST, and DELETE data. A RESTful API is created by defining the endpoints (or routes), which are the URLs that handle the incoming HTTP requests.

A RESTful API uses the following operations to retrieve and manipulate data:

1) GET: Used to retrieve data from the API.

``` @ruby 
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
```

2) POST: Used to send data to the API to be processed and stored.

```@ruby 
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
```
3) PUT: Used to update existing data in the API.
```@ruby 
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
```

4) PATCH: Partially updates the resource.

```@ruby 
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
```
5) DELETE: Used to delete data from the API.

```@ruby
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
```
These operations are performed by sending HTTP requests to the API's endpoints. The endpoints return a response in the form of a JSON or XML data, which can be processed by the client.A RESTful API is a type of API that allows the client to interact with the server through well-defined endpoints that handle the incoming HTTP requests, and the server returns a response in the form of a JSON or XML data. 

## put vs patch 
![image](https://user-images.githubusercontent.com/116658648/218280799-3fc11ca1-30ab-4468-8de4-caa1081fe73a.png)

## Dependencies for this project.

### To create this project install these dependencies in your system by following these commands given bellow :-
1. Install node using given bellow command in terminal.
```ruby
   $ sudo apt install nodejs
```

2. Use this command to inslize node in terminal using given bellow command in terminal.
```ruby 
   $ npm init 
```

3. Install prisma using given bellow command in terminal.
```ruby 
   $ npm install prisma --save-dev
```

4. Install PrismaClient using given bellow command in terminal.
```ruby 
   $ npm install @prisma/client
```

5. Install mysql using given bellow command in terminal .
```ruby 
   $ npm install mysql
```

6. Install squlite using given bellow command in terminal .
```ruby 
   $ npx prisma init --datasource-provider sqlite
```

7. Install typescript using given bellow command in terminal .
```ruby 
   $ npm init -y
   $ npm install typescript ts-node @types/node --save-dev
 ```
 8. Create tsconfig using given bellow command in terminal .
 ```ruby
    $ tsc --init
 ```
 
 9. Install mysql workbench follow given link .
 ```ruby
    https://www.mysql.com/products/workbench/
 ```
 
 10. For installing mysql in linux , follow this docs .
 ```ruby
    https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-linux-quick.html
 ```

## Some basic details of this project are given bellow :-
 This project  is based on RESTfull Api . Project contain basic 5 Apis. you have five option in this project given bellow .
1. Create a article by addding id, Title, Author , Content , Rating in the  article record like this given bellow . add this in the       postman using this api http://localhost:3000/inputcreate  like this .....
 
 ![image](https://user-images.githubusercontent.com/116658648/205229977-b709b124-a885-4ed7-87d0-fb7f2de32595.png)

2 . To see all the record in the article database use this api http://localhost:3000/readall like this given bellow 

 ![image](https://user-images.githubusercontent.com/116658648/205230418-f67a2e64-4ea3-46c4-a86a-10a0d58eb208.png)

3.  To update record and also tis api add new record and delete the given record use (using put api) this api                http://localhost:3000/updaterecord like this given bellow :-
 ![image](https://user-images.githubusercontent.com/116658648/205230972-2a2ff931-cb32-4033-818b-a8329783de24.png)

4.  To update detail in records use this api http://localhost:3000/updaterecord1 like this given bellow :- 
 ![image](https://user-images.githubusercontent.com/116658648/205231664-9e622839-c545-489c-9ddd-5be79eae3e55.png)
 
5.  TO delete record using id by this api http://localhost:3000/deleterecord given bellow :- 
 ![image](https://user-images.githubusercontent.com/116658648/205232277-18c97934-257c-4f52-bdc0-7f56350446c4.png)
 
6.  To delete all records of article database use this api http://localhost:3000/deleteall like this :- 
 ![image](https://user-images.githubusercontent.com/116658648/205233174-46e8a2fe-2a07-4d30-8557-2de25e698da2.png)
 
 # MIT License
 
 MIT License

Copyright (c) [2023] [Vaibhav Dabral]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 
 
For more details explore this  [docs]( https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm ) 
