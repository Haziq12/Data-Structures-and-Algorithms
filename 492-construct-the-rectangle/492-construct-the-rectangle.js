/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let [L, W] = [area, 1]
    for(let i = 1; i <= Math.sqrt(area); i++) {
        if(area % i === 0 && area/i === i) {
            L = area/i
            W = i
        } else if(area % i === 0) {
            L = Math.max(area/i, i)
            W = Math.min(area/i, i)
        }
    }
    return [L, W]
};