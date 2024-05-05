let bookArray = [];

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo = () => {
        console.log(`Here is the book title: ${this.title}`);
        console.log(`Here is the books author: ${this.author}`);
        console.log(`Here are the amount of pages: ${this.pages}`);
    }
    
}

let book1 = new Book('Book Title','Book Author',200);


book1.displayInfo();

function addBook(title, author, pages){
    let newBook = new Book(title, author, pages);
    bookArray.push(newBook);
}

addBook('New Title','New Author1',99);
addBook('Newer Title','New Author2',200);
addBook('Newest Title','New Author3',300);
console.log(bookArray);

function searchTitle(title) {
    let findBook = bookArray.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    console.log(findBook);
}

function searchAuthor(author) {
    let findBook = bookArray.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    console.log(findBook);
}

function filterPages(bookArray){
    let filterBooks = bookArray.filter( book => book.pages > 100);
    console.log(filterBooks)
}
searchTitle("New Title");

searchAuthor("New Author1");

filterPages(bookArray);

function addTitle(title) {
    bookArray.map(book => {book.title = "Title:" + book.title
        console.log(title)
    });
}
addTitle("new book")

function addAuthor(author) {
    bookArray.map(book => {book.title = "Title:" + book.title
        console.log(author)
    });
}
addTitle("new author")

//////////////////////////////


class Account {
    constructor(accNumber, balance, owner){
        this.accNumber = accNumber;
        this.balance = balance;
        this.owner = owner;
    }
}

Account.prototype.makeDeposit = function(amount){
    this.balance += amount;
    console.log(`${amount} deposited successfully`);
};

Account.prototype.makeWithdrawal = function(amount){
    this.balance -= amount;
    console.log(`${amount} withdrawn successfully`);
}

let account1 = new Account(1001, 0, 'Chris')

account1.makeDeposit(100);
account1.makeDeposit(200);
account1.makeDeposit(300);
account1.makeWithdrawal(100);
console.log(account1)

Account.prototype.compoundInterest = function(amount){
    let interest = (this.balance * amount);
    let newBalance = (this.balance + interest);
    console.log(newBalance);

    
}

account1.compoundInterest(.02)