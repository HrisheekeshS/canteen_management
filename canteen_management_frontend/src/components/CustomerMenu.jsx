import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import jsPDF from "jspdf";

const CustomerMenu = () => {
    const navigate = useNavigate();

    const [filter, setfilter] = useState("veg")
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const handleVoiceSearch = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Sorry, your browser does not support speech recognition.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "en-IN"; // Indian English (you can change to "en-US")
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript;
            console.log("User said:", spokenText);
            setSearchQuery(spokenText); // ✅ Update search input
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };
    };

    const generatePDF = (cart, totalPrice) => {
        const doc = new jsPDF();

        // Simple order number
        const orderNumber = Math.floor(Math.random() * 100000);

        doc.text("Order Receipt", 10, 10);
        doc.text("Order Number: " + orderNumber, 10, 20);

        let y = 30;
        cart.forEach((item) => {
            doc.text(`${item.name} - Rs.${item.price}`, 10, y);
            y += 10;
        });

        doc.text("Total: Rs." + totalPrice, 10, y + 10);

        doc.save("order.pdf");
    };

    const menuItemns = [
        {
            id: 1,
            name: "veg fried rice",
            type: "veg",
            price: 150,
            img: "/veg--fried rice.jpeg"
        },
        {
            id: 2,
            name: "Veg Biryani",
            type: "veg",
            price: 180,
            img: "/veg-biriyani.jpeg",
        },
        {
            id: 3,
            name: "Chicken Biryani",
            type: "non-veg",
            price: 220,
            img: "/chicken-biryani.jpg",
        },
        {
            id: 4,
            name: "Chicken Curry",
            type: "non-veg",
            price: 250,
            img: "/chicken-curry.jpg",
        },
        {
            id: 5,
            name: "Dosa",
            type: "veg",
            price: 80,
            img: "/Plain-Dosa.webp"
        },
        {
            id: 6,
            name: "Paneer Butter Masala",
            type: "veg",
            price: 200,
            img: "/paneer-butter-masala.jpg",
        },
        {
            id: 7,
            name: "Masala Dosa",
            type: "veg",
            price: 100,
            img: "/masala-dosa.jpeg",
        },
        {
            id: 8,
            name: "Idli Sambar",
            type: "veg",
            price: 70,
            img: "/idli-sambar.jpg",
        },
        {
            id: 9,
            name: "Mutton Biryani",
            type: "non-veg",
            price: 280,
            img: "/mutton-biryani.jpeg",
        },
        {
            id: 10,
            name: "Fish Curry",
            type: "non-veg",
            price: 240,
            img: "/fish-curry.jpeg",
        },
        {
            id: 11,
            name: "Chole Bhature",
            type: "veg",
            price: 150,
            img: "/chole-bhature.webp",
        },
        {
            id: 12,
            name: "Pav Bhaji",
            type: "veg",
            price: 130,
            img: "/pav-bhaji.jpg",
        },
        {
            id: 13,
            name: "Egg Curry",
            type: "non-veg",
            price: 160,
            img: "/egg-curry.jpeg",
        },
        {
            id: 14,
            name: "Aloo Paratha",
            type: "veg",
            price: 90,
            img: "/aloo-paratha.cms",
        },
        {
            id: 15,
            name: "Tandoori Chicken",
            type: "non-veg",
            price: 300,
            img: "/tandoori-chicken.jpg",
        },
        {
            id: 16,
            name: "Beef Fry",
            type: "non-veg",
            price: 260,
            img: "/beef-fry.jpeg",
        },
        {
            id: 17,
            name: "Beef Curry",
            type: "non-veg",
            price: 280,
            img: "/beef-curry.jpg",
        },

    ]

    const filteredItems = menuItemns.filter((item) =>
        item.type === filter &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())   // ✅ added
    );
    const addToCart = (item) => {
        setCart([...cart, item])
    }
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)


    return (
        <>

            <div className="min-h-screen w-screen bg-[url('/public/food.jpg')] bg-repeat bg-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-center p-4 bg-yellow-200">
                        <h1 className="text-3xl font-[Arial] text-gray-900 font-bold">Customer Menu</h1>
                        <div className='p-2'>
                            <a href="#about" className='text-gray-900 mr-6' onClick={() => navigate("/About")}>About</a>
                            <a href="#contact" onClick={() => navigate("/Contact")}>Contact</a>
                        </div>
                    </div>

                    <div className='text-white text-2xl p-4'>
                        <label className='mr-4 font-bold'>
                            <input type="radio" value="veg" name='food' checked={filter === "veg"} onChange={() => setfilter("veg")} />
                            Veg
                        </label>
                        <label className='font-bold'>
                            <input type="radio" name="food" value="non-veg" checked={filter === "non-veg"} onChange={() => setfilter("non-veg")} />
                            Non-Veg
                        </label>
                    </div>
                    <div className="bg-white text-black p-1 flex items-center"><input
                        type="text"
                        placeholder="Search food..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 rounded-lg text-black w-full focus:outline-none "

                    />
                        <button onClick={handleVoiceSearch} className='px-10 bg-blue-100 rounded-lg hover:bg-blue-300'> 🎤</button>


                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className='w-64 rounded-2xl shadow-md overflow-hidden border border-gray-100 bg-white'>
                                    <img src={item.img} alt={item.name} className='h-40 w-full object-cover' />
                                    <div className="p-3 flex justify-between items-center">

                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p className="text-lg font-semibold">₹{item.price}</p>
                                        <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600">ADD</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-xl font-bold col-span-full text-center">
                                No items found
                            </p>
                        )}
                    </div>
                    <div className="fixed bottom-6 left-1/2 z-20">
                        <button onClick={() => setShowCart(!showCart)}
                            className='bg-yellow-400  rounded-3xl p-2 font-bold shadow hover:bg-yellow-600'>## Cart({cart.length})</button>
                    </div>
                    {showCart && (
                        <div className="fixed bottom-20 left-1/2 w-72 bg-white rounded-r-lg p-4 z-30 ">
                            <h2 className="font-bold mb-2">Your Cart</h2>

                            {cart.length === 0 ? (
                                <p className="text-gray-200">No items added </p>
                            ) : (
                                <>
                                    <ul className="mb-2">
                                        {cart.map((item, i) => (
                                            <li key={i} className="border-b py-1">
                                                {item.name}-{item.price}
                                            </li>))}</ul>
                                    <p className="font-bold">Total-{totalPrice}</p>
                                    <button className="right-0 p-2 rounded-2xl bg-green-400 font-bold" onClick={() => generatePDF(cart, totalPrice)}>Place Order</button>
                                </>

                            )}
                        </div>
                    )}


                </div>
            </div>


        </>

    )
}

export default CustomerMenu
