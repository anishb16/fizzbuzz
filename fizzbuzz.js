function fizzbuzz(max){
  for (var i = 1 ; i <= max; i++){
    var message = '';
      if (i % 3 === 0){
        if (i % 5 === 0){
          message +='FizzBuzz';
        }
        else {
          message +='Fizz';
        }
      }
      else if(i % 5 === 0){
          message +='Buzz';
        }
      else if(message === ''){
          message = i;
        }
      console.log(message)
    }
}
fizzbuzz(5);
fizzbuzz(13);
fizzbuzz(89);
fizzbuzz(233);