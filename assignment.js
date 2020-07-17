//feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var roadMile = feetToMile(10560);
console.log(roadMile)

//woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(5, 5, 5);
console.log(woodResult)

//brickCalculator


//tinyFriend

function tinyFriend(names){
    var tiny = names[0];
    for(var i = 0; i < names.length; i++){
        var nextnumber = names[i];
        if(nextnumber.length < tiny.length){
            tiny = nextnumber;
        }
    }
    return tiny;
}   

var small = tinyFriend(["Sima", "Lamia", "Farjana"]);
console.log(small)