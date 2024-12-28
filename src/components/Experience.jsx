import React from 'react';

const Experience = () => {
  return (
    <section id="works" className="py-12 bg-[url('/studio.jpg')] bg-no-repeat bg-fixed bg-cover text-gray-100">
      <div className="container mx-auto p-4">
        <center><h2 className="text-4xl font-bold mb-4">Experience you ask</h2></center>
        <div className="experience-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card bg-white/30  backdrop-blur-xl hover:scale-105 hover:bg-white/20 transition-all rounded-lg shadow-lg p-4">
              <h3 className="text-2xl font-bold mb-2">{experience.movie}</h3>
              <p className="text-lg font-medium mb-2">{experience.type}</p>
              <p className="text-lg font-medium mb-4">{experience.dates}</p>
              <ul className="list-disc pl-4">
                {experience.characterPlayed.map((responsibility, index) => (
                  <li key={index} className="text-lg font-medium mb-2">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const experiences = [
  {
    movie: 'Race 4',
    type: 'Cinema',
    dates: '2022',
    characterPlayed: [
      'Johny the rebel',
      'Self stuned performed',
      'Referance: Sanjay Sir',
    ],
  },
  {
    movie: 'Kabil',
    type: 'Web Series',
    dates: '2023',
    characterPlayed: [
      'played Raj Manhotra',
      'featued in episode 12-16',
      'series rating 8.6',
    ],
  },
  {
    movie: 'Herbel Tea',
    type: 'Advertisement ',
    dates: '2023',
    characterPlayed: [
      'Played a role of husband',
      'Sales increased by 20%',
      'Responsibility 3',
    ],
  },
  {
    movie: 'lorem',
    type: 'ipsom',
    dates: 'XXXX',
    characterPlayed: [
      'lorem ipsom',
      'lorem ipsom',
      'lorem ipsom',
    ],
  },

];

export default Experience;;