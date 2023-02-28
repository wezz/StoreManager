# Store Manager
This is a script to make it easier to talk to localStorage and sessionStorage. 

It will automatically transform stored JSON to objects. 

It also makes use of prefixed store values. So you can have multiple instances of the storage manager using the same store values without having conflicts.

## Installation
```
npm install @wezz/store-manager
```

## Usage
### Initialize  Store Manager
```
import { StoreManager } from "@wezz/store-manager";
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

To run the demo, run 
``` npm run dev ```
