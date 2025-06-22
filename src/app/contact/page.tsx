'use client';

import React, { FormEvent, useState } from 'react';
import FormError from '@/components/FormError';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    additionalInfo: ''
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) {
      errors.push('Name is required');
    }
    
    if (!formData.phoneNumber.trim()) {
      errors.push('Phone number is required');
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) {
      errors.push('Please enter a valid phone number');
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);
    setSubmitStatus('success');
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="max-w-2xl mx-auto px-6 sm:px-10">
        <h1 className="text-5xl font-serif text-center text-secondary mb-12">Contact Us</h1>
        
        {submitStatus === 'success' ? (
          <div className="bg-green-50 p-4 rounded-md mb-6">
            <p className="text-green-800 font-serif text-center">Thank you for your message! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {formErrors.length > 0 && <FormError errors={formErrors} />}
            
            <div>
              <label htmlFor="name" className="block text-base font-serif text-secondary mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-secondary bg-white/80 backdrop-blur-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-base font-serif text-secondary mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-secondary bg-white/80 backdrop-blur-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-base font-serif text-secondary mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-secondary bg-white/80 backdrop-blur-sm"
                placeholder="Enter any additional information or questions"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-serif py-3 px-6 rounded-md hover:bg-primary/90 transition-colors duration-200 mt-8"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  );
} 