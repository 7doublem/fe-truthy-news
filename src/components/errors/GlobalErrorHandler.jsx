function GlobalErrorHandler({ status, message }) {
  return (
    <div>
      <h2>Error {status}:</h2>
      <p>{message}</p>
    </div>
  );
}

export default GlobalErrorHandler;
