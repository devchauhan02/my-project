import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // ✅ This works only inside a data router
  console.log(error); // Debugging

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong 😞</h1>
      <h2>{error.status || "404"} - {error.statusText || "Page Not Found"}</h2>
      <p>{error.data || "Sorry, the page you’re looking for doesn’t exist."}</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
};

export default ErrorPage;
