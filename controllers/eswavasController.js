import asyncHandler from "express-async-handler";

const collectionsRequestToPay = asyncHandler(async (req, res) => {
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
    const accessTokenResponse = await fetch(
      "https://eswavas-api.herokuapp.com/auth/",
      config
    );
    const accessToken = await accessTokenResponse.json();

    // Request to pay
    const requestToPayConfig = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.access_token}`,
      },
      body: JSON.stringify({
        amount: "50.0",
        currency: "EUR",
        externalId: "6353636",
        payer: {
          partyIdType: "MSISDN",
          partyId: "0248888736",
        },
        payerMessage: "Second request to pay",
        payeeNote: "payer note",
      }),
    };

    const requestToPay = await fetch(
      "https://eswavas-api.herokuapp.com/collection/request-to-pay",
      requestToPayConfig
    );

    res.status(202).json(await requestToPay.json());
  } catch (error) {}

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});

export { collectionsRequestToPay };
