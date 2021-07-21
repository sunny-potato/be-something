import s from "../styles/Dictionary.module.css";

export default function DictionaryPage() {
  return (
    <div className={s.dictionaryPage}>
      <h1 className={s.title}>Dictionary</h1>
      <ul className={s.dictionaryList}>
        <li className={s.dictionaryEntry}>
          <div className={s.dictionaryWord}>Simen</div>
          <div className={s.dictionaryDefinition}>Sunhee sin kjæreste</div>
        </li>
        <li className={s.dictionaryEntry}>
          <div className={s.dictionaryWord}>Sunhee</div>
          <div className={s.dictionaryDefinition}>Simen sin kjæreste</div>
        </li>
        <li className={s.dictionaryEntry}>
          <div className={s.dictionaryWord}>Silje</div>
          <div className={s.dictionaryDefinition}>Simen sin søster</div>
        </li>
   
      </ul>
    </div>
  );
}
