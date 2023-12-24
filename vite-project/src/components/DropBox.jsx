import React from 'react'
import { ReactComponent as UploadArrow } from "@assets/UploadArrow.svg";
export default function DropBox() {
    return (
        <div className="dropbox">
            <form className="dropbox-form" action="#">
                <input type="file" className="dropbox__input" hidden="" />
                <UploadArrow/>
                <p className="dropbox__p">Вы можете просто перетащить файл сюда</p>
            </form>

            <ul className="dropbo__list">
            </ul>

        </div>
    )
}
