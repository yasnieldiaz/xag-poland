"use client";

import { useState } from "react";

export default function RequestWarrantyServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productModel: "",
    serialNumber: "",
    purchaseDate: "",
    purchaseLocation: "",
    issueDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Warranty claim submitted:", formData);
    alert("Thank you for your warranty claim. Our team will review and respond within 48 hours.");
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
            Request Warranty Service
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Submit a warranty claim for your XAG product. Our team will review
            your request and respond within 48 hours.
          </p>
        </div>
      </section>

      {/* Warranty Info */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-main">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              Warranty Coverage Information
            </h3>
            <p className="text-blue-800 text-sm">
              XAG products come with a standard 12-month warranty from the date
              of purchase. Extended warranty options are available through XAG
              Care Express. Please have your proof of purchase ready when
              submitting a warranty claim.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Warranty Claim Form
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

              {/* Product & Purchase Information */}
              <div className="space-y-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-navy">
                  Product & Purchase Information
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
                      Purchase Date *
                    </label>
                    <input
                      type="date"
                      id="purchaseDate"
                      name="purchaseDate"
                      required
                      value={formData.purchaseDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="purchaseLocation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Purchase Location *
                    </label>
                    <input
                      type="text"
                      id="purchaseLocation"
                      name="purchaseLocation"
                      required
                      value={formData.purchaseLocation}
                      onChange={handleChange}
                      placeholder="Dealer/Store name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Issue Description */}
              <div className="space-y-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-navy">
                  Warranty Claim Details
                </h3>
                <div>
                  <label
                    htmlFor="issueDescription"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Please describe the defect or issue *
                  </label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    required
                    rows={6}
                    value={formData.issueDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                    placeholder="Describe the defect, when it occurred, and any relevant details..."
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>Note:</strong> Please have your proof of purchase (receipt
                or invoice) available. We may request additional documentation to
                process your warranty claim.
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red text-white py-4 px-8 rounded-lg font-semibold hover:bg-brand-red-hover transition-colors"
              >
                Submit Warranty Claim
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
