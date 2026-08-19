class Solution{
  hasDuplicate(nums: number[]): boolean {
    const seenBefore: Record<number, boolean> = {};

  
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // 2. Check if we've seen it
        if (seenBefore[num] == true) {
            return true; // Stop and return true
        } else {
            // 3. If we haven't seen it, SAVE it to the object!
            seenBefore[num] = true;
        }
    }

    // If the loop finishes and we never hit 'return true', there are no duplicates
    return false; 
}
}


