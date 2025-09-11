import React, { useState, useEffect } from "react";
import { ShoppingCart, Video, X, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import a from '../assets/Cin.webp';
import b from '../assets/col.jpeg';
import c from '../assets/Mus.webp';
import d from '../assets/lut.jpeg';
import e from '../assets/tra.jpeg';
import f from '../assets/vlo.jpeg';
import g from '../assets/gym.jpg';
import h from '../assets/wed.jpg';
import i from '../assets/gam.webp';
import j from '../assets/mot.jpeg';
import k from '../assets/trav.jpg';

const videoEdits = [
  { id: 1, name: "Cinematic Intro", price: 799, desc: "Professional cinematic intro edits.", img: a, rating: 4.5, type: "Cinematic", popular: true },
  { id: 2, name: "Color Grading", price: 899, desc: "Enhance visuals with color grading.", img: b, rating: 4, type: "Color", popular: false },
  { id: 3, name: "Music Sync Edit", price: 999, desc: "Beat-synced music edits.", img: c, rating: 5, type: "Music", popular: true },
  { id: 4, name: "LUTs & Filters", price: 799, desc: "Apply advanced LUTs & filters.", img: d, rating: 4.2, type: "Filters", popular: false },
  { id: 5, name: "Travel Edit", price: 699, desc: "Stunning travel montage edits.", img: e, rating: 4.7, type: "Travel", popular: true },
  { id: 6, name: "Vlog Edit", price: 599, desc: "Fun and engaging vlog edits.", img: f, rating: 4, type: "Vlog", popular: false },
  { id: 7, name: "Gym/Fitness Edit", price: 899, desc: "Motivational gym video edits.", img: g, rating: 4.3, type: "Fitness", popular: true },
  { id: 8, name: "Wedding Edit", price: 1099, desc: "Beautiful wedding highlights.", img: h, rating: 5, type: "Wedding", popular: true },
  { id: 9, name: "Gaming Edit", price: 799, desc: "Exciting gaming highlight edits.", img: i, rating: 4.6, type: "Gaming", popular: true },
  { id: 10, name: "Motivational Edit", price: 799, desc: "Inspiring motivational videos.", img: j, rating: 4.6, type: "Motivation", popular: false },
  { id: 11, name: "Travel Vlog", price: 699, desc: "Compact travel vlog edits.", img: k, rating: 4.3, type: "Travel", popular: false },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [likes, setLikes] = useState({});
  const [filterType, setFilterType] = useState("All");
  const [sortType, setSortType] = useState("Popular");

  // Load wishlist and likes from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);

    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLikes(storedLikes);
  }, []);

  // Save wishlist and likes to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const handleBuyNow = (product) => {
    const phoneNumber = "918468006792";
    const message = `Hi, I want to buy "${product.name}". Price: ₹${product.price}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleLike = (id) => {
    setLikes(prev => {
      const updated = { ...prev, [id]: prev[id] ? prev[id] + 1 : 1 };
      return updated;
    });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<Star key={i} className="w-4 h-4 text-yellow-400" />);
    if (halfStar) stars.push(<Star key="half" className="w-4 h-4 text-yellow-200" />);
    while (stars.length < 5) stars.push(<Star key={stars.length} className="w-4 h-4 text-gray-300" />);
    return stars;
  };

  const types = ["All", ...new Set(videoEdits.map(p => p.type))];

  // Filter and sort products
  const filteredProducts = videoEdits
    .filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterType === "All" || product.type === filterType)
    )
    .sort((a, b) => {
      if (sortType === "Popular") return (b.popular === true ? 1 : 0) - (a.popular === true ? 1 : 0);
      if (sortType === "Price: Low to High") return a.price - b.price;
      if (sortType === "Price: High to Low") return b.price - a.price;
      if (sortType === "Rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-8 font-poppins mt-26">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 flex justify-center items-center gap-3">
          <Video className="w-10 h-10" /> Video Editing Shop
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore different video editing styles. Click a card for details and buy via WhatsApp.
        </p>
      </div>

      {/* Search, Filter, Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search edits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 w-full sm:w-1/3"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 rounded-lg border border-gray-300"
        >
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="p-2 rounded-lg border border-gray-300"
        >
          <option value="Popular">Popular</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between relative"
            onClick={() => setSelectedProduct(product)}
          >
            {product.popular && (
              <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">Popular</span>
            )}
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
            <div className="flex items-center gap-1 mb-2">
              {renderStars(product.rating)}
              <span className="text-gray-500 text-sm ml-1">{product.rating}</span>
            </div>
            <p className="text-indigo-600 font-bold mb-3">₹{product.price}</p>

            <div className="flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleBuyNow(product); }}
                className="flex-1 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Buy Now
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                className={`p-2 rounded-xl border ${wishlist.includes(product.id) ? "bg-red-500 text-white" : "bg-white text-gray-500"} hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-1`}
              >
                <Heart className="w-5 h-5" />
                <span className="text-xs">{likes[product.id] || 0}</span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleLike(product.id); }}
                className="p-2 rounded-xl border bg-yellow-200 hover:bg-yellow-300 transition"
              >
                👍
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Video className="w-6 h-6 text-indigo-600" /> {selectedProduct.name}
              </h2>

              <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-60 object-cover rounded-lg mb-4" />

              <div className="flex items-center gap-1 mb-2">{renderStars(selectedProduct.rating)} <span className="text-gray-500">{selectedProduct.rating}</span></div>

              <p className="text-gray-600 mb-2"><strong>Price:</strong> ₹{selectedProduct.price}</p>
              <p className="text-gray-600 mb-4">{selectedProduct.desc}</p>

              <button
                onClick={() => handleBuyNow(selectedProduct)}
                className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Shop;
