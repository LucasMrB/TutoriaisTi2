let add = () => {
let name = document.querySelector('.container #name'); 
let comment = document.querySelector('.container #comment'); 
 
if (name.value !== "" && comment.value != "") { 
 
let list = document.querySelector('.list'); 
let time = new Date();
let h = time.getHours(); 
let m = time.getMinutes(); 
let s = time.getDate(); 
let t = time.getMonth();
let now = "comentou às  " + h + ":" + m + " do dia " + s + "/" + t;
let list_item = document.createElement ("l1"); 
 
list_item.innerHTML = `
<span>
<p>${name.value} ${now}</p> 
</span>
<p>${comment.value}</p>
`;
list.append(list_item); 
}
 
if (name.value == "" || comment.value == "") {
let list = document.querySelector('.list'); 
let list_item = document.createElement ("l2"); 
var warn = 'Por favor digite um nome e um comentário!';  
list_item.innerHTML = `
<span>
<p>${warn}</p> 
</span>
`;
list.append(list_item); 
 }
name.value=comment.value = "";
}