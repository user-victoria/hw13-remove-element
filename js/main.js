// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
console.log('array before', array);

function removeElement(allNumbersOfArray, numberToRemove) {
    const index = allNumbersOfArray.indexOf(numberToRemove);

    if (index === -1) {
        console.log('Here is not this number');
        return;
    }

    allNumbersOfArray.splice(index, 1);
}
removeElement(array, 5);
console.log('array after', array);