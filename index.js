function addingEventListener() {
   const inputElement = document.querySelector('#input');
       inputElement.addEventListener('input', (event) => {
           console.log('The input element was updated with the value:', event.target.value);
        });
       }
       
       addingEventListener();



