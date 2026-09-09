// Sample data store for Virtual Assistant & Data Entry Service Application

const APP_DATA = {
  services: [
    {
      id: "data-entry",
      title: "Data Entry & Processing",
      icon: "fa-database",
      category: "Data Operations",
      description: "High-accuracy CRM data entry, database cleaning, transcription, and bulk document conversion.",
      features: ["99.9% Accuracy SLA", "Excel / Google Sheets / SQL", "Real-time Verification", "GDPR & HIPAA Compliant"]
    },
    {
      id: "scheduling",
      title: "Executive Scheduling & Email",
      icon: "fa-calendar-alt",
      category: "Administrative Support",
      description: "Manage busy calendars, resolve meeting conflicts, filter priority inbox, and coordinate travel logistics.",
      features: ["Google / Outlook Calendar", "Travel Itinerary Booking", "Inbox Zero Strategy", "Time-zone Coordination"]
    },
    {
      id: "admin-support",
      title: "General Admin & Operations",
      icon: "fa-clipboard-check",
      category: "Administrative Support",
      description: "Daily operational tasks including invoicing, expense reporting, research reports, and vendor follow-ups.",
      features: ["QuickBooks / Xero Invoicing", "Vendor Communication", "Web Research Reports", "Standard Operating Procedures"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Store Management",
      icon: "fa-shopping-cart",
      category: "Specialized Support",
      description: "Product catalog updates, order tracking, inventory audit, customer inquiry resolution across Shopify & Amazon.",
      features: ["Shopify / WooCommerce / Amazon", "Inventory Tracking", "Order Processing", "Customer Ticket Handling"]
    },
    {
      id: "lead-gen",
      title: "B2B Lead Research & Mining",
      icon: "fa-user-check",
      category: "Specialized Support",
      description: "Prospect list building, LinkedIn Sales Navigator mining, email verification, and CRM enrichment.",
      features: ["Verified Email Discovery", "LinkedIn Sales Navigator", "Custom Lead Prospecting", "Apollo & ZoomInfo Sourcing"]
    },
    {
      id: "customer-support",
      title: "Customer Support & Live Chat",
      icon: "fa-comments",
      category: "Specialized Support",
      description: "Omnichannel customer care via live chat, email ticketing, and phone assistance for high-growth brands.",
      features: ["Zendesk / Freshdesk Setup", "24/7 Coverage Options", "Multi-Language Support", "Response Time < 5 mins"]
    }
  ],

  pricingPlans: [
    {
      id: "starter",
      name: "Starter Assistant",
      price: "$299",
      period: "/ month",
      hours: "20 Hours / Mo",
      popular: false,
      description: "Ideal for freelancers and small businesses needing dedicated weekly admin or data entry relief.",
      features: [
        "1 Dedicated Virtual Assistant",
        "20 Dedicated Hours / Month",
        "Data Entry & Executive Scheduling",
        "Rollover Unused Hours (up to 5h)",
        "Daily Progress Reports",
        "Standard Email Support"
      ]
    },
    {
      id: "growth",
      name: "Growth Pro",
      price: "$699",
      period: "/ month",
      hours: "50 Hours / Mo",
      popular: true,
      description: "Perfect for growing businesses requiring steady operational, CRM, and multi-channel administrative support.",
      features: [
        "Primary + Backup Virtual Assistant",
        "50 Dedicated Hours / Month",
        "All Admin, Data & E-commerce Tasks",
        "Rollover Unused Hours (up to 12h)",
        "Dedicated Account Manager",
        "Live Slack / Teams Integration",
        "Priority 2-Hour Task Turnaround"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise Dedicated",
      price: "$1,399",
      period: "/ month",
      hours: "120 Hours / Mo",
      popular: false,
      description: "Full-scale dedicated VA team tailored for high-volume data operations, customer care, and executive support.",
      features: [
        "Dedicated Full-Time VA Team",
        "120 Dedicated Hours / Month",
        "Custom Workflow Setup & SOPs",
        "Unlimited Rollover Hours",
        "Custom KPI & Data Security Audit",
        "24/7 Priority Support & Phone Access",
        "99.9% SLA Guarantee"
      ]
    }
  ],

  caseStudies: [
    {
      client: "FinTech ScaleUp Inc.",
      industry: "Financial Services",
      metric: "80% Time Saved",
      description: "Streamlined data entry of over 50,000 transaction records with zero error rate across 3 quarters.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
    },
    {
      client: "Global Logistics Hub",
      industry: "Supply Chain",
      metric: "3x Faster Order Processing",
      description: "Outsourced daily shipment tracking and data reconciliation to 4 dedicated Virtual Assistants.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      client: "Apex E-Commerce Group",
      industry: "Retail & Shopping",
      metric: "$120k Annual Savings",
      description: "Replaced in-house data entry team with our managed E-Commerce VA unit for product catalog management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      client: "MediCare Health Solutions",
      industry: "Healthcare Admin",
      metric: "100% HIPAA Compliance",
      description: "Processed 15,000+ patient records into cloud EHR system with strict data privacy protocol adherence.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    }
  ],

  faqs: [
    {
      q: "How quickly can my assigned Virtual Assistant start working?",
      a: "Most clients are matched with a fully trained Virtual Assistant within 24 hours of completing our onboarding call. For specialized technical or data entry tasks, matching takes 48 hours maximum."
    },
    {
      q: "How do you ensure data security and confidentiality?",
      a: "Security is our top priority. All VAs sign non-disclosure agreements (NDAs), complete rigorous background checks, and operate under bank-level encrypted tools (LastPass/1Password, VPNs, SOC-2 compliant portals)."
    },
    {
      q: "What happens if I don't use all my plan hours in a month?",
      a: "Unused hours roll over automatically to the following month (up to 12 hours depending on your plan tier). You can also scale up or down your subscription plan anytime without long-term commitment contracts."
    },
    {
      q: "Can I communicate directly with my Virtual Assistant?",
      a: "Yes! You can communicate directly via Slack, Microsoft Teams, WhatsApp, Email, or through our Client Portal messaging system."
    },
    {
      q: "What hours do the Virtual Assistants work?",
      a: "We support all time zones! We match you with assistants available during your local business hours (EST, PST, GMT, AEST, GST) or offer 24/7 shift coverage upon request."
    },
    {
      q: "What if I am not satisfied with my assigned VA?",
      a: "We offer a 100% replacement guarantee. If a VA is not a seamless fit for your workflow, our account management team will assign a new VA immediately with zero downtime."
    }
  ],

  userDashboard: {
    stats: {
      activeTasks: 8,
      hoursRemaining: 34.5,
      totalHoursThisMonth: 50,
      assignedVA: "Sarah Jenkins (Senior Admin)",
      completedTasks: 42
    },
    recentTasks: [
      { id: "TASK-8921", title: "Q3 Sales Data Formatting & CRM Sync", category: "Data Entry", status: "In Progress", priority: "High", va: "Sarah J.", dueDate: "Today, 5:00 PM" },
      { id: "TASK-8920", title: "Executive Calendar Alignment for Tech Summit", category: "Scheduling", status: "Completed", priority: "Medium", va: "Sarah J.", dueDate: "Yesterday" },
      { id: "TASK-8919", title: "Prospect Lead Mining - 250 Tech Founders", category: "Lead Gen", status: "Under Review", priority: "High", va: "Sarah J.", dueDate: "Sep 10, 2026" },
      { id: "TASK-8918", title: "Weekly Expense Reconciliation in QuickBooks", category: "Admin Support", status: "Completed", priority: "Low", va: "Sarah J.", dueDate: "Sep 07, 2026" },
      { id: "TASK-8917", title: "E-Commerce Product Listing Updates (50 SKUs)", category: "E-Commerce", status: "Completed", priority: "Medium", va: "Sarah J.", dueDate: "Sep 05, 2026" }
    ],
    messages: [
      { sender: "Sarah Jenkins", time: "10:30 AM", text: "Hi Mark! I've uploaded the formatted Q3 Sales CRM CSV file for your review.", unread: true },
      { sender: "System Notification", time: "09:15 AM", text: "Your monthly subscription hours refreshed: 50 Hours Available.", unread: false },
      { sender: "Sarah Jenkins", time: "Yesterday", text: "Confirmed! Calendar invites sent to all 5 attendees for tomorrow's board meeting.", unread: false }
    ]
  },

  adminDashboard: {
    stats: {
      totalClients: 142,
      activeVAs: 38,
      monthlyRevenue: "$89,400",
      slaCompliance: "99.8%"
    },
    clientRoster: [
      { name: "Acme Corp (John Doe)", plan: "Enterprise Dedicated", activeTasks: 12, hoursUsed: "88/120h", status: "Active", vaAssigned: "Sarah J. & Mike T." },
      { name: "Apex Global (Laura Smith)", plan: "Growth Pro", activeTasks: 5, hoursUsed: "41/50h", status: "Active", vaAssigned: "Elena Rostova" },
      { name: "SaaS Labs (David Miller)", plan: "Starter Assistant", activeTasks: 2, hoursUsed: "18/20h", status: "Active", vaAssigned: "Alex Johnson" },
      { name: "Bright Digital Agency", plan: "Growth Pro", activeTasks: 7, hoursUsed: "49/50h", status: "Warning (Low Hours)", vaAssigned: "Maria Garcia" }
    ],
    vaTeam: [
      { name: "Sarah Jenkins", role: "Sr. Admin & Data Lead", clients: 4, tasksCompleted: 154, rating: "4.95 / 5.0", status: "Available" },
      { name: "Elena Rostova", role: "E-Commerce & CRM Specialist", clients: 3, tasksCompleted: 128, rating: "4.98 / 5.0", status: "Busy" },
      { name: "Alex Johnson", role: "Lead Gen & Web Researcher", clients: 5, tasksCompleted: 210, rating: "4.90 / 5.0", status: "Available" },
      { name: "Maria Garcia", role: "Executive Assistant & Scheduler", clients: 3, tasksCompleted: 98, rating: "5.0 / 5.0", status: "Available" }
    ]
  }
};
