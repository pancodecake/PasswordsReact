import React, { useRef } from 'react'

export default function useMultiRefs(initalValue) {
    let currentRefs = []
    let refs = new Set(currentRefs)
    function getRefs() {
        if (initalValue && refs.size === 0) {
            return initalValue
        }
        if (typeof document === "undefined") {
            console.error("do not run this on the server !!!!!!");
            return Array.from(refs);
        } else {
            return Array.from(refs).filter((ref) => {
                return document.contains(ref);
            });
        }
    }
    function addRef(ref) {
        if (ref !== null) {
            refs.add(ref);
        }
    }
    return [getRefs, addRef];
}
