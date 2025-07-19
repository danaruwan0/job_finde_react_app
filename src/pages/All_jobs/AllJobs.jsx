import React from 'react';
import './alljobs.css';

// Custom components
import Text from '../../components/Text/Text';
// import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// MUI icon
import SendIcon from '@mui/icons-material/Send';
import Footer from '../../components/Footer/Footer';

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CodeWorks Pvt Ltd",
    location: "Colombo",
    salary: "Rs. 150,000/month",
    description: "Build user interfaces using React.js and ensure responsive design.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Pixel Studio",
    location: "Kandy",
    salary: "Rs. 120,000/month",
    description: "Design engaging user interfaces with Figma and Adobe XD.",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "DataBridge Solutions",
    location: "Galle",
    salary: "Rs. 170,000/month",
    description: "Work with Java and Spring Boot for backend development.",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    company: "TechX Innovations",
    location: "Negombo",
    salary: "Rs. 200,000/month",
    description: "Develop full stack web apps using React and Node.js.",
  },
  {
    id: 5,
    title: "QA Engineer",
    company: "BugSquash Ltd",
    location: "Matara",
    salary: "Rs. 130,000/month",
    description: "Write test cases and ensure application quality with automated tools.",
  }
];

export default function AllJobs() {
  return (
    <div>
      <div className="jobsearch-container">
      <Text className="heading" text="Find Your Dream Job" />
      <Text className="subheading" text="Search and apply for thousands of job openings" />

      {/*  */}

      <div className="job-listings">
        {mockJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <Text className="job-title" text={job.title} />
            <Text className={"sub"} text={`Company: ${job.company}`} />
            <Text className={"sub"} text={`Location: ${job.location}`} />
            <Text className={"sub"} text={`Salary: ${job.salary}`} />
            <p className="job-description">{job.description}</p>

            <Button
              type="button"
              text={
                <>
                  Apply Now <SendIcon style={{ marginLeft: '8px', fontSize: '20px' }} />
                </>
              }
              className="apply-btn"
              id={`apply-${job.id}`}
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}
