/**
 * 단축 평가 논리 연산
 */
const name = "예영근";

console.log(!!name && !!"김준이");
// && 연산 -> 앞의 값이 true일 때  뒤의 값을 리턴, false일 때 false리턴
console.log(false && 10);
// || 연산 -> 앞의 값이 false일 때 뒤의 값을 리턴, true일 때 true리턴
console.log(false || 10);

// nullish 병합 연산
// ?? 연산 -> 앞의 값이 null 또는 undefined 가 아니면 앞의 값, 그 외에 는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);