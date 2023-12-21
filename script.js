
console.log("script");
let entry = document.getElementById("entry");
let form = document.getElementById("form-div");
let start = document.getElementById("start");
let name=document.getElementById("name");
let resultBtn = document.getElementById("result");
let resultCard = document.getElementById("result-div");
var flag=false;

start.addEventListener('click',()=>{
	let player1 = document.getElementById("player1").value;
	var player2 = document.getElementById("player2").value;
	name.innerText = `${player1}`;
	if(player1 && player2)
	{

	
	   entry.style.display="none";
	   form.style.display="block";
	   console.log("ayyo");
	}
	else {alert("player name is required")}	
	console.log("start");
})
















console.log("aayein?")
var rand = Math.floor(Math.random()*100+1);
console.log(rand);
var count = 0;
var res1=0;
var res2=0;

let btn=document.getElementById("btn");
let rslt=document.getElementById("rslt");
let reset=document.getElementById("reset");


btn.addEventListener('click',()=>{
	
	
	
	count+=1;
	let valuem = document.getElementById("input").value;
	if(valuem== rand)
	{
	    reset.style.display="block";
	    rslt.innerText = "Congratulations! you guessed it right";
	    rslt.style.color = 'green';	
	  if(flag){
		res2=count;
		document.getElementById("result").style.display="block";
                reset.style.display="none";
		}
	  else{res1=count;} 
	   		
	}
	else if(valuem>rand)
	{
	 rslt.innerText = "Wrong answer, your number is greater";
	 rslt.style.color = 'red';		
	}

	else if(valuem<rand)
	{
	 rslt.innerText = "Wrong answer, your number is smaller";
	 rslt.style.color = 'purple';		
	}
	

	
});

reset.addEventListener('click',()=>{
	count=0;
let player2 = document.getElementById("player2").value;
	rslt.innerText="";
	rslt.style.color = 'rgb(0 0 40)';
	rand = Math.floor(Math.random()*100+1);
	console.log(rand);
	document.getElementById("input").value="";
	name.innerText = `${player2}`;
	 reset.style.display="none";
	flag=true;
})
	

resultBtn.addEventListener('click',()=>{
	let player1 = document.getElementById("player1").value;
	let player2 = document.getElementById("player2").value;
	resultCard.style.display="block";
	form.style.display="none"
	document.getElementById('result-h2').style.color="green";
	if(res1>res2){
	document.getElementById('result-h2').innerText = `Congratulations! Winner is: ${player2}`; 
	}
	else if(res1<res2){
	document.getElementById('result-h2').innerText = `Congratulations! Winner is: ${player1}`; 
	}
	else
	{
		document.getElementById('result-h2').innerText ="Match Drawn....";
		document.getElementById('result-h2').style.color="#b19013";
	}
	document.getElementById('result-h4-1').innerText = `${player1} ->> total attempts ${res1}`
	document.getElementById('result-h4-2').innerText = `${player2} ->> total attempts ${res2}`
})







console.log("123");
console.log("456");