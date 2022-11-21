function sum(...rest) {
    return rest.reduce((acc, item) => acc + item)
}

console.log(sum(10, 15, 249, 653, 846))