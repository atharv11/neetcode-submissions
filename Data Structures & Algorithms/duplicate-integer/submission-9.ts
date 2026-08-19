class Solution{
  hasDuplicate(nums: number[]): boolean {
    let numCount = new Set<number>()
    for(let num of nums){
        if(numCount.has(num)){
            return true
            
        }
        else{
          numCount.add(num)
        }
    }
    return false
}
}


