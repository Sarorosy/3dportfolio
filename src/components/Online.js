import React from 'react';

export default function Online({ className = "" }) {
  return (
    <div className={`flex flex-col items-center  ${className}`}>
      {/* <p className="text-sm text-right text-gray-300 ">Based in Chennai</p> */}
      <div className="flex items-center space-x-2">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
          <div className="relative flex h-2.5 w-2.5 items-center justify-center rounded-full bg-transparent">
            <div className="h-2 w-2 rounded-full bg-green-400" />
          </div>
        </div>
        <span className="text-sm font-medium text-gray-500">
          Available for a full-time position
        </span>
      </div>
    </div>
  );
}
