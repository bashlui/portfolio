"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/ui/dropdown-menu"
import { Button } from "@/ui/button"
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "thisisantonio_@outlook.com",
    action: "mailto:thisisantonio_@outlook.com",
    color: "text-indigo-500 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bashlui",
    action: "https://github.com/bashlui",
    color: "text-foreground",
    bg: "bg-card",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/luisbolaina",
    action: "https://linkedin.com/in/luisbolaina",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
]

export default function Contact() {
  const [selectedMethod, setSelectedMethod] = useState("")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs mb-4 tracking-widest uppercase text-muted-foreground">
            <span className="text-foreground font-bold">{'//'}</span> contact
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            get in touch.
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Always interested in new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        {/* Direct links */}
        <div className="rounded-xl bg-card overflow-hidden mb-4">
          {contactMethods.map((method, i) => (
            <a
              key={method.value}
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-8 py-6 hover:bg-muted transition-colors group ${i < contactMethods.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center gap-5">
                <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center shrink-0`}>
                  <method.icon className={`w-5 h-5 ${method.color}`} />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground tracking-widest uppercase mb-0.5">{method.label}</p>
                  <p className="text-xs text-muted-foreground">{method.value}</p>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground -rotate-90 group-hover:text-foreground transition-colors shrink-0" />
            </a>
          ))}
        </div>

        {/* Dropdown */}
        <div className="rounded-xl bg-card p-8">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-6">or select via dropdown</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="min-w-[200px] justify-between rounded-full border-border text-foreground hover:bg-muted text-xs tracking-wider uppercase"
              >
                <span className="flex items-center gap-2">
                  {selectedMethod ? (
                    <>
                      {(() => {
                        const m = contactMethods.find((x) => x.value === selectedMethod)
                        return m ? <m.icon className={`w-3.5 h-3.5 ${m.color}`} /> : null
                      })()}
                      {contactMethods.find((m) => m.value === selectedMethod)?.label}
                    </>
                  ) : (
                    "select method"
                  )}
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] rounded-xl border-border bg-background text-foreground">
              <DropdownMenuLabel className="text-[10px] text-muted-foreground tracking-widest uppercase">
                contact methods
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              {contactMethods.map((method) => (
                <DropdownMenuItem
                  key={method.value}
                  onClick={() => {
                    setSelectedMethod(method.value)
                    window.open(method.action, "_blank")
                  }}
                  className="flex items-center gap-2 cursor-pointer text-xs text-foreground hover:bg-muted rounded-lg"
                >
                  <method.icon className={`w-3.5 h-3.5 ${method.color}`} />
                  <span>{method.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {selectedMethod && (
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-2">selected</p>
              <p className="text-sm text-foreground font-bold">{selectedMethod}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
