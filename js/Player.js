class Player{
    constructor(){}

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            "playerCount": count
        })
    }

    update(name){
        //string concatenation
        //"player" + 1 = player1
        //"player" +2 = player2
       var playerIndex = "player" + playerCount; 
       database.ref(playerIndex).set({
        "name": name
    })
    }
}