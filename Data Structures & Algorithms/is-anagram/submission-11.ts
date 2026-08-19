class Solution {
    isAnagram(s: string, t: string): boolean {
     if(s.length!=t.length){
        return false
     }
     const charCount= new Map<string,number>()
     for(let i=0;i<s.length;i++){
        let char = s[i]
        charCount[char]=(charCount[char] | 0)+1
     }

     for(let i = 0 ; i < s.length;i++){
        let char1 = t[i]
        if(!charCount[char1])
        {
            return false
        }
        else{
            charCount[char1]--
        }
     }
     return true


    }
}
