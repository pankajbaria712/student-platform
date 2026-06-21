export const advanceJavaProgrammingViva = [
  {
    chapterNumber: 1,
    chapterName: "Java Networking",
    questions: [
      {
        question: "What is Java Networking?",
        answer: "Java Networking is a concept of connecting two or more computing devices together to share resources. The java.net package provides classes and interfaces like Socket and ServerSocket to implement networking."
      },
      {
        question: "What is a Socket in Java?",
        answer: "A Socket is an endpoint for communication between two machines over a network. In Java, the Socket class is used to create a client-side socket that connects to a server's IP address and port number."
      },
      {
        question: "What is a ServerSocket?",
        answer: "ServerSocket is a class in the java.net package used by server applications to listen for incoming client requests. It waits for requests over the network on a specific port."
      },
      {
        question: "What is the difference between TCP and UDP?",
        answer: "TCP is a connection-oriented, reliable protocol that guarantees data delivery in order. UDP is a connectionless, faster protocol that sends independent packets (datagrams) without guaranteeing delivery or order."
      },
      {
        question: "What is the InetAddress class used for?",
        answer: "The InetAddress class represents an Internet Protocol (IP) address. It provides methods to resolve hostnames to IP addresses and vice versa, such as getByName() and getLocalHost()."
      },
      {
        question: "What is a URL in Java networking?",
        answer: "URL stands for Uniform Resource Locator. The java.net.URL class represents a pointer to a specific resource on the World Wide Web, such as a webpage or file, allowing you to access its contents."
      },
      {
        question: "What is the URLConnection class?",
        answer: "URLConnection is an abstract class that represents a communication link between the Java application and a URL. It allows reading from and writing to the specified URL resource."
      },
      {
        question: "What is a DatagramSocket?",
        answer: "DatagramSocket is a class used for connectionless network communication via UDP. It is used to send and receive DatagramPackets, which contain the data, length, IP address, and port."
      },
      {
        question: "What is a port number?",
        answer: "A port number is a 16-bit logical address used to identify a specific process or network service running on a machine. For example, HTTP uses port 80 and FTP uses port 21."
      },
      {
        question: "How does a client connect to a server in Java?",
        answer: "A client connects to a server by creating an instance of the Socket class, passing the server's IP address and the port number the server is listening on (e.g., new Socket(\"localhost\", 8080))."
      },
      {
        question: "What are the core classes used for TCP/IP programming in Java?",
        answer: "The core classes for TCP/IP programming are Socket (for the client side) and ServerSocket (for the server side), both available in the java.net package."
      },
      {
        question: "What method does a ServerSocket use to accept connections?",
        answer: "The ServerSocket uses the accept() method. This method blocks (waits) until a client connects to the server, and then it returns a Socket object to communicate with that client."
      },
      {
        question: "How do you read data from a Socket?",
        answer: "You read data from a Socket by calling the getInputStream() method, which returns an InputStream. You can wrap this stream in a BufferedReader or DataInputStream for easier reading."
      },
      {
        question: "How do you write data to a Socket?",
        answer: "You write data to a Socket by calling the getOutputStream() method, which returns an OutputStream. You can wrap this stream in a PrintWriter or DataOutputStream to send data to the other endpoint."
      },
      {
        question: "What is a DatagramPacket?",
        answer: "A DatagramPacket is a class that represents a data container for sending and receiving data over UDP. It holds the byte array data, the destination IP address, and the destination port."
      },
      {
        question: "Why would you choose UDP over TCP?",
        answer: "UDP is chosen for applications where speed is critical and minor data loss is acceptable, such as live video streaming, online gaming, or VoIP, because it avoids the overhead of connection establishment."
      },
      {
        question: "What is localhost?",
        answer: "Localhost is the standard hostname given to the local computer. In IPv4, its loopback address is 127.0.0.1. It is used to test network applications on the same machine."
      },
      {
        question: "Can a single port be used by multiple applications simultaneously?",
        answer: "No, a specific port number on a single IP address can only be bound to one application at a time. If another application tries to use the same port, a BindException is thrown."
      },
      {
        question: "What exception is thrown if a Socket cannot connect to a server?",
        answer: "A ConnectException (a subclass of SocketException) is thrown if the server is down, the IP is wrong, or the port is closed."
      },
      {
        question: "What is a MAC address and how does it differ from an IP address?",
        answer: "A MAC address is a physical, hardware-level address assigned to a network interface card. An IP address is a logical address assigned to a device on a network for routing data over the internet."
      }
    ],
    mcqs: [
      {
        question: "Which package provides the classes for Java networking?",
        options: ["java.io", "java.net", "java.util", "java.sql"],
        correctAnswer: "java.net"
      },
      {
        question: "Which class is used to create a TCP server in Java?",
        options: ["Socket", "DatagramSocket", "ServerSocket", "Thread"],
        correctAnswer: "ServerSocket"
      },
      {
        question: "Which method of ServerSocket is used to listen for incoming client connections?",
        options: ["listen()", "accept()", "connect()", "receive()"],
        correctAnswer: "accept()"
      },
      {
        question: "TCP is an abbreviation for:",
        options: ["Transmission Control Protocol", "Transfer Communication Protocol", "Transport Control Protocol", "Transaction Control Protocol"],
        correctAnswer: "Transmission Control Protocol"
      },
      {
        question: "Which class is used for connectionless (UDP) network communication?",
        options: ["Socket", "ServerSocket", "DatagramSocket", "URL"],
        correctAnswer: "DatagramSocket"
      },
      {
        question: "What does the InetAddress.getLocalHost() method return?",
        options: ["The IP address of a website", "The MAC address of the server", "The IP address and hostname of the local machine", "A Socket object"],
        correctAnswer: "The IP address and hostname of the local machine"
      },
      {
        question: "Which class encapsulates both an IP address and a port number?",
        options: ["InetAddress", "SocketAddress", "URL", "DatagramPacket"],
        correctAnswer: "SocketAddress"
      },
      {
        question: "In DatagramSocket communication, data is packaged inside a:",
        options: ["Socket", "ServerSocket", "DatagramPacket", "URLConnection"],
        correctAnswer: "DatagramPacket"
      },
      {
        question: "Which method is used to get the input stream from a socket?",
        options: ["getInput()", "getStream()", "getInputStream()", "readStream()"],
        correctAnswer: "getInputStream()"
      },
      {
        question: "Which protocol is reliable and connection-oriented?",
        options: ["UDP", "TCP", "IP", "ICMP"],
        correctAnswer: "TCP"
      },
      {
        question: "What is the maximum valid port number?",
        options: ["1024", "8080", "65535", "255"],
        correctAnswer: "65535"
      },
      {
        question: "Which exception is thrown when a requested port is already in use?",
        options: ["PortException", "BindException", "ConnectException", "SocketTimeoutException"],
        correctAnswer: "BindException"
      },
      {
        question: "URL stands for:",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Remote Link", "Universal Routing Layer"],
        correctAnswer: "Uniform Resource Locator"
      },
      {
        question: "Which method opens a connection to the resource referenced by a URL object?",
        options: ["open()", "connect()", "openConnection()", "getStream()"],
        correctAnswer: "openConnection()"
      },
      {
        question: "What type of data does a DatagramPacket carry?",
        options: ["Strings only", "Integers only", "Byte arrays", "Serialized Objects"],
        correctAnswer: "Byte arrays"
      },
      {
        question: "Which class represents a Uniform Resource Identifier reference?",
        options: ["URL", "URI", "URLConnection", "InetAddress"],
        correctAnswer: "URI"
      },
      {
        question: "How do you close a Socket connection?",
        options: ["socket.end()", "socket.disconnect()", "socket.close()", "socket.stop()"],
        correctAnswer: "socket.close()"
      },
      {
        question: "Which protocol does the URL \"http://www.google.com\" use?",
        options: ["FTP", "HTTP", "SMTP", "UDP"],
        correctAnswer: "HTTP"
      },
      {
        question: "What method is used to retrieve the IP address from an InetAddress object?",
        options: ["getHostAddress()", "getIP()", "getAddress()", "getHostname()"],
        correctAnswer: "getHostAddress()"
      },
      {
        question: "Which method of DatagramSocket is used to send a packet?",
        options: ["write()", "send()", "push()", "transmit()"],
        correctAnswer: "send()"
      }
    ]
  },
  {
    chapterNumber: 2,
    chapterName: "JDBC Programming",
    questions: [
      {
        question: "What is JDBC?",
        answer: "JDBC (Java Database Connectivity) is a Java API that provides standard methods for connecting a Java application to relational databases, allowing the execution of SQL queries and updates."
      },
      {
        question: "What are the standard steps to connect to a database using JDBC?",
        answer: "The steps are: 1) Load/Register the Driver, 2) Establish a Connection, 3) Create a Statement, 4) Execute the Query, 5) Process the ResultSet, and 6) Close the connection."
      },
      {
        question: "What is the role of the DriverManager class?",
        answer: "The DriverManager class acts as an interface between users and drivers. It keeps track of available drivers and establishes a connection between a database and the appropriate driver."
      },
      {
        question: "What is the difference between Statement and PreparedStatement?",
        answer: "Statement is used for static SQL queries and is prone to SQL injection. PreparedStatement is pre-compiled, used for parameterized dynamic queries, and provides better performance and security against SQL injection."
      },
      {
        question: "What is a CallableStatement?",
        answer: "CallableStatement is an interface used to execute stored procedures and functions residing in the database. It can accept input parameters and return output parameters."
      },
      {
        question: "What does the executeQuery() method do?",
        answer: "The executeQuery() method is used to execute SELECT statements. It returns a ResultSet object containing the data retrieved from the database."
      },
      {
        question: "What does the executeUpdate() method do?",
        answer: "The executeUpdate() method is used for executing INSERT, UPDATE, or DELETE statements (DML). It returns an integer representing the number of rows affected by the query."
      },
      {
        question: "What is a ResultSet?",
        answer: "A ResultSet is an object that represents the result set of a database query. It acts as an iterator, maintaining a cursor pointing to its current row of data."
      },
      {
        question: "What is ResultSetMetaData?",
        answer: "ResultSetMetaData is an interface that provides information (metadata) about the columns in a ResultSet, such as the number of columns, column names, and column data types."
      },
      {
        question: "What is SQLException?",
        answer: "SQLException is a checked exception that provides information on database access errors or other errors related to JDBC operations, such as syntax errors or connection failures."
      },
      {
        question: "What is Transaction Management in JDBC?",
        answer: "Transaction management groups a set of SQL statements into a single unit of work. In JDBC, it is handled using setAutoCommit(false), commit(), and rollback() methods on the Connection object."
      },
      {
        question: "Why do we use connection.setAutoCommit(false)?",
        answer: "By default, every SQL statement is automatically committed. Setting it to false allows developers to manually control the transaction, ensuring all queries execute successfully before calling commit()."
      },
      {
        question: "What does the rollback() method do?",
        answer: "The rollback() method undoes all changes made in the current transaction and releases any database locks currently held by the Connection object, usually called in a catch block when an error occurs."
      },
      {
        question: "What is an Updatable ResultSet?",
        answer: "An Updatable ResultSet allows you to insert, update, or delete rows in the database directly through the ResultSet object itself without writing separate SQL UPDATE/INSERT statements."
      },
      {
        question: "How do you create a PreparedStatement?",
        answer: "A PreparedStatement is created by calling the prepareStatement() method on the Connection object, passing the SQL string with placeholders (?) for parameters."
      },
      {
        question: "What are JDBC Types?",
        answer: "JDBC Types are constants defined in the java.sql.Types class that map standard SQL data types (like VARCHAR, INTEGER, DATE) to Java data types."
      },
      {
        question: "What is Class.forName() used for in JDBC?",
        answer: "Historically, Class.forName(\"driver.class.name\") was used to dynamically load the JDBC driver class into memory so it could register itself with the DriverManager."
      },
      {
        question: "What is a SQLWarning?",
        answer: "SQLWarning is a subclass of SQLException that provides information about database warnings. Unlike exceptions, warnings do not stop the execution of the application and must be retrieved manually."
      },
      {
        question: "What is the difference between execute() and executeQuery()?",
        answer: "executeQuery() is only for SELECT queries and returns a ResultSet. execute() can execute any SQL statement and returns true if the first result is a ResultSet, or false if it is an update count."
      },
      {
        question: "Why must database connections be closed?",
        answer: "Database connections consume memory and network resources on both the client and database server. Failing to close them leads to connection leaks and eventually crashes the database server."
      }
    ],
    mcqs: [
      {
        question: "Which package contains the core JDBC interfaces and classes?",
        options: ["java.io", "java.sql", "javax.sql", "java.net"],
        correctAnswer: "java.sql"
      },
      {
        question: "Which interface is used to establish a connection with the database?",
        options: ["Statement", "Connection", "DriverManager", "ResultSet"],
        correctAnswer: "Connection"
      },
      {
        question: "Which method is used to execute a SELECT query in JDBC?",
        options: ["execute()", "executeUpdate()", "executeQuery()", "executeSelect()"],
        correctAnswer: "executeQuery()"
      },
      {
        question: "Which class is responsible for managing a list of database drivers?",
        options: ["Connection", "DriverManager", "Driver", "Statement"],
        correctAnswer: "DriverManager"
      },
      {
        question: "Which interface is preferred to prevent SQL Injection attacks?",
        options: ["Statement", "PreparedStatement", "CallableStatement", "ResultSet"],
        correctAnswer: "PreparedStatement"
      },
      {
        question: "Which interface is used to execute database stored procedures?",
        options: ["Statement", "PreparedStatement", "CallableStatement", "ProcedureStatement"],
        correctAnswer: "CallableStatement"
      },
      {
        question: "What is the return type of the executeUpdate() method?",
        options: ["ResultSet", "boolean", "int", "String"],
        correctAnswer: "int"
      },
      {
        question: "By default, what is the commit state of a JDBC Connection?",
        options: ["Manual commit", "Auto-commit is true", "Auto-commit is false", "Depends on the database"],
        correctAnswer: "Auto-commit is true"
      },
      {
        question: "Which method is used to move the ResultSet cursor to the next row?",
        options: ["moveNext()", "next()", "forward()", "skip()"],
        correctAnswer: "next()"
      },
      {
        question: "Which interface provides information about the types and properties of the columns in a ResultSet?",
        options: ["DatabaseMetaData", "ResultSetMetaData", "ColumnMetaData", "TableMetaData"],
        correctAnswer: "ResultSetMetaData"
      },
      {
        question: "To undo changes in a transaction when an error occurs, which method is used?",
        options: ["undo()", "revert()", "rollback()", "cancel()"],
        correctAnswer: "rollback()"
      },
      {
        question: "Which symbol is used as a placeholder in a PreparedStatement?",
        options: ["*", "&", "?", "$"],
        correctAnswer: "?"
      },
      {
        question: "Which method of PreparedStatement is used to set an integer parameter?",
        options: ["setInteger()", "setInt()", "setNumber()", "putInt()"],
        correctAnswer: "setInt()"
      },
      {
        question: "What exception is generally thrown by JDBC methods on failure?",
        options: ["IOException", "ClassNotFoundException", "SQLException", "DatabaseException"],
        correctAnswer: "SQLException"
      },
      {
        question: "In ResultSet, column indexing starts from:",
        options: ["0", "1", "-1", "Depends on database"],
        correctAnswer: "1"
      },
      {
        question: "Which method is used to permanently save changes made during a transaction?",
        options: ["save()", "update()", "commit()", "store()"],
        correctAnswer: "commit()"
      },
      {
        question: "What kind of driver is the pure Java JDBC driver?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        correctAnswer: "Type 4"
      },
      {
        question: "Which of the following is NOT a standard JDBC interface?",
        options: ["Connection", "Statement", "ResultSet", "DatabaseManager"],
        correctAnswer: "DatabaseManager"
      },
      {
        question: "How do you retrieve a string value from the current row of a ResultSet?",
        options: ["getString()", "getText()", "readString()", "fetchString()"],
        correctAnswer: "getString()"
      },
      {
        question: "Which statement is true about SQLWarning?",
        options: ["It stops program execution", "It is a subclass of RuntimeException", "It is retrieved silently without breaking execution", "It automatically rolls back transactions"],
        correctAnswer: "It is retrieved silently without breaking execution"
      }
    ]
  },
  {
    chapterNumber: 3,
    chapterName: "Servlet API and Overview",
    questions: [
      {
        question: "What is a Servlet?",
        answer: "A Servlet is a Java program that runs on a web server or application server. It acts as a middle layer between a request coming from a web browser and a database or application on the HTTP server."
      },
      {
        question: "Explain the Servlet Life Cycle.",
        answer: "The servlet life cycle consists of three main methods: init() which initializes the servlet, service() which handles client requests, and destroy() which cleans up resources before the servlet is removed."
      },
      {
        question: "What is the difference between GET and POST methods?",
        answer: "GET appends form data to the URL, making it visible and limited in size, mostly used for fetching data. POST sends data in the HTTP body, is secure, has no size limit, and is used to submit sensitive data."
      },
      {
        question: "What is the role of the deployment descriptor (web.xml)?",
        answer: "The web.xml file maps URLs to specific servlets, configures security, session timeouts, and context parameters. It dictates how the web application should be deployed on the server."
      },
      {
        question: "What is ServletConfig?",
        answer: "ServletConfig is an interface used by the web container to pass initialization parameters to a specific servlet during its initialization (init phase). It is unique to each servlet."
      },
      {
        question: "What is ServletContext?",
        answer: "ServletContext represents the web application environment. It provides a way for servlets to communicate with the container, log events, and share global attributes across the entire web application."
      },
      {
        question: "What is a RequestDispatcher?",
        answer: "RequestDispatcher is an interface used to dispatch the request to another resource (HTML, JSP, or Servlet) on the server. It has two methods: forward() and include()."
      },
      {
        question: "What is the difference between forward() and sendRedirect()?",
        answer: "forward() transfers the request entirely on the server-side without the client knowing. sendRedirect() sends an HTTP 302 response to the browser, forcing it to make a brand new request to the specified URL."
      },
      {
        question: "What is a Filter in Servlets?",
        answer: "A Filter is an object that is invoked at the preprocessing and postprocessing of a request. It is used for tasks like authentication, logging, data compression, and input validation."
      },
      {
        question: "What is Session Management?",
        answer: "Session management is a mechanism used by web containers to maintain the state of a user across multiple HTTP requests, since HTTP is a stateless protocol."
      },
      {
        question: "What are the common techniques for Session Tracking?",
        answer: "Common techniques include Cookies, URL Rewriting, Hidden Form Fields, and the HttpSession API."
      },
      {
        question: "What is a Cookie?",
        answer: "A cookie is a small piece of textual data sent by the server to the client's browser, which stores it and sends it back with future requests to identify the user session."
      },
      {
        question: "What is URL Rewriting?",
        answer: "URL Rewriting appends a session identifier parameter directly to the end of the URL (e.g., ?sessionid=123). It is used as a fallback when cookies are disabled in the browser."
      },
      {
        question: "What does the invalidate() method do?",
        answer: "The invalidate() method is called on an HttpSession object to immediately terminate the session and unbind all attributes associated with it, commonly used for user logout."
      },
      {
        question: "What is Session Timeout?",
        answer: "Session timeout specifies the maximum time interval (in minutes) a session can remain inactive before the web container automatically invalidates it to free up server memory."
      },
      {
        question: "What is the role of FilterChain?",
        answer: "FilterChain is an interface that allows multiple filters to be executed in sequence. Calling filterChain.doFilter() passes the request and response to the next filter in the chain, or to the target servlet."
      },
      {
        question: "What are Attributes in Servlets?",
        answer: "Attributes are objects bound to the Request, Session, or Context scopes using setAttribute(). They allow sharing of data between different servlets or JSPs."
      },
      {
        question: "Which class provides the implementation of HTTP servlets?",
        answer: "The HttpServlet abstract class provides the core implementation for handling HTTP requests, offering methods like doGet(), doPost(), doPut(), and doDelete()."
      },
      {
        question: "How many times is the init() method called?",
        answer: "The init() method is called exactly once in the lifecycle of a servlet, at the time of its initialization, before any requests are handled."
      },
      {
        question: "What happens in the service() method?",
        answer: "The container calls the service() method for every incoming request. In HttpServlet, this method determines the HTTP request type (GET, POST) and dispatches it to the corresponding doGet() or doPost() method."
      }
    ],
    mcqs: [
      {
        question: "Which interface must be implemented by all Servlets?",
        options: ["HttpServlet", "GenericServlet", "Servlet", "ServletRequest"],
        correctAnswer: "Servlet"
      },
      {
        question: "Which of the following is NOT a phase of the Servlet Lifecycle?",
        options: ["init()", "service()", "destroy()", "update()"],
        correctAnswer: "update()"
      },
      {
        question: "Which HTTP method is best suited for sending sensitive data like passwords?",
        options: ["GET", "POST", "HEAD", "PUT"],
        correctAnswer: "POST"
      },
      {
        question: "The web.xml file is also known as:",
        options: ["Context descriptor", "Deployment descriptor", "Server configuration", "Servlet mapper"],
        correctAnswer: "Deployment descriptor"
      },
      {
        question: "Which interface provides initialization parameters specific to a single servlet?",
        options: ["ServletContext", "ServletConfig", "HttpServletRequest", "HttpSession"],
        correctAnswer: "ServletConfig"
      },
      {
        question: "Which interface is used to share data globally across the entire web application?",
        options: ["ServletConfig", "ServletContext", "HttpSession", "ServletRequest"],
        correctAnswer: "ServletContext"
      },
      {
        question: "Which method of RequestDispatcher is used to transfer control entirely to another resource?",
        options: ["include()", "redirect()", "forward()", "send()"],
        correctAnswer: "forward()"
      },
      {
        question: "If the client's browser disables cookies, which session tracking mechanism should be used?",
        options: ["Hidden form fields", "URL Rewriting", "HttpSession without cookies", "Both A and B"],
        correctAnswer: "Both A and B"
      },
      {
        question: "Which API is used to intercept and process a request before it reaches the Servlet?",
        options: ["RequestDispatcher", "Filter", "HttpSession", "ServletContextListener"],
        correctAnswer: "Filter"
      },
      {
        question: "Which method destroys the user session completely?",
        options: ["session.destroy()", "session.invalidate()", "session.remove()", "session.close()"],
        correctAnswer: "session.invalidate()"
      },
      {
        question: "What is the default session timeout configured in Tomcat (usually)?",
        options: ["10 minutes", "30 minutes", "1 hour", "Never expires"],
        correctAnswer: "30 minutes"
      },
      {
        question: "Which class is the superclass of HttpServlet?",
        options: ["Servlet", "GenericServlet", "BaseServlet", "Object"],
        correctAnswer: "GenericServlet"
      },
      {
        question: "Which method reads a parameter from an HTML form?",
        options: ["getAttribute()", "getParameter()", "getValue()", "readData()"],
        correctAnswer: "getParameter()"
      },
      {
        question: "What does the sendRedirect() method do?",
        options: ["Forwards request internally", "Includes response internally", "Tells the browser to make a new request to a different URL", "Closes the connection"],
        correctAnswer: "Tells the browser to make a new request to a different URL"
      },
      {
        question: "Which package contains the core Servlet API interfaces?",
        options: ["java.servlet", "javax.servlet", "java.web", "org.servlet"],
        correctAnswer: "javax.servlet"
      },
      {
        question: "Which method passes control to the next filter in the chain?",
        options: ["filterChain.next()", "filterChain.doFilter()", "filterChain.forward()", "filterChain.proceed()"],
        correctAnswer: "filterChain.doFilter()"
      },
      {
        question: "Which HTTP method is idempotent and should be used to retrieve resources safely?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correctAnswer: "GET"
      },
      {
        question: "How is an attribute set in the request scope?",
        options: ["request.setParameter()", "request.put()", "request.setAttribute()", "request.add()"],
        correctAnswer: "request.setAttribute()"
      },
      {
        question: "What is the scope of data stored in HttpSession?",
        options: ["Valid only for the current request", "Valid for a specific user across multiple requests", "Valid for all users globally", "Valid only during init()"],
        correctAnswer: "Valid for a specific user across multiple requests"
      },
      {
        question: "To configure session timeout in web.xml, which tag is used?",
        options: ["<session-config>", "<timeout>", "<session-timeout>", "<session>"],
        correctAnswer: "<session-config>"
      }
    ]
  },
  {
    chapterNumber: 4,
    chapterName: "Java Server Pages",
    questions: [
      {
        question: "What is the main problem with Servlets that JSP solves?",
        answer: "Servlets require HTML code to be embedded inside Java print statements, making it hard to design and maintain UI. JSP solves this by allowing Java code to be embedded inside standard HTML."
      },
      {
        question: "What is a Java Server Page (JSP)?",
        answer: "JSP is a server-side technology used to create dynamic web pages. A JSP file is essentially an HTML page containing embedded Java code using special tags."
      },
      {
        question: "Explain the Life Cycle of a JSP page.",
        answer: "The lifecycle includes translation (JSP to Servlet), compilation (.java to .class), initialization (jspInit), execution (jspService), and destruction (jspDestroy)."
      },
      {
        question: "What is MVC architecture in JSP Application Design?",
        answer: "MVC stands for Model (JavaBeans/Data), View (JSP pages), and Controller (Servlets). It separates the business logic from the presentation layer, making the application easier to manage."
      },
      {
        question: "What are JSP Directives?",
        answer: "Directives provide global instructions to the web container on how to translate the JSP into a Servlet. The three main directives are page, include, and taglib."
      },
      {
        question: "What are JSP Implicit Objects?",
        answer: "Implicit objects are pre-instantiated Java objects automatically available inside a JSP page. Examples include request, response, session, out, application, and exception."
      },
      {
        question: "What is the use of the 'out' implicit object?",
        answer: "The 'out' object is an instance of JspWriter. It is used to write content directly into the HTML response stream sent back to the client browser."
      },
      {
        question: "What are JSP Actions?",
        answer: "JSP Actions use XML syntax to control the behavior of the servlet engine dynamically. Common actions include <jsp:include>, <jsp:forward>, and <jsp:useBean>."
      },
      {
        question: "What is the <jsp:useBean> action?",
        answer: "The <jsp:useBean> action is used to locate or instantiate a JavaBean component. It helps in separating business logic from the view by storing data in reusable Java objects."
      },
      {
        question: "What is JSP Expression Language (EL)?",
        answer: "JSP EL provides a simplified syntax (${expression}) to access and display data stored in JavaBeans or attributes (request, session) without writing complex Java code."
      },
      {
        question: "What is JSTL?",
        answer: "JSP Standard Tag Library (JSTL) is a collection of useful custom tags that encapsulate core functionality common to JSP applications, such as loops, conditionals, and formatting, avoiding scriptlets."
      },
      {
        question: "What is JSP Exception Handling?",
        answer: "JSP allows you to define an 'errorPage' using the page directive. If an exception occurs, the container forwards the request to the specified error page, which can display a user-friendly message."
      },
      {
        question: "What is a Scriptlet in JSP?",
        answer: "A scriptlet is a block of Java code embedded within HTML using the <% ... %> tags. The code is executed directly inside the jspService() method."
      },
      {
        question: "What is a JSP Declaration?",
        answer: "A declaration is used to declare variables or methods using <%! ... %>. Variables declared here become instance variables of the translated Servlet class."
      },
      {
        question: "What is a JSP Expression?",
        answer: "A JSP expression <%= ... %> evaluates a Java expression, converts the result to a String, and outputs it directly to the client. It does not require a semicolon."
      },
      {
        question: "How does JSP handle sessions and cookies?",
        answer: "JSP uses the implicit 'session' object (HttpSession) for tracking user sessions. Cookies can be retrieved from the implicit 'request' object and added via the 'response' object."
      },
      {
        question: "What are JSP Custom Tags?",
        answer: "Custom tags are user-defined tags created by developers to encapsulate complex business logic or UI components, keeping the JSP clean and promoting reusability."
      },
      {
        question: "What is the difference between <jsp:include> and <%@ include %>?",
        answer: "<jsp:include> includes a resource dynamically at request time. <%@ include %> (directive) includes the file statically at translation time, physically merging the files."
      },
      {
        question: "How do you access form data in a JSP?",
        answer: "Form data is accessed using the implicit 'request' object by calling request.getParameter(\"fieldName\"), similar to how it is done in a Servlet."
      },
      {
        question: "Why should Scriptlets be avoided in modern JSP design?",
        answer: "Scriptlets mix Java code with HTML, making the page hard to read, maintain, and debug. Modern development uses EL, JSTL, and MVC architecture to keep presentation clean."
      }
    ],
    mcqs: [
      {
        question: "What does the JSP engine translate a JSP page into?",
        options: ["An HTML file", "A Java Servlet", "A CSS file", "A JavaScript file"],
        correctAnswer: "A Java Servlet"
      },
      {
        question: "Which of the following is NOT a JSP implicit object?",
        options: ["request", "response", "context", "session"],
        correctAnswer: "context"
      },
      {
        question: "Which tags are used to write Java code inside a JSP page?",
        options: ["<java> ... </java>", "<% ... %>", "<script> ... </script>", "<?php ... ?>"],
        correctAnswer: "<% ... %>"
      },
      {
        question: "Which directive is used to import Java packages in JSP?",
        options: ["<%@ page import=\"...\" %>", "<% import=\"...\" %>", "<jsp:import>", "<@ import>"],
        correctAnswer: "<%@ page import=\"...\" %>"
      },
      {
        question: "Which MVC component is primarily represented by JSP?",
        options: ["Model", "View", "Controller", "Database"],
        correctAnswer: "View"
      },
      {
        question: "Which JSP action tag is used to instantiate a JavaBean?",
        options: ["<jsp:bean>", "<jsp:useBean>", "<jsp:createBean>", "<jsp:init>"],
        correctAnswer: "<jsp:useBean>"
      },
      {
        question: "In JSP Expression Language (EL), variables are accessed using which syntax?",
        options: ["<%= var %>", "${var}", "&{var}", "#{var}"],
        correctAnswer: "${var}"
      },
      {
        question: "What is JSTL?",
        options: ["Java Server Tag Logic", "Java Standard Technology Library", "JSP Standard Tag Library", "JSP Simple Tag Language"],
        correctAnswer: "JSP Standard Tag Library"
      },
      {
        question: "Which directive is used to specify an error page in JSP?",
        options: ["<%@ page errorPage=\"error.jsp\" %>", "<jsp:error>", "<% error=\"error.jsp\" %>", "<@ catch>"],
        correctAnswer: "<%@ page errorPage=\"error.jsp\" %>"
      },
      {
        question: "To mark a JSP as an error page, which directive attribute must be true?",
        options: ["isErrorPage=\"true\"", "errorPage=\"true\"", "catchException=\"true\"", "handleError=\"true\""],
        correctAnswer: "isErrorPage=\"true\""
      },
      {
        question: "Which implicit object is an instance of JspWriter?",
        options: ["response", "out", "writer", "pageContext"],
        correctAnswer: "out"
      },
      {
        question: "What is the difference between <%! %> and <% %>?",
        options: ["No difference", "<%! %> declares instance variables/methods, <% %> writes local code", "<% %> declares instance variables, <%! %> is local", "<%! %> is used for comments"],
        correctAnswer: "<%! %> declares instance variables/methods, <% %> writes local code"
      },
      {
        question: "Which JSP action forwards the request to another page dynamically?",
        options: ["<jsp:redirect>", "<jsp:forward>", "<jsp:include>", "<jsp:send>"],
        correctAnswer: "<jsp:forward>"
      },
      {
        question: "Which scope is NOT valid for a JavaBean in JSP?",
        options: ["page", "request", "session", "global"],
        correctAnswer: "global"
      },
      {
        question: "By default, are sessions enabled in a JSP page?",
        options: ["Yes", "No", "Depends on the server", "Only if cookies are enabled"],
        correctAnswer: "Yes"
      },
      {
        question: "Which syntax outputs data without needing a semicolon?",
        options: ["<% out.print(val); %>", "<%= val %>", "<%! val %>", "Both A and B"],
        correctAnswer: "<%= val %>"
      },
      {
        question: "What method is called when a JSP is first loaded and initialized?",
        options: ["init()", "jspInit()", "start()", "initialize()"],
        correctAnswer: "jspInit()"
      },
      {
        question: "Which implicit object provides access to web.xml initialization parameters?",
        options: ["application", "config", "pageContext", "All of the above"],
        correctAnswer: "config"
      },
      {
        question: "Which component acts as the Controller in an MVC JSP application?",
        options: ["JavaBeans", "JSP", "Servlet", "HTML"],
        correctAnswer: "Servlet"
      },
      {
        question: "What is the file extension for a JSP Custom Tag Library descriptor?",
        options: [".xml", ".tld", ".tag", ".jsp"],
        correctAnswer: ".tld"
      }
    ]
  },
  {
    chapterNumber: 5,
    chapterName: "Java Server Faces 2.0",
    questions: [
      {
        question: "What is Java Server Faces (JSF)?",
        answer: "JSF is a Java-based web application framework intended to simplify development of web-based user interfaces. It is a component-based UI framework that enforces the MVC design pattern."
      },
      {
        question: "What are the phases of the JSF Request Processing Life Cycle?",
        answer: "The JSF lifecycle has 6 phases: Restore View, Apply Request Values, Process Validations, Update Model Values, Invoke Application, and Render Response."
      },
      {
        question: "What is the 'Restore View' phase in JSF?",
        answer: "It is the first phase where JSF builds or restores the component tree of the requested page based on the view ID. If it's a new request, a new view is built; otherwise, the previous state is restored."
      },
      {
        question: "What are JSF Standard Components?",
        answer: "JSF provides built-in UI components like buttons, text fields, and tables, mapped to standard HTML tags but managed by the server. Example: <h:inputText> or <h:commandButton>."
      },
      {
        question: "What is a Managed Bean in JSF?",
        answer: "A Managed Bean is a standard Java class registered with JSF (via annotations like @ManagedBean) that acts as the model or controller, storing data and business logic for the UI."
      },
      {
        question: "What is Facelets in JSF 2.0?",
        answer: "Facelets is the default view declaration language (templating engine) for JSF. It replaces JSP and uses XML-based files (.xhtml) to build component trees more efficiently."
      },
      {
        question: "What is JSF Expression Language (EL)?",
        answer: "JSF EL uses the #{bean.property} syntax to bind UI components directly to Managed Bean properties and methods, allowing automatic data synchronization between the View and Model."
      },
      {
        question: "What is the 'Render Response' phase?",
        answer: "It is the final phase of the JSF lifecycle where the component tree is traversed, and the HTML output is generated and sent to the client browser."
      },
      {
        question: "What are JSF Converter Tags?",
        answer: "Converters translate string data entered by the user in the UI into specific Java data types (like Date, Integer) before storing it in the bean, and vice versa. Example: <f:convertDateTime>."
      },
      {
        question: "What are JSF Validation Tags?",
        answer: "Validators ensure the user input meets specific criteria (e.g., length, regex) before updating the model. Example: <f:validateLength minimum=\"5\">."
      },
      {
        question: "How does JSF handle events?",
        answer: "JSF uses an event-driven programming model similar to desktop GUIs. UI components fire events (like ActionEvent for clicks or ValueChangeEvent), which are handled by methods in the Managed Bean."
      },
      {
        question: "What is PrimeFaces?",
        answer: "PrimeFaces is a popular, open-source JSF component library featuring a wide variety of rich, highly interactive, and visually appealing UI components, complete with built-in AJAX support."
      },
      {
        question: "What is the difference between JSP and Facelets?",
        answer: "JSP complies to a Servlet and mixes HTML/Java, whereas Facelets builds a true server-side UI component tree, providing better templating, performance, and native JSF support."
      },
      {
        question: "What happens in the 'Update Model Values' phase?",
        answer: "If validation succeeds, JSF updates the properties of the backing Managed Beans with the newly converted and validated values from the UI components."
      },
      {
        question: "What happens in the 'Invoke Application' phase?",
        answer: "JSF executes the application-level logic, such as action methods bound to command buttons (e.g., submitting a form, querying a database), and handles page navigation."
      },
      {
        question: "How do you navigate between pages in JSF?",
        answer: "Navigation can be implicit (returning a string matching the target view name like 'success') or explicitly defined using navigation rules in the faces-config.xml file."
      },
      {
        question: "What is the significance of the FacesServlet?",
        answer: "FacesServlet is the core front controller of the JSF framework. It intercepts all incoming requests, manages the 6-phase lifecycle, and routes the responses."
      },
      {
        question: "What is the difference between #{} and ${} in EL?",
        answer: "In JSF, #{} represents deferred evaluation (used for two-way binding, allowing reading and writing to beans). ${} is immediate evaluation (mostly used in JSP for read-only outputs)."
      },
      {
        question: "What does <h:form> do in JSF?",
        answer: "The <h:form> tag renders an HTML form element. Crucially, it manages the JSF ViewState, allowing the framework to track component states across postbacks."
      },
      {
        question: "Why use PrimeFaces instead of standard JSF components?",
        answer: "PrimeFaces offers advanced components like data tables with sorting/pagination, charts, and dialogues that require extensive coding with standard JSF, saving massive development time."
      }
    ],
    mcqs: [
      {
        question: "What type of framework is Java Server Faces (JSF)?",
        options: ["Database mapping framework", "Component-based MVC UI framework", "Network protocol framework", "Operating system framework"],
        correctAnswer: "Component-based MVC UI framework"
      },
      {
        question: "How many phases are there in the JSF Request Processing Life Cycle?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "6"
      },
      {
        question: "What is the first phase of the JSF life cycle?",
        options: ["Render Response", "Apply Request Values", "Restore View", "Process Validations"],
        correctAnswer: "Restore View"
      },
      {
        question: "What is the default View Declaration Language (templating engine) in JSF 2.0?",
        options: ["JSP", "Facelets", "Velocity", "Thymeleaf"],
        correctAnswer: "Facelets"
      },
      {
        question: "Which file extension is standard for JSF Facelets pages?",
        options: [".jsp", ".html", ".xhtml", ".jsf"],
        correctAnswer: ".xhtml"
      },
      {
        question: "What syntax is used for JSF Expression Language to perform two-way data binding?",
        options: ["${bean.property}", "#{bean.property}", "<%= bean.property %>", "&{bean.property}"],
        correctAnswer: "#{bean.property}"
      },
      {
        question: "Which of the following acts as the Front Controller for JSF applications?",
        options: ["ActionServlet", "DispatcherServlet", "FacesServlet", "MainServlet"],
        correctAnswer: "FacesServlet"
      },
      {
        question: "Which JSF tag library prefix 'h' typically represents?",
        options: ["HTML standard UI components", "Hibernate elements", "HTTP headers", "Helper tags"],
        correctAnswer: "HTML standard UI components"
      },
      {
        question: "A Java class that acts as a controller/model for a JSF page is called:",
        options: ["Servlet Bean", "Managed Bean", "Enterprise Bean", "Session Bean"],
        correctAnswer: "Managed Bean"
      },
      {
        question: "Which phase comes immediately after 'Process Validations'?",
        options: ["Invoke Application", "Render Response", "Update Model Values", "Restore View"],
        correctAnswer: "Update Model Values"
      },
      {
        question: "Which component library is widely used with JSF to provide rich, AJAX-enabled widgets?",
        options: ["Bootstrap", "PrimeFaces", "jQuery", "Angular"],
        correctAnswer: "PrimeFaces"
      },
      {
        question: "Which tag is used to ensure user input is within a specific length?",
        options: ["<f:convertLength>", "<f:validateLength>", "<h:checkLength>", "<f:lengthRule>"],
        correctAnswer: "<f:validateLength>"
      },
      {
        question: "What happens if a validation fails during the 'Process Validations' phase?",
        options: ["The server crashes", "It throws a Java Exception", "The lifecycle skips directly to the 'Render Response' phase", "It continues to 'Update Model Values'"],
        correctAnswer: "The lifecycle skips directly to the 'Render Response' phase"
      },
      {
        question: "In which phase are action methods (like saving to a database) executed?",
        options: ["Apply Request Values", "Update Model Values", "Invoke Application", "Render Response"],
        correctAnswer: "Invoke Application"
      },
      {
        question: "Which annotation registers a class as a JSF bean?",
        options: ["@Entity", "@Component", "@ManagedBean", "@Controller"],
        correctAnswer: "@ManagedBean"
      },
      {
        question: "Converters in JSF are primarily used to:",
        options: ["Convert HTML to XML", "Convert string input to specific Java data types", "Convert JSF to JSP", "Convert databases"],
        correctAnswer: "Convert string input to specific Java data types"
      },
      {
        question: "JSF components are maintained on the server as a:",
        options: ["Component Tree", "Linked List", "Hash Map", "Database Table"],
        correctAnswer: "Component Tree"
      },
      {
        question: "The configuration file primarily associated with JSF (if annotations aren't used) is:",
        options: ["web.xml", "faces-config.xml", "struts.xml", "spring.xml"],
        correctAnswer: "faces-config.xml"
      },
      {
        question: "Which PrimeFaces prefix is standard for its UI components?",
        options: ["h:", "f:", "p:", "pf:"],
        correctAnswer: "p:"
      },
      {
        question: "What allows JSF to maintain the state of UI components across requests?",
        options: ["Cookies only", "URL Rewriting", "ViewState", "Database records"],
        correctAnswer: "ViewState"
      }
    ]
  },
  {
    chapterNumber: 6,
    chapterName: "Hibernate 4.0",
    questions: [
      {
        question: "What is Hibernate?",
        answer: "Hibernate is a popular, open-source Object-Relational Mapping (ORM) framework for Java. It simplifies database operations by mapping Java classes to database tables and Java data types to SQL data types."
      },
      {
        question: "What is Object-Relational Mapping (O/R Mapping)?",
        answer: "ORM is a programming technique that converts data between incompatible type systems. In Java, it automatically maps object-oriented models (classes and fields) to relational database structures (tables and columns)."
      },
      {
        question: "What are the core interfaces of Hibernate Architecture?",
        answer: "The core interfaces include Configuration, SessionFactory, Session, Transaction, and Query."
      },
      {
        question: "What is the role of the SessionFactory?",
        answer: "SessionFactory is a thread-safe, heavy-weight object that reads the configuration files and creates Session objects. Usually, there is only one SessionFactory per database in an application."
      },
      {
        question: "What is a Hibernate Session?",
        answer: "A Session is a lightweight, non-thread-safe object that represents a single connection to the database. It is used to perform CRUD operations on mapped entities."
      },
      {
        question: "What is the use of the @Entity annotation?",
        answer: "The @Entity annotation is used at the class level to mark a Java class as a Hibernate entity bean, meaning its instances will be mapped to rows in a database table."
      },
      {
        question: "What does the @Id annotation do?",
        answer: "The @Id annotation marks a specific field in the entity class as the primary key of the corresponding database table."
      },
      {
        question: "What is Hibernate Query Language (HQL)?",
        answer: "HQL is an object-oriented query language similar to SQL. However, instead of operating on database tables and columns, HQL operates on Java entity classes and their properties."
      },
      {
        question: "What are the three states of an object in Hibernate?",
        answer: "An object can be Transient (not associated with a session), Persistent (currently associated with a session and mapped to a database row), or Detached (previously persistent, but the session is now closed)."
      },
      {
        question: "What is the difference between save() and persist() in Hibernate?",
        answer: "save() immediately returns the generated identifier and can execute outside a transaction, while persist() makes the object persistent without returning an ID and must be within a transaction boundary."
      },
      {
        question: "What does the @Table annotation specify?",
        answer: "The @Table annotation allows developers to specify the exact name of the database table the entity maps to, which is useful when the class name differs from the table name."
      },
      {
        question: "How does Hibernate handle Transaction management?",
        answer: "Hibernate requires all write operations to occur within a Transaction. You begin a transaction using session.beginTransaction(), perform operations, and call transaction.commit() to save changes."
      },
      {
        question: "What is lazy loading in Hibernate?",
        answer: "Lazy loading is a performance optimization technique where associated objects or collections are not loaded from the database until they are explicitly accessed for the first time."
      },
      {
        question: "What is a dialect in Hibernate?",
        answer: "A SQL dialect is a configuration setting that tells Hibernate exactly which database it is communicating with (e.g., MySQL, Oracle), allowing it to generate the optimized, database-specific SQL."
      },
      {
        question: "What is the hibernate.cfg.xml file?",
        answer: "It is the primary configuration file used to define database connection properties (URL, username, password), the SQL dialect, and the list of mapped entity classes."
      },
      {
        question: "How is an object moved to the 'Detached' state?",
        answer: "An object becomes detached when the Hibernate Session that loaded or saved it is closed using session.close() or if session.clear() is called."
      },
      {
        question: "What is the difference between get() and load()?",
        answer: "get() hits the database immediately and returns null if the object doesn't exist. load() returns a proxy object and throws an ObjectNotFoundException if the data does not exist when accessed."
      },
      {
        question: "Can HQL prevent SQL Injection?",
        answer: "Yes, HQL prevents SQL injection when developers use named parameters or positional parameters (like setParameter()) instead of directly concatenating strings into the query."
      },
      {
        question: "What does the @Column annotation do?",
        answer: "It is used to specify the mapping details of a database column, such as the column name, length, and whether it is nullable or unique, overriding default generation rules."
      },
      {
        question: "Why use Hibernate over standard JDBC?",
        answer: "Hibernate eliminates boilerplate SQL code, handles connection pooling, provides caching mechanisms for better performance, and allows developers to work entirely with Java objects instead of tables."
      }
    ],
    mcqs: [
      {
        question: "What does ORM stand for?",
        options: ["Object Relational Mapping", "Object Resource Model", "Oriented Relational Management", "Object Retrieval Method"],
        correctAnswer: "Object Relational Mapping"
      },
      {
        question: "Which of the following is a heavy-weight, thread-safe object in Hibernate?",
        options: ["Session", "Transaction", "SessionFactory", "Query"],
        correctAnswer: "SessionFactory"
      },
      {
        question: "Which object represents a single database connection and is used for CRUD operations?",
        options: ["SessionFactory", "Session", "Configuration", "Criteria"],
        correctAnswer: "Session"
      },
      {
        question: "Which annotation is required to mark a Java class as a Hibernate mapped entity?",
        options: ["@Table", "@Entity", "@Bean", "@Mapped"],
        correctAnswer: "@Entity"
      },
      {
        question: "Which annotation is used to denote the primary key field?",
        options: ["@Key", "@PrimaryKey", "@Id", "@Unique"],
        correctAnswer: "@Id"
      },
      {
        question: "HQL stands for:",
        options: ["Hyper Query Language", "Hibernate Query Language", "High-level Query Language", "Hardware Query Language"],
        correctAnswer: "Hibernate Query Language"
      },
      {
        question: "HQL operates on:",
        options: ["Database tables and columns", "Java classes and properties", "XML files", "JSON objects"],
        correctAnswer: "Java classes and properties"
      },
      {
        question: "An object that has just been instantiated using the 'new' keyword is in which state?",
        options: ["Persistent", "Detached", "Transient", "Removed"],
        correctAnswer: "Transient"
      },
      {
        question: "An object associated with an open Session is in which state?",
        options: ["Transient", "Persistent", "Detached", "Volatile"],
        correctAnswer: "Persistent"
      },
      {
        question: "Which file is the core configuration file for Hibernate?",
        options: ["web.xml", "hibernate.cfg.xml", "faces-config.xml", "pom.xml"],
        correctAnswer: "hibernate.cfg.xml"
      },
      {
        question: "Which setting helps Hibernate generate database-specific SQL?",
        options: ["Driver", "Dialect", "URL", "Mapping"],
        correctAnswer: "Dialect"
      },
      {
        question: "What exception is thrown by the load() method if the record is not found?",
        options: ["NullPointerException", "SQLException", "ObjectNotFoundException", "HibernateException"],
        correctAnswer: "ObjectNotFoundException"
      },
      {
        question: "Which feature delays the fetching of associated collections until they are accessed?",
        options: ["Eager Loading", "Lazy Loading", "Caching", "Batch Fetching"],
        correctAnswer: "Lazy Loading"
      },
      {
        question: "To save changes to the database, which transaction method must be called?",
        options: ["save()", "update()", "commit()", "close()"],
        correctAnswer: "commit()"
      },
      {
        question: "Which of the following is NOT a valid object state in Hibernate?",
        options: ["Transient", "Persistent", "Detached", "Static"],
        correctAnswer: "Static"
      },
      {
        question: "Which method is used to reattach a detached object to a new session?",
        options: ["reattach()", "update()", "bind()", "connect()"],
        correctAnswer: "update()"
      },
      {
        question: "To map a class property to a specific column name, which annotation is used?",
        options: ["@Table", "@Property", "@Column", "@Field"],
        correctAnswer: "@Column"
      },
      {
        question: "Hibernate is an alternative to:",
        options: ["JSP", "JSF", "JDBC", "Servlets"],
        correctAnswer: "JDBC"
      },
      {
        question: "Which object is used to create a SessionFactory?",
        options: ["Session", "Transaction", "Configuration", "Query"],
        correctAnswer: "Configuration"
      },
      {
        question: "In HQL, `FROM Employee` selects from:",
        options: ["The 'Employee' database table", "The 'Employee' Java class", "The 'employee' XML tag", "The 'employee' schema"],
        correctAnswer: "The 'Employee' Java class"
      }
    ]
  },
  {
    chapterNumber: 7,
    chapterName: "Java Web Frameworks: Spring MVC",
    questions: [
      {
        question: "What is the Spring Framework?",
        answer: "Spring is a powerful, lightweight, open-source application framework for Java. It provides comprehensive infrastructure support, enabling developers to build robust Java applications, particularly focusing on Inversion of Control (IoC)."
      },
      {
        question: "What is Inversion of Control (IoC)?",
        answer: "IoC is a design principle where the control of object creation and dependency management is transferred from the programmer to the Spring container, reducing tight coupling between classes."
      },
      {
        question: "What is Dependency Injection (DI)?",
        answer: "Dependency Injection is the specific pattern used to implement IoC. The Spring container 'injects' required objects (dependencies) into a class at runtime, rather than the class instantiating them itself."
      },
      {
        question: "What is the Spring Architecture?",
        answer: "Spring is modular, comprising several modules like Core Container (Beans, Core, Context, SpEL), AOP, Data Access (JDBC, ORM, Transactions), and Web (MVC)."
      },
      {
        question: "What is a Spring Bean?",
        answer: "A Spring Bean is any standard Java object that is instantiated, assembled, and managed by a Spring IoC container based on configuration metadata (XML or Annotations)."
      },
      {
        question: "Describe the Spring Bean Life Cycle.",
        answer: "The life cycle includes: Instantiation, Populating Properties (DI), initialization callbacks (like postProcessBeforeInitialization and custom init methods), usage, and destruction callbacks."
      },
      {
        question: "What is XML Configuration in Spring?",
        answer: "It is the traditional method of defining Spring Beans and their dependencies using an XML file (e.g., applicationContext.xml) containing <bean> tags."
      },
      {
        question: "What is Aspect-Oriented Programming (AOP)?",
        answer: "AOP is a programming paradigm that allows developers to modularize cross-cutting concerns (like logging, security, or transaction management) separately from the main business logic."
      },
      {
        question: "What is a 'Cross-cutting concern' in AOP?",
        answer: "Cross-cutting concerns are functions that span across multiple points of an application, such as logging, security checks, and database transactions, which AOP separates into 'Aspects'."
      },
      {
        question: "What is Spring MVC?",
        answer: "Spring MVC is the web framework module of Spring built on the Model-View-Controller design pattern. It helps develop flexible, loosely coupled web applications."
      },
      {
        question: "What is the role of the DispatcherServlet?",
        answer: "The DispatcherServlet acts as the Front Controller in Spring MVC. It intercepts all incoming HTTP requests and routes them to the appropriate application Controllers for processing."
      },
      {
        question: "What is the role of a Controller in Spring MVC?",
        answer: "A Controller (marked with @Controller) processes incoming requests routed by the DispatcherServlet, executes business logic, and returns a ModelAndView object containing data and the view name."
      },
      {
        question: "What is the ViewResolver?",
        answer: "The ViewResolver is a Spring MVC component that maps the logical view name returned by a Controller (e.g., 'home') to an actual physical view file (e.g., '/WEB-INF/views/home.jsp')."
      },
      {
        question: "How does Spring manage Transactions?",
        answer: "Spring provides a consistent abstraction for transaction management. It supports both programmatic and declarative transactions (using the @Transactional annotation or XML config)."
      },
      {
        question: "What is Declarative Transaction Management?",
        answer: "It allows developers to manage transactions using configuration (XML or annotations like @Transactional) without writing boilerplate transaction commit/rollback code inside business methods."
      },
      {
        question: "What is the default scope of a Spring Bean?",
        answer: "The default scope is 'singleton', meaning the Spring IoC container creates exactly one instance of the object, which is shared across the entire application."
      },
      {
        question: "What does the @Autowired annotation do?",
        answer: "The @Autowired annotation is used for automatic dependency injection. Spring automatically resolves and injects the collaborating beans into the designated properties, setters, or constructors."
      },
      {
        question: "How does Spring manage Database access?",
        answer: "Spring simplifies database access by providing templates (like JdbcTemplate) and abstracting boilerplate code, exception handling, and resource management, integrating seamlessly with ORM tools like Hibernate."
      },
      {
        question: "What is a 'Pointcut' in AOP?",
        answer: "A Pointcut is an expression that determines precisely where (which methods) an Advice (the cross-cutting action) should be applied in the application."
      },
      {
        question: "What is the benefit of Spring's layered architecture?",
        answer: "Its modular nature allows developers to use only the parts of the framework they need (e.g., using Spring DI without Spring Web), promoting loose coupling and easier testing."
      }
    ],
    mcqs: [
      {
        question: "What is the core principle behind the Spring framework?",
        options: ["Tight Coupling", "Inversion of Control (IoC)", "Multiple Inheritance", "Static Methods"],
        correctAnswer: "Inversion of Control (IoC)"
      },
      {
        question: "Which component acts as the Front Controller in Spring MVC?",
        options: ["ContextLoaderListener", "ActionServlet", "FacesServlet", "DispatcherServlet"],
        correctAnswer: "DispatcherServlet"
      },
      {
        question: "Which design pattern is implemented by Dependency Injection?",
        options: ["Singleton", "Inversion of Control", "Factory", "Observer"],
        correctAnswer: "Inversion of Control"
      },
      {
        question: "What is the default scope of a bean in the Spring framework?",
        options: ["Prototype", "Request", "Singleton", "Session"],
        correctAnswer: "Singleton"
      },
      {
        question: "Which annotation marks a class as a Spring MVC Controller?",
        options: ["@Bean", "@Component", "@Controller", "@Service"],
        correctAnswer: "@Controller"
      },
      {
        question: "Which feature of Spring allows the separation of cross-cutting concerns?",
        options: ["IoC", "AOP (Aspect-Oriented Programming)", "MVC", "JDBC"],
        correctAnswer: "AOP (Aspect-Oriented Programming)"
      },
      {
        question: "In AOP, the action taken by an aspect at a particular point is called:",
        options: ["Pointcut", "Advice", "Joinpoint", "Target"],
        correctAnswer: "Advice"
      },
      {
        question: "Which component resolves logical view names to actual physical view files?",
        options: ["ViewResolver", "DispatcherServlet", "Controller", "ModelAndView"],
        correctAnswer: "ViewResolver"
      },
      {
        question: "Which annotation provides automatic dependency injection in Spring?",
        options: ["@Inject", "@Autowired", "@Resource", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "Which object does a Controller typically return to the DispatcherServlet?",
        options: ["String", "ResultSet", "ModelAndView", "ServletConfig"],
        correctAnswer: "ModelAndView"
      },
      {
        question: "Which annotation is used for declarative transaction management in Spring?",
        options: ["@Transaction", "@Transactional", "@ManageTransaction", "@Tx"],
        correctAnswer: "@Transactional"
      },
      {
        question: "Which of the following is NOT a valid Spring Bean scope?",
        options: ["Singleton", "Prototype", "Thread", "Request"],
        correctAnswer: "Thread"
      },
      {
        question: "In traditional Spring XML configuration, beans are defined using which tag?",
        options: ["<spring-bean>", "<object>", "<component>", "<bean>"],
        correctAnswer: "<bean>"
      },
      {
        question: "Which module of Spring supports integration with Hibernate?",
        options: ["Spring Web", "Spring ORM", "Spring AOP", "Spring Core"],
        correctAnswer: "Spring ORM"
      },
      {
        question: "What is a major advantage of using Spring's JdbcTemplate?",
        options: ["It writes SQL queries automatically", "It manages connection opening, closing, and exception handling automatically", "It acts as a database server", "It compiles HTML code"],
        correctAnswer: "It manages connection opening, closing, and exception handling automatically"
      },
      {
        question: "What manages the lifecycle and dependencies of Spring beans?",
        options: ["The Web Server", "The Database", "The Spring IoC Container", "The DispatcherServlet"],
        correctAnswer: "The Spring IoC Container"
      },
      {
        question: "Which AOP term defines 'where' an advice should be applied?",
        options: ["Pointcut", "Aspect", "Weaving", "Advice"],
        correctAnswer: "Pointcut"
      },
      {
        question: "In Spring MVC, what contains the model data mapped to the view?",
        options: ["Session", "ModelAndView", "RequestDispatcher", "HibernateSession"],
        correctAnswer: "ModelAndView"
      },
      {
        question: "How does Spring facilitate testing of components?",
        options: ["By enforcing tight coupling", "By bypassing Java standards", "Through loose coupling using Dependency Injection", "By creating a mock database automatically"],
        correctAnswer: "Through loose coupling using Dependency Injection"
      },
      {
        question: "Which of the following creates a new bean instance every time it is requested?",
        options: ["Singleton scope", "Prototype scope", "Request scope", "Global session scope"],
        correctAnswer: "Prototype scope"
      }
    ]
  }
];

