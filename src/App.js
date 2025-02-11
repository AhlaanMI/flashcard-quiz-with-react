import React,{ useState } from "react";
import FlashcardList from "./FlashcardList";

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);


  return (
    <>
      <FlashcardList Flashcards={flashcards} />
    </>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      'answer',
      'answer 1',
      'answer 2',
      'answer 3']
  },
  {
    id: 2,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      'answer',
      'answer 1',
      'answer 2',
      'answer 3']
  }
]

export default App;
