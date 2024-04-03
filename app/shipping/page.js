import React from "react";

const page = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 w-[85%] sm:w-[70%] my-6">
          <h1 className="text-3xl font-bold py-3">
            Shipping & Delivery Policy
          </h1>
          <div>
            Welcome to Grovyo! This Shipping and Delivery Policy outlines the
            terms and procedures for shipping and delivery of products ordered
            through our web application "Web App" and mobile application "Mobile
            App". Please read this policy carefully before placing an order. By
            making a purchase on our platform, you agree to adhere to the terms
            set forth in this policy.
          </div>
          <h1 className="text-xl font-semibold py-4 sm:py-5">
            Order Processing and Fulfillment
          </h1>
          <div>
            Order Confirmation: Once you place an order on our Web App or Mobile
            App, you will receive an order confirmation email containing the
            details of your purchase.
          </div>
          <div>
            Processing Time: We strive to process orders promptly. Please allow
            2 business days for order processing before the shipment is
            dispatched.
          </div>
          <div>
            Shipment Notification: Once your order is processed and shipped, you
            will receive a shipment notification email containing tracking
            information (if applicable) to monitor the delivery status of your
            order.
          </div>
          <h1 className="text-xl font-semibold py-4 sm:py-5">
            Shipping Methods and Costs
          </h1>
          <div>
            Available Shipping Methods: We offer a range of shipping methods to
            accommodate your preferences and needs. The available shipping
            options will be presented to you during the checkout process.
          </div>
          <div>
            Shipping Costs: Shipping costs are calculated based on the chosen
            shipping method and the destination address. The shipping costs will
            be clearly displayed before you finalize your order.
          </div>
          <h1 className="text-xl font-semibold py-4 sm:py-5">Delivery Time</h1>
          <div>
            Estimated Delivery Times: We provide estimated delivery times for
            each available shipping method. Please note that these estimates are
            provided as general guidelines and are not guaranteed delivery
            dates.
          </div>
          <div>
            Factors Affecting Delivery Time: Delivery times may vary due to
            factors such as product availability, your location, holidays, and
            unforeseen circumstances beyond our control.
          </div>
          <div>
            Delivery Delays: While we strive to meet our estimated delivery
            times, we are not responsible for any delays caused by third-party
            shipping carriers or other external factors.
          </div>
          {/* <h1 className="text-xl font-semibold py-4 sm:py-5">
            International Shipping
          </h1>
          <div>
            International Orders: We offer international shipping to select
            countries. Please note that international orders may be subject to
            customs duties, taxes, or other import fees, which are the
            responsibility of the recipient.
          </div> */}
          <div>
            Customs Clearance: Customs clearance processes may affect the
            delivery time of international orders. We are not responsible for
            any customs-related delays.
          </div>
          <h1 className="text-xl font-semibold py-4 sm:py-5">Order Tracking</h1>
          <div>
            Tracking Information: For orders with available tracking, you will
            receive tracking information via email once your order is shipped.
            You can use this information to track the progress of your delivery.
          </div>
          <div>
            Tracking Updates: Please note that tracking updates may take some
            time to reflect accurately, and tracking information may not be
            available immediately after your order is shipped.
          </div>
          <h1 className="text-xl font-semibold py-4 sm:py-5">Contact Us</h1>
          <div>
            If you have any questions or concerns about our Shipping and
            Delivery Policy or require assistance with an order, please contact
            our customer support team at grovyoinc@gmail.com. We are here to
            provide you with a seamless and enjoyable shopping experience.
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
