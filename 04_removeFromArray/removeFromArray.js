const removeFromArray = function(ray, ...newArray) {
        return ray.filter(val => !newArray.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
