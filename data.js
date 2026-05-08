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
  { id: 9, title: "Advanced Concepts & Scenario Questions", icon: "🔬", color: "rgba(0,212,255,0.12)" }
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
  ]
};
