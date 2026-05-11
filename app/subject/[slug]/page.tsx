import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PremiumButton from '@/components/PremiumButton'
import type { Metadata } from 'next'

// Mock data - in production, this would come from your database
const subjectData: Record<string, {
  title: string
  semester: number
  content: {
    overview: string
    units: Array<{ title: string; content: string }>
    pyqs: string[]
    vivaQuestions: string[]
    importantQuestions: string[]
  }
}> = {
  'dbms-semester-5': {
    title: 'DBMS',
    semester: 5,
    content: {
      overview: 'Database Management Systems is a fundamental subject covering database design, SQL, normalization, and transaction management.',
      units: [
        {
          title: 'Unit 1: Introduction to DBMS',
          content: 'Basic concepts of database systems, data models, and database architecture.'
        },
        {
          title: 'Unit 2: Relational Model',
          content: 'Relational data model, relational algebra, and SQL fundamentals.'
        },
        {
          title: 'Unit 3: Normalization',
          content: 'Database normalization, normal forms, and dependency theory.'
        },
        {
          title: 'Unit 4: Transaction Management',
          content: 'Transaction concepts, concurrency control, and recovery techniques.'
        },
        {
          title: 'Unit 5: Advanced Topics',
          content: 'Distributed databases, NoSQL, and emerging trends.'
        },
      ],
      pyqs: [
        'Explain the architecture of DBMS with a neat diagram.',
        'What is normalization? Explain 1NF, 2NF, and 3NF with examples.',
        'Write SQL queries for various operations on a database.',
        'Explain ACID properties and their importance in transaction management.',
      ],
      vivaQuestions: [
        'What is the difference between a database and a DBMS?',
        'Explain the concept of primary key and foreign key.',
        'What are the advantages of normalization?',
        'What is a transaction? Explain its states.',
      ],
      importantQuestions: [
        'Design an ER diagram for a university management system.',
        'Explain the steps involved in query processing.',
        'What are the different types of joins in SQL?',
        'Discuss deadlock prevention and detection mechanisms.',
      ],
    },
  },
  'operating-system-semester-5': {
    title: 'Operating System',
    semester: 5,
    content: {
      overview: 'Operating Systems covers process management, memory management, file systems, and I/O operations.',
      units: [
        {
          title: 'Unit 1: Introduction to OS',
          content: 'Operating system concepts, types, and services.'
        },
        {
          title: 'Unit 2: Process Management',
          content: 'Process scheduling, synchronization, and deadlock handling.'
        },
        {
          title: 'Unit 3: Memory Management',
          content: 'Memory allocation, paging, segmentation, and virtual memory.'
        },
        {
          title: 'Unit 4: File Systems',
          content: 'File system implementation, directory structure, and I/O.'
        },
        {
          title: 'Unit 5: Advanced Topics',
          content: 'Distributed systems, security, and case studies.'
        },
      ],
      pyqs: [
        'Explain the functions and types of operating systems.',
        'What is process scheduling? Explain different scheduling algorithms.',
        'Explain memory management techniques with examples.',
        'Discuss file system implementation and directory structures.',
      ],
      vivaQuestions: [
        'What is the difference between multiprogramming and multitasking?',
        'Explain the concept of virtual memory.',
        'What are semaphores and how do they work?',
        'What is thrashing in operating systems?',
      ],
      importantQuestions: [
        'Compare different CPU scheduling algorithms.',
        'Explain the banker's algorithm for deadlock avoidance.',
        'Discuss the working of paging and segmentation.',
        'Explain the structure of UNIX/Linux file system.',
      ],
    },
  },
  'computer-networks-semester-5': {
    title: 'Computer Networks',
    semester: 5,
    content: {
      overview: 'Computer Networks covers network fundamentals, protocols, and network security.',
      units: [
        {
          title: 'Unit 1: Network Fundamentals',
          content: 'Network types, topologies, and OSI/TCP/IP models.'
        },
        {
          title: 'Unit 2: Data Link Layer',
          content: 'Error detection, flow control, and MAC protocols.'
        },
        {
          title: 'Unit 3: Network Layer',
          content: 'IP addressing, routing algorithms, and transport layer protocols.'
        },
        {
          title: 'Unit 4: Application Layer',
          content: 'HTTP, DNS, email protocols, and network security.'
        },
        {
          title: 'Unit 5: Advanced Topics',
          content: 'Wireless networks, network management, and emerging technologies.'
        },
      ],
      pyqs: [
        'Explain the OSI model and TCP/IP model with their layers.',
        'What is IP addressing? Explain IPv4 and IPv6 addressing.',
        'Discuss different routing algorithms with examples.',
        'Explain the working of TCP and UDP protocols.',
      ],
      vivaQuestions: [
        'What is the difference between LAN, MAN, and WAN?',
        'Explain the concept of subnetting.',
        'What are the functions of transport layer?',
        'What is the difference between hub, switch, and router?',
      ],
      importantQuestions: [
        'Explain the working of Ethernet and CSMA/CD.',
        'Discuss the congestion control mechanisms in TCP.',
        'Explain DNS working and different types of DNS servers.',
        'Discuss network security threats and countermeasures.',
      ],
    },
  },
}

interface SubjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: SubjectPageProps): Promise<Metadata> {
  const subject = subjectData[params.slug]
  if (!subject) {
    return {
      title: 'Subject Not Found - StudentHub',
    }
  }

  return {
    title: `${subject.title} Notes for BE Computer Engineering Semester ${subject.semester} - StudentHub`,
    description: `Comprehensive ${subject.title} notes, PYQs, and premium PDF download for BE Computer Engineering Semester ${subject.semester}.`,
  }
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = subjectData[params.slug]

  if (!subject) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">{subject.title}</h1>
          <p className="mt-2 text-lg text-gray-600">
            BE Computer Engineering - Semester {subject.semester}
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 rounded-3xl border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700">{subject.content.overview}</p>
        </div>

        {/* Units */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Unit-wise Notes</h2>
          <div className="space-y-6">
            {subject.content.units.map((unit, index) => (
              <div key={index} className="rounded-3xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-3">{unit.title}</h3>
                <p className="text-gray-700">{unit.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PYQs */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Previous Year Questions</h2>
          <div className="rounded-3xl border border-gray-200 p-6">
            <ul className="space-y-3">
              {subject.content.pyqs.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Questions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Important Questions</h2>
          <div className="rounded-3xl border border-gray-200 p-6">
            <ul className="space-y-3">
              {subject.content.importantQuestions.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Viva Questions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Viva Questions</h2>
          <div className="rounded-3xl border border-gray-200 p-6">
            <ul className="space-y-3">
              {subject.content.vivaQuestions.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="rounded-3xl border border-gray-200 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Get Premium PDF</h3>
          <p className="text-gray-600 mb-6">
            Download comprehensive PDF with all notes, PYQs, and important questions for just ₹33.
          </p>
          <PremiumButton subjectId={params.slug} subjectTitle={subject.title} />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(subjectData).map((slug) => ({
    slug,
  }))
}