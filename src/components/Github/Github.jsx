import { useEffect, useState } from 'react';

const Github = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, []);

  return (
    <div className="text-center text-3xl text-white p-3 bg-gray-700 m-2">
      <h2>Github followers: {myData.followers} </h2>
      <img src={myData.avatar_url} alt="" width="300" />
    </div>
  );
};

export default Github;
