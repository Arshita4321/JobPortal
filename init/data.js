const sampleListings = [
    {
        title: "Software Engineer",
        description: "Build and maintain server-side logic.",
        image: {
            filename: "software-engineer",
            url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },
        salary: 110000,
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Data Scientist",
        description: "Analyze and interpret complex datasets.",
        image: {
            filename: "data-science",
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        salary: 115000,
        location: "Boston, MA",
        type: "Full-time",
    },

    {
        title: "Backend Developer",
        description: "Build and maintain server-side logic.",
        image: {
            filename: "backend_developer",
            url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        },
        salary: 110000,
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Cybersecurity Analyst",
        description: "Protect systems and networks from cyber threats.",
        image: {
            filename: "cyber_analyst",
            url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
        },
        salary: 105000,
        location: "Dallas, TX",
        type: "Full-time",
    },
    {
        title: "UI/UX Designer",
        description: "Design user-friendly interfaces for applications.",
        image: {
            filename: "ui_ux_designer",
            url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        },
        salary: 95000,
        location: "San Diego, CA",
        type: "Full-time",
    },
    {
        title: "Project Manager",
        description: "Plan and oversee projects to ensure timely completion.",
        image: {
            filename: "project_manager",
            url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },
        salary: 85000,
        location: "Seattle, WA",
        type: "Full-time",
    },
    {
        title: "Business Analyst",
        description: "Analyze business requirements and recommend solutions.",
        image: {
            filename: "business_analyst",
            url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
        },
        salary: 90000,
        location: "Houston, TX",
        type: "Full-time",
    },
    {
        title: "Accountant",
        description: "Manage financial records and reports.",
        image: {
            filename: "accountant",
            url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        },
        salary: 70000,
        location: "Atlanta, GA",
        type: "Full-time",
    },
    {
        title: "DevOps Engineer",
        description: "Automate and streamline deployment processes.",
        image: {
            filename: "devops_engineer",
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        salary: 115000,
        location: "New York, NY",
        type: "Full-time",
    },
    {
        title: "Cloud Architect",
        description: "Design and oversee cloud computing strategies.",
        image: {
            filename: "cloud_architect",
            url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        },
        salary: 125000,
        location: "Los Angeles, CA",
        type: "Full-time",
    },
    {
        title: "Network Engineer",
        description: "Implement and maintain network systems.",
        image: {
            filename: "network_engineer",
            url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
        },
        salary: 90000,
        location: "Phoenix, AZ",
        type: "Full-time",
    },
    {
        title: "AI/ML Engineer",
        description: "Develop artificial intelligence and machine learning models.",
        image: {
            filename: "ai_ml_engineer",
            url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        },
        salary: 140000,
        location: "Austin, TX",
        type: "Full-time",
    },
    {
        title: "Technical Support Specialist",
        description: "Provide technical assistance to clients.",
        image: {
            filename: "technical_support",
            url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        },
        salary: 60000,
        location: "Denver, CO",
        type: "Full-time",
    },
    {
        title: "Mobile App Developer",
        description: "Design and build mobile applications.",
        image: {
            filename: "mobile_app_developer",
            url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
        },
        salary: 105000,
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Database Administrator",
        description: "Manage and maintain database systems.",
        image: {
            filename: "database_administrator",
            url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        },
        salary: 95000,
        location: "Chicago, IL",
        type: "Full-time",
    },
    {
        title: "IT Consultant",
        description: "Advise on IT strategies and solutions.",
        image: {
            filename: "it_consultant",
            url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        },
        salary: 120000,
        location: "Washington, D.C.",
        type: "Full-time",
    },
    {
        title: "Quality Assurance Engineer",
        description: "Test software to ensure quality and reliability.",
        image: {
            filename: "qa_engineer",
            url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
        },
        salary: 85000,
        location: "San Jose, CA",
        type: "Full-time",
    },
    {
        title: "SEO Specialist",
        description: "Optimize websites for search engine rankings.",
        image: {
            filename: "seo_specialist",
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        salary: 65000,
        location: "Miami, FL",
        type: "Part-time",
    },
    {
        title: "System Administrator",
        description: "Ensure the smooth operation of computer systems.",
        image: {
            filename: "system_administrator",
            url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },
        salary: 80000,
        location: "Las Vegas, NV",
        type: "Full-time",
    },
    {
        title: "Technical Writer",
        description: "Document technical processes and guidelines.",
        image: {
            filename: "technical_writer",
            url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        },
        salary: 70000,
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "E-Commerce Specialist",
        description: "Manage and optimize online sales platforms.",
        image: {
            filename: "e_commerce_specialist",
            url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        },
        salary: 75000,
        location: "Portland, OR",
        type: "Full-time",
    },
    {
        title: "Blockchain Developer",
        description: "Develop and implement blockchain solutions.",
        image: {
            filename: "blockchain_devloper",
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        salary: 130000,
        location: "San Francisco, CA",
        type: "Full-time",
    },
    {
        title: "Machine Learning Specialist",
        description: "Create and deploy machine learning algorithms for predictive analytics.",
        image: {
            filename: "machine-learning",
            url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },
        salary: 145000,
        location: "Palo Alto, CA",
        type: "Full-time",
    },
    {
        title: "Cybersecurity Consultant",
        description: "Assess and improve organizational cybersecurity protocols.",
        image: {
            filename: "cyber-consultant",
            url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        },
        salary: 135000,
        location: "Arlington, VA",
        type: "Full-time",
    },
  ];
  
  module.exports = { data: sampleListings };