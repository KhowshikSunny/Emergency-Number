function getElement(id){
    const element = document.getElementById(id);
    return element;
}





const callBtns = document.getElementsByClassName('call-btn')
console.log(callBtns)
//    cart time function 
   function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();


    textContent = timeString;
    return textContent;
    }
for(let callButton of callBtns){
    callButton.addEventListener('click',function(){



       const serviceName=callButton.parentNode.parentNode.children[0].innerText
        const serviceNumber=callButton.parentNode.parentNode.children[2].innerText
        console.log(serviceNumber)

        const cardContainer = getElement('cart-container');
        const newCart = document.createElement("div");
        newCart.innerHTML=`
        <div class="flex">
                        <div class="bg-gray-100 shadow-md rounded-lg p-4 w-900  flex justify-between items-center">
                                <div>
                                    <h2 class="font-bold text-xl">${serviceName}</h2>
                                    <h2 class="text-gray-500  font-semibold text-lg">${serviceNumber}</h2>
                                </div>
                                  
                                 <span class="text-sm text-gray-700">${updateTime()}</span>
                            </div>
                            
                            
                        </div>
        
        `;

        cardContainer.append(newCart);



    })

}

document.getElementById('btn-clear').addEventListener('click',function(){
    const cardContainer = getElement('cart-container');
    cardContainer.innerHTML="";

})



    

// document.getElementById('call-btn').addEventListener('click',function(){
//     const emergencyTitle= getElement('emergency-title').innerText
//     const emergencyNumber= getElement('emergency-number').innerText
//     const currentTime=updateTime();






//     const cardContainer=getElement('cart-container')
// const newCart= document.createElement('div');
// newCart.innerHTML =  `
// <div class="flex">
//                         <div class="bg-gray-100 shadow-md rounded-lg p-4 w-900  flex justify-between items-center">
//                                 <div>
//                                     <h2 class="font-bold text-xl">${emergencyTitle}</h2>
//                                     <h2 class="text-gray-500  font-semibold text-lg">${emergencyNumber}</h2>
//                                 </div>
                                  
//                                  <span id="time" class="text-sm text-gray-700">${currentTime}</span>
//                             </div>
                            
                            
//                         </div>
// `;
                     
// cardContainer.append(newCart)
    
// });






