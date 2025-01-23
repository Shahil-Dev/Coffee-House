/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Categories = ({ data }) => {
    return (
        <div>


            <div key={data.id} role="tablist" className="tabs tabs-lifted ">
                {
                    data.map(data => <Link key={data.id} role="tab" to={`/card/${data.category}`} className="tab text-[20px]">{data.category}</Link>)
                }

            </div>








        </div>
    );
};

export default Categories;