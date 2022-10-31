import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedbackList';
import FeedBackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
