export declare class Member {
    hidden(target: Object, key: string, propDef: PropertyDescriptor): (void | PropertyDescriptor);
    before(fn: (args, name) => any): (target: Object, key: string, propDef?: PropertyDescriptor) => PropertyDescriptor;
    after(fn: (returnValue, args, name, time) => any): (target: Object, key: string, propDef?: PropertyDescriptor) => PropertyDescriptor;
}
export declare const member: Member;
