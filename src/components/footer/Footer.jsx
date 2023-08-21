import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";


const Footer = () => {
    const images=[{
        id:1,
        img:"/1.png"
    },
    {  id:2,
        img:"/2.png"
    },
    {  id:3,
        img:"/3.png"
    },
    {  id:4,
        img:"/4.png"
    },
    {  id:5,
        img:"/3.png"
    }];
  return (
    <div className={styles.container}>
      <div>©2023 Lihaz. All rights reserved.</div>
      <div className={styles.social}>
      {
        images.map((item)=>(
            <Image key={item.id} src={item.img} width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />

        ))
      }
        
      </div>
    </div>
  );
};

export default Footer;