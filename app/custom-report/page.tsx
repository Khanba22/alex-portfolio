import InquiryPage, { InquiryField } from "../components/inquiry-page"

const fields: InquiryField[] = [
  { label: "Your name", name: "name" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel", optional: true }, { label: "Company / organization", name: "company", optional: true },
  { label: "What type of report do you need?", name: "report-type", type: "select", options: ["Market sizing", "Competitor analysis / mapping", "Due diligence on a business", "Industry / sector overview", "Combination", "Not sure yet", "Other"] }, { label: "Industry / sector", name: "industry" }, { label: "Market / region of interest", name: "market" }, { label: "What do you need to find out?", name: "question", type: "textarea" }, { label: "Timeline / deadline", name: "timeline", optional: true }, { label: "Anything else?", name: "anything-else", type: "textarea", optional: true },
]

export default function CustomReportPage() { return <InquiryPage activePage="Custom reports" eyebrow="Custom Research" title="Request a Custom Report" intro="Bespoke market sizing, competitor maps & due diligence — built for your specific question. Tell me what you need and I’ll scope it and send you a quote." success="Thanks — your request is in. I’ll review the scope and get back to you by email with next steps and pricing." reassurance="Goes straight to Alex’s inbox. No spam, ever." submitLabel="Send my request" fields={fields} note="Quote after scoping. There’s no published rate card because every report is built around the decision in front of you." /> }
