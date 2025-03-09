// src/pages/About.jsx

const About = () => {
  // // Skills data
  // const skills = [
  //   {
  //     category: "Frontend",
  //     items: [
  //       "HTML/CSS",
  //       "JavaScript",
  //       "React",
  //       "Vue.js",
  //       "Tailwind CSS",
  //       "SASS",
  //     ],
  //   },
  //   {
  //     category: "Backend",
  //     items: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
  //   },
  //   {
  //     category: "Database",
  //     items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  //   },
  //   {
  //     category: "Others",
  //     items: ["Git", "Docker", "AWS", "CI/CD", "Testing", "Agile"],
  //   },
  // ];

  // // Experience data
  // const experiences = [
  //   {
  //     title: "Senior Frontend Developer",
  //     company: "Tech Solutions Inc.",
  //     period: "2021 - Present",
  //     description:
  //       "Led the development of responsive web applications using React and Next.js. Implemented state management solutions and optimized performance.",
  //   },
  //   {
  //     title: "Full Stack Developer",
  //     company: "Digital Innovations",
  //     period: "2018 - 2021",
  //     description:
  //       "Developed and maintained web applications using MERN stack. Collaborated with designers and product managers to deliver high-quality software.",
  //   },
  //   {
  //     title: "Junior Web Developer",
  //     company: "StartUp Labs",
  //     period: "2016 - 2018",
  //     description:
  //       "Built and maintained client websites. Implemented responsive designs and ensured cross-browser compatibility.",
  //   },
  // ];

  // // Education data
  // const education = [
  //   {
  //     degree: "Master of Computer Science",
  //     institution: "Tech University",
  //     period: "2014 - 2016",
  //     description: "Specialized in Software Engineering and Web Technologies",
  //   },
  //   {
  //     degree: "Bachelor of Computer Science",
  //     institution: "State University",
  //     period: "2010 - 2014",
  //     description: "Graduated with honors. Focus on programming and algorithms",
  //   },
  // ];

  return (
    <section className="animate-fadeIn">
      <h2 className="text-4xl md:text-6xl font-black mb-12 text-black dark:text-white inline-block relative">
        <span className="absolute -bottom-3 left-0 w-full h-6 bg-red-500 -z-10 transform -rotate-1"></span>
        ABOUT ME
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="relative">
          <div className="aspect-square bg-yellow-400 w-full max-w-lg transform rotate-3 animate-float "></div>
          <img
            src="https://res.cloudinary.com/dbg7s7ai2/image/upload/v1741431551/profile_aajcer.jpg"
            alt="About Me"
            className="aspect-square object-cover absolute top-6 left-6 border-8 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] w-full max-w-lg"
          />
        </div>

        <div className="bg-white dark:bg-black p-8 border-8 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.8)]">
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
            MY STORY
          </h3>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I'm a passionate software developer with 5+ years of experience
            building web and mobile applications. I specialize in creating
            robust, user-friendly solutions that solve real-world problems.
          </p>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            My journey in tech began when I built my first website at 15. Since
            then, I've worked with startups and established companies to deliver
            high-quality software products.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
              EDUCATION & EXPERIENCE
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-gray-100 dark:bg-gray-900 border-4 border-black dark:border-white transform hover:rotate-1 transition-transform">
                <h4 className="text-xl font-bold text-black dark:text-white">
                  Senior Developer @ Tech Innovations
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  2022 - Present
                </p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-900 border-4 border-black dark:border-white transform hover:-rotate-1 transition-transform">
                <h4 className="text-xl font-bold text-black dark:text-white">
                  Frontend Developer @ Digital Solutions
                </h4>
                <p className="text-gray-700 dark:text-gray-300">2020 - 2022</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-900 border-4 border-black dark:border-white transform hover:rotate-1 transition-transform">
                <h4 className="text-xl font-bold text-black dark:text-white">
                  BSc Computer Science
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Tech University, 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
