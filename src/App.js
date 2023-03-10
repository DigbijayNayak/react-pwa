import React, { useEffect, useState } from 'react';
import './App.css';
import video from "./videos/sculpture.mp4"
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      )
      setData(result)
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Videos</h1>
      </header>
      {
        data.map((video) => (
          <div key={video.id}>
            <h1>{video.name}</h1>
            <video height={200} controls src={video.video_url}></video>
          </div>
        ))
      }
      {data.length === 0 && (
        <div>
          <video height={200} controls src={video}></video>
        </div>
      )}
    </div>
  );
}

export default App;
