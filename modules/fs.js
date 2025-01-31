// const fs = require("fs");
// const path = require("path");

// // mkdir
// // fs.mkdir(path.join(__dirname, "templates"), (err) => {
// //   if (err) throw new Error();

// //   console.log("Folder was created successfully");
// // });

// // fs.mkdir(path.join(__dirname, "notes"), (err) => {
// //   if (err) throw new Error();
// // });

// // writeFile
// fs.writeFile(
//   path.join(__dirname, "notes", "february.txt"),
//   "Create new course NodeJS",
//   (err) => {
//     if (err) throw new Error();
//   }
// );

// // appendFile
// fs.appendFile(
//   path.join(__dirname, "notes", "february.txt"),
//   " and microservice project",
//   (err) => {
//     console.log(err);
//     if (err) throw new Error();
//     console.log(`Success`);
//   }
// );

// // readFIle
// fs.readFile(path.join(__dirname, "notes", "february.txt"), (err, data) => {
//   if (err) throw new Error();
//   console.log(Buffer.from(data).toString());
// });
