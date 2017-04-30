function SlapGameController(){

    var slapGameService = new SlapGameService()

    function update(){
        var target = slapGameService.getTarget('Squareback')

        var shiftButtons = ''
        for(var prop in target.gears){
            shiftButtons += `
            <button type = "button" onclick="gameController.gear('${target.name}', '${prop}')">${prop}</button>
            `
        }
        document.getElementById('target').innerHTML = `
        <h1>${target.name} - ${target.mph}</h1>
        ${shiftButtons}
        `
    }
    this.gear = function(name, gearType){
        slapGameService.gearTarget(name, gearType)
        update()
    }
    update()
}