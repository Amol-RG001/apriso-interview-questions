// data.js — All question bank content
const SECTIONS_META = [
  { id: 1, title: "MES & Apriso Fundamentals",        icon: "🏭", color: "rgba(0,212,255,0.1)" },
  { id: 2, title: "Apriso Architecture & Components", icon: "⚙️",  color: "rgba(124,58,237,0.1)" },
  { id: 3, title: "Process Builder & Operations",     icon: "💻", color: "rgba(255,107,53,0.1)" },
  { id: 4, title: "Integration & Data Management",    icon: "🔗", color: "rgba(34,197,94,0.1)" },
  { id: 5, title: "Database & SQL in Apriso",         icon: "🗄️",  color: "rgba(245,158,11,0.1)" },
  { id: 6, title: "Troubleshooting & Scenario-Based", icon: "🛠️",  color: "rgba(239,68,68,0.1)" },
  { id: 7, title: "HR & Behavioral (MES Context)",    icon: "🌍", color: "rgba(0,212,255,0.08)" },
  { id: 8, title: "SQL, Web & Apriso Dev Questions",  icon: "📝", color: "rgba(255,107,53,0.12)" },
  { id: 9, title: "Advanced Concepts & Scenario Questions", icon: "🔬", color: "rgba(0,212,255,0.12)" },
  { id: 10, title: "Views, Controls, Functions & Configuration", icon: "🧩", color: "rgba(124,58,237,0.12)" }
];

const SECTIONS_DATA = {
  1: [
    {
      q: "What is MES (Manufacturing Execution System) and what is its role in manufacturing?",
      a: `<p>MES is a software system that connects, monitors, and controls complex manufacturing systems and data flows on the factory floor. It sits between ERP (Enterprise Resource Planning) and the plant floor.</p><ul><li>Tracks and documents real-time production from raw materials to finished goods</li><li>Manages work orders, scheduling, quality control, material tracking, and labor</li><li>Bridges the gap between planning systems (ERP like SAP) and actual shop floor operations</li><li>Provides traceability and genealogy of manufactured products</li></ul>`,
      level: "easy"
    },
    {
      q: "What is Apriso (DELMIA Apriso) and who is its current vendor?",
      a: `<p>Apriso is a Manufacturing Execution System (MES) solution now branded as <code>DELMIA Apriso</code>, owned by Dassault Systemes. It was originally developed by Apriso Corporation and acquired by Dassault Systemes in 2013.</p><ul><li>Used for global manufacturing operations management (MOM)</li><li>Provides process-driven, configurable workflows across multiple plants</li><li>Supports discrete, process, and hybrid manufacturing industries</li><li>Runs on the FlexNet platform</li></ul>`,
      level: "easy"
    },
    {
      q: "What is the FlexNet platform in Apriso?",
      a: `<p>FlexNet is the underlying application platform on which DELMIA Apriso is built. It provides the runtime environment for all Apriso processes and operations.</p><ul><li>Object-oriented, process-driven platform</li><li>Supports multi-site, multi-language deployments</li><li>Provides the Process Builder IDE for development</li><li>Handles security, sessions, transactions, and scalability</li><li>Built on a 3-tier architecture: client, application server, database</li></ul>`,
      level: "easy"
    },
    {
      q: "What industries typically use Apriso MES?",
      a: `<ul><li>Aerospace &amp; Defense</li><li>Automotive manufacturing</li><li>High-tech electronics</li><li>Medical devices &amp; pharmaceuticals</li><li>Industrial equipment / heavy machinery</li><li>Consumer goods &amp; packaging</li></ul><p>Apriso excels in regulated industries where traceability, genealogy, and compliance are critical.</p>`,
      level: "easy"
    },
    {
      q: "What are the key modules/functional areas in DELMIA Apriso?",
      a: `<ul><li><strong>Production Management</strong> - Work orders, scheduling, execution</li><li><strong>Quality Management</strong> - Inspection plans, NCR, CAPA</li><li><strong>Inventory &amp; Material Management</strong> - Lot tracking, warehouse</li><li><strong>Labor Management</strong> - Time tracking, skills, certifications</li><li><strong>Genealogy &amp; Traceability</strong> - Bill of Process, full traceability tree</li><li><strong>Equipment Management</strong> - OEE, maintenance, calibration</li><li><strong>Global Process Management</strong> - Multi-site process governance</li></ul>`,
      level: "easy"
    },
    {
      q: "What is the difference between ERP and MES? How does Apriso integrate with SAP?",
      a: `<p><strong>ERP</strong> handles business-level planning: orders, procurement, finance, HR. <strong>MES</strong> handles real-time shop floor execution.</p><ul><li>ERP creates production orders; MES executes and tracks them</li><li>MES sends actual quantities, labor, quality data back to ERP</li><li>Apriso integrates with SAP via IDOC, BAPI, RFC, or REST/Web Services</li><li>Apriso has a dedicated SAP Integration Framework with standard adapters</li><li>Common exchanges: Work orders, Confirmations, Goods movements, Quality notifications</li></ul>`,
      level: "medium"
    },
    {
      q: "What is ISA-95 (S95) standard and how is it relevant to Apriso?",
      a: `<p>ISA-95 is an international standard for developing an automated interface between enterprise and plant floor systems. Apriso is designed around ISA-95 / IEC 62264 data models.</p><ul><li>Defines levels: Level 3 (MES/MOM) sits between Level 4 (ERP) and Level 2 (SCADA/PLC)</li><li>Apriso's object model (Personnel, Equipment, Material, Process Segments) maps to ISA-95</li><li>Helps ensure interoperability between Apriso and other enterprise systems</li></ul>`,
      level: "medium"
    }
  ],
  2: [
    {
      q: "Describe the 3-tier architecture of DELMIA Apriso.",
      a: `<ul><li><strong>Presentation Tier</strong> - Web browser client (HTML5/JavaScript UI). Users interact via Apriso portals and screens</li><li><strong>Application Tier</strong> - FlexNet Application Server (Java-based). Hosts business logic, process execution engine, and services</li><li><strong>Data Tier</strong> - Database (Oracle or MS SQL Server). Stores all manufacturing data, metadata, configurations</li></ul><div class="note">Apriso moved to a web-based UI from the older Windows-based client.</div>`,
      level: "easy"
    },
    {
      q: "What is a Business Process in Apriso? What are its main components?",
      a: `<p>A Business Process in Apriso is a configurable workflow that defines how a manufacturing task is executed. It is created and managed in Process Builder.</p><ul><li><strong>Operations</strong> - Logical steps/tasks within a process</li><li><strong>Transitions</strong> - Flow control between operations (conditional or unconditional)</li><li><strong>Parameters</strong> - Input/output data passed between operations</li><li><strong>Resources</strong> - Equipment, personnel, material involved</li><li><strong>Events</strong> - Triggers that start or branch processes</li></ul>`,
      level: "easy"
    },
    {
      q: "What is Process Builder in Apriso? What is it used for?",
      a: `<p>Process Builder is the Integrated Development Environment (IDE) in Apriso used by developers to design, configure, and deploy business processes and operations.</p><ul><li>Drag-and-drop workflow designer for defining process flows</li><li>Configure operations, transitions, parameters, and rules</li><li>Write scripting logic (VBScript/JScript within operations)</li><li>Manage database queries and integrations</li><li>Deploy configurations to environments (dev, test, prod)</li></ul>`,
      level: "easy"
    },
    {
      q: "What is an Operation in Apriso? What are the types of operations?",
      a: `<p>An Operation is the fundamental executable unit within a Business Process. Each operation performs a specific action.</p><ul><li><strong>Sub-Process Operation</strong> - Calls another business process</li><li><strong>Database Operation</strong> - Executes SQL queries (SELECT, INSERT, UPDATE)</li><li><strong>Scripting Operation</strong> - Contains VBScript/JavaScript for custom logic</li><li><strong>Integration Operation</strong> - Calls external web services or APIs</li><li><strong>View Operation</strong> - Renders a UI screen to the user</li><li><strong>Event Operation</strong> - Raises or handles system events</li><li><strong>Decision Operation</strong> - Evaluates conditions to route flow</li></ul>`,
      level: "easy"
    },
    {
      q: "What is a Container in Apriso? What are its types?",
      a: `<p>A Container is a logical grouping of processes or functions in Apriso, similar to a module or package.</p><ul><li><strong>Business Process Container</strong> - Groups related business processes</li><li><strong>Operation Container</strong> - Groups re-usable operations</li><li><strong>Global Container</strong> - Shared across the platform (standard Apriso objects)</li><li><strong>Customer Container</strong> - Custom/customer-specific configurations</li></ul><div class="note">It is a best practice to never modify Global/Standard containers; always extend them in Customer containers.</div>`,
      level: "medium"
    },
    {
      q: "What is a Work Order in Apriso and what is its lifecycle?",
      a: `<ul><li><strong>Created</strong> - Work order received (from ERP or manually)</li><li><strong>Scheduled</strong> - Assigned to a facility/line/machine</li><li><strong>Released</strong> - Made available for shop floor execution</li><li><strong>In Progress</strong> - Active production underway</li><li><strong>Completed</strong> - All operations finished</li><li><strong>Closed</strong> - Confirmed back to ERP (e.g., SAP confirmation)</li></ul>`,
      level: "easy"
    },
    {
      q: "What is a Lot/Serialized Unit in Apriso? What is the difference?",
      a: `<p>Apriso supports two material tracking modes:</p><ul><li><strong>Lot</strong> - A batch quantity tracked by a single Lot ID. Example: 100 units in Lot 001</li><li><strong>Serialized Unit (SU)</strong> - Each individual unit has a unique serial number</li><li>Serialized tracking is used for high-value or regulated products (aerospace, medical)</li><li>Lots are preferred for high-volume, low-cost discrete or process manufacturing</li></ul>`,
      level: "easy"
    },
    {
      q: "What is the Bill of Process (BOP) in Apriso?",
      a: `<p>The Bill of Process (BOP) defines the sequence of operations required to manufacture a product. It is the manufacturing equivalent of a Bill of Materials (BOM).</p><ul><li>Defines which operations to perform and in what sequence</li><li>Links to equipment, personnel skills, and material requirements</li><li>Drives the execution of work orders on the shop floor</li><li>Can be plant-specific or global/template-based</li><li>Also called Process Plan or Routing in some MES systems</li></ul>`,
      level: "medium"
    }
  ],
  3: [
    {
      q: "How do you pass parameters between operations in a Process Builder flow?",
      a: `<p>Parameters are the data-passing mechanism between operations in a business process.</p><ul><li>Each operation can define <strong>Input</strong> and <strong>Output</strong> parameters</li><li>Parameters are mapped in the Process Builder transition/mapping screen</li><li>Process-level parameters can be shared across all operations in the process</li><li>Types include: String, Integer, Double, Boolean, Date, Object, Collection</li><li>Use <code>Get/Set Parameter</code> script functions to manipulate them in scripting operations</li></ul>`,
      level: "easy"
    },
    {
      q: "What scripting language is used in Apriso operations and what are common use cases?",
      a: `<p>Apriso supports <strong>VBScript</strong> (primarily) and JScript within scripting operations in Process Builder.</p><ul><li>Conditional logic: if/else branching based on parameter values</li><li>String manipulation: parsing, concatenating, formatting data</li><li>Date/time calculations: computing due dates, shift times</li><li>Mathematical calculations: yield, scrap, efficiency formulas</li><li>Calling FlexNet API functions: <code>FlexNet.GetObject()</code>, <code>FlexNet.SetParameter()</code></li><li>Error handling: raising custom error messages to the UI</li></ul>`,
      level: "easy"
    },
    {
      q: "What are Transitions in a Business Process? What types of transitions exist?",
      a: `<ul><li><strong>Unconditional Transition</strong> - Always flows to the next operation</li><li><strong>Conditional Transition</strong> - Flows based on a condition (expression or parameter value)</li><li><strong>Error Transition</strong> - Routes flow when an operation throws an error</li><li><strong>Default Transition</strong> - Fallback when no condition is met</li></ul><p>Transitions are drawn as arrows in the Process Builder diagram and can carry parameter mappings.</p>`,
      level: "easy"
    },
    {
      q: "How do you handle errors/exceptions in Apriso processes?",
      a: `<ul><li>Use <strong>Error Transitions</strong> in Process Builder to catch operation errors</li><li>Script operations can use <code>Err.Raise</code> (VBScript) to throw custom errors</li><li>Use <code>On Error Resume Next</code> for graceful error handling in scripts</li><li>Log errors using Apriso's logging API: <code>FlexNet.Log()</code></li><li>Display user-friendly error messages via View operations or pop-up dialogs</li><li>Rollback transactions by configuring transaction boundaries in the process</li></ul>`,
      level: "medium"
    },
    {
      q: "What is a View Operation? How is the Apriso UI designed?",
      a: `<p>A View Operation renders a screen or form to the end user within a business process flow.</p><ul><li>Views are defined using the <strong>Screen Builder</strong> / UI Designer in Apriso</li><li>Supports standard controls: text fields, dropdowns, grids, buttons, labels</li><li>Apriso 2016+ uses HTML5-based responsive UI</li><li>Views bind to process parameters for input/output</li><li>JavaScript and CSS can be used for custom UI behavior</li><li>Views can be embedded in Portals (dashboards) for navigation</li></ul>`,
      level: "medium"
    },
    {
      q: "What is a Sub-Process call? When would you use it?",
      a: `<p>A Sub-Process operation calls another Business Process from within a parent process.</p><ul><li>Used for <strong>reusability</strong> - common logic encapsulated once and called from many places</li><li>Used for <strong>modularization</strong> - breaking large processes into manageable chunks</li><li>Parameters are mapped between caller and callee process</li><li>Examples: Common validation logic, SAP integration calls, quality inspection sub-flows</li></ul>`,
      level: "medium"
    },
    {
      q: "What are Collections in Apriso? How are they used in Process Builder?",
      a: `<p>Collections are list-type parameters in Apriso - essentially arrays or recordsets of data.</p><ul><li>Database operations return result sets as Collections</li><li>Collections can be iterated in loops within scripting operations</li><li>Bound to grid controls in View operations to display tabular data</li><li>Common methods: <code>Collection.Count</code>, <code>Collection.Item(index)</code></li><li>Used for displaying multiple work orders, lots, or inspection results in a table</li></ul>`,
      level: "medium"
    },
    {
      q: "What are FlexNet API functions? Give examples you have used.",
      a: `<p>FlexNet API is a set of built-in functions available in Apriso scripting operations to interact with the platform.</p><ul><li><code>FlexNet.GetObject("ClassName")</code> - Get a business object instance</li><li><code>FlexNet.SetParameter("ParamName", value)</code> - Set a process parameter</li><li><code>FlexNet.GetParameter("ParamName")</code> - Read a process parameter</li><li><code>FlexNet.Log(message, level)</code> - Write to Apriso log</li><li><code>FlexNet.RaiseError(code, message)</code> - Throw a custom error</li><li><code>FlexNet.GetCurrentUser()</code> - Get logged-in user info</li></ul>`,
      level: "medium"
    }
  ],
  4: [
    {
      q: "How does Apriso integrate with SAP? What are the common integration points?",
      a: `<p>Apriso integrates with SAP using multiple mechanisms:</p><ul><li><strong>IDOCs</strong> - For batch/asynchronous message exchange (e.g., production orders, goods movements)</li><li><strong>RFC/BAPI</strong> - Synchronous function calls to SAP modules</li><li><strong>Web Services (SOAP/REST)</strong> - For modern integrations</li><li><strong>SAP Integration Framework (SIF)</strong> - Apriso's built-in SAP adapter</li><li>Common flows: Receive Work Orders from SAP PP, Send Production Confirmations, Goods Issue/Receipt, Quality Notifications</li></ul>`,
      level: "medium"
    },
    {
      q: "What is the Integration Framework in Apriso? What does it support?",
      a: `<ul><li>Apriso's Integration Framework enables connectivity to external systems</li><li>Supports <strong>Web Services</strong> (SOAP and REST)</li><li>Supports <strong>Messaging</strong> (JMS, MSMQ, IBM MQ)</li><li>Supports <strong>File-based</strong> integration (XML, CSV via FTP/SFTP)</li><li>Supports <strong>Database-to-Database</strong> direct connections</li><li>Provides SAP-specific adapters (BAPI, IDOC, RFC)</li><li>Integration Operations in Process Builder call configured integration endpoints</li></ul>`,
      level: "medium"
    },
    {
      q: "What is an XML/XSD schema and how is it used in Apriso integration?",
      a: `<p>XML is used as the primary data exchange format in Apriso integrations.</p><ul><li>XSD (XML Schema Definition) defines the structure/validation rules for XML messages</li><li>Apriso uses XML for SAP IDOC messages, web service payloads, and file-based exchanges</li><li>Scripting operations parse XML using DOM or XPath functions</li><li>Import/Export of Apriso configurations is also done via XML packages</li><li>Mapping operations transform XML from one schema to another</li></ul>`,
      level: "medium"
    },
    {
      q: "What is Master Data in Apriso? Give examples.",
      a: `<p>Master Data is the foundational reference data that defines the manufacturing environment in Apriso.</p><ul><li><strong>Facility/Plant</strong> - Physical manufacturing locations</li><li><strong>Equipment/Resources</strong> - Machines, tools, production lines</li><li><strong>Personnel/Users</strong> - Operators, supervisors with roles and skills</li><li><strong>Material/Part</strong> - Products, components, raw materials</li><li><strong>Bill of Process (BOP)</strong> - Process routing definition</li><li><strong>Customer/Supplier</strong> - External business partners</li></ul>`,
      level: "easy"
    },
    {
      q: "What is a Genealogy in Apriso? How is traceability achieved?",
      a: `<p>Genealogy in Apriso tracks the complete history of a product - all materials consumed, operations performed, equipment used, and personnel involved in manufacturing.</p><ul><li>Parent-child relationships tracked between serial numbers and lots</li><li>Every operation completion is stamped with timestamp, user, equipment</li><li>Traceability reports show forward (where did this go?) and backward (what went into this?) views</li><li>Critical for regulated industries: FDA, AS9100, IATF 16949 compliance</li><li>Genealogy data stored in the <code>GEN_</code> family of tables in the database</li></ul>`,
      level: "medium"
    }
  ],
  5: [
    {
      q: "What database platforms does Apriso support? What are key database operation types?",
      a: `<p>Apriso supports <strong>Oracle</strong> and <strong>Microsoft SQL Server</strong> as its backend databases.</p><ul><li><strong>SELECT</strong> - Query data for display or processing</li><li><strong>INSERT</strong> - Create new records (work orders, lots, inspection data)</li><li><strong>UPDATE</strong> - Modify existing records (status changes, completions)</li><li><strong>STORED PROCEDURE</strong> - Call DB procedures for complex logic</li><li>All DB operations in Process Builder use parameterized queries to prevent SQL injection</li></ul>`,
      level: "easy"
    },
    {
      q: "How do you write a Database Operation in Apriso Process Builder?",
      a: `<ul><li>Add a Database Operation to the process flow in Process Builder</li><li>Select operation type: Select, Insert, Update, Delete, or Stored Procedure</li><li>Write the SQL query in the SQL editor panel</li><li>Map process parameters to SQL query parameters (using <code>:paramName</code> or <code>?</code> syntax)</li><li>Map result columns to output parameters or collections</li><li>Configure error handling for no-rows-found or DB errors</li></ul>`,
      level: "easy"
    },
    {
      q: "What are some important Apriso database tables you should know?",
      a: `<ul><li><code>WO_WORKORDER</code> - Work order header data</li><li><code>WO_WORKORDEROP</code> - Work order operations</li><li><code>MA_MATERIAL</code> - Material master</li><li><code>LO_LOT / SU_SERUNIT</code> - Lot / Serialized unit tracking</li><li><code>EQ_EQUIPMENT</code> - Equipment master</li><li><code>QI_INSPPLAN</code> - Quality inspection plans</li><li><code>GEN_</code> prefix tables - Genealogy records</li><li><code>USR_USER</code> - User/personnel data</li></ul><div class="note">Avoid direct table writes; always use Apriso's API/business logic layers to maintain data integrity.</div>`,
      level: "hard"
    },
    {
      q: "How do you optimize a slow running database query in an Apriso operation?",
      a: `<ul><li>Check for missing indexes on filter columns (WO number, Lot ID, dates)</li><li>Avoid <code>SELECT *</code> - select only needed columns</li><li>Use proper <code>WHERE</code> clauses to limit result sets</li><li>Analyze query execution plan using Oracle EXPLAIN PLAN or SQL Server SSMS</li><li>Consider adding result pagination for large datasets shown in grids</li><li>Cache frequently read master data using Apriso caching mechanisms</li><li>Convert cursors/loops to set-based operations where possible</li></ul>`,
      level: "hard"
    },
    {
      q: "What is a stored procedure and when would you use one in Apriso?",
      a: `<p>A stored procedure is a pre-compiled SQL routine stored in the database server.</p><ul><li>Used in Apriso when logic is too complex for a single SQL statement</li><li>Batch operations: mass status updates, bulk genealogy creation</li><li>Complex multi-table joins and calculations</li><li>Reporting queries that aggregate large datasets</li><li>Called from Apriso using a Database Operation of type "Stored Procedure"</li></ul>`,
      level: "medium"
    }
  ],
  6: [
    {
      q: "A work order is stuck in 'In Progress' status and won't complete. How do you troubleshoot?",
      a: `<ul><li>Check the Apriso <strong>Application Server logs</strong> for errors during the completion process</li><li>Review the <strong>Process Builder</strong> flow for the completion process - identify which operation is failing</li><li>Check if all required <strong>operations are signed off</strong> (some processes require 100% completion)</li><li>Verify <strong>material consumption</strong> is fully recorded (open material requirements)</li><li>Check for <strong>pending quality holds</strong> or NCRs blocking completion</li><li>Query the database: check <code>WO_WORKORDEROP</code> for operations with 'Open' status</li><li>If needed, escalate with database-level correction after change management approval</li></ul>`,
      level: "medium"
    },
    {
      q: "A business process works in Development but fails in Production. What could be the reasons?",
      a: `<ul><li><strong>Data differences</strong> - Test data exists in Dev but not in Prod (master data, config)</li><li><strong>Deployment issue</strong> - Latest package not fully promoted to Prod</li><li><strong>Environment config</strong> - DB connection strings, external service URLs differ</li><li><strong>Security/Permissions</strong> - User roles in Prod may not have same access as Dev</li><li><strong>Volume/Performance</strong> - Prod data volumes cause timeouts not seen in Dev</li><li><strong>Integration endpoints</strong> - SAP Prod system has different settings than SAP Dev</li></ul>`,
      level: "medium"
    },
    {
      q: "How do you deploy changes from Development to Production in Apriso?",
      a: `<ul><li>Export configuration as an <strong>Apriso Package</strong> (XML-based transport)</li><li>Apply the package to Test/QA environment and perform testing</li><li>After sign-off, apply the package to Production during a change window</li><li>Use <strong>Apriso Package Manager</strong> for controlled deployments</li><li>Document changes in a <strong>Change Record</strong> (ITIL process at Infosys)</li><li>Perform smoke testing after deployment to verify key processes</li><li>Have a <strong>rollback plan</strong> ready (backup of previous package)</li></ul>`,
      level: "medium"
    },
    {
      q: "A shop floor operator reports that a barcode scan is not working in Apriso. How do you investigate?",
      a: `<ul><li>Verify the <strong>physical barcode scanner</strong> is working (test in Notepad)</li><li>Check the <strong>barcode format</strong> - does it match expected format in the process?</li><li>Review the <strong>receiving process</strong> in Process Builder - look at the validation scripting</li><li>Check if the <strong>Lot or Serial number</strong> exists in Apriso database</li><li>Check Apriso <strong>error logs</strong> for the session/user at time of failure</li><li>Test with a <strong>known-good barcode</strong> to isolate whether it's a data or hardware issue</li></ul>`,
      level: "easy"
    },
    {
      q: "You need to add a new custom field to an existing Apriso screen. What is your approach?",
      a: `<ul><li>Understand the <strong>business requirement</strong> - what data needs to be captured and stored</li><li>Identify if the field maps to an existing DB column or requires a <strong>schema extension</strong></li><li>Add the field to the <strong>View Operation</strong> UI in Process Builder (Screen Builder)</li><li>Create or update the <strong>database operation</strong> to save/load the new field</li><li>Add the parameter to the <strong>business process</strong> flow</li><li>Test in DEV, then document and deploy to PROD via package</li><li>Use <strong>Apriso's extension mechanism</strong> - avoid modifying standard Global containers</li></ul>`,
      level: "medium"
    },
    {
      q: "What is an NCR (Non-Conformance Report) in Apriso QM? How does the NCR process typically work?",
      a: `<ul><li>NCR is raised when a product or process fails to meet quality specifications</li><li><strong>Detection</strong> - Defect found during inspection or production</li><li><strong>NCR Creation</strong> - Operator/Quality engineer logs NCR in Apriso with defect details, quantity, location</li><li><strong>Review</strong> - Quality supervisor reviews the NCR</li><li><strong>Disposition</strong> - Decision: Use As Is, Rework, Scrap, Return to Supplier</li><li><strong>Resolution</strong> - Corrective actions taken, lot released or scrapped</li><li><strong>CAPA</strong> - Root cause analysis and corrective/preventive action if needed</li></ul>`,
      level: "hard"
    }
  ],
  7: [
    {
      q: "Tell me about yourself and your exposure to Apriso/MES.",
      a: `<p><strong>Framework for 0-2 years:</strong></p><ul><li>Start with education background and relevant technical skills</li><li>Mention any Apriso training, certifications (DELMIA Apriso Certified Associate)</li><li>Describe academic projects or internship exposure to manufacturing/MES</li><li>Show enthusiasm for manufacturing domain and Infosys's MES practice</li></ul><p><strong>Framework for 2-4 years:</strong></p><ul><li>Describe your specific Apriso project: industry, scope, your role</li><li>Highlight specific modules: Production, Quality, Integration with SAP</li><li>Mention achievements: defect resolution, performance improvements</li></ul>`,
      level: "easy"
    },
    {
      q: "Why do you want to join Infosys MES (Apriso) practice?",
      a: `<p><strong>Key talking points:</strong></p><ul><li>Infosys is a global leader in MES implementations across automotive, aerospace, hi-tech sectors</li><li>Opportunity to work on large-scale, global, multi-plant rollouts</li><li>Access to Infosys's structured training programs (Lex, MES CoE)</li><li>Apriso/DELMIA is the market-leading MES platform - strong career trajectory</li><li>Interest in manufacturing technology and Industry 4.0 / smart factory</li></ul>`,
      level: "easy"
    },
    {
      q: "How do you handle working with multiple stakeholders (IT, shop floor, quality team)?",
      a: `<ul><li>Emphasize clear and simple communication - avoid technical jargon with floor operators</li><li>Use structured requirement documentation: user stories, functional specs</li><li>Regular demos and walkthroughs of new features before go-live</li><li>Change management: training sessions, quick reference guides for end users</li><li>Escalation path: know when to involve project manager or architect</li></ul>`,
      level: "easy"
    },
    {
      q: "Describe a situation where you had to debug a complex issue in Apriso or any software.",
      a: `<p><strong>Use the STAR method:</strong></p><ul><li><strong>Situation</strong> - Describe the context (production system, what was failing)</li><li><strong>Task</strong> - Your responsibility in resolving it</li><li><strong>Action</strong> - Systematic debugging: log analysis, process tracing, DB queries, root cause isolation</li><li><strong>Result</strong> - Resolution, any process improvements implemented to prevent recurrence</li></ul><div class="note">For freshers: use examples from academic projects, internships, or any software debugging experience.</div>`,
      level: "easy"
    },
    {
      q: "What do you know about Industry 4.0 and how does MES fit into it?",
      a: `<ul><li>Industry 4.0 = digital transformation of manufacturing using IoT, AI, cloud, big data</li><li>MES is the core layer connecting smart machines (IoT/SCADA) to enterprise systems (ERP)</li><li>Apriso collects real-time machine data, OEE metrics, and quality data for analytics</li><li>Integration with Digital Twin, predictive maintenance, and AI-driven quality inspection</li><li>Apriso on Dassault Systemes 3DEXPERIENCE platform connects to broader digital thread</li></ul>`,
      level: "medium"
    },
    {
      q: "What are your strengths and areas of improvement as an Apriso developer?",
      a: `<p><strong>Sample strengths for this role:</strong></p><ul><li>Strong analytical and problem-solving skills for process debugging</li><li>Good understanding of SQL and database operations</li><li>Quick learner - ability to pick up new Apriso modules or configurations</li><li>Attention to detail in testing and quality of deployments</li></ul><p><strong>Sample areas of improvement (be honest but constructive):</strong></p><ul><li>Building deeper expertise in SAP integration (actively learning SAP PP/QM)</li><li>Improving performance tuning skills for large-scale database operations</li></ul>`,
      level: "easy"
    }
  ],
  8: [
    {
      q: "Write a CTE (Common Table Expression) query with an example.",
      a: `<p>CTEs use the <code>WITH</code> keyword and improve readability. They are scoped to the single query that follows. You can chain multiple CTEs together.</p><pre>WITH EmployeeCTE AS (
    SELECT 
        EmployeeID,
        Name,
        DepartmentID,
        Salary,
        ROW_NUMBER() OVER (
            PARTITION BY DepartmentID 
            ORDER BY Salary DESC
        ) AS RowNum
    FROM Employees
),
DeptCTE AS (
    SELECT DepartmentID, AVG(Salary) AS AvgSalary
    FROM Employees
    GROUP BY DepartmentID
)
SELECT e.Name, e.Salary, d.AvgSalary
FROM EmployeeCTE e
JOIN DeptCTE d ON e.DepartmentID = d.DepartmentID
WHERE e.RowNum = 1;</pre><ul><li>CTEs can be recursive for hierarchical data like BOM/order explosion</li><li>Multiple CTEs can be chained using commas</li><li>Improves readability vs deeply nested subqueries</li></ul>`,
      level: "medium"
    },
    {
      q: "How do we take input in Apriso screen interfaces using HTML?",
      a: `<p>In Apriso HTML-type screens, inputs are bound to GEF (Generic Entity Framework) container fields using the <code>gef:bind</code> attribute.</p><pre>&lt;!-- Text Input bound to a Process Parameter --&gt;
&lt;input type="text" id="WorkOrder" 
       name="WorkOrder" 
       gef:bind="Container.WorkOrder" /&gt;

&lt;!-- Dropdown --&gt;
&lt;select gef:bind="Container.Status"&gt;
    &lt;option value="Active"&gt;Active&lt;/option&gt;
    &lt;option value="Closed"&gt;Closed&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Date Input --&gt;
&lt;input type="date" gef:bind="Container.PlannedDate" /&gt;

&lt;!-- Hidden Field --&gt;
&lt;input type="hidden" gef:bind="Container.InternalKey" /&gt;</pre><ul><li><code>gef:bind</code> is the core mechanism to link UI elements to Apriso container fields</li><li>On form submit, values are automatically passed back to the process parameters</li><li>JavaScript can also read/write GEF fields at runtime</li></ul>`,
      level: "easy"
    },
    {
      q: "Write a Stored Procedure (SP) for insertion of data.",
      a: `<p>A stored procedure encapsulates insert logic with transaction handling and error management.</p><pre>CREATE PROCEDURE usp_InsertProductionOrder
    @WorkOrderNo    NVARCHAR(50),
    @PartNo         NVARCHAR(50),
    @Quantity       DECIMAL(18,4),
    @PlannedDate    DATETIME,
    @CreatedBy      NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        BEGIN TRANSACTION;
            INSERT INTO ProductionOrders 
                (WorkOrderNo, PartNo, Quantity, 
                 PlannedDate, CreatedBy, CreatedOn)
            VALUES 
                (@WorkOrderNo, @PartNo, @Quantity, 
                 @PlannedDate, @CreatedBy, GETDATE());
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END;</pre><ul><li><code>SET NOCOUNT ON</code> prevents extra result sets from interfering</li><li><code>BEGIN TRY / BEGIN CATCH</code> handles runtime errors gracefully</li><li><code>THROW</code> re-raises the exception so Apriso can handle it</li></ul>`,
      level: "medium"
    },
    {
      q: "Define and write functions in JavaScript. What are the types?",
      a: `<p>JavaScript functions are reusable blocks of code. There are several types:</p><pre>// 1. Function Declaration (hoisted)
function calculateOEE(availability, performance, quality) {
    return availability * performance * quality;
}

// 2. Function Expression (not hoisted)
const getStatus = function(qty) {
    return qty > 0 ? "In Stock" : "Out of Stock";
};

// 3. Arrow Function (no own 'this')
const formatDate = (date) =&gt; 
    new Date(date).toLocaleDateString();

// 4. IIFE (Immediately Invoked)
(function() {
    console.log("Runs immediately on load");
})();

// 5. Default Parameters
function greet(name = "Operator") {
    return "Hello, " + name;
}

// 6. Rest Parameters
function sumAll(...nums) {
    return nums.reduce((a, b) =&gt; a + b, 0);
}</pre><ul><li><strong>Declarations</strong> are hoisted; <strong>expressions</strong> and <strong>arrow functions</strong> are not</li><li>Arrow functions do not have their own <code>this</code></li><li>Use arrow functions for callbacks in <code>forEach</code>, <code>map</code>, <code>filter</code></li></ul>`,
      level: "easy"
    },
    {
      q: "How to use AJAX? Explain with examples.",
      a: `<p>AJAX (Asynchronous JavaScript and XML) allows web pages to update data without full page reload.</p><pre>// Using jQuery AJAX (common in Apriso HTML screens)
$.ajax({
    url: "/GEF/ExecuteOperation",
    type: "POST",
    data: JSON.stringify({ WorkOrder: "WO001" }),
    contentType: "application/json",
    success: function(response) {
        alert("Status: " + response.Status);
    },
    error: function(xhr, status, error) {
        console.error("AJAX Error: ", error);
    }
});

// Using Fetch API (modern approach)
fetch("/api/SaveData", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ workOrder: "WO001", qty: 100 })
})
.then(res =&gt; res.json())
.then(data =&gt; console.log(data))
.catch(err =&gt; console.error(err));</pre><ul><li>AJAX calls are asynchronous - use callbacks, Promises, or async/await</li><li>In Apriso, use AJAX to trigger GEF operations without full screen refresh</li><li>Always handle both success and error cases</li></ul>`,
      level: "medium"
    },
    {
      q: "What is the difference between Classic and Advanced Determination in Apriso?",
      a: `<table><tr><th>Aspect</th><th>Classic Determination</th><th>Advanced Determination</th></tr><tr><td>Logic</td><td>Simple rule-based (static routing)</td><td>Complex, condition-driven routing</td></tr><tr><td>Flexibility</td><td>Limited</td><td>Highly flexible</td></tr><tr><td>Configuration</td><td>Standard routing rules</td><td>Decision Tables / scripting</td></tr><tr><td>Use Case</td><td>Fixed process flows</td><td>Dynamic routing based on attributes</td></tr><tr><td>Conditions</td><td>Few or no conditions</td><td>Multiple conditions with priorities</td></tr><tr><td>Maintenance</td><td>Easier to maintain</td><td>Requires more planning</td></tr></table><div class="note">Advanced Determination is used when the next step in a workflow must be decided based on runtime data like part type, defect code, or shop floor conditions.</div>`,
      level: "hard"
    },
    {
      q: "What is Order Explosion in Apriso and how was it done in your project?",
      a: `<p><strong>Order Explosion</strong> is the process of breaking down a parent Work Order into child Work Orders based on the Bill of Materials (BOM) or routing structure.</p><ul><li>Triggered from a custom screen where the user selects a Production Order</li><li>A custom Operation reads the BOM structure using <code>GetBOMComponents</code> GBO</li><li>For each BOM level, child Work Orders are created using <code>CreateWorkOrder</code> GBO</li><li>The parent-child relationship is maintained using <code>ParentOrderKey</code></li><li>After explosion, routing was assigned to each child order automatically</li><li>A <strong>grid</strong> on the screen displayed the exploded structure for user review before confirmation</li><li>Status update of parent order is triggered only after all child orders are created successfully</li></ul>`,
      level: "hard"
    },
    {
      q: "How to change the value of any column in a grid without refreshing the grid?",
      a: `<p>In Apriso HTML screens using GEF grids, you can update a cell value client-side using JavaScript without a full grid reload:</p><pre>// Get the grid object
var grid = GEF.Controls.getControl("GridControlID");

// Get the data source
var ds = grid.getDataSource();

// Get row by index
var row = ds.getRow(rowIndex);

// Update column value
row.setValue("ColumnName", "NewValue");

// Mark as modified (important for save operations)
row.setModified(true);

// Refresh only the specific row (not full grid)
grid.refreshRow(rowIndex);

// For jqGrid in custom Apriso HTML:
$("#GridID").jqGrid('setCell', rowId, 'ColumnName', 'NewValue');</pre><ul><li>Avoids full grid re-render for better user experience</li><li>Marking the row as modified ensures changed value is included in save operations</li><li>Use <code>grid.refreshRow()</code> instead of <code>grid.refresh()</code> for targeted update</li></ul>`,
      level: "hard"
    },
    {
      q: "Quality tables in Apriso: explain the use of Disposition and Disposition Test tables.",
      a: `<p><strong>Disposition Table:</strong> Defines what action to take on non-conforming material.</p><ul><li>Examples: Scrap, Rework, Use As-Is, Return to Vendor</li><li>Used during NCR (Non-Conformance Reporting) process</li><li>Linked to a defect and determines the disposition path for the material</li></ul><p><strong>Disposition Test Table:</strong> Stores the test criteria associated with each disposition.</p><ul><li>Links specific tests/inspections that must be performed before a disposition can be applied</li><li>Ensures quality checks are completed before material moves forward</li></ul><p><strong>Flow:</strong></p><pre>Defect Found 
  -&gt; NCR Created 
  -&gt; Disposition Assigned
  -&gt; Disposition Tests Run
  -&gt; Results Recorded 
  -&gt; Material Released / Scrapped</pre>`,
      level: "hard"
    },
    {
      q: "Which modules have you worked on in Apriso? How many screens have you created?",
      a: `<p><strong>Modules typically covered in a project:</strong></p><ul><li><strong>Production</strong> - Work Order management, Order execution, Order explosion</li><li><strong>Quality</strong> - NCR, Inspection plans, Disposition management</li><li><strong>Inventory</strong> - Material movements, stock tracking, Replenishment orders</li><li><strong>Warehouse</strong> - Receiving, Putaway, Picking, Shipping</li><li><strong>Maintenance</strong> - Equipment tracking, calibration</li></ul><p><strong>Screen types created:</strong></p><ul><li>Form screens for data entry (Work Order creation, Lot tracking)</li><li>Grid-based screens for order listing and bulk operations</li><li>IJH (Inline Job Handling) screens for shop floor execution</li><li>Dashboard-style HTML screens with AJAX-based data loading</li></ul><div class="note">Customize the count and modules based on your actual project experience when answering in the interview.</div>`,
      level: "medium"
    },
    {
      q: "SQL Optimization techniques. What are the best practices?",
      a: `<p>SQL optimization improves query performance and reduces database load:</p><pre>-- 1. Index on filter/join columns
CREATE INDEX IX_WO_PartNo ON WorkOrders(PartNo);

-- 2. Avoid SELECT * 
SELECT WorkOrderNo, Qty FROM WorkOrders 
WHERE Status = 'Active';

-- 3. Use EXISTS instead of IN
SELECT * FROM Orders o
WHERE EXISTS (
    SELECT 1 FROM Parts p 
    WHERE p.PartNo = o.PartNo
);

-- 4. Avoid functions on indexed columns in WHERE
-- BAD:  WHERE YEAR(CreatedOn) = 2024
-- GOOD: WHERE CreatedOn >= '2024-01-01' 
--         AND CreatedOn &lt; '2025-01-01'

-- 5. Use SET NOCOUNT ON in stored procedures</pre><ul><li>Analyze execution plans to spot bottlenecks</li><li>Use <code>NOLOCK</code> hint for read-only reporting queries</li><li>Partition large tables for faster queries on date ranges</li><li>Update statistics regularly using <code>UPDATE STATISTICS</code></li></ul>`,
      level: "medium"
    },
    {
      q: "Where are Apriso logs stored? How do you toggle the logs?",
      a: `<p><strong>Log Location (default):</strong></p><pre>C:\\ProgramData\\Dassault Systemes\\DelmiaWorks\\Logs\\</pre><p>Also configured in <code>Web.config</code> under the Log4Net section of the Apriso Application Server.</p><p><strong>Types of logs:</strong></p><ul><li>Application logs: <code>AppLog_YYYYMMDD.log</code></li><li>GBO/Operation execution logs</li><li>IIS logs: <code>C:\\inetpub\\logs\\LogFiles\\</code></li></ul><p><strong>Toggling log levels:</strong></p><ul><li>Go to <strong>Apriso Studio &gt; System Settings &gt; Logging</strong></li><li>Change log level: <code>DEBUG &gt; INFO &gt; WARN &gt; ERROR</code></li></ul><pre>&lt;!-- In log4net.config --&gt;
&lt;level value="DEBUG" /&gt;  &lt;!-- Most verbose --&gt;
&lt;level value="ERROR" /&gt;  &lt;!-- Least verbose --&gt;</pre><div class="note">Restart the application pool after config file changes. Use DEBUG only in DEV/TEST - it impacts performance in Production.</div>`,
      level: "medium"
    },
    {
      q: "Can we create a Grid in a Form type view in Apriso? How to do it?",
      a: `<p>Yes, you <strong>can</strong> create a grid in a Form type view in Apriso.</p><p><strong>Steps:</strong></p><ul><li>Open the Form view in <strong>Apriso Studio / Screen Builder</strong></li><li>Add a <strong>Grid Control</strong> from the control toolbox</li><li>Bind it to a <strong>Container</strong> of type Collection (multi-row dataset)</li><li>Define columns using the <strong>Column Editor</strong> - map each column to a container field</li><li>Set properties: editable, row selection mode, pagination, sorting</li><li>In the associated <strong>Operation</strong>, populate the grid container using a SELECT query or GBO output</li></ul><pre>-- Operation SQL that feeds the grid
SELECT PartNo, Description, Qty, UOM
FROM   Inventory
WHERE  Status = 'Active'</pre><div class="note">The container must be a <strong>multi-instance container</strong> for grid binding.</div>`,
      level: "hard"
    },
    {
      q: "What is an IJH screen and what are the Action Types in Apriso?",
      a: `<p><strong>IJH (Inline Job Handling)</strong> is a specialized Apriso screen designed for shop floor execution. It allows operators to perform operations on Work Orders step by step.</p><table><tr><th>Action Type</th><th>Description</th></tr><tr><td>Start</td><td>Begin execution of an operation on a Work Order</td></tr><tr><td>Complete</td><td>Mark an operation as finished</td></tr><tr><td>Pause / Resume</td><td>Temporarily stop and restart work</td></tr><tr><td>Scrap</td><td>Declare material as scrap</td></tr><tr><td>Split</td><td>Split a Work Order into multiple sub-orders</td></tr><tr><td>Move</td><td>Move WIP to the next work center</td></tr><tr><td>Rework</td><td>Send material back for rework operation</td></tr><tr><td>Data Collection</td><td>Capture quality/process parameters at runtime</td></tr></table><ul><li>IJH screens use <strong>Action Buttons</strong> configured to call specific Operations or GBOs</li><li>Each action type triggers a corresponding business process in Process Builder</li></ul>`,
      level: "hard"
    },
    {
      q: "What is WipOrderType used in Replenishment Order in Apriso?",
      a: `<p><strong>WipOrderType</strong> is a field/parameter that classifies the type of WIP (Work In Progress) order being created.</p><table><tr><th>WipOrderType</th><th>Meaning</th></tr><tr><td>Production</td><td>Standard manufacturing order</td></tr><tr><td>Replenishment</td><td>Auto-triggered to refill stock to min level</td></tr><tr><td>Rework</td><td>Order for rework of defective items</td></tr><tr><td>Transfer</td><td>Internal material transfer order</td></tr></table><p><strong>In Replenishment flow:</strong></p><ul><li>When a material falls below <strong>min stock level</strong>, a Replenishment Order is triggered</li><li><code>WipOrderType = 'Replenishment'</code> is set to identify and route it separately</li><li>Used in <strong>determination rules</strong> to apply different routing, BOM, or approval workflows</li><li>Replenishment orders bypass some standard production steps</li></ul>`,
      level: "hard"
    }
  ],
  9: [
    {
      q: "What separates a Stored Procedure from a Business Component (GBO) in Apriso?",
      a: `<p>Both encapsulate reusable logic, but they operate at different layers of the Apriso architecture.</p>
<table>
<tr><th>Aspect</th><th>Stored Procedure (SP)</th><th>Business Component (GBO)</th></tr>
<tr><td>Layer</td><td>Database layer (SQL Server / Oracle)</td><td>Application layer (FlexNet runtime)</td></tr>
<tr><td>Language</td><td>T-SQL / PL-SQL</td><td>VBScript / JScript + FlexNet API</td></tr>
<tr><td>Access</td><td>Called via Database Operation in Process Builder</td><td>Called via <code>FlexNet.GetObject()</code> or Sub-Process operation</td></tr>
<tr><td>Knows Apriso context?</td><td>No — has no awareness of sessions, parameters, or UI</td><td>Yes — full access to session, user, parameters, transactions</td></tr>
<tr><td>Transaction control</td><td>Internal DB transactions only</td><td>Participates in Apriso's distributed transaction</td></tr>
<tr><td>Reusability</td><td>Shared across any DB client</td><td>Shared across Apriso processes only</td></tr>
<tr><td>Best used for</td><td>Complex multi-table set-based operations, bulk updates, reporting</td><td>Business rule enforcement, workflow steps, integration calls</td></tr>
</table>
<div class="note">Rule of thumb: use a Stored Procedure when the logic is purely data-centric and set-based. Use a Business Component (GBO) when the logic needs to interact with Apriso objects, sessions, or trigger further process steps.</div>`,
      level: "hard"
    },
    {
      q: "What is the difference between Classic Determination and Advanced Determination in Apriso?",
      a: `<p><strong>Determination</strong> in Apriso decides which Business Process or Operation to invoke at runtime based on a set of rules. There are two modes:</p>
<table>
<tr><th>Aspect</th><th>Classic Determination</th><th>Advanced Determination</th></tr>
<tr><td>Rule complexity</td><td>Single-level, static rules evaluated top-to-bottom</td><td>Multi-condition decision tables with priorities and wildcards</td></tr>
<tr><td>Configuration tool</td><td>Simple drop-down rule list in Process Builder</td><td>Decision Table editor with AND/OR logic across multiple attributes</td></tr>
<tr><td>Flexibility</td><td>Low — one attribute drives the decision</td><td>High — combine Facility, Part Family, Order Type, Shift, etc.</td></tr>
<tr><td>Typical use case</td><td>Route to a fixed process based on one field (e.g., plant code)</td><td>Route dynamically based on combination of part type + defect code + shift</td></tr>
<tr><td>Maintenance</td><td>Easy — fewer rules, simpler to audit</td><td>Requires planning; large tables can become complex</td></tr>
<tr><td>Performance</td><td>Faster — minimal evaluation overhead</td><td>Slightly more overhead due to table evaluation</td></tr>
</table>
<p><strong>Example — Classic:</strong> If <code>Facility = 'Plant01'</code> → call Process A.</p>
<p><strong>Example — Advanced:</strong> If <code>Facility = 'Plant01'</code> AND <code>PartFamily = 'Engine'</code> AND <code>OrderType = 'Rework'</code> → call Process B; otherwise → Process C.</p>
<div class="note">Advanced Determination is preferred whenever routing logic involves more than one attribute or requires wildcards (*) to catch all unmatched combinations with a default route.</div>`,
      level: "hard"
    },
    {
      q: "How do you color a cell in an Apriso grid dynamically based on its value?",
      a: `<p>Cell coloring in Apriso grids is achieved through the <strong>Column Renderer</strong> or <strong>CellClass</strong> configuration combined with JavaScript/CSS.</p>
<p><strong>Method 1 — CSS class via Column Renderer (GEF HTML grid):</strong></p>
<pre>// In the column definition of your HTML screen:
{
  field: 'Status',
  headerName: 'Status',
  cellRenderer: function(params) {
    var color = '';
    if (params.value === 'PASS')  color = 'cell-green';
    if (params.value === 'FAIL')  color = 'cell-red';
    if (params.value === 'HOLD')  color = 'cell-amber';
    return '&lt;span class="' + color + '"&gt;' + params.value + '&lt;/span&gt;';
  }
}</pre>
<p><strong>Method 2 — cellClass function (ag-Grid style used in newer Apriso versions):</strong></p>
<pre>cellClass: function(params) {
  if (params.value &lt; 0)   return 'cell-red';
  if (params.value === 0)  return 'cell-amber';
  return 'cell-green';
}</pre>
<p><strong>CSS to define the classes:</strong></p>
<pre>.cell-green { background-color: rgba(34,197,94,0.15); color: #22c55e; font-weight: 600; }
.cell-red   { background-color: rgba(239,68,68,0.15);  color: #ef4444; font-weight: 600; }
.cell-amber { background-color: rgba(245,158,11,0.15); color: #f59e0b; font-weight: 600; }</pre>
<p><strong>Method 3 — jqGrid (legacy Apriso screens):</strong></p>
<pre>jQuery("#myGrid").jqGrid({
  colModel: [{
    name: 'QtyOnHand',
    cellattr: function(rowId, val) {
      if (parseInt(val) &lt; 10) 
        return 'style="background-color:#fee2e2;"';
    }
  }]
});</pre>
<div class="note">Always apply coloring via CSS classes rather than inline styles. This keeps the logic maintainable and respects the Apriso theme system.</div>`,
      level: "hard"
    },
    {
      q: "What is an Action Group and an Action in Apriso? How are they related?",
      a: `<p>Action Groups and Actions are the mechanism Apriso uses to expose executable operations to the user interface, particularly in IJH (Inline Job Handling) screens and portal dashboards.</p>
<p><strong>Action</strong> — A named, configurable unit that represents a single executable task. It wraps a Business Process call and defines:</p>
<ul>
<li>Which Business Process to invoke</li>
<li>The label and icon shown on the button</li>
<li>Pre-conditions: when the action is enabled or hidden (based on WO status, user role, etc.)</li>
<li>Parameter mappings: what context data is passed into the process</li>
</ul>
<p><strong>Action Group</strong> — A named container that groups related Actions together into a logical toolbar or menu set.</p>
<ul>
<li>Multiple Actions are bundled inside one Action Group (e.g., "Production Actions" = Start, Complete, Pause, Scrap)</li>
<li>An Action Group is then assigned to a screen or portal widget</li>
<li>Controls which set of buttons appears for a given context (role, facility, order type)</li>
<li>Different Action Groups can be shown to different roles on the same screen</li>
</ul>
<table>
<tr><th>Concept</th><th>Analogy</th><th>Example</th></tr>
<tr><td>Action</td><td>A single button</td><td>"Start Work Order" button</td></tr>
<tr><td>Action Group</td><td>A toolbar of buttons</td><td>"Shop Floor Operator Toolbar" with Start, Pause, Complete</td></tr>
</table>
<div class="note">Action Groups support role-based visibility. A supervisor's Action Group may include Scrap and Force-Complete actions that are hidden from standard operators.</div>`,
      level: "medium"
    },
    {
      q: "What are SQL triggers, why are they used in Apriso, and what are the risks?",
      a: `<p>A <strong>SQL Trigger</strong> is a special stored procedure that automatically executes in response to a DML event (INSERT, UPDATE, DELETE) on a specific table.</p>
<p><strong>Syntax (SQL Server):</strong></p>
<pre>CREATE TRIGGER trg_WO_StatusChange
ON WO_WORKORDER
AFTER UPDATE
AS
BEGIN
  SET NOCOUNT ON;
  -- Fires when a work order row is updated
  IF UPDATE(Status)
  BEGIN
    INSERT INTO WO_AuditLog (WorkOrderKey, OldStatus, NewStatus, ChangedOn)
    SELECT 
      d.WorkOrderKey,
      d.Status,       -- deleted = old values
      i.Status,       -- inserted = new values
      GETDATE()
    FROM deleted d
    JOIN inserted i ON d.WorkOrderKey = i.WorkOrderKey;
  END
END;</pre>
<p><strong>Why triggers are used in Apriso projects:</strong></p>
<ul>
<li><strong>Audit logging</strong> — Capture before/after values for regulated change history</li>
<li><strong>Data synchronization</strong> — Keep a shadow/reporting table in sync without changing Apriso processes</li>
<li><strong>Constraint enforcement</strong> — Enforce data integrity rules that Apriso's business logic layer does not cover</li>
<li><strong>Legacy integration</strong> — Notify an external system (via a staging table) when Apriso data changes</li>
</ul>
<p><strong>Risks and cautions:</strong></p>
<ul>
<li>Triggers fire invisibly — they are not visible in Process Builder and can be very hard to debug</li>
<li>They add latency to every INSERT/UPDATE/DELETE on the target table</li>
<li>Recursive or cascading triggers can cause deadlocks on high-volume shop floor tables</li>
<li>Dassault Systemes officially discourages direct table triggers on core Apriso tables — use Apriso Events or Business Rules instead wherever possible</li>
</ul>
<div class="note">If a trigger is required for integration or auditing, always document it in the solution design and test its performance impact under production-volume load.</div>`,
      level: "hard"
    },
    {
      q: "How do you create a multi-level Tree Business Control (TreeView) in Apriso?",
      a: `<p>A <strong>Tree Business Control</strong> in Apriso displays hierarchical data (parent-child relationships) in an expandable tree widget. Setting it up involves configuring both the data source and the control itself in Screen Builder.</p>
<p><strong>Step-by-step setup:</strong></p>
<ul>
<li><strong>Step 1 — Design the data model:</strong> Ensure your database table has a self-referencing parent key, e.g., <code>NodeKey</code> and <code>ParentNodeKey</code> columns</li>
<li><strong>Step 2 — Create a recursive or hierarchical SQL query</strong> that retrieves all levels:</li>
</ul>
<pre>-- Using a recursive CTE to build the tree
WITH TreeCTE AS (
  SELECT NodeKey, NodeName, ParentNodeKey, 0 AS Level
  FROM   TreeTable
  WHERE  ParentNodeKey IS NULL          -- root nodes

  UNION ALL

  SELECT t.NodeKey, t.NodeName, t.ParentNodeKey, tc.Level + 1
  FROM   TreeTable t
  JOIN   TreeCTE tc ON t.ParentNodeKey = tc.NodeKey
)
SELECT * FROM TreeCTE ORDER BY Level, NodeName;</pre>
<ul>
<li><strong>Step 3 — In Screen Builder:</strong> Add a <strong>Tree Control</strong> from the control palette</li>
<li><strong>Step 4 — Bind the collection:</strong> Map the query result collection to the Tree Control's data source property</li>
<li><strong>Step 5 — Configure the node fields:</strong>
  <ul>
    <li><code>NodeIDField</code> → <code>NodeKey</code></li>
    <li><code>ParentNodeIDField</code> → <code>ParentNodeKey</code></li>
    <li><code>NodeTextField</code> → <code>NodeName</code> (label shown in tree)</li>
  </ul>
</li>
<li><strong>Step 6 — Handle node selection:</strong> Wire the <code>OnNodeSelect</code> event to a Business Process that loads child details into a linked form or grid</li>
</ul>
<div class="note">For very deep trees (5+ levels) with thousands of nodes, use lazy loading: only query children of a node when the user expands it, rather than loading the entire tree upfront.</div>`,
      level: "hard"
    },
    {
      q: "How can you automatically create an employee record in Apriso ADC (Automatic Data Collection)?",
      a: `<p>In Apriso, <strong>ADC (Automatic Data Collection)</strong> refers to the automated capture of shop floor events — typically via barcode scanners, RFID, or badge readers. Automatically creating an employee (Personnel) record when a new badge is first scanned involves the following approach:</p>
<p><strong>Design pattern:</strong></p>
<ul>
<li>The ADC entry point is a Business Process triggered by a badge scan or clock-in event</li>
<li>The process first checks whether the scanned employee ID already exists in Apriso</li>
<li>If not found, it calls the <code>CreatePersonnel</code> GBO to auto-create the employee record</li>
</ul>
<p><strong>Pseudocode in Process Builder:</strong></p>
<pre>-- 1. Database Operation: Check if employee exists
SELECT PersonnelKey 
FROM   PR_PERSONNEL
WHERE  EmployeeID = :ScannedBadgeID

-- 2. Scripting Operation: Branch on result
If Collection.Count = 0 Then
  ' Employee not found — create automatically
  FlexNet.SetParameter "EmployeeID",  ScannedBadgeID
  FlexNet.SetParameter "FirstName",   "Auto"
  FlexNet.SetParameter "LastName",    "Created"
  FlexNet.SetParameter "Status",      "Active"
  ' Call CreatePersonnel GBO
  Call FlexNet.GetObject("Personnel").Create()
End If</pre>
<p><strong>Key configuration points:</strong></p>
<ul>
<li>The auto-created employee is assigned a default <strong>Role</strong> and <strong>Skill set</strong> defined in a configuration parameter</li>
<li>A notification or approval workflow can be triggered post-creation for supervisor review</li>
<li>Integration with HR/SAP system can populate full name, department, and cost center via a synchronous call during the same process</li>
<li>All auto-created records are flagged with a <code>Source = 'ADC_AUTO'</code> custom attribute for audit purposes</li>
</ul>
<div class="note">Ensure that auto-creation is protected by a role-based permission check so that unknown badge IDs cannot arbitrarily inject employee records into production data.</div>`,
      level: "hard"
    },
    {
      q: "What are Sub-Operation Business Components and Table Components in Apriso?",
      a: `<p>These are two specialized types of reusable components available in Apriso's Business Component (GBO) framework:</p>
<p><strong>Sub-Operation Business Component:</strong></p>
<ul>
<li>A Business Component designed to be embedded <em>inside</em> another Business Process as a reusable operation step</li>
<li>It encapsulates a discrete piece of logic (e.g., validate lot status, calculate yield, trigger SAP call) that is needed in multiple parent processes</li>
<li>Exposed as an Operation Type in Process Builder — dragged onto the canvas just like a built-in operation</li>
<li>Has its own defined Input/Output parameters and can raise errors that the parent process handles</li>
<li>Best practice: use Sub-Operation BCs for cross-cutting concerns like logging, validation, and integration handshakes</li>
</ul>
<p><strong>Table Component:</strong></p>
<ul>
<li>A Business Component that is bound directly to a <strong>database table or view</strong>, auto-generating standard CRUD operations (Create, Read, Update, Delete)</li>
<li>Acts as a data-access object (DAO) layer — abstracts raw SQL from the process developer</li>
<li>Provides typed fields that map to table columns, with built-in parameter mapping</li>
<li>Can be used directly in Process Builder via a <code>Table Component Operation</code></li>
<li>Reduces boilerplate: instead of writing SELECT/INSERT SQL manually, the developer configures the Table Component once and calls its methods</li>
</ul>
<table>
<tr><th>Feature</th><th>Sub-Operation BC</th><th>Table Component</th></tr>
<tr><td>Purpose</td><td>Reusable process logic</td><td>Reusable data access</td></tr>
<tr><td>Contains</td><td>Script + operations</td><td>Table mapping + CRUD methods</td></tr>
<tr><td>Called via</td><td>Operation node in process flow</td><td>Table Component Operation node</td></tr>
<tr><td>Typical use</td><td>Validation, integration, calculation</td><td>Read/write to a specific DB table</td></tr>
</table>`,
      level: "hard"
    },
    {
      q: "In a paginated Apriso grid with 50 pages of 10 records each, selected records on page 1 appeared deselected after navigating to page 2 and back. How do you fix this?",
      a: `<p>This is a classic <strong>client-side selection state loss</strong> problem that occurs when the grid re-renders its DOM on page navigation, discarding in-memory selection state. The fix depends on how the grid is implemented.</p>
<p><strong>Root cause:</strong> On page change, the grid destroys and re-renders the visible rows. If selection state is stored only in the DOM (checked checkboxes), it is lost when those rows are no longer rendered.</p>
<p><strong>Fix 1 — Maintain a server-side or JavaScript selection store:</strong></p>
<pre>// Maintain a persistent selection map outside the grid
var selectedKeys = {};   // { rowKey: rowData }

// On checkbox change
grid.on('selectionChanged', function(row, isSelected) {
  if (isSelected) {
    selectedKeys[row.Key] = row;
  } else {
    delete selectedKeys[row.Key];
  }
});

// On page render, restore selections
grid.on('afterPageLoad', function(rows) {
  rows.forEach(function(row) {
    if (selectedKeys[row.Key]) {
      grid.selectRow(row.Key, true);  // re-check the box
    }
  });
});</pre>
<p><strong>Fix 2 — Use the GEF grid's built-in persistent selection property:</strong></p>
<ul>
<li>In the Grid Control properties panel, enable <strong>"Persist Selection Across Pages"</strong> (available in Apriso 2019+)</li>
<li>Set <code>SelectionMode = MultiRow</code> and <code>PersistSelection = true</code></li>
<li>The grid internally tracks selected keys in a hidden collection, not in the DOM</li>
</ul>
<p><strong>Fix 3 — Pass selection state via a hidden container field:</strong></p>
<ul>
<li>On each selection change, serialize the selected keys into a hidden process parameter (comma-separated string or JSON)</li>
<li>On page navigation, read this parameter and re-apply selections after the new page renders</li>
</ul>
<div class="note">The cleanest long-term solution is Fix 2 (platform-native). Fix 1 is used in custom HTML screens where GEF's built-in persistence is unavailable.</div>`,
      level: "hard"
    },
    {
      q: "In a 5-step Apriso process, a session variable is created in Step 5. Can it be reused in Step 2?",
      a: `<p><strong>Short answer: No</strong> — not in a standard forward-flowing process execution, but it depends on the process design.</p>
<p><strong>Why the default answer is No:</strong></p>
<ul>
<li>In Apriso, a Business Process executes steps sequentially (Step 1 → 2 → 3 → 4 → 5)</li>
<li>A session variable created in Step 5 does not exist yet when Step 2 executes during the first pass</li>
<li>Session variables (stored via <code>FlexNet.Session.SetValue()</code>) are written into the user session at the point of execution — they cannot be read before they are written</li>
</ul>
<p><strong>When it CAN work — loop-back or multi-pass designs:</strong></p>
<ul>
<li>If the process contains a loop (Step 5 transitions back to Step 2 based on a condition), the variable set in Step 5 <em>will</em> be available when Step 2 executes on the second iteration</li>
<li>If the session variable was set in a <em>previous execution</em> of the same or a different process in the same user session, Step 2 can read it using <code>FlexNet.Session.GetValue()</code></li>
</ul>
<p><strong>Session vs Process parameters — key distinction:</strong></p>
<table>
<tr><th>Type</th><th>Scope</th><th>Lifetime</th></tr>
<tr><td>Process Parameter</td><td>Current process only</td><td>Lives and dies with the process execution</td></tr>
<tr><td>Session Variable</td><td>Entire user session</td><td>Persists until session ends or explicitly cleared</td></tr>
</table>
<pre>-- Step 5: Write session variable
FlexNet.Session.SetValue "ApprovedQty", 150

-- Step 2 (second pass / next process): Read it
Dim qty
qty = FlexNet.Session.GetValue("ApprovedQty")</pre>
<div class="note">If you need to share data created late in a process with an earlier step, redesign the flow to collect that data upfront, use a loop, or pass it via a parent process parameter rather than relying on session variables.</div>`,
      level: "hard"
    },
    {
      q: "What are the different types of OPC, and how is OPC used in Apriso MES?",
      a: `<p><strong>OPC (OLE for Process Control)</strong> is a set of industrial communication standards that enable data exchange between PLCs, SCADA systems, and software applications like Apriso MES.</p>
<p><strong>OPC Types:</strong></p>
<table>
<tr><th>OPC Standard</th><th>Full Name</th><th>Purpose</th></tr>
<tr><td>OPC DA</td><td>Data Access</td><td>Real-time read/write of current tag values from PLCs and SCADA</td></tr>
<tr><td>OPC HDA</td><td>Historical Data Access</td><td>Query historical time-series data from a historian (e.g., OSIsoft PI)</td></tr>
<tr><td>OPC AE</td><td>Alarms &amp; Events</td><td>Subscribe to machine alarms, events, and condition changes</td></tr>
<tr><td>OPC UA</td><td>Unified Architecture</td><td>Modern, platform-independent, secure successor to all classic OPC specs. Supports TCP, HTTPS, pub/sub</td></tr>
<tr><td>OPC XML-DA</td><td>XML Data Access</td><td>Web-service-based version of OPC DA using SOAP/XML</td></tr>
<tr><td>OPC DX</td><td>Data eXchange</td><td>Server-to-server data exchange between OPC servers</td></tr>
</table>
<p><strong>How OPC is used in Apriso:</strong></p>
<ul>
<li>Apriso connects to an <strong>OPC Server</strong> (e.g., Kepware, Matrikon, Ignition) via its <strong>Integration Framework</strong></li>
<li>Machine counters, temperatures, cycle times, and status flags are read from PLCs via <strong>OPC DA / UA</strong> tags</li>
<li>Apriso uses these values to auto-start/complete operations, calculate OEE, and trigger quality checks</li>
<li><strong>OPC UA</strong> is the preferred standard for new Apriso integrations — it eliminates DCOM security issues and works across operating systems</li>
<li>OPC AE is used to capture machine downtime events and feed them into Apriso's Equipment Management module</li>
</ul>
<div class="note">OPC UA is the Industry 4.0 standard of choice. If your project involves connecting Apriso to modern smart machines or IoT edge devices, insist on OPC UA over the legacy DCOM-based OPC DA.</div>`,
      level: "medium"
    },
    {
      q: "What data and configurations are required to prepare Master Data in Apriso?",
      a: `<p>Master Data in Apriso is the foundational configuration that must be in place before any production execution can occur. It is typically set up during the implementation phase.</p>
<p><strong>Core Master Data categories and their required fields:</strong></p>
<table>
<tr><th>Category</th><th>Key Fields Required</th></tr>
<tr><td>Facility / Plant</td><td>Facility Code, Name, Time Zone, Address, Parent Facility (for multi-site)</td></tr>
<tr><td>Work Center / Resource</td><td>Resource Code, Name, Type (Machine/Labor), Capacity, Facility linkage</td></tr>
<tr><td>Equipment</td><td>Equipment ID, Name, Type, Status, Assigned Facility, Calibration interval</td></tr>
<tr><td>Personnel / Employee</td><td>Employee ID, Name, Role, Skills/Certifications, Shift assignment, Facility</td></tr>
<tr><td>Material / Part</td><td>Part Number, Description, UOM, Material Type (Raw/WIP/FG), Lot/Serial tracking flag</td></tr>
<tr><td>Bill of Materials (BOM)</td><td>Parent part, Component parts, Quantity per, Scrap factor, Effective dates</td></tr>
<tr><td>Bill of Process (BOP)</td><td>Routing steps, Operation sequence, Standard time, Resource requirements per step</td></tr>
<tr><td>Quality Plan</td><td>Inspection steps, Characteristics, Tolerance limits, Sample size, Linked BOP</td></tr>
<tr><td>Shifts / Calendar</td><td>Shift codes, Start/End times, Days of operation, Holidays, Facility linkage</td></tr>
<tr><td>Roles &amp; Permissions</td><td>Role names, Screen/process access rights, Facility scope</td></tr>
</table>
<p><strong>Preparation checklist before loading Master Data:</strong></p>
<ul>
<li>Obtain the data from ERP (SAP MM, PP modules) or from the customer's data team in Excel/CSV format</li>
<li>Validate data quality: no duplicates, mandatory fields populated, correct UOM codes</li>
<li>Define data load sequence — Facility must exist before Equipment; Material before BOM</li>
<li>Use Apriso's <strong>Master Data Import</strong> tool or build a custom import process for bulk loading</li>
<li>Perform a data reconciliation check after load: count records in Apriso vs source file</li>
</ul>
<div class="note">Always load and validate Master Data in DEV first, then promote to QA for UAT sign-off, before loading into Production. A single missing Part Number or BOP routing can block an entire work order from executing.</div>`,
      level: "medium"
    },
    {
      q: "What is the difference between a Header (Process Header) and an HTML Header in Apriso?",
      a: `<p>The term "Header" has two very different meanings in the Apriso context — one at the process/data level and one at the UI/screen level.</p>
<table>
<tr><th>Aspect</th><th>Process / Record Header</th><th>HTML Screen Header</th></tr>
<tr><td>Definition</td><td>The top-level data record of a business object — e.g., the Work Order Header (WO_WORKORDER table row) which holds summary-level fields like WO number, status, planned quantity, and dates</td><td>The visual banner section at the top of an Apriso HTML screen, typically showing context information (WO number, part, facility) that is fixed while the rest of the screen scrolls</td></tr>
<tr><td>Location</td><td>Database / data model layer</td><td>Screen Builder / HTML UI layer</td></tr>
<tr><td>Purpose</td><td>Carries the key identifiers and summary attributes of a document; child records (operations, lots, components) reference it via its key</td><td>Provides the operator with persistent context so they always know which WO or lot they are working on, regardless of which tab or section is active</td></tr>
<tr><td>Example fields</td><td>WorkOrderKey, WorkOrderNo, Status, PlannedQty, ScheduledStart, FacilityKey</td><td>HTML <code>&lt;div class="header"&gt;</code> with labels bound to <code>Container.WorkOrderNo</code>, <code>Container.PartNo</code></td></tr>
<tr><td>Modified by</td><td>Business Processes (SQL UPDATE on WO_WORKORDER)</td><td>CSS and JavaScript in the screen definition</td></tr>
</table>
<p><strong>Example — HTML screen header markup in Apriso:</strong></p>
<pre>&lt;div class="screen-header"&gt;
  &lt;span class="label"&gt;Work Order:&lt;/span&gt;
  &lt;span gef:bind="Container.WorkOrderNo"&gt;&lt;/span&gt;

  &lt;span class="label"&gt;Part:&lt;/span&gt;
  &lt;span gef:bind="Container.PartNo"&gt;&lt;/span&gt;

  &lt;span class="label"&gt;Status:&lt;/span&gt;
  &lt;span gef:bind="Container.Status"&gt;&lt;/span&gt;
&lt;/div&gt;</pre>
<div class="note">In a design review, always clarify which type of "header" is being discussed. Confusing the data header (database record) with the screen header (UI component) is a common source of miscommunication between developers and functional consultants.</div>`,
      level: "medium"
    }
  ],
  10: [
    {
      q: "What are the types of Views (Screen Types) available in Apriso?",
      a: `<p>In Apriso, a <strong>View</strong> is the UI layer presented to the user during process execution. The platform supports several distinct view types:</p>
<table>
<tr><th>View Type</th><th>Description</th><th>Typical Use</th></tr>
<tr><td><strong>Form View</strong></td><td>Standard HTML form layout with fields, labels, and buttons</td><td>Data entry — work order creation, lot registration</td></tr>
<tr><td><strong>Grid View</strong></td><td>Tabular display of multiple records with selection and sorting</td><td>Order lists, inventory search results, inspection records</td></tr>
<tr><td><strong>Report View</strong></td><td>Read-only formatted output, printable</td><td>Work order traveller, quality certificate, packing slip</td></tr>
<tr><td><strong>Tree View</strong></td><td>Hierarchical parent-child expandable nodes</td><td>BOM explosion, facility hierarchy, genealogy tree</td></tr>
<tr><td><strong>Dashboard View</strong></td><td>Composite screen with charts, KPIs, and grids</td><td>OEE dashboard, quality metrics, production summary</td></tr>
<tr><td><strong>IJH View (Inline Job Handling)</strong></td><td>Operator-facing step-by-step execution screen</td><td>Shop floor work order execution, inspection steps</td></tr>
<tr><td><strong>HTML (Custom) View</strong></td><td>Fully custom HTML5/CSS/JS screen defined by the developer</td><td>Complex UX requirements, AJAX-driven screens, custom layouts</td></tr>
<tr><td><strong>Message View</strong></td><td>Simple popup/banner displaying a text message</td><td>Confirmation dialogs, warnings, success notifications</td></tr>
<tr><td><strong>Empty View</strong></td><td>No UI rendered — used for background/silent process steps</td><td>Background data operations that need no user interaction</td></tr>
</table>
<div class="note">In modern Apriso implementations (2016+), HTML Custom Views have become the most common type because they allow full control over layout, styling, and client-side behaviour using standard web technologies.</div>`,
      level: "medium"
    },
    {
      q: "What are the types of Standard Operations in Apriso Process Builder?",
      a: `<p>Standard Operations are the built-in operation nodes available in Process Builder that developers drag onto the process canvas. Each type performs a specific system-level action:</p>
<table>
<tr><th>Operation Type</th><th>Purpose</th></tr>
<tr><td><strong>View Operation</strong></td><td>Renders a screen (form, grid, message, report) to the user</td></tr>
<tr><td><strong>Database Operation</strong></td><td>Executes SQL — SELECT, INSERT, UPDATE, DELETE, or Stored Procedure</td></tr>
<tr><td><strong>Scripting Operation</strong></td><td>Contains VBScript/JScript for custom business logic and calculations</td></tr>
<tr><td><strong>Sub-Process Operation</strong></td><td>Calls another Business Process (reusability and modularisation)</td></tr>
<tr><td><strong>Integration Operation</strong></td><td>Calls an external web service (SOAP/REST) or message queue endpoint</td></tr>
<tr><td><strong>Event Operation</strong></td><td>Raises or handles a FlexNet platform event (e.g. work order status change)</td></tr>
<tr><td><strong>Decision Operation</strong></td><td>Evaluates a condition and routes the flow to different transitions</td></tr>
<tr><td><strong>Mail Operation</strong></td><td>Sends an email notification from inside the process flow</td></tr>
<tr><td><strong>Report Operation</strong></td><td>Generates a report document (PDF, Excel) from a report definition</td></tr>
<tr><td><strong>Transaction Operation</strong></td><td>Defines transaction boundaries — begin, commit, or rollback</td></tr>
<tr><td><strong>Table Component Operation</strong></td><td>Calls a configured Table Business Component for CRUD operations</td></tr>
<tr><td><strong>GBO Operation</strong></td><td>Calls a Global Business Object (standard Apriso API method)</td></tr>
</table>
<div class="note">The most frequently used in day-to-day development are View, Database, Scripting, Sub-Process, and GBO operations. Integration and Event operations are used primarily in interface and automation scenarios.</div>`,
      level: "medium"
    },
    {
      q: "What is OnInitialize and OnLoad in Apriso screens? What is the difference between them?",
      a: `<p>Both are JavaScript event hooks that run automatically when an Apriso HTML screen loads, but they fire at different points in the page lifecycle:</p>
<table>
<tr><th>Aspect</th><th>OnInitialize</th><th>OnLoad</th></tr>
<tr><td><strong>When it fires</strong></td><td>Before the screen DOM and controls are fully rendered — runs during screen initialisation</td><td>After the complete screen DOM has been rendered and all controls are ready</td></tr>
<tr><td><strong>What is available</strong></td><td>Container parameters and session data, but most UI controls (grids, dropdowns) are not yet in the DOM</td><td>Full DOM — all controls, grids, input fields are accessible and can be manipulated</td></tr>
<tr><td><strong>Typical use</strong></td><td>Set default parameter values, configure control visibility flags, prepare data before rendering</td><td>Populate dropdowns with dynamic data, set default field values in controls, apply conditional formatting, trigger AJAX calls</td></tr>
<tr><td><strong>Control access</strong></td><td>Unsafe — controls may not exist yet</td><td>Safe — all controls are guaranteed to exist</td></tr>
<tr><td><strong>Equivalent in web</strong></td><td>Similar to <code>DOMContentLoading</code> (early lifecycle)</td><td>Similar to <code>window.onload</code> / jQuery <code>$(document).ready()</code></td></tr>
</table>
<pre>// OnInitialize — set a default value before DOM renders
function OnInitialize() {
    GEF.Containers["MainContainer"]["Status"].Value = "Active";
}

// OnLoad — manipulate controls after DOM is ready
function OnLoad() {
    // Safe to access grid, dropdowns, etc.
    var grid = GEF.Controls.getControl("WorkOrderGrid");
    grid.refresh();

    // Set a field value
    document.getElementById("txtFacility").value = "Plant01";
}</pre>
<div class="note">A very common bug is trying to populate a grid or dropdown inside <code>OnInitialize</code> — the control does not exist yet and the call silently fails. Always use <code>OnLoad</code> for anything that touches the DOM.</div>`,
      level: "medium"
    },
    {
      q: "What are the types of Business Controls in Apriso? Which ones have you used?",
      a: `<p>Business Controls are pre-built UI components available in Apriso's Screen Builder (and HTML screens) that provide specific UI behaviours without custom coding:</p>
<table>
<tr><th>Business Control</th><th>Description</th></tr>
<tr><td><strong>Grid / Selection Grid 2.0</strong></td><td>Tabular data display with sorting, filtering, pagination, and multi-select</td></tr>
<tr><td><strong>ComboBox (Dropdown)</strong></td><td>Single-select dropdown bound to a static list or a database query</td></tr>
<tr><td><strong>Tree Control</strong></td><td>Expandable hierarchical node tree</td></tr>
<tr><td><strong>Chart Control</strong></td><td>Bar, line, pie, and gauge charts bound to process data</td></tr>
<tr><td><strong>Calendar / Date Picker</strong></td><td>Date/time input with a popup calendar selector</td></tr>
<tr><td><strong>File Upload Control</strong></td><td>Attach documents, images, or files to a record</td></tr>
<tr><td><strong>Signature Control</strong></td><td>Electronic signature capture for 21 CFR Part 11 compliance</td></tr>
<tr><td><strong>Barcode Control</strong></td><td>Renders or reads barcodes (Code 128, QR, DataMatrix)</td></tr>
<tr><td><strong>Tab Control</strong></td><td>Multi-tab layout to organise form sections</td></tr>
<tr><td><strong>FlexParts Control</strong></td><td>Embeds another FlexPart (sub-screen) inside the current screen</td></tr>
<tr><td><strong>Gauge Visualization</strong></td><td>Dial/gauge for KPIs like OEE, yield rate</td></tr>
<tr><td><strong>Checklist Control</strong></td><td>Step-by-step checklist with pass/fail per item</td></tr>
<tr><td><strong>Image Control</strong></td><td>Display product images, diagrams, or work instructions</td></tr>
<tr><td><strong>Map Control</strong></td><td>Geographic map for facility/resource locations</td></tr>
</table>
<p><strong>Commonly used in production projects:</strong></p>
<ul>
<li><strong>Selection Grid 2.0</strong> — primary control for work order lists, lot lists, inspection results</li>
<li><strong>ComboBox</strong> — facility selection, status filter, disposition type</li>
<li><strong>Tree Control</strong> — BOM/BOP hierarchy, facility org chart</li>
<li><strong>Date Picker</strong> — planned start/end date entry on work orders</li>
<li><strong>File Upload</strong> — attaching quality documents and NCR evidence</li>
<li><strong>Signature Control</strong> — electronic sign-off in regulated industries</li>
</ul>`,
      level: "medium"
    },
    {
      q: "How do you color a grid in Apriso? What are the available approaches?",
      a: `<p>Grid cell and row coloring in Apriso is achieved through four main techniques. The right choice depends on the grid type (jqGrid vs Selection Grid 2.0) and where the color logic belongs:</p>
<p><strong>1. Conditional formatting using <code>cellattr</code> (jqGrid — most common in HTML FI screens):</strong></p>
<pre>{ name: "Status", label: "Status",
  cellattr: function(rowId, cellValue) {
    if (cellValue === "FAIL")
      return 'style="background:#FCEBEB; color:#791F1F; font-weight:500;"';
    if (cellValue === "PASS")
      return 'style="background:#EAF3DE; color:#27500A; font-weight:500;"';
    return '';
  }
}</pre>
<p><strong>2. Custom formatter — inject colored HTML badge inside the cell:</strong></p>
<pre>formatter: function(cellValue, opts, rowObj) {
    var bg = cellValue === "PASS" ? "#EAF3DE" : "#FCEBEB";
    var fg = cellValue === "PASS" ? "#27500A" : "#791F1F";
    return '&lt;span style="background:'+bg+';color:'+fg+
           ';padding:2px 8px;border-radius:4px;"&gt;'+cellValue+'&lt;/span&gt;';
}</pre>
<p><strong>3. CSS class rules (Selection Grid 2.0 / ag-Grid, Apriso 2019+):</strong></p>
<pre>// CSS classes defined in your screen stylesheet
.cell-pass { background: #EAF3DE; color: #27500A; }
.cell-fail { background: #FCEBEB; color: #791F1F; }

// Column definition
cellClassRules: {
  "cell-pass": params =&gt; params.value === "PASS",
  "cell-fail": params =&gt; params.value === "FAIL"
}</pre>
<p><strong>4. Backend-driven logic — return a color code from the SQL query itself:</strong></p>
<pre>SELECT WorkOrderNo, Status,
  CASE Status
    WHEN 'FAIL' THEN '#FCEBEB'
    WHEN 'PASS' THEN '#EAF3DE'
    ELSE '#FFFFFF'
  END AS RowColor
FROM WO_WORKORDER</pre>
<p>Then in JS: <code>rowattr: function(rd) { return 'style="background:' + rd.RowColor + ';"'; }</code></p>
<div class="note">For entire row coloring (not just one cell), use jqGrid's <code>rowattr</code> instead of <code>cellattr</code>. The approach is identical — return an attribute string — but it applies to the <code>&lt;tr&gt;</code> element instead of a <code>&lt;td&gt;</code>.</div>`,
      level: "medium"
    },
    {
      q: "How do you implement sorting in an Apriso grid?",
      a: `<p>Sorting in Apriso grids can be applied at three levels: user-driven UI sorting, query-level default sorting, and grid configuration sorting.</p>
<p><strong>1. UI sorting (user clicks column headers):</strong></p>
<ul>
<li>jqGrid enables column header click-to-sort by default when <code>sortable: true</code> is set on the column definition</li>
<li>The grid handles client-side sorting automatically when all data is loaded at once (<code>loadonce: true</code>)</li>
<li>For server-side sorting (large datasets), the grid sends <code>sidx</code> (sort column) and <code>sord</code> (asc/desc) parameters to the data source, and the query re-executes with an ORDER BY</li>
</ul>
<pre>// jqGrid column definition — enable sorting
{ name: "PlannedDate", label: "Planned Date",
  sortable: true, sorttype: "date" }

// Initial sort settings on the grid
sortname:  "PlannedDate",
sortorder: "desc"</pre>
<p><strong>2. Query-based sorting — ORDER BY in the Database Operation SQL:</strong></p>
<pre>SELECT WorkOrderNo, PartNo, PlannedDate, Status
FROM   WO_WORKORDER
WHERE  FacilityKey = :FacilityKey
ORDER  BY PlannedDate DESC, WorkOrderNo ASC</pre>
<p><strong>3. Default sort in grid configuration (Selection Grid 2.0):</strong></p>
<pre>// ag-Grid / Selection Grid 2.0 column definition
{ field: "PlannedDate", headerName: "Planned Date",
  sort: "desc",           // default sort direction
  sortIndex: 0 }          // primary sort column</pre>
<p><strong>4. Multi-column sorting:</strong></p>
<pre>// jqGrid — multiSort property
multiSort: true

// SQL multi-column ORDER BY
ORDER BY Status ASC, PlannedDate DESC, WorkOrderNo ASC</pre>
<div class="note">For grids displaying more than a few hundred rows, always sort at the database level (ORDER BY in SQL) rather than relying on client-side sorting. Client-side sorting only operates on the currently loaded page, not the full dataset.</div>`,
      level: "medium"
    },
    {
      q: "How do you apply filters in an Apriso grid?",
      a: `<p>Filtering in Apriso grids can be implemented in multiple ways depending on whether you want inline grid filtering or external parameter-driven filtering:</p>
<p><strong>1. Built-in jqGrid toolbar filter (inline):</strong></p>
<pre>// Enable the filter toolbar
jQuery("#myGrid").jqGrid("filterToolbar", {
    stringResult: true,
    searchOnEnter: true,
    defaultSearch: "cn"   // "cn" = contains
});

// Or add a search button to trigger it
jQuery("#myGrid").jqGrid("searchGrid", {
    multipleSearch: true,
    showQuery: true
});</pre>
<p><strong>2. External filter inputs above the grid (custom):</strong></p>
<pre>// HTML: input box + button above the grid
&lt;input type="text" id="txtPartNo" placeholder="Part No..." /&gt;
&lt;button onclick="applyFilter()"&gt;Search&lt;/button&gt;

// JS: reload grid with filter parameter
function applyFilter() {
    var partNo = document.getElementById("txtPartNo").value;
    jQuery("#myGrid").jqGrid("setGridParam", {
        postData: { PartNo: partNo }
    }).trigger("reloadGrid");
}</pre>
<p><strong>3. Server-side filtering — WHERE clause in the Database Operation:</strong></p>
<pre>SELECT WorkOrderNo, PartNo, Status, PlannedDate
FROM   WO_WORKORDER
WHERE  (:PartNo = '' OR PartNo LIKE '%' + :PartNo + '%')
AND    (:Status = '' OR Status = :Status)
ORDER  BY PlannedDate DESC</pre>
<p><strong>4. Client-side filtering on already-loaded data:</strong></p>
<pre>// jqGrid client-side filter after loadonce: true
jQuery("#myGrid").jqGrid("setGridParam", {
    search: true,
    postData: {
        filters: JSON.stringify({
            groupOp: "AND",
            rules: [{ field: "Status", op: "eq", data: "Active" }]
        })
    }
}).trigger("reloadGrid");</pre>
<div class="note">For production grids with thousands of records, always filter on the server side (WHERE clause) — never load all records to the client and filter in memory. This is a critical performance consideration.</div>`,
      level: "medium"
    },
    {
      q: "How do you add checkboxes to an Apriso grid?",
      a: `<p>Checkboxes in Apriso grids serve two purposes: row selection (multi-select) and editable boolean data columns. Both are configured differently.</p>
<p><strong>1. Row selection checkbox column (jqGrid):</strong></p>
<pre>jQuery("#myGrid").jqGrid({
    multiselect: true,          // adds checkbox column automatically
    multiboxonly: true,         // checkbox ONLY triggers selection (not row click)

    onSelectRow: function(rowId, status) {
        console.log("Row " + rowId + " selected: " + status);
    },

    onSelectAll: function(rowIds, status) {
        console.log("All rows selected: " + status);
    }
});

// Get all selected row IDs
var selected = jQuery("#myGrid").jqGrid("getGridParam", "selarrrow");
console.log(selected); // ["row1", "row2", ...]</pre>
<p><strong>2. Editable checkbox column (boolean data field):</strong></p>
<pre>colModel: [{
    name:      "IsApproved",
    label:     "Approved",
    formatter: "checkbox",          // renders as checkbox
    formatoptions: { disabled: false },  // false = user can click it
    editable:  true,
    edittype:  "checkbox",
    editoptions: { value: "Yes:No" }    // checked:unchecked values
}]</pre>
<p><strong>3. Read the checkbox value in JavaScript:</strong></p>
<pre>// Get checkbox state for a specific cell
var rowData = jQuery("#myGrid").jqGrid("getRowData", rowId);
var isApproved = rowData.IsApproved; // "Yes" or "No"

// Or for the selected rows
jQuery("#myGrid").jqGrid("getGridParam", "selarrrow").forEach(function(id) {
    var row = jQuery("#myGrid").jqGrid("getRowData", id);
    // process each selected row
});</pre>
<p><strong>4. Selection Grid 2.0 (ag-Grid) checkbox:</strong></p>
<pre>// Column definition
{ headerCheckboxSelection: true,   // select-all checkbox in header
  checkboxSelection: true,         // per-row checkbox
  field: "IsSelected",
  width: 50 }</pre>
<div class="note">When using <code>multiselect: true</code>, the grid automatically adds a checkbox column as the first column. Do not manually add a checkbox column on top of it — you will get duplicate checkbox columns.</div>`,
      level: "medium"
    },
    {
      q: "What are the types of Business Components in Apriso (excluding Table Update, Delete, and Insert)? Which have you used in Production or other modules?",
      a: `<p>Business Components (also called GBOs — Global Business Objects) are the standard Apriso API layer. They encapsulate business logic for all platform objects. Key types beyond simple table operations:</p>
<table>
<tr><th>Business Component</th><th>Module</th><th>Description</th></tr>
<tr><td><code>WorkOrder.Create</code></td><td>Production</td><td>Creates a new work order with full routing and BOM resolution</td></tr>
<tr><td><code>WorkOrder.Start / Complete / Close</code></td><td>Production</td><td>Lifecycle state transitions for a work order</td></tr>
<tr><td><code>Lot.Create / Split / Merge</code></td><td>Inventory</td><td>Creates a new lot or splits/merges existing lots</td></tr>
<tr><td><code>SerializedUnit.Create</code></td><td>Inventory</td><td>Creates a serialized unit record</td></tr>
<tr><td><code>GoodsMovement.Issue / Receive</code></td><td>Inventory / WH</td><td>Posts material consumption or receipt against a work order</td></tr>
<tr><td><code>InspectionPlan.Execute</code></td><td>Quality</td><td>Runs a quality inspection plan and records results</td></tr>
<tr><td><code>NCR.Create / Disposition</code></td><td>Quality</td><td>Creates a Non-Conformance Report and assigns disposition</td></tr>
<tr><td><code>Personnel.GetCurrent</code></td><td>Labor</td><td>Returns the currently logged-in operator's details</td></tr>
<tr><td><code>Equipment.GetStatus</code></td><td>Equipment</td><td>Returns current status and availability of a machine</td></tr>
<tr><td><code>Genealogy.GetTree</code></td><td>Traceability</td><td>Returns the full forward/backward genealogy tree for a serial/lot</td></tr>
<tr><td><code>Determination.Resolve</code></td><td>Platform</td><td>Evaluates classic or advanced determination rules at runtime</td></tr>
<tr><td><code>Session.GetValue / SetValue</code></td><td>Platform</td><td>Read/write session variables shared across process steps</td></tr>
<tr><td><code>Message.Send</code></td><td>Platform</td><td>Sends an in-system message or email notification</td></tr>
</table>
<p><strong>Used in production projects:</strong></p>
<ul>
<li><strong>Production module:</strong> <code>WorkOrder.Create</code>, <code>WorkOrder.Start</code>, <code>WorkOrder.Complete</code>, <code>GoodsMovement.Issue</code></li>
<li><strong>Quality module:</strong> <code>InspectionPlan.Execute</code>, <code>NCR.Create</code>, <code>NCR.Disposition</code></li>
<li><strong>Inventory module:</strong> <code>Lot.Create</code>, <code>Lot.Split</code>, <code>GoodsMovement.Receive</code></li>
<li><strong>Platform:</strong> <code>Session.GetValue</code>, <code>Session.SetValue</code>, <code>Determination.Resolve</code></li>
</ul>`,
      level: "hard"
    },
    {
      q: "What are the types of Functions available in Apriso (e.g., SqlQuery, UserFormula)? Explain each.",
      a: `<p>Apriso provides several types of configurable function objects that can be called from Business Processes and screens to encapsulate reusable logic:</p>
<table>
<tr><th>Function Type</th><th>Description</th><th>Use Case</th></tr>
<tr><td><strong>SqlQuery Function</strong></td><td>A named, reusable SQL SELECT query stored as a platform object. Accepts input parameters and returns a result set (collection)</td><td>Shared lookup queries — e.g., "Get all active work orders for a facility" — called from multiple processes without duplicating SQL</td></tr>
<tr><td><strong>UserFormula Function</strong></td><td>A mathematical or string formula defined using a formula editor. Supports arithmetic, string, and date operations. No SQL involved</td><td>Calculate yield percentage, compute remaining quantity, format a display string combining multiple fields</td></tr>
<tr><td><strong>Scripting Function</strong></td><td>A reusable block of VBScript/JScript registered as a named function, callable from any scripting operation</td><td>Complex conditional logic, date parsing, recursive calculations shared across processes</td></tr>
<tr><td><strong>Web Service Function</strong></td><td>A configured call to an external REST or SOAP endpoint, wrapped as a named function object</td><td>Call SAP BAPI, trigger an IoT device command, invoke an external validation API</td></tr>
<tr><td><strong>Determination Function</strong></td><td>A named determination rule set (Classic or Advanced) that resolves which process or operation to call at runtime based on input attributes</td><td>Route a work order to the correct inspection process based on part family and facility</td></tr>
<tr><td><strong>Report Function</strong></td><td>A named report definition (Crystal Reports, SSRS, or Apriso native) that can be triggered from a process</td><td>Generate a work order traveller PDF, print a quality certificate</td></tr>
</table>
<p><strong>How SqlQuery is called from a Scripting Operation:</strong></p>
<pre>Dim result
result = FlexNet.ExecuteFunction("GetActiveWorkOrders", _
    Array("FacilityKey", facilityKey))
' result is a Collection of rows</pre>
<div class="note"><code>SqlQuery</code> and <code>UserFormula</code> functions are the most commonly used. They promote the DRY (Don't Repeat Yourself) principle — define the logic once, reuse it everywhere without copy-pasting SQL or formula code.</div>`,
      level: "hard"
    },
    {
      q: "What are the types of Variables in Apriso? Explain each.",
      a: `<p>Apriso uses variables at different scopes and lifetimes across process execution:</p>
<table>
<tr><th>Variable Type</th><th>Scope</th><th>Lifetime</th><th>How to Use</th></tr>
<tr><td><strong>Process Parameter</strong></td><td>Single Business Process execution</td><td>Lives only for the duration of that process run</td><td>Defined in the process definition; mapped between operations via transitions</td></tr>
<tr><td><strong>Session Variable</strong></td><td>Entire user session (all processes)</td><td>Persists from login until session ends or explicitly cleared</td><td><code>FlexNet.Session.SetValue("Key", value)</code> / <code>GetValue("Key")</code></td></tr>
<tr><td><strong>Local Script Variable</strong></td><td>Single Scripting Operation</td><td>Exists only while that scripting operation executes</td><td>Declared with <code>Dim</code> in VBScript — not accessible outside the operation</td></tr>
<tr><td><strong>Global Configuration Variable</strong></td><td>Entire Apriso installation</td><td>Permanent until changed by an administrator</td><td>Stored in Apriso System Settings / Configuration Parameters; read via <code>FlexNet.GetConfiguration("Key")</code></td></tr>
<tr><td><strong>Container Field</strong></td><td>Current screen / view operation</td><td>Lives for the duration of the view</td><td>Bound to UI controls via <code>gef:bind="Container.FieldName"</code>; readable in JavaScript</td></tr>
<tr><td><strong>Collection (Array Variable)</strong></td><td>Process Parameter (list type)</td><td>Same as process parameter</td><td>Returned by Database Operations as a row collection; iterable in scripting</td></tr>
</table>
<p><strong>Example — Session Variable vs Process Parameter:</strong></p>
<pre>''' Session Variable — survives across process calls
FlexNet.Session.SetValue "SelectedFacility", "Plant01"

''' Process Parameter — passed between operations within one process
FlexNet.SetParameter "WorkOrderNo", "WO-10041"
Dim wo : wo = FlexNet.GetParameter("WorkOrderNo")</pre>
<div class="note">Use Session Variables sparingly — they persist across the entire session and can cause hard-to-debug data leakage if not explicitly cleared. Prefer Process Parameters for data that is only relevant to a single execution flow.</div>`,
      level: "medium"
    },
    {
      q: "How do you create a dropdown (ComboBox) in an Apriso form screen?",
      a: `<p>Dropdowns in Apriso form screens are implemented using the <strong>ComboBox Business Control</strong>. The data source can be static (hardcoded list) or dynamic (database query).</p>
<p><strong>Method 1 — Static list ComboBox in Screen Builder:</strong></p>
<ul>
<li>In Screen Builder, drag a <strong>ComboBox</strong> control onto the form canvas</li>
<li>In the control properties, set <code>DataSource = Static</code></li>
<li>Add items manually: Value / Display Text pairs (e.g., <code>A = Active</code>, <code>I = Inactive</code>)</li>
<li>Bind to a container field: <code>gef:bind="Container.Status"</code></li>
</ul>
<p><strong>Method 2 — Dynamic ComboBox (database-driven) in Screen Builder:</strong></p>
<ul>
<li>Set <code>DataSource = SqlQuery</code> or <code>Database Operation</code></li>
<li>Write the query: <code>SELECT FacilityKey AS Value, FacilityName AS DisplayText FROM FA_FACILITY WHERE Status = 'Active'</code></li>
<li>Map <code>ValueField = FacilityKey</code> and <code>DisplayField = FacilityName</code></li>
</ul>
<p><strong>Method 3 — HTML ComboBox using a <code>&lt;select&gt;</code> element:</strong></p>
<pre>&lt;!-- Static dropdown in HTML screen --&gt;
&lt;select id="ddlStatus" gef:bind="Container.Status"&gt;
    &lt;option value=""&gt;-- Select --&lt;/option&gt;
    &lt;option value="Active"&gt;Active&lt;/option&gt;
    &lt;option value="Hold"&gt;On Hold&lt;/option&gt;
    &lt;option value="Closed"&gt;Closed&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Dynamic dropdown — populate via JavaScript in OnLoad --&gt;
&lt;select id="ddlFacility" gef:bind="Container.FacilityKey"&gt;&lt;/select&gt;</pre>
<pre>// OnLoad — populate dynamic dropdown from a collection parameter
function OnLoad() {
    var coll = GEF.Containers["MainContainer"]["Facilities"].Value;
    var sel  = document.getElementById("ddlFacility");
    sel.innerHTML = '&lt;option value=""&gt;-- Select --&lt;/option&gt;';
    for (var i = 0; i &lt; coll.Count; i++) {
        var opt = document.createElement("option");
        opt.value = coll.Item(i)["FacilityKey"];
        opt.text  = coll.Item(i)["FacilityName"];
        sel.add(opt);
    }
}</pre>
<div class="note">Always include a blank first option (<code>-- Select --</code>) in dropdowns that are mandatory — this forces the user to make an explicit choice rather than accidentally submitting the first item by default.</div>`,
      level: "easy"
    },
    {
      q: "What are the standard M&M (Maintenance & Manufacturing) screens in Apriso that you have used?",
      a: `<p>Standard M&amp;M screens are the out-of-the-box Apriso screens available in the ADC (Apriso Desktop Client) and Portal for configuring and managing the system. These are pre-built by Dassault Systemes and require no custom development:</p>
<table>
<tr><th>Screen Name</th><th>Module</th><th>Purpose</th></tr>
<tr><td><strong>Work Order Management</strong></td><td>Production</td><td>Create, search, release, and manage work orders</td></tr>
<tr><td><strong>Bill of Process (BOP) Editor</strong></td><td>Production</td><td>Define and maintain process routing and operation sequences</td></tr>
<tr><td><strong>Material Master</strong></td><td>Inventory</td><td>Create and maintain part/material definitions</td></tr>
<tr><td><strong>Facility Maintenance</strong></td><td>Admin</td><td>Create and configure plants, work centres, and production lines</td></tr>
<tr><td><strong>Equipment Maintenance</strong></td><td>Equipment</td><td>Manage machine records, status, and calibration schedules</td></tr>
<tr><td><strong>Employee Maintenance</strong></td><td>Labor</td><td>Create and manage personnel records, roles, and skills</td></tr>
<tr><td><strong>Inspection Plan Maintenance</strong></td><td>Quality</td><td>Define quality inspection plans, characteristics, and tolerances</td></tr>
<tr><td><strong>NCR Management</strong></td><td>Quality</td><td>Log, review, and disposition non-conformance reports</td></tr>
<tr><td><strong>Lot / Serial Unit Management</strong></td><td>Inventory</td><td>Track and manage lots and serialised units through the plant</td></tr>
<tr><td><strong>FlexPart Configuration</strong></td><td>Admin</td><td>Create and configure screen and process definitions (FlexParts)</td></tr>
<tr><td><strong>Role &amp; Permission Maintenance</strong></td><td>Security</td><td>Define roles and assign screen/process access rights</td></tr>
<tr><td><strong>Determination Maintenance</strong></td><td>Platform</td><td>Configure classic and advanced determination rules</td></tr>
<tr><td><strong>Parameter Configuration</strong></td><td>Admin</td><td>Manage global system parameters and configuration values</td></tr>
</table>
<p><strong>Most frequently used in project work:</strong> Work Order Management, Material Master, Facility Maintenance, Employee Maintenance, FlexPart Configuration, and Role Maintenance.</p>`,
      level: "easy"
    },
    {
      q: "Have you worked on Master Data in Apriso? If yes, explain some examples and how to configure them.",
      a: `<p>Yes — Master Data setup is typically one of the first activities in any Apriso implementation. It establishes the foundational reference data that all production processes depend on.</p>
<p><strong>Key Master Data objects and configuration steps:</strong></p>
<p><strong>1. Facility (Plant) Setup:</strong></p>
<ul>
<li>Navigate to <strong>Facility Maintenance</strong> screen in ADC</li>
<li>Create a new Facility record: Code, Name, Address, Time Zone, Parent Facility (for hierarchy)</li>
<li>Assign a Calendar (working days and shifts) to the facility</li>
<li>Activate the facility to make it available for production</li>
</ul>
<p><strong>2. Material / Part Setup:</strong></p>
<ul>
<li>Navigate to <strong>Material Master</strong> screen</li>
<li>Enter Part Number, Description, Unit of Measure, Material Type (Raw / WIP / Finished Goods)</li>
<li>Set tracking method: Lot-tracked, Serialised, or Non-tracked</li>
<li>Define shelf life, storage conditions, and ABC classification if required</li>
</ul>
<p><strong>3. Bill of Process (BOP / Routing) Setup:</strong></p>
<ul>
<li>Navigate to <strong>BOP Editor</strong></li>
<li>Create a new BOP for the finished part number</li>
<li>Add operation steps in sequence: Op 10 — Machining, Op 20 — Inspection, Op 30 — Assembly</li>
<li>For each step, assign: Work Centre / Resource, Standard Time, Required Skills, Material components</li>
<li>Link Quality Inspection Plans to the relevant operation steps</li>
</ul>
<p><strong>4. Employee / Personnel Setup:</strong></p>
<pre>-- Via ADC: Employee Maintenance screen
1. Enter Employee ID, First Name, Last Name
2. Assign Facility and Default Shift
3. Assign Roles (Operator, Supervisor, Quality Inspector)
4. Add Skill Certifications (e.g. Forklift, Welding, CMM Operation)
5. Activate the employee record</pre>
<div class="note">Master Data is usually loaded in bulk from ERP (SAP MM/PP) via an integration interface rather than entered manually. Always validate data quality before loading: check for duplicate part numbers, missing UOMs, and invalid facility codes.</div>`,
      level: "medium"
    },
    {
      q: "Explain the tree structure of MI (Manufacturing Intelligence) in Apriso.",
      a: `<p><strong>Manufacturing Intelligence (MI)</strong> in Apriso provides analytics, reporting, and KPI dashboards built on top of the operational data captured during production execution. Its structure follows a layered hierarchy:</p>
<table>
<tr><th>Layer</th><th>Component</th><th>Description</th></tr>
<tr><td><strong>Data Source Layer</strong></td><td>Apriso Operational DB + Data Warehouse</td><td>Raw transactional data from all MES modules (production, quality, inventory). An optional analytical data warehouse (star schema) is pre-built for reporting</td></tr>
<tr><td><strong>Data Provider Layer</strong></td><td>SqlQuery / OLAP Cube / Web Service</td><td>Named data connections configured in MI that connect dashboards to data sources. Supports direct SQL, OLAP cubes, and external REST APIs</td></tr>
<tr><td><strong>Metric / KPI Layer</strong></td><td>Calculated Fields &amp; Measures</td><td>Business metrics computed from raw data — OEE, First Pass Yield, On-Time Delivery, Scrap Rate. Defined using formula editor or SQL expressions</td></tr>
<tr><td><strong>Visualisation Layer</strong></td><td>Dashboard Items</td><td>Charts (bar, line, pie, gauge), grids, pivot tables, sparklines, and cards that display the metrics visually</td></tr>
<tr><td><strong>Dashboard Layer</strong></td><td>Dashboard Definition (FlexPart)</td><td>A named dashboard composed of multiple visualisation items, saved as a FlexPart and assigned to roles/facilities</td></tr>
<tr><td><strong>Security Layer</strong></td><td>Roles &amp; Filters</td><td>Role-based access controls which dashboards a user can see, and facility-level data filters so each plant only sees its own data</td></tr>
</table>
<p><strong>Navigation tree in the MI Builder:</strong></p>
<pre>MI Root
  ├── Data Connections
  │     ├── SqlQuery: GetProductionSummary
  │     └── OLAP Cube: QualityMetrics
  ├── Dashboards
  │     ├── Plant OEE Dashboard
  │     │     ├── Gauge: OEE %
  │     │     ├── Line Chart: OEE Trend (last 30 days)
  │     │     └── Grid: Downtime by Work Centre
  │     └── Quality Summary Dashboard
  │           ├── KPI Card: First Pass Yield
  │           └── Pie Chart: Defects by Category
  └── Reports
        └── Daily Production Report</pre>
<div class="note">MI dashboards are linked to FlexParts and can be embedded directly in the ADC or Portal, making them accessible to operators and supervisors on the shop floor without requiring a separate BI tool.</div>`,
      level: "hard"
    },
    {
      q: "How do you create Web Services in Apriso?",
      a: `<p>Apriso exposes its Business Processes as web services (SOAP and REST) and also consumes external web services — both are configured using the <strong>Web Services Manager</strong> in the Apriso Configuration environment.</p>
<p><strong>Exposing an Apriso process as a web service (inbound):</strong></p>
<ul>
<li>Open <strong>Web Services Manager</strong> from Apriso Configuration Manager</li>
<li>Create a new Web Service definition and select the target Business Process</li>
<li>Map the process Input/Output parameters to the web service request/response fields</li>
<li>Select the protocol: SOAP (WSDL generated automatically) or REST (JSON payload)</li>
<li>Assign security credentials (Basic Auth, token, or certificate)</li>
<li>Publish — Apriso generates a WSDL or OpenAPI endpoint URL automatically</li>
<li>The external system (e.g., SAP, WMS) calls this URL to trigger the Apriso process</li>
</ul>
<p><strong>Consuming an external web service from Apriso (outbound):</strong></p>
<ul>
<li>In <strong>Integration Framework</strong>, create a new Web Service Connection: enter the WSDL URL or REST endpoint</li>
<li>Import the WSDL — Apriso parses it and lists available operations</li>
<li>Select the operation to call and map its input/output parameters</li>
<li>In Process Builder, add an <strong>Integration Operation</strong> node and select this configured connection</li>
<li>Map Apriso process parameters to the web service request fields</li>
</ul>
<pre>-- Example: Outbound REST call to SAP in a scripting operation
Dim endpoint : endpoint = FlexNet.GetConfiguration("SAP_REST_URL")
Dim payload  : payload  = "{""WorkOrder"": """ &amp; woNo &amp; """, ""Qty"": " &amp; qty &amp; "}"
Dim response : response = FlexNet.InvokeWebService(endpoint, "POST", payload)</pre>
<div class="note">For regulated environments, always log both the request payload and response in Apriso's audit log. This is required for traceability in FDA 21 CFR Part 11 and IATF 16949 compliance audits.</div>`,
      level: "hard"
    },
    {
      q: "How do MES and ERP communicate? In which format — XML or JSON?",
      a: `<p>MES (Apriso) and ERP (SAP) communication uses multiple formats and protocols depending on the integration method configured:</p>
<table>
<tr><th>Integration Method</th><th>Format</th><th>Direction</th><th>Typical Use</th></tr>
<tr><td><strong>SAP IDoc</strong></td><td>XML (IDoc XML structure)</td><td>Bidirectional</td><td>Work order download from SAP PP; production confirmation upload to SAP</td></tr>
<tr><td><strong>SAP BAPI / RFC</strong></td><td>Binary RPC (over SAP protocol), not XML/JSON natively</td><td>Apriso → SAP</td><td>Synchronous goods movements, material availability checks</td></tr>
<tr><td><strong>SOAP Web Service</strong></td><td>XML (SOAP envelope)</td><td>Bidirectional</td><td>Older enterprise integrations; SAP PI/PO middleware</td></tr>
<tr><td><strong>REST Web Service</strong></td><td>JSON</td><td>Bidirectional</td><td>Modern integrations with SAP S/4HANA APIs, third-party ERP, cloud services</td></tr>
<tr><td><strong>File-based (FTP/SFTP)</strong></td><td>XML or CSV flat file</td><td>Bidirectional</td><td>Batch overnight exchanges — BOM, routing, master data sync</td></tr>
<tr><td><strong>Message Queue (JMS/MQ)</strong></td><td>XML or JSON</td><td>Bidirectional</td><td>Asynchronous, decoupled real-time messaging between systems</td></tr>
</table>
<p><strong>Most common in Apriso + SAP projects:</strong></p>
<ul>
<li><strong>IDoc over XML</strong> is the primary format for SAP PP order downloads and production order confirmations — it is the SAP-native standard and handled by Apriso's built-in SAP Integration Framework (SIF)</li>
<li><strong>REST/JSON</strong> is increasingly preferred for new S/4HANA integrations due to SAP's OData API layer</li>
<li>The format is negotiated between the MES architect and the SAP Basis/Integration team at project start</li>
</ul>
<div class="note">Apriso's SAP Integration Framework (SIF) handles IDoc parsing and mapping automatically — developers configure the mapping in Process Builder rather than writing raw XML parsing code. For REST/JSON, developers use the Integration Operation with manual JSON construction in VBScript.</div>`,
      level: "medium"
    },
    {
      q: "Do you have knowledge of Post-Upgrade Utilities and the Infrastructure (Infra) part of Apriso?",
      a: `<p>Post-upgrade utilities and infrastructure knowledge is important for Apriso implementation and support engineers. Here is an overview of both areas:</p>
<p><strong>Post-Upgrade Utilities:</strong></p>
<ul>
<li><strong>Schema Migration Tool</strong> — Applies database schema changes (new tables, columns, indexes) required by the new Apriso version after the application upgrade</li>
<li><strong>Data Migration Utility</strong> — Transforms existing data to match new data structures or default values introduced in the upgraded version</li>
<li><strong>Package Re-application</strong> — Customer configuration packages (custom processes, screens) are re-applied on top of the upgraded standard platform to ensure customisations are preserved</li>
<li><strong>Configuration Comparison Tool</strong> — Compares the standard baseline of the new version against the customer's customised configuration to identify conflicts or deprecated components</li>
<li><strong>Apriso Health Check</strong> — Validates the upgraded environment: checks service status, database connectivity, license validity, and process execution</li>
<li><strong>Log Review</strong> — After upgrade, application logs are reviewed for errors or warnings related to deprecated APIs or schema mismatches</li>
</ul>
<p><strong>Infrastructure (Infra) Components:</strong></p>
<table>
<tr><th>Component</th><th>Description</th></tr>
<tr><td><strong>Application Server</strong></td><td>Windows Server + IIS hosting the FlexNet application tier (Java / .NET)</td></tr>
<tr><td><strong>Database Server</strong></td><td>Oracle or SQL Server hosting the Apriso schema</td></tr>
<tr><td><strong>Load Balancer</strong></td><td>Distributes client requests across multiple app server nodes in high-availability setups</td></tr>
<tr><td><strong>Message Queue Server</strong></td><td>JMS / IBM MQ for asynchronous integration messaging</td></tr>
<tr><td><strong>File Transfer Server</strong></td><td>SFTP server for file-based integration with ERP</td></tr>
<tr><td><strong>Reverse Proxy</strong></td><td>Nginx / Apache for SSL termination and URL routing</td></tr>
</table>
<div class="note">Post-upgrade activities follow a strict sequence: DB backup → schema migration → application upgrade → package re-application → smoke testing. Skipping any step risks data corruption or process failures in production.</div>`,
      level: "hard"
    },
    {
      q: "What are the key database tables for Production, Quality, and Inventory modules in Apriso?",
      a: `<p>Apriso's database follows consistent naming conventions: the first two letters denote the module prefix.</p>
<p><strong>Production Module (<code>WO_</code> prefix):</strong></p>
<table>
<tr><th>Table</th><th>Description</th></tr>
<tr><td><code>WO_WORKORDER</code></td><td>Work order header — number, status, planned qty, facility, scheduled dates</td></tr>
<tr><td><code>WO_WORKORDEROP</code></td><td>Work order operations — each routing step with status and actual times</td></tr>
<tr><td><code>WO_WORKORDERMAT</code></td><td>Work order material requirements — BOM components for the work order</td></tr>
<tr><td><code>WO_WORKORDERRES</code></td><td>Work order resource requirements — equipment and labour assignments</td></tr>
<tr><td><code>PR_PROCESS</code></td><td>Process (BOP) definition header</td></tr>
<tr><td><code>PR_PROCESSOP</code></td><td>Individual operation steps within a BOP</td></tr>
</table>
<p><strong>Quality Module (<code>QI_</code> prefix):</strong></p>
<table>
<tr><th>Table</th><th>Description</th></tr>
<tr><td><code>QI_INSPPLAN</code></td><td>Inspection plan header — linked to BOP operation or work order</td></tr>
<tr><td><code>QI_INSPPLANCHAR</code></td><td>Inspection characteristics — measurement parameters and tolerances</td></tr>
<tr><td><code>QI_INSPRESULT</code></td><td>Inspection results — actual measured values per characteristic</td></tr>
<tr><td><code>QI_NCR</code></td><td>Non-Conformance Report header — defect details, quantity, detected by</td></tr>
<tr><td><code>QI_NCRDISP</code></td><td>NCR disposition records — use-as-is, rework, scrap decisions</td></tr>
<tr><td><code>QI_DEFECT</code></td><td>Defect code master — catalogue of defect types and categories</td></tr>
</table>
<p><strong>Inventory Module (<code>LO_</code> / <code>SU_</code> / <code>IN_</code> prefix):</strong></p>
<table>
<tr><th>Table</th><th>Description</th></tr>
<tr><td><code>LO_LOT</code></td><td>Lot master — lot ID, part number, quantity, status, location</td></tr>
<tr><td><code>SU_SERUNIT</code></td><td>Serialised unit master — serial number, status, current work order</td></tr>
<tr><td><code>IN_INVTRANSACTION</code></td><td>Inventory transaction log — all goods movements, issues, receipts</td></tr>
<tr><td><code>MA_MATERIAL</code></td><td>Material master — part number, description, UOM, tracking type</td></tr>
<tr><td><code>GEN_GENEALOGY</code></td><td>Genealogy records — parent-child relationships between lots/serials</td></tr>
</table>
<div class="note">Never write directly to these tables using ad-hoc SQL in production — always use Apriso's Business Components (GBOs) or Business Processes. Direct writes bypass business rule enforcement, audit logging, and transaction management, which can corrupt data integrity.</div>`,
      level: "hard"
    },
    {
      q: "What are aggregate functions in SQL? Give examples.",
      a: `<p>Aggregate functions perform a calculation on a set of rows and return a single summary value. They are used with <code>GROUP BY</code> to summarise data by category.</p>
<table>
<tr><th>Function</th><th>Description</th><th>Example</th></tr>
<tr><td><code>COUNT()</code></td><td>Counts the number of rows (or non-NULL values)</td><td><code>COUNT(*)</code> — total rows; <code>COUNT(LotID)</code> — non-null lot IDs</td></tr>
<tr><td><code>SUM()</code></td><td>Adds up all values in a numeric column</td><td>Total quantity produced per work order</td></tr>
<tr><td><code>AVG()</code></td><td>Calculates the arithmetic mean</td><td>Average cycle time per operation</td></tr>
<tr><td><code>MIN()</code></td><td>Returns the smallest value in the column</td><td>Earliest planned start date across all open work orders</td></tr>
<tr><td><code>MAX()</code></td><td>Returns the largest value in the column</td><td>Maximum scrap quantity in a shift</td></tr>
<tr><td><code>STDEV()</code></td><td>Standard deviation — spread of values</td><td>Process capability analysis on measurement results</td></tr>
<tr><td><code>VAR()</code></td><td>Statistical variance</td><td>Quality SPC calculations</td></tr>
</table>
<pre>-- Production summary: total qty completed per work centre per shift
SELECT
    ResourceCode,
    ShiftDate,
    COUNT(WorkOrderNo)    AS TotalOrders,
    SUM(CompletedQty)     AS TotalQtyCompleted,
    AVG(CycleTimeMinutes) AS AvgCycleTime,
    MIN(StartTime)        AS EarliestStart,
    MAX(EndTime)          AS LatestEnd
FROM WO_WORKORDEROP
WHERE Status   = 'Completed'
AND   ShiftDate = CAST(GETDATE() AS DATE)
GROUP BY ResourceCode, ShiftDate
HAVING SUM(CompletedQty) &gt; 0
ORDER BY ResourceCode;</pre>
<div class="note"><code>HAVING</code> filters groups after aggregation (like a WHERE clause for aggregate results). <code>WHERE</code> filters individual rows before aggregation. You cannot use aggregate functions inside a <code>WHERE</code> clause — use <code>HAVING</code> instead.</div>`,
      level: "easy"
    },
    {
      q: "What is the difference between a Stored Procedure and a Function in SQL?",
      a: `<table>
<tr><th>Aspect</th><th>Stored Procedure (SP)</th><th>SQL Function (UDF)</th></tr>
<tr><td><strong>Return value</strong></td><td>Returns zero or more result sets; optionally returns a value via OUTPUT parameters or RETURN (integer only)</td><td>Must return exactly one value — either a scalar or a table</td></tr>
<tr><td><strong>Called using</strong></td><td><code>EXEC usp_ProcName @Param</code> — cannot be used inside SELECT</td><td><code>SELECT dbo.fnName(@Param)</code> — can be used inside SELECT, WHERE, JOIN</td></tr>
<tr><td><strong>DML allowed?</strong></td><td>Yes — can INSERT, UPDATE, DELETE, and use transactions</td><td>Scalar UDFs: no DML. Table-valued functions: read-only SELECT only (generally)</td></tr>
<tr><td><strong>Transaction control</strong></td><td>Can use BEGIN TRANSACTION / COMMIT / ROLLBACK</td><td>Cannot control transactions</td></tr>
<tr><td><strong>Error handling</strong></td><td>Full TRY/CATCH support</td><td>Limited error handling</td></tr>
<tr><td><strong>Performance</strong></td><td>Pre-compiled — generally faster for complex multi-step logic</td><td>Scalar UDFs called per-row can severely hurt query performance on large datasets; table-valued functions perform better</td></tr>
<tr><td><strong>Use in Apriso</strong></td><td>Called via Database Operation type "Stored Procedure"</td><td>Called inline in SQL queries used in Database Operations</td></tr>
</table>
<pre>-- Stored Procedure — returns result via OUTPUT parameter
CREATE PROCEDURE usp_GetCompletedQty
    @WorkOrderNo NVARCHAR(50),
    @CompletedQty DECIMAL(18,4) OUTPUT
AS
BEGIN
    SELECT @CompletedQty = CompletedQty
    FROM   WO_WORKORDER
    WHERE  WorkOrderNo = @WorkOrderNo
END;

-- Scalar Function — used inside a SELECT statement
CREATE FUNCTION dbo.fn_GetYield (@Produced DECIMAL, @Scrapped DECIMAL)
RETURNS DECIMAL(5,2)
AS BEGIN
    RETURN CASE WHEN @Produced = 0 THEN 0
                ELSE ((@Produced - @Scrapped) / @Produced) * 100
           END
END;

-- Usage: SELECT WorkOrderNo, dbo.fn_GetYield(ProducedQty, ScrapQty) AS Yield
-- FROM WO_WORKORDER</pre>`,
      level: "medium"
    },
    {
      q: "How can we return a value from a Stored Procedure in SQL?",
      a: `<p>There are three mechanisms to return values from a SQL Stored Procedure:</p>
<p><strong>Method 1 — OUTPUT parameter (most common, supports any data type):</strong></p>
<pre>CREATE PROCEDURE usp_GetOrderStatus
    @WorkOrderNo  NVARCHAR(50),
    @Status       NVARCHAR(50) OUTPUT,
    @CompletedQty DECIMAL(18,4) OUTPUT
AS
BEGIN
    SELECT @Status = Status, @CompletedQty = CompletedQty
    FROM   WO_WORKORDER
    WHERE  WorkOrderNo = @WorkOrderNo
END;

-- Calling it:
DECLARE @st NVARCHAR(50), @qty DECIMAL(18,4)
EXEC usp_GetOrderStatus 'WO-10041', @st OUTPUT, @qty OUTPUT
SELECT @st AS Status, @qty AS Qty</pre>
<p><strong>Method 2 — RETURN statement (integer status code only):</strong></p>
<pre>CREATE PROCEDURE usp_ValidateOrder @WorkOrderNo NVARCHAR(50)
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM WO_WORKORDER WHERE WorkOrderNo = @WorkOrderNo)
        RETURN -1    -- Not found
    RETURN 0         -- Success
END;

-- Calling it:
DECLARE @rc INT
EXEC @rc = usp_ValidateOrder 'WO-10041'
IF @rc = -1 PRINT 'Order not found'</pre>
<p><strong>Method 3 — SELECT result set (returns a row/recordset to the caller):</strong></p>
<pre>CREATE PROCEDURE usp_GetOpenOrders @FacilityKey INT
AS
BEGIN
    SELECT WorkOrderNo, PartNo, Status, PlannedQty
    FROM   WO_WORKORDER
    WHERE  FacilityKey = @FacilityKey
    AND    Status IN ('Released', 'InProgress')
    ORDER  BY PlannedDate
END;
-- Caller reads the result set as a recordset/collection</pre>
<p><strong>In Apriso Process Builder:</strong></p>
<ul>
<li>OUTPUT parameters are mapped to Apriso process parameters in the Database Operation configuration</li>
<li>Result sets (Method 3) are mapped to a Collection parameter and then bound to a grid</li>
</ul>
<div class="note">Use OUTPUT parameters for single scalar values. Use SELECT result sets for multiple rows. Use RETURN only for integer status codes (0 = success, negative = error) — it is not suitable for returning business data.</div>`,
      level: "medium"
    },
    {
      q: "What are Indexes in SQL? What are the types and when should you use them?",
      a: `<p>An Index is a database object that speeds up data retrieval by creating a sorted data structure on one or more columns, similar to a book's index. Without an index, the database performs a full table scan — reading every row.</p>
<table>
<tr><th>Index Type</th><th>Description</th><th>Use Case</th></tr>
<tr><td><strong>Clustered Index</strong></td><td>Physically sorts and stores the table rows in index order. Only ONE per table (the table IS the index)</td><td>Primary key columns — the most common access path for the table</td></tr>
<tr><td><strong>Non-Clustered Index</strong></td><td>Separate structure with pointers back to the table rows. Multiple allowed per table</td><td>Frequently filtered columns — WorkOrderNo, PartNo, Status, FacilityKey</td></tr>
<tr><td><strong>Unique Index</strong></td><td>Enforces uniqueness on one or more columns — no duplicate values allowed</td><td>Business key columns — Lot ID, Serial Number, Employee ID</td></tr>
<tr><td><strong>Composite Index</strong></td><td>Index on two or more columns together</td><td>Queries that always filter on the same combination of columns — (FacilityKey, Status, PlannedDate)</td></tr>
<tr><td><strong>Filtered Index</strong></td><td>Index on a subset of rows defined by a WHERE clause</td><td>Index only "Active" records — <code>WHERE Status = 'Active'</code> — to avoid indexing archived data</td></tr>
<tr><td><strong>Full-Text Index</strong></td><td>Optimised for text search (CONTAINS, FREETEXT)</td><td>Searching description fields or work instruction text</td></tr>
</table>
<pre>-- Non-clustered index on a frequently queried column
CREATE NONCLUSTERED INDEX IX_WO_FacilityStatus
ON WO_WORKORDER (FacilityKey, Status)
INCLUDE (WorkOrderNo, PlannedQty, PlannedDate);
-- INCLUDE adds columns to the index leaf without sorting on them
-- This allows the query to be satisfied entirely from the index (covering index)

-- Check if query uses the index (SQL Server)
SET STATISTICS IO ON;
SELECT WorkOrderNo, PlannedQty FROM WO_WORKORDER
WHERE FacilityKey = 5 AND Status = 'Released';</pre>
<div class="note">More indexes are not always better — each index adds overhead to every INSERT, UPDATE, and DELETE because the index must be maintained. On high-volume Apriso shop floor tables like <code>IN_INVTRANSACTION</code> and <code>GEN_GENEALOGY</code>, index excessive creation degrades write performance significantly. Index only columns used in WHERE, JOIN, and ORDER BY clauses.</div>`,
      level: "medium"
    },
    {
      q: "What is the difference between PL/SQL (Oracle) and T-SQL (SQL Server) in the context of Apriso?",
      a: `<p>Apriso supports both Oracle and SQL Server as backend databases. Since the platform is database-agnostic, the stored procedures and custom queries must be written in the correct dialect for the target database. Here are the key differences developers encounter:</p>
<table>
<tr><th>Aspect</th><th>T-SQL (SQL Server)</th><th>PL/SQL (Oracle)</th></tr>
<tr><td><strong>Full name</strong></td><td>Transact-SQL — Microsoft's SQL extension</td><td>Procedural Language / SQL — Oracle's SQL extension</td></tr>
<tr><td><strong>Variable declaration</strong></td><td><code>DECLARE @varName DATATYPE</code></td><td><code>varName DATATYPE;</code> in a <code>DECLARE</code> block</td></tr>
<tr><td><strong>String concatenation</strong></td><td><code>+</code> operator: <code>'Hello' + ' World'</code></td><td><code>||</code> operator: <code>'Hello' || ' World'</code></td></tr>
<tr><td><strong>Current date/time</strong></td><td><code>GETDATE()</code></td><td><code>SYSDATE</code></td></tr>
<tr><td><strong>Top N rows</strong></td><td><code>SELECT TOP 10 ...</code></td><td><code>WHERE ROWNUM &lt;= 10</code> or <code>FETCH FIRST 10 ROWS ONLY</code></td></tr>
<tr><td><strong>If/else</strong></td><td><code>IF ... BEGIN ... END ELSE BEGIN ... END</code></td><td><code>IF ... THEN ... ELSE ... END IF;</code></td></tr>
<tr><td><strong>Error handling</strong></td><td><code>BEGIN TRY ... END TRY BEGIN CATCH ... END CATCH</code></td><td><code>EXCEPTION WHEN ... THEN ...</code></td></tr>
<tr><td><strong>Auto-increment key</strong></td><td><code>IDENTITY(1,1)</code> or <code>SEQUENCE</code></td><td><code>SEQUENCE</code> + trigger, or <code>GENERATED ALWAYS AS IDENTITY</code></td></tr>
<tr><td><strong>Stored procedure</strong></td><td><code>CREATE PROCEDURE</code></td><td><code>CREATE OR REPLACE PROCEDURE</code></td></tr>
<tr><td><strong>Null check</strong></td><td><code>ISNULL(col, default)</code></td><td><code>NVL(col, default)</code></td></tr>
<tr><td><strong>String conversion</strong></td><td><code>CAST(x AS NVARCHAR)</code> or <code>CONVERT()</code></td><td><code>TO_CHAR(x)</code></td></tr>
</table>
<div class="note">In Apriso projects, always confirm which database is being used before writing stored procedures or complex queries. A T-SQL script will not execute on an Oracle database. Apriso's own standard SQL in Process Builder Database Operations uses ANSI-compatible SQL, but any custom SP must be written in the correct dialect.</div>`,
      level: "medium"
    },
    {
      q: "What is the use of the Apriso Configuration Manager?",
      a: `<p>The <strong>Apriso Configuration Manager</strong> (also called the <strong>Central Configuration</strong> tool) is the administrative console used by system administrators and senior developers to manage all environment-level settings of the Apriso platform — separate from day-to-day process development in Process Builder.</p>
<p><strong>Key capabilities:</strong></p>
<table>
<tr><th>Category</th><th>What You Configure</th></tr>
<tr><td><strong>Database Connections</strong></td><td>Configure the primary database connection string (server, schema, credentials) and connection pool settings</td></tr>
<tr><td><strong>Application Server Settings</strong></td><td>Set server host, port, timeout values, session duration, and thread pool sizes</td></tr>
<tr><td><strong>License Management</strong></td><td>View and apply Apriso license keys; monitor concurrent user counts vs licensed limits</td></tr>
<tr><td><strong>Integration Connections</strong></td><td>Configure named integration endpoints — SAP RFC destinations, JMS brokers, SFTP servers, REST base URLs</td></tr>
<tr><td><strong>Email (SMTP) Settings</strong></td><td>Configure the mail server for Apriso email notifications sent from process flows</td></tr>
<tr><td><strong>Logging Configuration</strong></td><td>Set log levels (DEBUG / INFO / WARN / ERROR), log file paths, and log rotation settings</td></tr>
<tr><td><strong>Security Settings</strong></td><td>Configure SSO (LDAP/Active Directory), password policies, session timeout, and IP whitelists</td></tr>
<tr><td><strong>Package Management</strong></td><td>Import and export configuration packages (process definitions, screens) between DEV / QA / PROD environments</td></tr>
<tr><td><strong>Scheduler</strong></td><td>Schedule background jobs — automatic work order closure, KPI calculation, data archival, interface polling</td></tr>
<tr><td><strong>System Parameters</strong></td><td>Global key-value configuration parameters readable by processes via <code>FlexNet.GetConfiguration("Key")</code></td></tr>
</table>
<div class="note">Configuration Manager changes take effect immediately or after a service restart depending on the setting. Always document changes made in Configuration Manager in the change log — unlike Process Builder changes, Configuration Manager changes are not version-controlled by the standard package mechanism.</div>`,
      level: "medium"
    },
    {
      q: "How can we use a mobile screen from FlexParts in Apriso?",
      a: `<p>Apriso's mobile screens are delivered through the <strong>DELMIA Apriso Mobile Apps</strong> (iOS and Android) and the <strong>mobile-responsive Portal</strong>. FlexParts are the configuration unit that defines which screens and processes are available in the mobile client.</p>
<p><strong>Steps to configure a mobile screen via FlexParts:</strong></p>
<ul>
<li><strong>Step 1 — Create or identify the FlexPart:</strong> In ADC, navigate to <strong>FlexPart Configuration M&amp;M screen</strong>. A FlexPart of type <code>Operation</code> or <code>Screen</code> defines the process or screen you want to expose</li>
<li><strong>Step 2 — Enable mobile visibility:</strong> Open the FlexPart Editor → General tab → check <strong>"Display in Mobile Applications"</strong> checkbox</li>
<li><strong>Step 3 — Assign to a Menu Item:</strong> Link the FlexPart to a Menu Item in the mobile app's navigation structure. The Menu Item determines where in the app's home screen the operation appears</li>
<li><strong>Step 4 — Assign Role:</strong> In the FlexPart's Security tab, assign the Roles that should be able to see and use this screen on the mobile device</li>
<li><strong>Step 5 — Restart services:</strong> After any Menu Item configuration change, all Apriso services must be restarted for the change to take effect in the mobile app</li>
</ul>
<p><strong>Mobile screen design considerations:</strong></p>
<pre>/* Mobile screens require responsive CSS */
/* Avoid fixed pixel widths — use percentages or viewport units */
.screen-wrapper { width: 100%; max-width: 480px; }

/* Large touch targets for shop floor gloves */
button { min-height: 48px; font-size: 16px; }
input  { min-height: 44px; font-size: 16px; }</pre>
<ul>
<li>Grids on mobile should use minimal columns — 3 to 4 maximum</li>
<li>Avoid controls that require hover interaction (no tooltips)</li>
<li>Test with both portrait and landscape orientations on the target device</li>
<li>Not all Business Controls work on mobile — verify compatibility in the Mobile Apps Implementation Guide (e.g., Cube Viewer is read-only; File Upload not supported on Android below v5)</li>
</ul>
<div class="note">The mobile app connects to the same Apriso server as the desktop client — there is no separate mobile database. All process logic runs on the server; only the UI rendering differs on the mobile device.</div>`,
      level: "medium"
    },
    {
      q: "We need to add a custom filter above a grid using an input box for product number, and a Search button — the grid should reload showing only matching records. How do you implement this?",
      a: `<p>This is a very common pattern in Apriso HTML screens. The implementation involves three coordinated parts: the HTML UI, the JavaScript filter logic, and the Database Operation SQL.</p>
<p><strong>1. HTML — input box and button above the grid:</strong></p>
<pre>&lt;div style="display:flex; gap:8px; margin-bottom:12px; align-items:center;"&gt;
    &lt;label for="txtPartNo"&gt;Product Number:&lt;/label&gt;
    &lt;input type="text" id="txtPartNo"
           placeholder="Enter part number..."
           style="width:220px; padding:6px 10px;"
           onkeydown="if(event.key==='Enter') searchGrid();" /&gt;
    &lt;button onclick="searchGrid()"&gt;Search&lt;/button&gt;
    &lt;button onclick="clearFilter()"&gt;Clear&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Grid renders below --&gt;
&lt;table id="productGrid"&gt;&lt;/table&gt;</pre>
<p><strong>2. JavaScript — read the input and reload the grid with the filter parameter:</strong></p>
<pre>function searchGrid() {
    var partNo = document.getElementById("txtPartNo").value.trim();

    // Validate: warn if empty
    if (partNo === "") {
        alert("Please enter a product number before searching.");
        return;
    }

    // Pass the filter value to the grid's data source
    // jqGrid approach — postData carries parameters to the server-side operation
    jQuery("#productGrid").jqGrid("setGridParam", {
        postData: { PartNo: partNo }
    }).trigger("reloadGrid", [{ page: 1 }]);
    // Reset to page 1 so the user always sees results from the beginning
}

function clearFilter() {
    document.getElementById("txtPartNo").value = "";
    jQuery("#productGrid").jqGrid("setGridParam", {
        postData: { PartNo: "" }
    }).trigger("reloadGrid", [{ page: 1 }]);
}</pre>
<p><strong>3. Database Operation SQL — parameterised WHERE clause:</strong></p>
<pre>SELECT
    PartNo,
    PartDescription,
    UOM,
    MaterialType,
    Status
FROM MA_MATERIAL
WHERE (:PartNo = ''
       OR PartNo LIKE '%' + :PartNo + '%'
       OR PartDescription LIKE '%' + :PartNo + '%')
AND   Status = 'Active'
ORDER BY PartNo ASC</pre>
<p><strong>4. Bind the SQL parameter to the grid's postData in Process Builder:</strong></p>
<ul>
<li>In the Database Operation configuration, map the <code>:PartNo</code> SQL parameter to the process parameter <code>PartNo</code></li>
<li>The <code>postData.PartNo</code> value sent by <code>reloadGrid</code> is received by the server-side operation as this process parameter</li>
<li>The <code>OR :PartNo = ''</code> condition means: if the filter is blank, return all records</li>
</ul>
<div class="note">Always reset to page 1 when reloading with a filter (<code>{ page: 1 }</code>) — otherwise the user may see "no records" because they were on page 5 of the old results and the filtered dataset has fewer pages. Also debounce the search if wiring it to the input's <code>oninput</code> event to avoid firing a query on every keystroke.</div>`,
      level: "hard"
    }
  ]
};
