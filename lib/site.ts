export const site = {
  brand: "diPPy",
  tagline: "One login. Every role in your school, finally in sync.",
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "How it works", href: "#how" },
    { label: "Roles", href: "#roles" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "MULTI-TENANT SCHOOL ERP · बना UP & BIHAR के लिए",
    headline: "One login.",
    headlineGradient: "Every role",
    headlineEnd: "in your school, finally in sync.",
    sub: "diPPy brings principals, teachers, students aur parents — sabko ek hi system pe laata hai. Attendance, fees, exams aur communication, bina kisi paperwork ya WhatsApp chaos ke.",
    ctaPrimary: { label: "Book a free demo", href: "#contact" },
    ctaSecondary: { label: "See how it works", href: "#how" },
    stats: [
      { value: "4 roles", label: "One shared database" },
      { value: "1 login", label: "No more password juggling" },
      { value: "24×7", label: "Hindi + English ready" },
    ],
  },

  problem: {
    eyebrow: "THE PROBLEM",
    title: "School chal raha hai… par system nahi",
    sub: "Most schools in UP & Bihar still run on registers, Excel sheets, aur 20 alag WhatsApp groups. DiPPy replaces all of that with one calm system.",
    items: [
      {
        icon: "ph:note-pencil",
        title: "Attendance on paper",
        text: "Registers ghumte rehte hain, aur parent ko pata hi nahi chalta ki bacha absent kyun tha.",
      },
      {
        icon: "ph:currency-inr",
        title: "Fee confusion",
        text: "Kaunse fee baki hain, kaunse jama — koi clear picture nahi, aur parent pareshan.",
      },
      {
        icon: "ph:chat-circle-dots",
        title: "WhatsApp chaos",
        text: "Notices, homework, urgent messages — sab alag groups mein, kuch reach hi nahi karta.",
      },
      {
        icon: "ph:chart-line-down",
        title: "Exam & result delays",
        text: "Marks entry, report cards, analytics — weeks lag jaate hain, aur galtiyan reh jaati hain.",
      },
    ],
  },

  how: {
    eyebrow: "HOW diPPy WORKS",
    title: "One system. Four roles. Zero paperwork.",
    sub: "Everything lives in a single shared database with role-based access — so the right person sees the right thing, automatically.",
    steps: [
      {
        no: "01",
        title: "School onboard ho jata hai",
        text: "Streams, sections, students & staff — ek baar set karo, baad mein apne aap update hota hai.",
      },
      {
        no: "02",
        title: "Har role ko apna dashboard milta hai",
        text: "Principal, teacher, parent aur student — sabko wahi dikhta hai jo unhe chahiye.",
      },
      {
        no: "03",
        title: "Daily kaam automatic ho jata hai",
        text: "Attendance, fees, exams, circulars — system khud handle karta hai, aapko yaad dilata hai.",
      },
    ],
  },

  roles: {
    eyebrow: "BUILT FOR EVERY ROLE",
    title: "Chaar role, ek hi database",
    sub: "RBAC built-in from day one — har kisi ko sirf apna hissa dikhta hai.",
    items: [
      {
        icon: "ph:chalkboard-teacher",
        title: "Principal",
        text: "School ki full picture — attendance, fees, results, staff — ek jagah. Decisions data pe lo.",
        points: ["Live dashboards", "Fee & result analytics", "Circulars with read receipts"],
      },
      {
        icon: "ph:books",
        title: "Teacher",
        text: "Lesson plans, attendance aur marks — bina bakwheat ke. Parents ko progress dikhe.",
        points: ["Quick attendance", "Mark entry & grading", "Share lesson plans"],
      },
      {
        icon: "ph:student",
        title: "Student",
        text: "Timetable, homework, results — phone pe. Kuch miss nahi hota.",
        points: ["Own dashboard", "Report cards", "Syllabus tracker"],
      },
      {
        icon: "ph:users-three",
        title: "Parent",
        text: "Bache ka attendance, fees aur progress — ghar baithe. School se direct connect.",
        points: ["Live attendance", "Fee reminders", "Teacher messages"],
      },
    ],
  },

  features: {
    eyebrow: "EVERYTHING A SCHOOL RUNS ON",
    title: "One place, sab kuch",
    sub: "Built for the way schools in UP & Bihar actually operate — not a repackaged enterprise tool.",
    groups: [
      {
        name: "Academic",
        icon: "ph:graduation-cap",
        items: [
          { icon: "ph:cards", title: "Streams & Departments", text: "Harr student aur teacher kis stream/section ka hai — hamesha up to date." },
          { icon: "ph:book-open", title: "Lesson Planning", text: "Teachers daily plan log karein, parents bhi dekh lein." },
          { icon: "ph:calendar-check", title: "Timetable", text: "Period-wise timetable ek baar banao, sabhi dashboards pe reflect ho." },
          { icon: "ph:target", title: "Syllabus Tracker", text: "Subject-wise syllabus completion — admin ko pata chale kahan class hai." },
        ],
      },
      {
        name: "Exams & Results",
        icon: "ph:exam",
        items: [
          { icon: "ph:calendar-x", title: "Exam Scheduling", text: "Clash-free exam timetable automatic ban jata hai." },
          { icon: "ph:stack", title: "Question Bank", text: "Reusable, tagged questions by subject & difficulty." },
          { icon: "ph:check-circle", title: "Mark Entry & Grading", text: "Marks ek baar dalo, report cards apne aap bane." },
          { icon: "ph:chart-bar", title: "Result Analytics", text: "Class & subject trends — problem badhne se pehle dikh jaye." },
        ],
      },
      {
        name: "Fees & Payroll",
        icon: "ph:currency-inr",
        items: [
          { icon: "ph:receipt", title: "Fee Collection", text: "Class-wise due dates aur outstanding balance — real time." },
          { icon: "ph:sliders", title: "Fee Structure", text: "Fee heads & installments ek baar set, school bhar mein consistent." },
          { icon: "ph:gift", title: "Scholarships", text: "Waivers & scholarships — transparent audit trail ke saath." },
          { icon: "ph:wallet", title: "Staff Payroll", text: "Salary runs with PF & tax — har mahine sahi." },
        ],
      },
      {
        name: "Campus & Communication",
        icon: "ph:buildings",
        items: [
          { icon: "ph:bus", title: "Transport", text: "Routes, stops & live tracking — parents ka dil sukoon mein." },
          { icon: "ph:books-three", title: "Library", text: "Catalog search & auto issue/return reminders." },
          { icon: "ph:bed", title: "Hostel", text: "Rooms, occupancy & warden approvals — ek jagah." },
          { icon: "ph:chats-circle", title: "Circulars", text: "School-wide notices with read receipts for admins." },
        ],
      },
    ],
  },

  trust: {
    eyebrow: "TRUSTED BY SCHOOLS",
    title: "Numbers that matter",
    stats: [
      { value: "120+", label: "Schools onboard" },
      { value: "85,000+", label: "Students managed" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.8/5", label: "Principal rating" },
    ],
  },

  testimonials: {
    eyebrow: "WHAT PRINCIPALS SAY",
    title: "Unka kehna hai",
    items: [
      {
        quote: "Pehle har din 3 register ginte the. Ab phone uthao aur sab dikh jata hai. Parents bhi khush hain.",
        name: "Mrs. Sunita Verma",
        role: "Principal, Saraswati Vidya Mandir, Patna",
        avatar: "SU",
      },
      {
        quote: "Fee collection ka anxiety khatam ho gaya. System khud reminder bhejta hai, main sirf approve karti hoon.",
        name: "Mr. Rakesh Singh",
        role: "Director, Bright Future Public School, Lucknow",
        avatar: "RS",
      },
      {
        quote: "Exam results ab 2 week ke jagah 2 din mein. Aur galtiyan almost zero.",
        name: "Dr. Meena Gupta",
        role: "Principal, Green Valley Academy, Varanasi",
        avatar: "MG",
      },
    ],
  },

  pricing: {
    eyebrow: "SIMPLE PRICING",
    title: "Har size ke school ke liye",
    sub: "Free demo pehle. Phir jo suit kare.",
    tiers: [
      {
        name: "Starter",
        price: "₹4,999",
        period: "/month",
        blurb: "Chhoti school ke liye shuruat",
        features: ["Up to 250 students", "Attendance & Fees", "Parent app", "Email support"],
        cta: "Book a demo",
        highlight: false,
      },
      {
        name: "Growth",
        price: "₹9,999",
        period: "/month",
        blurb: "Most schools yahi choose karti hain",
        features: ["Up to 1000 students", "Exams & Results", "Transport & Library", "WhatsApp reminders", "Priority support"],
        cta: "Book a demo",
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        blurb: "Chain ya budget school network",
        features: ["Unlimited students", "Hostel & Payroll", "Custom modules", "Dedicated manager"],
        cta: "Talk to us",
        highlight: false,
      },
    ],
  },

  faq: {
    eyebrow: "QUESTIONS?",
    title: "Aap shayad soch rahe honge",
    items: [
      { q: "Kya diPPy Hindi mein kaam karta hai?", a: "Haan. Hindi + English dono mein — admin, teacher aur parent sab apni bhasha mein use kar sakte hain." },
      { q: "Data safe hai?", a: "Bilkul. Multi-tenant architecture hai, har school ka data alag aur encrypted. RBAC se sahi role ko sahi access milta hai." },
      { q: "Demo free hai?", a: "Haan, 30 din ka free demo. Credit card nahi chahiye. Hamari team 24 ghante mein call karti hai." },
      { q: "Migration mushkil hai?", a: "Nahi. Hamari team aapke students, staff aur fee data ko help karti hai shift karne mein." },
      { q: "Parent app alag se install karni padti hai?", a: "Parent ko bas ek link milta hai — phone pe khul jata hai. Koi app download nahi." },
      { q: "Agar internet slow ho?", a: "diPPy lightweight hai aur offline-friendly flows support karta hai, sync jab net aaye." },
    ],
  },

  contact: {
    eyebrow: "READY TO START?",
    title: "Apne school ka free demo book karein",
    sub: "Tailored to your school — attendance, fees, exams & parent communication. Hamari team 24 ghante mein call karti hai.",
    email: "hello@dippy.in",
    whatsapp: "+919999999999",
  },
} as const;
