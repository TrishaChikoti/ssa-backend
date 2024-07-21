import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QueueList = () => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/queue')
      .then(response => setQueue(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Queue</h2>
      <ul>
        {queue.map(item => (
          <li key={item._id}>Customer: {item.customerId} - Position: {item.queuePosition}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
