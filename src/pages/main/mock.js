const articleList = {
  "data": [
      {
          "articleId": 1621241906,
          "title": "遍历对象",
          "introduce": "这三个 API 很常用,但是它们有自己的局限,",
          "article_content": "# Object.keys()、Object.values()、Object.entries() 对象属性的遍历 Full\n\n## 原生 API \n\n在之前的文章中,我们提到过三个遍历对象属性的原生 API ——Object.keys(),Object.values(),Object.entries().\n\n这三个 API 很常用,但是它们有自己的局限,在上文中提到过,首先它们三者都对 \"不可遍历\" 的属性 \"无可奈何\",其次对于 \"Symbol\" 属性,它们同样也无法遍历.所以在这里我们要 系统 的上述一下对象属性遍历的内容.\n\n刚刚我们提到过,对象的属性有时是不可枚举的,那么什么时候属性不可枚举,为什么要存在这种不可枚举的属性呢?这些问题都牵扯到早起 Java Script 的历史.\n\n以 JavaScript 为首的 ECMAScript 语言不通与 Java 等面向对象的语言.在 Java 语言的设计里,\"对象\" 这一概念是作为 \"类\" 的衍生品存在的,在 Java 中 \"对象\" 是 \"类\" 的实例化,就像是鸡和蛋的关系一样,没有鸡就没有蛋.但是 JavaScript 不同,在设计之初,JavaScript 是没有类这一概念的.\n\n## 早期的 [web](http://web.h3399.cn/) 时代\n\n在早期的 [web](http://web.h3399.cn/) 时代,\"对象\" 是 \"程序员手写的大括号\",小工程一般也就是几十个对象之间的互动罢了,如果工程较大的话,那就写一个函数,在函数(构造函数)中 \"return 对象\",在对象之间设定原型关系,组成原型链来继承属性和方法(提高复用性).\n\n之后过去了几年(ES3 的时代),web 工程的需求和工作量激增,之前的三板斧不好用了,在这个时间段里,如果工程里的对象都是手写的话,程序员早就累死了,没办法,一些高端的 web 程序员,巧妙地用 \"构造函数\" 和 \"this 指针\" 实现了 \"类\",用 \"apply 和 call\" 方法实现了 \"类的继承\",进而实现 \"接口\",\"抽象类\" 等基础概念和 \"众多设计模式\".此时前端程序员开始用 \"类似传统面向对象\" 的工作方式来开发 web 程序.\n\n但巧妇难为无米之炊,在应用的层面上实现语言层该有的东西,总是难以尽善尽美,例如,虽然技术高超的 web 程序员能够实现 \"类\" 这一机制,但是无法实现类中 \"私有成员\" 这一机制(事实上直到今天 ES6 里也没有实现这一功能).程序员们此时大多彼此约定,变量名中以下划线开头的变量,是我代码里的私有便令,你写程序的时候就是看见了它也别用它.\n\n再后来 ES5.1 的时代到来了.此时正值 ES4 刚刚宣布开发失败不旧,没有什么强有力的语法更新,class 等机制也没有登台,ECMAScript 组织就在 Object 上面增加了一些补丁,其中很重要的一点就是,对象的属性开始有了 \"特性\" 这一概念.\n\n所谓 \"属性的特性\" 指的是属性的一些性质,例如 \"可读性\",\"可写性\",\"可枚举性\" 和 \"可继承性\" 等.此时 \"class\" 仍然只是一种开发技巧,在语言的层面上,ECMA 仍然认为,ECMAScript 是一种基于对象开发的语言,所以,ECMA 就说,如果对于一个对象来说,我有属性 A,但是你不可以枚举它,不可以 write 它,甚至你不能 read 它,那它和 \"私有\" 的又有什么区别呢?\n\n故此,在 ECMAScript5.1 版本中,增加了一些设置属性特性的 API,对象的属性有些变得不可枚举.进而造成了之前我们说的遍历对象属性时的那些问题.\n\n那么总结一下,属性遍历的方法有几种呢?——五种:\n\n## 三种遍历\n\n利用 for...in 循环遍历属性；——循环对象自身的属性,对象继承来的属性,不会遍历不可枚举的属性,不会遍历 Symbol 属性.\n\n利用 Object.keys(obj),Object.values(Obj),Object.entries(Obj) 遍历属性；\n\n利用 Object.getOwnPropertyName(Obj) 遍历属性；——返回一个数组,返回对象自身所有的除了 Symbol 属性之外的所有属性(包括不可枚举的属性)的键名.\n\n利用 Object.getOwnPropertySymbols(Obj) 遍历属性；——返回一个数组,包含对象自身所有 Symbol 属性键名.利用 Relect.ownKeys(obj) 遍历属性；返回一个数组,包含对象自身所有属性,无论键名是否是 Symbol,也不管属性是否可枚举. 以上的 5 中方法,在遍历对象键名的时候,都遵循同样的遍历次序,规则如下: 首先遍历所有数值键,按照从小到大的顺序排列 其次遍历所以字符串键,按照加入时间顺序,升序排列. 最后遍历所有 Symbol 键,按照时间顺序,升序排列.",
          "addTime": "2021-05-17 00:00:00",
          "view_count": 1011,
          "typeName": "js"
      },
      {
          "articleId": 1621244765,
          "title": "原始类型",
          "introduce": "在 JS 中，存在着 7 种原始类型",
          "article_content": "#  1. esType\n\n## 原始类型\n\n在 JS 中，存在着 7 种原始类型，分别是：\n\n- `Boolean`\n- `Null`\n- `Undefined`\n- `Number`\n- `String`\n- `Symbol`\n- `BigInt`\n\n原始类型存储的是值，没有函数可以调用。\n\n那么有个问题，为什么`'1'.toString()`是正确的呢？\n\n原因在于在这种情况下，`'1'`已经被强转成了`String`类型。\n\n> 引用数据类型: 对象Object（包含普通对象-Object，数组对象-Array，正则对象-RegExp，日期对象-Date，数学函数-Math，函数对象-Function）\n\n```js\nfunction test(person) {\n  person.age = 18\n  person = {\n    name: 'Andy',\n    age: 19\n  }\n  return person\n}\nconst p1 = {\n  name: 'sq',\n  age: 20\n}\nconst p2 = test(p1)\nconsole.log(p1) // -> ?\nconsole.log(p2) // -> ?\n```\n\n结果:\n\n```js\np1：{ name: 'sq', age: 18 }\np2: { name: 'Andy', age: 19 }\n```\n\n> 原因: 在函数传参的时候传递的是对象在堆中的内存地址值，test函数中的实参person是p1对象的内存地址，通过调用person.age = 18确实改变了p1的值，但随后person变成了另一块内存空间的地址，并且在最后将这另外一份内存空间的地址返回，赋给了p2。\n\n### 对象类型\n\n对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。\n\n当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。\n\n### 正确判断 null\n\n```js\nconsole.log(typeof null); //object\nObject.prototype.toString.call(null) // \"[object Null]\" \n```\n\n### typeof vs instanceof\n\n`typeof` 对于原始类型来说，除了 `null` 都可以显示正确的类型\n\n```js\ntypeof 1 // 'number'\ntypeof '1' // 'string'\ntypeof undefined // 'undefined'\ntypeof true // 'boolean'\ntypeof Symbol() // 'symbol'\n```\n\n`typeof` 对于对象来说，除了函数都会显示 `object`，所以说 `typeof` 并不能准确判断变量到底是什么类型.\n\n```js\ntypeof [] // 'object'\ntypeof {} // 'object'\ntypeof console.log // 'function'\n```\n\n如果我们想判断一个对象的正确类型，这时候可以考虑使用 `instanceof`，因为内部机制是通过原型链来判断的。\n\n```js\nconst Person = function() {}\nconst p1 = new Person()\np1 instanceof Person // true\n\nvar str = 'hello world'\nstr instanceof String // false\n\nvar str1 = new String('hello world')\nstr1 instanceof String // true\n```\n\n对于原始类型来说，你想直接通过 `instanceof` 来判断类型是不行的，当然我们还是有办法让 `instanceof` 判断原始类型的\n\n```js\nclass PrimitiveString {\n  static [Symbol.hasInstance](x) {\n    return typeof x === 'string'\n  }\n}\nconsole.log('hello world' instanceof PrimitiveString) // true\n```\n\n### 类型转换\n\n在` js `中，只有三种类型转换\n\n- 转换为布尔值\n- 转换为数字\n- 转换为字符串\n\n### 转Boolean\n\n在条件判断时，除了 `undefined`， `null`， `false`， `NaN`， `''`， `0`， `-0`，其他所有值都转为 `true`，包括所有对象。\n\n### 对象转原始类型\n\n一般非基础类型进行转换时会先调用 valueOf，如果 valueOf 无法返回基本类型值，就会调用 toString\n\n对象在转换类型的时候，会调用内置的 `[[ToPrimitive]]` 函数，对于该函数来说，算法逻辑一般来说如下：\n\n- 先检测该对象中是否存在 `valueOf` 方法，如果有并返回了原始类型，那么就使用该值进行强制类型转换；\n- 如果 `valueOf` 没有返回原始类型，那么就使用 `toString` 方法的返回值；\n- 如果 `vauleOf` 和 `toString` 两个方法都不返回基本类型值，便会触发一个 `TypeError` 的错误。\n\n也可以重写 `Symbol.toPrimitive` ，该方法在转原始类型时调用优先级最高。\n\n```js\nlet a = {\n  valueOf() {\n    return 0\n  },\n  toString() {\n    return '1'\n  },\n  [Symbol.toPrimitive]() {\n    return 2\n  }\n}\n1 + a // => 3\n```\n\n### 四则运算符\n\n加法运算符不同于其他几个运算符，它有以下几个特点：\n\n- 运算中其中一方为字符串，那么就会把另一方也转换为字符串。\n- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串\n\n```js\n1 + '1' // '11'\ntrue + true // 2\n4 + [1,2,3] // \"41,2,3\"\n```\n\n对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字\n\n```js\n4 * '3' // 12\n4 * [] // 0\n4 * [1, 2] // NaN\n```\n\n### 比较运算符\n\n- 如果是对象，就通过 `toPrimitive` 转换对象\n- 如果是字符串，就通过 `unicode` 字符索引来比较\n\n```js\nlet a = {\n  valueOf() {\n    return 0\n  },\n  toString() {\n    return '1'\n  }\n}\na > -1 // true\n```\n\n### == VS ===\n\n对于 `==` 来说，如果对比双方的类型**不一样**的话，就会进行**类型转换**.\n\n假如我们需要对比 `x` 和 `y` 是否相同，就会进行如下判断流程：\n\n1. 首先会判断两者类型是否**相同**。相同的话就是比大小了\n2. 类型不相同的话，那么就会进行类型转换\n3. 会先判断是否在对比 `null` 和 `undefined`，是的话就会返回 `true`\n4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换为 `number`\n5. 判断其中一方是否为 `boolean`，是的话就会把 `boolean` 转为 `number` 再进行判断\n6. 判断其中一方是否为 `object` 且另一方为 `string`、`number` 或者 `symbol`，是的话就会把 `object` 转为原始类型再进行判断\n\n对于 `===` 来说，就是判断两者类型和值是否相同\n\n[] == ![] 为何是 true？\n\n首先看右边，! 符号会将后面的变量强转为 boolean 值，由于 [] 转换为 boolean 是 true，故右边为 false，然后依照上方的第 5 条，将 false 转换为数字 0。\n\n然后看左边，满足第六条的条件，调用 valueOf，由于空数组调用 valueOf 是转化为 0 ，故返回值是 true。\n\n## 常见\n\n### 0.1 + 0.2 === 0.3 嘛？为什么？\n\n在两数相加时，会先转换成二进制，0.1 和 0.2 转换成二进制的时候尾数会发生无限循环，然后进行对阶运算，JS 引擎对二进制进行截断，所以造成精度丢失。\n\n所以总结：**精度丢失可能出现在进制转换和对阶运算中**\n\n### JS 整数是怎么表示的？\n\n通过 Number 类型来表示，遵循 IEEE754 标准，通过 64 位来表示一个数字，（1 + 11 + 52）（1 位数符 + 11 位阶码 + 52 位尾数），最大安全数字是 Math.pow(2, 53) - 1。（符号位 + 指数位 + 小数部分有效位）\n\n### `symbol` 有什么用处\n\n可以用来表示一个独一无二的变量防止命名冲突。\n\n可以利用 `symbol` 不会被常规的方法（除了 `Object.getOwnPropertySymbols` 外）遍历到，所以可以用来模拟私有变量。\n\n主要用来提供遍历接口，布置了 `symbol.iterator` 的对象才可以使用 `for···of` 循环，可以统一处理数据结构。调用之后回返回一个遍历器对象，包含有一个 next 方法，使用 next 方法后有两个返回值 value 和 done 分别表示函数当前执行位置的值和是否遍历完毕。\n\nSymbol.for() 可以在全局访问 symbol。\n\n### {} + [] 和 [] + {} 的区别\n\n```js\n[] + {} // \"[object Object]\"\n{} + [] // 0\n```\n\n看第一个，[] 会强转为 \"\"，{}强转为字符串为 `\"[object Object]\"`。两个字符串相加，得到最终结果。\n\n第二个，编译器会把 {} 当作一个空代码块，可以理解为全局作用域下一个没有用的 {} 符号而已，可以把 `{} + []` 当作 `+ []`，而`+ []`是强制将`[]`转换为number ,转换的过程是 `+ []` --> `+\"\"` -->`0` 最终的结果就是0。\n\n但是我们执行`console.log({}+[])`和`console.log([]+{})`,结果是一样的，因为{}没有一个语句或者表达式的头部。\n\n### Symbol 类型转换\n\n- 不能被转换为数字\n- 能被转换为布尔值（都是 true）\n- 可以被转换成字符串 \"Symbol(cool)\"\n\n### 假值列表\n\n- undefined\n- null\n- false\n- +0, -0, NaN\n- \"\"\n\n### NAN 以及 typeof NAN\n\nNaN 指的是 Not a Number，表示非数字，typeof NaN = 'number'\n\n##  js中`==`和`===`区别\n\n### 简单概要\n\n简单来说： == 代表相同， ===代表严格相同, 为啥这么说呢， \n\n这么理解： 当进行双等号比较时候： 先检查两个操作数数据类型，如果相同， 则进行\\=\\==比较， 如果不同， 则愿意为你进行一次类型转换， 转换成相同类型后再进行比较， 而\\=\\==比较时， 如果类型不同，直接就是false.\n\n操作数1 == 操作数2， 操作数1 === 操作数2\n\n比较过程：\n\n> 双等号==： \n\n```js\n　　（1）如果两个值类型相同，再进行三个等号(===)的比较\n\n　　（2）如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：\n\n　　　　a）如果一个是null，一个是undefined，那么相等\n\n　　　　b）如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较\n```\n\n> 三等号===:\n\n```js\n　　（1）如果类型不同，就一定不相等\n\n　　（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）\n\n　　（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。\n\n　　（4）如果两个值都是true，或是false，那么相等\n\n　　（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等\n\n　　（6）如果两个值都是null，或是undefined，那么相等.\n```\n\n## 判断数据类型\n\n本文将通过下方知识点，来讲解判断 JavaScript 数据类型的 4 种方法：\n\n- `typeof()`\n- `instanceof()`\n- `constructor`\n- `Object.prototype.toString.call()`\n\n不管是面试中，亦或在工作上，会出现这么个场景：\n\n- **如何判断某个 JavaScript 字段的数据类型？**\n\n当然，它还可能是某个知识点的附赠品，例如：\n\n- **当你进行深拷贝数据的时候，你是如何判断这个字段是什么类型的？你知道判断数据类型有几种方式么？它们优缺点在哪？**\n\n那么，本文来讲解下，判断 JavaScript 数据类型的四种方法！\n\n### 三 typeof\n\n```js\n/**\n * @name typeof示例\n * @description 通过 typeof 检测各个数据类型的返回\n */\nconst test = {\n  testUndefined: undefined,\n  testNull: null,\n  testBoolean: true,\n  testNumber: 123,\n  testBigInt: BigInt(1234), // 大于 2 的 53 次方算 BigInt\n  testString: '123',\n  testSymbol: Symbol(),\n  testFunction: function() {\n    console.log('function');\n  },\n  testObject: {\n    obj: 'yes',\n  },\n  testObjectString: new String('String'),\n  testObjectNumber: new Number(123),\n}\n\nconsole.log(typeof(test.testUndefined)); // undefined\nconsole.log(typeof(test.testNull));      // object\nconsole.log(typeof(test.testBoolean));   // boolean\nconsole.log(typeof(test.testNumber));    // number\nconsole.log(typeof(test.testBigInt));    // bigint\nconsole.log(typeof(test.testString));    // string\nconsole.log(typeof(test.testSymbol));    // symbol\nconsole.log(typeof(test.testFunction));  // function\nconsole.log(typeof(test.testObject));    // object\nconsole.log(typeof(test.testObjectString));    // object\nconsole.log(typeof(test.testObjectNumber));    // object\n```\n\n如上，可以看出，通过 `typeof`，我们可以判断大多数的类型，但是，它存在缺陷：\n\n1. 判断 `typeof null`，会得到 `object`；\n2. 判断构造函数 `typeof new String('String')` 或者 `typeof new Number(123)` 等……，也会得到 `object`。\n\n即通过 `typeof` 进行数据类型判断会有一定的问题。\n\n\n\n### 四 instanceof\n\n```js\n/**\n * @name instanceof示例1\n * @description 检测字符串类型\n */\nconst simpleString = '这是简单的 String';\nconst newString = new String('这是 New 出来的 String');\n\nconsole.log(simpleString instanceof String); // false，检查原型链会返回 undefined\nconsole.log(newString instanceof String); // true\n\n/**\n * @name instanceof示例2\n * @description 检测数字类型\n */\nconst simpleNumber = 123;\nconst newNumber = new Number(123);\n\nconsole.log(simpleNumber instanceof Number); // false\nconsole.log(newNumber instanceof Number); // true\n\n/**\n * @name instanceof示例3\n * @description 检测对象类型\n */\nconst simpleOjbect = {};\nconst newObject = new Object();\n\nconsole.log(simpleOjbect instanceof Object); // true\nconsole.log(newObject instanceof Object); // true\n```\n\n如上，`instanceof` 可能表现的差强人意，虽然它是可以检测数据类型，但是对于 `'' instanceof String` 以及 `123 instanceof Number` 等会返回 `false`，不太满足我们需求。\n\n其实 `instanceof` 主要用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上，这块知识点到时候我们可以进一步进行学习探索。（一件值得期待的事）\n\n\n\n### 五 constructor\n\n```js\n/**\n * @name constructor示例\n * @description constructor 检测对象类型\n */\nconst arr = [];\nconsole.log(arr.constructor === Array); // true\n\nconst obj = {};\nconsole.log(obj.constructor === Object); // true\n\nconst num = 1;\nconsole.log(num.constructor === Number); // true\n\nconst str = '1';\nconsole.log(str.constructor === String); // true\n\nconst bool = true;\nconsole.log(bool.constructor === Boolean); // true\n\nconst nul = null;\n// console.log(nul.constructor); // 报错：Uncaught TypeError: Cannot read property 'constructor' of null at <anonymous>:1:5\n\nconst undefin = undefined;\n// console.log(undefin.constructor); // 报错：Uncaught TypeError: Cannot read property 'constructor' of null at <anonymous>:1:5\n```\n\n`constructor` 和前面的 `typeof`、`instanceof` 不同，`typeof` 和 `instanceof` 是属于 **表达式和运算符** 分类下的，而 `constructor` 是直接关系到内置对象 `Object` 下。\n\n当然，这里我们讲的是校验数据类型，通过 `[].constructor === Array` 或者 `(1).constructor === Number` 会返回 `true`，符合我们的预期。\n\n但是很遗憾的表示，当你使用 `null.constructor` 或者 `undefined.constructor` 它会毫不留情的给你报：`Uncaught TypeError: Cannot read property 'constructor' of null at <anonymous>:1:5`，所以我们也不能强行使用 `constructor` 来做深拷贝时候的判断数据类型。\n\n\n\n\n### 六Object.toString.call()\n\nObject.prototype.toString.call()\n\n```js\n/**\n * @name toString示例\n * @description toString 检测对象类型\n */\nconst toString = Object.prototype.toString;\n\nconsole.log(toString.call(new Date));     // [object Date]\nconsole.log(toString.call(new String));   // [object String]\nconsole.log(toString.call(Math));         // [object Math]\nconsole.log(toString.call('feHuang'));    // [object String]\nconsole.log(toString.call(123));          // [object Number]\nconsole.log(toString.call([]));           // [object Array]\nconsole.log(toString.call({}));           // [object Object]\nconsole.log(toString.call(undefined));    // [object Undefined]\nconsole.log(toString.call(null));         // [object Null]\n```\n\n在前面三种心有余而力不足的情况下，`Object.prototype.toString.call()` 就显得稳定而实用了。\n\n如果你看过 jQuery 源码，你会发现它的数据类型检测也是通过这个实现的（`jQuery.type(obj)`）。\n\n在检测数据类型方面，你不管检测 `Object.prototype.toString.call('aaa')`、`Object.prototype.toString.call(null)` 亦或者 `Object.prototype.toString.call(undefined)` 都能得到你要的类型格式：`[object String]`、`[object Null]`、`[object Undefined]`。\n\n\n\n#3# 七 总结\n\n如上，通过对比，我们得出结论，在进行 JavaScript 数据类型判断的时候，推荐使用：\n\n- `Object.prototype.toString.call()`\n\n当然，写到这里，虽然我们的文章看起来可能简洁短小点，但是 **jsliang** 已经感觉讲出了这四种方法在判断数据类型上的优缺点。\n\n同时，如果小伙伴有跟着链接走起，你会发现可以涉及更多的知识点，例如：\n\n- `apply()`\n- `bind()`\n- `call()`\n- `apply()、bind() 以及 call() 的区别`\n- \n\n<span class=\"bottom-bar-item\" style=\"right:20px\"><a href=\"#\">回顶部↑</a></span>\n\n",
          "addTime": "2021-05-17 00:00:00",
          "view_count": 1090,
          "typeName": "js"
      },
      {
          "articleId": 1621868681,
          "title": " Git 分支管理",
          "introduce": "- Production-ready code 与 developing code 的分离\n- Do one thing, do it well. 每个分支的目的性明确，只做一件事。\n- 多功能可以并行开发，且新功能与 hot fix 可以同步进行。",
          "article_content": "# Git 分支管理\n\n## Git branch 中蕴含的哲学\n\n- Production-ready code 与 developing code 的分离\n- Do one thing, do it well. 每个分支的目的性明确，只做一件事。\n- 多功能可以并行开发，且新功能与 hot fix 可以同步进行。\n\n\n\n## 简化 branch new-branch & checkout new-branch 操作\n\n```bash\n$ git checkout -b <new-branch> \n```\n\n## 应用场景：加入一个临时功能，并在活动结束后去掉\n\ngit merge 默认是 fast-forward, 即合并分支后，从 log 中去掉了分支历史。\n\n所以，要满足这个需求，就需要禁用这个功能。\n\n```bash\n$ git merge <new-feature> --no-ff\n```\n\n同时，git 会创建一个 merge commit.\n\n## 之前整理的笔记\n\nUnlike many other VCSs, Git encourages a workflow that branches and merges often, even multiple times in a day. Understanding and mastering this feature gives you a powerful and unique tool and can literally change the way that you develop.\n\n无论是添加新功能，还是修改bug。都应先建立一个对应的分支，完成后，合并到主分 支。这样就能保证，在开发新功能的同时，如果有一个紧急的bug需要修改，我就可以 切回主分支进行修改(先提交修改), 其实是回到 master 分支，再开一个分支，而不会 造成因当前修改过大，短时间无法发布 bug fix 版本。\n\n> 注意：`每次建立分支，或者切换分支前，都需要把当前的修改提交，否则切换到其他分支也能 看到这些未提交的修改，working directory 下的文件不会恢复到指定文档的版本.`\n\n建立分支\n\n```bash\n$ git branch <branch_name>\n```\n\n切换到指定分支\n\n```bash\n$ git checkout <branch_name>\n```\n\nMerge\n\n先切换到需要合并到的分支，例如 master, 然后 merge\n\n```bash\n$ git checkout master\n$ git merge <branch_name>\n```\n\n如果有冲突，使用 mergetool\n\n```bash\n$ git mergetool\n```\n\n再手动提交修改\n\n删除无用分支\n\n```bash\n$ git branch -d <branch_name>\n```\n\n列出所有分支，并显示当前所处分支\n\n```bash\n$ git branch\n$ git branch -v\n```\n\n列出所有分支的关系\n\n```bash\n$ git log --graph --all --decorate --oneline\n$ git log --graph --all --decorate --simplify-by-decoration\n```\n\n列出指定分支的关系\n\n```bash\n$ git log --graph --all --decorate --simplify-by-decoration <b1> <b2>\n```\n\n## 参考\n\n- [Git工作流指南：Gitflow工作流](http://blog.jobbole.com/76867/)\n\n##  保留/丢弃当前分支修改并切换至其他分支\n\n笔者在本地终端进行 git 工作目录的相关处理时，遇到由于某种情况需要使用 git checkout 命令切换到其他分支的情景。此时，若已经对当前分支做了一定的修改，则直接切换分支时 git 会提示错误信息。本文即总结下笔者目前了解和使用的 git 切换到其他分支冲突时的解决方案。\n\n问题\n\n　　当本地遇到特殊情况，需要切换到其他分支时，当前分支可能会存在以下两种可能：\n\n```bash\n//(1) 对当前分支并未进行任何修改，从而可以直接使用 git checkout 命令切换到其他分支。\n\ngit checkout test        //切换到 test 分支\n　　(2) 若当前的分支已经做了一定的修改，则直接进行分支切换时，git 会产生如下错误信息。这是由于已经对当前分支进行了修改，但尚未保存而导致的。\n\n　　error: Your local changes to the following files would be overwritten by checkout : xxxx　\n\n　　Please commit your changes or stash them before you switch branches\n```\n\n　　下面描述当前分支存在修改时，切换到其他分支的解决方案。具体而言，选择包括简单的丢弃当前分支的修改和保存当前分支信息，待其他分支完成后再进行恢复等，用户可根据不同的需要选用不同的方案。\n\n \n\n### 丢弃本分支的修改\n\n　　下面的方法直接将当前分支相对上一次提交时的修改丢弃，从而可以从当前分支切换至其他分支，主要适合于对当前分支的改动较少，且不存在丢弃修改产生的问题的情况。用户可以使用不同的命令实现丢弃本地分支的修改。\n\n　　通过 git checkout -f 命令强制切换分支\n\n　　当用户对当前分支的修改不是特别重要或觉得没有保留的必要时，可以使用 git checkout 命令强制切换到其他分支。再切换回该分支时，会直接退回到该分支上一次提交时的数据版本。\n\n```bash\ngit checkout -f test        //强制切换至 test 分支，丢弃当前分支的修改\n```\n\n　　通过 git reset --hard 回退至某次提交时的数据\n\n　　如果只需要保持当前分支上一次提交时的数据，而不需要目前添加的任何修改，可以使用 git log 查看当前分支的提交记录。再通过 git reset --hard 命令将当前分支回退到前一次提交时的数据，此时当前分支针对上一次提交的修改均被抹除，注意 git reset --hard 在运行时不会有提示，所以使用前请保证新增的修改是可丢弃的。\n\n```bash\n　　通过 git log 查看当前分支的提交记录。\n\n    git log        //当前分支的提交记录，信息包括提交对应的 哈希值 作者 邮箱 日期 描述 等\n　　通过 git reset --hard 命令回退到某一次提交的版本，上述命令只需要使用特定提交的哈希值的开始若干位作为参数，即可退回该提交时的数据。\n\n    git reset --hard a13f52f3        //当前分支数据重置到哈希值开始部分为 a13f52f3 的提交的数据，git reset --hard 参数为某次提交时的哈希值的开始部分\n　　当重置完成后，当前分支的数据即为被 git 记录的未经修改的数据，此时可以直接通过 git checkout 命令切换到其他分支，而不会再产生报错。\n\n　　\n　　通过 git checkout -- 命令忽略文件的修改\n```\n\n　　当使用 git status 查看当前分支的文件状态时，对于不同的文件状态，git status 会提示该状态下的文件可以使用的对应 git 命令，如下图所示。\n\n可以看到，对于处于 Changes to be commited 状态的文件( 该状态的文件在使用 git commit 命令时即被提交 )，可以通过 git reset HEAD 命令将文件从 Changes to be commited 状态退出。\n\n```bash\n    git reset HEAD test.txt        //将 test.txt 从 Changes to be committed 状态退出\n```\n\n　　对于 Changes not staged for commit 状态的文件，表示这些文件虽然被修改，但并没有被加入 Changes to be commited 状态，即使用 git commit 命令提交时，这些修改不会被记录。针对这类文件可以有两种选择。可以使用 git add 命令将这些修改放入 Changes to be committd 状态，或者通过 git checkout -- 命令忽略该文件的修改，使其回退到上一次提交时的状态。( git 中不同文件的状态可以参见笔者的另一篇笔记git 学习记录—— git 中的仓库、文件状态、修改和提交操作等 )\n\n```bash\n    git add test.txt                //将 test.txt 文件加入 Changes to be committed 状态,在使用 git commit 命令时上述修改即被提交\n    git checkout -- test.txt        //丢弃对 test.txt 的修改，其内容回退到上一次提交时的状态\n　　无法直接切换其他分支的原因即是存在未被保存的修改。此时若想要丢弃当前分支的修改，直接使用 git checkout -- 命令将文件修改丢弃即可。该方法主要适用于产生的改动比较少且相对不重要的情况。\n\n    git checkout -- test.txt        //丢掉 test.txt 文件新增的修改 \n```\n\n\n\n### 保留当前分支的修改\n\n　　另外一种进行切换的选择是先将当前分支的修改保存，再切换到其他分支，这样在其他分支的任务完成后，重新切换至当前分支时，可以继续当前分支的工作。\n\n　　直接提交当前分支　　\n\n　　最简单粗暴的方法即通过 git commit 命令将当前分支的修改进行提交。首先通过 git status 命令查看当前分支各个文件的状态，git status 命令还会显示不同文件状态下 git 可执行的命令，用户可以直接参考。\n\n```bash\n    git status              //当前分支各文件的状态\n　　通过 git add 命令将修改后的文件转化为 staged 状态，即文件的修改将处于 Changes to be committed 状态，再通过 git commit 命令将本分支的修改提交。\n\n    git add test.txt        //将此时的 test.txt 文件添加至 Changes to be committed 状态\n　　在所需的修改均加入 Changes to be committed 状态后，可以通过 git commit 命令将本分支的修改提交。不需要的修改通过上文提到的 git checkout -- 命令重置即可。\n\n    git commit -m \"description for this commit\"    //提交本次修改\n\n```\n\n　　将当前分支修改暂存\n\n　　在任务推进过程中，可能遇到需要切换到其他分支进行处理的情况。但是对应的，对于当前分支的修改可能并不足以达到需要进行一次提交的程度，此时更合适的方案是将本分支修改暂存，然后切换到其他分支进行工作，待其他分支的任务完成后，再切换回本分支，并将暂存的方案恢复，进而继续本分支的修改。\n\n　　git 中提供 git stash 命令来完成上述功能，也就是上文提到的错误提示中 \"Please commit your changes or stash them before you switch branches\" 中所提到的 stash 修改的方案。\n\n　　### 暂存修改\n\n　　通过 git stash 命令将当前分支的修改暂存。经过 git stash 命令暂存修改的数据后，再使用 git status 命令可以看到文件的状态均处于未修改的状态( 而不再是修改未提交状态 )。\n\n    git stash              //暂存本分支的修改\n\n 　　如笔者通过 git stash 命令，会显示对应的 \"Saved working directory and index state WIP on master :xxxxxxx\" 信息。用户可以多次使用 git stash 命令，暂存的状态会以栈的形式存放。\n\n　　查看暂存信息\n\n　　可以通过命令 git stash list 查看已经暂存的数据。 可以看到暂存的数据通过 stash@{n} 的形式索引已经存储的修改数据。\n\n    git stash list        //显示所有 stash 的数据\n\n　　恢复修改\n\n　　当在其他分支的任务完成切换回当前分支后，可以使用 git stash apply 命令恢复之前被暂存的数据。\n\n    git stash apply                //恢复最近一次暂存的修改\n    git stash apply stash@{2}      //恢复索引 stash@{2} 对应的暂存的修改，索引可以通过 git stash list 进行查看\n\n　　这里需要注意的是，通过 git stash apply 命令只会将暂存的数据恢复至 \"Changes not staged for committed\" 状态，即使之前修改状态中已经有文件处于 staged 状态( Changes to be committed ).为了 git 能够将文件尽可能恢复至暂存之前的状态，可以加入 --index 参数。\n\n    git stash apply --index        //在恢复暂存数据时尽量恢复至原状态( 已经 staged 状态的文件仍恢复为 staged 状态 )\n\n　　删除修改\n\n　　可以通过 git stash pop 或者 drop 命令删除对应的缓存数据。\n\n    git stash drop stash@{1}        //删除 stash@{1} 分支对应的缓存数据\n    git stash pop                   //将最近一次暂存数据恢复并从栈中删除\n\n　　git stash 将用户做过的修改存放在本次 git stash 产生的暂存数据中，并将已经修改的文件恢复至未修改状态。当用户恢复暂存数据时，则将上述修改应用到当前分支上。\n\n　　在本文的情景中，即将当前分支的修改通过 git stash 保存，此时当前分支恢复至未被修改之前的状态，而修改被 git stash 以栈的方式保存，可通过索引的方式访问。用户此时可以没有错误的切换至其他分支( 文件均处于未修改状态 )，待其他分支的任务完成后，再切换回本分支。此时通过 git stash apply 将被暂存的修改应用到当前分支，则当前分支的数据即被恢复至离开当前分支前的状态。\n\n　　从原理也可以看出，git stash apply 实际是可以应用到任意分支的，此时执行的操作是将 git stash 保存的修改合并到 git stash apply 时用户所在的分支和文件，当合并存在问题时，git 会产生报错。\n\n　　参考资料\n\n　　Git tools —— Stashing\n\n　　撤销修改 —— 廖雪峰的网站\n\n 　　git 学习记录—— git 中的仓库、文件状态、修改和提交操作等\n\n",
          "addTime": "2021-05-24 00:00:00",
          "view_count": 1062,
          "typeName": "js"
      },
      {
          "articleId": 1621868780,
          "title": "各种场景下正确使用git命令",
          "introduce": "该问题的背景就在于我破坏了一个原则：`每次建立分支，或者切换分支前，都需要把当前的修改提交，否则切换到其他分支也能 看到这些未提交的修改，working directory 下的文件不会恢复到指定文档的版本.`",
          "article_content": "# 各种场景下正确使用git命令\n\n该问题的背景就在于我破坏了一个原则：`每次建立分支，或者切换分支前，都需要把当前的修改提交，否则切换到其他分支也能 看到这些未提交的修改，working directory 下的文件不会恢复到指定文档的版本.`\n\n当我完成ch1分支的工作，但是我在还没有commit的情况下，却使用git checkout master切换到了master分支，导致我ch1的工作内容一下子就到了master分支上去。当时我就很疑惑。\n\n## Git如何在不提交当前分支的情况下切换到其它分支进行操作——git stash\n\n假如现在的Bug你还没有解决，而上边又给你派了一个新的Bug，而这个Bug相比较现在正在苦思冥想的Bug比较容易解决。\n\n你想先解决新的Bug，可是之前的Bug还没有解决完而不能提交。怎么办?\n\n\n\n解决方法：在其他分支上另开炉灶解决。\n\n首先你需要将此刻正在解决Bug的当前分支“储藏”起来。例假如此时正在你在当前分支dev上已进行了Bug修改但还未提交。\n\n此时你想去解决刚派下来的另一个Bug。而你需要在master分支上去修复这个Bug，第一步就需要先切换到master 分支。当你执行 $ git checkout master 命令的时候，将提示出错：\n\nerror: Your local changes to the following files would be overwritten by checkout:\n        readme.txt\nPlease commit your changes or stash them before you switch branches.\n\n（请在切换分支之前提交您的更改或隐藏它们）\n\n\n\n因为当前的分支dev 最初也是从master 分支上衍生出来的。而此时你要再从该分支上切换到其主分支。那么你需要先把该dev分支上的改动提交后才能切换，但是该dev分支上还没有完成全部的修改，你不想提交。那么此时你就要选择 stash 它们（你在当前分支上改动的却没有提交commit的内容）。\n\n> 所以第二步，在当前分支上执行  $ git stash 命令。将当前分支存起来，id为 8528ea2 s\n\n```bash\n13770@HSQ MINGW64 /g/Study/Code/Web/NodeJS/learnFrontTest/Git/first_learn_git (ch1)\n$ git stash\nSaved working directory and index state WIP on ch1: cc89460 del main.js p120\n```\n\n> 使用错误的stash命令会显示stash的各种命令\n\n```bash\n13770@HSQ MINGW64 /g/Study/Code/Web/NodeJS/learnFrontTest/Git/first_learn_git (ch1)\n$ git stash cc89460\nfatal: unknown subcommand: cc89460\n\nusage: git stash list [<options>]\n   or: git stash show [<options>] [<stash>]\n   or: git stash drop [-q|--quiet] [<stash>]\n   or: git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]\n   or: git stash branch <branchname> [<stash>]\n   or: git stash clear\n   or: git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]\n          [-u|--include-untracked] [-a|--all] [-m|--message <message>]\n          [--pathspec-from-file=<file> [--pathspec-file-nul]]\n          [--] [<pathspec>...]]\n   or: git stash save [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]\n          [-u|--include-untracked] [-a|--all] [<message>]\n```\n\n> 正确使用stash回复命令$ git stash apply stash@{cc89460}\n\n```bash\n13770@HSQ MINGW64 /g/Study/Code/Web/NodeJS/learnFrontTest/Git/first_learn_git (ch1)\n$ git stash apply stash@{cc89460}\nOn branch ch1\nChanges not staged for commit:\n  (use \"git add <file>...\" to update what will be committed)\n  (use \"git restore <file>...\" to discard changes in working directory)\n        modified:   t1.txt\n\nno changes added to commit (use \"git add\" and/or \"git commit -a\")\n```\n\n一、用 $ git stash apply 命令恢复，但是恢复后，stash内容并不删除，这时候再执行  \n\n$ git stash list 命令，id 为  8528ea2 s 的储藏项目还会在列表中，你需要用 \n\n$ git stash drop 来删除；\n\n注意： 如果有一个分支上多个 stash，如果需要恢复指定的 stash ，可以在命令尾部加id，如  $ git stash apply stash@{0}，同样删除指定 stash 项目则执行如 \n\n$ git stash drop stash@{1}  。\n\n二、用  $ git stash pop  命令，恢复的同时把 stash 存储列表的内容也删了。这时候再执行  \n\n$ git stash list 命令，id 为  8528ea2 s 的储藏项目不会在列表中。\n\n此时再查看 $ cat  `<filename>`  会发现之前的改动还存在，且执行 git status 就会继续显示该分支上有改动未提交。\n\n",
          "addTime": "2021-05-24 00:00:00",
          "view_count": 1079,
          "typeName": "js"
      },
      {
          "articleId": 1621868828,
          "title": "Git push",
          "introduce": "在使用git commit命令将修改从暂存区提交到本地版本库后，只剩下最后一步将本地版本库的分支推送到远程服务器上对应的分支了，如果不清楚版本库的构成，可以查看我的另一篇，git 仓库的基本结构。\n\n  git push的一般形式为 git push <远程主机名> <本地分支名>  <远程分支名> ，例如 git push origin master: refs/for/master ，即是将本地的master分支推送到远程主机origin上的对应master分支， origin 是远程主机名，\n\n  第一个master是本地分支名，第二个master是远程分支名。",
          "article_content": "## Git push\n\n​    在使用git commit命令将修改从暂存区提交到本地版本库后，只剩下最后一步将本地版本库的分支推送到远程服务器上对应的分支了，如果不清楚版本库的构成，可以查看我的另一篇，git 仓库的基本结构。\n\n  git push的一般形式为 git push <远程主机名> <本地分支名>  <远程分支名> ，例如 git push origin master: refs/for/master ，即是将本地的master分支推送到远程主机origin上的对应master分支， origin 是远程主机名，\n\n  第一个master是本地分支名，第二个master是远程分支名。\n\n### 1.1 git push origin master\n\n​    如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建\n\n   ### 1.2 git push origin ：refs/for/master \n\n　　如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin --delete master\n\n  ### 1.3 git push origin\n\n　　 如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支 \n\n　### 1.4 git push\n\n　　如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名\n\n　### 1.5 git push 的其他命令\n\n　　这几个常见的用法已足以满足我们日常开发的使用了，还有几个扩展的用法，如下：\n\n　　　　（1） git push -u origin master 如果当前分支与多个主机存在追踪关系，则可以使用 -u 参数指定一个默认主机，这样后面就可以不加任何参数使用git push，\n\n　　　　　　不带任何参数的git push，默认只推送当前分支，这叫做simple方式，还有一种matching方式，会推送所有有对应的远程分支的本地分支， Git 2.0之前默认使用matching，现在改为simple方式\n\n　　　　　　如果想更改设置，可以使用git config命令。git config --global push.default matching OR git config --global push.default simple；可以使用git config -l 查看配置\n\n　　　　（2） git push --all origin 当遇到这种情况就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要 -all 选项\n\n　　　　（3） git push --force origin git push的时候需要本地先git pull更新到跟服务器版本一致，如果本地版本库比远程服务器上的低，那么一般会提示你git pull更新，如果一定要提交，那么可以使用这个命令。\n\n　　　　（4） git push origin --tags //git push 的时候不会推送分支，如果一定要推送标签的话那么可以使用这个命令\n\n　### 1.6 关于 refs/for\n\n　　// refs/for 的意义在于我们提交代码到服务器之后是需要经过code review 之后才能进行merge的，而refs/heads 不需要\n\n学习无他法，唯有持之以恒\n\n## 执行git push时，由于代码冲突\n\n```js\ngit pull --rebase #衍合服务器最新代码\ngit status #查看有哪些冲突的文件\nvi 冲突文件 #打开文件后搜索<<<<<<<与>>>>>>>之间的内容，就是冲突的地方，修改冲突行，保存退出。\ngit add 冲突文件 #添加修改后的文件到缓存区\ngit rebase --continue #继续rebase\ngit log #如果rebase成功，表示冲突已解决，此时可以查看log\ngit commit --amend #修改最后一次提交，包括文件与注释\ngit push #重新push提交\n```\n\n### $ git push origin\n\n上面命令表示，将当前分支推送到origin主机的对应分支。 \n\n如果当前分支只有一个追踪分支，那么主机名都可以省略。 \n\n$ git push 如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。\n\n$ git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。\n\n 不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。",
          "addTime": "2021-05-24 00:00:00",
          "view_count": 1033,
          "typeName": "js"
      },
      {
          "articleId": 1621868922,
          "title": "HTML语言简介",
          "introduce": "TML 是网页使用的语言，定义了网页的结构和内容。浏览器访问网站，其实就是从服务器下载 HTML 代码，然后渲染出网页。\n\nHTML 的全名是“超文本标记语言”（HyperText Markup Language），上个世纪90年代由欧洲核子研究中心的物理学家蒂姆·伯纳斯-李（Tim Berners-Lee）发明。它的最大特点就是支持超链接，点击链接就可以跳转到其他网页，从而构成了整个互联网。",
          "article_content": "# HTML语言简介\n\n<a href='/JS/es/aJSType'>learn JS</a>\n\n<a href='/Styles/'>learn CSS</a>\n\n<a href ='/HTML/'>learn  HTML</a>\n\n<a href = '/BrowserCore/'>learn BrowserCore</a>\n\n<a href = '/Node/'>learn Node</a>\n\n<a href = '/Tools/Webpack/'>learn Webpack</a>\n\n## 概述\n\nHTML 是网页使用的语言，定义了网页的结构和内容。浏览器访问网站，其实就是从服务器下载 HTML 代码，然后渲染出网页。\n\nHTML 的全名是“超文本标记语言”（HyperText Markup Language），上个世纪90年代由欧洲核子研究中心的物理学家蒂姆·伯纳斯-李（Tim Berners-Lee）发明。它的最大特点就是支持超链接，点击链接就可以跳转到其他网页，从而构成了整个互联网。\n\n1999年，HTML 4.01 版发布，成为广泛接受的 HTML 标准。2014年，HTML 5 发布，这是目前正在使用的版本。\n\n浏览器的网页开发，涉及三种技术：HTML、CSS 和 JavaScript。HTML 语言定义网页的结构和内容，CSS 样式表定义网页的样式，JavaScript 语言定义网页与用户的互动行为。HTML 语言是网页开发的基础，CSS 和 JavaScript 都是基于 HTML 才能生效，即使没有这两者，HTML 本身也能使用，可以完成基本的内容展示。本教程只介绍 HTML 语言。\n\n下面就是一个简单网页的 HTML 源码。\n\n```html\n<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>网页标题</title>\n</head>\n<body>\n  <p>Hello World</p>\n</body>\n</html>\n```\n\n上面这段代码，可以保存成文件`hello.html`。浏览器打开这个本地文件，就能看到文字“Hello World”。\n\n浏览器右键菜单的“查看源码”（View page source），可以展示当前网页的 HTML 源码。\n\n## 网页的基本概念\n\n### 标签\n\n网页的 HTML 代码由许许多多不同的标签（tag）构成。学习 HTML 语言，就是学习各种标签的用法。\n\n下面就是标签的一个例子。\n\n```html\n<title>网页标题</title>\n```\n\n上面代码中，`<title>`和`</title>`就是一对标签。\n\n标签用来告诉浏览器，如何处理这段代码。标签的内容就是浏览器所要渲染的、展示在网页上的内容。\n\n标签放在一对尖括号里面（比如`<title>`），大多数标签都是成对出现的，分成开始标签和结束标签，结束标签在标签名之前加斜杠（比如`</title>`）。但是，也有一些标签不是成对使用，而是只有开始标签，没有结束标签，比如上一节示例的`<meta>`标签。\n\n```html\n<meta charset=\"utf-8\">\n```\n\n上面代码中，`<meta>`标签就没有结束标签`</meta>`。\n\n这种单独使用的标签，通常是因为标签本身就足够完成功能了，不需要标签之间的内容。实际应用中，它们主要用来提示浏览器，做一些特别处理。\n\n标签可以嵌套。\n\n```html\n<div><p>hello world</p></div>\n```\n\n上面代码中，`<div>`标签内部包含了一个`<p>`标签。\n\n嵌套时，必须保证正确的闭合顺序，不能跨层嵌套，否则会出现意想不到的渲染结果。\n\n```html\n<div><p>hello world</div></p>\n```\n\n上面代码就是错误的嵌套，闭合顺序不正确。\n\nHTML 标签名是大小写不敏感，比如`<title>`和`<TITLE>`是同一个标签。不过，一般习惯都是使用小写。\n\n另外，HTML 语言忽略缩进和换行。下面几种写法的渲染结果是一样的。\n\n```html\n<title>网页标题</title>\n\n<title>\n  网页标题\n</title>\n\n<title>网页\n标题</title>\n```\n\n进一步说，整个网页的 HTML 代码完全可以写成一行，浏览器照样解析，结果完全一样。所以，正式发布网页之前，开发者有时会把源码压缩成一行，以减少传输的字节数。\n\n各种网页的样式效果，比如内容的缩进和换行，主要靠 CSS 来实现。\n\n### 元素\n\n浏览器渲染网页时，会把 HTML 源码解析成一个标签树，每个标签都是树的一个节点（node）。这种节点就称为网页元素（element）。所以，“标签”和“元素”基本上是同义词，只是使用的场合不一样：标签是从源码角度来看，元素是从编程角度来看，比如`<p>`标签对应网页的`p`元素。\n\n嵌套的标签就构成了网页元素的层级关系。\n\n```html\n<div><p>hello world</p></div>\n```\n\n上面代码中，`div`元素内部包含了一个`p`元素。上层元素又称为“父元素”，下层元素又称为“子元素”，即`div`是`p`的父元素，`p`是`div`的子元素。\n\n### 块级元素，行内元素\n\n所有元素可以分成两大类：块级元素（block）和行内元素（inline）。\n\n块级元素默认占据一个独立的区域，在网页上会自动另起一行，占据 100% 的宽度。\n\n```html\n<p>hello</p>\n<p>world</p>\n```\n\n上面代码中，`p`元素是块级元素，因此浏览器会将内容分成两行显示。\n\n行内元素默认与其他元素在同一行，不产生换行。比如，`span`就是行内元素，通常用来为某些文字指定特别的样式。\n\n```html\n<span>hello</span>\n<span>world</span>\n```\n\n上面代码中，`span`元素是行内元素，因此浏览器会将两行内容放在一行显示。\n\n### 属性\n\n属性（attribute）是标签的额外信息，使用空格与标签名和其他属性分隔。\n\n```html\n<img src=\"demo.jpg\" width=\"500\">\n```\n\n上面代码中，`<img>`标签有两个属性：`src`和`width`。\n\n属性可以用等号指定属性值，比如上例的`demo.jpg`就是`src`的属性值。属性值一般放在双引号里面，这不是必需的，但推荐总是使用双引号。\n\n注意，属性名是大小写不敏感的，`onclick`和`onClick`是同一个属性。\n\nHTML 提供大量属性，用来定制标签的行为，详细介绍请看《元素的属性》一章。\n\n## 网页的基本标签\n\n符合 HTML 语法标准的网页，应该满足下面的基本结构。\n\n```html\n<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n</head>\n<body>\n</body>\n</html>\n```\n\n不管多么复杂的网页，都是从上面这个基本结构衍生出来的。\n\n前面说过，HTML 代码的缩进和换行，对于浏览器不产生作用。所以，上面的代码完全可以写成一行，渲染结果不变。上面这样分行写，只是为了提高可读性。\n\n下面就依次介绍，这个基本结构的主要标签。它们构成了网页的骨架。\n\n### `<!doctype>`\n\n网页的第一个标签通常是`<!doctype>`，表示文档类型，告诉浏览器如何解析网页。\n\n一般来说，只要像下面这样，简单声明`doctype`为`html`即可。浏览器就会按照 HTML 5 的规则处理网页。\n\n```html\n<!doctype html>\n```\n\n有时，该标签采用完全大写的形式，以便区别于正常的 HTML 标签。因为`<!doctype>`本质上不是标签，更像一个处理指令。\n\n```html\n<!DOCTYPE html>\n```\n\n### `<html>`\n\n`<html>`标签是网页的顶层容器，即标签树结构的顶层节点，也称为根元素（root element），其他元素都是它的子元素。一个网页只能有一个`<html>`标签。\n\n该标签的`lang`属性，表示网页内容默认的语言。\n\n```html\n<html lang=\"zh-CN\">\n```\n\n上面代码表示，网页是中文内容。如果是英文内容，`zh-CN`要改成`en`。更详细的介绍，参见《元素的属性》一章。\n\n### `<head>`\n\n`<head>`标签是一个容器标签，用于放置网页的元信息。它的内容不会出现在网页上，而是为网页渲染提供额外信息。\n\n```html\n<!doctype html>\n<html>\n  <head>\n    <title>网页标题</title>\n  </head>\n</html>\n```\n\n`<head>`是`<html>`的第一个子元素。如果网页不包含`<head>`，浏览器会自动创建一个。\n\n`<head>`的子元素一般有下面七个，后文会一一介绍。\n\n- `<meta>`：设置网页的元数据。\n- `<link>`：连接外部样式表。\n- `<title>`：设置网页标题。\n- `<style>`：放置内嵌的样式表。\n- `<script>`：引入脚本。\n- `<noscript>`：浏览器不支持脚本时，所要显示的内容。\n- `<base>`：设置网页内部相对 URL 的计算基准。\n\n### `<meta>`\n\n`<meta>`标签用于设置或说明网页的元数据，必须放在`<head>`里面。一个`<meta>`标签就是一项元数据，网页可以有多个<meta>。<meta>标签约定放在`<head>`内容的最前面。\n\n不管什么样的网页，一般都可以放置以下两个`<meta>`标签。\n\n```html\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Page Title</title>\n</head>\n```\n\n上面例子中，第一个`<meta>`标签表示网页采用 UTF-8 格式编码，第二个`<meta>`标签表示网页在手机端可以自动缩放。\n\n<meta>标签有五个属性，下面依次介绍。\n\n\n**（1）charset 属性**\n\n<meta>标签的charset属性，用来指定网页的编码方式。该属性非常重要，如果设置得不正确，浏览器可能无法正确解码，就会显示乱码。\n\n\n```html\n<meta charset=\"utf-8\">\n```\n\n上面代码声明，网页为 UTF-8 编码。虽然开发者可以使用其他的编码方式，但正确的做法几乎总是应该采用 UTF-8。\n\n注意，这里声明的编码方式，应该与网页实际的编码方式一致，即声明了`utf-8`，网页就应该使用 UTF-8 编码保存。如果这里声明了`utf-8`，实际却是使用另一种编码（比如 GB2312），并不会导致浏览器的自动转码，网页可能会显示为乱码。\n\n**（2）name 属性，content 属性**\n\n<meta>标签的name属性表示元数据的名字，content属性表示元数据的值。它们合在一起使用，就可以为网页指定一项元数据。\n\n\n```html\n<head>\n  <meta name=\"description\" content=\"HTML 语言入门\">\n  <meta name=\"keywords\" content=\"HTML,教程\">\n  <meta name=\"author\" content=\"张三\">\n</head>\n```\n\n上面代码包含了三个元数据：`description`是网页内容的描述，`keywords`是网页内容的关键字，`author`是网页作者。\n\n元数据有很多种，大部分涉及浏览器内部工作机制，或者特定的使用场景，这里就不一一介绍了。下面是一些例子。\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<meta name=\"application-name\" content=\"Application Name\">\n<meta name=\"generator\" content=\"program\">\n<meta name=\"subject\" content=\"your document's subject\">\n<meta name=\"referrer\" content=\"no-referrer\">\n```\n\n**（3）http-equiv 属性，content 属性**\n\n<meta>标签的http-equiv属性用来覆盖 HTTP 回应的头信息字段，content属性是对应的字段内容。这两个属性与 HTTP 协议相关，属于高级用法，这里就不详细介绍了。\n\n\n```html\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">\n```\n\n上面代码可以覆盖 HTTP 回应的`Content-Security-Policy`字段。\n\n下面是另一些例子。\n\n```html\n<meta http-equiv=\"Content-Type\" content=\"Type=text/html; charset=utf-8\">\n<meta http-equiv=\"refresh\" content=\"30\">\n<meta http-equiv=\"refresh\" content=\"30;URL='http://website.com'\">\n```\n\n### `<title>`\n\n`<title>`标签用于指定网页的标题，会显示在浏览器窗口的标题栏。\n\n```html\n<head>\n  <title>网页标题</title>\n</head>\n```\n\n搜索引擎根据这个标签，显示每个网页的标题。它对于网页在搜索引擎的排序，有很大的影响，应该精心安排，反映网页的主题。\n\n`<title>`标签的内部，不能再放置其他标签，只能放置无格式的纯文本。\n\n### `<body>`\n\n`<body>`标签是一个容器标签，用于放置网页的主体内容。浏览器显示的页面内容，都放置在它的内部。它是`<html>`的第二个子元素，紧跟在`<head>`后面。\n\n```html\n<html>\n  <head>\n    <title>网页标题</title>\n  </head>\n  <body>\n    <p>hello world</p>\n  </body>\n</html>\n```\n\n## 空格和换行\n\nHTML 语言有自己的空格处理规则。标签内容的头部和尾部的空格，一律忽略不计。\n\n```html\n<p>  hello world   </p>\n```\n\n上面代码中，`hello`前面的空格和`world`后面的空格，浏览器一律忽略不计。\n\n标签内容里面的多个连续空格（包含制表符`\\t`），会被浏览器合并成一个。\n\n```html\n<p>hello      world</p>\n```\n\n上面代码中，`hello`与`world`之间有多个连续空格，浏览器会将它们合并成一个。网页渲染的结果是，`hello`与`world`之间只有一个空格。\n\n浏览器还会将文本里面的换行符（`\\n`）和回车符（`\\r`），替换成空格。\n\n```html\n<p>hello\n  \nworld\n</p>\n```\n\n上面代码中，`hello`与`world`之间有多个换行，浏览器会将它们替换成空格，然后再将多个空格合并成一个。网页渲染的结果是，`hello`与`world`之间有一个空格。\n\n这意味着，HTML 源码里面的换行，不会产生换行效果。\n\n## 注释\n\nHTML 代码可以包含注释，浏览器会自动忽略注释。注释以`<!--`开头，以`-->`结尾，下面就是一个注释的例子。\n\n```html\n<!-- 这是一个注释 -->\n```\n\n注释可以是多行的，并且内部的 HTML 都不再生效了。\n\n```html\n<!--\n  <p>hello world</p>\n-->\n```\n\n上面代码是一个注释的区块，内部的代码都是无效的，浏览器不会解析，更不会渲染它们。\n\n注释有助于理解代码的含义，复杂的代码块前面最好加上注释。\n\n<button id=\"top-btn-html\" class=\"bottom-bar-item\" style=\"position: fixed;right:2rem;bottom:2rem;\">\n  <a href=\"\" style=\"text-decoration:none;\">回顶部↑</a>\n</button>\n\n<script>\n  function gotoTop(){\n    winddow.scrollTo({\n      top:100,\n      top:100,\n      behavior:'smooth'\n    });\n  }\n  const btn = document.getElementById('top-btn-html);\n  btn.addEventListener('click', gotoTop);\n\n\n</script>",
          "addTime": "2021-05-24 00:00:00",
          "view_count": 1096,
          "typeName": "js"
      }
  ]
}


module.exports = {
  articleList,
}