

type HangmanDrawingProps = {
      numberOfGuesses: number
}




export function HangmanDrawing ({numberOfGuesses} : HangmanDrawingProps) {

const head = <div className="h-[55px] w-[55px] rounded-[100%] border-solid border-black border-[7px] absolute top-[48px] right-[-22px]"> </div>
const body = <div className= "h-[110px] w-[10px] bg-black absolute top-[100px] right-0 "></div>
const rightArm = <div className= "h-[7px] w-[100px] bg-black absolute top-[120px] right-[-100px] rotate-30 origin-bottom-left "></div>
const leftArm = <div className= "h-[7px] w-[100px] bg-black absolute top-[120px] right-[10px] rotate-35 origin-bottom-right "></div>
const rightLeg = <div className= "h-[7px] w-[100px] bg-black absolute top-[200px] right-[-93px] rotate-60 origin-bottom-left "></div>
const leftLeg = <div className= "h-[7px] w-[100px] bg-black absolute top-[200px] right-[4px] rotate-65 origin-bottom-right "> </div>

const bodyParts = [head, body, rightArm , leftArm , rightLeg , leftLeg]

return (  
      <div className="relative">
      {bodyParts.slice(0, numberOfGuesses)}
      <div className="w-[10px] h-[50px] bg-black absolute top-0 right-0 " />
      <div className="w-[200px] h-[10px] bg-black ml-[120px]" />
      <div className="h-[350px] w-[10px] ml-[120px] bg-black" />
      <div className="h-[10px] w-[250px] bg-black"/>

      </div>
      )

}
 