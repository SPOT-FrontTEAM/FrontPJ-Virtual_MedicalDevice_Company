import reactDom from "react-dom";
import { useEffect } from "react";

const Portal = ({ children }) => {
  useEffect(() => {
		document.body.style.cssText = `overflow: hidden; top: -${window.scrollY}px`
		return () => {
			const scrollY = document.body.style.top
			document.body.style.cssText = `top: "";`
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
		}
	}, [])


  const el = document.getElementById("modal-root");
  return reactDom.createPortal(children, el);
};

export default Portal;
