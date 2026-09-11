class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows= heights.length
        const cols= heights[0].length

        const pacific = Array.from({length:rows}, ()=>Array(cols).fill(false))
        const atlantic = Array.from({length:rows}, ()=>Array(cols).fill(false))

        function dfs(r, c , visited , prevheight){
            if(r<0||c<0||r>=rows||c>=cols||visited[r][c]||heights[r][c]<prevheight){
                return;
            }
            else{
                visited[r][c]=true
            }
            dfs(r+1,c,visited, heights[r][c])
            dfs(r-1,c,visited, heights[r][c])
            dfs(r,c+1,visited, heights[r][c])
            dfs(r,c-1,visited, heights[r][c])
        }

        for(let r=0;r<rows;r++){
            dfs(r,0,pacific,heights[r][0])
            dfs(r,cols-1,atlantic,heights[r][cols-1])
        }
         for(let c=0;c<cols;c++){
            dfs(0,c,pacific,heights[0][c])
            dfs(rows-1,c,atlantic,heights[rows-1][c])
        }
        let result=[]
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(pacific[r][c] && atlantic[r][c]){
                    result.push([r,c])
                }
            }
        }
        return result
    }
}
