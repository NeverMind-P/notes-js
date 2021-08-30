import './style.scss';
import NoteManager from '../src/NoteManager';

const noteManager = new NoteManager({
  el: document.getElementById('notesWrapper'),
  notes: [
    {
      title: 'Lorem Ipsum',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      title: 'Lorem Ipsum',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      title: 'Lorem Ipsum',
      body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
  ]
});

noteManager.onNoteAdd = (note) => {
  console.log("Note added ", note);
};
noteManager.onNoteChange = (note) => {
  console.log("Note changed ", note);
};
noteManager.onNoteRemove = (note) => {
  console.log("Note removed ", note);
};

const newNoteBtn = document.querySelector('.new-note-btn');
newNoteBtn.onclick = () => {
  noteManager.prependNote({
    title: 'Enter title',
    body: 'Enter description'
  })
};
