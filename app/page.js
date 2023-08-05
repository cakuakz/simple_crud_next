
import Image from 'next/image'
import ToDoList from '@/components/ToDoList'
import AddButton from '@/components/button/AddButton'

export default function Home() {
  return (
    <div className='p-8'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-bold text-[48px] font-black'>To Do App</h1>
        <AddButton href='/add' />
      </div>
        <ToDoList />
    </div>
  )
}
