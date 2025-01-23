/* eslint-disable react/prop-types */

const Card = ({ cha }) => {
    const { name ,image,origin,category,popularity,rating ,description} = cha

    return (
        <div>
            <div className="card mx-4 md:mx-0 md:border-[0px] border-[4px] ">
                <figure className="md:w-[350px] h-[200px]">
                    <img className="w-full h-full"
                        src={image} />
                </figure>
                <div className="p-5">
                    <h2 className="card-title">{name}</h2>
                   <div className="flex justify-between">
                    <p>{origin}</p>
                    <p>{category}</p>
                   </div>
                   <div className="flex justify-between">
                    <p>{popularity}</p>
                    <p>{rating}</p>
                   </div>
                   <p>{description}</p>
                   <br />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;