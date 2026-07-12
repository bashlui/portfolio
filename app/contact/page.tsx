import { redirect } from "next/navigation"

export default function Contact() {
  redirect("/?command=contact")
}
