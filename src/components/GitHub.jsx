import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const GitHubCard = ({
  index,
  name,
  description,
  url,
  stars,
  forks,
  language,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => window.open(url, "_blank")}
      className="cursor-pointer"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.1,
          speed: 100,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[120px] flex items-center justify-center bg-black-100 rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <img
              src={github}
              alt="github"
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-white text-[16px]">Repository</p>
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] min-h-[60px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <div className="mr-4 flex items-center">
              <span className="text-yellow-300 mr-1">★</span>
              <span>{stars}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
              </svg>
              <span>{forks}</span>
            </div>
          </div>
          <div>
            <span className="px-2 py-1 bg-black-200 rounded-full text-sm">
              {language}
            </span>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "tommyNg0530";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch profile info
        const profileResponse = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!profileResponse.ok) {
          throw new Error(`Profile API error: ${profileResponse.status}`);
        }

        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        if (!reposResponse.ok) {
          throw new Error(`Repos API error: ${reposResponse.status}`);
        }

        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Code</p>
        <h2 className={`${styles.sectionHeadText}`}>GitHub Projects</h2>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="canvas-loader"></div>
          <p className="text-secondary ml-2">Loading GitHub data...</p>
        </div>
      ) : error ? (
        <div className="mt-20 text-center">
          <p className="text-red-400">Error loading GitHub data: {error}</p>
          <p className="text-secondary mt-2">
            This might be due to GitHub API rate limits or network issues. Try
            again later or visit my GitHub directly.
          </p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary bg-tertiary"
          >
            Visit GitHub Profile
          </a>
        </div>
      ) : (
        <>
          {profile && (
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex items-center"
            >
              <img
                src={profile.avatar_url}
                alt="GitHub Profile"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <h3 className="text-white text-[20px] font-bold">
                  {profile.name}
                </h3>
                <p className="text-secondary">{profile.bio}</p>
                <div className="mt-2 flex gap-4">
                  <span>Followers: {profile.followers}</span>
                  <span>Following: {profile.following}</span>
                  <span>Public Repos: {profile.public_repos}</span>
                </div>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#915EFF] hover:underline"
                >
                  View Profile
                </a>
              </div>
            </motion.div>
          )}

          <div className="mt-20 flex flex-wrap gap-7">
            {repos.map((repo, index) => (
              <GitHubCard
                key={repo.id}
                index={index}
                name={repo.name || "Unnamed Repository"}
                description={repo.description || "No description available"}
                url={repo.html_url}
                stars={repo.stargazers_count || 0}
                forks={repo.forks_count || 0}
                language={repo.language || "Not specified"}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(GitHub, "github");
