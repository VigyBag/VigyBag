import React, { useEffect, useState } from 'react';

const username = "codervivek5";
const repo = "VigyBag";

function Team() {
  const [contributors, setContributors] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchContributors();
  }, [page]);

  const fetchContributors = () => {
    fetch(`https://api.github.com/repos/${username}/${repo}/contributors?page=${page}&per_page=100`)
      .then(response => response.json())
      .then(data => {
        setContributors(prevContributors => [...prevContributors, ...data]);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
      });
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h2 className="text-3xl mt-4  text-center font-bold mb-4">Contributors</h2>

      <div className="grid grid-cols-1 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {contributors.map(contributor => (
          <div key={contributor.id} className="bg-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-lg p-4">
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{contributor.login}</h3>
            <p className="text-center">Contributions: {contributor.contributions}</p>
          </div>
        ))}
      </div>
      {contributors.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="bg-blue-500 justify-center hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Team;