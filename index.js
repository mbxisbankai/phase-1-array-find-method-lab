const record = [
    { 
        year: "2015", 
        result: "W",
    },
    { 
        year: "2014", 
        result: "N/A",
    },
    { 
        year: "2013", 
        result: "L",
    },
];

function superbowlWin(array){
    for(const obj of array){
        if(obj.result === 'W'){
            return obj.year;
            break;
        }
    }
}
superbowlWin(record);
