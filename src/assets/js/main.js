import 'bootstrap';


rightbar.addEventListener('mouseover',function(){
    let bg=document.getElementById("rightbar");
    bg.style.background="green";
    console.log("is this working just fine");
});
/*rightbar.addEventListener('mouseup',function(){
    console.log("this is working too i guess no");
    let bg=document.getElementById("rightbar");
    bg.style.background="yellow";
})*/
rightbar.addEventListener('mouseout',function(){
    console.log("this too!");
    let bg=document.getElementById("rightbar");
    bg.style.background="blueviolet";
});
/*rightbar.addEventListener('mousedown',function(){
    console.log("this is working too i guess no");
    let bg=document.getElementById("rightbar");
    bg.style.background="brown";
})*/
let g=document.getElementsByClassName("gi");

//let prev=document.getElementById("rightbar").innerText;
//didn't work with only g.addev......
/*g[0].addEventListener('click',function(){
    console.log("voila");
    //document.getElementsByClassName("gi");//pre
    g[0].style.background="red";
    //document.getElementById("rightbar").innerText="Wohoo!!!";
});
g[1].addEventListener('click',function(){
    console.log("voila");
    //document.getElementsByClassName("gi");//pre
    g[0].style.background="green";
    //document.getElementById("rightbar").innerText=prev;
});*/
let prevcolor=[];
for(let l=0;l<4;l++)
{
    prevcolor[l]=g[l].style.background;
}
for(let h=0;h<4;h++)
{
    g[h].addEventListener('click',function(){
        for(let z=0;z<4;z++)
        {
            g[z].style.background=prevcolor[z];
        }
        g[h].style.background="green";
        
    })
}

//arrow notation
summ=(a,b)=>{
    //return a+b;
    console.log(a+b);
}

//clr=setInterval(diff,3000);
//let z=0;
diff=()=>{
    //z++;
    console.log("jsahdbj");
    document.getElementById("rightbar").innerText="Yowza!!";
    //if(z==3)
    //{
      //  clearInterval(clr);
    //}
}
/*setTimeout(summ(5,8),50000);
setTimeout(diff,3000);*/
//setInterval(diff,3000);
//clr=setInterval(diff,3000);

/*localStorage.setItem('name','nikhil');
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();
obj={
    name:"nikhil",length:1,a:{this:"that"}
}
jso =JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed=JSON.parse(`{"name":"nikhil","length":1,"a":{"this":"that"}}`);
console.log(parsed);*/ 
let db=document.getElementsByTagName("button");

for(let k=1;k<6;k++)
{
db[k].addEventListener('click',function(){
    alert("These buttons are not usable as of now");
})}

/*function btnalert(){
    alert("These buttons are not usable as of now");
}*/
let slideIndex=0;
//let c=0;
showslides();
function showslides(){
    let i;
    let slides=document.getElementsByClassName("myslides");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length)
    {
        slideIndex=1;
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showslides,2000);
    /*if(c==6)
    {
        return;
    }*/
}

let fl=document.getElementsByClassName("gi");
//do the click button show content of flashcards
