//document.getElementsByTagName("h1")[0].innerText;
//console.log("hello sir i am bimal");
// functoin Cb(){
//     console.log("ÿou clicked me");
// }
let numberofClick=0;
function validation()
{  numberofClick++;
    if(numberofClick>3){
    alert("you cant click more");
  return;    
}

//console.log("click number",numberofClick);
//console.log(`click number:- ${numberofClick}`);
document.getElementById("div").innerText=`click numbr:-${numberofClick}`;
}
let btn=document.getElementById("button1");
btn.addEventListener('click',validation);

//its changing css through DOM
function changeTheme(){
    if(document.body.style.backgroundColor!='black')
    {
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    themeButton.innerText='Day-Mode';
    return;
    }
    else
    {
        document.body.style.backgroundColor='wheat';
        document.body.style.color='black';
        themeButton.innerText='Dark-Mode';
        return;
    }
}
let themeButton=document.getElementById("theme-button");
themeButton.addEventListener('click',changeTheme);