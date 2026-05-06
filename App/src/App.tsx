
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import {ShareIcon} from './icons/ShareIcon'

function App() {
return <div className='flex'>
  
  <Button 
  //@ts-ignore
  startIcon={<PlusIcon />} 
  variant = "primary" text = "Add content"> 
  endIcon={ <ShareIcon/>}
  </Button>
  <Button
  //@ts-ignore
  startIcon={<ShareIcon />}
   variant = "secondary" text = "Share"></Button>
  
</div>
}

export default App
