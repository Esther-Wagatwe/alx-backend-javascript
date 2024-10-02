function getPaymentTokenFromAPI(success) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {

    }
  });
}

module.exports = getPaymentTokenFromAPI;
