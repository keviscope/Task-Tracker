


let listItem = document.querySelector("#listItem");

function getTask(){
    var item = document.getElementById("newTask").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
   var checkbox = document.createElement("input");
   checkbox.type = "checkbox";

   var deleteBtn = document.createElement('button');
   deleteBtn.innerHTML = "DELETE";
   deleteBtn.classList.add('deleteBtn');
  
  // let div1 = document.createElement('div');
   //div1.setAttribute('class', 'divBack');

    if(item == ''){
        alert("Please input the task")
        return false
    }else{
        
   






 

  // document.body.appendChild(div1);
   // checkbox.id = id;
   newItem.appendChild(checkbox);
    newItem.appendChild(text);
    newItem.appendChild(deleteBtn);


    listItem.appendChild(newItem);
 // listItem.appendChild(div1);



// delete item
deleteBtn.addEventListener('click', () => { 
    listItem.removeChild(newItem);
})
 





// check all item
let checkItems = document.querySelector("#check-items");

checkItems.style.display = "block";



checkItems.addEventListener('click', () =>{


    let checked = checkbox.checked = true;
 
for(i = 0; i < checked.length; i++){
  
  (checked.item)

   
}

   });




  
  
  
   //clear only checked items
let clearCheckedItem = document.querySelector('#clear-checked-item');
clearCheckedItem.style.display = "block";
clearCheckedItem.addEventListener('click', () =>{
if(checkbox.checked ){
   listItem.removeChild(newItem);
/*
    let checked4 = checkbox.checked = true;
 
    for(i = 0; i < checked4.length; i++){
      if(checked4 && clearAllItems.style.display == "block" ){ 
        clearAllItems.style.display = "none";
        checkItems.style.display = "none";
        clearCheckedItem.style.display = "none";
    }
    }*/
        

}



})


   

    

    
    
 





       // clear all item
      let clearAllItems = document.querySelector("#clear-all-items");

      // if(clearAllItems.style.display == "none"){
        clearAllItems.style.display = "block";
        
/*
    }
 else{
        clearAllItems.style.display = "none";
    } 
*/
    clearAllItems.addEventListener('click', () => {
        listItem.removeChild(newItem);

        if(clearAllItems.style.display == "block"){
            clearAllItems.style.display = "none";
            checkItems.style.display = "none";
            clearCheckedItem.style.display = "none";
            reloadApp.style.display = "none";
        }
       }) 





  

      let reloadApp = document.querySelector("#reloadApp");
    
          reloadApp.style.display = "block";
      
      /*
      reloadApp.addEventListener('click', () =>{
        if(confirm("Are you sure you want to reload Page")){
            location.reload();



    
        }
    })
    */


    
      












}
    

}


//clear input field

const clearInput = () => {
const newTask1 = document.querySelector("#newTask");
newTask1.value = '';
}





















    







































