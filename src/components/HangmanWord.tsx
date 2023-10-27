
type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export function HangmanWord ({guessedLetters, reveal = false, wordToGuess} : HangmanWordProps) {

  return (
    <div className="flex justify-center items-center gap-3 lg:gap-[.25em] text-7xl lg:text-8xl font-bold uppercase font-mono">

{wordToGuess.split("").map((letter, index) => (
  <span className=" border-b-[.1em] border-solid border-black" key={index}>
  <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
                  color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black", }}>
    {letter}
    </span>
    </span>
))}
    </div>
  )
}

