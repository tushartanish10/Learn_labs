import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row jsutify-between'>
          <TextInput 
          type='text'
          placeholder='Title'
          required
          id = 'title'
          className='flex-1'
          />
          <Select>
            <option value='uncategorized'>Select class</option>
            <option value='12'>12th</option>
            <option value='11'>11th</option>
            <option value='10'>10th</option>
            <option value='9'>9th</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <TextInput type='text' placeholder='Paste the youtube url'
            required
            id='videoUrl'
            className='flex-1'
          />
          {/* <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>Done</Button> */}
        </div>
        <ReactQuill 
          theme='snow'
          placeholder='write something...'
          className='h-72 mb-12'
          required
        />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Publish
        </Button>
      </form>
    </div>
  )
}

export default CreatePost