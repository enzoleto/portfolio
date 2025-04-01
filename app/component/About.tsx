
"use client"

import { Mail, MapPin, Phone, User } from "lucide-react"
import { AnimatedSectionHeader } from "@/components/animated-section-header"





export default function About(){


return (

<section id="about" className="bg-zinc-950 py-20">
<div className="container">
  <div className="mx-auto max-w-3xl text-center">
    <AnimatedSectionHeader title="A propos" highlight="de moi" />
    <p className="mt-8 text-gray-400">
      Je suis Enzo Létocart, étudiant en BUT 3 Informatique à l'IUT de Champs-sur-Marne, passionné par le développement 
      de solutions innovantes et performantes. Mon parcours dans l'informatique a débuté en 2022 a L'IUT de Lieusaint j'ai ensuite continué a 
      L'IUT de Champs sur Marne.
    </p>
    <p className="mt-4 text-gray-400">
    Ancien sportif de haut niveau, j’ai acquis des qualités essentielles comme la rigueur,
     la persévérance et l’esprit d’équipe, que j’applique aujourd’hui dans mes projets.
    </p>
    <p className="mt-4 text-gray-400">
    Actuellement à la recherche d’un stage de 4 mois à partir d’avril 2025, 
    je souhaite évoluer dans un environnement dynamique et innovant où je pourrai mettre à profit
     mes compétences tout en continuant à apprendre.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm animate-pulse-glow">
        <User className="h-4 w-4 text-green-500" />
        <span>Enzo Létocart</span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm">
        <MapPin className="h-4 w-4 text-green-500" />
        <span>Ozoir-la-ferrière, FRA</span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm">
        <Mail className="h-4 w-4 text-green-500" />
        <span>enzoletocart@icloud.com</span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm">
        <Phone className="h-4 w-4 text-green-500" />
        <span>+33 7 68 33 07 87</span>
      </div>
    </div>
  </div>
</div>
</section>
)
}