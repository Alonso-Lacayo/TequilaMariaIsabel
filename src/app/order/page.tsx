'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import FormError from '@/components/FormError';

interface FormErrors {
  [key: string]: string;
}

export default function OrderPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    purchaserName: '',
    phone: '',
    licenseId: '',
    permitExpiration: '',
    address: '',
    paymentMethod: 'Online payment',
    deliveryInstructions: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Company name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Purchaser name validation
    if (!formData.purchaserName.trim()) {
      newErrors.purchaserName = 'Purchaser name is required';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Invalid phone number';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement actual form submission logic here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form after successful submission
      setFormData({
        companyName: '',
        email: '',
        purchaserName: '',
        phone: '',
        licenseId: '',
        permitExpiration: '',
        address: '',
        paymentMethod: 'Online payment',
        deliveryInstructions: ''
      });
      setErrors({});
      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit order. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-serif text-primary text-center mb-8">Place Your Order</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company name (required):
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter name or DBA"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 ${
                    errors.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.companyName && <FormError message={errors.companyName} />}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address (required):
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && <FormError message={errors.email} />}
              </div>

              {/* Purchaser Name */}
              <div>
                <label htmlFor="purchaserName" className="block text-sm font-medium text-gray-700 mb-1">
                  Purchaser name (required):
                </label>
                <input
                  type="text"
                  id="purchaserName"
                  name="purchaserName"
                  value={formData.purchaserName}
                  onChange={handleChange}
                  placeholder="Enter contact name"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 ${
                    errors.purchaserName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.purchaserName && <FormError message={errors.purchaserName} />}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number (required):
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter contact phone"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.phone && <FormError message={errors.phone} />}
              </div>

              {/* License ID */}
              <div>
                <label htmlFor="licenseId" className="block text-sm font-medium text-gray-700 mb-1">
                  License or permit ID number:
                </label>
                <input
                  type="text"
                  id="licenseId"
                  name="licenseId"
                  value={formData.licenseId}
                  onChange={handleChange}
                  placeholder="Enter license ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                />
              </div>

              {/* Permit Expiration */}
              <div>
                <label htmlFor="permitExpiration" className="block text-sm font-medium text-gray-700 mb-1">
                  Permit expiration date:
                </label>
                <input
                  type="date"
                  id="permitExpiration"
                  name="permitExpiration"
                  value={formData.permitExpiration}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address including city, state, and ZIP (required):
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.address && <FormError message={errors.address} />}
            </div>

            {/* Payment Method */}
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                Requested payment method (required):
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                required
              >
                <option value="Online payment">Online payment</option>
                <option value="Mailed check">Mailed check</option>
                <option value="Check on delivery">Check on delivery</option>
                <option value="Check to distributor">Check to distributor</option>
              </select>
            </div>

            {/* Delivery Instructions */}
            <div>
              <label htmlFor="deliveryInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery hours and special instructions:
              </label>
              <textarea
                id="deliveryInstructions"
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                onChange={handleChange}
                placeholder="Please offer specific locations, days, and times for our team to deliver our product to you."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-primary text-white font-serif text-lg rounded-md transition-colors duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order'}
              </button>
            </div>

            {/* General Error Message */}
            {errors.submit && (
              <div className="text-center">
                <FormError message={errors.submit} />
              </div>
            )}
          </form>
        </motion.div>
      </main>
    </div>
  );
} 