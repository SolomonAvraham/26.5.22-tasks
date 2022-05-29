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

  five.innerHTML = userTag1 + " " + userText + " " + userTag2;
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

function buildingObject() {
  var numOfObejct = +prompt("Number Of Buildings:");
  var building = {};

  for (var i = 0; i < numOfObejct; i++) {
    building.contractor = prompt("Contractor Name:");
    building.company = prompt("Company Name:");
    building.floors = +prompt("No. Of Floors:");
    building.appartments = +prompt("No. of Appartments on Floor:");

    document.write(
      "<h1>" +
        building.contractor +
        "</h1>" +
        "<h2>" +
        building.company +
        "</h2>" +
        "<h3>" +
        building.floors +
        "</h3>" +
        "<h4>" +
        building.appartments +
        "</h4>"
    );
  }
}
// buildingObject();

// 17.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של חנות,
//   לכל חנות יש שם החנות, כתובת, מספר מחלקות ומספר עובדים.תנו להם ערכים מהמשתמש,
//     הדפיסו רק למסך רק חנוית עם מספר עובדים גבוה מ 10, כל אובייקט באלמנט משלו.

function storeObjects() {
  var numOfObejcts = +prompt("Number Of Store:");
  var store = {};
  for (var i = 0; i < numOfObejcts; i++) {
    store.name = prompt("Store Name:");
    store.address = prompt("Address' Name:");
    store.departments = +prompt("Departments' Number:");
    store.employees = +prompt("Employees Number:");

    if (store.employees > 10) {
      document.write(
        "<p>" +
          store.name +
          "</p>" +
          "<u>" +
          store.address +
          "</u>" +
          "<h1>" +
          store.departments +
          "</h1>" +
          "<h6>" +
          store.employees +
          "</h6>"
      );
    }
  }
}

// storeObjects();

// 18.	צרו פונקציה שמדפיסה ללוג כמה אלמנטים נוצרו במסך בפונקציה הקודמת (סעיף 17).

function numOfElementsLastFunc() {
  var lastFunc = storeObjects();
  var countElements = Element.get;

  console.log(countElements);
}

// numOfElementsLastFunc();

// 19.	צרו רשימה ב html וצרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים,
//   על פי הקלט, של איש קשר, לכל איש קשר יש שם מלא, חברה, טלפון, נייד ואימייל
//     .תנו להם ערכים מהמשתמש, הדפיסו כל שם של איש קשר לרשימה

function contantObjects() {
  var numOfObejcts = +prompt("Number Of Contact: ");
  var contact = {};
  var list = document.getElementsByClassName("nine");
  for (var i = 0; i < numOfObejcts; i++) {
    contact.name = prompt("Contact Full Name:");
    contact.company = prompt("Company:");
    contact.tel = +prompt("Tel:");
    contact.email = prompt("Email:");
    list[i].innerText = contact.name;
  }
}
// contantObjects();

// 20. * אתגר - צרו טבלה ב html וצרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים,
//   על פי הקלט, של רופא, לכל רופא יש שם מלא, התמחות, טלפון,
//     האם זמין ואימייל.תנו להם ערכים מהמשתמש, הדפיסו כל אובייקט לשורה בטבלה.

function doctorObjects() {
  var numOfObejcts = +prompt("Numbers of Doctors:");
  var doctor = {};

  for (var i = 0; i < numOfObejcts; i++) {
    doctor.name = prompt("Full Name:");
    doctor.specialization = prompt("Specialization:");
    doctor.tel = +prompt("tel:");
    doctor.available = prompt("Available:", "yes or no");
    doctor.email = prompt("Email:");
    // fullName.innerText = doctor.name;
    // specialization.innerText = doctor.specialization;
    // tel.innerText = doctor.tel;
    // available.innerText = doctor.available;
    // email.innerText = doctor.email;
    // ten[i].innerText = "fsfsfsfs";
    var doctorClass = document.getElementsByClassName("ten");
    doctorClass[i].innerText = doctor;
 
  }
}
// doctorObjects();
