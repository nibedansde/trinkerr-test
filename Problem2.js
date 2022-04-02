/*
Designing File system
You are a computer architect who is designing the file system for your operating system.
 The basic constraint for designing the file system is handling names in the directory. 
 You cannot allow the same name for two files.
  Design a program to ensure the unique name of files. 
  If there is already a file with the given name, add a number, i, surrounded
   by brackets to ensure uniqueness, such that this i is the smallest positive number,
    and the new name obtained is also unique.

Input:

You are given a sequence of names. Name at ith position is served first, and
 then only you can move on to the next name.

Sample Input 1

Input: file-names = ["Valorant","GTA5","Fortnite","Valorant(2019)"]
Output: ["Valorant","GTA5","Fortnite","Valorant(2019)"]
Explanation: 
"Valorant" -- not assigned before, remains "Valorant"
"GTA5" -- not assigned before, remains "GTA5"
"Fortnite" -- not assigned before, remains "Fortnite"
"Valorant(2019)" -- not assigned before, remains "Valorant(2019)"
*/

let designFileSystem=function(str){
    const map=new Map();
    for(let i=0;i<str.length;i++){
        let currName=str[i];
        if(!map.has(currName)){
            map.set(currName,1)
            continue;
        }
        let getIndex=map.get(currName);
        let newName=currName+"("+getIndex+")";
        while(map.has(newName)){
            getIndex++;
            newName=currName+"("+getIndex+")"
        }
        str[i]=newName;
        map.set(newName,1);
        map.set(currName,getIndex+1);
    }
    return str;
}

let filenames = ["Valorant","GTA5","Fortnite","Valorant(2019)"]
console.log(designFileSystem(filenames))

let filenames2 = ["Valorant","Valorant(1)","Valorant","Valorant(2019)"]
console.log(designFileSystem(filenames2))
let filenames3 = ["naruto","naruto(1)","naruto(2)","naruto(3)", "naruto"]
console.log(designFileSystem(filenames3))