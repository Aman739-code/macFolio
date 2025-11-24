import WindowControls from '#components/WindowControls';
import { gallery, photosLinks } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { Mail, Search } from 'lucide-react';
import React from 'react'

const Photos = () => {
    const {openWindow} = useWindowStore();
  return (
    <>

      {/* ✅ HEADER ONLY */}
      <div id='window-header'>
        <WindowControls target="photos" />

        <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
          <Mail className='icon' />
          <Search className='icon' />
        </div>
      </div>

      {/* ✅ MAIN CONTENT (Sidebar + Gallery) */}
      <div className='flex w-full h-full'>

        {/* Sidebar */}
        <div className='sidebar'>
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({id, icon, title}) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className='gallery'>
          <ul>
            {gallery.map(({id, img}) => (
              <li 
                key={id}
                onClick={() => openWindow("imgfile", {
                  id,
                  name: "Gallery image",
                  icon: "/images/image.png",
                  kind: "file",
                  fileType: "img",
                  imageUrl: img
                })}
              >
                <img src={img} alt={`Gallery image ${id}`} />
              </li>
            ))}
          </ul>
        </div>

      </div>

    </>
  )
}

const PhotoWindow = WindowWrapper(Photos, "photos");
PhotoWindow.displayName = "Photos";

export default PhotoWindow;
