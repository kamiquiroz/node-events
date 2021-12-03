const books = [
    {
        id:1,
        title:'Cien años de soledad',
        author:1
    },
    {
        id:2,
        title:'El gato negro',
        author:3
    },
    {
        id:3,
        title:'20 poemas de amor',
        author:2
    }
];

const authors = [
    {
        id:1,
        name: "Gabriel Garcia Marquez"
    },
    {
        id:2,
        name: "Pablo Neruda"
    },
    {
        id:3,
        name: "Edgar allan poe"
    },
]

function getBookById(id, callback) {
    const book = books.find( b => b.id == id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found";
        return callback(error);
    }
    callback(null, book);
}

function getAuthorById(id, callback) {
    const author = authors.find(a => a.id == id);
    if (!author){
        const error = new Error();
        error.message = "Author not found";
        return callback(error);
    }
    callback(null, author);
}

getBookById(3, (err, b) =>{
    if (err) {
        return console.log(err.message);
    }
    
    getAuthorById(b.author, (err, a) =>{
        if(err) {
            return console.log(err.message);
        }
        return console.log(`This book ${b.title} was written by ${a.name}`);
    })
});

