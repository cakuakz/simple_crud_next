import { Plus } from 'lucide-react';
import Link from 'next/link';

const AddButton = ({href = "/"}) => {
    return (
        <Link href={href}>
            <button className="flex flex-row gap-x-[6px] px-3 py-[6px] text-white font-semibold bg-black rounded-lg hover:bg-gray-800 duration-200 ease-in-out">
                <Plus />
                Add ToDo
            </button>
        </Link>
     );
}
 
export default AddButton;