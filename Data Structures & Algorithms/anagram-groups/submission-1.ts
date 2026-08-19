class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const Res: Record<string, string[]> = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] +=1
            }
           const  key = count.join(',')
           if(!Res[key]){
            Res[key]=[]
           }
           Res[key].push(s)

        }
        return Object.values(Res)
        
    }
}
