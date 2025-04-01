
"use client"

import Image from "next/image"
import { Code,  Github} from "lucide-react"
import { FloatingElement } from "@/components/floating-element"
import { motion } from "framer-motion"
import { TypingText } from "@/components/typing-text"
import { ScrollIndicator } from "@/components/scroll-indicator"




export default function Pres() {

return (

<section id="home" className="relative overflow-hidden py-20 md:py-32">
<div className="absolute inset-0 z-0 opacity-30">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,85,0.2),transparent_60%)]"></div>

</div>
<div className="container relative z-10 grid items-center gap-12 md:grid-cols-2">
  <div className="space-y-6">
    <motion.div
      className="inline-block rounded-full bg-green-500/10 px-4 py-1 text-sm text-green-500"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      Etudiant Informatique & Developper
    </motion.div>
    <motion.h1
      className="text-4xl font-bold leading-tight md:text-6xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Construire des {" "}
      <TypingText
        texts={["expériences uniques pour le monde", "solutions intelligentes pour les défis", " technologies innovantes pour les usages",]}
        className="text-green-500"
      />{" "}
      de demain.
    </motion.h1>
    <motion.p
      className="text-lg text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Etudiant passioné en informatique spécialisé dans le developpement d'applications.
    </motion.p>

  </div>
  <FloatingElement duration={6} y={15}>
    <div className="relative mx-auto aspect-square w-full max-w-md rounded-full border border-green-500/20 p-2 glow-container">
      <div className="h-full w-full overflow-hidden rounded-full border border-green-500/40 bg-black p-4">
        <Image
          src="/image.png"
          alt="Profile"
          width={400}
          height={400}
          className="h-full w-full rounded-full object-cover"
          priority
        />
      </div>
      <FloatingElement delay={1} duration={5} y={8}>
        <div className="absolute -right-4 top-1/4 rounded-lg bg-black/80 p-3 backdrop-blur-sm">
          <Code className="h-8 w-8 text-green-500" />
        </div>
      </FloatingElement>
      <FloatingElement delay={2} duration={4.5} y={10}>
        <div className="absolute -left-4 bottom-1/4 rounded-lg bg-black/80 p-3 backdrop-blur-sm">
          <Github className="h-8 w-8 text-green-500" />
        </div>
      </FloatingElement>
    </div>
  </FloatingElement>
</div>
<ScrollIndicator />
</section>

)
}