import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">Page not found</p>
      <Link to="/" className="text-white underline hover:text-gray-300">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
