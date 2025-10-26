'use client';
import { storeInfo } from '@/data/demo'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner';
interface LocationType {
  id: string | number; // Key can be string or number
  name: string;
  address: string;
}
interface StoreInfoType {
phone: string;
email: string;
whatsapp: string;
locations: LocationType[];
}

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function Content() {

const initialFormData: FormDataState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Type the event handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Type the form submission event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Cast storeInfo to our defined type for type safety
    const typedStoreInfo = storeInfo as StoreInfoType;

    // Simulate form submission
    setTimeout(() => {
      const message = `*New Contact Form Submission*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/${typedStoreInfo.whatsapp}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      // Reset form using the initial state object
      setFormData(initialFormData);
      
      setIsSubmitting(false);
      toast.success('Message sent successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div> */}

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Call Us Card */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7B00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-[#FF7B00]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <a href={`tel:${(storeInfo as StoreInfoType).phone}`} className="text-gray-600 hover:text-[#FF7B00] transition-colors">
              {(storeInfo as StoreInfoType).phone}
            </a>
          </div>

          {/* Email Us Card */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#285430]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-[#285430]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <a href={`mailto:${(storeInfo as StoreInfoType).email}`} className="text-gray-600 hover:text-[#285430] transition-colors">
              {(storeInfo as StoreInfoType).email}
            </a>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FBCB0A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-[#FBCB0A]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
            <p className="text-gray-600">Mon - Sun</p>
            <p className="text-gray-600">8:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          {/* <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="mt-2"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="mt-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="mt-2"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#285430] hover:bg-[#1f4024] text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div> */}

          {/* Store Locations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
            
            {/* Map over locations with types */}
            {(storeInfo as StoreInfoType).locations.map((location: LocationType) => (
              <div 
                key={location.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#285430]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#285430]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {location.address}
                    </p>
                    {/* Fixed Google Maps URL */}
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#FF7B00] hover:text-[#e66d00] font-semibold transition-colors"
                    >
                      <MapPin size={16} className="mr-2" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  title="KSM Fruits Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.152417721868!2d76.0107773147842!3d8.67817499376678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05dec789f4171d%3A0x8845e9d50f86b467!2sKSM%20Fruits!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin" // Using a generic placeholder URL
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="bg-gradient-to-r from-[#285430] to-[#1f4024] rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-6 text-white/90">
            Our team is available to help you with any questions or special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href ={`tel:${(storeInfo as StoreInfoType).phone}`}
              className="bg-white text-[#285430] hover:bg-gray-100 rounded-full px-8 py-6 font-semibold"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </Link>
            <Link href={`https://wa.me/${(storeInfo as StoreInfoType).whatsapp}`}
              className="bg-[#25D366] text-white hover:bg-[#1fb855] rounded-full px-8 py-6 font-semibold"
            >
              <Mail className="mr-2" size={20} />
              WhatsApp Us
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Content
