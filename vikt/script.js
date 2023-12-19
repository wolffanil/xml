const getCarts = () => {

    const xml = new XMLHttpRequest();

    xml.onreadystatechange = function() {
        if(this.status == 200) {
            document.querySelector('.block').innerHTML = this.responseText;
        }
    }
    xml.open("GET", 'getCarts.php', true);
    xml.send();
};

getCarts();

const postNewArticl = ({title, desc}) => {

    const xml = new XMLHttpRequest();


    xml.open("POST", 'postCart.php', true);

    const params = 'title=' + encodeURIComponent(title) + '&desc=' + encodeURIComponent(desc);

    
    xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xml.onreadystatechange = function() {
        if (xml.readyState === 4 && xml.status === 200) {
            
                        
            document.querySelector('.show').textContent = "+";
            document.querySelector('.form').style.display = 'none';
            document.querySelector('.title').value = '';
            document.querySelector('.description').value = '';
            getCarts();
        }
    }
    xml.send(params);


}

const btn = document.querySelector('.show');
const form = document.querySelector('.form');
const btnS = document.querySelector('.submit');

btn.addEventListener('click', () => {
    if(btn.textContent === '+') {
        btn.textContent = "-";
        form.style.display = 'block';


    } else {

        btn.textContent = "+";
        form.style.display = 'none';

    }


});

btnS.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const desc = document.querySelector('.description').value;

   

    if(!title || !desc) {
        return;
    }

    postNewArticl({title, desc});



})