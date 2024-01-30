let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let equal = document.getElementById('equal');

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.dataset.value){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});