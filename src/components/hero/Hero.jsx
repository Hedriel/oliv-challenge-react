import { Button } from "../global/Button";

export function Hero() {
  return (
    <div className="hero flex justify-center">
      <div className="flex max-w-[1400px] mt-32 my-16 md:mt-52 mx-10 md:mx-20 lg:px-32">
        <div>
          <div>
            <h1 className="text-5xl md:text-8xl font-semibold leading-110% my-8">Building Brands, One Success Story at a Time.</h1>
            <p className="text-lg md:text-2xl">Create a Brand That Resonates: We Can Help You</p>
            <p className="text-lg md:text-2xl">Define and Communicate Your Unique Message.</p>
          </div>
          <div className="my-8">
            <Button text="Our Services" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
