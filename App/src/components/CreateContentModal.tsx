import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
// import { Card } from "./Card";
import { BACKEND_URL } from "../config";
import axios from "axios";

// Enum to represent different types of content
//@ts-ignore
enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

// Interface for the props passed to the CreateContentModal component
interface CreateContentModalProps {
    open: boolean; // State to determine if the modal is open
    onClose: () => void; // Function to close the modal
}

// CreateContentModal component definition
export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    // References to the input fields for title and link
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    // State to manage the selected content type
    const [type, setType] = useState(ContentType.Youtube);
    const [titleError, setTitleError] = useState("");
    const [linkError, setLinkError] = useState("");

    // Function to handle adding new content
    async function addContent() {
        console.log("content added");
        
        const title = titleRef.current?.value; // Getting the title value from the input
        const link = linkRef.current?.value; // Getting the link value from the input

        if(!title){
            setTitleError("Please enter the title");
            return;
        }
        setTitleError(""); // clear error if valid

        if(!link){
            setLinkError("Please put a valid link");
            return;
        }
        setLinkError(""); // clear error if valid

       

        // Making a POST request to add new content
        await axios.post(BACKEND_URL + "/api/v1/content" , {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token") || "" // Including the authorization token
            }
        });

        // Closing the modal after adding content
        onClose();
        console.log("link: ", link, "title: ", title ); 
    }
      return <div>
            {open && (
    <>
        {/* Overlay - just the dark background */}
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60" />

        {/* Modal - separate, full opacity, on top */}
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon />
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <input ref={titleRef} type="text" placeholder="Title" />
                    {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
                    <input  ref={linkRef} className="mt-4 w-40" type="text" placeholder="Link" />
                    {linkError && <p className="text-red-500 text-sm mt-1">{linkError}</p> }
                   
                    {/* <iframe  src={linkRef} frameborder="0"></iframe> */}
                </div>

                <div>
                    <h1>Type</h1>
                    <div className="flex gap-1 justify-center pb-2">
                        <Button
                            text="Youtube"
                            variant={type === ContentType.Youtube ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Youtube)}
                        />
                        <Button
                            text="Twitter"
                            variant={type === ContentType.Twitter ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Twitter)}
                        />
                    </div>
                </div>

                <div className="flex mt-4 justify-center">
                    <Button onClick={addContent} variant="primary" text="Submit" />
                </div>
            </div>
        </div>
    </>
)}
       
       
      </div>
}