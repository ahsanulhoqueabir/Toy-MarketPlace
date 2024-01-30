import React, { useState } from "react";
import SectionHeadline from "../../Components/SectionHeadline";

const Gallery = () => {
  const galleryData = [
    {
      img: "https://i.ibb.co/Tb1rkY2/photo-1587654780291-39c9404d746b-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
    {
      img: "https://i.ibb.co/r407QV4/photo-1566576912321-d58ddd7a6088-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg",
    },
    {
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRveXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1608889462247-ce07fe5a2756?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1488149048941-581936ced6d6?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1585772964418-00d2cf187dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1603356033288-acfcb54801e6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [gallery, setGallery] = useState(galleryData);
  const ReorderData = () => {
    gallery.sort(() => Math.random() - 0.5);
    setGallery([...gallery]);
  };
  setInterval(ReorderData, 30000);
  const gallery2 = [];
  for (let i = 0; i < gallery.length; ) {
    let div = [];
    for (let j = 0; j < 3; j++) {
      div.push(gallery[i]);
      i++;
    }
    gallery2.push(div);
  }

  return (
    <div>
      <SectionHeadline>Gallery</SectionHeadline>
      <div className="gallery px-3 lg:px-20 grid grid-cols-1 gap-3">
        {gallery2.map((divImg, i) => (
          <div className={`flex gap-3 ${i % 2 == 1 && "flex-row-reverse"}`}>
            <img
              className={`object-cover  ${divImg[1] ? "w-1/2" : "w-full"}`}
              src={divImg[0]?.img}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <img
                className="object-cover w-full transition-all ease-linear duration-150"
                src={divImg[1]?.img}
                alt=""
              />
              <img
                className="object-cover w-full"
                src={divImg[2]?.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;