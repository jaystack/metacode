/// <reference path="../typings/mocha/mocha.d.ts" />
import {member} from '../src';

describe("Attribute facase", () => {
    it("a", () => {
        
        class A {
            //@member.hidden
            public f: string
            
            @member.hidden
            get f2(): string { return this.f}
            
            set f2(value) { this.f = value }
            
            @member.hidden
            @member.before( () => false)
            @member.before( function(args, name) { console.log(name, "@@@",this, args)})
            @member.after( () => console.log.bind(console))
            doThisAndThat(a?, b?, c?):string {
                console.log("@!@!", this, arguments)
                return a + b;
            }
            
                    
        }
        
        for(var i in (new A())){
            console.log(i)
        }
        
        var j = new A();
        j.f2 = "alma"
        console.log(j)
        console.log("@@@", j.doThisAndThat(1,2))
    })
})
