let form = document.querySelector('form');
let cardContain = document.querySelector('.card-container');
let date = document.querySelector('.date');

//todo --------- for button activaton ---------
function activate(){
    let button = document.querySelectorAll('.buttons');
    button.forEach((idx) => {
        idx.addEventListener('click', function(e){
            let text = e.target.textContent;
            let numb = e.target.parentElement.parentElement.children[0].children[2];
            if(text == 'Delete'){
                e.target.parentElement.parentElement.remove();
            } 
            else if(text == '+5'){
            numb.innerText = parseInt(numb.innerText)+5;
            }
            else{
                numb.innerText = parseInt(numb.innerText)-5;
            }
            sorting();                              
        });
    });
}

//todo --------- for sorting the append element ---------
function sorting(){
    let card = [...document.querySelectorAll('.card')];
    
    //* sorting done here...
    card.sort((a,b) =>{
        return (parseInt(b.children[0].children[2].textContent)) - (parseInt(a.children[0].children[2].textContent));
    });

    //* to remove all the child
    while(cardContain.firstChild){
        cardContain.removeChild(cardContain.firstChild);
    }

    //* to append all the child
    card.forEach((scoreNum) =>{
        cardContain.appendChild(scoreNum);
    })

}

//todo --------- for append child ---------
form.addEventListener('submit', function(e){
    e.preventDefault();

    let fname = e.target.children[0].value;
    let lname = e.target.children[1].value;
    let country = e.target.children[2].value;
    let num = e.target.children[3].value;
    let error = document.querySelector('.error');

    if(fname == "" || lname == "" || country == "" || num == "" ){
       return (error.style.display = "inline");
    }

    let date= new Date();

    let element = document.createElement('div');
    element.classList.add('.card');
    element.innerHTML =`
    <div class="card">
        <div class="content">
            <div class="name">
                <p>${fname} ${lname} </p>
                <p class="date">${date}</p>
            </div>
            <p>${country}</p>
            <p>${num}</p>
        </div>
        <div class="buttons">
            <button>Delete</button>
            <button>+5</button>
            <button>-5</button>
        </div>
    </div>
    `;
    cardContain.appendChild(element);
    activate();
    sorting();
});
sorting();
activate();



