import { Button } from '@chakra-ui/react'
import { Routes } from 'react-router-dom'

function App() {
  return(
    <>
      <Box minH={'100vh'}>
        {/* <Navbar/> */}
        <Routes>
          <Route path ='/' element ={<HomePage/>}/>
          <Route path ='/create' element ={<CreatePage/>}/>
        </Routes>
      </Box>
      <Button>Click</Button>
    </>
  );
}

export default App; 