'use client';

import { useState } from 'react';
import Navbar from '../components/layout/Navbar.tsx';
import Footer from '../components/layout/Footer.tsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">Contact</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Have questions about my photography, workshops, or prints? I'd love to hear from you.
            Fill out the form below or use the direct contact information.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair mb-8">Get in Touch</h2>
              
              {formSubmitted ? (
                <div className="bg-earth-tone/20 border border-earth-tone p-6 mb-8">
                  <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-off-white mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-off-white mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-off-white mb-2">Inquiry Type *</label>
                  <select 
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="workshop">Workshop Inquiry</option>
                    <option value="print">Print Purchase</option>
                    <option value="commission">Commission Request</option>
                    <option value="licensing">Licensing Inquiry</option>
                    <option value="collaboration">Collaboration Proposal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-off-white mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-off-white mb-2">Message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="btn-primary px-8 py-3">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-3">Email</h3>
                  <p className="text-off-white">info@carlosp.photography</p>
                  <p className="text-medium-gray mt-1">For general inquiries and questions</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-3">Workshops</h3>
                  <p className="text-off-white">workshops@carlosp.photography</p>
                  <p className="text-medium-gray mt-1">For workshop bookings and information</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-3">Print Sales</h3>
                  <p className="text-off-white">prints@carlosp.photography</p>
                  <p className="text-medium-gray mt-1">For inquiries about print purchases and custom orders</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-3">Response Time</h3>
                  <p className="text-medium-gray">I aim to respond to all inquiries within 48 hours during business days. For urgent matters related to upcoming workshops, please indicate this in your subject line.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-3">Social Media</h3>
                  <div className="flex space-x-4 mt-3">
                    <a href="https://www.instagram.com/carlosp_landscapephotography" target="_blank" rel="noopener noreferrer" className="text-medium-gray hover:text-earth-tone transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-medium-gray hover:text-earth-tone transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-medium-gray hover:text-earth-tone transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-medium-gray hover:text-earth-tone transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-12 pt-8 border-t border-medium-gray">
                <h3 className="text-xl font-montserrat font-semibold text-earth-tone mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-montserrat font-semibold text-off-white mb-2">How do I book a workshop?</h4>
                    <p className="text-medium-gray">Workshop bookings can be made directly through the Workshops section of this website. For specific questions or group bookings, please contact workshops@carlosp.photography.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-montserrat font-semibold text-off-white mb-2">Do you offer private photography tours?</h4>
                    <p className="text-medium-gray">Yes, I offer private photography tours and one-on-one mentoring sessions. These can be customized to your specific needs and skill level. Please contact me with your requirements for a personalized quote.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-montserrat font-semibold text-off-white mb-2">What is your print shipping policy?</h4>
                    <p className="text-medium-gray">All prints are carefully packaged and shipped worldwide. Standard shipping is included in the print price for most countries. Delivery times vary by location, typically 7-14 business days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair text-center mb-12">Workshop Locations</h2>
          
          <div className="aspect-[16/9] bg-dark-slate relative">
            {/* In a real application, this would be a map showing workshop locations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-medium-gray">Interactive map of workshop locations would be displayed here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-medium-gray">
              I lead photography workshops in various stunning locations around the world, including Iceland, Norway, Scotland, the Dolomites, and more. 
              Check the <a href="/workshops" className="text-earth-tone hover:underline">Workshops</a> page for upcoming dates and locations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-earth-tone text-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to my newsletter to receive updates on new prints, upcoming workshops, and photography tips.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-off-white bg-opacity-10 border border-off-white border-opacity-30 text-off-white px-4 py-3 focus:outline-none focus:border-opacity-100"
                required
              />
              <button type="submit" className="bg-off-white text-earth-tone px-6 py-3 font-raleway font-semibold uppercase tracking-wider transition-all hover:bg-opacity-90">
                Subscribe
              </button>
            </form>
            
            <p className="text-sm mt-4 text-off-white text-opacity-80">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
