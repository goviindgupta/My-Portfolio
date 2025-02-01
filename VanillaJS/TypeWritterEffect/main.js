// // Constructor function
// function TypeWritter(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.isDeleting = false;
//     this.type();
// }

// // Use a normal function (not an arrow function) for prototype methods
// TypeWritter.prototype.type = function() {
//     const current = this.wordIndex % this.words.length
//     const fulltxt = this.words[current]
    
//     if(this.isDeleting){
//         this.txt = fulltxt.substring(0,this.txt.length - 1)
//     }else {
//         this.txt = fulltxt.substring(0,this.txt.length + 1)
//     }
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//     let typeSpeed = 300

//     if (this.isDeleting){
//         typeSpeed /= 2
//     }
//     if (!this.isDeleting && this.txt === fulltxt)
//     {
//         typeSpeed = this.wait
//         this.isDeleting = true
//     }else if (this.isDeleting && this.txt === ''){
//         this.isDeleting = false
//         this.wordIndex++
//         typeSpeed = 500
//     }

//     setTimeout(() => this.type(), typeSpeed);
// };

// document.addEventListener('DOMContentLoaded',init)
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     new TypeWritter(txtElement, words, wait);
// }










class TypeWritter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];

        // Handle typing and deleting logic
        this.txt = this.isDeleting
            ? fulltxt.substring(0, this.txt.length - 1)
            : fulltxt.substring(0, this.txt.length + 1);

        // Insert text into the element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Adjust typing speed
        let typeSpeed = this.isDeleting ? 150 : 300;

        if (!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWritter(txtElement, words, wait);
});
