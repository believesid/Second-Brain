import '../App.css'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState, useEffect } from 'react'
import { DocIcon } from '../icons/DocIcon'
import { Sidebar } from '../components/Sidebar'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const [contents, setContents] = useState([]);
    const [activeType, setActiveType] = useState(null);

    // Filter contents
    const filteredContents = activeType ? contents.filter(e => e.type === activeType) : contents;

    //  Fetch content from backend
    async function fetchContent() {
        const response = await axios.get(BACKEND_URL + "/api/v1/content", {
            headers: {
                "Authorization": localStorage.getItem("token") || ""
            }
        });
        setContents(response.data.content);
    }

    //  Fetch on page load
    useEffect(() => {
        fetchContent();
    }, []);

    return <div>
        <div>
            <Sidebar onTypeSelect={setActiveType} />
            <DocIcon />
        </div>
        <div className='p-4 ml-72 h-screen bg-gray-100'>
            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false);
                fetchContent(); //  Refetch after adding content
            }} />

            <div className='flex justify-end gap-2 pointer'>
                <Button
                    //@ts-ignore
                    onClick={() => setModalOpen(true)}
                    startIcon={<PlusIcon />}
                    variant="primary" text="Add content" size='sm'
                />
                <Button
                    //@ts-ignore
                    startIcon={<ShareIcon />}
                    variant="secondary" text="Share Brain" size='sm'
                />
            </div>

            {/*  Render cards dynamically from backend */}
            <div className='flex gap-4 flex-wrap'>
                {filteredContents.map((content: any) => (
                    <Card
                        key={content._id}
                        type={content.type}
                        link={content.link}
                        title={content.title}
                        contentId={content._id}  //pass id
                        onDelete={fetchContent}  // Refetch after delete
                    />
                ))}
            </div>
        </div>
    </div>
}