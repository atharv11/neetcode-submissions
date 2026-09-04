class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
    let numOfIsland = 0 
    for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
        if(grid[i][j]==="1"){
            numOfIsland++
            SinkIsland(i,j)
        }
    }
    }
      function SinkIsland(row, column){
        if(row<0||column<0||row>=grid.length||column>=grid[0].length|| grid[row][column]!=="1"){
            return;
        }
        grid[row][column]="0"
        SinkIsland(row+1, column)
        SinkIsland(row-1, column)
        SinkIsland(row, column+1)
        SinkIsland(row, column-1)
      }
    
    
    return numOfIsland
    }
}
