/**
 * Created by LUFER on 06/07/2015.
 */

var Axis = function(row,col)
{
    var _axis = [row,col];
    this.getColumn = function()
    {
        return _axis[1];
    };
    this.getRow = function()
    {
        return _axis[0];
    };
};
