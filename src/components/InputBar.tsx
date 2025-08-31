import React from 'react'
import { useRef } from 'react';
import { Plus } from 'lucide-react'

interface Props {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; //this function doesnt return anything, args passed everywhere included interface
}

const InputBar: React.FC<Props> = ({input, setInput, handleAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
        onSubmit = {(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}
        className='flex w-[90%] relative items-center'>
      <input 
        id='input_bar' 
        value={input}
        type='text' 
        ref={inputRef}
        placeholder='Enter a task...'
        onChange={ (e) => setInput(e.target.value) }
        className='w-full border-none p-[15px] transition duratrion-200 rounded-full focus:outline-none focus:shadow-[0_0_30px_10px#F0F0F0]'/>
      <button type='submit'

        className='flex justify-center items-center absolute mx-[12px] right-[0px] text-xl border-none w-[40px] h-[40px] rounded-full bg-[#72abf6] active:scale-[0.8] duration-100 ease-in-out'>
        <Plus className='text-white w-[40px] h-[40px] hover:bg-[#217FFA] rounded-full transition duration-100 ease-in-out active:scale-[0.8] active:shadow-[0_0_5px_black] hover:shadow-[0_0_10px_1px#0059CD]'/>
      </button>
    </form>
  )
}

export default InputBar