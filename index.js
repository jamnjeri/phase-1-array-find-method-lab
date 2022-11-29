// // // code your solution here
// const record = [
//     {year: "2015", result: "W"},
//     {year: "2014", result: "N/A"},
//     {year: "2013", result: "L"}
// ]

function superbowlWin(record){
    //return record.result === "W"
    const res = record.find(record=>record.result ==="W")

    if(!res){
        return undefined
    }   
    return res.year

}

// console.log(superbowlWin(record));





