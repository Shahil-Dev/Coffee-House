

const Banner = () => {
    return (
        <div>
            <div
                className=" hero min-h-screen md:rounded-[40px]  bg-banner "
               >
                <div className="hero-overlay  bg-opacity-60 md:rounded-[40px]"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Brewing Ideas, Designing Futures.</h1>
                        <p className="mb-5">
                            Welcome to my coffee-inspired portfolio, where creativity brews with every line of code. Just like crafting the perfect cup of coffee, I believe in blending passion, precision, and artistry to create designs that are bold, rich, and meaningful.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;