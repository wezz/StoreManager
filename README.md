# Store Manager


## Installation
```
npm install @wezz/store-manager
```

## Usage
### Initialize  Store Manager
```
import StoreManager from "@wezz/store-manager";
// On document ready
const storeManager = new StoreManager('prefix');
// Save to localStorage
storeManager.Set('keyname', {'jsondatakey': 'jsondatavalue'}, true);
// Save to sessionStorage
storeManager.Set('keyname', {'jsondatakey': 'jsondatavalue'});
storeManager.Get('keyname');
```

### See demo/example1.js for more advanced usage

## Development & Demo
Clone this repo
Run
``` npm install ```

To run the interactive demo, run 
``` npm run demo ```
