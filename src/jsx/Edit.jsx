import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import '../css/Edit.css';

export default function Edit() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  // Name
  const [nameInput, setNameInput] = useState('');
  const [nameSaved, setNameSaved] = useState(false);

  // Bio
  const [bioInput, setBioInput] = useState('');
  const [bioSaved, setBioSaved] = useState(false);

  // Projects
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [editProjectIndex, setEditProjectIndex] = useState(null);

  // Skills
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('1');

  // Blogs
  const [blogs, setBlogs] = useState([]);
  const [blogName, setBlogName] = useState('');
  const [blogLink, setBlogLink] = useState('');
  const [blogDesc, setBlogDesc] = useState('');
  const [editBlogIndex, setEditBlogIndex] = useState(null);

  // Contact
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSaved, setContactSaved] = useState(false);

  useEffect(() => {
    if (userInfo.name) {
      setNameInput(userInfo.name);
      setNameSaved(true);
    }
    if (userInfo.bio) {
      setBioInput(userInfo.bio);
      setBioSaved(true);
    }
    if (userInfo.projects) {
      setProjects(userInfo.projects);
    }
    if (userInfo.skills) {
      setSkills(userInfo.skills);
    }
    if (userInfo.blogs) {
      setBlogs(userInfo.blogs);
    }
    if (userInfo.contact) {
      setContactPhone(userInfo.contact.phone);
      setContactEmail(userInfo.contact.email);
      setContactSaved(true);
    }
  }, [userInfo]);

  // Name
  const saveName = () => {
    if (nameInput.trim()) {
      setUserInfo({ ...userInfo, name: nameInput });
      setNameSaved(true);
    }
  };
  const deleteName = () => {
    setUserInfo({ ...userInfo, name: '' });
    setNameInput('');
    setNameSaved(false);
  };

  // Bio
  const saveBio = () => {
    if (bioInput.trim()) {
      setUserInfo({ ...userInfo, bio: bioInput });
      setBioSaved(true);
    }
  };
  const editBio = () => setBioSaved(false);
  const deleteBio = () => {
    setUserInfo({ ...userInfo, bio: '' });
    setBioInput('');
    setBioSaved(false);
  };

  // Project handlers
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProjectImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const addProject = () => {
    if (projectName && projectLink && projectImage) {
      const newProject = { name: projectName, link: projectLink, image: projectImage };
      const updated = [...projects, newProject];
      setProjects(updated);
      setUserInfo({ ...userInfo, projects: updated });
      setProjectName('');
      setProjectLink('');
      setProjectImage(null);
    }
  };

const editProject = (index) => {
  setEditProjectIndex(index);
  setProjectName(projects[index].name);
  setProjectLink(projects[index].link);
  setProjectImage(projects[index].image);
};


  const saveEditedProject = () => {
    const updated = [...projects];
    updated[editProjectIndex] = {
      name: projectName,
      link: projectLink,
      image: projectImage,
    };
    setProjects(updated);
    setUserInfo({ ...userInfo, projects: updated });
    setEditProjectIndex(null);
    setProjectName('');
    setProjectLink('');
    setProjectImage(null);
  };

  const deleteProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
    setUserInfo({ ...userInfo, projects: updated });
  };

  // Skills
  const addSkill = () => {
    if (skillName.trim()) {
      const newSkill = { name: skillName, level: skillLevel };
      const updated = [...skills, newSkill];
      setSkills(updated);
      setUserInfo({ ...userInfo, skills: updated });
      setSkillName('');
      setSkillLevel('1');
    }
  };

  const deleteSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
    setUserInfo({ ...userInfo, skills: updated });
  };

  // Blog handlers
  const addBlog = () => {
    if (blogName && blogLink && blogDesc) {
      const newBlog = { name: blogName, link: blogLink, description: blogDesc };
      const updated = [...blogs, newBlog];
      setBlogs(updated);
      setUserInfo({ ...userInfo, blogs: updated });
      setBlogName('');
      setBlogLink('');
      setBlogDesc('');
    }
  };

  const editBlog = (index) => {
    setEditBlogIndex(index);
    setBlogName(blogs[index].name);
    setBlogLink(blogs[index].link);
    setBlogDesc(blogs[index].description);
  };

  const saveEditedBlog = () => {
    const updated = [...blogs];
    updated[editBlogIndex] = {
      name: blogName,
      link: blogLink,
      description: blogDesc,
    };
    setBlogs(updated);
    setUserInfo({ ...userInfo, blogs: updated });
    setEditBlogIndex(null);
    setBlogName('');
    setBlogLink('');
    setBlogDesc('');
  };

  const deleteBlog = (index) => {
    const updated = blogs.filter((_, i) => i !== index);
    setBlogs(updated);
    setUserInfo({ ...userInfo, blogs: updated });
  };

  // Contact
  const saveContact = () => {
    if (contactPhone.trim() && contactEmail.trim()) {
      setUserInfo({
        ...userInfo,
        contact: { phone: contactPhone, email: contactEmail },
      });
      setContactSaved(true);
    }
  };

  const deleteContact = () => {
    setUserInfo({ ...userInfo, contact: null });
    setContactPhone('');
    setContactEmail('');
    setContactSaved(false);
  };

  return (
    
    <div className="edit-container">

      <h2>Edit Profile</h2>

      {/* Name */}
    <section className="form-section">
  <h3>Name</h3>
  <div className="name-box">
    {nameSaved ? (
      <>
        <p className="saved-name"><strong>{userInfo.name}</strong></p>
        <button className="btn delete-btn" onClick={deleteName}>Delete</button>
      </>
    ) : (
      <>
        <input
          type="text"
          className="name-input"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
        <button className="btn save-btn" onClick={saveName}>Save</button>
      </>
    )}
  </div>
</section>


      {/* Bio */}
<section className="form-section">
  <h3>Bio</h3>
  <div className="bio-box">
    {bioSaved ? (
      <>
        <p className="saved-bio">{userInfo.bio}</p>
        <div className="bio-button-row">
          <button className="btn save-btn" onClick={editBio}>Edit</button>
          <button className="btn delete-btn" onClick={deleteBio}>Delete</button>
        </div>
      </>
    ) : (
      <>
        <textarea
          className="bio-textarea"
          rows="4"
          value={bioInput}
          onChange={e => setBioInput(e.target.value)}
        />
        <div className="bio-button-row">
          <button className="btn save-btn" onClick={saveBio}>Save</button>
        </div>
      </>
    )}
  </div>
</section>



      {/* Projects */}
    <section className="form-section">
  <h3>Projects</h3>
  
  {/* Project Input Form */}
  <div className="project-form-box">
    <input
      type="text"
      placeholder="Project Name"
      value={projectName}
      onChange={e => setProjectName(e.target.value)}
      className="project-input"
    />
    <input
      type="text"
      placeholder="Project Link"
      value={projectLink}
      onChange={e => setProjectLink(e.target.value)}
      className="project-input"
    />
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="project-input"
    />
    <button className="btn save-btn" onClick={editProjectIndex !== null ? saveEditedProject : addProject}>
      {editProjectIndex !== null ? 'Save Project' : 'Add Project'}
    </button>
  </div>

  {/* Saved Projects */}
  <div className="projects-list">
{projects.map((proj, index) => (
  <div key={index} className="project-box">
    {editProjectIndex === index ? (
      <>
        <input
          type="text"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          placeholder="Project Name"
          className="project-input"
        />
        <input
          type="text"
          value={projectLink}
          onChange={e => setProjectLink(e.target.value)}
          placeholder="Project Link"
          className="project-input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="project-input"
        />
        <button className="btn save-btn" onClick={saveEditedProject}>Save</button>
        <button className="btn delete-btn" onClick={() => setEditProjectIndex(null)}>Cancel</button>
      </>
    ) : (
      <>
        <p><strong>{proj.name}</strong></p>
        <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a>
        {proj.image && <img src={proj.image} alt="project" className="project-image" />}
        <div className="project-button-row">
          <button className="btn save-btn" onClick={() => editProject(index)}>Edit</button>
          <button className="btn delete-btn" onClick={() => deleteProject(index)}>Delete</button>
        </div>
      </>
    )}
  </div>
))}

  </div>
</section>


      {/* Skills */}
 <section className="form-section skills-box">
  <h3>Skills</h3>
  
  <div className="skill-input-box">
    <input
      type="text"
      placeholder="Skill Name"
      value={skillName}
      onChange={e => setSkillName(e.target.value)}
      className="skill-input"
    />
    <select
      value={skillLevel}
      onChange={e => setSkillLevel(e.target.value)}
      className="skill-input"
    >
      {Array.from({ length: 19 }, (_, i) => (i * 0.5 + 1).toFixed(1)).map(l => (
        <option key={l} value={l}>{l}</option>
      ))}
    </select>
    <button className="btn save-btn" onClick={addSkill}>Add Skill</button>
  </div>

  <div className="skills-list">
    {skills.map((skill, index) => (
      <div key={index} className="skill-item">
        <p>{skill.name} <span className="skill-level">(Level: {skill.level})</span></p>
        <button className="btn delete-btn" onClick={() => deleteSkill(index)}>Delete</button>
      </div>
    ))}
  </div>
</section>


      {/* Blogs */}
<section className="form-section blog-box">
  <h3>Blogs</h3>

  <div className="blog-input-box">
    <input
      type="text"
      placeholder="Blog Name"
      value={blogName}
      onChange={e => setBlogName(e.target.value)}
      className="blog-input"
    />
    <input
      type="text"
      placeholder="Blog Link"
      value={blogLink}
      onChange={e => setBlogLink(e.target.value)}
      className="blog-input"
    />
    <textarea
      placeholder="Blog Description"
      value={blogDesc}
      onChange={e => setBlogDesc(e.target.value)}
      className="blog-input"
    />
    <button className="btn save-btn" onClick={addBlog}>Add Blog</button>
  </div>

  <div className="blogs-list">
    {blogs.map((blog, index) => (
      <div key={index} className="blog-item">
        {editBlogIndex === index ? (
          <>
            <input
              type="text"
              value={blogName}
              onChange={e => setBlogName(e.target.value)}
              className="blog-input"
            />
            <input
              type="text"
              value={blogLink}
              onChange={e => setBlogLink(e.target.value)}
              className="blog-input"
            />
            <textarea
              value={blogDesc}
              onChange={e => setBlogDesc(e.target.value)}
              className="blog-input"
            />
            <button className="btn save-btn" onClick={saveEditedBlog}>Save</button>
          </>
        ) : (
          <>
            <p><strong>{blog.name}</strong></p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.link}</a>
            <p>{blog.description}</p>
            <div className="blog-btn-group">
              <button className="btn edit-btn" onClick={() => editBlog(index)}>Edit</button>
              <button className="btn delete-btn" onClick={() => deleteBlog(index)}>Delete</button>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
</section>


      {/* Contact */}
     <section className="form-section contact-box">
  <h3>Contact</h3>
  {contactSaved ? (
    <>
      <p><strong>Phone:</strong> {userInfo.contact.phone}</p>
      <p><strong>Email:</strong> {userInfo.contact.email}</p>
      <button className="btn delete-btn" onClick={deleteContact}>Delete</button>
    </>
  ) : (
    <div className="contact-input-box">
      <input
        type="tel"
        placeholder="Phone"
        value={contactPhone}
        onChange={e => setContactPhone(e.target.value)}
        className="contact-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={contactEmail}
        onChange={e => setContactEmail(e.target.value)}
        className="contact-input"
      />
      <button className="btn save-btn" onClick={saveContact}>Save</button>
    </div>
  )}
</section>

    </div>
  );
}
