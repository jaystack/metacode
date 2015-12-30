var c = null
export class Member {
    
    
    
    //hidden(target:Object, key: string) : void;
    hidden(target:Object, key: string, propDef: PropertyDescriptor) : (void | PropertyDescriptor) {
        c = target
        if (propDef) {
            propDef.enumerable = false
            console.log("set to hidden")
            
            return propDef
        }
        throw new TypeError("Invalid member type for hidden attribute:" + key + " field is not supported")
    }

    
    before(fn: (args, name) => any) {
        
        return (target:Object, key:string, propDef?:PropertyDescriptor) => {
            var orig = propDef.value
            propDef.value = function(...args) {
                if(fn.call(this, args, key) !== false) {
                    return orig.apply(this, args)
                }
            }
            return propDef
        }
    }
    
    after( fn: (returnValue, args, name, time) => any) {
         return (target:Object, key:string, propDef?:PropertyDescriptor) => {
            var orig = propDef.value
            propDef.value = function(...args) {
                var t = new Date().getTime()
                let retval = orig.apply(this, args)
                fn.call(this, retval, args, key, new Date().getTime() - t)
                return retval
            }
            return propDef
        }
    }
    
    
}
//export const methodChain = (...args) => [args]

export const member: Member = new Member()
