import css from './Contact.module.css';

export default function Contact({id, name, number, openModal, returnId}) {
    return (
    <li key={id} className={css.contact}>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
        <div className={css.buttonContainer}>
        <button onClick={()=>{
          returnId(id);
          openModal();
        }}>Delete</button>
        </div>
    </li>
  )
}
