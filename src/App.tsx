import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";


const App: React.FC = () => {

  const [wordToGuess, setWordToGuess] = useState (()=> {
    return words[Math.floor(Math.random() * words.length)]
    
  })
  console.log(wordToGuess);
  

   const [guessedLetters, setGuessedLetters] = useState<string[]>([])

   function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }
 
   const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter))


  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))
 
    const addGuessedLetter = useCallback(
      (letter: string) => {
        if (guessedLetters.includes(letter)|| isLoser || isWinner) return
  
        setGuessedLetters(currentLetters => [...currentLetters, letter])
      },
      [guessedLetters, isWinner, isLoser]
    )
   
  
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
        if (!key.match(/^[a-z]$/)) return
  
        e.preventDefault()
        addGuessedLetter(key)
      }
  
      document.addEventListener("keypress", handler)
  
      return () => {
        document.removeEventListener("keypress", handler)
      }
    }, [guessedLetters])
  
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
        if (key !== "Enter") return
  
        e.preventDefault()
        setGuessedLetters([])
        setWordToGuess(getWord())
      }
  
      document.addEventListener("keypress", handler)
  
      return () => {
        document.removeEventListener("keypress", handler)
      }
    }, [])
    

  return (
  
      <div className="max-w-[1280px] flex flex-col gap-8 items-center m-auto">
                <div className="mt-5 p-4 font-serif font-bold text-center">
                {isWinner && <div className="text-blue-500 text-6xl font-Play ">Winner! ✔ <div className="text-2xl mt-4 "><span className="text-green-500 text-2xl font-mono mr-1 border border-solid rounded-lg bg-neutral-700 px-2 py-1">ENTER</span><span className="text-black ">to Refresh</span> </div></div>}
                {isLoser && <div className="text-red-500 text-5xl font-Play"> TRY AGAIN!<div className="text-2xl mt-4 "><span className="text-green-500 text-2xl font-mono mr-1 border border-solid rounded-lg bg-neutral-700 px-2 py-1">ENTER</span><span className="text-black">to Refresh</span> </div></div>}
                </div>


         
              
                

        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord reveal={isLoser} guessedLetters= {guessedLetters} wordToGuess = {wordToGuess} />
    
        <Keyboard 
        disabled={isWinner || isLoser}
        activeLetters= {guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters} addGuessedLetter = {addGuessedLetter} />
   
                
      </div>
     
  )
}

export default App
