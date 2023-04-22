import asyncHandler from "express-async-handler";

const createMomoUser = asyncHandler(async (req, res) => {
  try {
    const createMomoUserConfig = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: req.body.userName,
      }),
    };
    // "https://eswavas-api.herokuapp.com/api-user/",
    const momoUser = await fetch(
      "https://eswavas-api.herokuapp.com/api-user/",
      createMomoUserConfig
    );

    res.status(202).json(await momoUser.json());
  } catch (error) {}

  //   const createdOrder = await order.save();

  //   res.status(201).json(createdOrder);
});

export { createMomoUser };
