

const areEqualActualAndExpectedValue = (actualValue, expectedValue) => {
    if (actualValue.length !== expectedValue.length){
        return false;
    } else {
        return actualValue.every(el => expectedValue.includes(el)) ? true : false;
    }
}

const getValue = (data, key) => {
    let values = [];
    data.forEach(item => {
        if(item.hasOwnProperty(key)) {
            values.push(item[key]);
        }
    });
    return values;
}


module.exports = {
    areEqualActualAndExpectedValue,
    getValue
}