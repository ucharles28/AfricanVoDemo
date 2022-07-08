import React, { useState } from 'react';
// import validator from "validator";

// const UserReview = ({ nextStep, prevStep, handleFormData, values }) => {
//   const [error, setError] = useState(false);

//   const submitFormData = (e) => {
//     e.preventDefault();

//     if (
//       validator.isEmpty(values.voicerange)
//     ) {
//       setError(true);
//     } else {
//       nextStep();
//     }
//   };

//   return (
//     <div className="flow-root">
//             <div className="ml-10 mb-5 float-left justify-start">
//               <button 
//                 role="button" 
//                 className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6" 
//                 onClick={prevStep}
//               >
//                 Back
//               </button>
//             </div>
//             <div className="mr-10 mb-5 float-right justify-end">
//               <button 
//                 role="button" 
//                 className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-6" 
//                 onClick={nextStep}
//               >
//                 Submit Profile
//               </button>
//             </div>
//           </div>
//   )
// }
function UserReview () {
    return (
        <h1>User Review</h1>
    );
};

export default UserReview;
