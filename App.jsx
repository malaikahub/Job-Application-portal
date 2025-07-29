import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const formRef = useRef(null)
  const contactRef = useRef(null)
  const imageRef = useRef(null)
  const footerRef = useRef(null)

  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cnic: '',
    education: '',
    skills: [],
    position: '',
    coverLetter: '',
    fileName: ''
  })

  useEffect(() => {
  const boxes = document.querySelectorAll('.animated-box');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  boxes.forEach(box => observer.observe(box));

  return () => {
    boxes.forEach(box => observer.unobserve(box));
  };
}, []);

useEffect(() => {
  const handleScroll = () => {
    const boxes = document.querySelectorAll('.animated-box');
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.85;

      if (boxTop < triggerPoint) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.classList.add('custom-cursor')
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`
      cursor.style.left = `${e.clientX}px`
    }

    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5, // 50% of the element is in view
    }
  );

  const boxes = document.querySelectorAll(".animated-box");
  boxes.forEach((box) => observer.observe(box));

  return () => {
    boxes.forEach((box) => observer.unobserve(box));
  };
}, []);

  const handleFormClick = () => {
    const nextState = !showForm
    setShowForm(nextState)
    if (!showForm) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0].name : value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData((prev) => {
      const updatedSkills = checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value)
      return { ...prev, skills: updatedSkills }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  useEffect(() => {
    if (showForm) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }, [showForm])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (imageRef.current) observer.observe(imageRef.current)
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current)
    }
  }, [])

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
  }, []);

  return (
    <div>
      <div className="custom-cursor"></div>

      <nav className="navbar">
        <div className="navbar-left">
          <img src="/circles.png" alt="Left Logo" className="left-logo" />
        </div>

        <div className="navbar-center">
          <img src="/Loogo.png" alt="Main Logo" className="main-logo" />
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
          <button onClick={handleFormClick}>Form</button>
          <button onClick={() => scrollTo(footerRef)}>About</button>
          <button onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
        </div>
      </nav>

      <section className="home">
        <div>
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/office.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="animated-box left-box">
  <ul className="box-list">
    <h1>Marketing</h1>
    <li>Strategic Campaign Planning</li>
    <li>Creative Content Development</li>
    <li>Brand Identity Building</li>
    <li>Social Media Management</li>
    <li>Targeted Email Marketing</li>
    <li>Video & Visual Ad Design</li>
    <li>SEO & Web Optimization</li>
    <li>Influencer Collaboration</li>
    <li>Event Promotion Services</li>
    <li>Multichannel Marketing Execution</li>
    </ul>
</div>

        <div className="home-content">
          <img src="/logo.png" alt="Apex Marketing" className="home-image" />
          <h1>Welcome to Our Job Portal</h1>
          <p>Your future starts here.</p>
        </div>
        <div className="animated-box right-box">
  <ul className="box-list">
    <h1>Sucess</h1>
    <li>Data-Driven Decisions</li>
    <li>Client-Centered Approach</li>
    <li>High ROI Strategies</li>
    <li>24/7 Campaign Monitoring</li>
    <li>Continuous Optimization</li>
    <li>Cutting-Edge Marketing Tools</li>
    <li>Transparent Reporting</li>
    <li>Industry Trend Adaptability</li>
    <li>Passionate Creative Team</li>
    <li>Proven Track Record</li>
  </ul>
</div>

        </div>
      </section>

      {showForm && (
        <section className="section form" ref={formRef}>
          <h2>Apply Now</h2>
          <div className="BOX">
            <div className="form-box">
              <form className="form-layout" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                <input type="text" name="cnic" placeholder="CNIC" required onChange={handleChange} />

                <select name="education" required onChange={handleChange}>
                  <option value="">Education Level</option>
                  <option value="matric">Matric</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="bachelor">Bachelor's</option>
                  <option value="master">Master's</option>
                </select>

                <label>Skills:</label>
                <div>
                  <label><input type="checkbox" name="skills" value="HTML" onChange={handleCheckboxChange} /> HTML</label>
                  <label><input type="checkbox" name="skills" value="CSS" onChange={handleCheckboxChange} /> CSS</label>
                  <label><input type="checkbox" name="skills" value="JavaScript" onChange={handleCheckboxChange} /> JavaScript</label>
                  <label><input type="checkbox" name="skills" value="React" onChange={handleCheckboxChange} /> React</label>
                </div>

                <select name="position" required onChange={handleChange}>
                  <option value="">Preferred Role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="designer">UI/UX Designer</option>
                </select>

                <input type="file" name="file" onChange={handleChange} />
                <textarea name="coverLetter" placeholder="Cover Letter" rows={4} onChange={handleChange}></textarea>

                <button type="submit">Submit Application</button>
              </form>
            </div>
          </div>

          {submitted && (
            <div className="submission-summary">
              <h3>Submission Summary</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>CNIC:</strong> {formData.cnic}</p>
              <p><strong>Education:</strong> {formData.education}</p>
              <p><strong>Position:</strong> {formData.position}</p>
              <p><strong>Resume:</strong> {formData.fileName || 'Not uploaded'}</p>
              <p><strong>Cover Letter:</strong> {formData.coverLetter}</p>
              <p><strong>Skills:</strong> {formData.skills.join(', ') || 'None selected'}</p>
            </div>
          )}
        </section>
      )}

      <section ref={contactRef} className="contact-modern">
        <div className="contact-card">
          <div className="contact-info">
            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>123 Office Street, Downtown</p>
              </div>
            </div>
            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone</h4>
                <p>+123 456 7890</p>
              </div>
            </div>
            <div className="info-box">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Hours</h4>
                <p>Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="contact-image-panel">
            <img src="/hijab.jpg" alt="Office" />
          </div>

          <div className="contact-form-panel">
            <h3>Contact Form</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Comment or message" required></textarea>
              <button type="submit">Submit</button>
            </form>

            <div className="form-logo">
              <img src="/Loogo.png" alt="Jet FormBuilder" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" ref={footerRef}>
        <div className="footer-top">
          <div className="footer-column">
            <h3>Apex Marketing</h3>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Case Studies</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Client Portal</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Global</h3>
            <ul>
              <li>Apex Canada</li>
              <li>Apex UK</li>
              <li>Apex UAE</li>
              <li>Apex Pakistan</li>
            </ul>
          </div>
          <div className="footer-column subscribe-box">
            <h3>Get the Latest News</h3>
            <input type="email" placeholder="Your email here" />
            <button>Subscribe</button>
            <div className="checkbox-wrapper">
              <label>
                <input type="checkbox" />
                <span>By checking the box, you agree that you're at least 16 years old.</span>
              </label>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
        </div>

        <hr />

        <div className="footer-bottom">
          <ul>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
            <li>Supplier Code of Conduct</li>
            <li>Do Not Sell My Info</li>
          </ul>
          <p>© 2025 Apex Marketing Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
