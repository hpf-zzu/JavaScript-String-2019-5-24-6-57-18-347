// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
			function titleCase(sentence){
				var i, ss = sentence.toLowerCase().split(/\s+/);
				for(i = 0; i < ss.length; i ++){
					ss[i] = ss[i].slice(0,1).toUpperCase() + ss[i].slice(1);		
				}
				return ss.join(' ');
			}
			console.log(titleCase(ss));

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
function subStr(val){
	val = val.substring(1);
	val = parseFloat(val);
	return val;
}
console.log(subStr(money));
