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

//06/11/2024
// import React, { useState } from 'react';
// import DubbingRequirements from './DubbingRequirements';

// const QuoteGeneratorForm = () => {
//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');
//   const [openClosed, setOpenClosed] = useState('open');
//   const [deadline, setDeadline] = useState('');

//   const handleMinutesChange = (e) => {
//     setMinutes(e.target.value);
//   };

//   const handleSecondsChange = (e) => {
//     setSeconds(e.target.value);
//   };

//   const handleOpenClosedChange = (e) => {
//     setOpenClosed(e.target.value);
//   };

//   const handleDeadlineChange = (e) => {
//     setDeadline(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Quote generated with duration:', minutes, 'minutes', seconds, 'seconds');
//     console.log('Open/Closed option:', openClosed);
//     console.log('Deadline:', deadline);
//   };

//   return (
//     <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
//       {/* <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2> */}
//       <DubbingRequirements />

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Service Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>QVO Dubbing</option>
//         </select>
//       </div>

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
//           On Screen Editing
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

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Output Format</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>MP4</option>
//         </select>
//       </div>

//       {/* Deadline */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deadline</label>
//         <input
//           type="date"
//           value={deadline}
//           onChange={handleDeadlineChange}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           required
//         />
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
  const [formData, setFormData] = useState(null);
 
  const handleMinutesChange = (e) => setMinutes(e.target.value);
  const handleSecondsChange = (e) => setSeconds(e.target.value);
  const handleOpenClosedChange = (e) => setOpenClosed(e.target.value);
  const handleDeadlineChange = (e) => setDeadline(e.target.value);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const collectedData = {
      serviceType: 'QVO Dubbing', // Default Service Type
      duration: `${minutes} minutes ${seconds} seconds`,
      openClosed,
      deadline,
      outputFormat: 'MP4', // Example format
      languagePair: 'English to Spanish',
      targetDialect: 'Mexican Spanish',
      deliverableType: 'High-Res',
      aiVoiceover: true,
      voiceMatch: true,
      lipMatch: true,
      premixFilesShared: true,
      meFilesShared: true,
      soundBalancing: true,
      onScreenEditing: true,
      openProjectFiles: true,
    };
    setFormData(collectedData);
  };
 
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
        <DubbingRequirements />
 
        {/* Service Type Field */}
        <div className="mb-4 p-4 border rounded bg-white shadow">
          <label className="block mb-2">Service Type</label>
          <select className="w-full border p-2 rounded mb-4">
            <option>QVO Dubbing</option>
          </select>
        </div>
 
        {/* Duration Fields */}
        <div className="mb-4 p-4 border rounded bg-white shadow">
          <label className="block mb-2">Duration:</label>
          <div className="flex space-x-4">
            <div className="flex-1">
              <input type="number" value={minutes} onChange={handleMinutesChange} placeholder="Minutes" required className="border p-2 rounded w-full" />
            </div>
            <div className="flex-1">
              <input type="number" value={seconds} onChange={handleSecondsChange} placeholder="Seconds" required className="border p-2 rounded w-full" />
            </div>
          </div>
        </div>
 
        {/* Open/Closed Options */}
        <div className="mb-4 p-4 border rounded bg-white shadow">
          <h4 className="font-semibold mb-2">Open/Closed Options</h4>
          <label>
            <input type="radio" name="openClosed" value="open" checked={openClosed === 'open'} onChange={handleOpenClosedChange} />
            Open
          </label>
          <label>
            <input type="radio" name="openClosed" value="closed" checked={openClosed === 'closed'} onChange={handleOpenClosedChange} />
            Closed
          </label>
        </div>
 
        {/* Deadline Field */}
        <div className="mb-4 p-4 border rounded bg-white shadow">
          <label>Deadline</label>
          <input type="date" value={deadline} onChange={handleDeadlineChange} required className="border p-2 rounded w-full" />
        </div>
 
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Generate Quote</button>
      </form>
 
      {/* Display Table with Form Data */}
      {formData && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Selected Data Summary</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Field</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(formData).map(([key, value]) => (
                <tr key={key}>
                  <td className="border px-4 py-2 font-semibold">{key}</td>
                  <td className="border px-4 py-2">{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
 
export default QuoteGeneratorForm;
 
