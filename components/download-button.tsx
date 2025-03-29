"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function DownloadButton() {
  // In a real implementation, you would have a real CV file to download
  const handleDownload = () => {
    // Create a dummy CV file for demonstration
    const dummyCV = `
TARUN KUMAR REDDY VELAGALA
https://tarunvelagala.github.io|https://linkedin.com/in/tarunvelagala|tarunvelagala@gmail.com|+91 7702233677

PROFESSIONAL SUMMARY
Software Application Engineer II with 5 years of experience in backend development, cloud computing and
scalable systems. Skilled in optimizing performance and building high-availability solutions with AWS and Java.

WORK EXPERIENCE
Software Application Engineer II |Amazon|Bengaluru, India
October 2023 – Present
• Designed and implemented disaster recovery components for a Data transformation engine that reduced
operational overhead by 20% and eased migrating 5 ETL data pipelines with self-service onboarding.
• Led the migration of Redshift private subnet migration (2.6 PB data) using AWS and Python, ensuring
100% data availability across 4 services and reducing downtime risks.
• Enhanced onboarding processes for an internal data sharing platform, purging 50 TB of seller data and
integrating 5 critical services.
• Migrated a Balance Tracking Management service to a Java-based microservice on ECS and RDS, launching
payment corrections with 3 RPS and developing integration tests via TestNG.
• Technologies Used: AWS Glue | ETL | Redshift | Microservices | Java | Python | TestNG | ECS

Software Application Engineer I |Amazon|Bengaluru, India
April 2022 – September 2023
• Architected, deployed a high-availability RESTful APIs and mentored interns for a Seller Payments Tracking
Service that handles (100K daily visits, 15 RPS), boosted query performance by 30% and seller satisfaction.
• Spearheaded dataset migration across teams to an upgraded data warehousing system and improved 25%
analytics capabilities.
• Engineered monitoring and integration testing using TypeScript, CloudWatch and TestNG for a Seller
Payments Data Query Service, enhancing debugging, logging, and deploying a CI/CD pipeline.
• Identified and resolved $5M in seller balance discrepancies through automated ticketing and financial reporting
enhancements using AWS Athena and S3.
• Technologies Used: REST API | CloudFormation | System Design | Data Warehouse | Cloudwatch | Testing

Support Engineer II |Amazon|Bengaluru, India
April 2020 – March 2022
• Built Java-based server-side functionalities with REST APIs for a vendor-facing portal, leveraging ORM to
improve response times by 15% through AWS API Gateway and Lambda.
• Integrated a traffic-shaping tool into a vendor-facing application, optimizing resource protection and reducing
server costs by 20% by filtering bad actor traffic.
• Optimized Java services using AWS profiling tools and identified gaps and improved the system performance
by 10%.
• Technologies Used: ORM | Java | API Gateway | AWS Lambda | Ticketing | Debugging

SKILLS
Programming Languages: Java | Python
Frameworks & Tools: Git | RESTful API, Microservices | CI/CD | ETL | ReactJS(Familiar) | Spring (Familiar)
Cloud Technologies (AWS): EC2 | ECS | SNS | SQS | Lambda | S3 | Glue | CloudWatch | IAM | CloudFormation
Databases: DynamoDB(NoSQL) | Redshift (PostgreSQL)
Testing Libraries & Others: JUnit | Mockito | TestNG | VSCode

EDUCATION
Sathyabama Institute of Science & Technology| Chennai, India
Bachelor of Engineering(Computer Science & Engineering)|8.59 CGPA
May 2016 – June 2020
Related CourseWork: Programming, Python, Flask, Flutter, Dart, Data Structures and Algorithms, OOPS

PROJECTS & CONTRIBUTIONS
• Built a Seller Payment Resolution Chatbot using AWS Lambda (SPAC Hackathon 2023).
• Supported in developing Seller Repayment Mobile App utilizing AWS EC2 (SPAC Hackathon 2022).
• Email To-Do- Developed a hybrid mobile app for task management with Flutter(2020).[GitHub]
• File Scraper- Flask app that scrapes verified URLs and documents from websites(2019).[GitHub]
• News Scraper- Flask app that scrapes latest tech, software and gadget news.(2019).[GitHub]
    `

    // Create a Blob from the text
    const blob = new Blob([dummyCV], { type: "text/plain" })

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob)

    // Create a temporary anchor element
    const a = document.createElement("a")
    a.href = url
    a.download = "Tarun_Kumar_Reddy_Velagala_CV.txt"

    // Trigger the download
    document.body.appendChild(a)
    a.click()

    // Clean up
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={handleDownload} className="gap-2">
      <Download className="h-4 w-4" />
      Download CV
    </Button>
  )
}

