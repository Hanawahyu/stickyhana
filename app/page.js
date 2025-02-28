import Navbar from "../components/Navbar";
import StickyHeading from "../components/SkripsiOnline";

export default function Skripsi() {
  const sections = [
    { id: "bab1", title: "Bab 1: Pendahuluan" },
    { id: "bab2", title: "Bab 2: Kajian Pustaka" },
    { id: "bab3", title: "Bab 3: Metodologi Penelitian" },
    { id: "bab4", title: "Bab 4: Hasil dan Pembahasan" },
    { id: "bab5", title: "Bab 5: Kesimpulan dan Saran" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-16">
        <StickyHeading sections={sections} />
        <div className="max-w-3xl mx-auto p-6 space-y-8">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold bg-black text-white p-2 rounded">{section.title}</h2>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
