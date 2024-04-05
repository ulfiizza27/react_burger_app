import PostCard from './PostCard';
import { useSelector } from 'react-redux';

export default function PostContainer() {
    const {listOfPosts} = useSelector(state => state.post);
    return (
        <div>
            <h1 className="mb-12 text-2xl font-bold text-center">LIST OF ALL POST</h1>
            <div className='grid grid-cols-5 gap-8'>
                {listOfPosts.map((item, i) => (
                    <div className="bg-white rounded-lg shadow-md p-4" key={i}>
                        <PostCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}