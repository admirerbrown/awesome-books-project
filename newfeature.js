const Title = document.querySelector('.title');
const author = document.querySelector('.author');
const registeredBooks = document.querySelector('.book-list');
const addButton = document.querySelector('.addbook');

let Books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBooks() {
    registeredBooks.innerHTML = '';
    for (let i = 0; i < Books.length; i += 1) {
      registeredBooks.innerHTML += `
      <div class="title-and-author"> 
        <p class="Title">"${Books[i].title}" by  ${Books[i].author}</p>
        <button class="button" onclick="Book.remove(${i})">remove</button>
      </div>

     `;
      Title.value = '';
      author.value = '';
      Title.focus();
    }
  }
  // remove

  static remove(index) {
    Books.splice(index, 1);
    Book.addBooks();
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}

window.onload = () => {
  if (localStorage.getItem('Books')) {
    Books = JSON.parse(localStorage.getItem('Books'));
  }
  Book.addBooks();
};

// add

addButton.addEventListener('click', () => {
  const book = new Book(Title.value, author.value);
  Books.push(book);
  Book.addBooks();
  localStorage.setItem('Books', JSON.stringify(Books));
});
