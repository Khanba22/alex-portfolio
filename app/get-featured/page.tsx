import InquiryPage, { InquiryField } from "../components/inquiry-page"

const fields: InquiryField[] = [
  { label: "Your name", name: "name" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel", optional: true }, { label: "Business name", name: "business" }, { label: "Business location / area", name: "location" }, { label: "Instagram, website or socials", name: "socials" }, { label: "What does your business do?", name: "business-description", type: "textarea" }, { label: "Anything else?", name: "anything-else", type: "textarea", optional: true },
]

export default function GetFeaturedPage() { return <InquiryPage activePage="Get featured" eyebrow="Done For You" title="Get Your Business Featured" intro="Tell me about your business and I’ll create a custom short-form reel breaking it down for my Toronto audience. Fill this out and I’ll be in touch." success="Thanks — your request is in. I’ll review it and reach out by email shortly." reassurance="Goes straight to Alex’s inbox. No spam, ever." submitLabel="Send my request" fields={fields} note="This is a done-for-you content offer. Scope and pricing are discussed after I understand the business and the story worth telling." /> }
