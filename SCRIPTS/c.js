function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
  }
  Book.prototype.markAsRead = function () {
    this.isRead = true;
  };
  const library = [];

  function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
  }
  function displayLibrary() {
    for (const book of library) {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`Pages: ${book.pages}`);
      console.log(`Read: ${book.isRead ? 'true' : 'false'}`);
        console.log('-');
    }
  }
  addBook("We prefer html and css", "Jenny eze", 500);
  addBook("How time flies", "Ope yemi", 100);
  addBook("Best ways to code", "Sandra victor", 150);
  
  library[0].markAsRead(); 
  
  console.log("All books:");
  displayLibrary();
  
  let totalPages = 0;
  for (const book of library) {
    totalPages += book.pages;
  }
  console.log(`Total Pages in Library: ${totalPages}`);
  
  
  
  
  
  
  