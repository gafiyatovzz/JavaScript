/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Важны только символы: пробелы и знаки
 * препинания не учитывайте.
 * 
*/

function anagram(str1, str2) {
    if ([...str1.toLowerCase()].sort().toString() === [...str2.toLowerCase()].sort().toString()){
        return true;
    }
    return false;
}

console.log(anagram('FInder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false