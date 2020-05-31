function Palindrome(str) {
    function validate() {
        var re = /[\W_]/g; // removes all non-alphanumeric characters

        var lowRegStr = str.toLowerCase().replace(re, '');
        
        // get the reverse of the string.
        var reverseStr = lowRegStr.split('').reverse().join('');

        // Check if reverseStr is  equal to lowRegStr 
        return { length: lowRegStr.length, isValid: reverseStr === lowRegStr }; 

    }

    return { validate };
}

module.exports = Palindrome;