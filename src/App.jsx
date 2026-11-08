import React, { useState } from "react";

const Header = ({ onRequestCallback }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div className="container">
      <a className="navbar-brand fw-bold logo" href="#home">
        Indigo<span>Learn</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#why-us">Why Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#eligibility">Eligibility</a></li>
          <li className="nav-item"><a className="nav-link" href="#learn">ACCA</a></li>
          <li className="nav-item ms-lg-3">
            <button className="btn btn-purple" onClick={onRequestCallback}>Request Call Back</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const CallbackForm = ({ onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="callback-card">
      <h4>Aspiring to be an ACCA? Get in touch with us!</h4>
      <form onSubmit={handleSubmit}>
        <input className="form-control" type="text" placeholder="Phone Number" required />
        <input className="form-control" type="email" placeholder="Email ID" required />
        <select className="form-select" required defaultValue="">
          <option value="" disabled>Current Qualification</option>
          <option>12th</option>
          <option>B.Com</option>
          <option>M.Com</option>
          <option>CA</option>
          <option>Other</option>
        </select>
        <select className="form-select" required defaultValue="">
          <option value="" disabled>Interested in</option>
          <option>ACCA</option>
          <option>ACCA + Placement</option>
          <option>ACCA Career Guidance</option>
        </select>
        <button className="btn btn-purple w-100" type="submit">Request Call Back</button>
      </form>
    </div>
  );
};

const HeroSection = ({ onRequestCallback }) => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6">
          <span className="badge-custom">ACCA PROFESSIONAL PROGRAM</span>
          <h1>Become <span>ACCA</span> in<br />18 months</h1>
          <p className="hero-description">
            Accelerate your globally recognised accounting qualification.
            Become ACCA qualified and get placed in top MNCs &amp; Big 4 firms.
            Begin your ACCA journey with IndigoLearn.
          </p>

          <div className="stats-row">
            <Stat title="Registrations" value="248K+" />
            <Stat title="Students Enrolled" value="95,437" />
            <Stat title="Videos Watched" value="25M+ Hours" />
            <Stat title="Faculty" value="50+ Experts" />
          </div>

          <div className="hero-buttons">
            <button className="btn btn-purple">Download Brochure</button>
            <button className="btn btn-danger" onClick={onRequestCallback}>Request Call Back</button>
          </div>
        </div>

        <div className="col-lg-6">
          <CallbackForm onSuccess={onRequestCallback} />
        </div>
      </div>
    </div>
  </section>
);

const Stat = ({ title, value }) => (
  <div className="stat-box">
    <strong>{title}</strong>
    <span>{value}</span>
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="section-title text-center">
    <h2>{title}</h2>
    <div className="title-line"></div>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const WhyChooseUs = () => {
  const cards = [
    {
      icon: "✦",
      title: "Expert Faculty",
      text: "Our faculty members are highly experienced and professionally qualified. They believe in simplifying concepts and making learning practical."
    },
    {
      icon: "👥",
      title: "Complete Success Package",
      text: "Leading exam preparation with video lectures, live sessions, doubt resolution, LMS access, mock exams and expert guidance."
    },
    {
      icon: "▣",
      title: "Placements",
      text: "Personalised placement assistance with industry relevant training and opportunities to help you get the right career."
    }
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <SectionTitle title="Why Choose Us?" />
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-md-4" key={card.title}>
              <div className="feature-card">
                <div className="feature-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 mt-4">
          <InfoBox title="Levels" value="3 Levels (13 papers)" />
          <InfoBox title="Duration" value="6 - 18 months" />
          <InfoBox title="Exams" value="Quarterly (Online)" />
          <InfoBox title="Exemptions" value="Up to 9 papers" />
        </div>
      </div>
    </section>
  );
};

const InfoBox = ({ title, value }) => (
  <div className="col-md-6 col-lg-3">
    <div className="info-box">
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  </div>
);

const Eligibility = () => (
  <section id="eligibility" className="eligibility-section">
    <div className="container">
      <SectionTitle
        title="ACCA Eligibility"
        subtitle="Check if you are eligible to begin your ACCA journey."
      />
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="eligibility-card">
            <EligibilityItem number="01" title="After 12th">
              Students who have completed their 12th standard can begin their ACCA journey subject to the required eligibility criteria.
            </EligibilityItem>
            <EligibilityItem number="02" title="Graduates">
              Graduates from commerce and other relevant backgrounds can pursue ACCA and may be eligible for exemptions.
            </EligibilityItem>
            <EligibilityItem number="03" title="Working Professionals">
              Professionals can pursue ACCA alongside their careers through flexible learning options.
            </EligibilityItem>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EligibilityItem = ({ number, title, children }) => (
  <div className="eligibility-item">
    <div className="eligibility-number">{number}</div>
    <div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </div>
);

const LearnAcca = () => {
  const levels = [
    {
      title: "Knowledge Level",
      papers: ["Business and Technology (BT)", "Management Accounting (MA)", "Financial Accounting (FA)"],
      count: "3 papers"
    },
    {
      title: "Skill Level",
      papers: ["Corporate and Business Law (LW)", "Performance Management (PM)", "Taxation (TX)", "Financial Reporting (FR)", "Audit and Assurance (AA)", "Financial Management (FM)"],
      count: "6 papers"
    },
    {
      title: "Professional Level",
      papers: ["Strategic Business Leader (SBL)", "Strategic Business Reporting (SBR)", "Advanced Financial Management (AFM)", "Advanced Performance Management (APM)", "Advanced Taxation (ATX)", "Advanced Audit and Assurance (AAA)"],
      count: "4 papers"
    }
  ];

  return (
    <section id="learn" className="learn-section">
      <div className="container">
        <SectionTitle title="What will you Learn in ACCA?" />
        <div className="row g-4">
          {levels.map((level) => (
            <div className="col-lg-4" key={level.title}>
              <div className="level-card">
                <div className="level-header">{level.title}</div>
                <div className="level-body">
                  <ul>
                    {level.papers.map((paper) => <li key={paper}>{paper}</li>)}
                  </ul>
                </div>
                <div className="level-footer">{level.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlacementAssistance = () => {
  const items = [
    {
      title: "Resume Building",
      text: "IndigoLearn provides professional guidance to help you create an effective resume and make a lasting impression."
    },
    {
      title: "Career Counselling",
      text: "Get career counselling to understand suitable opportunities and applicable roles so that you can make informed career decisions."
    },
    {
      title: "Jobs",
      text: "Get access to relevant opportunities with corporate affiliations and industry connections to help you find the right career."
    }
  ];

  return (
    <section className="placement-section">
      <div className="container">
        <SectionTitle title="100% Placement Assistance" />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="placement-card">
              {items.map((item) => (
                <div className="placement-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onRequestCallback }) => (
  <section className="final-cta">
    <div className="container">
      <div className="row align-items-center gy-4">
        <div className="col-lg-6">
          <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
          <p>Sign-up and get access to our FREE ACCA Course with expert guidance.</p>
          <button className="btn btn-danger" onClick={onRequestCallback}>Get Started</button>
        </div>
        <div className="col-lg-6">
          <CallbackForm onSuccess={onRequestCallback} />
        </div>
      </div>
    </div>
  </section>
);

const SuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop-custom"></div>
      <div className="success-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="success-icon">✓</div>
        <h2>Thank You!</h2>
        <p>Your request has been submitted successfully. Our team will get in touch with you shortly.</p>
        <button className="btn btn-purple px-5" onClick={onClose}>Close</button>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container text-center">
      <div className="footer-logo">Indigo<span>Learn</span></div>
      <p>Your trusted partner for ACCA preparation and career growth.</p>
      <small>© {new Date().getFullYear()} IndigoLearn. All rights reserved.</small>
    </div>
  </footer>
);

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header onRequestCallback={() => setShowModal(true)} />
      <main>
        <HeroSection onRequestCallback={() => setShowModal(true)} />
        <WhyChooseUs />
        <Eligibility />
        <LearnAcca />
        <PlacementAssistance />
        <FinalCTA onRequestCallback={() => setShowModal(true)} />
      </main>
      <Footer />
      <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}