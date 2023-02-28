import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const create = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
 return new Promise((resolve, reject) => {
   if (req.method === "POST") {
     const { username, password, app_key, app_kscret_key } = req.body;
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
             const createPaymentOptions = {
               method: "POST",
               url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
               headers: {
                 accept: "application/json",
                 "content-type": "application/json",
                 "X-APP-Key": app_key,
                 Authorization: response.data.id_token,
               },
               data: {
                 mode: "0011",
                 payerReference: "123",
                 callbackURL: "https://bkash-api-validation.redshop.io/",
                 amount: "1",
                 currency: "BDT",
                 intent: "sale",
                 merchantInvoiceNumber: "INV101",
               },
             };

             axios
               .request(createPaymentOptions)
               .then(function (response) {
                 return res.status(200).json({
                   status: "success",
                   data: response.data,
                 });
               })
               .catch(function (error) {
                 console.log("error 1", error);
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
           console.log("error 3", error);
           return res.status(400).json({ error: "Something went wrong" });
         });
     } catch (error) {
       console.log("error 4", error);
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

export default create;
