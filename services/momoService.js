const authenticateWithMomoService = async () => {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: process.env.MOMO_USER,
      password: process.env.MOMO_PASSWORD,
    }),
  };

  try {
    const momoToken = await fetch(
      `${process.env.PAYMENT_URL}/auth/`
     ,
      config
    );
    return momoToken;
  } catch (error) {}
};

export { authenticateWithMomoService };
