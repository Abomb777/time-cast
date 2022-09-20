# timezone-cast
This package allows to cast from TZ windows timezone to TZ unix timezone 

### Example
```code
const casttz = require('timezone-cast');

console.log(casttz.toUnix('BG'));
//Europe/London
console.log(casttz.toUnix('Europe/London'));
//Europe/London
console.log(casttz.toUnix('GMT Standard Time'));
//Europe/London

console.log(casttz.toWindows('BG'));  
//GMT Standard Time
console.log(casttz.toWindows('Europe/London'));
//GMT Standard Time
console.log(casttz.toWindows('GMT Standard Time'));
//GMT Standard Time
```