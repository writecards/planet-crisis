function doSomethingSyncedEveryXseconds(x, numStages, callback){
    let currentTimeInSeconds = Math.floor(Date.now()/1000);
    let stage = Math.floor(currentTimeInSeconds/x)%numStages; //
    callback(stage);
    let changed = false;
    setInterval(function(){
       let currentTimeInSeconds = Math.floor(Date.now()/1000);
       if(currentTimeInSeconds%x==0&&!changed){
           stage = Math.floor(currentTimeInSeconds/x)%numStages; //
           callback(stage);
           changed = true;
       }else{
           changed = false;
       }
    }, 500)
}




// do a synced thing every 20 seconds:
// cycle through 5 stages:
doSomethingSyncedEveryXseconds(20, 5, function(currentStage){
    // any code you want can go in here
    // currentStage represents the current "global" stage that every script running this funciton will be synced on
    console.log("current synced stage is: ", currentStage)
 })