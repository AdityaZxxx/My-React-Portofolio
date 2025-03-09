import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface FetchResponse {
    ok: boolean;
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response: FetchResponse = await fetch(
        "http://localhost:5000/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  const SocialLink = [
    {
      platform: "GitHub",
      link: "https://github.com/AdityaZxxx",
    },
    {
      platform: "X",
      link: "https://x.com/adxxya30",
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/adxxya30",
    },
  ];

  return (
    <section className="animate-fadeIn">
      <h2 className="text-4xl md:text-6xl font-black mb-12 text-black dark:text-white inline-block relative">
        CONTACT ME
        <span className="absolute -bottom-3 left-0 w-full h-6 bg-red-500 -z-10 transform -rotate-1"></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="p-8 bg-white dark:bg-black border-8 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.8)]">
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
            GET IN TOUCH
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-bold mb-2 text-black dark:text-white">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white focus:outline-none focus:ring-4 focus:ring-red-500 transform hover:-rotate-1 transition-transform"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-2 text-black dark:text-white">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white focus:outline-none focus:ring-4 focus:ring-red-500 transform hover:rotate-1 transition-transform"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-2 text-black dark:text-white">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white focus:outline-none focus:ring-4 focus:ring-red-500 min-h-32 transform hover:-rotate-1 transition-transform"
                placeholder="Your message here..."
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-red-500 text-white font-bold rounded-none transform hover:translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="p-8 bg-gray-100 dark:bg-gray-900 border-8 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.8)] transform -rotate-1">
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
            CONTACT INFO
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-red-500 border-4 border-black dark:border-white transform rotate-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white">
                  Email
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  adityaofficial714@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 border-4 border-black dark:border-white transform -rotate-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  +62 857 309 228 12
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 border-4 border-black dark:border-white transform rotate-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white">
                  Location
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Kediri, Indonesia
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-black dark:text-white">
            SOCIAL LINKS
          </h3>
          <div className="flex flex-wrap gap-4">
            {SocialLink.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                className="px-4 py-2 bg-white dark:bg-black text-black dark:text-white font-bold border-4 border-black dark:border-white transform hover:rotate-3 transition-transform"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
