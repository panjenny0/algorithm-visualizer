export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const tempArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, tempArray, animations);
    return animations;
    /*
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    // slice returns the selected elements in an array into a new array object `slice(start, end)`
    // if either start or end are omitted, method uses 0 as start of array and end of array as the end
    const firstHalf = mergeSort(array.slice(0, mid));
    const secondHalf = mergeSort(array.slice(mid));
    const sorted = [];
    let i = 0,
        j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sorted.push(firstHalf[i++]);
        } else {
            sorted.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) sorted.push(firstHalf[i++]);
    while (j < secondHalf.length) sorted.push(secondHalf[j++]);
    return sorted*/
};

function mergeSortHelper(mainArray, startIdx, endIdx, tempArray, animations) {
    // for (let i = 1; i <= endIdx; i = 2 * i) {
    //     for (j = startIdx; j < endIdx; j += 2 * i) {
    //         const mid = min(i + j - 1, endIdx);
    //         const end = min(i + 2 * j - 1, endIdx);
    //         merge(mainArray, i, mid, end, )
    //     }
    // }
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx, endIdx) / 2);
    mergeSortHelper(tempArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(tempArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations);
}

function merge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations) {
    let k = startIdx, 
        i = startIdx, 
        j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        // first compare i and j, push them to animations to change colour
        animations.push([i, j]);
        // push them second time to revert their colour
        animations.push([i, j]);
        if (tempArray[i] <= tempArray[j]) {
            // in the original array, overwrite the value at index k
            // with the value at index i in the temp array
            animations.push([k, tempArray[i]]);
        } else {
            // in the original array, overwrite value at index k with value 
            // at index j in the temp array
            animations.push([k, tempArray[j]]);
            mainArray[k++] = tempArray[j++];
        }
    }

    while (i <= middleIdx) {
        // compare i and middle index
        animations.push([i, i]);
        // push again to revert their colour
        animations.push([i, i]);
        // overwrite value at index k in original array with value
        // at index i in the temp array
        animations.push([k, tempArray[i]]);
        mainArray[k++] = tempArray[i++];
    }

    while (j <= endIdx) {
        // compare j and end index
        animations.push([i, j]);
        animations.push([i, j]);
        // overwrite value at index k of original array with value
        // at index j of aux array
        animations.push([k, tempArray[j]]);
        mainArray[k++] = tempArray[j++];
    }
}