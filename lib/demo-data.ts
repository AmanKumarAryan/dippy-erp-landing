export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  attendance: "present" | "absent" | "leave";
  rollNo: number;
}

export const attendanceClasses = [
  { value: "10-A", label: "Class 10 - A" },
  { value: "10-B", label: "Class 10 - B" },
  { value: "9-A", label: "Class 9 - A" },
  { value: "9-B", label: "Class 9 - B" },
  { value: "8-A", label: "Class 8 - A" },
];

export const studentsData: Record<string, Student[]> = {
  "10-A": [
    { id: "s1", name: "Aarav Sharma", class: "10", section: "A", attendance: "present", rollNo: 1 },
    { id: "s2", name: "Priya Patel", class: "10", section: "A", attendance: "present", rollNo: 2 },
    { id: "s3", name: "Rohit Singh", class: "10", section: "A", attendance: "absent", rollNo: 3 },
    { id: "s4", name: "Sneha Gupta", class: "10", section: "A", attendance: "present", rollNo: 4 },
    { id: "s5", name: "Arjun Verma", class: "10", section: "A", attendance: "present", rollNo: 5 },
    { id: "s6", name: "Kavya Reddy", class: "10", section: "A", attendance: "leave", rollNo: 6 },
    { id: "s7", name: "Vikram Joshi", class: "10", section: "A", attendance: "present", rollNo: 7 },
    { id: "s8", name: "Ananya Nair", class: "10", section: "A", attendance: "absent", rollNo: 8 },
    { id: "s9", name: "Rahul Kumar", class: "10", section: "A", attendance: "present", rollNo: 9 },
    { id: "s10", name: "Neha Desai", class: "10", section: "A", attendance: "present", rollNo: 10 },
    { id: "s11", name: "Aditya Mehta", class: "10", section: "A", attendance: "present", rollNo: 11 },
    { id: "s12", name: "Isha Kapoor", class: "10", section: "A", attendance: "absent", rollNo: 12 },
    { id: "s13", name: "Manav Shah", class: "10", section: "A", attendance: "present", rollNo: 13 },
    { id: "s14", name: "Divya Chauhan", class: "10", section: "A", attendance: "present", rollNo: 14 },
    { id: "s15", name: "Karan Malhotra", class: "10", section: "A", attendance: "leave", rollNo: 15 },
    { id: "s16", name: "Pooja Agarwal", class: "10", section: "A", attendance: "present", rollNo: 16 },
    { id: "s17", name: "Nikhil Yadav", class: "10", section: "A", attendance: "present", rollNo: 17 },
    { id: "s18", name: "Tanya Saxena", class: "10", section: "A", attendance: "absent", rollNo: 18 },
    { id: "s19", name: "Siddharth Rawat", class: "10", section: "A", attendance: "present", rollNo: 19 },
    { id: "s20", name: "Riya Thakur", class: "10", section: "A", attendance: "present", rollNo: 20 },
  ],
  "10-B": [
    { id: "s21", name: "Amit Tiwari", class: "10", section: "B", attendance: "present", rollNo: 1 },
    { id: "s22", name: "Sonal Mishra", class: "10", section: "B", attendance: "present", rollNo: 2 },
    { id: "s23", name: "Deepak Pandey", class: "10", section: "B", attendance: "absent", rollNo: 3 },
    { id: "s24", name: "Ritu Chaubey", class: "10", section: "B", attendance: "present", rollNo: 4 },
    { id: "s25", name: "Harsh Dubey", class: "10", section: "B", attendance: "present", rollNo: 5 },
    { id: "s26", name: "Nandini Tripathi", class: "10", section: "B", attendance: "present", rollNo: 6 },
    { id: "s27", name: "Saurabh Shukla", class: "10", section: "B", attendance: "leave", rollNo: 7 },
    { id: "s28", name: "Kirti Dwivedi", class: "10", section: "B", attendance: "present", rollNo: 8 },
    { id: "s29", name: "Ravi Bhardwaj", class: "10", section: "B", attendance: "absent", rollNo: 9 },
    { id: "s30", name: "Megha Chaturvedi", class: "10", section: "B", attendance: "present", rollNo: 10 },
  ],
  "9-A": [
    { id: "s31", name: "Varun Thakur", class: "9", section: "A", attendance: "present", rollNo: 1 },
    { id: "s32", name: "Shreya Pandey", class: "9", section: "A", attendance: "present", rollNo: 2 },
    { id: "s33", name: "Akash Tripathi", class: "9", section: "A", attendance: "absent", rollNo: 3 },
    { id: "s34", name: "Pallavi Singh", class: "9", section: "A", attendance: "present", rollNo: 4 },
    { id: "s35", name: "Mohit Rana", class: "9", section: "A", attendance: "present", rollNo: 5 },
    { id: "s36", name: "Jaya Bhatt", class: "9", section: "A", attendance: "leave", rollNo: 6 },
    { id: "s37", name: "Pranav Saxena", class: "9", section: "A", attendance: "present", rollNo: 7 },
    { id: "s38", name: "Tanvi Garg", class: "9", section: "A", attendance: "present", rollNo: 8 },
    { id: "s39", name: "Lokesh Jain", class: "9", section: "A", attendance: "absent", rollNo: 9 },
    { id: "s40", name: "Bhavna Kaur", class: "9", section: "A", attendance: "present", rollNo: 10 },
  ],
  "9-B": [
    { id: "s41", name: "Rajat Kapoor", class: "9", section: "B", attendance: "present", rollNo: 1 },
    { id: "s42", name: "Nikita Arora", class: "9", section: "B", attendance: "present", rollNo: 2 },
    { id: "s43", name: "Gaurav Sinha", class: "9", section: "B", attendance: "present", rollNo: 3 },
    { id: "s44", name: "Aisha Khan", class: "9", section: "B", attendance: "absent", rollNo: 4 },
    { id: "s45", name: "Tarun Bhatia", class: "9", section: "B", attendance: "present", rollNo: 5 },
    { id: "s46", name: "Swati Goyal", class: "9", section: "B", attendance: "leave", rollNo: 6 },
    { id: "s47", name: "Kunal Sethi", class: "9", section: "B", attendance: "present", rollNo: 7 },
    { id: "s48", name: "Reema Wadhwa", class: "9", section: "B", attendance: "present", rollNo: 8 },
    { id: "s49", name: "Dinesh Choudhary", class: "9", section: "B", attendance: "absent", rollNo: 9 },
    { id: "s50", name: "Parul Bhatnagar", class: "9", section: "B", attendance: "present", rollNo: 10 },
  ],
  "8-A": [
    { id: "s51", name: "Harshita Jain", class: "8", section: "A", attendance: "present", rollNo: 1 },
    { id: "s52", name: "Ankit Tomar", class: "8", section: "A", attendance: "present", rollNo: 2 },
    { id: "s53", name: "Shubham Patel", class: "8", section: "A", attendance: "absent", rollNo: 3 },
    { id: "s54", name: "Roshni Kumari", class: "8", section: "A", attendance: "present", rollNo: 4 },
    { id: "s55", name: "Abhishek Yadav", class: "8", section: "A", attendance: "present", rollNo: 5 },
    { id: "s56", name: "Khushboo Gupta", class: "8", section: "A", attendance: "present", rollNo: 6 },
    { id: "s57", name: "Manoj Verma", class: "8", section: "A", attendance: "leave", rollNo: 7 },
    { id: "s58", name: "Sonia Das", class: "8", section: "A", attendance: "present", rollNo: 8 },
    { id: "s59", name: "Vivek Rathore", class: "8", section: "A", attendance: "present", rollNo: 9 },
    { id: "s60", name: "Anjali Srivastava", class: "8", section: "A", attendance: "absent", rollNo: 10 },
  ],
};

// ─── Fee Management ───
export interface FeeRecord {
  id: string;
  student: string;
  class: string;
  month: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
}

export const feeMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const feeCollectionData: FeeRecord[] = [
  { id: "f1", student: "Aarav Sharma", class: "10-A", month: "Jan", amount: 2500, status: "paid", dueDate: "Jan 10" },
  { id: "f2", student: "Priya Patel", class: "10-A", month: "Jan", amount: 2500, status: "paid", dueDate: "Jan 10" },
  { id: "f3", student: "Rohit Singh", class: "10-A", month: "Jan", amount: 2500, status: "overdue", dueDate: "Jan 10" },
  { id: "f4", student: "Sneha Gupta", class: "10-A", month: "Jan", amount: 2500, status: "paid", dueDate: "Jan 10" },
  { id: "f5", student: "Arjun Verma", class: "10-A", month: "Jan", amount: 2500, status: "pending", dueDate: "Jan 10" },
  { id: "f6", student: "Kavya Reddy", class: "10-A", month: "Jan", amount: 2500, status: "paid", dueDate: "Jan 10" },
];

export const monthlyCollection: { month: string; amount: number; target: number }[] = [
  { month: "Aug", amount: 125000, target: 150000 },
  { month: "Sep", amount: 138000, target: 150000 },
  { month: "Oct", amount: 142000, target: 150000 },
  { month: "Nov", amount: 148000, target: 150000 },
  { month: "Dec", amount: 135000, target: 150000 },
  { month: "Jan", amount: 129000, target: 150000 },
];

// ─── Homework ───
export interface Homework {
  id: string;
  subject: string;
  title: string;
  assignedDate: string;
  dueDate: string;
  status: "active" | "grading" | "completed";
  totalStudents: number;
  submittedCount: number;
}

export const subjects = ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Sanskrit"];

export const homeworkData: Homework[] = [
  { id: "h1", subject: "Mathematics", title: "Quadratic Equations - Exercise 4.2", assignedDate: "2026-01-10", dueDate: "2026-01-14", status: "active", totalStudents: 20, submittedCount: 14 },
  { id: "h2", subject: "Science", title: "Chemical Reactions - Lab Report", assignedDate: "2026-01-09", dueDate: "2026-01-13", status: "active", totalStudents: 20, submittedCount: 18 },
  { id: "h3", subject: "English", title: "Essay: Importance of Education", assignedDate: "2026-01-08", dueDate: "2026-01-12", status: "grading", totalStudents: 30, submittedCount: 28 },
  { id: "h4", subject: "Hindi", title: "??? ??? ???? - ???? ????", assignedDate: "2026-01-07", dueDate: "2026-01-11", status: "completed", totalStudents: 20, submittedCount: 20 },
  { id: "h5", subject: "Social Studies", title: "Map Work - River Systems", assignedDate: "2026-01-06", dueDate: "2026-01-10", status: "completed", totalStudents: 20, submittedCount: 19 },
];

// ─── Exam Management ───
export interface Exam {
  id: string;
  name: string;
  date: string;
  subjects: { name: string; date: string; maxMarks: number }[];
  status: "upcoming" | "ongoing" | "completed";
}

export const examData: Exam[] = [
  {
    id: "e1",
    name: "Mid-Term Exams 2026",
    date: "Feb 15 - Feb 25",
    status: "upcoming",
    subjects: [
      { name: "Mathematics", date: "Feb 15", maxMarks: 100 },
      { name: "Science", date: "Feb 17", maxMarks: 100 },
      { name: "English", date: "Feb 19", maxMarks: 100 },
      { name: "Hindi", date: "Feb 21", maxMarks: 100 },
      { name: "Social Studies", date: "Feb 23", maxMarks: 100 },
      { name: "Sanskrit", date: "Feb 25", maxMarks: 100 },
    ],
  },
  {
    id: "e2",
    name: "Weekly Test - Science",
    date: "Jan 30",
    status: "upcoming",
    subjects: [{ name: "Science", date: "Jan 30", maxMarks: 50 }],
  },
  {
    id: "e3",
    name: "Unit Test - Mathematics",
    date: "Jan 15 - Jan 18",
    status: "completed",
    subjects: [{ name: "Mathematics", date: "Jan 15", maxMarks: 50 }],
  },
];

export interface Result {
  studentName: string;
  rollNo: number;
  marks: { subject: string; score: number; maxMarks: number }[];
  total: number;
  percentage: number;
  rank: number;
  grade: string;
}

export const mockResults: Result[] = [
  { studentName: "Aarav Sharma", rollNo: 1, marks: [{ subject: "Mathematics", score: 92, maxMarks: 100 }, { subject: "Science", score: 88, maxMarks: 100 }, { subject: "English", score: 95, maxMarks: 100 }, { subject: "Hindi", score: 85, maxMarks: 100 }, { subject: "Social Studies", score: 90, maxMarks: 100 }], total: 450, percentage: 90, rank: 1, grade: "A+" },
  { studentName: "Priya Patel", rollNo: 2, marks: [{ subject: "Mathematics", score: 85, maxMarks: 100 }, { subject: "Science", score: 92, maxMarks: 100 }, { subject: "English", score: 88, maxMarks: 100 }, { subject: "Hindi", score: 90, maxMarks: 100 }, { subject: "Social Studies", score: 86, maxMarks: 100 }], total: 441, percentage: 88.2, rank: 2, grade: "A" },
  { studentName: "Sneha Gupta", rollNo: 4, marks: [{ subject: "Mathematics", score: 78, maxMarks: 100 }, { subject: "Science", score: 85, maxMarks: 100 }, { subject: "English", score: 92, maxMarks: 100 }, { subject: "Hindi", score: 88, maxMarks: 100 }, { subject: "Social Studies", score: 80, maxMarks: 100 }], total: 423, percentage: 84.6, rank: 3, grade: "A" },
  { studentName: "Arjun Verma", rollNo: 5, marks: [{ subject: "Mathematics", score: 72, maxMarks: 100 }, { subject: "Science", score: 78, maxMarks: 100 }, { subject: "English", score: 85, maxMarks: 100 }, { subject: "Hindi", score: 80, maxMarks: 100 }, { subject: "Social Studies", score: 88, maxMarks: 100 }], total: 403, percentage: 80.6, rank: 4, grade: "B+" },
  { studentName: "Rohit Singh", rollNo: 3, marks: [{ subject: "Mathematics", score: 65, maxMarks: 100 }, { subject: "Science", score: 72, maxMarks: 100 }, { subject: "English", score: 80, maxMarks: 100 }, { subject: "Hindi", score: 75, maxMarks: 100 }, { subject: "Social Studies", score: 70, maxMarks: 100 }], total: 362, percentage: 72.4, rank: 5, grade: "B" },
];

// ─── Hostel Management ───
export interface Room {
  id: string;
  number: string;
  block: string;
  floor: number;
  capacity: number;
  occupants: { name: string; class: string }[];
  warden: string;
  status: "occupied" | "partial" | "available" | "maintenance";
}

export const hostelData: Room[] = [
  {
    id: "r1", number: "A-101", block: "A", floor: 1, capacity: 4,
    occupants: [
      { name: "Amit Tiwari", class: "10-B" },
      { name: "Deepak Pandey", class: "10-B" },
      { name: "Saurabh Shukla", class: "10-B" },
      { name: "Harsh Dubey", class: "10-B" },
    ],
    warden: "Mr. Sharma", status: "occupied",
  },
  {
    id: "r2", number: "A-102", block: "A", floor: 1, capacity: 4,
    occupants: [
      { name: "Varun Thakur", class: "9-A" },
      { name: "Akash Tripathi", class: "9-A" },
      { name: "Pranav Saxena", class: "9-A" },
    ],
    warden: "Mr. Sharma", status: "partial",
  },
  {
    id: "r3", number: "A-201", block: "A", floor: 2, capacity: 4,
    occupants: [{ name: "Rajat Kapoor", class: "9-B" }, { name: "Gaurav Sinha", class: "9-B" }],
    warden: "Mr. Singh", status: "partial",
  },
  {
    id: "r4", number: "A-202", block: "A", floor: 2, capacity: 4,
    occupants: [],
    warden: "Mr. Singh", status: "available",
  },
  {
    id: "r5", number: "B-101", block: "B", floor: 1, capacity: 4,
    occupants: [
      { name: "Karan Malhotra", class: "10-A" },
      { name: "Nikhil Yadav", class: "10-A" },
      { name: "Manav Shah", class: "10-A" },
      { name: "Siddharth Rawat", class: "10-A" },
    ],
    warden: "Mrs. Gupta", status: "occupied",
  },
  {
    id: "r6", number: "B-102", block: "B", floor: 1, capacity: 4,
    occupants: [],
    warden: "Mrs. Gupta", status: "maintenance",
  },
  {
    id: "r7", number: "B-201", block: "B", floor: 2, capacity: 4,
    occupants: [
      { name: "Vikram Joshi", class: "10-A" },
      { name: "Aditya Mehta", class: "10-A" },
    ],
    warden: "Mrs. Gupta", status: "partial",
  },
  {
    id: "r8", number: "B-202", block: "B", floor: 2, capacity: 4,
    occupants: [],
    warden: "Mrs. Gupta", status: "available",
  },
];
