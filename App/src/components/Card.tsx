import { BACKEND_URL } from "../config";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import axios from "axios";
import { useEffect } from "react";


interface CardProps {
    title: string; // Title of the card, e.g., video or tweet title
    link: string; // Link to the content (YouTube or Twitter)
    type: "twitter" | "youtube"; // Type of the content
    contentId: string;  //contentId is the MongoDB _id for any specific card
    onDelete: () => void; // onDelete is a function that takes no arguments and also returns nothing (that is it returns void);
}

// The Card component represents a styled card that can display either a YouTube video or a Twitter embed based on the type prop.
export function Card({ title, link, type, contentId, onDelete }: CardProps) {
    useEffect(() => {
        //@ts-ignore
        if (type === "twitter" && window.twttr?.widgets) {
            window.twttr.widgets.load();
        }
    }, [type, link]);

    async function deleteContent(){
        await axios.delete(BACKEND_URL + "/api/v1/content", {
            data: {contentId}, // Delete requests send body under "data" in axios
            headers: {
                "Authorization": localStorage.getItem("token") || ""
            }
        });
        onDelete();  // Refresh dashboard after deletion
    }
    return (
        <div>
            {/* Card Container */}
            <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72">
                {/* Header Section */}
                <div className="flex justify-between">
                    {/* Left Section: Title with Icon */}
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            {/* Share Icon preceding the title */}
                            <ShareIcon />
                        </div>
                        {title}
                    </div>
                    {/* Right Section: Links with Icons */}
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            {/* Clickable Share Icon that opens the link */}
                            <a href={link} target="_blank">
                                <ShareIcon />
                            </a>
                        </div>
                        <div className="text-gray-500 cursor-pointer" onClick={deleteContent}>
                          <DeleteIcon />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="pt-4">
                    {/* Render YouTube embed if type is "youtube" */}
                    {type === "youtube" && (
                        <iframe
                            className="w-full"
                            src={link
                                .replace("watch?v=", "embed/")}
                                
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}

                    {/* Render Twitter embed if type is "twitter" */}
                    {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    )}
                </div>
            </div>
        </div>
    );
}