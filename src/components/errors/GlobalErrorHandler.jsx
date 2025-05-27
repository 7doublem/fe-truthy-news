function GlobalErrorHandler({ status, message }) {
  return (
    <div className="error-box">
      <h2>Error {status}:</h2>
      <p>{message}</p>
    </div>
  );
}

export default GlobalErrorHandler;
