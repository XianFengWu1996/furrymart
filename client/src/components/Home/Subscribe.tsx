const Subscribe = () => {
  return (
    <div className="w-full h-[20vh] bg-purple-100 my-10 px-3 lg:px-32 flex flex-col justify-center">
      <div className="flex items-center">
        <div>
          <h3>Subscribe to the FurryMart</h3>
          <p>
            Don&apos;t miss out on the latest deals, product drops, pet health
            tips, and more! Sign up now to receive our email updates.
          </p>
        </div>

        <div className="flex items-center ml-10">
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
