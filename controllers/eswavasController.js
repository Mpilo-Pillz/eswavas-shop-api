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
    const accessToken = await fetch(
      "https://eswavas-api.herokuapp.com/auth/",
      config
    );
    console.log(await accessToken.json());
  } catch (error) {}

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});

export { collectionsRequestToPay };
