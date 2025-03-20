import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-900 text-white w-screen">
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="./img/foto.jpeg" alt="" />
          ¡Hola! Soy <span className="text-yellow-400">Alberto Antúnez</span>
        </motion.h1>
        <p className="text-lg mt-3">Desarrollador Full Stack | React | Node.js</p>
      </section>

      <nav className=" w-full p-4 flex justify-end space-x-4 pr-10">
        <a href="#about" className="hover:text-yellow-400">Sobre mí</a>
        <a href="#projects" className="hover:text-yellow-400">Proyectos</a>
        <a href="#contact" className="hover:text-yellow-400">Contacto</a>
      </nav>

      {/* Sobre mí */}
      <section id="about" className="p-20">
        <h2 className="text-3xl text-yellow-400">Sobre mí</h2>
        <p className="mt-3">
          Soy un desarrollador apasionado por crear experiencias digitales elegantes y funcionales.
        </p>
      </section>

      {/* Proyectos */}
      <section id="projects" className="p-20 bg-gray-800">
        <h2 className="text-3xl text-yellow-400">Proyectos</h2>
        <div className="mt-5 space-y-4">
          <div className="bg-gray-700 p-5 rounded-md">
            <h3 className="text-xl">Proyecto 1</h3>
            <p>Descripción breve del proyecto.</p>
            <a href="https://github.com/tuusuario/proyecto1" className="text-yellow-400">Ver en GitHub</a>
          </div>
          <div className="bg-gray-700 p-5 rounded-md">
            <h3 className="text-xl">Proyecto 2</h3>
            <p>Descripción breve del proyecto.</p>
            <a href="https://github.com/tuusuario/proyecto2" className="text-yellow-400">Ver en GitHub</a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="p-20">
        <h2 className="text-3xl text-yellow-400">Contacto</h2>
        <div className="flex space-x-4 mt-5">
          <a href="https://github.com/tuusuario" className="text-yellow-400 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" className="text-yellow-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:tuemail@gmail.com" className="text-yellow-400 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
