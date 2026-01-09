import React from 'react'
import {Bookmark} from 'lucide-react' 
import './index.css'
import Card from './components/card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$40/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "7 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$35/hr",
    location: "Remote, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    datePosted: "6 days ago",
    post: "System Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$18/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    datePosted: "3 days ago",
    post: "Java Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/accenture.com",
    companyName: "Accenture",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$38/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    companyName: "Zoho",
    datePosted: "4 days ago",
    post: "Product Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$22/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/paytm.com",
    companyName: "Paytm",
    datePosted: "9 days ago",
    post: "Mobile App Developer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$28/hr",
    location: "Delhi, India",
  },
];


  return (
    <div className='Parent'>
      {jobOpenings.map(function(elem,idx){
        return <Card brandLogo={elem.brandLogo} company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App