class Solution {
   
    twoSum(nums: number[], target: number): number[] {
        const numMap: Record<number,number>={}
        for(let i=0;i<nums.length;i++){
            numMap[nums[i]]=i
        }
        for(let i=0;i<nums.length;i++){
            let Targetnumi=target-nums[i]
            if(numMap[Targetnumi]!==i && numMap[Targetnumi]!=undefined){
                return [i,numMap[Targetnumi]]
            }
           
              
            
        }
        return[]

     
   
}

}