import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-amber-100 shadow-lg rounded-2xl p-10 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-6">📞 Contact Us</h2>
        <p className="text-base text-gray-700 mb-2">
          Email: <span className="font-medium">support@canteen.com</span>
        </p>
        <p className="text-base text-gray-700 mb-2">
          Phone: <span className="font-medium">+91 9207816074</span>
        </p>
        <p className="text-base text-gray-700">
          Address: <span className="font-medium">Govt Model Engineering College, Thrikkakkara ,Ernakulam</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
