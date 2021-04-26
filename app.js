const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Sunday"
      break;
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednesday"
      break;
    case 4:
      day = "Thursday"
      break;
    case 5:
      day = "Friday"
      break;
    case 6:
      day = "Saturday"
      break;
    default:
      console.log("Error: current day is equal to: " + currentDay);
  }
  // if (today.getDay() === 4 || today.getDay() === 5) {
  //   day = "weekend";
  // } else {
  //   day = "weekday";
  // }
  res.render('list', {kindOfDay: day});

  //res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})
