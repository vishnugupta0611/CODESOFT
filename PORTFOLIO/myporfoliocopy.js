let text=document.querySelector(".text1");
let check=0;   
setInterval(() => {
if(check===45)
{
clearInterval();
}
else{
check+=1;
text.innerText=`${check}%`
}
}, 40);


let text2=document.querySelector(".text2");
let check2=0;   
setInterval(() => {
if(check2===75)
{
clearInterval();
}
else{
check2+=1;
text2.innerText=`${check2}%`
}
}, 27);

let text3=document.querySelector(".text3");
let check3=0;   
setInterval(() => {
if(check3===65)
{
clearInterval();
}
else{
check3+=1;
text3.innerText=`${check3}%`
}
}, 27);
// for progress bar 4
let text4=document.querySelector(".text4");
let check4=0;   
setInterval(() => {
if(check4===40)
{
clearInterval();
}
else{
check4+=1;
text4.innerText=`${check4}%`
}
}, 45);

let card1=document.querySelector(".card1")
let card1img=document.querySelector(".card1para")
let descr=document.querySelector(".descr")
card1.addEventListener("mouseover",()=>{
if(window.innerWidth>1100)
{
    console.log("helo")
card1.classList.add("expand")
card1img.style.display="inline-block";
descr.style.left=`17%`;
}
else{
    card1.classList.add("expandheight")
card1img.style.display="inline-block";
descr.style.left=`17%`;
}
})

card1.addEventListener("mouseout",()=>{
   if(window.innerWidth>1100)
   {
    card1.classList.remove("expand")
    card1img.style.display="none";
    descr.style.left=``;
   }
   else{
    card1.classList.remove("expandheight")
    card1img.style.display="none";
    descr.style.left=``;
   }
})

let card2=document.querySelector(".card2")
let card2img=document.querySelector(".card2para")
card2.addEventListener("mouseover",()=>{
    if(window.innerWidth>1100)
        {
            console.log("helo")
            card2.classList.add("expand")
            card2img.style.display="inline-block";
            descr.style.left=`17%`;
        }
        else{
            console.log("helo")
            card2.classList.add("expandheight")
            card2img.style.display="inline-block";
            descr.style.left=`17%`;
        }

})

card2.addEventListener("mouseout",()=>{
  if(window.innerWidth>1100)
  {
    card2.classList.remove("expand")
    card2img.style.display="none";
    descr.style.left=``;
  }
  else{
    card2.classList.remove("expandheight")
    card2img.style.display="none";
    descr.style.left=``;
  }
})