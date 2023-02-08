import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

const DemoAccount = () => {
  return (
    <div className="my-6">
      <h2 className="text-center font-semibold py-2">Demo Wallet</h2>
      <div className=" flex flex-wrap justify-between">
        <div>
          <h2 className="mb-1">Wallet Numbers</h2>
          <ul>
            <li className="flex items-center gap-2">
              <p className="text-sm">01770618575</p>
              <CopyToClipboard
                text={"01770618575"}
                onCopy={() => toast.success("Copied Successfully")}
              >
                <FiCopy />
              </CopyToClipboard>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-sm">01929918378</p>
              <CopyToClipboard
                text={"01929918378"}
                onCopy={() => toast.success("Copied Successfully")}
              >
                <FiCopy />
              </CopyToClipboard>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-sm">01770618576</p>
              <CopyToClipboard
                text={"01770618576"}
                onCopy={() => toast.success("Copied Successfully")}
              >
                <FiCopy />
              </CopyToClipboard>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-sm">01877722345</p>
              <CopyToClipboard
                text={"01877722345"}
                onCopy={() => toast.success("Copied Successfully")}
              >
                <FiCopy />
              </CopyToClipboard>
            </li>
            <li className="flex items-center gap-2">
              <p className="text-sm">01619777283</p>
              <CopyToClipboard
                text={"01619777282"}
                onCopy={() => toast.success("Copied Successfully")}
              >
                <FiCopy />
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="">
          <h2>Otp</h2>
          <li className="flex items-center gap-2">
            <p className="text-sm">123456</p>
            <CopyToClipboard
              text={"123456"}
              onCopy={() => toast.success("Copied Successfully")}
            >
              <FiCopy />
            </CopyToClipboard>
          </li>
        </div>
        <div className="">
          <h2>Pin</h2>
          <li className="flex items-center gap-2">
            <p className="text-sm">12121</p>
            <CopyToClipboard
              text={"12121"}
              onCopy={() => toast.success("Copied Successfully")}
            >
              <FiCopy />
            </CopyToClipboard>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DemoAccount;
