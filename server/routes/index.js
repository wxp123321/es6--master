var express = require('express');
var mockjs = require('mockjs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var makeIssue = function () {
  var date = new Date();
  var first_issue_data = new Date();
  first_issue_data.setHours(9);
  first_issue_data.setMinutes(10);
  first_issue_data.setSeconds(0);
  var end_issue_date = new Date(first_issue_data.getTime()+77*10*60*1000);


  var cur_issue,end_time,state;
  if(date.getTime() - first_issue_data.getTime() > 0&&date.getTime()-end_issue_date.getTime() < 0){

  }
}

module.exports = router;
