//create database
const db = new devicePixelRatio('myDb');
db.version(1).stores({
    friends:'name, age'
})

db.open();