let arr=['AC','-','/','1','2','*','3','4','+','5','6','7','8','9','=','0','x','.'];
let inputbox=document.querySelector('input');
function receavedata(value)
{
     inputbox.value=value;
}

let calbox=document.querySelector('.buttons');
let innerhtml='';
arr.forEach((item)=>{
       innerhtml+=`<button>${item}</button>`
})
calbox.innerHTML=innerhtml;

let button=document.querySelectorAll('button');
let data='';
button.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.innerText=='=')
        {
         receavedata(eval(data));
        }
        else if(item.innerText=='AC')
        {
            receavedata('');
            data='';
        }
        else if(item.innerText=='x')
        {
         
            data=data.substring(0,(data.length)-1)
            receavedata(data);
        }
        else{
            console.log(item.innerText);
            data+=item.innerText;
            inputbox.value=data;
        }
      
    })
})
console.log(data);