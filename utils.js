function handleError(error) {
   console.error('Error:', error);
   return "An error occurred. Please try again later.";
}

module.exports = { handleError };
