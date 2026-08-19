class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const count:Record<number,number>={}
        const freq=Array.from({length:nums.length+1},()=>[])
        for(let i of nums){
             count[i]=(count[i]||0)+1
        }
        for(let i in count){
      freq[count[i]].push(i)
        }
        let result=[]
        for(let n=freq.length-1;n>0;n--){
            for(let s of freq[n]){
                result.push(s)
                if(result.length===k){
                    return result
                }
            }
          
        }
    }
}
