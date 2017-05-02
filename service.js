function SlapGameService(){}

    function Target(name, mph, firstgear, secondgear, thirdgear, forthgear, fifthgear, reverse){
    this.name= name;
    this.mph = mph;
    this.gears ={
        "first-gear": firstgear,
        "second-gear": secondgear,
        "third-gear": thirdgear,
        "forth-gear": forthgear,
        "fifth-gear": fifthgear,
        "reverse": reverse
    };
    this.items = []
    this.hits = 0
};
var Squareback = new Target("Squareback", 0, 5, 10, 20 , 30, 40, -10)
var targets = [Squareback]

function getTarget(targetName){
    for(var i = 0; i < targets.length; i++){
        var target = targets[i]
        if(target.name == targetName){
            return target
        }
    }
}

this.gearTarget = function(targetName, gearType){
    var target  = getTarget(targetName)
    var validShift = target.gears[gearType]
    if(validShift){
        target.mph += validShift
    }
    if(target.mph >= 101){
       target.mph = 100
    }
    if(target.mph <= 0){
        target.mph = 0
    }
}

this.getTarget = function(targetName){
    return getTarget(targetName)
}

}
