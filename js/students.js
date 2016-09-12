var studentData = [                                       // Student data array of objects
  {
    name: "Dan",
    track: "js",
    achievements: "10",
    points: "50"
  },
  {
    name: "Jane",
    track: "IOS",
    achievements: "20",
    points: "55"
  },
  {
    name: "Bill",
    track: "CSS",
    achievements: "4",
    points: "40"
  },
  {
    name: "Nancy",
    track: "HTML",
    achievements: "3",
    points: "30"
  },
  {
    name: "Jordan",
    track: "C#",
    achievements: "15",
    points: "75"
  },
];

var outputHTML = "";

function print(message) {
  var outputDiv = document.getElementById('output');      //print function to write to DOM
  outputDiv.innerHTML = message;
}

for (i in studentData){                                   //Build up outputHTML variable
  outputHTML += "<br><h3>Name: " + studentData[i].name + "</h3>";
  outputHTML += "Track: " + studentData[i].track + "<br>";
  outputHTML += "Achievements: " + studentData[i].achievements + "<br>";
  outputHTML += "Points: " + studentData[i].points + "<br>";
}

print(outputHTML);                                        //output
