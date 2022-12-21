export default function handleResponseFromAPI(promise) {
  const response = 'Got a response from the API';
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    })).catch(() => (
      new Error()
    )).finally(() => console.log(response));
}
