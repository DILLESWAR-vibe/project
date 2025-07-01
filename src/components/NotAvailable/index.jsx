const NotAvailableForTabs = () => {
  return (
    <div className="hidden md:flex lg:hidden bg-background fixed inset-0 items-center justify-center z-[100] flex-col text-center px-6">
      <p className="text-5xl font-semibold text-red-500 font-ragnear mb-4">
        Not Available for Tablets
      </p>
      <p className="text-lg text-gray-700 max-w-2xl">
        This application is optimized for mobile and desktop experiences. Tablet
        support is currently unavailable due to layout constraints and
        performance optimizations.
      </p>
      <p className="text-lg text-gray-300 mt-2">
        Please switch to a desktop or mobile device to continue.
      </p>
    </div>
  );
};

export default NotAvailableForTabs;
