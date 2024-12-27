import React from 'react';

const Experience = () => {
  return (
    <section id="works" className="py-12 bg-[url('/studio.jpg')] bg-no-repeat bg-fixed bg-cover text-gray-100">
      <div className="container mx-auto p-4">
        <center><h2 className="text-4xl font-bold mb-4">Experience you ask</h2></center>
        <div className="experience-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card bg-white/30  backdrop-blur-xl rounded-lg shadow-lg p-4">
              <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
              <p className="text-lg font-medium mb-2">{experience.position}</p>
              <p className="text-lg font-medium mb-4">{experience.dates}</p>
              <ul className="list-disc pl-4">
                {experience.responsibilities.map((responsibility, index) => (
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
    company: 'Company Name',
    position: 'Position',
    dates: 'Employment Dates',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    company: 'Company Name',
    position: 'Position',
    dates: 'Employment Dates',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    company: 'Company Name',
    position: 'Position',
    dates: 'Employment Dates',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    company: 'Company Name',
    position: 'Position',
    dates: 'Employment Dates',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },

];

export default Experience;;