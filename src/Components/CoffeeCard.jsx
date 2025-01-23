import { useLoaderData,  } from "react-router-dom";
import Card from "./Card";

const CoffeeCard = () => {
    // const { boom } = useParams()
    // console.log(boom);
const tae = useLoaderData()
console.log(tae);


    return (
        <div>
           <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
   tae.map(cha => <Card key={cha.id} cha={cha}></Card>)
            }
           </div>
        </div>
    );
};

export default CoffeeCard;