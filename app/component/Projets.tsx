"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSectionHeader } from "@/components/animated-section-header"
import { AnimatedCard } from "@/components/animated-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { url } from "inspector"
import Link from "next/link"









export default function Projets() {
    return(

<section id="skills" className="py-20">
  <div className="container">
    <AnimatedSectionHeader title="Projets par " highlight="années" />

    <Tabs defaultValue="languages" className="mt-12">
      <TabsList className="mx-auto grid w-full max-w-md grid-cols-3 bg-zinc-900">
        <TabsTrigger
          value="languages"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
        >
          BUT 1
        </TabsTrigger>
        <TabsTrigger
          value="tools"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
        >
          BUT 2
        </TabsTrigger>
        <TabsTrigger
          value="testing"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
        >
          BUT 3
        </TabsTrigger>
      </TabsList>

      <TabsContent value="languages" className="mt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Donjon Infini", image: "/donjon.jpeg", description: "Projet de fnin d'année jeux de Donjon", tags: ["Java"] },
            { title: "Dualboot", image: "/dual.png", description: "Création d'un dualboot Linux/windows", tags: ["Bash"] },
            { title: "Bataille Navale",image: "/bataille.png", description: "Jeux de Batille Navale en C sur le terminal", tags: ["C"] },
            { title: "Jeux de dessin d'étoiles",  image: "/placeholder.svg?height=200&width=400",description: "Jeux qui dessine des pyramides d'étoiles", tags: ["C", "Java"] },
            { title: "Devinette de nombre", image: "/placeholder.svg?height=200&width=400", description: "Jeux de devinette d'un nombre entre 1 et 50", tags: ["C", "Java"] },
            { title: "Site Spa",image: "/spa.jpg", description: "Site Web de gestion de SPA avec une base de données", tags: ["Html", "Php", "Css", "Sql"] },
          ].map((skill, index) => (
            <AnimatedCard delay={index * 0.1} key={index}>
              <Card className="overflow-hidden bg-black border-green-500/20">
              {skill.image && (
    <div className="relative w-full h-40">
      <Image 
        src={skill.image} 
        alt={skill.title} 
        layout="fill" 
        objectFit="cover" 
        className="rounded-t-lg"
      />
    </div>
  )}


              
                <CardHeader>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                  <CardDescription className="text-gray-400">{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>


                <CardFooter className="border-t border-green-500/10 bg-zinc-950">
                      <div className="flex w-full justify-between">
                        <Button variant="ghost" className="text-green-500 hover:bg-green-500/10 hover:text-green-400">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Button>
                    
                      </div>
                    </CardFooter>

              </Card>
            </AnimatedCard>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="tools" className="mt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "LexiQuest", image: "/placeholder.svg?height=200&width=400", description: "Jeux de Mot en solo et en ligne", tags: ["C", "Java/mobile", "React"] },
            { title: "Bankrous", image: "/bank.png", description: "Site de banque en ligne", tags: ["Html", "Css", "Php"] },
            { title: "Train",   image: "/placeholder.svg?height=200&width=400", description: "Site de réservation de train", tags: ["Html", "Css", "Php"] },
           
          ].map((skill, index) => (
            <AnimatedCard delay={index * 0.1} key={index}>
              <Card className="overflow-hidden bg-black border-green-500/20">


              {skill.image && (
    <div className="relative w-full h-40">
      <Image 
        src={skill.image} 
        alt={skill.title} 
        layout="fill" 
        objectFit="cover" 
        className="rounded-t-lg"
      />
    </div>
  )}
                <CardHeader>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                  <CardDescription className="text-gray-400">{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-green-500/10 bg-zinc-950">
                      <div className="flex w-full justify-between">
                        <Button variant="ghost" className="text-green-500 hover:bg-green-500/10 hover:text-green-400">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Button>
                    
                      </div>
                    </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="testing" className="mt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Eiffel Time",
              image: "/Group.png",
              description: "Application complète de l'université",
               tags: ["Unit Testing", "Snapshots", "Mocking"] 
              },
            { title: "Jeux de boules",  image: "/placeholder.svg?height=200&width=400",description: "Optimisation d'un jeux de première année", tags: ["React/Native", "Express", "Prisma", "Postgresql"] },
            { title: "Codec compétences", image: "/placeholder.svg?height=200&width=400", description: "Tp image différentiel", tags: ["Pyhton"] },
            { title: "Bankrous version anomalie", image: "/bank.png", description: "Correction d'anomalie", tags: ["Html", "Css", "Php"] },

          ].map((skill, index) => (
            <AnimatedCard delay={index * 0.1} key={index}>
              <Card className="overflow-hidden bg-black border-green-500/20">
              {skill.image && (
    <div className="relative w-full h-40">
      <Image 
        src={skill.image} 
        alt={skill.title} 
        layout="fill" 
        objectFit="cover" 
        className="rounded-t-lg"
      />
    </div>
  )}
                <CardHeader>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                  <CardDescription className="text-gray-400">{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-green-500/10 bg-zinc-950">
                      <div className="flex w-full justify-between">
                        <Button variant="ghost" className="text-green-500 hover:bg-green-500/10 hover:text-green-400">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Button>
                    
                      </div>
                    </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </div>
</section>

    )


}