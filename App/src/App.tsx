
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import {ShareIcon} from './icons/ShareIcon'
import { Card } from './components/Card'

function App() {
return <div>
  
  <div className='flex justify-end gap-4 ' >
     <Button
  //@ts-ignore
  startIcon={<PlusIcon />} 
  variant = "primary" text = "Add content" size='sm'> 
  endIcon={ <ShareIcon/>}
  </Button>
  <Button
  //@ts-ignore
  startIcon={<ShareIcon />}
   variant = "secondary" text = "Share Brain" size='sm'></Button>
  
  </div>
 
 <div>
     <Card/>
 </div>
 
  
</div>
}

export default App
