function add(x,y){
    return  new Promise ((resolve,reject)=>{
        if(x<5){
            reject("x cannot be less than 5");
        }
        else{
        resolve(x+y);
        }
    });
}

function sqr(a){
    return a*a
}

async function main(){
    try{
    let sum= await add(4,5)
    let result= sqr(sum)
    console.log(result)
    }
    catch(error){
        console.log(error);
    }
}
main()