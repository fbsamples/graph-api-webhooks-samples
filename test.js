const fs = require('fs')
const { parse } = require('csv-parse');

var parser = parse({columns: true}, function (err, records) {
  
  
  // $bible 64 1 1 2
                    
                    var chapters = []
                    
                    for (let i = 0; i < records.length; i++) {
                  if (records[i]["Book Number"] === "2"){
                    
                    chapters.push(records[i].Chapter)

                  }
                }
                    
                    if (!chapters.includes("1")){
                      
                      console.log("Chapter Number provided lies outside chapter range of specified book!")
                      
                    }
                    
                    else {
                      
                       var verses = [];
                  for (var i = parseInt("1"); i <= parseInt("1"); i++) {
                      verses.push(i.toString());
                  }
                      
                      
                      var versez = []
                      
                      for (let i = 0; i < records.length; i++) {
                  if (records[i]["Book Number"] === "2" && records[i].Chapter === "1"){
                    
                    versez.push(records[i].Verse)

                  }
                }
     
                      
                      if (!versez.includes("1") || !versez.includes("1")){
                        
                        console.log("Verse number provided lies outside verse range of specified chapter number!")
                      }
                    
                      else {
                      
                      var gay = ""
                    
                    function sending2(){
                      if (records[i]["Book Number"] === "2" && records[i].Chapter === "1" && verses.includes(records[i].Verse)){
                    
                      gay = `${records[i]["Book Name"]} ${records[i].Chapter}:${records[i].Verse} ${records[i].Text}`
                      console.log(gay);
                        

                  }
                      
                    }
                    
                    var i = 0;                  //  set your counter to 1

                    function myLoop() {         //  create a loop function
                      setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                        sending2();   //  your code here
                        i++;                    //  increment the counter
                        if ( i < records.length) {           //  if the counter < 10, call the loop function
                          myLoop();             //  ..  again which will trigger another 
                        } 
                       
                      
                    //  ..  setTimeout()
                      }, 500)
                    }

                    myLoop(); 
                    
                   
                    }
                    }
                });

                fs.createReadStream(__dirname+'/kjv.csv').pipe(parser);