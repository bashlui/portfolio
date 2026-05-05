import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-8 mb-8">
          <div>
            <p className="text-sm font-bold text-foreground mb-1">antonio.</p>
            <p className="text-xs text-muted-foreground mb-3">cs student &amp; software developer</p>
            <div className="flex items-center text-xs text-muted-foreground gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>monterrey, mx</span>
            </div>
          </div>

          <div className="flex gap-2">
            {[
              { href: "https://github.com/bashlui", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/luisbolaina/", label: "LinkedIn", Icon: Linkedin },
              { href: "mailto:thisisantonio_@outlook.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-card text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} antonio. all rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 italic">
            &quot;The only way to do great work is to love what you do.&quot;
          </p>
        </div>
      </div>
    </footer>
  )
}
