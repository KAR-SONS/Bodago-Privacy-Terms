import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <Link to="/privacy" className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-full bg-[#FF5500] flex items-center justify-center font-extrabold">
            B
          </div>
          <span className="font-bold text-xl">BodaGo</span>
        </Link>

        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Acceptance</h2>
            <p>By using BodaGo you agree to these terms. If you do not agree please do not use the app or website.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. What BodaGo Does</h2>
            <p>BodaGo is a directory platform that connects customers with local motorbike riders. We do not provide transport or delivery services directly. We are not responsible for the conduct of riders or customers during a trip or delivery.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. For Customers</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>BodaGo is free to use for customers</li>
              <li>Pricing is agreed directly between customer and rider</li>
              <li>BodaGo is not responsible for disputes between customers and riders</li>
              <li>Always agree on price before starting a trip</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. For Riders</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Riders must provide accurate information during registration</li>
              <li>Government ID is required for verification</li>
              <li>A monthly subscription fee of Ksh 100 is required to remain listed</li>
              <li>BodaGo reserves the right to remove any rider who provides false information or receives serious complaints</li>
              <li>Riders are independent and are not employees of BodaGo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Prohibited Use</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Do not use BodaGo for any illegal activities</li>
              <li>Do not register with false information</li>
              <li>Do not harass or threaten other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of BodaGo after changes means you accept the new terms.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">7. Contact</h2>
            <p>Questions about these terms? Contact us via WhatsApp at <a href="https://wa.me/254700500431" className="text-[#FF5500] hover:underline">+254 700 500 431</a></p>
          </section>

        </div>
      </div>
    </div>
  )
}