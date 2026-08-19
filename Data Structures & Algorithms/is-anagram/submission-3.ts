class Solution {
    isAnagram(s: string, t: string): boolean {
      if(s.length != t.length){
        return false
      }
      const charcount : Record<string, number> = {}

      for(let i=0;i<s.length; i++){
        let char = s[i]
        charcount[char] = (charcount[char] || 0 ) + 1
      }
      for(let i = 0 ; i<t.length ; i++){
        let char1 = t[i]
        if(!charcount[char1]){
            return false
            
        }
        charcount[char1]--
      }
      return true;

    }
}
