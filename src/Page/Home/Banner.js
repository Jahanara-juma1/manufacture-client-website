import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/2jR9HWd/pexels-visually-us-2439705.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Production capability</h1>
      <p className="py-6">The company has 20 years of experience in audio and video manufacturing. Our main products include mobile digital video recorders, full HD cameras, AHD cameras and body worn cameras. </p>
      <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;