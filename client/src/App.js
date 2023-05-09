import React from 'react';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='text-center'>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </div>
  )
}

export default App