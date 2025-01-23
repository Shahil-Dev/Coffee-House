/* eslint-disable react/prop-types */



const Header = ({ title, subTitle }) => {
    return (
        <div className="text-center mt-5">
            <h1 className="text-6xl font-extrabold">{title}</h1>
            <br />
            <p className="text-2xl">{subTitle}</p>
        </div>
    );
};

export default Header;