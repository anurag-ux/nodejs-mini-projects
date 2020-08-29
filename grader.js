function average(scores){
    var tot=0;
    for(var i=0;i<scores.length;i++){
        tot +=scores[i];
    }
    console.log(Math.round(tot/scores.length));
}

average([90,95,92,89,90,85]);