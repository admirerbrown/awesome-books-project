let collections = [
    {
        title: 'book1',
        author: 'John',
    },
    {
        title: 'book2',
        author: 'pope',
    }
];

const bookPlate = {
    title: 'paul in jail',
    author: 'timothy',
}

// add book.
function addBook(title, author) {
    const book = Object.create(bookPlate);
    book.title = title;
    book.author = author;
    collections.push(book);
}

console.log(collections);

// add a new book to the store
addBook('new moon', 'dracula');
console.log( "book added is ", collections);
console.log("book has been deleted", collections);

// remove book.
function removeBook( yourTitle) {
    const titleToRemove = yourTitle;
    const filteredbooks = collections.filter((item) => item.title !== titleToRemove);
    collections = filteredbooks;
}


// store b
localStorage.setItem('wholeBookList', JSON.stringify(collections));
const getBookList = localStorage.getItem('wholeBookList');
const finallist = JSON.parse(getBookList);

console.log( "hey i am finalList:", finallist);

