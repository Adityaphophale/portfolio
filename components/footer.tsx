"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t border-sky-100 dark:border-sky-800 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &copy; {new Date().getFullYear()} Aditya Rahul Phophale. All rights reserved.
          </motion.p>

          <motion.p
            className="text-muted-foreground text-sm mt-2 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built with React & Next.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 md:mt-0"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sky-200 text-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-500 dark:border-sky-800 dark:text-sky-400 dark:hover:bg-sky-950/20 dark:hover:text-sky-300 dark:hover:border-sky-400 bg-transparent"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
