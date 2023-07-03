function bubbleSort(arr) {
    return arr.reduce((sortedArray, currentValue, index) => {
        console.log(sortedArray,currentValue,index)
        if (index === 0) {
        sortedArray.push(currentValue);
      } else {
        let inserted = false;
        for (let i = 0; i < sortedArray.length; i++) {
          if (currentValue < sortedArray[i]) {
            sortedArray.splice(i, 0, currentValue);
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          sortedArray.push(currentValue);
        }
      }
      return sortedArray;
    }, []);
  }
  
  const unsortedArray = [5, 3, 8, 1, 2, 7];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 7, 8]
  

