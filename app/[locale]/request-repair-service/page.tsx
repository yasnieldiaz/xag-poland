"use client";

import { useState } from "react";
import Image from "next/image";

export default function RequestRepairServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productModel: "",
    serialNumber: "",
    purchaseDate: "",
    issueDescription: "",
    priority: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Repair request submitted:", formData);
    alert("Thank you for your repair request. Our team will contact you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            Support
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Request Repair Service
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Submit a repair request and our technical team will get back to you
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Repair Request Form
              </h2>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company/Farm Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-navy">
                  Product Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="productModel"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Product Model *
                    </label>
                    <select
                      id="productModel"
                      name="productModel"
                      required
                      value={formData.productModel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option value="">Select a product</option>
                      <option value="p150-max">XAG P150 Max</option>
                      <option value="p150">XAG P150</option>
                      <option value="p100-pro">XAG P100 Pro</option>
                      <option value="p100">XAG P100</option>
                      <option value="r150">XAG R150</option>
                      <option value="ifbot-x3">IFBOT X3</option>
                      <option value="mower-t90">Mower T-90</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="serialNumber"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Serial Number *
                    </label>
                    <input
                      type="text"
                      id="serialNumber"
                      name="serialNumber"
                      required
                      value={formData.serialNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="purchaseDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Purchase Date
                    </label>
                    <input
                      type="date"
                      id="purchaseDate"
                      name="purchaseDate"
                      value={formData.purchaseDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option value="standard">Standard</option>
                      <option value="priority">Priority (XAG Care Plus)</option>
                      <option value="express">Express (XAG Care Premium)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Issue Description */}
              <div className="space-y-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-navy">
                  Issue Description
                </h3>
                <div>
                  <label
                    htmlFor="issueDescription"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Please describe the issue *
                  </label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    required
                    rows={6}
                    value={formData.issueDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                    placeholder="Describe the problem you're experiencing, when it started, and any error messages..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red text-white py-4 px-8 rounded-lg font-semibold hover:bg-brand-red-hover transition-colors"
              >
                Submit Repair Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
