let Title = () => {
  return (
    <div className="flex justify-center">
      <div className="relative mb-16 inline-block mx-auto text-sm">
        <h1 className="font-bold text-center text-xl text-GrayishBlue-900 mb-4 lg:text-3xl">
          Simple, traffic-based pricing
        </h1>
        <span className="lg:flex lg:justify-center">
          <p className=" text-center my-1 font-semibold text-GrayishBlue-700">
            Sign-up for our 30-day trial.
          </p>
          <p className=" text-center my-1 font-semibold text-GrayishBlue-700">
            No credit card required.
          </p>
        </span>
        <img src="/images/pattern-circles.svg" className="absolute -top-7 left-16 lg:-top-8 lg:left-32" />
      </div>
    </div>
  );
};

export default Title;
