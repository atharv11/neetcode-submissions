class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length-1
         let maxWater = 0
         while(left<right){
            maxWater = Math.max(
            findwater(heights[left], heights[right], left , right), maxWater)
            if(heights[left]<heights[right]){
                left ++ 
            }
            else{
                right--
            }
         }
         return maxWater

         function findwater(leftrod, rightrod, leftrodIndex, rightrodIndex){
        return Math.min(leftrod, rightrod) * (rightrodIndex-leftrodIndex)
           }
    }

    
}
