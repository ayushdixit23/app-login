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
        <h1 className="text-3xl font-semibold py-2">Data Deletion Request</h1>
        <div className="flex flex-col gap-4">
          <div>
            Thank you for choosing Grovyo. If you wish to request the deletion
            of your data, please follow the steps below:
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
            <h1 className="text-2xl font-medium">Types of Data:</h1>
            <div>
              Upon submitting your data deletion request, the following types of
              data will be deleted:
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-medium">
              Personal Information: Name, Email, Username, Number, Activity
            </h1>
            <div>Usage Data: Suggestions and Preferences</div>
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
            <h1 className="text-2xl font-medium">365 Days</h1>
            <h1>Additional Information:</h1>
            <div>
              For more details on our data handling practices, please refer to
              our Privacy Policy.
            </div>
          </div>
          <div>
            If you encounter any issues or have questions about the data
            deletion process, please contact our support team at
            support@grovyo.com.
          </div>
          <div>
            Note: Data deletion is irreversible, and you won't be able to
            recover your data once the process is complete.
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
