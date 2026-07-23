import InquiryPage, { InquiryField } from "../components/inquiry-page"

const fields: InquiryField[] = [
  { label: "Your name", name: "name" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel", optional: true },
  { label: "Are you looking to…", name: "intent", type: "select", options: ["Sell a business", "Buy a business", "Both", "Explore options"] }, { label: "Industry / sector", name: "industry" }, { label: "Location / area", name: "location" },
  { label: "Approx. revenue or budget", name: "revenue-budget", optional: true }, { label: "Timeline", name: "timeline", optional: true }, { label: "Tell me about the business / what you’re looking for", name: "context", type: "textarea" }, { label: "Anything else?", name: "anything-else", type: "textarea", optional: true },
]

export default function BuySellPage() { return <InquiryPage activePage="Buy or sell" eyebrow="Confidential" title="Buy or Sell a Business" intro="A confidential broker inquiry — whether you’re looking to acquire or exit, tell me what you’re working with and I’ll reach out to scope the deal. Nothing is shared without your say-so." success="Thanks — your inquiry is in, and it’s confidential. I’ll review it and reach out by email to talk next steps." reassurance="Confidential — goes straight to Alex’s inbox. No spam, ever." submitLabel="Send confidential inquiry" fields={fields} /> }
