import React, {useState} from "react";

const SearchComponent = () => {
    const [isDropdownVisible, setDropdownVisible] = useState({});

    const dropdownOptions = [
        ["Test1", "Test2"], // Options for the first dropdown
        ["Option1", "Option2"], // Options for the second dropdown
        ["Choice1", "Choice2"], // Options for the third dropdown
    ];

    return (
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 my-5">
            {/* Flex container for horizontal alignment */}
            <div className="flex items-center gap-4 mb-4">
                {/* Search Input */}
                
                <form className="flex items-center mx-auto">

                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search recipe..." required />
                    </div>
                    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>

                {/* Dropdown Buttons */}
                {["Dropdown 1", "Dropdown 2", "Dropdown 3"].map((dropdown, index) => (
                    <div key={index} className="relative">
                        <button
                            onMouseEnter={() => { setDropdownVisible({...isDropdownVisible, [index]: true}) }}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {dropdown}
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8l4 4 4-4" />
                            </svg>
                        </button>

                        {isDropdownVisible[index] && (
                            <div
                                onMouseEnter={() => { setDropdownVisible({...isDropdownVisible, [index]: true}) }}
                                onMouseLeave={() => { setDropdownVisible({...isDropdownVisible, [index]: false}) }}
                                className="absolute mt-2 w-44 bg-white rounded-md shadow-lg z-10"
                            >
                                <ul className="py-1 text-sm text-gray-700 dark:text-black">
                                    {dropdownOptions[index].map((option, optionIndex) => (
                                        <li key={optionIndex} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;
