const animatedForm = () => {
    const arrows = document.querySelectorAll('.fa-arrow-down')
    arrows.forEach(arrow => {
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement
            const nextForm = parent.nextElementSibling

            if (input.type === "text" && validateUser(input)){
                nextSlide(parent,nextForm)
            }else if (input.type === "email" && validateEmail(input)){
                nextSlide(parent,nextForm)
            }else if (input.type === "password" && validateUser(input)){
                nextSlide(parent,nextForm)
            }else{
                parent.style.animation = "shake 0.5s ease"
            }
            //get rid of animation
            parent.addEventListener('animationend',()=>{
                parent.style.animation="";
            })
        })
    })
}

const validateEmail = (email) => {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validation.test(email.value)) {
        error("rgba(87,189,130)")
        return true
    }else { 
        error("rgba(189,87,87)")
    }
}

const validateUser = (user) => {
    if (user.value.length < 6){
        console.log('not enough characters')
        error("rgba(189,87,87)")
    }else {
        error("rgba(87,189,130)")
        return true
    }
}
const nextSlide = (parent,nextForm) => {
    parent.classList.add('inactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
}


const error = (color) => {
    document.body.style.backgroundColor = color;
}


animatedForm()