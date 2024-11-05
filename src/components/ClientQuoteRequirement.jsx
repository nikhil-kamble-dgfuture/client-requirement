// src/components/ClientQuoteRequirement.jsx
// import React from 'react';

// const ClientQuoteRequirement = () => {
//   return (
//     <>
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Client Quote Requirement</h2>
//       {/* Add more specific requirements or forms here */}
//       <p>Form fields for Client Quote Requirement will go here.</p>
//     </div>

    

//     </>
//   );
// };

// export default ClientQuoteRequirement;

//?

// src/components/ClientQuoteRequirement.jsx



// import React, { useState } from 'react';
// import Switcher1 from './Switcher1';

// const CheckboxGroup = ({ checkboxes, handleCheckboxChange }) => {
//   return (
//     <div className="mb-4 p-4 border rounded bg-white shadow">

//       {/* service Type */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Service Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>Dubbing</option>
//           <option>Voiceover</option>
//           <option>Translation</option>
//         </select>
//       </div>

//       {/* Ai VOice Over */}
//       <h4 className="font-semibold mb-2">Checkbox Options</h4>
//       <label className="block mb-2">
//         <input
//           type="checkbox"
//           name="aiVoiceover"
//           checked={checkboxes.aiVoiceover}
//           onChange={handleCheckboxChange}
//           className="mr-2"
//         />
//         AI Voiceover
//       </label>
//       {/* ... other checkboxes ... */}
//     </div>
//   );
// };

  
// // Open/Closed radio button group
// const RadioGroup = ({ openClosed, handleOpenClosedChange }) => {
//   return (
//     <div className="mb-4 p-4 border rounded bg-white shadow">
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
//   );
// };

// const CaptionTypeToggle = ({ captionType, setCaptionType }) => {
//   return (
//     <div className="flex items-center mb-4 p-4 border rounded bg-white shadow">
//       <label className="mr-2 font-semibold">Caption Type:</label>
//       <label className="inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           checked={captionType === 'open'}
//           onChange={() => setCaptionType((prev) => (prev === 'open' ? 'closed' : 'open'))}
//           className="sr-only"
//         />
//         <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${captionType === 'open' ? 'bg-blue-600' : 'bg-gray-200'}`}>
//           <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${captionType === 'open' ? 'translate-x-full' : 'border border-gray-300'}`}></div>
//         </div>
//       </label>
//       <span className="ml-2">{captionType === 'open' ? 'Open Captions' : 'Closed Captions'}</span>
//     </div>
//   );
// };

// const DubbingRequirements = () => {
//   const [checkboxes, setCheckboxes] = useState({
//     aiVoiceover: false,
//     voiceMatch: false,
//     lipMatch: false,
//     premixFiles: false,
//     meFiles: false,
//     soundBalancing: false,
//   });

//   const [openClosed, setOpenClosed] = useState('');
//   const [captionType, setCaptionType] = useState('closed');
//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckboxes((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleOpenClosedChange = (e) => {
//     setOpenClosed(e.target.value);
//   };

//   const handleMinutesChange = (e) => {
//     setMinutes(e.target.value);
//   };

//   const handleSecondsChange = (e) => {
//     setSeconds(e.target.value);
//   };

//   return (
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
      
//       <CheckboxGroup
//         checkboxes={checkboxes}
//         handleCheckboxChange={handleCheckboxChange}
//       />
      
//       <RadioGroup
//         openClosed={openClosed}
//         handleOpenClosedChange={handleOpenClosedChange}
//       />

//       {/* Language Pair */}
//         <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Language Pair</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>English to Spanish</option>
//           <option>English to French</option>
//           <option>English to German</option>
//         </select>
//       </div>

//         {/* Target Language */}
//         <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Target Language Dialect</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>Voice Match Needed</option>
//           <option>Lip-Match Needed</option>
//           <option>Premix Files Shared by client</option>
//         </select>
//         </div>   

//           {/* caption toggle */}
//       <CaptionTypeToggle captionType={captionType} setCaptionType={setCaptionType} />

   
      

//             {/*toggle button  */}
//           {/* voice match lip match button */}
//     <div className="mb-4 p-4 border rounded bg-white shadow">
//   <div className="flex items-center mb-2">
//     <label className="mr-2 text-sm font-medium text-gray-900">Voice Match Needed</label>
//     <div className="flex-1">
//       <Switcher1 />
//     </div>
//   </div>
  
//   <div className="flex items-center mb-2">
//     <label className="mr-2 text-sm font-medium text-gray-900">Lip Match Needed</label>
//     <div className="flex-1">
//       <Switcher1 />
//     </div>
//   </div>
  
//   <div className="flex items-center">
//     <label className="mr-2 text-sm font-medium text-gray-900">Premix Files Shared by Client</label>
//     <div className="flex-1">
//       <Switcher1 />
//     </div>
//   </div>
// </div>
//        {/* M&E Files shared by client */}
//        <div className="mb-4 p-4 border rounded bg-white shadow">
//       <div className="flex items-center mb-2">
//      <label className="mr-2 text-sm font-medium text-gray-900">Voice Match Needed</label>
//       <div className="flex-1">
//       <Switcher1 />
//       </div>
//       </div>
//   </div>
       
//     </div>
//   );
// };

// const ClientQuoteRequirement = () => {
//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Client Quote Requirement</h2>
//       <p>Form fields for Client Quote Requirement will go here.</p>
      
//       {/* Dubbing Requirements Section */}
//       <DubbingRequirements />
//     </div>
//   );
// };

// export default ClientQuoteRequirement;

//?2

// import React, { useState } from 'react';
// import Switcher1 from './Switcher1';
// import QVORequirements from './QVORequirements';

// const CheckboxGroup = ({ checkboxes, handleCheckboxChange, handleNumberOfFilesChange, handleDurationChange, numberOfFiles, duration }) => {
//   return (
//     <div className="mb-4 p-4 border rounded bg-white shadow">

//       {/* Service Type */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Service Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>Dubbing</option>
//           <option>Voiceover</option>
//           <option>Translation</option>
//         </select>
//       </div>

//       {/* AI Voice Over */}
//       <h4 className="font-semibold mb-2">Checkbox Options</h4>
//       <label className="block mb-2">
//         <input
//           type="checkbox"
//           name="aiVoiceover"
//           checked={checkboxes.aiVoiceover}
//           onChange={handleCheckboxChange}
//           className="mr-2"
//         />
//         AI Voiceover
//       </label>

//       {/* Number of Files and Duration */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2 text-sm font-medium text-gray-900">Number of Files and Duration</label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <label htmlFor="files-input" className="block mb-1">Number of Files:</label>
//             <input 
//               type="number" 
//               id="files-input" 
//               value={numberOfFiles}
//               onChange={handleNumberOfFilesChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="duration-input" className="block mb-1">Total Duration</label>
//             <input 
//               type="number" 
//               id="duration-input" 
//               value={duration}
//               onChange={handleDurationChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Open/Closed radio button group
// const RadioGroup = ({ openClosed, handleOpenClosedChange }) => {
//   return (
//     <div className="mb-4 p-4 border rounded bg-white shadow">
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
//   );
// };

// const CaptionTypeToggle = ({ captionType, setCaptionType }) => {
//   return (
//     <div className="flex items-center mb-4 p-4 border rounded bg-white shadow">
//       <label className="mr-2 font-semibold">Caption Type:</label>
//       <label className="inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           checked={captionType === 'open'}
//           onChange={() => setCaptionType((prev) => (prev === 'open' ? 'closed' : 'open'))}
//           className="sr-only"
//         />
//         <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${captionType === 'open' ? 'bg-blue-600' : 'bg-gray-200'}`}>
//           <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${captionType === 'open' ? 'translate-x-full' : 'border border-gray-300'}`}></div>
//         </div>
//       </label>
//       <span className="ml-2">{captionType === 'open' ? 'Yes' : 'No'}</span>
//     </div>
//   );
// };

// const DubbingRequirements = () => {
//   const [checkboxes, setCheckboxes] = useState({
//     aiVoiceover: false,
//     voiceMatch: false,
//     lipMatch: false,
//     premixFiles: false,
//     meFiles: false,
//     soundBalancing: false,
//   });

//   const [openClosed, setOpenClosed] = useState('');
//   const [captionType, setCaptionType] = useState('closed');
//   const [numberOfFiles, setNumberOfFiles] = useState(0); // state for number of files
//   const [duration, setDuration] = useState(0); // state for duration

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckboxes((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleOpenClosedChange = (e) => {
//     setOpenClosed(e.target.value);
//   };

//   const handleNumberOfFilesChange = (e) => {
//     setNumberOfFiles(e.target.value); // update number of files
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value); // update duration
//   };

  
//   return (
//     <div className="mb-6">
//       <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
      
//       <CheckboxGroup
//         checkboxes={checkboxes}
//         handleCheckboxChange={handleCheckboxChange}
//         handleNumberOfFilesChange={handleNumberOfFilesChange}
//         handleDurationChange={handleDurationChange}
//         numberOfFiles={numberOfFiles}
//         duration={duration}
//       />
      
//       <RadioGroup
//         openClosed={openClosed}
//         handleOpenClosedChange={handleOpenClosedChange}
//       />

//       {/* Language Pair */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Language Pair</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>English to Spanish</option>
//           <option>English to French</option>
//           <option>English to German</option>
//         </select>
//       </div>

//       {/* Target Language */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Target Language Dialect</label>
//         <select className="w-full border p-2 rounded mb-4">
//           <option>Voice Match Needed</option>
//           <option>Lip-Match Needed</option>
//           <option>Premix Files Shared by client</option>
//         </select>
//       </div>

   
//       {/* Toggle Button */}
//       {/* <div className="mb-4 p-4 border rounded bg-white shadow">
//         <div className="flex items-center mb-2">
//           <label className="mr-2 text-sm font-medium text-gray-900">Voice Match Needed</label>
//           <div className="flex-1">
//             <Switcher1 />
//           </div>
//         </div>
        
//         <div className="flex items-center mb-2">
//           <label className="mr-2 text-sm font-medium text-gray-900">Lip Match Needed</label>
//           <div className="flex-1">
//             <Switcher1 />
//           </div>
//         </div>
        
//         <div className="flex items-center">
//           <label className="mr-2 text-sm font-medium text-gray-900">Premix Files Shared by Client</label>
//           <div className="flex-1">
//             <Switcher1 />
//           </div>
//         </div>
//       </div> */}

//       {/* M&E Files Shared by Client */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <div className="flex items-center mb-2">
//           <label className="mr-2 text-sm font-medium text-gray-900">M&E Files Shared by Client</label>
//           <div className="flex-1">
//             <Switcher1 />
//           </div>
//         </div>
//       </div>

//         {/* Number of Files and Duration */}
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2 text-sm font-medium text-gray-900">Number of Files and Duration</label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <label htmlFor="files-input" className="block mb-1">Number of Files:</label>
//             <input 
//               type="number" 
//               id="files-input" 
//               value={numberOfFiles}
//               onChange={handleNumberOfFilesChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="duration-input" className="block mb-1">Total Duration</label>
//             <input 
//               type="number" 
//               id="duration-input" 
//               value={duration}
//               onChange={handleDurationChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
//               placeholder="0" 
//               required 
//             />
//           </div>
//         </div>
//       </div>

//        {/* Language Pair */}
//          {/* <div className="mb-4 p-4 border rounded bg-white shadow">
//          <label className="block mb-2">Language Pair</label>
//         <select className="w-full border p-2 rounded mb-4">           <option>English to Spanish</option>
//            <option>English to Spanish</option>
//            <option>English to French</option>
//            <option>English to German</option>

//          </select>
//        </div> */}

//        {/* male  and female */}
//        <QVORequirements/>

//            {/* Caption Toggle */}
//       <CaptionTypeToggle captionType={captionType} setCaptionType={setCaptionType} />


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

//       {/* Output Format */}
      
//         <div className="mb-4 p-4 border rounded bg-white shadow">
//          <label className="block mb-2">Output Format</label>
//         <select className="w-full border p-2 rounded mb-4">
//            <option>mp3</option>
//            <option>mp4</option>
//            <option>wav</option>
//            <option>srt</option>
//            <option>vtt</option>
//          </select>
//        </div> 


//        <div className="mb-4 p-4 border rounded bg-white shadow">
//          <label className="block mb-2">Deliverable Type</label>
//         <select className="w-full border p-2 rounded mb-4">
//            <option>low-res</option>
//            <option>high-res</option>
//            <option>premix</option>
//            <option>mix</option>
//          </select>
//        </div> 



       
//     </div>
//   );
// };

// const ClientQuoteRequirement = () => {
//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Client Quote Requirement</h2>
//       <p>Form fields for Client Quote Requirement will go here.</p>
      
//       {/* Dubbing Requirements Section */}
//       <DubbingRequirements />
//     </div>
//   );
// };

// export default ClientQuoteRequirement;


//05/11

import React, { useState } from 'react';
import Switcher1 from './Switcher1';
import QVORequirements from './QVORequirements';

const CheckboxGroup = ({ checkboxes, handleCheckboxChange, handleNumberOfFilesChange, handleDurationChange, numberOfFiles, duration }) => {
  return (
    <div className="mb-4 p-4 border rounded bg-white shadow">
      {/* Service Type */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Service Type</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>Dubbing</option>
          <option>Voiceover</option>
          <option>Translation</option>
        </select>
      </div>

      {/* AI Voice Over */}
      <h4 className="font-semibold mb-2">Checkbox Options</h4>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="aiVoiceover"
          checked={checkboxes.aiVoiceover}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        AI Voiceover
      </label>

      {/* Number of Files and Duration */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2 text-sm font-medium text-gray-900">Number of Files and Duration</label>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="files-input" className="block mb-1">Number of Files:</label>
            <input 
              type="number" 
              id="files-input" 
              value={numberOfFiles}
              onChange={handleNumberOfFilesChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
          <div className="flex-1">
            <label htmlFor="duration-input" className="block mb-1">Total Duration</label>
            <input 
              type="number" 
              id="duration-input" 
              value={duration}
              onChange={handleDurationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Open/Closed radio button group
const RadioGroup = ({ openClosed, handleOpenClosedChange }) => {
  return (
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
  );
};

const CaptionTypeToggle = ({ captionType, setCaptionType }) => {
  return (
    <div className="flex items-center mb-4 p-4 border rounded bg-white shadow">
      <label className="mr-2 font-semibold">Caption Type:</label>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={captionType === 'open'}
          onChange={() => setCaptionType((prev) => (prev === 'open' ? 'closed' : 'open'))}
          className="sr-only"
        />
        <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${captionType === 'open' ? 'bg-blue-600' : 'bg-gray-200'}`}>
          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${captionType === 'open' ? 'translate-x-full' : 'border border-gray-300'}`}></div>
        </div>
      </label>
      <span className="ml-2">{captionType === 'open' ? 'Yes' : 'No'}</span>
    </div>
  );
};

const DubbingRequirements = () => {
  const [checkboxes, setCheckboxes] = useState({
    aiVoiceover: false,
    voiceMatch: false,
    lipMatch: false,
    premixFiles: false,
    meFiles: false,
    soundBalancing: false,
  });

  const [openClosed, setOpenClosed] = useState('open'); // default value set to 'open'
  const [captionType, setCaptionType] = useState('closed');
  const [numberOfFiles, setNumberOfFiles] = useState(0);
  const [duration, setDuration] = useState(0);
  const [deadline, setDeadline] = useState('');

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleOpenClosedChange = (e) => {
    setOpenClosed(e.target.value);
  };

  const handleNumberOfFilesChange = (e) => {
    setNumberOfFiles(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">AI Dubbing Requirements</h3>
      
      <CheckboxGroup
        checkboxes={checkboxes}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberOfFilesChange={handleNumberOfFilesChange}
        handleDurationChange={handleDurationChange}
        numberOfFiles={numberOfFiles}
        duration={duration}
      />
      
      <RadioGroup
        openClosed={openClosed}
        handleOpenClosedChange={handleOpenClosedChange}
      />

      {/* Language Pair */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Language Pair</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>English to Spanish</option>
          <option>English to French</option>
          <option>English to German</option>
        </select>
      </div>

      {/* Target Language Dialect */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Target Language Dialect</label>
        <select className="w-full border p-2 rounded mb-4">
          <option>Voice Match Needed</option>
          <option>Lip-Match Needed</option>
          <option>Premix Files Shared by client</option>
        </select>
      </div>

      {/* M&E Files Shared by Client */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <div className="flex items-center mb-2">
          <label className="mr-2 text-sm font-medium text-gray-900">M&E Files Shared by Client</label>
          <div className="flex-1">
            <Switcher1 />
          </div>
        </div>
      </div>

      {/* Number of Files and Duration */}
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2 text-sm font-medium text-gray-900">Number of Files and Duration</label>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="files-input" className="block mb-1">Number of Files:</label>
            <input 
              type="number" 
              id="files-input" 
              value={numberOfFiles}
              onChange={handleNumberOfFilesChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
          <div className="flex-1">
            <label htmlFor="duration-input" className="block mb-1">Total Duration</label>
            <input 
              type="number" 
              id="duration-input" 
              value={duration}
              onChange={handleDurationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="0" 
              required 
            />
          </div>
        </div>
      </div>

      {/* QVO Requirements */}
      <QVORequirements />

      {/* Caption Type Toggle */}
      <CaptionTypeToggle captionType={captionType} setCaptionType={setCaptionType} />

      {/* Deadline */}
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

      <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
        Generate Quote
      </button>
    </div>
  );
};

const ClientQuoteRequirement = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Client Quote Requirement</h2>
      <p>Form fields for Client Quote Requirement will go here.</p>
      
      {/* Dubbing Requirements Section */}
      <DubbingRequirements />
    </div>
  );
};

export default ClientQuoteRequirement;
