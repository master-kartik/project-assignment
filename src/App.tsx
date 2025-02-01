import React, { useState } from 'react';
import { Menu, ChevronDown, Phone, ArrowUp } from 'lucide-react';

function App():any {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Decoding the Tech World: Programmer vs. Developer - Unveiling the Key Differences",
      description: "Explore the fundamental distinctions between programmers and developers in the tech industry. Understand their roles, skills, and career paths in this insightful comparison.",
      image: "https://bootcamp.lejhro.com/images/blogs/b-48/b-48_would-you-recommend-to-become-a-frontend-backend-or-fullstack-software-developer_.webp",
      author: "Vishal",
      date: "4 Nov 2024",
      views: 3541
    },
    {
      id: 2,
      title: "Data-Driven Decision Making: The Secret to Entrepreneurial Success",
      description: "Unlock the power of data-driven decision making in entrepreneurship! Learn how data analytics can help you identify market trends, optimize operations, and make informed decisions to drive your business forward.",
      image: "https://bootcamp.lejhro.com/images/blogs/b-47/b-47-how-does-data-analytics-helps-in-entrepreneurship.webp",
      author: "Vishal",
      date: "4 Nov 2024",
      views: 3541
    },
    {
      id: 3,
      title: "The Great Library Debate: Pandas vs NumPy - Which is Best for You?",
      description: "Discover the pros and cons of Pandas and NumPy in data analysis. Learn which library is best for your needs and make an informed decision for your next project",
      image: "https://bootcamp.lejhro.com/images/blogs/b-46/b-46_pandas-vs-numpy-best-library-for-your-use-case.webp",
      author: "Vishal",
      date: "4 Nov 2024",
      views: 3541
    },
    {
      id: 4,
      title: "Beyond ChatGPT: The Expansive Impact of AI Across Industries",
      description: "Discover how AI extends far beyond ChatGPT, influencing diverse fields such as healthcare, finance, transportation, and entertainment. Explore the transformative power of artificial intelligence and its potential to reshape industries and enhance our daily lives.",
      image: "https://bootcamp.lejhro.com/images/blogs/b-45/b-45-a_ai-is-more-than-chat-gpt.webp",
      author: "Vishal",
      date: "4 Nov 2024",
      views: 3541
    },
    {
      id: 5,
      title: "Top 10 Essential Machine Learning Algorithms for Beginners",
      description: "Explore the top 10 machine learning algorithms essential for beginners. Learn key concepts and applications to build a strong foundation in data science. Perfect for aspiring data scientists!",
      image: "https://bootcamp.lejhro.com/images/blogs/b-44/b-44-a_Top%2010%20machine%20learning%20algorithms%20that%20all%20beginners%20in%20data%20sc%20field%20should%20know.webp",
      author: "Vishal",
      date: "4 Nov 2024",
      views: 3541
    },
    {
      id: 6,
      title: "What are the benefits of completing a data science bootcamp program?",
      description: "A data science bootcamp quickly equips you with practical skills and boosts your career with hands-on experience and job support.",
      image: "https://bootcamp.lejhro.com/images/blogs/b-43/b-43-a_What%20are%20the%20benefits%20of%20completing%20a%20data%20science%20bootcamp%20program.webp",
      author: "Vishal",
      date: "4 Nov 2024",
      views: 3541
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Data Science Bootcamp",
      duration: "4 Months",
      image: "https://bootcamp.lejhro.com/images/resources/r-l/resources-thumb-nail-1.webp",
      description: "Unlock the potential of your data with Python. Enhance your analytical skills to drive insights and make data-driven decisions."
    },
    {
      id: 2,
      title: "Data Analytics Bootcamp",
      duration: "4 Months",
      image: "https://bootcamp.lejhro.com/images/resources/r-l/resources-thumb-nail-1.webp",
      description: "Begin your journey into data analytics by understanding the fundamental principles and methodologies."
    },
    {
      id: 3,
      title: "Full Stack Development Bootcamp",
      duration: "4 Months",
      image: "https://bootcamp.lejhro.com/images/resources/r-l/resources-thumb-nail-1.webp",
      description: "Start your journey into full-stack development with comprehensive training in front-end and back-end technologies."
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-2 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-8 h-8"
            >
              <Menu />
            </button>
            <img src="https://bootcamp.lejhro.com/images/common/c-h/c-h-logo-red.webp" alt="Logo" className="h-8" />
            <div className="relative">
              <button 
                onClick={() => setShowCoursesDropdown(!showCoursesDropdown)}
                className="hidden lg:flex items-center gap-2 px-4 py-2 border rounded-lg"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showCoursesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-red-500">Data Science Bootcamp</a>
                    <a href="#" className="hover:text-red-500">Data Analytics Bootcamp</a>
                    <a href="#" className="hover:text-red-500">Full Stack Development</a>
                    <a href="#" className="hover:text-red-500">Digital Marketing</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="hover:text-red-500">Refer And Earn</a>
            <a href="#" className="hover:text-red-500">Free Masterclass</a>
            <a href="#" className="hover:text-red-500">Enterprise</a>
            <div className="relative">
              <button 
                onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                className="flex items-center gap-1"
              >
                More
                <ChevronDown className="w-4 h-4" />
              </button>
              {showMoreDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-red-500">About Us</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                    <a href="#" className="hover:text-red-500">Careers</a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col p-4">
              <a href="#" className="py-2 hover:text-red-500">Courses</a>
              <a href="#" className="py-2 hover:text-red-500">Refer And Earn</a>
              <a href="#" className="py-2 hover:text-red-500">Free Masterclass</a>
              <a href="#" className="py-2 hover:text-red-500">Enterprise</a>
              <a href="#" className="py-2 hover:text-red-500">More</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img src="https://bootcamp.lejhro.com/images/blogs/b-l/banner.png" alt="Hero" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl text-[#F6612F] font-semibold">Curate Your Growth</h1>
            <h2 className="text-3xl md:text-4xl text-[#1E3A8A] font-semibold mt-4">
              Dive into Articles that<br />Propel You Forward!
            </h2>
            <div className="w-24 h-1 bg-red-500 mt-6" />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold">LATEST BLOGS</h2>
        <div className="w-20 h-1 bg-red-500 mt-2" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogs.map(blog => (
            <div key={blog.id} className="flex flex-col shadow-xl h-[408px] border border-[#CCCCCC]">
              <div className="w-full">
                <img src={blog.image} alt={blog.title} className="h-[161px] w-full object-cover" />
              </div>
              <div className="px-4 flex flex-col h-44 justify-between">
                <h2 className="font-bold text-sm text-left text-[#111827] line-clamp-2 my-2">{blog.title}</h2>
                <p className="text-left text-sm line-clamp-4">{blog.description}</p>
                <div className="flex justify-between">
                  <a href="#" className="text-[#F6612F] font-medium">Read More...</a>
                  <div className="flex gap-2 justify-center">
                    <span>{blog.views}</span>
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-[#CCCCCC] w-[92%] mx-auto rounded-sm mt-1" />
              <div className="flex justify-between p-4">
                <p>By <span className="text-[#F6612F] font-medium">{blog.author}</span></p>
                <p>{blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-11 py-2 bg-[#F6612F] text-white font-semibold rounded-md border hover:bg-white hover:border-red-500 hover:text-[#F6612F] transition duration-300 ease-in-out">
            Load more
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Explore Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="rounded-lg overflow-hidden h-[350px] flex justify-start flex-col shadow-md hover:shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="px-4 py-2">
                <h3 className="text-base font-bold text-left">{course.title}</h3>
              </div>
              <div className="px-4">
                <p className="text-sm lg:text-base tracking-normal line-clamp-3 text-left">{course.description}</p>
              </div>
              <a 
                className="p-2 px-4 text-base leading-5 rounded-[7px] text-white bg-[#d93c34] font-normal text-center hover:text-[#d93c34] border border-[#d93c34] transition duration-300 ease-in-out hover:bg-transparent m-auto"
                href="#"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-[800] mb-4">Company</h3>
              <div className="flex flex-col items-start">
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">About</a>
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">Blogs</a>
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">Enterprise</a>
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">Lejhro Recruiter</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-[800] mb-4">Support</h3>
              <div className="flex flex-col items-start">
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">Contact</a>
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">Terms of Use</a>
                <a href="#" className="hover:text-[#F6612F] text-[14px] py-1">Privacy Statement</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-[800] mb-4">Connect with us</h3>
              <div className="flex gap-4 mb-4">
                <a href="#" className="p-1 py-2 hover:text-[#F6612F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
                <a href="#" className="p-1 py-2 hover:text-[#F6612F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                <a href="#" className="p-1 py-2 hover:text-[#F6612F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a href="#" className="p-1 py-2 hover:text-[#F6612F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
              </div>
              <a 
                href="#" 
                className="flex-grow-1 text-lg w-auto hover:text-[#F6612F] border border-gray-800 p-2 px-3 text-[14px] inline-block"
              >
                Refer and Earn
              </a>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-800 mt-[20px]" />
          <div className="py-2">
            <div className="flex flex-col items-start justify-center text-xl">
              <h2 className="text-xl font-[800]">Bootcamp</h2>
              <a href="#" className="hover:text-[#F6612F] text-[14px]">Data Science Bootcamp</a>
              <a href="#" className="hover:text-[#F6612F] text-[14px]">Data Analyst Bootcamp</a>
              <a href="#" className="hover:text-[#F6612F] text-[14px]">Full Stack Development Bootcamp</a>
              <a href="#" className="hover:text-[#F6612F] text-[14px]">Digital Marketing Bootcamp</a>
            </div>
          </div>
        </div>
        <div className="text-center pb-2">
          <p className="text-[14px]">© 2025 LEJHRO. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 left-5 p-2 bg-[#F6612F] text-white rounded-full shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <button className="fixed bottom-5 right-5 p-3 bg-[#F6612F] text-white rounded-full shadow-lg">
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;