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
            { title: "Donjon Infini", description: "Projet de fnin d'année jeux de Donjon", tags: ["Java"] },
            { title: "Dualboot", description: "Création d'un dualboot Linux/windows", tags: ["Bash"] },
            { title: "Bataille Navale", description: "Jeux de Batille Navale en C sur le terminal", tags: ["C"] },
            { title: "Jeux de dessin d'étoiles", description: "Jeux qui dessine des pyramides d'étoiles", tags: ["C", "Java"] },
            { title: "Devinette de nombre", description: "Jeux de devinette d'un nombre entre 1 et 50", tags: ["C", "Java"] },
            { title: "Portfolio", description: "Site Web de gestion de SPA avec une base de données", tags: ["Html", "Php", "Css", "Sql"] },
          ].map((skill, index) => (
            <AnimatedCard delay={index * 0.1} key={index}>
              <Card className="overflow-hidden bg-black border-green-500/20">
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
            { title: "LexiQuest", description: "Jeux de Mot en solo et en ligne", tags: ["Version Control", "GitHub", "Collaboration"] },
            { title: "Bankrous", description: "Système d'exploitation open-source utilisé pour le développement et les serveurs.", tags: ["Shell", "Bash", "Administration"] },
            { title: "Train", description: "Éditeur de code populaire avec une large gamme d'extensions.", tags: ["IDE", "Extensions", "Customizable"] },
            { title: "Docker", description: "Outil de conteneurisation permettant de créer des environnements reproductibles.", tags: ["Containers", "DevOps", "CI/CD"] },
            { title: "Docker", description: "Outil de conteneurisation permettant de créer des environnements reproductibles.", tags: ["Containers", "DevOps", "CI/CD"] },
            { title: "Docker", description: "Outil de conteneurisation permettant de créer des environnements reproductibles.", tags: ["Containers", "DevOps", "CI/CD"] },
          ].map((skill, index) => (
            <AnimatedCard delay={index * 0.1} key={index}>
              <Card className="overflow-hidden bg-black border-green-500/20">
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
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="testing" className="mt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Jest",
              image: "/image.png",
              description: "Framework de test JavaScript pour les applications frontend et backend.",
               tags: ["Unit Testing", "Snapshots", "Mocking"] 
              },
            { title: "Cypress", description: "Outil de test end-to-end pour le développement web moderne.", tags: ["E2E", "Automation", "Web Testing"] },
            { title: "Selenium", description: "Framework de test utilisé pour automatiser les tests des navigateurs.", tags: ["Automation", "UI Testing", "WebDriver"] },
            { title: "Postman", description: "Outil de test et d'automatisation des API REST.", tags: ["API Testing", "Automation", "Mock Server"] },
            { title: "SQL", description: "Langage de gestion de bases de données relationnelles.", tags: ["PostgreSQL", "MySQL", "Queries"] },
            { title: "SQL", description: "Langage de gestion de bases de données relationnelles.", tags: ["PostgreSQL", "MySQL", "Queries"] },
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