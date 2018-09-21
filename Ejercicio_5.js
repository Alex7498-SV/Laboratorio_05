function area(r){
    if (r<=0){
        alert("El radio debe ser mayor a 0");
        return -1;
    }
    return (Math.PI*(r**2));
}