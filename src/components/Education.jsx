

const educationData = [
  {
    degree: "BSc in Software Engineering",
    institution: "Debre Markos University",
    year: "2016 E.C.",
    cgpa: "CGPA: 3.67",
    location: "Debre Markos, Ethiopia",
  },
  {
    degree: "High School Diploma",
    institution: "Your High School Name",
    year: "2011 E.C.",
    location: "City, Ethiopia",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-950 py-12 px-4 sm:px-10 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">🎓 Education</h2>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.year} {edu.cgpa && `| ${edu.cgpa}`}</p>
            <p className="text-gray-500 text-sm">{edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
