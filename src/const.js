// ES5 中常量的写法

/**
 * value为Windows的属性，writable是代表是否只读
 */
Object.defineProperty(window, "PI2", {
    value: 3.1415926,
    writable: false,
})

/**
 * 下面方法虽然可以声明PI3为window的属性，但并不是只读属性
 */
// window.PI3 = {
//   value: 3.1415926,
//   writable: false
// }
// console.log(window)
// console.log(window.PI3)
/**
 * 无法对该属性进行重新赋值操作
 */
// window.PI2 = 4
console.log(window.PI2)

// ES6 的常量写法

const PI = 3.1415926
console.log(PI)

// PI = 4
