"use client";
import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(false);

  const send = () => {
    if (!email) return;
    setEmail("");
    setPage(true);
  };
  return (
    <>
      <div className="flex flex-col my-5 justify-center items-center">
        <h1 className="text-3xl font-semibold py-2">
          Account Deletion Request
        </h1>
        <div className="flex flex-col gap-4">
          <div>
            Thank you for using Grovyo. If you wish to delete your account and
            associated data, please follow the steps below:
          </div>
          <div>
            <h1 className="text-2xl pb-2 font-medium">
              Enter email address associated with your account
            </h1>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={email}
                className="p-2 border-2 w-full rounded-xl bg-[#fafafa] outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex items-center">
                <button
                  disabled={!email}
                  className="p-2 bg-black
			 text-white px-4 rounded-xl"
                  onClick={send}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          {page && (
            <div>Your Deletion request has been submiited successfully.</div>
          )}
          <div className="">
            <h1 className="text-2xl font-medium">Data Removal:</h1>
            <div>
              Upon submitting your account deletion request, the following data
              will be removed:
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-medium">
              Personal Information: Name,Email, Number
            </h1>
            <div>
              Usage Data: Activity and Preferences and Content Recommendation
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-medium">Retention Period:</h1>
            <div>
              We retain certain data for a limited period to comply with legal
              obligations or for necessary business purposes. The retention
              period is as follows:
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-medium">90 Days</h1>
            <h1>Additional Information:</h1>
            <div>
              For more details on our data handling practices, please refer to
              our Privacy Policy.
            </div>
          </div>
          <div>
            If you encounter any issues or have questions about the account
            deletion process, please contact our support team at
            contact@grovyo.com.
          </div>
          <div>
            Note: Account deletion is irreversible, and you won't be able to
            recover your data once the process is complete.
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
