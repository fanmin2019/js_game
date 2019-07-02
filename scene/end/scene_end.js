// var SceneEnd = function (game) {
//     var s = {
//         game: game,
//     }
//
//         game.registerAction('r', function(){
//         var st = SceneTitle.new(game)
//         //時にはGAME、時にはG、ややこしい
//         game.replaceScene(st)
//     })
//
//
//
//
//     s.draw = function () {
//         //fill text
//         game.context.fillText("Game Over! Please press r to restart game", 100, 100);
//
//     }
//
//     s.update = function () {
//         // game.replaceScene()
//
//     }
//
//     return s
// }

class SceneEnd extends MinScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var st = SceneTitle.new(game)
            //時にはGAME、時にはG、ややこしい
            game.replaceScene(st)
        })
    }


    //override
    draw() {
        //fill text
        this.game.context.fillStyle = "black";
        this.game.context.fillText("Game Over! Please press r to restart game", 100, 100);

    }

}