# ES6语法

## let const
```
// 常规
{
  const PI = 3.1415
  const PI = 3 // TypeError
  const OBJ = {}
  OBJ.a = a // true
}
// 解构赋值
{
  let a, b, c
  [a, b, ...c] = [1, 2, 3, 4, 5]
  console.log(a, b, c) // a, 2, [3, 4, 5]
  ({a, b} = {a: 1, b: 2}) 
  console.log(a, b) // 1, 2
}

{
  let a = 1, b = 2, c
  [a, b, c = 3] = [1, 2]
  console.log(a, b, c) // 1, 2, 3
  [a, b] = [b, a]
  console.log(a, b) // 2, 1
}

{
  function f() {
    return [1, 2, 3, 4]
  }
  let a, b
  [a, ...b] = f()
  console.log(a, b) // 1, [2, 3, 4]
  [a,,,b] = f()
  console.log(a, b) // 1, 4
}

{
  let o = {a: 1, b: 2}
  let {a, b} = o
  console.log(a, b) // 1, 2
}

{
  let {a = 10, b = 20} = {a: 1}
  console.log(a, b) // 1, 20
}

{
  let data = {
    title: 'title0',
    data: {
      title: 'title1',
      data: 'data1'
    }
  }

  let {title: t1, data: {title: t2}} = data
  console.log(t1, t2) // title0, title1
}
```

## 字符串
```
{
  let str = 'string'
  console.log(str.includes('s')) // true
  console.log(str.startsWith('str')) // true
  console.log(str.endsWith('ing')) // true
}

{
  let str = 'string'
  console.log(str.repeat(2)) // stringstring
}

{
  let name = 'lili'
  let info = 'hello world'
  console.log(`my name is ${name}, ${info}`) // my name id lili, hello world
}
```

## 数组扩展
```
{
  let arr = Array.of(1, 2, 3, 4, 5)
  console.log(arr) // [1, 2, 3, 4, 5]
  console.log(
    Array.from([1, 2], function (item) {
      return item * 2
    })
  ) // [2, 4]
}

{
  let a = {a: 1, b: 2}
  for (let index of [9, 8].keys()) {
    console.log(index)
  }
  // 0, 1
  for (let value of [9, 8].values()) {
    console.log(value)
  }

  for (let [index, value] of [9, 8].entries()) {
    console.log(index, value)
  }
  // 0 9, 1 8

  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5)) // [4, 5, 3, 4, 5]

  console.log(
    [1, 2, 3, 4, 5].find(function (item) {
      return item > 3
    })
  ) // 4 第几个

  console.log(
    [1, 2, 3, 4, 5].findIndex(function (item) {
      return item > 3
    })
  ) // 3 下标
  console.log([1, 2, NaN].includes(1)) // true
  console.log([1, 2, NaN].includes(NaN)) // true
  console.log([1, 2, NaN].includes('1')) // false
}
```

## 函数扩展
```
{
  
}
```
