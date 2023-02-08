import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const asd = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (req.method === "POST") {
      const { username, password, app_key, app_kscret_key, paymentId } =
        req.body;
      const authOptions = {
        method: "POST",
        url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
        headers: {
          accept: "application/json",
          username: username,
          password: password,
          "content-type": "application/json",
        },
        data: { app_key: app_key, app_secret: app_kscret_key },
      };

      try {
        axios
          .request(authOptions)
          .then(function (response) {
            if (response.data.statusMessage === "Successful") {
              const executePaymentOptions = {
                method: "POST",
                url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
                headers: {
                  accept: "application/json",
                  Authorization: response.data.id_token,
                  "X-APP-Key": app_key,
                  "content-type": "application/json",
                },
                data: { paymentID: paymentId },
              };

              axios
                .request(executePaymentOptions)
                .then(function (response) {
                  return res.status(200).json({
                    status: "success",
                    data: response.data,
                  });
                })
                .catch(function (error) {
                  return res.status(error.status).json({
                    status: "error",
                    data: error,
                  });
                });
            } else {
              return res.status(400).json({
                status: response.data.statusCode,
                error: response.data.statusMessage,
              });
            }
          })
          .catch(function (error) {
            return res.status(400).json({ error: "Something went wrong" });
          });
      } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({
        error: `Method ${req.method as string} not allowed`,
      });
    }
  });
};

export default asd;
