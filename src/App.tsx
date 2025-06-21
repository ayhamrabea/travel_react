import './App.css'
import { Layout } from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader } from './Components/Loader/Loader'
import { PostsList } from './Components/CardList/CardList'
import { AuthForm } from './Components/AuthForm/AuthForm'
import { AddStory } from './Components/AddStory/AddStory'
import { ProfilePage } from './pages/profilePage'



function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<PostsList />} />
                <Route path='/auth' element={<AuthForm />} />
                <Route path='/addstory' element={<AddStory />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Route>  
          </Routes>
      </Suspense>
		</BrowserRouter>
  )
}

export default App
