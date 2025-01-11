// النطاق العالمي
var globalVar = "أنا متغير عالمي";
let globalLet = "أنا أيضاً عالمي، لكن محدد باستخدام let";
const globalConst = "أنا ثابت عالمي";


{
// نطاق الكتلة
var blockVar = "أنا var محدود بالنطاق";
let blockLet = "أنا let محدود بالنطاق";
const blockConst = "أنا const محدود بالنطاق";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
console.log(blockVar);
console.log(blockLet);
function show(){
var functionVar = "أنا متغير ذو نطاق كتلة";
let functionLet = "أنا let ذو نطاق كتلة";
const functionConst = "أنا const ذو نطاق كتلة";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
// console.log(blockVar);
// console.log(blockLet);
