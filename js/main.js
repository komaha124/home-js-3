var shopList = ['Апельсин', 'Банан', 'Груша', 'Ананс', 'Гранат'];
var state = ['Купил', 'Надо купить','Купил', 'Надо купить', 'Надо купить']


function cleanHtml() {
    var element = document.getElementById("stroka1");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function fruits() { 
    let myNode = document.getElementById("stroka1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    for(let i = 0; i < shopList.length; i++) {
        if(state[i] == 'Купил') { 
        let checkName = document.getElementById("stroka1");
        checkName.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${shopList[i]} : <span class="chea">${state[i]}</span></label><br>`);
    } else {
        let checkName = document.getElementById("stroka1");
        checkName.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${shopList[i]} : <span class="chea">${state[i]}</span></label><br>`);
    }
    }
  
}
function addPlus() {
    let nameProduct = document.getElementById("Product").value;
        if(nameProduct == 0) {
        return; 
    }
    shopList.push (nameProduct); 
    state.push ('Надо купить'); 
    fruits();
}

function checkif() {
    let listHtml = document.getElementById("stroka1");

    for (let i= 0; i < state.length; i++)
    {
        chbox = document.getElementById(`${i}`);
        var chbox;
        if (chbox.checked) {
            state[i] = "Купил";
        }
        else {
            state[i] = "Надо купить";
        }
    }

    cleanHtml()
    for(let i = 0; i < state.length; i++) {
    
        if (state[i] == "Надо купить") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${shopList[i]} : <span class="chea">${state[i]}</span></label><br>`);
        } else {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${shopList[i]} : <span class="chea">${state[i]}</span></label><br>`);
        }

    }

}

function sort() {
    let listHtml = document.getElementById("stroka1");
    cleanHtml()
    for(let i = 0; i < state.length; i++) {
        if ( state[i] == "Надо купить") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${shopList[i]} : <span class="chea">${state[i]}</span></label><br>`);
        }
    }
    for(let i = 0; i < state.length; i++) {
        if ( state[i] == "Купил") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${shopList[i]} : <span class="chea">${state[i]}</span></label><br>`);
        }
    }
}
