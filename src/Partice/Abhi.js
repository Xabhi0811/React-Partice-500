function sum(...number){
    let total = 0;
    for(let number of number){
        total+= number;
    }

    return total;

}

console.log(sum(10,20,50,40))


 let abhi=()=>{
  return a +b;
 }

 console.log(abhi(2,5))


  function abhi(a){
     function abhi2(b=5){
        return a+b;
     }
     return abhi2;

  }

  console.log(abhi(5))

  function greet(callback){
     callback();
  }

  function hello () {
    console.log("hello");
  }

  greet(hello);



  function greet(abhi){
    abhi();
  }

  function hello(){
    console.log("hello")
  }

  greet(hello);