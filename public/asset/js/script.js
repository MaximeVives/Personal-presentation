document.querySelector('.bar').addEventListener('click', function (e) {
    let spans = document.querySelectorAll('.bar span');

    if (document.querySelector(".bar").classList.contains("off")){
        for (let i = 0; i < spans.length; i++) {
            setTimeout(() => {  spans[i].classList.toggle('white-bar');}, 400);
        }
    }else{
        for (let i = 0; i < spans.length; i++) {
            spans[i].classList.toggle('white-bar');
        }
    }


    if (document.querySelector(".nav-panel").classList.contains("active")){
        setTimeout(() => {
            document.querySelector(".nav-panel").classList.toggle('ending-flex');
            document.querySelector("body").style.overflow = "initial";
        }, 330);
    }else{
        document.querySelector(".nav-panel").classList.toggle('ending-flex');
        document.querySelector("body").style.overflow = "hidden";
    }
    document.querySelector('.nav-panel').classList.toggle('active');
    document.querySelector('.bar').classList.toggle('off');
});


document.querySelectorAll('.library-item').forEach(function (element) {
    element.addEventListener('click', function (e) {

        let img = ""

        if(e.target.classList.contains("be-full")){
            img = e.target.parentNode.childNodes[1].cloneNode(true).getAttribute("src")
        }

        else if(e.target.classList.contains("rc-text")){
            img = e.target.parentNode.parentNode.childNodes[1].cloneNode(true).getAttribute("src")
        }
        else if(e.target.classList.contains("main-text") || e.target.classList.contains("second-text")){
            img = e.target.parentNode.parentNode.parentNode.childNodes[1].cloneNode(true).getAttribute("src")
        }


        document.querySelector(".focus").style.display= "flex"
        document.querySelector("body").style.overflow= "hidden"
        document.querySelector(".focus").childNodes[1].setAttribute("src", img)

        document.querySelector(".focus").addEventListener('click', e => {
            if(e.target !== e.currentTarget) console.log(e.target);
            else{
                document.querySelector(".focus").style.display= "none"
                document.querySelector("body").style.overflow= "initial"
            }
        });
    });
});
