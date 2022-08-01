// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return []
    }

    const arrsort = [];
    matrix.forEach((item, i) => {
        if ((i + 1) % 2 === 0) {
            item.reverse();
        }
        arrsort.push(...item);
    })
    return arrsort;
}