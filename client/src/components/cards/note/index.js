import React from 'react'
import styles from './note.module.scss';
import { formatDate } from '../../../utils/formatDate';
import { useState } from 'react';

function Note(props) {
    const { text, date, color } = props;
    const [expand, setExpand] = useState(false);

    return (
        <article className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.content}>
                <p className={expand ? styles.expanded : ""}>{text.substring(0,150)}</p>
                {text.length>150 ? <button onClick={()=>setExpand((prev) => !prev)}>
                    Read {expand ? "less" : "more"}
                </button> : null}
            </div>
            <footer className={styles.footer}>
                <p>{formatDate(date)}</p>
            </footer>
        </article>
    )
}

export default Note
