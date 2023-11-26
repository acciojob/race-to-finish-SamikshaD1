window.promises = [];
const promises = Array.from({length:5},(_,index) =>{
	return new promise((resolve) =>{
			const randomTime = Math.floor(Math.random()*5)+1;
		setTimeout(()=>{
			resolve(`Promise ${index + 1} resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
		})
	})
});
promises.any(promises)
.then((result) =>{
	const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
}).catch((error) =>{
	console.error('Error',error);
});
// Do not change the code above this
// add your promises to the array `promises`
