document.addEventListener("DOMContentLoaded",async function(){
	const statusElm = document.querySelector("#example1 pre");
	if (window.StoreManager) {
		statusElm.innerHTML += `StoreManager found \n`;
	}
	console.log('window.StoreManager', window.StoreManager)
	const storeInstance = new window.StoreManager.default("customprefix");
	console.log('storeInstance', storeInstance)
	if (storeInstance) {
		statusElm.innerHTML += `Store Manager initiated on with prefix 'customprefix' \n`;
	}
	
	storeInstance.Set('example1key', {'store object': 123});
	statusElm.innerHTML += `Stored 'customprefix-example1key' in session storage \n`;

	
	statusElm.innerHTML += `Verified 'example2key' does not exist: ${storeInstance.Has('example2key')} \n`;
	storeInstance.Set('example2key', "123", true);
	statusElm.innerHTML += `Stored 'example2key' in local storage with value ${storeInstance.Get('example2key')}\n`;

	storeInstance.Set('example3key', "123", true);
	storeInstance.Set('example3key', "123", false);
	storeInstance.Remove('example3key');
	statusElm.innerHTML += `Stored stored and removed 'example3key' in both local and session storage\n`;

	// if (storeInstance.has('example1key')) {
	// 	statusElm.innerHTML += `Verified that store 'example1store' has reference 'example1key' \n`;
	// }
	
	// if (!storeInstance.has('nonExistingKey')) {
	// 	statusElm.innerHTML += `Verified that store 'example1store' does NOT have reference 'nonExistingKey' \n`;
	// }

	// const example1ref = storeInstance.get('example1key');
	// if (example1ref) {
	// 	statusElm.innerHTML += `Got reference for 'example1key' in store 'example1store' \n`;
	// 	if (example1ref()) {
	// 		statusElm.innerHTML += `Reference function 'example1key' in store 'example1store has run successfully' \n`;
	// 	}
	// }
});

function example1callback() {
	console.log('Inside of example1callback')
	return true;
}