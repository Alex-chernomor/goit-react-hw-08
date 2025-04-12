import css from './ModalWindow.module.css';

export default function ModalWindow({confirmDelete,cancelDelete}) {
  
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <p className={css.textModal}>Confirm your action</p>
        <div className={css.buttonsCont}>
        <button onClick={confirmDelete}>Yes</button>
        <button onClick={cancelDelete}>No</button>
        </div>
      </div>
    </div>
  )
}
