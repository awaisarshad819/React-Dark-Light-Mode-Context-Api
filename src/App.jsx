import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const darkTheme = (()=>{
    setThemeMode("dark")
  })

  const lightTheme = (()=>{
    setThemeMode("light")
  })
  useEffect(()=>{
    const htmlElem = document.querySelector("html");
    htmlElem.classList.remove("dark", "light");
    htmlElem.classList.add(ThemeMode);
  }, [ThemeMode])
  return (
    <>
          <ThemeProvider value={{ThemeMode, darkTheme, lightTheme}}>
            <div className=" min-h-screen ">
                <div className="w-full">
                    <div className="w-full border-3 p-5 mx-auto flex justify-end mb-4 items-center bg-light-500">
                        
                        <ThemeBtn />
                    </div>

                    <div className="w-full  mx-auto flex flex-wrap  justify-evenly items-center">
                       <Card />
                       <Card />
                       <Card />
                       <Card />
                      
                    </div>
                </div>
            </div>
          </ThemeProvider>
    </>
  )
}

export default App
