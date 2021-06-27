function Anagram(strs){
    const output = {}
    for(str of strs){        
        const strSorted = str.split('').sort().join('')
        
        if(!output[strSorted]){        
            output[strSorted] = [str]
            
        }else{
            output[strSorted].push(str)
        }
    }
    return Object.values(output)
}

const textAnagram = ["kita", "atik", "tika","aku","kia","makan","kua"];
console.log(Anagram(textAnagram));
