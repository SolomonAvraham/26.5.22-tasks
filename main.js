// 1. צרו אלמנט של טקסט ב - html עם סטרינג "first dom app"
//  והדפיסו ללוג את התוכן שלו.

console.log(one.innerText);

// 2. צרו אלמנט טקסט וכתבו לתוכו ״
// my dom app״ והדפיסו ללוגו את התוכן.

console.log((two.innerHtml = "my dom app"));

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
    document.write("<br>" + "<span>" + " " + userColor + " " + "</span>");
  }
}
// userNameColorAndNum();

// 9.	צרו פונקציה המקבלת מהמשתמש טקסט ושם תגית ואז בונה את התגית עם הטקסט ב DOM.

function creatTagAndText() {
  var userText = prompt("Text:");
  var userTag1 = prompt("<tag>:");
  var userTag2 = prompt("</tag>:");
  document.getElementById("five").innerHTML =
    userTag1 + " " + userText + " " + userTag2;
}
// creatTagAndText();

// 10.	צרו פונקציה המקבלת מהמשתמש סוג קלט ויוצרת את הקלט המתאים ב DOM.

function inPutFromUser() {
  var userType = prompt("Enter Input type:", "color,text,date etc'");
  var body = document.body;
  var input = document.createElement("input");
  input.type = userType;
  body.append(input);
}

// inPutFromUser();

// 11.	צרו פונקציה המקבלת כארגומנט שם
// class וטקסט, הפונקציה משנה את התוכן של כל האלמנטים עם ה class שהתקבל לטקסט שהמשתמש הכניס.

function funcChangingContant(six) {}

// לא פתור!

// 12.	צרו 6 אלמנטי P ריקים ב html, צרו פונקציה שמכניסה להם אלמנט SPAN עם טקסט.

function creatContantToHtml() {
  for (var i = 0; i < 6; i++) {
    var paragraph = document.querySelector(".seven");
    paragraph.innerHTML = "<span>HELLO WORLD</span>";
  }

  console.log(paragraph);
}
creatContantToHtml();
