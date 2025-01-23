import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Header from "../Components/Header";

const Home = () => {
    const data = useLoaderData()
    
    
    return (
        <div>
            <Banner></Banner>
            <Header title={"Browse coffees by Category"} subTitle={"Choose your desired coffee category to browse through specific coffees that fit your test."}></Header>
            <br /><br />
            <Categories data={data}></Categories>
            <br /> <br />
            <Outlet></Outlet>
        </div>
    );
};

export default Home;