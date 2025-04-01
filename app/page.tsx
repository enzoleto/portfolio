"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Download, ExternalLink, Github, Mail, MapPin, Phone, User } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedSectionHeader } from "@/components/animated-section-header"
import { AnimatedCard } from "@/components/animated-card"
import { FloatingElement } from "@/components/floating-element"
import { motion } from "framer-motion"
import { CodeRain } from "@/components/code-rain"
import { TypingText } from "@/components/typing-text"
import { ScrollIndicator } from "@/components/scroll-indicator"
import Navbar from "./component/Navbar"
import Pres from "./component/Presentation"
import About from "./component/About"
import Projets from "./component/Projets"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

<Navbar/>

      <main>
        {/* Sextion Présentatino */}
      <Pres/>
        {/* About Section */}
       <About/>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container">
            <AnimatedSectionHeader title="Technical" highlight="Skills" />

            <Tabs defaultValue="programming" className="mt-12">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 bg-zinc-900">
                <TabsTrigger
                  value="programming"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                >
                  Langages
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                  Outils
                </TabsTrigger>
           
              </TabsList>
              <TabsContent value="programming" className="mt-8">  
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { name: "JavaScript", level: 85 },
                    { name: "Python", level: 50 },
                    { name: "Java", level: 65 },
                    { name: "HTML/CSS", level: 90 },
                    { name: "React", level: 80 },
                    { name: "PHP", level: 70 },
                    { name: "SQL", level: 75 },
                    { name: "C", level: 60 },
                  ].map((skill) => (
                    <motion.div className="space-y-2" key={skill.name}>
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="text-green-500">{skill.level}%</span>
                      </div>
                      <motion.div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-green-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { name: "Git", level: 85 },
                    { name: "Notion", level: 70 },
                    { name: "Eclipse", level: 65 },
                    { name: "VS Code", level: 95 },
                    { name: "Linux", level: 75 },
                    { name: "Figma", level: 60 },
                    { name: "Jira", level: 80 },
                    { name: "Android studio", level: 85 },
                  ].map((skill) => (
                    <motion.div className="space-y-2" key={skill.name}>
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="text-green-500">{skill.level}%</span>
                      </div>
                      <motion.div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-green-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
       
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <Projets/>

        
        <section id="education" className="py-20">
          
          <div className="container">
            <AnimatedSectionHeader title="Education &" highlight="Certifications" />

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-xl font-semibold">Mes Diplômes</h3>
                <div className="space-y-6">
                  {[
                    {
                      degree: "BUT INFORMATIQUE",
                      institution: "Université de Champs sur Marne",
                      period: "2022 - 2025",
                      description: "parcours développement d'application",
                    },
                    {
                      degree: "BAC MENTION Bien",
                      institution: "Lycée Léonard de Vinci Melun",
                      period: "2019 - 2022",
                      description: "options mMathématiques Physique-Chimie",
                    },
                    {
                      degree: "BNSSA Nageur Sauveteur",
                      institution: "MELUN",
                      period: "2022",
                      description: "diplôme de secourisme",
                    },
                  ].map((edu, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={index}
                    >
                      <div className="relative border-l border-green-500/50 pl-6">
                        <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-green-500"></div>
                        <h4 className="text-lg font-medium">{edu.degree}</h4>
                        <p className="text-green-500">{edu.institution}</p>
                        <p className="text-sm text-gray-400">{edu.period}</p>
                        <p className="mt-2 text-gray-400">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

           
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-zinc-950 py-20">
          <div className="container">
            <AnimatedSectionHeader title="Contactez" highlight="moi" />

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-gray-400">
                  free sex
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                      <Mail className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p>enzoletocart@icloud.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                      <Phone className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Tel</p>
                      <p>+33 7 68 33 07 87</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                      <MapPin className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Habitation</p>
                      <p>Ozoir la ferrière</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-medium">Rejoignez moi sur les réseaux</h4>
                  <div className="flex gap-4">
                    {["github", "linkedin", "twitter", "instagram"].map((social) => (
                      <Link
                        key={social}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-gray-400 transition-colors hover:bg-green-500 hover:text-black"
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Envoyez moi un message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-md border border-green-500/20 bg-black px-4 py-2 focus:border-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Votre email"
                        className="w-full rounded-md border border-green-500/20 bg-black px-4 py-2 focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Sujet"
                      className="w-full rounded-md border border-green-500/20 bg-black px-4 py-2 focus:border-green-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Votre message"
                      rows={5}
                      className="w-full rounded-md border border-green-500/20 bg-black px-4 py-2 focus:border-green-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-500 text-black hover:bg-green-600">Envoyer le message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/20 bg-black py-8">
        <div className="container text-center">
          <div className="text-xl font-bold text-green-500">
            <span className="text-white">Dev</span>Portfolio
          </div>
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Enzo Létocart. Tout les droits me sont reservés</p>
          <p className="mt-2 text-sm text-gray-500">
            Designer et construit avec React/Typescript/Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}

