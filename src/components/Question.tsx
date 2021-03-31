import styles from '../styles/components/Question.module.css';

export function Question(props) {
  const question = props.obj;
  const episode = question.episode;
  const alternatives = question.alternatives;

  let userAnswer = {isCorrect: false}; // Vai receber o objeto da resposta escolhida (alternative)

  return (
    <div className={styles.questionContainer} style={ { backgroundColor: `${question.bgColor}` } }>
      <p>Temporada {episode.season}. Episódio {episode.number}</p>
      <p>{episode.name}</p>
      <h1>{question.description}</h1>
      
      <div>
        <button>{alternatives[0].description}</button>
        <button>{alternatives[1].description}</button>
        <button>{alternatives[2].description}</button>
      </div>

      <div>
        {userAnswer.isCorrect ? <span>✔️ Acertou!</span> : <span>❌ Errou!</span>}
        <p>{question.explanation}</p>
      </div>
    </div>
  );
}