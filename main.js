const buttonAdd = document.getElementById('add');

buttonAdd.addEventListener('click', () =>addNewNote());

function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `<div class="note">
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i>
        </button>

        <button class="delete"><i class="fa-solid fa-circle-minus"></i></button>
        <button><i> </i></button>
    </div>
    <div class="main hidden"></div>
    <textarea></textarea>
    
</div>  `
    document.body.appendChild(note)


const buttonDelete = note.querySelector('.delete');
const buttonEdit = note.querySelector('.edit');
const main = note.querySelector('.main');
const textArea = note.querySelector('textarea');


textArea.addEventListener('input', (e) =>{
    const  { value }  = e.target;

    main.innerHTML = value
})
buttonDelete.addEventListener('click', () =>{
    note.remove();
})
buttonEdit.addEventListener('click', () =>{
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
    console.log(1);
})
};
