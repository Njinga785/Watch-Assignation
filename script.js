document.addEventListener("DOMContentLoaded", (evt) => { 
    
    postName = () => {
        
     let postName = document.getElementById('name').value;  
        console.log('POSTNAME = ' + postName);
    let li = document.createElement('li'); 
    li.className = 'liName';
    var newContent = document.createTextNode(postName); 
    li.appendChild(newContent); 

    let ul = document.getElementById('ulName'); 
    ul.appendChild(li); 
    checkName(postName, li)
    
   } 

   checkName = (input, li) => {
        if (input === '') {
            error(); 
            console.log(li);
            
        }else{
            document.getElementById('ulName').appendChild(li);
   }  
   document.getElementById('name').value = '';
}

   error = () => {
       alert('Le champ est vide'); 
       console.log('Le champ est vide');
   } 
   
   
   postSubjet = () => { 
    let li = document.createElement('li'); 
    let liName = document.getElementsByClassName('liName'); 
    let randomNom = liName[Math.floor(Math.random() * liName.length)]; 
    console.log(randomNom); 
    randomNom.className = 'barre'; 
    let subjet = document.getElementById('asigne').value;  
    let pers = [subjet, randomNom.textContent]; 
    pers = pers.join(' - ');
    var newContent = document.createTextNode(pers); 
    li.appendChild(newContent); 
    document.getElementById('ulAsigne').appendChild(li); 
    document.getElementById('asigne').value = '';
    } 
    

  rafraichir = () => {
      location.reload()
      return false;
      }
})