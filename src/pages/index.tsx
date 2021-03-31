import { useContext } from 'react';
import Head from 'next/head';
import Quiz from '../../quiz.json';
import { Question } from '../components/Question';
import { Header } from '../components/Header';

export default function Home() {
  let questions = [];

  for (let i of Quiz.questions) {
    questions.push(<Question obj={i}/>)
  }

  return (
    <div>
      <Head>
        <title>{Quiz.name} | Quiz</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header title={Quiz.name}></Header>

      {questions}

      {/* <Question></Question>
      <Question></Question>
      <Question></Question>
      <Question></Question>
      <Question></Question>
      <Question></Question> */}

      <footer>FEito pElo WEsllEy</footer>

    </div>
  )
}
