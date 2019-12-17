/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/


function fibonacci (n) {
    let a = 1;
    let b = 1;

    if (n <= 1) {
        return 0;
    } 
    
    for (let i = 4; i <= n; i++) {
        let c = a + b;
            a = b;
            b = c;
    }
    return b;
}

console.log(fibonacci(1)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)