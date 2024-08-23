import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {
  const [formdata, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch('/server/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata)
      })
      const data =  await res.json();

      if(!res.ok){
        setPublishError(data.message);
        return;
      }
      if(res.ok){
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  }
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row jsutify-between'>
          <TextInput 
          type='text'
          placeholder='Title'
          required
          id = 'title'
          className='flex-1'
          onChange={(e) => 
            setFormData({...formdata, title: e.target.value})
          }
          />
          <Select
            onChange={(e) => 
              setFormData({...formdata, category: e.target.value})
            }
          >
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
            onChange={(e) => 
              setFormData({...formdata, youtubeUrl: e.target.value})
            }
          />
          {/* <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>Done</Button> */}
        </div>
        <ReactQuill 
          theme='snow'
          placeholder='write something...'
          className='h-72 mb-12'
          required
          onChange={(value) => 
            setFormData({...formdata, content: value})
          }
        />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Publish
        </Button>
      </form>
    </div>
  )
}

export default CreatePost