/**
 * Created by LUFER on 06/07/2015.
 */
var Table = function(size,quantity){
    this.size = size;
    this.ships = [];
    this.tables = [];
    this.grid = [[]];
    this.quantity = quantity;
    this.initGrid();
    this.initShips();
};


Table.prototype.initGrid = function(size)
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

Table.prototype.initShips = function(){
    for(var t=1;t<=4;t++)
    {
        var shipID = t.toString();
        var shipSize = this.getShipRandomSize();
        var ShipPos = this.getShipRandomPos(shipSize); //returns new Axis(4,0);
        var ship = new Ship(shipSize,ShipPos);

        this.ships.push(ship);

        var i = ShipPos.getRow();
        for(var j=ShipPos.getColumn();j<shipSize+ShipPos.getColumn();j++)
        {
            this.grid[i][j] = shipID;
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


Table.prototype.getShipRandomSize = function(){
    return parseInt(Math.random() *3)+1;
};