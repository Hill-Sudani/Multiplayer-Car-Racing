class Player
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount()
    {
        database.ref("playerCount").on("value",
        function(data)
        {
            playerCount = data.val();
        }
        )
    }

    update()
    {
        var playerName = "players/player"+this.index;

        database.ref(playerName).set
        (
            {
                name : this.name,
                distance : this.distance
            }
        )
    }

    updateCount(Count)
    {
        database.ref("/").update
        (
            {
                playerCount : Count
            }
        )
    }

    static getPlayerInfo()
    {
        database.ref("players").on("value",(data)=>{allPlayers = data.val()})
    }
}