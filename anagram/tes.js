const textAnagram = ["kita", "atik", "tika","aku","kia","makan","kua"];

function Anagram(array){
    let tmp = {}
    for(str of array){
        let sorted = str.split('').sort().join('').toLowerCase();
        console.log(sorted);
        (!tmp[sorted]) ? tmp[sorted] = [str] : tmp[sorted].push(str);
        // console.log(tmp[sorted])
        if(!tmp[sorted]){
            if(tmp[sorted]){
                
            }
        }
    }
    return Object.values(tmp)
}

console.log(Anagram(textAnagram));
let h ={}
console.log(h['aku'])