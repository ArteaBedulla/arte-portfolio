import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const NAVY = "#0f172a";
const BODY = "#1e293b";
const MUTED = "#475569";
const LAVENDER = "#8b7aad";
const MATCHA = "#5f8f6a";
const BORDER = "#e2e8f0";

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 32,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.45,
    color: BODY,
    backgroundColor: "#ffffff",
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 24,
    color: NAVY,
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: BODY,
    marginBottom: 6,
    lineHeight: 1.35,
  },
  tagline: {
    fontSize: 10,
    fontStyle: "italic",
    color: MUTED,
    marginBottom: 10,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: MATCHA,
    borderLeftStyle: "solid",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    borderBottomStyle: "solid",
  },
  contactSep: {
    fontSize: 9,
    color: "#cbd5e1",
    marginLeft: 6,
    marginRight: 6,
  },
  contactLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: NAVY,
  },
  contactText: {
    fontSize: 9,
    color: MUTED,
  },
  link: {
    fontSize: 9,
    color: "#4f46e5",
    textDecoration: "none",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 6,
  },
  accentLav: {
    width: 3,
    height: 12,
    backgroundColor: LAVENDER,
    marginRight: 8,
  },
  accentMatcha: {
    width: 3,
    height: 12,
    backgroundColor: MATCHA,
    marginRight: 8,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    color: NAVY,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  body: {
    fontSize: 10,
    color: BODY,
    textAlign: "justify",
    lineHeight: 1.5,
  },
  eduGrid: {
    flexDirection: "row",
    marginTop: 4,
  },
  eduCard: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#e8e0f2",
    borderStyle: "solid",
    borderRadius: 2,
    backgroundColor: "#fcfbff",
  },
  eduCardAlt: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#d5e8d8",
    borderStyle: "solid",
    borderRadius: 2,
    backgroundColor: "#f9fcf9",
  },
  eduTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: NAVY,
    marginBottom: 3,
    lineHeight: 1.3,
  },
  eduSub: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 2,
  },
  eduStatus: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: MATCHA,
  },
  eduStatusMuted: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  skillCol: {
    flex: 1,
    paddingRight: 8,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: LAVENDER,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  skillLabelM: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: MATCHA,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  skillText: {
    fontSize: 9,
    color: BODY,
    lineHeight: 1.45,
  },
  conceptsBox: {
    marginTop: 4,
    padding: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#d4c4e8",
    backgroundColor: "#faf8ff",
  },
  projectBlock: {
    marginBottom: 10,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: LAVENDER,
    borderLeftStyle: "solid",
  },
  projectBlockAlt: {
    marginBottom: 10,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: MATCHA,
    borderLeftStyle: "solid",
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: NAVY,
    marginBottom: 4,
  },
  projectBody: {
    fontSize: 9.5,
    color: BODY,
    lineHeight: 1.45,
    textAlign: "justify",
    marginBottom: 3,
  },
  techLine: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  techBold: {
    fontFamily: "Helvetica-Bold",
    color: NAVY,
  },
  bullet: {
    fontSize: 9,
    color: BODY,
    marginLeft: 8,
    marginBottom: 2,
    lineHeight: 1.4,
    paddingLeft: 6,
  },
  twoCol: {
    flexDirection: "row",
    marginTop: 6,
    alignItems: "flex-start",
  },
  col: {
    flex: 1,
    paddingRight: 10,
  },
});

function SectionHeader({ title, matcha = false }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={matcha ? styles.accentMatcha : styles.accentLav} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

/**
 * Selectable-text A4 CV for @react-pdf/renderer (PDFDownloadLink).
 */
export default function CVDocument() {
  return (
    <Document title="Artea Bedulla — CV" author="Artea Bedulla" subject="Curriculum Vitae">
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>Artea Bedulla</Text>
        <Text style={styles.title}>
          Computer Science Master&apos;s Student | Junior Web Developer
        </Text>
        <Text style={styles.tagline}>
          I build clean web applications using React, JavaScript, SQL databases, and backend technologies.
        </Text>

        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Email: </Text>
          <Link src="mailto:arteabedulla75@gmail.com" style={styles.link}>
            arteabedulla75@gmail.com
          </Link>
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactLabel}>GitHub: </Text>
          <Link src="https://github.com/ArteaBedulla" style={styles.link}>
            github.com/ArteaBedulla
          </Link>
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactLabel}>LinkedIn: </Text>
          <Link src="https://www.linkedin.com/in/ArteaBedulla" style={styles.link}>
            linkedin.com/in/ArteaBedulla
          </Link>
        </View>

        <SectionHeader title="Professional summary" />
        <Text style={styles.body}>
          I am a Computer Science graduate and currently pursuing a Scientific Master&apos;s degree in
          Computer Science. I have practical experience from academic and portfolio projects where I worked
          with web development, databases, and backend technologies.
        </Text>
        <Text style={[styles.body, { marginTop: 6 }]}>
          My main focus is building clean and structured web applications using React, JavaScript, HTML,
          CSS, SQL databases, and backend frameworks such as C#/.NET and Java Spring Boot. I enjoy creating
          systems that combine user-friendly interfaces with organized data and real business logic.
        </Text>
        <Text style={[styles.body, { marginTop: 6 }]}>
          I am especially interested in digital technology, data-driven solutions, and learning how
          technology is used in real business environments. I am motivated to keep improving my technical
          and communication skills through practical work and team collaboration.
        </Text>

        <SectionHeader title="Education" />
        <View style={styles.eduGrid}>
          <View style={styles.eduCard}>
            <Text style={styles.eduTitle}>Scientific Master&apos;s Degree in Computer Science</Text>
            <Text style={styles.eduSub}>Faculty of Natural Sciences</Text>
            <Text style={styles.eduStatus}>Currently pursuing</Text>
          </View>
          <View style={styles.eduCardAlt}>
            <Text style={styles.eduTitle}>Bachelor&apos;s Degree in Computer Science</Text>
            <Text style={styles.eduSub}>Faculty of Natural Sciences</Text>
            <Text style={styles.eduStatusMuted}>Completed</Text>
          </View>
        </View>

        <SectionHeader title="Technical skills" matcha />
        <View style={styles.skillRow}>
          <View style={styles.skillCol}>
            <Text style={styles.skillLabel}>Frontend</Text>
            <Text style={styles.skillText}>
              HTML, CSS, JavaScript, React, UI Design basics
            </Text>
          </View>
          <View style={styles.skillCol}>
            <Text style={styles.skillLabel}>Backend</Text>
            <Text style={styles.skillText}>
              SQL, Databases, C# / .NET basics, Java Spring Boot basics, PHP basics
            </Text>
          </View>
        </View>
        <View style={styles.skillRow}>
          <View style={styles.skillCol}>
            <Text style={styles.skillLabelM}>Database &amp; Data</Text>
            <Text style={styles.skillText}>
              SQL, Databases, SQL Server, SQL Queries, Relational Databases
            </Text>
          </View>
          <View style={styles.skillCol}>
            <Text style={styles.skillLabelM}>Tools</Text>
            <Text style={styles.skillText}>Git / GitHub</Text>
          </View>
        </View>
        <View style={styles.conceptsBox}>
          <Text style={styles.skillLabel}>Concepts</Text>
          <Text style={styles.skillText}>
            Clean UI structure, database-driven applications, basic backend integration, team collaboration
          </Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <SectionHeader title="Projects" />
        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>Planora — Productivity &amp; Memory Wall Web App</Text>
          <Text style={styles.projectBody}>
            Planora is a productivity web application created to help users organize tasks, focus sessions,
            reading progress, quotes, and personal memories. The project includes authentication, task
            management, a memory wall, dashboard-style pages, and a responsive interface.
          </Text>
          <Text style={styles.techLine}>
            <Text style={styles.techBold}>Technologies: </Text>
            React, JavaScript, HTML, CSS/Tailwind, SQL Database, Backend API
          </Text>
          <Text style={styles.techLine}>
            <Text style={styles.techBold}>Key points: </Text>
            User authentication, task and category management, focus and reading sessions, Memory Wall,
            responsive dashboard interface.
          </Text>
        </View>

        <View style={styles.projectBlockAlt}>
          <Text style={styles.projectTitle}>HelixCore — Enterprise DNA Laboratory Management System</Text>
          <Text style={styles.projectBody}>
            HelixCore is an enterprise-style academic project designed for managing the workflow of a DNA
            laboratory. The system includes modules for clients, cases, DNA samples, laboratory analysis,
            genetic profiles, invoices, payments, and role-based access.
          </Text>
          <Text style={styles.techLine}>
            <Text style={styles.techBold}>Technologies: </Text>
            React, JavaScript, Java Spring Boot, SQL Server, REST APIs
          </Text>
          <Text style={styles.techLine}>
            <Text style={styles.techBold}>Key points: </Text>
            Role-based access, client and case management, DNA sample tracking, analysis and profile
            management, invoice and payment modules, professional dashboard interface.
          </Text>
        </View>

        <SectionHeader title="Academic and technical background" matcha />
        <Text style={styles.body}>
          HTML, CSS, JavaScript, React, SQL, Databases, C# / .NET basics, Java Spring Boot basics, PHP basics,
          Git / GitHub, UI Design basics.
        </Text>

        <View style={styles.twoCol}>
          <View style={styles.col}>
            <SectionHeader title="Soft skills" />
            <Text style={styles.skillText}>
              Problem solving, analytical thinking, attention to detail, continuous learning, creativity,
              communication, project organization, adaptability.
            </Text>
          </View>
          <View style={styles.col}>
            <SectionHeader title="Languages" />
            <Text style={styles.skillText}>Albanian — Native</Text>
            <Text style={[styles.skillText, { marginTop: 4 }]}>English — Professional / Academic</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
