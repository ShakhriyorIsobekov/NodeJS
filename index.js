const http = require("http");
const server = http.createServer((request, response) => {
  // request = serverga so'rov
  // response = javob
  console.log(request.url);
  response.write("<h1>Hello Shakhriyor Hafizul Qur'an</h1> ");
  response.end();
});

server.listen(3000, () => {
  console.log("Server has been started on port 3000");
});
