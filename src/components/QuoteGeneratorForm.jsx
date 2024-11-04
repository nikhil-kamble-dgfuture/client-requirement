// import React, { useState } from 'react';
// import DubbingRequirements from './DubbingRequirements';

// const QuoteGeneratorForm = () => {

//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');

//   const handleMinutesChange = (e) => {
//     setMinutes(e.target.value);
//   };

//   const handleSecondsChange = (e) => {
//     setSeconds(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Quote generated with duration:', minutes, 'minutes', seconds, 'seconds');
//   };

//   const handleOpenClosedChange = (e) => {
//     setOpenClosed(e.target.value);
//   };
//   return (
//     <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2>
//       <DubbingRequirements />

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Service Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>QVO Dubbing</option>
//         </select>
//       </div>

//       {/* Minutes and Seconds Input */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2 text-sm font-medium text-gray-900">Duration:</label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <label htmlFor="minutes-input" className="block mb-1">Minutes:</label>
//             <input 
//               type="number" 
//               id="minutes-input" 
//               value={minutes}
//               onChange={handleMinutesChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="seconds-input" className="block mb-1">Seconds:</label>
//             <input 
//               type="number" 
//               id="seconds-input" 
//               value={seconds}
//               onChange={handleSecondsChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//         </div>
//       </div>
      

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//       <h4 className="font-semibold mb-2">Open/Closed Options</h4>
//       <label className="block mb-2">
//         <input
//           type="radio"
//           name="openClosed"
//           value="open"
//           checked={openClosed === 'open'}
//           onChange={handleOpenClosedChange}
//           className="mr-2"
//         />
//         Open
//       </label>
//       <label className="block mb-2">
//         <input
//           type="radio"
//           name="openClosed"
//           value="closed"
//           checked={openClosed === 'closed'}
//           onChange={handleOpenClosedChange}
//           className="mr-2"
//         />
//         Closed
//       </label>
//     </div>

//       <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
//         Generate Quote
//       </button>
//     </form>
//   );
// };

// export default QuoteGeneratorForm;


// import React, { useState } from 'react';
// import DubbingRequirements from './DubbingRequirements';

// const QuoteGeneratorForm = () => {
//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');
//   const [openClosed, setOpenClosed] = useState('open'); // Default to 'open'

//   const handleMinutesChange = (e) => {
//     setMinutes(e.target.value);
//   };

//   const handleSecondsChange = (e) => {
//     setSeconds(e.target.value);
//   };

//   const handleOpenClosedChange = (e) => {
//     setOpenClosed(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Quote generated with duration:', minutes, 'minutes', seconds, 'seconds');
//     console.log('Open/Closed option:', openClosed);
//   };

//   return (
//     <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2>
//       <DubbingRequirements />

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Service Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>QVO Dubbing</option>
//         </select>
//       </div>

//       {/* Minutes and Seconds Input */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2 text-sm font-medium text-gray-900">Duration:</label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <label htmlFor="minutes-input" className="block mb-1">Minutes:</label>
//             <input 
//               type="number" 
//               id="minutes-input" 
//               value={minutes}
//               onChange={handleMinutesChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="seconds-input" className="block mb-1">Seconds:</label>
//             <input 
//               type="number" 
//               id="seconds-input" 
//               value={seconds}
//               onChange={handleSecondsChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <h4 className="font-semibold mb-2">Open/Closed Options</h4>
//         <label className="block mb-2">
//           <input
//             type="radio"
//             name="openClosed"
//             value="open"
//             checked={openClosed === 'open'}
//             onChange={handleOpenClosedChange}
//             className="mr-2"
//           />
//           On-Screen Editing 
//         </label>
//         <label className="block mb-2">
//           <input
//             type="radio"
//             name="openClosed"
//             value="closed"
//             checked={openClosed === 'closed'}
//             onChange={handleOpenClosedChange}
//             className="mr-2"
//           />
//           Open/Project Files Provided
//         </label>
//       </div>


//       {/* output format mp4 */}
      
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Service Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>MP4</option>
//         </select>
//       </div>
//       <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
//         Generate Quote
//       </button>
//     </form>
//   );
// };

// export default QuoteGeneratorForm;

import React, { useState } from 'react';
import DubbingRequirements from './DubbingRequirements';

const QuoteGeneratorForm = () => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [openClosed, setOpenClosed] = useState('open');
  const [deadline, setDeadline] = useState('');

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  const handleOpenClosedChange = (e) => {
    setOpenClosed(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote generated with duration:', minutes, 'minutes', seconds, 'seconds');
    console.log('Open/Closed option:', openClosed);
    console.log('Deadline:', deadline);
  };

  return (
    <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2>
      <DubbingRequirements />

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Service Type</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>QVO Dubbing</option>
        </select>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2 text-sm font-medium text-gray-900">Duration:</label>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="minutes-input" className="block mb-1">Minutes:</label>
            <input 
              type="number" 
              id="minutes-input" 
              value={minutes}
              onChange={handleMinutesChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
          <div className="flex-1">
            <label htmlFor="seconds-input" className="block mb-1">Seconds:</label>
            <input 
              type="number" 
              id="seconds-input" 
              value={seconds}
              onChange={handleSecondsChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={handleDeadlineChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <h4 className="font-semibold mb-2">Open/Closed Options</h4>
        <label className="block mb-2">
          <input
            type="radio"
            name="openClosed"
            value="open"
            checked={openClosed === 'open'}
            onChange={handleOpenClosedChange}
            className="mr-2"
          />
          Open
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="openClosed"
            value="closed"
            checked={openClosed === 'closed'}
            onChange={handleOpenClosedChange}
            className="mr-2"
          />
          Closed
        </label>
      </div>

      <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
        Generate Quote
      </button>
    </form>
  );
};

export default QuoteGeneratorForm;
