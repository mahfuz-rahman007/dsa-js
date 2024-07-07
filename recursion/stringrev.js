/**
 * Reverse A String Using Recursion
 */

function reverse(text){
    if(text.length === 0) return '';
    return text[text.length - 1] + reverse(text.slice(-text.length,-1));    
}
  
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'