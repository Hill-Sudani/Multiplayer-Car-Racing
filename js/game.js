class Game
{
    constructor()
    {
    }

    getState()
    {
        database.ref("gameState").on("value",
        function(data)
        {
            gameState = data.val();
        }
        )
    }

    update(state)
    {
        database.ref("/").update
        ({
            gameState : state
        })
    }

    async start()
    {

       

        if(gameState === 0)
        {
            player = new Player();

            var playerCountRef = await database.ref("playerCount").once("value");

            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
        
            car1 = createSprite(100,100,50,50);
            car2 = createSprite(200,100,50,50);
            car3 = createSprite(300,100,50,50);
            car4 = createSprite(400,100,50,50);

            cars = [car1,car2,car3,car4];

            car1.addImage(car1Img);
            car2.addImage(car2Img);
            car3.addImage(car3Img);
            car4.addImage(car4Img);
        
    }

    play()
    {
        form.hide();

        //textSize(20);
        //text("GAME START",120,100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined)
        {
            //var displayPosition = 150;
            background(groundImg);
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);

            var index = 0;
            var x, y;
            x = 200;

            for(var i in allPlayers)
            {
                x = x + 200;
                y = displayHeight - allPlayers[i].distance;
                index = index + 1;
                cars[index - 1].x = x;
                cars[index-1].y = y;

                if(index === player.index)
                {
                    cars[index-1].shapeColor = "red";
                    camera.position.x = width/2;
                    camera.position.y = cars[index-1].y;

                    ellipseMode(CENTER);
                    fill("blue");
                    ellipse(x,y,60,60);
                }
                
                /*if(i === "player" + player.index)
                {
                    fill("red")
                }
                else
                {
                    fill("black")
                }*/
                //displayPosition += 30;
                //textSize(20);
                //text(allPlayers[i].name + " : " + allPlayers[i].distance, 120, displayPosition);
            } 
        }

        if(keyDown(UP_ARROW) && player.index !== null)
        {
            player.distance += 50;
            player.update();
        }

        if(player.distance >= 3750)
        {
            gameState = 2;
        }

        drawSprites();
    }

    end()
    {
        console.log("Game Ended")
    }
    
}