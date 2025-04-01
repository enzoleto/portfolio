import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "../component/Navbar"

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="container py-8">
        {/* Back button */}
        <Link href="/#projects" className="inline-flex items-center text-green-500 hover:text-green-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all projects
        </Link>

        {/* Project Header */}
        <div className="grid gap-6 md:grid-cols-2 items-center mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">E-Commerce Platform</h1>
            <p className="text-gray-400 mb-6">
              A full-stack e-commerce solution with payment integration and inventory management. Built with modern
              technologies to provide a seamless shopping experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe", "AWS", "Docker"].map((tag) => (
                <span key={tag} className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button className="bg-green-500 text-black hover:bg-green-600 glow-effect">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-green-500/20">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="E-Commerce Platform"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>

        {/* Project Content */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full max-w-md grid-cols-4 mx-auto bg-zinc-900">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Features
            </TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Tech Stack
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Challenges
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-400 mb-4">
                  This e-commerce platform was developed as a comprehensive solution for online retailers. The project
                  aims to provide a seamless shopping experience for customers while giving store owners powerful tools
                  to manage their inventory, process orders, and analyze sales data.
                </p>
                <p className="text-gray-400 mb-4">
                  The application features a responsive design that works across all devices, secure payment processing
                  through Stripe, and real-time inventory management. The admin dashboard provides detailed analytics
                  and reporting tools to help business owners make informed decisions.
                </p>
                <p className="text-gray-400">
                  This project was developed over a period of 3 months, with a focus on scalability, security, and user
                  experience. The codebase follows best practices for maintainability and is thoroughly tested with unit
                  and integration tests.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-green-500/20">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Admin Dashboard"
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-green-500/20">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Mobile View"
                      width={250}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-green-500/20">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Checkout Process"
                      width={250}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "User Authentication",
                  description:
                    "Secure login and registration system with JWT authentication and role-based access control.",
                  icon: "🔐",
                },
                {
                  title: "Product Management",
                  description: "Comprehensive product catalog with categories, tags, and advanced filtering options.",
                  icon: "📦",
                },
                {
                  title: "Shopping Cart",
                  description: "Persistent shopping cart that saves items even when users are not logged in.",
                  icon: "🛒",
                },
                {
                  title: "Payment Processing",
                  description: "Secure checkout with Stripe integration supporting multiple payment methods.",
                  icon: "💳",
                },
                {
                  title: "Order Management",
                  description: "Complete order lifecycle management with status updates and order history.",
                  icon: "📋",
                },
                {
                  title: "Admin Dashboard",
                  description:
                    "Powerful admin interface with sales analytics, inventory management, and user management.",
                  icon: "📊",
                },
                {
                  title: "Responsive Design",
                  description:
                    "Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices.",
                  icon: "📱",
                },
                {
                  title: "Search Functionality",
                  description: "Advanced search with autocomplete and filtering options for better product discovery.",
                  icon: "🔍",
                },
                {
                  title: "Reviews & Ratings",
                  description: "Customer review system with ratings and moderation tools for authentic feedback.",
                  icon: "⭐",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-zinc-900 border border-green-500/20 rounded-xl p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-500">Frontend</h3>
                <ul className="space-y-4">
                  {[
                    {
                      name: "React",
                      description:
                        "JavaScript library for building user interfaces with functional components and hooks.",
                    },
                    {
                      name: "Redux Toolkit",
                      description: "State management library for predictable state updates and global state access.",
                    },
                    {
                      name: "Tailwind CSS",
                      description: "Utility-first CSS framework for rapid UI development with consistent design.",
                    },
                    {
                      name: "React Router",
                      description: "Declarative routing for React applications with dynamic route matching.",
                    },
                    {
                      name: "Axios",
                      description: "Promise-based HTTP client for making API requests with interceptors.",
                    },
                  ].map((tech, index) => (
                    <li key={index} className="border-l-2 border-green-500 pl-4">
                      <span className="font-bold">{tech.name}</span>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-500">Backend</h3>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Node.js",
                      description: "JavaScript runtime for building scalable server-side applications.",
                    },
                    {
                      name: "Express",
                      description: "Web framework for Node.js with middleware support for robust API development.",
                    },
                    {
                      name: "MongoDB",
                      description: "NoSQL database for flexible schema design and horizontal scaling.",
                    },
                    {
                      name: "Mongoose",
                      description: "MongoDB object modeling tool for schema validation and type casting.",
                    },
                    {
                      name: "JWT",
                      description: "JSON Web Tokens for secure authentication and authorization.",
                    },
                  ].map((tech, index) => (
                    <li key={index} className="border-l-2 border-green-500 pl-4">
                      <span className="font-bold">{tech.name}</span>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-green-500">DevOps & Deployment</h3>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Docker",
                      description: "Containerization platform for consistent development and deployment environments.",
                    },
                    {
                      name: "AWS",
                      description: "Cloud platform for hosting the application with EC2, S3, and CloudFront.",
                    },
                    {
                      name: "CI/CD",
                      description: "Automated testing and deployment pipeline with GitHub Actions.",
                    },
                  ].map((tech, index) => (
                    <li key={index} className="border-l-2 border-green-500 pl-4">
                      <span className="font-bold">{tech.name}</span>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-green-500">Testing & Quality</h3>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Jest",
                      description: "JavaScript testing framework for unit and integration tests.",
                    },
                    {
                      name: "React Testing Library",
                      description: "Testing utilities for React components focusing on user behavior.",
                    },
                    {
                      name: "Cypress",
                      description: "End-to-end testing framework for web applications.",
                    },
                  ].map((tech, index) => (
                    <li key={index} className="border-l-2 border-green-500 pl-4">
                      <span className="font-bold">{tech.name}</span>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Architecture Diagram</h3>
              <div className="bg-zinc-900 border border-green-500/20 rounded-xl p-6 flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Architecture Diagram"
                  width={800}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
            <div className="space-y-8">
              {[
                {
                  challenge: "Real-time Inventory Management",
                  description:
                    "Ensuring inventory counts remain accurate during concurrent purchases was a significant challenge.",
                  solution:
                    "Implemented optimistic UI updates with server-side verification and MongoDB transactions to maintain data integrity. Added a reservation system that temporarily holds inventory during checkout.",
                },
                {
                  challenge: "Payment Processing Security",
                  description:
                    "Securing payment information and preventing fraud while maintaining a smooth checkout experience.",
                  solution:
                    "Integrated Stripe Elements for PCI-compliant payment processing that keeps sensitive data off our servers. Implemented fraud detection algorithms and 3D Secure authentication for high-risk transactions.",
                },
                {
                  challenge: "Performance Optimization",
                  description: "Maintaining fast load times with a growing product catalog and increasing user base.",
                  solution:
                    "Implemented lazy loading for images, pagination for product listings, and Redis caching for frequently accessed data. Used AWS CloudFront CDN for static assets and optimized database queries with proper indexing.",
                },
                {
                  challenge: "Mobile Responsiveness",
                  description:
                    "Creating a consistent and intuitive experience across various device sizes and orientations.",
                  solution:
                    "Adopted a mobile-first design approach with Tailwind CSS, extensive device testing, and custom components optimized for touch interactions. Implemented responsive images and optimized navigation for smaller screens.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-500">{item.challenge}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Solution:</h4>
                    <p className="text-gray-400">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-zinc-900 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Lessons Learned</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Early investment in automated testing saves significant debugging time later in the project.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Proper state management architecture is crucial for scaling complex applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>User feedback during development is invaluable for creating intuitive interfaces.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Containerization with Docker significantly reduces "works on my machine" problems.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Performance optimization should be an ongoing process, not an afterthought.</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/20 bg-black py-8 mt-12">
        <div className="container text-center">
          <div className="text-xl font-bold text-green-500">
            <span className="text-white">Dev</span>Portfolio
          </div>
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

