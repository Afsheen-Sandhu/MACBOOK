import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className="relative bg-black">
      {/* Navbar */}
      <nav className="absolute top-0 inset-x-0 z-20 flex justify-between p-6 bg-transparent">
        <div className="text-white text-lg font-bold">Apple</div>
        <ul className="flex space-x-8 text-white text-lg">
          <li><a href="#macbook" className="hover:text-blue-600 transition duration-300">Mac</a></li>
          <li><a href="#ipad" className="hover:text-blue-600 transition duration-300">iPad</a></li>
          <li><a href="#iphone" className="hover:text-blue-600 transition duration-300">iPhone</a></li>
          <li><a href="#watch" className="hover:text-blue-600 transition duration-300">Watch</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition duration-300">Services</a></li>
          <li><a href="#support" className="hover:text-blue-600 transition duration-300">Support</a></li>
        </ul>
      </nav>

      {/* Title and Description */}
      <div className="absolute inset-x-0 top-0 z-10 text-center mt-40">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-purple-500 to-blue-600">
          macbook <span className="text-blue-600">pro.</span>
        </h1>
        <p className="text-white mt-4 text-lg">
          Oh so pro! <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quo sit recusandae pariatur laborum.
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="h-screen">
        <Canvas camera={{ fov: 12, position: [0, -10, 320] }}>
          <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'} />
          <OrbitControls enableZoom={false} />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>

      {/* Additional Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            Discover the Features of the New MacBook Pro
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            With unparalleled performance and a stunning display, the new MacBook Pro redefines what's possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">M1 Chip</h3>
              <p className="text-gray-300">
                The M1 chip brings incredible performance, energy efficiency, and amazing battery life.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Liquid Retina Display</h3>
              <p className="text-gray-300">
                Experience color accuracy and incredible detail with the Liquid Retina display.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Magic Keyboard</h3>
              <p className="text-gray-300">
                The Magic Keyboard provides a comfortable, responsive typing experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-6 text-center">
        <p className="text-gray-500">© 2024 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
