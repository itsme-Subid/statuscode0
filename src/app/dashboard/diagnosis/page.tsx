import React from 'react';

function Page() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Select your symptoms</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/2 px-4 mb-4">
          <select className="w-full h-32 text-xl rounded-3xl bg-gray-200 text-gray-600 text-center">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="w-1/2 px-4 mb-4">
          <select className="w-full h-32 text-xl rounded-3xl bg-gray-200 text-gray-600 text-center">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="w-1/2 px-4 mb-4">
          <select className="w-full h-32 text-xl rounded-3xl bg-gray-200 text-gray-600 text-center">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="w-1/2 px-4 mb-4">
          <select className="w-full h-32 text-xl rounded-3xl bg-gray-200 text-gray-600 text-center">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <button className="w-full h-32 text-xl rounded-3xl bg-gray-200 text-gray-600 text-center">Analyze</button>
      </div>
    </div>
  );
}

export default Page;
