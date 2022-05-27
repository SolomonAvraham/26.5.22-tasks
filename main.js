// 1. צרו אלמנט של טקסט ב - html עם סטרינג "first dom app"
//  והדפיסו ללוג את התוכן שלו.

console.log(one.innerText);

// 2. צרו אלמנט טקסט וכתבו לתוכו ״
// my dom app״ והדפיסו ללוגו את התוכן.

document.write((two.innerHtml = "my dom app"));

// 3.	צרו 4 אלמנטי טקסט מסוג שונה ב html
//  עם טקסטים שונים והדפיסו אותם ללוג.

var fourElements = document.getElementsByClassName("three");
console.log(fourElements);

// 4.	הדפיסו ללוג את האלמנט השני.

console.log(fourElements[1]);

// 5.	הדפיסו ללוג את הטקסט של האלמנט השלישי.

console.log(fourElements[2]);

// 6.	צרו 4 אלמנטים מאותו סוג ב html עם תוכן שונה והדפיסו אותם ללוג.

var fourElemntsToPrint = document.getElementsByClassName("four");
console.log(fourElemntsToPrint);

// 7.	צרו פונקציה המקבלת מהמשתמש שם והדפיסו אותו למסך בתגית H2.

function printUserName() {
  var userName = prompt("Enter Name:");
  document.write("<h2>" + userName + "</h2>");
}
// printUserName();

// 8.	צרו פונקציה המקבלת מהמשתמש צבע ומספר,
//     הדפיסו למסך את הצבע בתגית SPAN מספר הפעמים שהמשתמש הכניס.

function userNameColorAndNum() {
  var numberOfI = +prompt("Number of Color&Number:");
  for (var i = 0; i < numberOfI; i++) {
    var userColor = prompt("Color:");
    var userNum = +prompt("Number:");
    document.write("<br>"+"<span>" + " " + userColor + " " + "</span>");
  }
}
// userNameColorAndNum();

// 9.	צרו פונקציה המקבלת מהמשתמש טקסט ושם תגית ואז בונה את התגית עם הטקסט ב DOM.


