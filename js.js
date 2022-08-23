var btnserc= document.getElementById("btntoggle")
var sersection = document.getElementById("sersection")

isser=false;
btnserc.addEventListener("click",function(){
if(isser==false){
    btnserc.setAttribute("src","images/btnclose.png")
    sersection.style.top="40px"
    isser=true;
    return;

}
if(isser==true){
    btnserc.setAttribute("src","images/btnsrech.png")
    sersection.style.top="-80px"
    isser=false;


}

})


var inputborder = document.getElementsByTagName("input")
inputborder.onfocus

for (i=0;i< inputborder.length;i++) {
    
    inputborder[i].onfocus=function(){

        inputborder[i].style.border="1px solid #ffef64"
        inputborder[i].style.boxShadow="1px 1px 1px 1px 5px"
    
    }
    
}


//login
var loginprofil =document.getElementById("loginprofil")
var  btntogillogin= document.getElementById("logginoggle")
istoggel=false
btntogillogin.addEventListener("click",function(){
    if(istoggel==false){
        loginprofil.style.top="100px";
        istoggel=true;
        return;
        
    
    }
    
    if(istoggel==true){
        istoggel=false;
        loginprofil.style.top="-600px";
    }
})

//login

//video toggel
var toglemainimages =document.getElementsByClassName("togvideo")
var videomain=document.getElementById("videomain")

toglemainimages[0].addEventListener("click",function(){
    videomain.setAttribute("src","images/vid-1.mp4")

})
toglemainimages[1].addEventListener("click",function(){

    videomain.setAttribute("src","images/vid-2.mp4")
})
toglemainimages[2].addEventListener("click",function(){

    videomain.setAttribute("src","images/vid-3.mp4")
})
toglemainimages[3].addEventListener("click",function(){
    videomain.setAttribute("src","images/vid-4.mp4")

})

//video toggel

//menutoggel
var icontoggel= document.getElementById("micon");
var miconimg= document.getElementById("miconimg");
var ul =document.getElementById("ultoggle");
var inft = document.getElementById("inft");
ist=false;
icontoggel.addEventListener("click",function(){
    if(ist==false){
        ul.style.display="block";
        miconimg.setAttribute("src","images/btnclose.png")
        ist=true;
        inft.style.top="62%"
        return;
    }
    if(ist==true){
        ul.style.display="none";
        miconimg.setAttribute("src","images/menuicon.png")
        inft.style.top="12%"
        ist=false;
        
    }

})
//menutoggel