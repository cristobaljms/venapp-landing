export const submitForm = async (data) => {
    const URL = `https://venapp.zendesk.com/api/v2/tickets`;
    return await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : "Basic ZnJhbm5lbHlzQHZlbmFwcC5jb20vdG9rZW46SU9PZWd0bXRBdUlBV0FRTHdIODNmMFpCMTFsWHVQNXpxMGpQdUFSSw==",
      },
      body: JSON.stringify(data),
    });
  };