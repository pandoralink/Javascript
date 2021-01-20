//var output = document.getElementById("myDIV");
//output.querySelector(".output").innerHTML='';
/*
var output = document.querySelector(".output");

var i=10;
for(;i>=0;i--){
var para = document.createElement('p');
	if(i===10) para.textContent='Countdown 10';
	else if(i===0) para.textContent='Blast off!';
	else para.textContent=i;
output.appendChild(para);
}
*/
//循环:填写来宾列表
/*
var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

var i = 0;
for(;i<9;i++){
	if(i==8){
		admitted.textContent += people[i]+'.';
		continue;}
	if(people[i]=='Phil'||people[i]=='Lola')
refused.textContent += people[i]+', ';
	else
admitted.textContent += people[i]+', ';
}
*/
//函数部分的练习
//将随机名称从提供的数组（names）打印到提供的段落（para），然后运行一次
/*
let section=document.querySelector('.abc');
let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

section.innerHTML = ' ';
function chooseName(names){
	let para = document.createElement('p');
	para.textContent=names[Math.floor(Math.random()*names.length)];
	section.appendChild(para);
}

for(var i=0;i<9;i++)
chooseName(names);
*/
//照片库
var gallery=document.querySelector('.thumb-bar');
var display=document.querySelector('.displayed-img');
var btn=document.querySelector('button');
var overlay=document.querySelector('.overlay');
// Looping through images
for(let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/憨憨'+i+'.jpg');
  gallery.appendChild(newImage);
  newImage.onclick = function(e) {
    display.src = e.target.src;
  }
}
//控制亮暗的按钮
btn.onclick=function(e){
	if(btn.getAttribute('class')=="dark") {btn.setAttribute('class',"light");
		btn.textContent = "变亮";
		overlay.style.backgroundColor="rgba(0,0,0,0.5)";}
	else {btn.setAttribute('class',"dark");
		btn.textContent = "变暗";
		overlay.style.backgroundColor="rgba(0,0,0,0)";}
}


