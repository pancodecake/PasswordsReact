import React, { useRef } from 'react'
import { ReactComponent as TrashSvg } from "@assets/Icon.svg";
import { ReactComponent as FolderSvg } from "@assets/folder.svg";
export default function DropItem() {
    const progressBar = useRef()

    
  
    return (
        <li className="dropbox-item">
            <div className="dropbox-item__con">
                <div className="dropbox-item__details">

                    <div className='dropbox-item__details-con'>
                        <FolderSvg />
                        
                        <progress ref={progressBar} className="dropbox-item__progress" max="100" value="100"></progress>
                        
                 
                        <span className="dropbox-item__size">
                            110.46 Mб
                        </span>
                        <span className="dropbox-item__status finished"><button className="dropbox-item__dlt"><TrashSvg /></button></span>

                    </div>
                    <span className="dropbox-item__name">ネ土会ェ貝南犬☆カゞんIよ″るノDA!!｡￤ずんだもん (1080p_24fps_H264-128kbit_AAC).mp4</span>

                </div>

            </div>
        </li>
    )
}
