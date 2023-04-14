import asyncHandler from "express-async-handler";
import { authenticateWithMomoService } from "../services/eswavasService.js";

const collectionsRequestToPay = asyncHandler(async (req, res) => {
  try {
    const accessTokenResponse = await authenticateWithMomoService();
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

const collectionsGetAccountBalance = asyncHandler(async (req, res) => {
  try {
    // const accessTokenResponse = await authenticateWithMomoService();
    // const accessToken = await accessTokenResponse.json();

    // Request to pay needs to be hit a couple of times to geta  balance
    // Request to pay
    // const requestBalanceConfig = {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${accessToken.access_token}`,
    //   },
    // };
    // const requestBalance = await fetch(
    //   "https://eswavas-api.herokuapp.com/collection/getAccountBalance",
    //   requestBalanceConfig
    // );
    // console.log("AccessToek,", accessToken);
    // console.log("resp,", await requestBalance.json());

    // res.status(200).json(await requestBalance.json());
    res.status(200).json({
      availableBalance: "19,823,746.05",
      currency: "SZL",
    });
  } catch (error) {}

  //   const createdOrder = await order.save();
});
const collectionsGetAccountStatus = asyncHandler(async (req, res) => {
  const accountPhoneNumber = "0243656543";
  try {
    const accessTokenResponse = await authenticateWithMomoService();
    const accessToken = await accessTokenResponse.json();

    const requestAccountStatusConfig = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    };
    const requestAccountStatus = await fetch(
      `https://eswavas-api.herokuapp.com/collection/api-user/accountholder/msisdn/${accountPhoneNumber}/active`,
      requestAccountStatusConfig
    );

    res.status(200).json(await requestAccountStatus.json());
  } catch (error) {}

  //   const createdOrder = await order.save();
});

export {
  collectionsRequestToPay,
  collectionsGetAccountBalance,
  collectionsGetAccountStatus,
};
