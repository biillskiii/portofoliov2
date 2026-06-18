// components/LanyardAnimation.js
import { motion } from "framer-motion";

const LanyardAnimation = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f0f0" }}>
      <motion.img
        src="/lanyard.png"
        alt="Lanyard"
        style={{ width: "150px" }}
        animate={{
          rotate: [0, 15, 0], // Rotasi kiri-kanan
        }}
        transition={{
          duration: 2, // Durasi animasi
          repeat: Infinity, // Animasi berulang
          repeatType: "reverse", // Kembali ke posisi awal
        }}
      />
    </div>
  );
};

export default LanyardAnimation;
