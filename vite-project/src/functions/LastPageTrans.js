import React from 'react'

export default function LastPageStyle(location,pagesRef,prevTitleRef) {
  if (location !== "projects") {
    pagesRef.current.style.transform = `translate(${
      prevTitleRef.current.getBoundingClientRect().width
    }px)`;
  } else {
    pagesRef.current.style.transform = `translate(0)`;
  }
}
