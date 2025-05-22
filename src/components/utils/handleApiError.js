export function handleApiError(err) {
  const status = err.response?.status || 500;
  const message =
    err.response?.data?.msg || err.message || "Something went wrong";
  return { status, message };
}


