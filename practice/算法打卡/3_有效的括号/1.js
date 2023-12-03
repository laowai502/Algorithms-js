const isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
     return stack.length === 0;
};