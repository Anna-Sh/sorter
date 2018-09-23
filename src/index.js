class Sorter {

    constructor() {
        this.array = []; //инициализируем пустой массив, в котором будем хранить данные
        this.comparatorFn = (a, b) => a - b //функция дефолтной сортировки для чисел
    }

    add(element) {
        this.array.push(element); //добавляем элементы массива по одному
    }

    at(index) {
        return this.array[index]; //возвращаем элемент массива с индексом index
    }

    get length() {
        return this.array.length; //получаем длину массива
    }

    toArray() {
        return this.array; //возвращаем массив, без глубокой копии
    }

    sort(indices) {

        indices.sort(); //сортируем выбранные индексы по возрастанию

        const toSort = []; //инициализируем массив элементов, которые нуждаются в сортировке

        for (let index of indices) {
            toSort.push( this.array[index] ) //добавляем элементы
        }

        toSort.sort( this.comparatorFn ); //сортируем мини-массив функцией-компаратором

        for (let i=0; i<toSort.length; i++) {
            this.array.splice(indices[i], 1, toSort[i]) //меняем выбранные элемены массива,
                                                        // расставляя их в соответствии с сортировкой
        }

    }

    setComparator(compareFunction) {
        this.comparatorFn = compareFunction //меняем дефолтную функцию-компаратор на выбранную пользователем
    }
}


module.exports = Sorter;