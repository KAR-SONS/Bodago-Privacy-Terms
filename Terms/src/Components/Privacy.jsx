import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <Link to="/terms" className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-full bg-[#FF5500] flex items-center justify-center font-extrabold">
            B
          </div>
          <span className="font-bold text-xl">BodaGo</span>
        </Link>

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: August 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Overview</h2>
            <p>BodaGo is a platform that connects customers with local motorbike riders in Kenya. We are committed to protecting your privacy. This policy explains what information we collect and how we use it.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Customer App</h2>
            <p>The BodaGo customer app does not collect any personal information from customers for trips but we collect emails and phone numbers for Deliveries. No account is required. Customers browse riders and contact them directly via their own phone or WhatsApp app. We do not store any customer data for trips but store customer details for deliveries.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Rider Registration</h2>
            <p>Riders who register on our website provide the following information:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400">
              <li>Full name and contact details</li>
              <li>Location (county, constituency, area)</li>
              <li>Profile photo</li>
              <li>Government ID (for verification only)</li>
              <li>Working hours and service type</li>
            </ul>
            <p className="mt-3">This information is used solely to verify rider identity and list them on the BodaGo platform. Government ID photos are stored securely and are never shared publicly.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Payment Information</h2>
            <p>Subscription payments are processed securely through Paystack. BodaGo does not store any card or MPesa payment details. Payment records are kept for accounting purposes only.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Data Security</h2>
            <p>All data is stored securely using Supabase infrastructure. Government ID documents are stored in private, access-controlled storage and are only accessible by BodaGo administrators for verification purposes.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Your Rights</h2>
            <p>Riders may request deletion of their account and data at any time by contacting us via WhatsApp. We will process deletion requests within 7 days.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Contact Us</h2>
            <p>For any privacy concerns contact us via WhatsApp at <a href="https://wa.me/254700500431" className="text-[#FF5500] hover:underline">+254 700 500 431</a></p>
          </section>

        </div>
      </div>
    </div>
  )
}