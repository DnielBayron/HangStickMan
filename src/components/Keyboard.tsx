
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  type KeyboardProps = {
    activeLetters : string[]
    inactiveLetters: string[]
    disabled?: boolean
    addGuessedLetter: (letter: string) => void
  }

export function Keyboard ({activeLetters, disabled = false , inactiveLetters, addGuessedLetter} : KeyboardProps ) {
    return (
        <div className="w-full grid gap-2 p-4 md:p-2 xl:p-6 grid-cols-9">
            
            {KEYS.map(key => {
                 const isActive = activeLetters.includes(key);
                 const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                    onClick={() => addGuessedLetter(key)}
                    className={`border bg-slate-300 border-black rounded-md p-1 md:p-2 xl:p-3 uppercase text-2xl font-Play font-bold disabled:cursor-not-allowed ${isActive ? "bg-green-500 text-white focus:bg-green-500" : ""} ${isInactive ? "opacity-30" : ""} `}
                    disabled={isInactive || isActive || disabled}
                    key={key}
                  >
                    {key}
                  </button>
                )
            })}


        </div>
    )
}

