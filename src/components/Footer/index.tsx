import React from 'react';

function Footer() {
    return (
        <footer className="py-1 text-gray-600" style={{
            height: '10vh'
        }}>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full text-center md:w-1/3 md:text-left">
                        <h2 className="mb-4 text-lg font-semibold">Company Name</h2>
                        <p>&copy; 2024 Company Name. All rights reserved.</p>
                    </div>
                    <div className="w-full text-center md:w-1/3">
                        <ul className="flex justify-center space-x-6">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full text-center md:w-1/3 md:text-right">
                        <ul className="flex justify-center space-x-6 md:justify-end">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
