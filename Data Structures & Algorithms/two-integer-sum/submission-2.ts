class Solution {
   
    twoSum(nums: number[], target: number): number[] {
     const charCount = new Map<number , number>()
     for(let i=0;i<nums.length;i++){
      let CurrentNumber = nums[i]
      const needNumber = target-nums[i]
      if(charCount.has(needNumber)){
        return [charCount.get(needNumber),i]
      }
      charCount.set(nums[i],i)
     }
     return[]
    }
   
}
