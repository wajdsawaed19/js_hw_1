 //wajd and hala
 
//task1 
if("0"){
    alert('hello');
}
//כן יופיע כי ערך ה0 אינו ריק 

//task2
let answer = prompt("מהו השם ה'רשמי' של JavaScript?");

if (answer === "ECMAScript") {
  alert("Correct!");
} else {
  alert("לא יודע? ECMAScript!");
}

//task3
let score = 75;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";

//task4
let userInput = prompt("הזן מספר:");

if (userInput > 0) {
    alert("1");
} else if (userInput < 0) {
    alert("-1");
} else {
    alert("0");
}

//task5
let result = a + b < 4 ? 'Not enough' : 'A lot';

//task6
let message = 
  login === 'Employee' || login === 'Director' ? 'Hello' :
  login === '' ? 'No login' :
  '';

//task7
console.log(false || 'ref');       // 'ref' מחזיר את הערך הראשון שהוא truthy
console.log(false && ' ');        // false  מחזיר את הערך הראשון שהוא falsy
console.log(true || ' ');         // true מחזיר את הערך הראשון שהוא truthy
console.log(true && ' ');         // ' ' מחזיר את הערך השני כי הראשון truthy
console.log(undefined || null);   // null  מחזיר את הערך השני כי הראשון falsy
console.log(undefined || 0 || null); // null  מחזיר את הערך האחרון כי כולם falsy
console.log(undefined && null);   // undefined טעות תחבירית (חסר ערך בין האופרטורים)
console.log(1 || 0);              // 1  מחזיר את הערך הראשון שהוא truthy
console.log(null || 1);           // 1 מחזיר את הערך הראשון שהוא truthy
console.log(null || 0 || 1);      // 1 מחזיר את הערך הראשון שהוא truthy
//wajd and hala

//task1
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum); // ידפיס 5050 (סכום המספרים מ-1 עד 100)

//task2
let userInput;
do {
    userInput = prompt("הזן מספר:");
} while (isNaN(userInput) || userInput.trim() === '');

console.log("המספר שהזנת הוא:", userInput);

//task3

for (let i = 1; i <= 10; i++) {
    console.log(7 * ${i} = ${7 * i});
}

//task4
const secret = 7; // המספר הסודי
let remainingGuesses = 10; // מספר ניחושים מקסימלי

for (let guessCount = 1; guessCount <= 10; guessCount++) {
    let userGuess = prompt(נחש את המספר הסודי (ניחוש ${guessCount}/10):);
    userGuess = Number(userGuess); // המרה למספר
    
    if (userGuess === secret) {
        alert("ניחשת נכון! המספר הסודי הוא אכן 7!");
        break; // יציאה מהלולאה אם הניחוש נכון
    } 
    else if (userGuess < secret) {
        alert("הניחוש נמוך מדי, נסה שוב!");
    } 
    else {
        alert("הניחוש גבוה מדי, נסה שוב!");
    }
    
    remainingGuesses--;
    
    if (remainingGuesses === 0) {
        alert("אזל מספר הניחושים! המספר הסודי היה 7.");
    }
}

//task5
for (let i = 1; i <= 10; i++) {
    if (i % 3 !== 0) { // בדיקה שהמספר אינו כפולה של 3
        console.log(i);
    }
}

//task6
//הערך האחרון הוא 0 כי I - - מפחית אותו

//task7
// לא כי הראשון מצד שמאל מגדיל את הערך אחר כך משווה 
//אבל השני הפוך הוא משווה אחר כך מגדיל

//task8
//כן כי ההבדל ביו הטיפוסים בשניהם לא משפיע בגלל התוצאה לא משומשת לשום דבר



//task9
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//task10
for (let i = 0; i < 3; i++) {
    alert(number ${i}!); // שימוש בגרשיים מסולסלים ` לתבנית מחרוזת
}