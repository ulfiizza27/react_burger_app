export default function PostCard({ item }) {
    return (
        <div>
            <h3 className='text-xl font-semibold'>{item?.title}</h3>
            <p>{item?.body}</p>
        </div>
    );
}
