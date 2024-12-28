import { FaImdb } from "react-icons/fa";
import { PiInstagramLogoFill, PiTwitchLogo, PiTwitchLogoFill, PiTwitterLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-center lg:text-left text-white">
            <div className="container mx-auto p-6">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center pb-2">
                    {/* Signature Image */}
                    <img 
                        src="/signature.png" 
                        alt="VDEV Demo Signature"
                        className="mt-4 w-32 h-auto" // Adjust width as needed
                    />
                    <div>
                    <ul className='flex'>
                                <li className='mr-4'>
                                    <a href='#' className='text-sm font-bold hover:text-gray-400'>Home</a>
                                </li>
                                <li className='mr-4'>
                                    <a href='#about' className='text-sm font-bold hover:text-gray-400'>About</a>
                                </li>
                                <li className='mr-4'>
                                    <a href='#works' className='text-sm font-bold hover:text-gray-400'>Works</a>
                                </li>
                                <li className='mr-4'>
                                    <a href='#blogs' className='text-sm font-bold hover:text-gray-400'>Blogs</a>
                                </li>
                                <li className='mr-4'>
                                    <a href='#contact' className='text-sm font-bold hover:text-gray-400'>Contact</a>
                                </li>



                            </ul>
                    </div>
                    <div className="mt-4 flex justify-center lg:justify-end">
                        <a
                            href="https://www.imdb.com/name/nm0000158/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-gray-100 transition duration-300 mx-2"
                        >
                            <FaImdb  size={24}/>
                        </a>
                        <a
                            href="https://www.instagram.com/johndoe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-gray-100 transition duration-300 mx-2"
                        >
                            <PiInstagramLogoFill size={24} />
                        </a>
                        <a
                            href="https://www.twitter.com/johndoe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-gray-100 transition duration-300 mx-2"
                        >
                            <PiTwitterLogoFill size={24} />
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="mt-4 text-center text-gray-300">
                    <p className="italic">
                        "Believe you can and you're halfway there." - Theodore Roosevelt
                    </p>
                    <p>&copy; 2024 <a className="font-bold" href="http://dixit.vipul.unaux.com">VDEV Demo</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;