#Metacode

JavaScript metaprogramming tools for TypeScript and Babel.

##What is metaprogramming?
https://en.wikipedia.org/wiki/Metaprogramming

It has many uses but some of the most importants are:
- Allow model driven designs - limitless DDD
- Aspects and attached behavior
- DataAnnotations and data validation
- Tooling aid

... and a whole lot more



## Usage
```
$ npm install --save metacode
```

App.ts

```javascript
import {member} from 'metacode'

var env = "DEV"
var config : { slow: 500 }
class MyCustomClass extends SomeBaseClass {
    
    @member.hidden // modify property descriptor, ctor time
    public myFun1() { 
    
    }
   
    @member.before(console.log.bind(console)) //monitor invocation
    @member.before( args => { args[0] += 10 } )   // tamper with inparams
    @member.after( retVal => retVal * 2)      //or with the result
    public myFunc2(a, b) {
         return a + b   
    }
       
    @member.before(( ) => ENV !== "DEV" : false : true)  //turn logger into noop in prod
    @member.before( () => ENV === "DEV") //same but shorter
    public logger(msg, data) {
         console.log(arguments)
    }

    @member.after( (retval, inparams, name, time) => {
        if (time > config.slow) {
            console.log("Method is not fast!", name)
        }   
    }) //attach some conditional logging
    public slowmethod(msg, data) {
         console.log(arguments)
    }
    
}
```


###The hidden meta 
Hides a member from member listings (enumerable = false) in propdescriptor wise.
