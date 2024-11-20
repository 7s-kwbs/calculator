let inputbox = document.getElementById('inputbox');
       let buttons = document.querySelectorAll('button');
       let inputValue = '';

       buttons.forEach(button => {
           button.addEventListener('click', (e) => {
               let buttonText = e.target.innerText;

               if (buttonText === 'Ac') {
                   inputValue = '';
               } else if (buttonText === 'DEL') {
                   inputValue = inputValue.slice(0, -1);
               } else if (buttonText === '=') {
                   try {
                       inputValue = eval(inputValue).toString();
                   } catch {
                       inputValue = "Error";
                   }
               } else {
                   inputValue += buttonText;
               }

               inputbox.value = inputValue;
           });
       });