
function loadMore() {
  console.log("hi")
  document.getElementById("loadBtn").style.display = "none"
  document.getElementById("loader").innerHTML = "Loading";
  const myTimeout = setTimeout(myGreeting, 2000);
  
}

function myGreeting() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadM").style.display = "contents"
}

function msg(){
  document.getElementById("querybtn").style.display = "none";
  document.getElementById("query").style.display = "grid";    
  document.getElementById("query").style.gridTemplateColumns = "35% 65%"; 
  
}  
function backmsg(){
  document.getElementById("query").style.display = "none";
  document.getElementById("querybtn").style.display = "block";

}