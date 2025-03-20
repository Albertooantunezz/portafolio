import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNode,
  FaNodeJs,
  FaJava,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaWordpress,
  FaDatabase,
  FaGit,
} from "react-icons/fa";
import { motion } from "framer-motion";
import imagen from "./assets/foto.jpg";
import imagenTailwind from "./assets/tailwind.png";

function App() {

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative bg-gray-900 text-white w-screen min-h-screen">

      <div className="bg-gray-900 text-white w-screen p-20 flex items-center min-[900px]:h-screen item max-[1350px]:flex-col max-[1350px]:p-5">
        <div className="min-[900px]:h-screen flex flex-col items-center min-[900px]:justify-center gap-10 w-1/2">
          <motion.img
            src={imagen}
            alt="Alberto Antúnez Fernández"
            className="w-40 rounded-full w-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          />
          <motion.h1
            className="text-5xl font-bold max-[1500px]:text-4xl text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            ¡Hola! Soy <span className="text-yellow-400">Alberto Antúnez</span>
          </motion.h1>
          <motion.p
            className="text-lg mt-3 w-80 text-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.7, bounce: 0.3 },
            }}
          >
            Desarrollador Full Stack Junior
          </motion.p>

          <motion.nav
            className="flex justify-center text-2xl max-[900px]:flex-col"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.7, bounce: 0.3 },
            }}
          >
            <button
              onClick={() => smoothScroll("about")}
              className="hover:text-yellow-400 w-50"
            >
              Sobre mí
            </button>
            <button
              onClick={() => smoothScroll("experience")}
              className="hover:text-yellow-400 w-50"
            >
              Experiencia
            </button>
            <button
              onClick={() => smoothScroll("projects")}
              className="hover:text-yellow-400 w-50"
            >
              Proyectos
            </button>
          </motion.nav>

          <section id="contact" className="">
            <div className="flex space-x-4 gap-10">
              <a
                target="_blank"
                href="https://github.com/Albertooantunezz"
                className="text-yellow-400 text-4xl"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alberto-ant%C3%BAnez-fern%C3%A1ndez-b72060308/"
                className="text-yellow-400 text-4xl"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="albertoantunezfernandez@gmail.com"
                className="text-yellow-400 text-4xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </section>
        </div>

        <motion.div
          className="min-[1352px]:w-1/2 min-[900px]:overflow-y-auto max-h-screen min-[900px]:pr-10
           flex flex-col max-[1350px]:with-full max-[1350px]:mt-20
           max-[1350px]:gap-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.7, bounce: 0 },
          }}
        >
          <section id="about" className="p-20 pb-0 max-[900px]:p-5">
            <h2 className="text-4xl text-yellow-400">Sobre mí</h2>
            <p className="mt-3 text-xl mt-10">
              Soy un apasionado desarrollador web con una formación sólida en
              tecnologías como JavaScript, PHP, HTML5 y CSS. A lo largo de mi
              experiencia, he tenido la oportunidad de trabajar en diversos
              proyectos, donde he aprendido a crear aplicaciones web que no solo
              son funcionales, sino también intuitivas y adaptables. Me encanta
              enfrentarme a nuevos retos y siempre busco la mejor manera de
              optimizar y mejorar la experiencia de usuario. Estoy en constante
              aprendizaje, porque creo que el desarrollo web es un campo en el
              que siempre hay algo nuevo que explorar.
            </p>
          </section>

          <section
            id="habilidades"
            className="p-20 w-full pb-0 max-[900px]:p-5"
          >
            <h2 className="text-4xl text-yellow-400">Habilidades</h2>

            <div className="flex space-x-4 mt-5 gap-10 mt-10 flex-wrap justify-center">
              <div className="flex flex-col items-center gap-1 w-20">
                <FaReact className="text-6xl text-blue-300" />
                <p className="text-2xl">React</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaNodeJs className="text-6xl text-green-300" />
                <p className="text-2xl">Node.js</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaJava className="text-6xl text-red-300" />
                <p className="text-2xl">Java</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaJs className="text-6xl text-yellow-300" />
                <p className="text-2xl">JavaScript</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaPhp className="text-6xl text-blue-300" />
                <p className="text-2xl">Php</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaHtml5 className="text-6xl text-orange-300" />
                <p className="text-2xl">HTML5</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaCss3 className="text-6xl text-blue-500" />
                <p className="text-2xl">CSS3</p>
              </div>

              <div className="flex flex-col items-center gap-1  w-20">
                <FaWordpress className="text-6xl text-blue-400" />
                <p className="text-2xl">Wordpress</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaDatabase className="text-6xl text-orange-400" />
                <p className="text-2xl">SQL</p>
              </div>

              <div className="flex flex-col items-center gap-1 w-20">
                <FaGit className="text-6xl text-orange-700" />
                <p className="text-2xl">Git</p>
              </div>

              <div className="flex flex-col items-center w-20 gap-3.5">
                <img src={imagenTailwind} alt="Logo de Tailwind CSS" />
                <p className="text-2xl">Tailwind</p>
              </div>
            </div>
          </section>

          <section id="experience" className="p-20 w-full max-[900px]:p-5">
            <h2 className="text-4xl text-yellow-400">Experiencia</h2>

            <div className="border p-5 mt-10 rounded-2xl bg-gray-800">
              <h3 className="text-2xl">Prácticas de Desarrollo Web</h3>
              <p className="mt-2">Agencia Adhoc (Marzo 2024 - Junio 2024)</p>

              <ul className="list-disc flex flex-col gap-5 mt-5 ml-5">
                <li>
                  Colaboración en proyectos de desarrollo web enfocados en la
                  creación de sitios web dinámicos y adaptables.
                </li>
                <li>
                  Mantenimiento de webs utilizando WordPress, introduciendo
                  nuevo contenido y arreglando incidencias de forma eficiente.
                </li>

                <li>
                  Uso de JavaScript, CSS y HTML5 para optimizar la experiencia
                  del usuario, estableciendo estructuras de páginas y dándoles
                  estilo.
                </li>

                <li>
                  Apoyo en la implementación de bases de datos con MySQL y PHP
                  para la gestión de contenidos, creando scripts para introducir
                  o extraer datos en la base de datos de forma simple y
                  eficiente.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="projects"
            className="p-20 bg-gray-800 rounded-2xl mb-20 rounded-2xl"
          >
            <h2 className="text-4xl text-yellow-400">Proyectos</h2>
            <div className="mt-5 space-y-4">
              <div className="bg-gray-700 p-5">
                <h3 className="text-2xl">Trivionix</h3>
                <p>
                  Se trata de una aplicación sobre un juego de trivia, es mi
                  primer proyecto usando React. En este proyecto he utilizado
                  React, JavaScript, Html5 y Css, como base de datos usé
                  Firebase. Puedes alternar entre dos idiomas dinamicamente.
                </p>

                <a
                  target="_blank"
                  href="https://trivionix-albertooantunezzs-projects.vercel.app/"
                  className="text-yellow-400 mr-5"
                >
                  Abrir
                </a>

                <a
                  target="_blank"
                  href="https://github.com/Albertooantunezz/trivionix"
                  className="text-yellow-400"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
export default App;
