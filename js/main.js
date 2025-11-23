let cinamon_1=document.getElementById('cinamon-right');
let cinamon_2=document.getElementById('cinamon-left');
let aboutTitle=document.getElementById('title');
let btn=document.getElementById('btn')
window.onscroll= function(){
 let value =  window.scrollY;
 

  let maxMove=300;
  let factor=1.2;
  if( value < maxMove ){
     cinamon_1.style.transform= `translateX(${-value * factor}px)`;
     cinamon_2.style.transform= `translateX(${value * factor}px)` ;
  }else{

    cinamon_1.style.transform= `translateX(${-maxMove * factor}px)`;
     cinamon_2.style.transform= `translateX(${maxMove * factor}px)`;
  }
  if(value >= 400){
    btn.style.display="block"
    
  }else{
      btn.style.display="none"

  }
  if(value >= 2444){
   btn.style.background='#fff'
   btn.style.color='var(--primery-color)'
  }else{
   btn.style.background='var(--primery-color)'
     btn.style.color='#000'
  }
}


btn.onclick=function(){
   scrollTo({
      top:0,
      left:0,
      behavior:"smooth",
   })
}

//when reload page
window.onload = () => {
  window.scrollTo(0, 0);
};

