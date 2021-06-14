use(bios);

// Exercise 01
db.bios.find({ _id: 8 });

// Exercise 02
db.bios.find({ _id: 8 }, { name: 1 });

// Exercise 03
db.bios.find({ _id: 8 }, { name: 1, birth: 1 });

// Exercise 04
db.bios.find({ "name.first": "John" }, { name: 1, birth: 1 }).pretty();

// Exercise 05
db.bios.find({}).limit(3).pretty();

// Exercise 06
db.bios.find({}).skip(5).limit(2);

use (users);

// Exercise 07
db.books.countDocuments();

// Exercise 08
db.books.find({ status: "PUBLISH" });

// Exercise 09
db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3);

// Exercise 10
db.books.find({ status: "MEAP" }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10);
