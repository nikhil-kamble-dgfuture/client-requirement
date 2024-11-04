// // src/components/QuoteGeneratorForm.js
// import React from 'react';
// import DubbingRequirements from './DubbingRequirements';
// import QVORequirements from './QVORequirements';

// const QuoteGeneratorForm = () => {
//   return (
//     <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2>
//       <DubbingRequirements />
//       <QVORequirements />
//       <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
//         Generate Quote
//       </button>
//     </form>
//   );
// };

// export default QuoteGeneratorForm;


// src/components/QuoteGeneratorForm.js
import React from 'react';
import DubbingRequirements from './DubbingRequirements';
import QVORequirements from './QVORequirements';

const QuoteGeneratorForm = () => {
  return (
    <form className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Client Quote Generator</h2>
      <DubbingRequirements />
      <QVORequirements />
      <button type="submit" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
        Generate Quote
      </button>
    </form>
  );
};

export default QuoteGeneratorForm;
