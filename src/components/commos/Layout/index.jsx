import Logo from "../../../assets/images/logo.jpg";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-full">
      <nav className="bg-purple-600 sticky top-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/isdemu-psico-test/">
                  <img
                    className="h-10 w-25 rounded"
                    src={Logo}
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/isdemu-psico-test/"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/isdemu-psico-test/"
                        ? "bg-purple-900"
                        : "hover:bg-purple-700 hover:text-white"
                    }`}
                    aria-current={
                      location.pathname === "/isdemu-psico-test/" ? "page" : undefined
                    }
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/isdemu-psico-test/instrucciones"
                    className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/isdemu-psico-test/instrucciones"
                        ? "bg-purple-900 text-white"
                        : "hover:bg-purple-700 hover:text-white"
                    }`}
                  >
                    Instrucciones
                  </Link>
                  <Link
                    to="/isdemu-psico-test/mandamientos"
                    className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/isdemu-psico-test/mandamientos"
                        ? "bg-purple-900 text-white"
                        : "hover:bg-purple-700 hover:text-white"
                    }`}
                  >
                    Mandamientos
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-purple-800 p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
                    to="/isdemu-psico-test/"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/isdemu-psico-test/"
                        ? "bg-purple-900"
                        : "hover:bg-purple-700 hover:text-white"
                    }`}
                    aria-current={
                      location.pathname === "/isdemu-psico-test/" ? "page" : undefined
                    }
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/isdemu-psico-test/instrucciones"
                    className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/isdemu-psico-test/instrucciones"
                        ? "bg-purple-900 text-white"
                        : "hover:bg-purple-700 hover:text-white"
                    }`}
                  >
                    Instrucciones
                  </Link>
                  <Link
                    to="/isdemu-psico-test/mandamientos"
                    className={`text-gray-300 rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/isdemu-psico-test/mandamientos"
                        ? "bg-purple-900 text-white"
                        : "hover:bg-purple-700 hover:text-white"
                    }`}
                  >
                    Mandamientos
                  </Link>
          </div>
        </div>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <div className="py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
