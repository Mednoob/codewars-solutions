function reverseInParens(text){
    const stack = [];
    let temp = "";
  
    for (const str of text) {
        if (str === "(") {
            stack.push(`${temp}(`);
            temp = "";
        } else if (str === ")") {
            const rep = temp.replace(/\(|\)/g, m => m === "(" ? ")" : "(");
            temp = `${stack.pop()}${rep.split("").reverse().join("")})`;
        } else {
            temp += str;
        }
    }
    
    return temp;
}
