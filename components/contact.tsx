"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Github, Linkedin, Twitter, Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/aditya-phophale/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 bg-sky-50/50 dark:bg-sky-950/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-sky-200 dark:border-sky-800 shadow-lg dark:shadow-sky-500/10">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-sky-700 dark:text-sky-300">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through the contact form or connect with me directly using the information
                  below.
                </p>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-sky-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:aphophale@gmail.com" className="text-sky-500 hover:underline">
                        aphophale@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-sky-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919484454472" className="text-sky-500 hover:underline">
                        +91 9484454472
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto">
                    <p className="font-medium mb-3">Connect with me</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white hover:bg-sky-500 hover:text-white text-sky-500 dark:bg-sky-950/20 dark:hover:bg-sky-600 dark:text-sky-400 dark:hover:text-white rounded-full p-3 transition-colors border border-sky-200 dark:border-sky-800"
                          whileHover={{ y: -5 }}
                          aria-label={link.label}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-sky-200 dark:border-sky-800 shadow-lg dark:shadow-sky-500/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-sky-700 dark:text-sky-300">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-sky-200 focus-visible:ring-sky-500 dark:border-sky-800 dark:focus-visible:ring-sky-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-sky-200 focus-visible:ring-sky-500 dark:border-sky-800 dark:focus-visible:ring-sky-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-sky-200 focus-visible:ring-sky-500 dark:border-sky-800 dark:focus-visible:ring-sky-400"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-sky-500 hover:bg-sky-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
