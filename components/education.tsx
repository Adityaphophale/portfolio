"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    id: 1,
    institution: "Government Engineering College, Bharuch",
    degree: "BE Computer Engineering - Final Year (2023-2026)",
    icon: <GraduationCap className="h-10 w-10 text-sky-500" />,
  },
  {
    id: 2,
    institution: "The Maharaja Sayajirao University of Baroda (MSUB)",
    degree: "Diploma - First Class with Distinction (2020-2023)",
    icon: <BookOpen className="h-10 w-10 text-sky-500" />,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and qualifications.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-sky-200 hover:border-sky-500 dark:border-sky-800 dark:hover:border-sky-400 transition-colors shadow-lg dark:shadow-sky-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:block">{edu.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-sky-700 dark:text-sky-300">{edu.institution}</h3>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
