import React from 'react';

const MobileNavMenu = () => {
    return (
        <div className="text-oxford-blue dark:text-timberwolf flex items-center justify-center backdrop-blur-2xl py-4 px-4 absolute top-0 -right-12 w-screen h-screen shadow-md z-40 lg:hidden md:hidden">
            <ul className="text-4xl">
                <li className="mb-8">
                    <a href="#">Projects</a>
                </li>
                <li className="mb-8">
                    <a href="#">About me</a>
                </li>
                <li className="mb-8">
                    <a href="#">Contacts</a>
                </li>
                <li className="mb-8">
                    <a href="#">Guest book</a>
                </li>
            </ul>
        </div>
    );
};

export default MobileNavMenu;
