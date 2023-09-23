import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div className="text-center text-3xl text-red-600 p-3 bg-gray-300 m-2">
      User: {id}{' '}
    </div>
  );
};

export default User;
