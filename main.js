const note = document.querySelector('.note');
const buttonDelete = document.querySelector('.delete');
const buttonEdit = document.querySelector('.edit');
const main = note.querySelector('.main');
const textArea = note.querySelector('textarea');

buttonEdit.addEventListener('click', () =>{
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
    console.log(1);
});

textArea.addEventListener('input', (e) =>{
    const  { value }  = e.target;

    main.innerHTML = value
})
buttonDelete.addEventListener('click', () =>{
    main.innerHTML = "";
    textArea.innerHTML = "";
    
})