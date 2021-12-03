const books = [
    {
        id:1,
        title:'Cien años de soledad',
        year:1967
    },
    {
        id:2,
        title:'El coronel no tiene quien le escriba',
        year:1961
    },
    {
        id:3,
        title:'los relatos de la mama grande',
        year:1962
    }
];

//setTimeout(funtion,time,args?)
// setTimeout(function(){
//     console.log("Hello World");
// },2000);

function getBookById(id, callback) {
    const book = books.find( b => b.id == id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found";
        return callback(error);
    }
    callback(null, book);
}

getBookById(23, (err, b) =>{
    if (err) {
        return console.log(err.message);
    }
    return console.log(b);
});

