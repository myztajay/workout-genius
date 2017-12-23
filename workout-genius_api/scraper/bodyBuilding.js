//TO RUN THIS - casperjs <filename>
var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  clientScripts: ["vendor/jquery.min.js", "vendor/lodash.js"]
});
var fs = require('fs');

function getLinks() {
  var tempImagesArr = [];
  var imagesArr = [];
  var namesArr = [];
  var muscleGroupArr = [];
  var masterArr = [];
  var total = null;
  
  // Scraping images
  $("img.ExImg.ExResult-img").each(function() {  
   imgSrc = this.src;
   tempImagesArr.push(imgSrc);
  });
  // Scraping names
  $(".ExHeading.ExResult-resultsHeading a").each(function() {  
   name = this.innerText;
   namesArr.push(name);
  });
  // Scraping Muscle Groups
  $("div.ExResult-details.ExResult-muscleTargeted a").each(function() {  
   muscleGroup = this.innerText;
   muscleGroupArr.push(muscleGroup);
  });
  // Help fimctiom to split arrays intp chunks
  function _splitArray(arr, count){
    var newArr = []
    while(arr.length > 0){
      newArr.push(arr.splice(0,count))
    }
    return newArr
  }
  // mew array composed of all tempImagesArr split into sub arrays
  imagesArr = _splitArray(tempImagesArr, 2);
  total = namesArr.length;
  // Loops through each item, create a json and push that to masterArr
  for(i=0; i<total; i++){
    var workout = {}
    workout.name= namesArr[i];
    workout.images= imagesArr[i]; 
    workout.muscleGroup= muscleGroupArr[i];
    masterArr.push(workout);
  }
  return masterArr;
}
// attaching a save method function to this instance of casper
casper.saveJSON = function(workouts) {
    fs.write('workouts.json', JSON.stringify(workouts, null, '  '), 'w');
};

casper.start('https://www.bodybuilding.com/exercises/finder');
casper.then(function(){
  // how many time to click the load more button
  var pages = 1
  while (pages > 0){ 
     this.wait(3000, function(){
       this.click('button.bb-flat-btn.bb-flat-btn--size-lg.bb-spinner-btn.js-ex-loadMore.ExLoadMore-btn')
     });
    pages-=1;
  }
})

// IN CASE OF BUGS ACTIVATE THIS CODE TO LOG
casper.then(function() {
  links = this.evaluate(getLinks);
  this.echo("these are the workouts ----------->" + links)
})

casper.run(function() {
  var workouts = this.evaluate(getLinks);
  this.saveJSON(workouts);
  this.exit();
});