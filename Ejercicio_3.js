//ejercicio 3


function fibo(n){


    if(n==0){
        return 0;
    }  
    else if (n <= 1){
    return 1;
    }
    return fibo(n - 1) + fibo(n- 2);


}


function llamadafibo(n){
    let ar = [];
    for(let i = 0; i<n; i++){
        ar.push(fibo(i));
    }
    console.log(ar);
}