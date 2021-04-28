const isValid = (s) =>{
    // 如果目前的character不等于stack里面最后添加的character的另一半 那就return false
        const aStack = [];
        for(let i = 0; i < s.length ; i ++){
            const charSearch = s.charAt(i)
            switch(charSearch){
                    case('(') : aStack.push(')');
                    break;
                    case('{') : aStack.push('}');
                    break;
                    case('[') : aStack.push(']');
                    break;
                    default:
                        if(aStack.pop() != charSearch){
                            console.log('false')
                            return false;
                        }

            }
        }
        if(aStack.length === 0){
            console.log('true');
        }
        


}

let s= "{[]}"

isValid(s);

/*Input: s = "()[]{}"
Output: true */