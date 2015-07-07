/**
 * Created by LUFER on 06/07/2015.
 */


var Table = function(size, shipArray)
{
    this.size = size;

    this.grid = [];
    this.createGrid(size);

    this.ships = [];
    this.createShips();

    this.score = 0;
};
// quantity by default of ships is 3
Table.prototype.createShips = function()
{

    for(var z = 1; z <= 3; z++)
    {
        var shipId = z;
        var shipSize = this.getShipRandomSize();
        var shipInitPos = this.getShipRandomPos(shipSize);
        var ship = new Ship(shipId, shipSize);
        this.ships.push(ship);

        for(var j = shipInitPos.getColumn(); j < shipInitPos.getColumn() + shipSize; j++)
        {
            this.grid[j][shipInitPos.getRow()] = shipId;
        }
    }

};


Table.prototype.getShipRandomPos = function(shipSize)
{
    var column;
    var row;

    do
    {
        column = parseInt(Math.random() * (this.size - shipSize));
        row = parseInt(Math.random() * (this.size - shipSize));

        for(var i = row; i < (row + shipSize); i++)
        {
            if(this.grid[column][i] != 'o')
            {
                break;
            }
        }

        if(i == row + shipSize)
        {
            break;
        }

    } while(true);
    return new Axis(column, row);
};


Table.prototype.getShipRandomSize = function()
{
    return parseInt(Math.random() * 3) + 1;
};


Table.prototype.createGrid = function(size)
{
    var EMPTY_CELL = 'o';

    for(var i = 0; i < size; i++)
    {
        this.grid[i] = new Array();
        //
        for(var j = 0; j < size; j++)
        {
            this.grid[i][j] = EMPTY_CELL;
        }

    }
};

