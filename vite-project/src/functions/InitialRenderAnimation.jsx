import React, { useEffect } from 'react'


export default function InitialRenderAnimation(multiRef) {
    
    useEffect(() => {
        const elements = multiRef();
       
        // Add the 'initial-render' class to each element in the array
        elements.forEach((element) => {
          element.classList.add('initial-render');
        });
    
        // Remove the 'initial-render' class after a short delay
        const timeoutId = setTimeout(() => {
          elements.forEach((element) => {
             element.classList.remove('initial-render');
          });
        }, 100); // Adjust the delay as needed
    
        // Cleanup on unmount
        return () => clearTimeout(timeoutId);
      }, []);
}
