function remember(){
	let last;
	return function(value){
		if(value!== undefined)
		{
			last = value;
			return last;
		}
        return last;
		};
}
const r = remember();

console.log(r(10)); // 10
console.log(r(20)); // 20
console.log(r());   // 20  <-- now works perfectly
