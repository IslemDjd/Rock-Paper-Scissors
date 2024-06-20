import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section id="error-page" className="min-h-screen flex justify-center items-center bg-Background">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-sky-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              {error.statusText || error.message}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.{" "}
            </p>
            <Link
              to={"/"}
              className="inline-flex font-mdBold font-bold text-white bg-sky-500 hover:bg-sky-700 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:focus:ring-sky-500 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
