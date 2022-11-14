<template>
    <div>
        <h1>Lodash là gì?</h1>
        <p>
            Lodash là một thư viện tiện ích JavaScript nhất quán, các modules có hiệu suất cao, <br>
            và quan trọng rất mạnh mẽ bao gồm hầu hết các điểm chức năng logic có thể gặp trong quá trình phát triển
            front-end. <br>
            Sử dụng Lodash có thể cải thiện đáng kể hiệu quả phát triển của mỗi dự án. <br>
            <br>
            <b>Cài đặt</b> : npm i --save lodash <br>
            - Khi sử dụng ta <b>import _ from "lodash"</b> hoặc có thể khai báo ở <b>Global</b>
            và sau đó sử dụng bình thường
        </p>
        <h1>1 số methods thông dụng</h1>
        <h2>Array:</h2>
        <p>
            <b>1 _.chunk(array, [size=number])</b>: Tạo một mảng mới từ mảng đã có, gồm các mảng con có số phần tử tùy
            chọn truyền vào. Nếu không truyền size, mặc định sẽ = 1 <br>
            const array = [1,2,3,4] <br>
            _.chunk(array,1) => [[1],[2],[3],[4]] <br>
            _.chunk(array,2) => [[1,2],[3,4]] <br>
            _.chunk(array,3) => [[1,2,3],[4]] <br>
            <br>
            <b>2 _.compact(array)</b> : Tạo ra một mảng mới và loại bỏ tất cả các giá trị falsy ( false, null, 0, "",
            undefined, vàNaN ) <br>
            const array = [1,2,"a", 0, null, "b", false] <br>
            _.compact(array) => [1,2,"a","b"] <br>
            <br>
            <b>3 _.concat(array, [values])</b> : Tạo ra mảng mới bằng cách nối nối mảng lại với nhau hoặc thêm giá trị
            mới vào. <br>
            const array = [1,2,3] <br>
            _.comcat(array,4) => [1,2,3,4] <br>
            -.comcat(array,[4],5,6) => [1,2,3,4,5,6] <br>
            -.comcat(array,[[4]],5,6) => [1,2,3,[4],5,6]<br>
            <br>
            <b>4 _.drop(array, [n=1])</b> : Tạo ra mảng mới và loại bỏ các giá trị từ vị trí đầu tới vị trí n. Nếu không
            khai báo n thì mặc định là 1. <br>
            tương tự ta có <b>_.dropRight(array, [n=1])</b> là lấy từ bên phải array <br>
            const array = [1,2,3,4,5] <br>
            _.drop(array) => [2,3,4,5] <br>
            _.drop(array,2) => [3,4,5] <br>
            _.drop(array,5) => [] <br>
            <br>
            <b>5 _.pull( array, x)</b> pull array (loại bỏ phần tử được chỉ định) <br>
            lodash.pull([1, 2, 3, 1, 2, 3], 2, 3) <br>
            // [1, 1] <br>
            <br>
            <b>6 _.flattenDeep(Array)</b> flattenDepth (thu gọn thành mảng một chiều) <br>
            lodash.flattenDepth([1, [2, [3, [4]], 5]], 3) <br>
            [1, [2, [3, [4]], 5]].flat(Infinity) - trong ES6 <br>
            // [1, 2, 3, 4, 5] <br>
            <b>ngoài ra ta có:</b> <br>
            <b>_.flattenDepth(array, [depth=number])</b> : là phẳng array theo cấp <br>
            var array = [1, [2, [3, [4]], 5]]; <br>
            <br>
            _.flattenDepth(array, 1); <br>
            // => [1, 2, [3, [4]], 5] <br>

            _.flattenDepth(array, 2); <br>
            // => [1, 2, 3, [4], 5] <br>
            <br>
            <b>7 _.zipObject([['key', value], ['key', value]])</b> chuyển mảng 2 phần tử thành chuỗi key - value <br>
            lodash.zipObject([['fred', 30], ['barney', 40]]) <br>
            Object.fromEntries([['fred', 30], ['barney', 40]]) <br>
            // {fred: 30, barney: 40} <br>
            <br>
            <b>8 _.takeRight(Array, number)</b> takeRight (trả về một lát mảng gồm n phần tử từ phần tử cuối) <br>
            const [beforeLast, last] = lodash.takeRight([1, 2, 3, 4], 2) <br>
            console.log(beforeLast, last) // 3 4 <br>
            <br>
        </p>
        <h1> Ngoài ra còn rất nhiều hàm khác</h1>
        <p>
            <b>_.chunk(array, [size=1])</b> tự chia array thành các mảng nhỏ có số phần tử là size, phần thừa còn lại
            cũng là 1 mảng <br>
            _.chunk(['a', 'b', 'c', 'd'], 2); <br>
            // => [['a', 'b'], ['c', 'd']] <br>
            <br>
            _.chunk(['a', 'b', 'c', 'd'], 3); <br>
            // => [['a', 'b', 'c'], ['d']] <br>
            <br>
            <b>_.fill(array, value, [start=0], [end=array.length]) </b> thay thế giá trị vào mảng, chọn điểm đầu và điểm
            kết thúc <br>
            array (Array): mảng cần thay đổi <br>
            value (*): giá trị thay thế <br>
            [start=0] (number): điểm bắt đầu thay thế tính bằng index <br>
            [end=array.length] (number): điểm kết thúc, vd là 3 thì index chỉ là 2 <br>
            var array = [1, 2, 3]; <br>

            _.fill(array, 'a'); <br>
            console.log(array); <br>
            // => ['a', 'a', 'a'] <br>

            _.fill(Array(3), 2); <br>
            // => [2, 2, 2] <br>

            _.fill([4, 6, 8, 10], '*', 1, 3); <br>
            // => [4, '*', '*', 10] <br>
            <br>
            <b>_.head(array)</b> : lấy phần tử đầu tiên của mảng <br>
            _.head([1, 2, 3]); <br>
            // => 1 <br>

            _.head([]); <br>
            // => undefined <br>
            <br>
            <b>_.indexOf(array, value, [fromIndex=0])</b> : tìm ra index đầu tiên của giá trị cần tìm trong mảng <br>
            _.indexOf([1, 2, 1, 2], 2); <br>
            // => 1 <br>

            // Search from the `fromIndex`. <br>
            _.indexOf([1, 2, 1, 2], 2, 2); <br>
            // => 3 <br>
            <br>
            <b>_.initial(array)</b> lấy tất cả giá trị của array trừ phần tử cuối mảng <br>
            _.initial([1, 2, 3]); <br>
            // => [1, 2] <br>
            <br>
            <b>_.intersection([arrays1], [arrays2])</b> tạo 1 mảng mới có chứa các giá trị chung nhau của các mảng,
            index xếp theo index phần tử của mảng phía trước <br>
            _.intersection([2, 1], [2, 3]); <br>
            // => [2] <br>
            <br>
            <b>_.intersectionBy([arrays1], [arrays2], [iteratee=_.identity])</b> tạo mảng mới và có điều kiện cho từng
            phần tử của mảng mới <br>
            _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); <br>
            // => [2.1] ===>>> Math.floor chạy qua từng phần tử của mảng array1 và array2 sau đó lọc điều kiện trước rồi
            tạo mảng mới sau <br>
            <br>







        </p>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>