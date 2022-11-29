const addBook = document.querySelector(".add-btn");
const formVal = document.querySelectorAll("form input");
let collections = [];
const bookshelf = document.querySelector(".bookshelf");

function showBooks(title, author, counter) {
     const div = document.createElement('div');
     div.id = counter;
     
  div.innerHTML = `
            <p>${title}</p>
            <p>${author}</p>
            <button class="remove ${counter}">Remove</button>
            <hr>`;
            bookshelf.appendChild(div);

  const takeout = document.querySelectorAll(".remove");
  takeout.forEach((item) => {
    item.addEventListener("click", (item) =>{
        // console.log(item)
        const bookList = document.querySelectorAll('.div');
        div.parentNode.removeChild(div);
        localStorage.setItem('books', JSON.stringify(collections));
    })
  })
}

let counter = 0;
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  counter += 1;
  const titleVal = formVal[0].value;
  const authorVal = formVal[1].value;
  collections.push({ titleVal, authorVal, counter});
  console.log("i am ", collections);

  // store bookdata
  localStorage.setItem("books", JSON.stringify(collections));
  showBooks(titleVal, authorVal, counter);
});

if (localStorage.getItem('books')){
    bookList = JSON.parse(localStorage.getItem('books'));
   console.log(bookList);
}
