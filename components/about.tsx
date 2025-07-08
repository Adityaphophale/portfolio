"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-sky-50/50 dark:bg-sky-950/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-full border-4 border-sky-500 shadow-lg dark:shadow-sky-500/20">
              <Image
                src="/images/profile-photo-alt.jpeg"
                alt="Aditya Rahul Phophale"
                fill
                className="object-cover object-top scale-110"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-sky-200 dark:border-sky-800 shadow-lg dark:shadow-sky-500/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-sky-500">Aditya Rahul Phophale</h3>
                <p className="text-muted-foreground mb-6">
                  I am an aspiring AI/ML Engineer and Professional Frontend Developer with a serious, hard-working nature. My passion lies in creating innovative solutions that leverage the power of artificial intelligence and machine learning.
                </p>
                <p className="text-muted-foreground mb-6">
                  I enjoy building web applications that are not only functional but also provide an excellent user experience. My goal is to continue growing my skills in both AI/ML and web development to create impactful solutions.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full text-sm">
                    Diligent
                  </span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full text-sm">
                    Consistent
                  </span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full text-sm">
                    Determined
                  </span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full text-sm">
                    Innovative
                  </span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full text-sm">
                    Problem Solver
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
