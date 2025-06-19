import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import '../css/Home.css';

export default function Home() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="home-container">
      {/* Name and Bio */}
      {userInfo.name && <h1 className="home-name">{userInfo.name}</h1>}
      {userInfo.bio && <p className="home-bio">{userInfo.bio}</p>}

      {/* Projects */}
      {userInfo.projects && userInfo.projects.length > 0 && (
        <section className="home-projects">
          <h2>Projects</h2>
          {userInfo.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={project.image} alt={project.name} className="project-image" />
              <p className="project-name">{project.name}</p>
            </a>
          ))}
        </section>
      )}

      {/* Skills */}
      {userInfo.skills && userInfo.skills.length > 0 && (
        <section className="home-skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {userInfo.skills.map((skill, index) => (
              <div key={index} className="skill-box">
                {skill.name}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blogs */}
      {userInfo.blogs && userInfo.blogs.length > 0 && (
        <section className="home-blogs">
          <h2>Blogs</h2>
          {userInfo.blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <p className="blog-desc">{blog.description}</p>
              <p className="blog-name">{blog.name}</p>
            </a>
          ))}
        </section>
      )}

      {/* Contact */}
      <section className="home-contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message" rows="4" required />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
