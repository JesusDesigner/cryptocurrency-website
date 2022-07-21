import React from 'react';

// import components
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between p-12 rounded-2xl bg-blue lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]'>
          {/* text */}
          <div>
            <h3 className='h3 mb-4'>Start mining now</h3>
            <p className='max-w-[348px]'>
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
