import React from "react";

function Modal({ setOpenModal }) {
  return (
    <div className="bg-[rgba(159,158,158,0.59)] w-full h-full flex flex-col justify-center items-center">
      <div className="shadow-sm max-w-full max-h-full rounded-lg bg-white flex flex-col p-24">
        <div className="flex justify-end">
          <button
          className="bg-transparent border-0 text-2xl cursor-pointer"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="inline-block text-center mt-2">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="flex justify-center items-center text-center text-2xl">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-purple-700 m-2 border-0 text-white rounded-lg text-lg cur"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;