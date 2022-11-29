import { useEffect } from "react";
/**
* Hook that closes the window when the user clicks outside of it
*
* Function takes a null value useRef()
* Function takes a state setter function that as function property and sets it to false
*   This is assuming that the state is what decides wether the form component is visible in the first place
*/
export default function useClickOutsideToClose(ref, setClose) {
    useEffect(() => {
        /**
         * Close form if clicked outside
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                //alert("You clicked outside of me!");
                setClose(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}