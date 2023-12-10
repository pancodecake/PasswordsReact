
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";


export default function CopyClipboard(textRef) {
  
        let isCopy = copy(textRef)
        if(isCopy){
            toast.success('Password copied!')
        }
   
  
}
