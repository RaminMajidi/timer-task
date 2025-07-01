import React, { useEffect, useState } from 'react';
import type { User } from './types';


const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { signal });
        const data: User = await res.json();
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          console.log('Request cancelled due to unmount');
        } else {
          console.error('Error fetching user:', err);
        }
      }
    };

    fetchUser();

    const intervalId = setInterval(() => {
      console.log("timer")
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const handleResize = () => {
      console.log('Window resized to', window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        controller.abort();
        clearInterval(intervalId);
        window.removeEventListener('resize', handleResize);
      //  socket.close();
    };
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>🧑‍💻 User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <p>🕒 Current time: {time}</p>
    </div>
  );
};

export default UserProfile;