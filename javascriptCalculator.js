function add(a,b){
    const result = a+b;
    return result;
}
function sub(a,b){
    const result = a-b;
    return result;
}
function multi(a,b){
    const result = a*b;
    return result;
}
function div(a,b){
    const result = a/b;
    return result;
}
function fullResult(a,b,operation){
    if(operation==='add')
    {
        return add(a,b)+ operation;
    }
    else if(operation==='sub')
    {
        return sub(a,b)+ operation;
    }
    else if(operation==='multi')
    {
        return multi(a,b)+ operation;
    }
    else if(operation==='div')
    {
        return div(a,b)+ operation;
    
    }
}  
const op= fullResult(2,50,'div');
console.log(op);