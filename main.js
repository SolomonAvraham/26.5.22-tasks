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
  var paragraph = document.getElementsByClassName("seven");
  for (var i = 0; i < paragraph.length; i++) {
    paragraph[i].innerHTML = "<span> Hello World!</span>";
    paragraph[i].style.backgroundColor = "yellow";
  }
}
creatContantToHtml();

// 13.	צרו פונקציה המקבלת מהמשתמש שם פרטי, שם משפחה וגיל,
//   היא מדפיסה למסך את כל הפרטים, אם המשתמש מעל 18 היא מציגה מתחת לפרטים קלט.

function userDetalisToPrint() {
  var user = {};
  user.firstName = prompt("first name:");
  user.lastName = prompt("last name:");
  user.age = +prompt("age:");

  if (user.age > 18) {
    document.writeln(
      "First Name:" +
        user.firstName +
        " " +
        "Last Name:" +
        user.lastName +
        " " +
        "Age:" +
        user.age +
        "<br/>"
    );
    var input = document.createElement("input");
    var body = document.body;
    body.append(input);
  }
}
// userDetalisToPrint();

// 14.	צרו פונקציה המייצרת אובייקט של סרט, עם שם, מספר צפיות,
//   שנה ותמונה.תנו להם ערכים מהמשתמש, הדפיסו למסך את הסרטים בצורה יפה,
//     כולל התמונה, שם - הכי גדול ושנה הכי קטן

function moviesObejects() {
  var img = document.getElementById("eight");

  var movie = {};

  movie.name = prompt("Movie Name:");
  movie.views = +prompt("No. of views:");
  movie.year = +prompt("Year:");
  img.src = "" + prompt("Add URL Picture:");
  movie.pic = img;

  document.write(
    "<h2>" +
      movie.name +
      "</h2>" +
      "<br/>" +
      movie.views +
      "<br/>" +
      "<h6>" +
      movie.year +
      "</h6>"
  );
  document.write(img[i]);
}
// moviesObejects();

// 15.	צרו אובייקט של עובד, בעזרת קלטים צרו שדות של שם פרטי, שם משפחה,
//   אימייל ומחלקה.ותנו להם ערכים מהמשתמש, הדפיסו את האובייקט למסך, כל ערך באלמנט משלו.

function workerObeject() {
  var worker = {};
  worker.firstName = prompt("First Name:");
  worker.lastName = prompt("Last Name:");
  worker.email = prompt("Email:");
  worker.department = prompt("Department:");

  document.write(
    "<h1>" +
      worker.firstName +
      "</h1>" +
      "<h2>" +
      worker.lastName +
      "</h2>" +
      "<p>" +
      worker.email +
      "</p>" +
      "<h6>" +
      worker.department +
      "</h6>"
  );
}

// workerObeject();

// 16.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים,
//   על פי הקלט, של בניין, לכל בניין יש שם קבלן, שם חברה,
//   מספר קומות ומספר דירות בקומה.תנו להם ערכים מהמשתמש,
//     הדפיסו כל אובייקט למסך, כל אובייקט באלמנט משלו.
