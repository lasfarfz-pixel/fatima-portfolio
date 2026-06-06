import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="max-w-6xl mx-auto px-8 py-16">

        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">

          <div className="flex-1">
            <span className="text-blue-700 font-semibold uppercase tracking-wide">
              SAP Certified Consultant
            </span>

            <h1 className="text-6xl font-bold mt-4 mb-4">
              Fatima-Ezzahra Lasfar
            </h1>

            <p className="text-2xl text-slate-600 mb-8">
              Supply Chain Specialist • Procurement Professional • Data Analytics Student
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/lasfarfz-pixel"
                target="_blank"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/fatima-ezzahra-lasfar"
                target="_blank"
                className="border border-slate-300 px-6 py-3 rounded-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/profile.jpg"
              alt="Fatima-Ezzahra Lasfar"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

        </div>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            SAP Certified Implementation Consultant and Purchasing &
            Supply Chain Specialist with more than 3 years of experience
            in procurement, inventory management, logistics operations,
            and business process optimization.

            Currently pursuing a Master's in International Management
            while expanding my expertise in Data Analytics, SQL,
            Python, Power BI and SAP S/4HANA.
          </p>
        </section>

{/* Key Achievements */}
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-6">
    Key Achievements
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-xl mb-2">
        Cost Reduction
      </h3>
      <p>Reduced procurement costs by 12%.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-xl mb-2">
        Inventory Accuracy
      </h3>
      <p>Improved inventory accuracy to 98%.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-xl mb-2">
        Amazon Performance
      </h3>
      <p>Maintained 99.9% order accuracy.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-xl mb-2">
        Sales Growth
      </h3>
      <p>Increased monthly sales by 15%.</p>
    </div>

  </div>
</section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "SAP S/4HANA",
              "Power BI",
              "SQL",
              "Python",
              "Excel",
              "Procurement",
              "Supply Chain",
              "Inventory Management",
              "Negotiation",
              "Logistics"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Professional Experience
          </h2>

          <div className="space-y-5">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl">
                Logistics Assistant — Amazon
              </h3>
              <p className="text-slate-500">
                Berlin | 2023–2024
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl">
                Purchasing & Logistics Coordinator — ALFAHORIZON
              </h3>
              <p className="text-slate-500">
                Casablanca | 2021–2022
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl">
                Sales Representative — Auto DANA
              </h3>
              <p className="text-slate-500">
                Marrakech | 2022
              </p>
            </div>

          </div>
        </section>

{/* Education & Certifications */}
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-6">
    Education & Certifications
  </h2>

  <div className="space-y-5">

     <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-bold text-xl">
        M.Sc. Data Analytics
      </h3>
      <p className="text-slate-500">
        Berlin School of Business and Innovation • 2026–2027
      </p>
    </div>
    
    
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-bold text-xl">
        M.A. International Management
      </h3>
      <p className="text-slate-500">
        IU International University • 2023–2025
      </p>
    </div>

   

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-bold text-xl">
        SAP Certified Implementation Consultant
      </h3>
      <p className="text-slate-500">
        SAP Business Suite End-to-End Business Processes • 2026–2027
      </p>
    </div>

  </div>
</section>
        {/* Contact */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Contact
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="mb-3">📍 Berlin, Germany</p>
            <p className="mb-3">📧 lasfarfz@gmail.com</p>
            <p>🌐 github.com/lasfarfz-pixel</p>
          </div>
        </section>

      </section>
    </main>
  );
}