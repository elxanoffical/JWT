import Header from "@/Components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center py-[20px]">
        <h1 className='text-3xl font-bold tracking-wider'>LoginPage</h1>
      </div>
      <div className="flex items-center justify-center  py-[100px] bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}