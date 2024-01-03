import React, { useRef } from 'react'
import { ReactComponent as UploadArrow } from "@assets/UploadArrow.svg";
import { ReactComponent as TrashSvg } from "@assets/Icon.svg";
import { ReactComponent as FolderSvg } from "@assets/folder.svg";
import DropItem from './components/DropItem';


export default function DropBox() {

    return (
        <div className="dropbox">
            <fieldset className="dropbox-form" action="#">
                <input type="file" className="dropbox__input"  />
                <UploadArrow />
                {/* <p className="dropbox__p">Drag the file here</p> */}
            </fieldset>

            <ul className="dropbox__list">
            {/* <DropItem/> */}
            </ul>

        </div>
    )
}
