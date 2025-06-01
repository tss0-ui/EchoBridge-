import React from 'react';

export default function ModelStatus({ status }) {
  return (
    <div className="p-4 bg-green-100 rounded shadow text-green-800">
      <strong>Model Status:</strong> {status}
    </div>
  );
}
