export const characterSize = (payload, minSize, maxSize) => {

    if(payload===''){
        alert("Complete los campos vacios");
        return false;
    }
    else if(payload.length<minSize){
        alert(`Debe contener minimo ${minSize} caracteres.`);
        return false;
    }
    else if(payload.length>maxSize){
        alert(`Debe contener maximo ${maxSize} caracteres.`);
        return false;
    }
    else
        return true;
};

export const isNumber = value => {
    if(isNaN(value)){
        alert("Ingresa solo numeros");
        return false;
    }
    else
        return true;
};