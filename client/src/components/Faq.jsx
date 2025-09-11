// Faq.js
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of video editing services do you offer?",
      answer: "We provide cinematic intros, color grading, LUTs & filters, music sync edits, wedding highlights, travel vlogs, and more. Each service is tailored to enhance your visuals professionally.",
    },
    {
      question: "Can I request a custom video style?",
      answer: "Absolutely! You can share your ideas or reference videos, and our editors will create a custom video tailored to your requirements.",
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, we offer a certain number of revisions depending on the package you choose, ensuring you are fully satisfied with the final video.",
    },
    {
      question: "What file formats do you deliver?",
      answer: "We deliver videos in MP4, MOV, and other popular formats compatible with social media, YouTube, or personal use. You can specify your preferred format.",
    },
    {
      question: "How long does it take to receive the edited video?",
      answer: "The delivery time depends on the complexity of the project. Simple edits may take 1-2 days, while detailed cinematic projects may take up to a week.",
    },
    {
      question: "How can I contact you for a project?",
      answer: "You can connect with us directly via WhatsApp or email. Click the 'Want this video' button on any of our video previews to start the conversation.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="max-w-3xl mx-auto flex flex-col gap-6 px-4 py-10">
        <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
        <h1 className="text-3xl font-semibold">Have Questions About Video Editing?</h1>
        <p className="text-sm text-slate-500 mt-2 mb-6">
          Get answers to common questions about our professional video editing services. Explore the workflow, delivery, and customization options.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-slate-200 py-4 cursor-pointer overflow-hidden"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openIndex === index ? "rotate-180" : ""} transition-transform duration-500`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-h-0 overflow-hidden ${
                openIndex === index ? "max-h-60 mt-2" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
