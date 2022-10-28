import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedbackList';
import FeedBackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
