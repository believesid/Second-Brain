
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import {ShareIcon} from './icons/ShareIcon'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'
import { useState } from 'react'

import { DocIcon } from './icons/DocIcon'
import { Sidebar } from './components/Sidebar'


function App() {
    const [modalOpen, setModalOpen] = useState(false);  
return<div>
    
      <div>
         <Sidebar/>
       <DocIcon/>
      </div>
        <div className='p-4 ml-72 h-screen bg-gray-100'>
        <CreateContentModal open={modalOpen} onClose = {() => {
            setModalOpen(false);
        }}/>
    
    <div className='flex justify-end gap-2 pointer'>
        
    <Button 
    //@ts-ignore
    onClick = {() => {
        setModalOpen(true)
    }}
    startIcon={<PlusIcon />} 
    endIcon={ <ShareIcon/>} 
    variant = "primary" text = "Add content" size='sm'>
    
    </Button>
    <Button 
    //@ts-ignore
    startIcon={<ShareIcon />}
    variant = "secondary" text = "Share Brain" size='sm'></Button>
    
    </div>
    
    <div className='flex gap-4 '>
        <Card type= "youtube" link= "https://www.youtube.com/embed/GMQc3Hfojxc?si=HrDgPmhXQ40rh5n0" title= "Be Authentic"/>
        <Card type="twitter" link= "https://x.com/Siddhar65544461/status/1840119753483948457" title='be it'/>
    </div>
    
    
    </div>
</div>
}

export default App
