

var playerHealth = 100;
var health = document.getElementById('healthCount');
var mannyStatus = document.getElementById('mannyStatus');


function damageType(attack) {

    if (attack == 'jab') {
        playerHealth--;
        health.innerHTML = playerHealth;
        mannyStatus.innerHTML = "That all you got!?"
    }

    if (attack == 'hook') {
        if (playerHealth <= 5) {
            playerHealth = 0;
            health.innerHTML = playerHealth
            mannyStatus.innerHTML = "You're making me mad!"
        }
        else {
            playerHealth -= 5;
            health.innerHTML = playerHealth
            mannyStatus.innerHTML = "You're making me mad!"
        }
    }

    if (attack == 'upper') {
        if (playerHealth <= 10) {
            playerHealth = 0
            health.innerHTML = playerHealth
            mannyStatus.innerHTML = "That hurts!"
        }
        else {
            playerHealth -= 10;
            health.innerHTML = playerHealth
            mannyStatus.innerHTML = "That hurts!"
        }
    }

    if (attack == 'bite') {
        if (playerHealth <= 100) {
            playerHealth = 0
            health.innerHTML = playerHealth
            mannyStatus.innerHTML = "STOP STOP, MY FACE!!!"
        }
        else {
            playerHealth -= 100;
            health.innerHTML = playerHealth
            mannyStatus.innerHTML = "STOP STOP, MY FACE!!!"
        }
    }
    if (playerHealth <= 0) {
        jab.disabled = true;
        hook.disabled = true;
        upper.disabled = true;
        bite.disabled = true;
    }


}

function onReset(restart) {
    if (restart == 'reset') {
        playerHealth = 100
        jab.disabled = false;
        hook.disabled = false;
        upper.disabled = false;
        bite.disabled = false;
        health.innerHTML = playerHealth
        mannyStatus.innerHTML = "FIGHT ME"
    }

}




