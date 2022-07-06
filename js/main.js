/*
    Метод для фильтрации обьектов по условию
    Имеет два аргумента: обьект и фильтр с ценной
*/
function allFilterCorses(course, filters) {
    var priceMin = filters[0];
    var priceMax = filters[1];
    var nameLengths = course.filter(function (task) { return (((!priceMin || task.prices[0] <= priceMin && priceMin <= task.prices[1]) && (!priceMax || task.prices[0] <= priceMax <= task.prices[1] && task.prices[1] !== null)) || (task.prices[0] === null && task.prices[1] === null)); });
    return nameLengths;
}
// Список курсов
var courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
// Функция для сортировки массива по минимальной цене
function sortByColumn(arr, colIndex, value) {
    if (value === void 0) { value = "min"; }
    arr.sort(sortFunction);
    function sortFunction(a, b) {
        if (a.prices[colIndex] === b.prices[colIndex]) {
            return 0;
        }
        else {
            if (value === "max") {
                return (a.prices[colIndex] > b.prices[colIndex]) ? -1 : 1;
            }
            else {
                return (a.prices[colIndex] < b.prices[colIndex]) ? -1 : 1;
            }
        }
    }
    return arr;
}
// Варианты цен (фильтры), которые ищет пользователь
var requiredRange1 = [null, 200];
var requiredRange2 = [100, 350];
var requiredRange3 = [200, null];
// Результат после фильтрации
var result1 = allFilterCorses(courses, requiredRange1);
var result2 = allFilterCorses(courses, requiredRange2);
var result3 = allFilterCorses(courses, requiredRange3);
// Элементы для вывода фильтраций
var element1 = document.getElementById("result_1");
var element2 = document.getElementById("result_2");
var element3 = document.getElementById("result_3");
if (element1 && element2 && element3) {
    element1.innerHTML = JSON.stringify(result1, null, 4);
    element2.innerHTML = JSON.stringify(result2, null, 4);
    element3.innerHTML = JSON.stringify(result3, null, 4);
}
// Результат после сортировки
sortByColumn(result1, 0);
sortByColumn(result2, 0);
sortByColumn(result3, 0);
