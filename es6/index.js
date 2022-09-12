// let num1 = 2;
// let num2 = 3;
// // console.log(`${num1+num2}`)
// let fname = 'sudarshan';
// let lname = 'n';
// example=`${fname}
//  ${lname}`;
// console.log(example);

// document.getElementById('e').innerText = example;



// const personalInformation ={
//     firstname:'sudarshan',
//     lastName:'n',
//     Phnoe:83296128,
//     zipCode:560058
// };

// const {firstname: fn,lastName:ln} = personalInformation;
// console.log(`${fn} ${ln}`);
// console.log('hello world!')
// function sum(a,b,cb){
//     cb(a+b);
// }
// // sum(12,3,function(cb){console.log(cb)})

// function div(a,b,cbf){
//     if(a==0||b==0)
//     {
//         cbf('0 cant be div',null)
//     }
//     else
//     cbf(null,a/b);
// }
// div(0,1,function(n,r){
//     if(n){
//         console.log(n)}
//         else
//         console.log(r)
//     })

// function mul(a,b,cbf)
// {
//     if(b!=0){
//         cbf(a*b)
//     }
//     else if(a==0){
//         cbf('0 cant be mult',null)
//     }
//     else
//     for(let i=1;i<=10;i++)
//         {cbf(null,a*i)}
// }
// mul(0,0,function(err,res){
//     if(err){
//         console.log(err)
//     }
//     else
//     {
//         console.log(res)
//     }
// }
// )


function div(a,b){
    if(b===0){
        return Promise.reject(' cant be div')
    }
    else{
        return Promise.resolve(a/b)
    }
}

// div(12,0).then(function(res){console.log(res)}).catch(function(err){console.log(err)})

// function m(a,b){
//     if(b===null){
//         for(let i=1;i<=10;i++){
//         return Promise.resolve(a*i)
//     }}
//     else if(a===null){
//         for(let i=1;i<=10;i++)
//         return Promise.resolve(b*i)
//     }
//     else if(isNaN(a)||isNaN(b))
//     {return Promise.reject('error')
// }else{
//     return Promise.resolve(a*b)
// }

// }

// m(null,null).then(function(res){console.log(res)}).catch(function(err){console.log(err)})


// var httpobj = new XMLHttpRequest();
// console.log(httpobj)
// httpobj.open('GET','https://fakestoreapi.com/products');
// httpobj.send()
// httpobj.onloadend=function(){
//     console.log(httpobj.response)
// }
