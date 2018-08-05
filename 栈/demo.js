//栈的实现
function Stack() {
    var dataStore = [];
    //入栈
    this.push = function(element) {
        return dataStore.push(element);
    }
    //出栈
    this.pop = function() {
        return dataStore.pop();
    }
    //取栈顶元素
    this.peek = function() {
        return dataStore[dataStore.length - 1];
    }
    // 清除栈顶
    this.clear = function() {
       return dataStore = [];
    }
    //栈的大小
    this.size = function() {
        return dataStore.length;
    }
    // 是否为空
    this.isEmpty = function() {
        return dataStore.length === 0;
    }
    // 打印栈元素
    this.print = function() {
        console.log(dataStore.toString());
    }
}

// 十进制转换成二进制
/*function mulBase(num) {
    var stack = new Stack();
    var yushu;
    var binaryString = '';
    while(num>0) {
        yushu =Math.floor(num % 2);
        // console.log(yushu)
        stack.push(yushu);
        num = Math.floor(num / 2);
    }
    // 把栈中的二进制取出来
    while(!stack.isEmpty()) {
        binaryString += stack.pop();
    }
    return binaryString;
}
console.log(mulBase(10))*/
//任意进制转换
/*function baseConvarter(num, base) {
    var stack = new Stack();
    var yushu;
    var baseString = '';
    //这个利用了js字符串的特性来获取转换后某一进制后所对应的数字
    var dig = '0123456789ABCDEF';

    while(num > 0) {
        yushu = Math.floor(num % base);
        stack.push(yushu);
        num = Math.floor(num / base);
    }

    while(!stack.isEmpty()) {
        baseString += dig[stack.pop()];
    }
    return baseString;
}
console.log(baseConvarter(10,8));*/


// 判断一个字符串是否是一个回文
/*function isHuiwen (word) {
    var stack = new Stack();
    var newWord = '';
    for(var i = 0, wordLen = word.length; i<wordLen; i++) {
        stack.push(word[i]);
        // console.log(word[i]);
    }
    while(!stack.isEmpty()){
        newWord += stack.pop();
    }
    if(word===newWord) {
        return true;
    } else {
        return false;
    }
    // console.log(newWord)
}
console.log(isHuiwen('hello'));*/

/*
function factorial(n) {
    var stack = new Stack();
    var sum = 1;
    if(n==0 || n==1) {
        return 1;
    } else {
        for(var i = 1; i <= n; i++) {
            stack.push(i);//while(n>1) {push(n--);}
        }
    while(!stack.isEmpty()) {
        sum *= stack.pop();
    }
    return sum;
    }
}
console.log(factorial(5));
*/

function check(expression) {
    var stack = new Stack();
    var len = expression.length;
    // console.log(len)
    for(var i =0; i<len; i++) {
        if (expression[i] == '(') {
            stack.push('(');
            return (i+1);
            // console.log(stack.size())
        } else if (expression[i] == ')') {
            stack.pop();

        }
    }
    console.log(stack.size())
}

var e = '2.3+23/12+(3.124*0.24';
console.log(check(e));
