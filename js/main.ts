    /*
        Метод для фильтрации обьектов по условию
        Имеет два аргумента: обьект и фильтр с ценной
    */
        function allFilterCorses(course: object[], filters: any[]): object[] {
            const priceMin = filters[0];
            const priceMax = filters[1];
            let nameLengths = course.filter((task: any) => (((!priceMin || task.prices[0] <= priceMin && priceMin <= task.prices[1]) && (!priceMax || task.prices[0] <= priceMax <= task.prices[1] && task.prices[1] !== null)) || (task.prices[0] === null && task.prices[1] === null)));
            return nameLengths;
        }
        
      // Список курсов
        let courses: object[] = [
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
        function sortByColumn(arr: object[], colIndex: number, value: string = "min"){
    
        arr.sort(sortFunction);
    
        function sortFunction(a: any, b: any): number {
            if (a.prices[colIndex] === b.prices[colIndex]) {
                return 0;
            }
            else {
                if(value === "max"){
                    return (a.prices[colIndex] > b.prices[colIndex]) ? -1 : 1;
                }
                else{
                    return (a.prices[colIndex] < b.prices[colIndex]) ? -1 : 1;
                }
                
                } 
            }
            return arr;
        }
    
        // Варианты цен (фильтры), которые ищет пользователь
        let requiredRange1: [null, number] = [null, 200];
        let requiredRange2: [number, number] = [100, 350];
        let requiredRange3: [number, null] = [200, null];
    
        // Результат после фильтрации
        const result1 = allFilterCorses(courses, requiredRange1);
        const result2 = allFilterCorses(courses, requiredRange2);
        const result3 = allFilterCorses(courses, requiredRange3);
        
        // Элементы для вывода фильтраций
        const element1 = document.getElementById("result_1");
        const element2 = document.getElementById("result_2");
        const element3 = document.getElementById("result_3");
        if (element1 && element2 && element3) {
            element1.innerHTML = JSON.stringify(result1, null, 4);
            element2.innerHTML = JSON.stringify(result2, null, 4);
            element3.innerHTML = JSON.stringify(result3, null, 4);
        }

        // Результат после сортировки
        sortByColumn(result1, 0);
        sortByColumn(result2, 0);
        sortByColumn(result3, 0);
