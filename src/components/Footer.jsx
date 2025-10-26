const Footer = () => {
  return (
    <div className="w-full border-t border-gray-300 pt-8 h-[150px] mt-10">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col lg:flex-row gap-4 pb-10">
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-8 pe-20">
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <div>About Me</div>
              <div className="text-xs text-gray-500">About Us</div>
              <div className="text-xs text-gray-500">Newsroom</div>
              <div className="text-xs text-gray-500">Klook blog</div>
              <div className="text-xs text-gray-500">Careers</div>
              <div className="text-xs text-gray-500">Sunstainability</div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <div>Partnerships</div>
              <div className="text-xs text-gray-500">Merchant sign up</div>
              <div className="text-xs text-gray-500">Merchant log in</div>
              <div className="text-xs text-gray-500">Affiliate Partnership</div>
              <div className="text-xs text-gray-500">Influencer Program</div>
              <div className="text-xs text-gray-500">Agent Marketplace</div>
              <div className="text-xs text-gray-500">Klook Partner Hub</div>
              <div className="text-xs text-gray-500">
                Collaborate with Klook
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <div>About Us</div>
              <div className="text-xs text-gray-500">General terms of use</div>
              <div className="text-xs text-gray-500">Privacy policy</div>
              <div className="text-xs text-gray-500">Cookie Policy</div>
              <div className="text-xs text-gray-500">Bug Bounty Program</div>
              <div className="text-xs text-gray-500">Animal Welfare Policy</div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-3 ps-0 lg:ps-20 mt-5 md:mt-0">
            <div>Payment channels</div>
            <div className="text-xs text-gray-500">Credit Card</div>
            <div className="text-xs text-gray-500">PayPal</div>
            <div className="text-xs text-gray-500">Bank Transfer</div>
            <div className="text-xs text-gray-500">Cash on Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
