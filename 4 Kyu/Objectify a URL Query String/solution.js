function convertQueryToMap(query) {
    let result = {};
    const datas = query.split("&");
  
    for (const data of datas) {
        const split = data.split("=")
        result = createObj(result, split[0].split("."), split.slice(1, split.length).join("="));
    }
  
    return result;
}

function createObj(obj, names, value) {
    const dup = [...names].filter(x => x.trim());
    if (!dup.length) return {};
  
    const name = dup.shift();
    const altObj = obj[name] ? obj[name] : {};
    return {
        ...obj,
        [name]: dup.length ? {
            ...altObj,
            ...createObj(altObj, dup, value)
        } : decodeURIComponent(value)
    }
}