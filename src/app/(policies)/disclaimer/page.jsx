import React from 'react';

const page = () => {
    return (
        <div className='w-full h-full bg-gray-50 shadow-lg'>
            <div className="p-10 max-w-5xl mx-auto rounded-lg font-poppins">
                <h2 className="font-supera600 text-[26px] text-gray-800 mb-4 tracking-wide">Disclaimer for Realty Nivesh Website</h2>
                <p className="text-gray-700 text-base mb-6 leading-relaxed tracking-wide">
                    The content provided on the <strong> Realty Nivesh</strong> website, including floor plans, price lists, and any promotional offers, is for informational purposes only and subject to change without prior notice. <strong>Realty Nivesh</strong> acts as a property consultant, listing properties from various builders and developers, and facilitates property sales through digital marketing and online inquiries. While we strive to ensure that the information presented is accurate, we recommend that you verify all details with the respective developers or builders, as changes in availability, pricing, and terms may occur at any time.
                </p>
                <p className="text-gray-700 text-base mb-6 leading-relaxed tracking-wide">
                    Realty Nivesh does not guarantee the accuracy or completeness of any property-related information, including current pricing, floor plans, and special offers. By using this website, you agree to independently verify any details before making a purchasing decision.
                </p>
                <h3 className="font-supera600 text-[26px] text-gray-800 mb-4 tracking-wide">Terms & Conditions</h3>
                <ul className="list-disc ml-6 space-y-4 text-gray-700 mb-6">
                    <li className='leading-relaxed tracking-wide'>
                        <strong className='font-semibold text-gray-600 mb-2'>Accuracy of Information:</strong> While Realty Nivesh endeavors to keep all property-related information accurate and up-to-date, we cannot guarantee that all information on the website, including pricing, availability, floor plans, and offers, is current. Buyers are advised to confirm the details directly with the respective builder or developer.
                    </li>
                    <li className='leading-relaxed tracking-wide'>
                        <strong className='font-semibold text-gray-600 mb-2'>Third-Party Content:</strong> Realty Nivesh lists properties from third-party builders and developers. All transactions, agreements, or disputes related to property purchases are between the buyer and the respective third party. Realty Nivesh is not liable for any issues arising from third-party transactions.
                    </li>
                    <li className='leading-relaxed tracking-wide'>
                        <strong className='font-semibold text-gray-600 mb-2'>Changes in Offers or Prices:</strong> Any floor plans, price lists, or promotional offers mentioned on the website are subject to change by the respective builders without prior notice. Realty Nivesh is not responsible for these changes and advises users to verify current offers directly with the builders.
                    </li>
                    <li className='leading-relaxed tracking-wide'>
                        <strong className='font-semibold text-gray-600 mb-2'>No Warranties or Representations:</strong> Realty Nivesh makes no warranties, express or implied, regarding the availability or suitability of any listed properties. All users are advised to perform their own due diligence and consult with professionals before making real estate purchases.
                    </li>
                    <li className='leading-relaxed tracking-wide'>
                        <strong className='font-semibold text-gray-600 mb-2'>Liability Limitations:</strong> Realty Nivesh shall not be held liable for any loss, damage, or financial harm resulting from the use of information presented on the website, including incorrect pricing or availability data.
                    </li>
                    <li className='leading-relaxed tracking-wide'>
                        <strong className='font-semibold text-gray-600 mb-2'>User Responsibility:</strong> The user assumes full responsibility for the use of any information on the website and is encouraged to seek independent advice or verification of property-related details before making any purchasing decisions.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default page;
