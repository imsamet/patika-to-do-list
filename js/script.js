const list = document.getElementById('list')

list.addEventListener('click', function(e) {
    e.target.classList.toggle('checked')
})

function messageBox (message) {

    const toastBody = document.getElementsByClassName('toast-body')[0]
    const isShow = document.getElementsByClassName('toast')[0].classList.contains('show');

    if(isShow){
        $('.toast').toast('hide')
        setTimeout(function() {
            toastBody.innerHTML = message;
            $('.toast').toast('show')
        }, 200)
    }else{
        toastBody.innerHTML = message;
        $('.toast').toast('show')
    }
    
}

function newElement() {
    const character = /[a-zA-Z0-9]/g;

    const value = document.getElementById('task');

    if (character.test(value.value)){
        const li = document.createElement("li");
        const span = document.createElement("span");

        const nodeLi = document.createTextNode(value.value);
        const nodeSpan = document.createTextNode('×');

        span.className = "close"

        span.appendChild(nodeSpan)
        li.appendChild(nodeLi)
        li.appendChild(span)
        list.appendChild(li)

        value.value = null
        messageBox('Listeye eklendi.')
    }else{
        messageBox('Listeye boş ekleme yapamazsınız!')
    }
}