"use client"

import { useState } from "react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/ui/dropdown-menu"
import { Button } from "@/ui/button"
import { Mail, Github, Linkedin, ChevronDown, MessageCircle } from "lucide-react"

export default function Contact() {
  const [selectedMethod, setSelectedMethod] = useState("")

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "thisisantonio_@outlook.com",
      action: "mailto:thisisantonio_@outlook.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/bashlui",
      action: "https://github.com/bashlui"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/luisbolaina",
      action: "https://linkedin.com/in/luisbolaina"
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always interested in hearing about new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Contact Method Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[200px] justify-between">
                <span className="flex items-center gap-2">
                  {selectedMethod ? (
                    <>
                      {(() => {
                        const method = contactMethods.find(m => m.value === selectedMethod)
                        return method ? <method.icon className="w-4 h-4" /> : null
                      })()}
                      {contactMethods.find(m => m.value === selectedMethod)?.label}
                    </>
                  ) : (
                    "Choose contact method"
                  )}
                </span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuLabel>Contact Methods</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {contactMethods.map((method) => (
                <DropdownMenuItem 
                  key={method.value}
                  onClick={() => {
                    setSelectedMethod(method.value)
                    if (method.action !== "#") {
                      window.open(method.action, '_blank')
                    }
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <method.icon className="w-4 h-4" />
                  <span>{method.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Selected Contact Display */}
          {selectedMethod && (
            <div className="bg-card border border-border rounded-xl p-6 text-center animate-in fade-in duration-300">
              <p className="text-sm text-muted-foreground mb-2">Selected Contact:</p>
              <p className="text-lg font-mono text-foreground">{selectedMethod}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}