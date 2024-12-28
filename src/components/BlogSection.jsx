import React, { useState } from 'react';
import Markdown from 'react-mark';

function BlogSection() {
  const [blogData, setBlogData] = useState([
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Blog Description 1',
      image: 'blog1.jpg',
      content: "**Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum necessitatibus quas dolore, deleniti facilis molestiae adipisci magnam! Neque illum dolore dignissimos expedita aperiam? Similique, officia quaerat corrupti incidunt veniam non?",
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Blog Description 2',
      image: 'blog2.jpg',
      content: 'Blog Content 2',
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Blog Description 3',
      image: 'blog3.jpg',
      content: 'Blog Content 3',
    },
    {
      id: 4,
      title: 'Blog Title 4',
      description: 'Blog Description 4',
      image: 'blog4.jpg',
      content: 'Blog Content 4',
    },
  ]);

  const [modalData, setModalData] = useState(null);

  const handleModalOpen = (data) => {
    setModalData(data);
  };

  const handleModalClose = () => {
    setModalData(null);
  };

  return (
    <>
    {modalData && (
          <div
            className="h-full w-full overflow-y-scroll z-20 fixed top-0 bg-black bg-opacity-50 flex justify-center"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="blogModalLabel"
            aria-hidden="true"
          >
            <div className="bg-white size-fit rounded-lg shadow-md p-4 w-1/2">
              <div className='flex flex-col-reverse'>
                <img src={modalData.image}  className="" alt="" />
              <div className="flex relative justify-between items-center mb-4">
                <h5 className="text-lg font-bold">{modalData.title}</h5>
                <button
                  type="button"
                  className="bg-red-500 text- hover:text-gray-900"
                  onClick={handleModalClose}
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              </div>
              
              <p className="text-gray-600 mt-4"><Markdown text={modalData.content} /></p>
            </div>
          </div>
        )}
    <section id="blogs" className="py-10 h-full bg-[url('/blog_back.jpeg')] bg-cover bg-no-repeat ">
      <div className="container mx-auto p-4">
        <center><h2 className="text-4xl font-mono text-white font-bold mb-4">Blogs</h2></center>
        <div className="flex flex-wrap justify-center -mx-4">
          {blogData.map((data) => (
            <div key={data.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div
                className="bg-white rounded-lg shadow-md cursor-pointer"
                onClick={() => handleModalOpen(data)}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-64 object-cover rounded-t-lg sm:blur-sm transition-all sm:hover:blur-none"
                />
                <div className="p-4">
                  <h5 className="text-lg font-bold mb-2">{data.title}</h5>
                  <p className="text-gray-600">{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
              </>
  );
}

export default BlogSection;
