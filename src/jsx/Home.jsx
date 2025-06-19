import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import '../css/Home.css';

export default function Home() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="home-container">
      {/* Name */}
      {userInfo.name && <h1 className="home-name">{userInfo.name}</h1>}

      {/* Bio */}
      {userInfo.bio && <p className="home-bio">{userInfo.bio}</p>}

      {/* Projects */}
      {userInfo.projects && userInfo.projects.length > 0 && (
        <div className="home-section">
          <h2>Projects</h2>
          {userInfo.projects.map((project, index) => (
            <div key={index} className="home-project">
              <h3>{project.name}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="home-project-image"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {userInfo.skills && userInfo.skills.length > 0 && (
        <div className="home-section">
          <h2>Skills</h2>
          <ul className="home-skills">
            {userInfo.skills.map((skill, index) => (
              <li key={index}>
                {skill.name} <span className="skill-level">(Level: {skill.level})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Blogs */}
      {userInfo.blogs && userInfo.blogs.length > 0 && (
        <div className="home-section">
          <h2>Blogs</h2>
          {userInfo.blogs.map((blog, index) => (
            <div key={index} className="home-blog">
              <h3>{blog.name}</h3>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                {blog.link}
              </a>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Contact Info */}
      {userInfo.contact && (
        <div className="home-section">
          <h2>Contact</h2>
          <p><strong>Phone:</strong> {userInfo.contact.phone}</p>
          <p><strong>Email:</strong> {userInfo.contact.email}</p>
        </div>
      )}
    </div>
  );
}
