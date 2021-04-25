import React from 'react';


const logoDesign = { width: "300px" }

const homePageHeader = <div>
    <h1 className="headerText" style={{ color: 'rgb(5, 255, 255)' }}>SPORTS TEAM</h1>
    <p className='headerDescription' style={{ fontSize: "20px", padding: "0 100px", borderRadius:"15px", backgroundColor:"blue" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi recusandae ratione deserunt quisquam fuga repellat,
         doloribus tempora ab voluptate eius.Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Animi recusandae ratione deserunt quisquam fuga repellat, doloribus tempora ab voluptate eius.
    </p>
</div>
const Header = ({logo}) => {
    let dynamicHeader = (window.location.pathname === '/') ? homePageHeader : <img style={logoDesign} src={logo} alt="" />
    return (
        <header className="header">
            {dynamicHeader}
        </header>
    );
};

export default Header;