var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    const fruitsPerBox = 4;
    const boxesPerBundle = 2;
    const bundlesPerPal = 2;
    
    let result = [];
    let remainingFruits = input.length;
    let palIndex = 0;
    
    while (remainingFruits > 0) {
        let palBundles = [];
    
        for (let bundleIndex = 0; bundleIndex < bundlesPerPal; bundleIndex++) {
            let bundle = [];
            let remainingBoxes = Math.ceil(remainingFruits / fruitsPerBox);
    
            for (let boxIndex = 0; boxIndex < boxesPerBundle && remainingBoxes > 0; boxIndex++) {
                let box = [];
                for (let fruitIndex = 0; fruitIndex < fruitsPerBox && remainingFruits > 0; fruitIndex++) {
                    box.push(input.shift());
                    remainingFruits--;
                }
                bundle.push(box);
                remainingBoxes--;
            }
    
            palBundles.push(bundle);
        }
    
        result.push(palBundles);
        palIndex++;
    }
    
    return result;    
}

console.log(apples(input));

