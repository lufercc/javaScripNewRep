/**
 * Created by LUFER on 06/07/2015.
 */


var BattleShipGame = function(player, size){

    console.log('Start game for ' +player+ ' players');
    this.numPlayers = player;
    this.tableSize = size;
    this.players = [];
    this.init();
    this.startGame();
};

BattleShipGame.prototype.init = function()
{
    for( var i = 1; i <= this.numPlayers ; i++ )
    {
        var playerName = 'Player'+i;
        var playerTable = new Table(this.tableSize , this.numPlayers);
        var play = new Player( playerName , playerTable );

        this.players.push(play);
    }
};

BattleShipGame.prototype.startGame = function()
{

    this.printTable();
    var row = window.prompt('insert hit row');
    var column = window.prompt('insert hit column');
    this.Shot(row,column);

};
// this method print new table
BattleShipGame.prototype.printTable = function(){

    console.log('Table\n' + this.players[0].table.grid.join('\n'));
};
// this game is for one player
BattleShipGame.prototype.Shot = function(row,column){
    var rows = row-1;
    var cols = column-1;

    // if shot is fail the game is finish
    if(this.players[0].table.grid[rows][cols]!= 'o')
    {
        alert('hit to ship');
        this.players[0].table.grid[rows][cols]='X';
        console.log('Table\n' + this.players[0].table.grid.join('\n'));
        var row = window.prompt('insert hit row');
        var column = window.prompt('inser hit column');
        this.Shot(row,column);
    }
    else
    {
        alert('your shot is failed');
    }
};