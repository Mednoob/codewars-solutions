function dirReduc(arr){
    const opposite = {
        SOUTH: "NORTH",
        NORTH: "SOUTH",
        EAST: "WEST",
        WEST: "EAST"
    };
    const directions = [];

    for (const item of arr) {
        if (directions[directions.length - 1] === opposite[item]) {
            directions.pop();
        } else directions.push(item);
    }
  
    return directions;
}