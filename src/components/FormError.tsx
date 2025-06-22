import React from 'react';

interface FormErrorProps {
  errors: string[];
}

export default function FormError({ errors }: FormErrorProps) {
  if (!errors || errors.length === 0) return null;

  return (
    <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
      <ul className="list-disc list-inside space-y-1">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
} 