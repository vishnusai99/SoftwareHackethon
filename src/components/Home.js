import { useEffect, useState } from 'react';
import '@dotlottie/player-component'; // Import the DotLottie player styles
import 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'; // Import the DotLottie player script

function Home() {
    return (
        <div className='container'>
            <h1>Home</h1>
            <dotlottie-player
        src="https://lottie.host/d4d0332b-81e8-4795-ae55-99798f6cc56c/lkvQtwuLst.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>
        </div>
    );
}

export default Home;
