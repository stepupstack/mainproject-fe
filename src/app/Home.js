export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
          🚧 Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 animate-fade-in-up">
          We are building something awesome. Stay updated by joining our mailing list.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-4 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-800 transition">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
