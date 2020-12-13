class Form
{
    constructor()
    {
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting =  createElement("h3");
        this.title = createElement("h2");
        this.reset = createButton("RESET");
    }

    display()
    {

        this.title.html("Car Racing Game");
        this.title.position(width/2,0);

        this.input.position(width/2,height/2 - 100);

        this.button.position(width/2 + 50, height/2 - 30);

        this.reset.position(width-100,50);

        this.button.mousePressed 
        (
        ()=>
        {
            player.name = this.input.value();
            this.input.hide();
            this.button.hide();
            
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(width/2, height/4);
        }
        )

        this.reset.mousePressed
        (
            ()=>
            {
                player.updateCount(0);
                game.update(0);
            }
        )
    }

    hide()
    {
        this.title.hide();
        this.greeting.hide();
    }
}