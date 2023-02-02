export const submitForm = async (data) => {
    const URL = `${process.env.baseUrl}/api/landing/form`;
    return await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${process.env.publicKey}`,
      },
      body: JSON.stringify(data),
    });
  };