import React, { useEffect } from 'react';
import styles from './notes.module.scss';
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import notesData from '../../data/notes.json';
import utils from '../../utils/localStorage';
import { useState } from 'react';

function Notes() {

  const [notesColl, setNotesColl] = useState([]);


  useEffect(() => {
    const data = utils.getFromLocalStorage('notes-data');
    if (data && data.length) {
      setNotesColl(notesData);
      return;
    }
    utils.addToLocalStorage('notes-data', notesData);
    setNotesColl(notesData);
  }, [])


  return (
    <section className={styles.container}>
      <Greeting />
      <main>
        {notesData.map((note, index) => (
          <Note key={index} text={note.text} date={note.createdAt} color={note.color} />
        ))}
      </main>
    </section>
  )
}

export default Wrapper(Notes)
