 //array-methods
 //task5
 const fruits = ["apple", "blueberry", "blackberry", "cherry", "date"];
 
 //task6
 const colors = ["orange", "yellow"];

 //task7
 const animals = ["cat", "dog", "lion", "tiger"];

 //task8
 const numbers = [1, 3, 5, 7, 9];

 //task9
 const letters = ["d", "c", "b", "a"];

 //task10
 const sentence = "javascript is awesome";
const words = sentence.split(" ");
console.log(words);

//task11
const words = ["hello", "world"];
const sentence = words.join(" ");
console.log(sentence);

//array_מעבדים מערכים
//task14
const students = ["דני", "נועה", "חן", "חנה"];

students.forEach(name => {
  console.log(שלום, ${name}! בהצלחה במבחן!);
});

//task15
const pricesILS = [100, 250, 75, 320];
const pricesUSD = pricesILS.map(price => (price / 3.5).toFixed(2));

console.log(pricesUSD); // ["28.57", "71.43", "21.43", "91.43"]

//task16
const users = [
    { username: "Tom", isLoggedIn: true },
    { username: "Jerry", isLoggedIn: false },
    { username: "Spike", isLoggedIn: true }
  ];
  
  const loggedInUsers = users.filter(user => user.isLoggedIn);
  console.log(loggedInUsers);

  //task17
  const products = [
    { name: "Book", quantity: 3 },
    { name: "Pen", quantity: 0 },
    { name: "Notebook", quantity: 5 }
  ];
  
  const hasOutOfStock = products.some(product => product.quantity === 0);
  console.log(hasOutOfStock); // true

  //task18
  const grades = [72, 85, 90, 67, 58];

const allPassed = grades.every(grade => grade >= 60);
console.log(allPassed); // false

//task19
const employees = [
    { name: "Sharon", salary: 9500 },
    { name: "David", salary: 7800 },
    { name: "Lior", salary: 12000 }
  ];
  
  const highEarners = employees
    .filter(emp => emp.salary > 8000)
    .map(emp => emp.name.toUpperCase());
  
  console.log(highEarners); // ["SHARON", "LIOR"]

  //task20
  const books = [
    { title: "Book A", pages: 450 },
    { title: "Book B", pages: 520 },
    { title: "Book C", pages: 600 }
  ];
  
  const hasBookUnder500 = books.some(book => book.pages < 500);
  
  if (!hasBookUnder500) {
    const booksOver500 = books.filter(book => book.pages > 500);
    console.log(booksOver500);
  }