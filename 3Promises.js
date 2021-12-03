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

function getBookById(id) {
    return new Promise ((resolve, reject) => {
        const book = books.find( b => b.id == id);
        if (!book) {
            const error = new Error();
            error.message = "Book not found";
            reject(error);
        }
        resolve(book);
    });
}

function getAuthorById(id) {
    return new Promise ((resolve, reject) => {
        const author = authors.find(a => a.id == id);
        if (!author){
            const error = new Error();
            error.message = "Author not found";
            reject(error);
        }
        resolve(author);
    });
}

getBookById(3)
.then((book) => {
    return getAuthorById(book.author); 
})
.then( (author) => {
    console.log(author);
})
.catch((err) => {
    console.log(err);
});

// getBookById(1)
// .then( book => function () {
//         console.log(book);
//         return getAuthorById(book.author);
//     }
// )
// .then(
//     author => function (){
//         console.log(author);
//     }
// )
// .catch(err => {
//     console.log(err);
// });


