export interface VivaQuestion {
question: string;
answer: string;
}

export interface MCQ {
question: string;
options: string[];
answer: string;
}

export interface ChapterData {
chapterNumber: number;
chapterName: string;
vivaQuestions: VivaQuestion[];
mcqs: MCQ[];
}

export interface SubjectData {
subjectName: string;
totalChapters: number;
chapters: ChapterData[];
}

export const gtuComputerNetworksViva: SubjectData = {
subjectName: "COMPUTER NETWORKS",
totalChapters: 5,
chapters: [
{
chapterNumber: 1,
chapterName: "Introduction to computer networks and Internet",
vivaQuestions: [
{ question: "What is a Computer Network?", answer: "Yes sir, a computer network is a system of interconnected computers and devices that can communicate, share resources like printers or internet access, and exchange data with each other using established communication protocols." },
{ question: "What do you mean by the term 'Protocol'?", answer: "Sir, a protocol is a set of rules and formats that govern the exchange of messages between two or more communicating entities in a network. Without protocols, devices wouldn't understand how to talk to each other." },
{ question: "Can you explain the Network Edge?", answer: "Sir, the network edge consists of all the end systems or hosts, like our laptops, smartphones, and servers, which sit at the boundary of the internet and initiate or consume the data." },
{ question: "What constitutes the Network Core?", answer: "Sir, the network core is the massive mesh of interconnected routers and packet switches that transport data between the various end systems situated at the network edge." },
{ question: "What is Packet Switching?", answer: "Sir, packet switching is a method where large chunks of data are broken down into smaller blocks called packets. Each packet is transmitted independently through the network and reassembled at the destination." },
{ question: "How is Packet Switching different from Circuit Switching?", answer: "Well sir, in circuit switching, a dedicated path is reserved for the entire duration of the communication, like old telephone lines. In packet switching, resources are shared dynamically, which is much more efficient for bursty computer data." },
{ question: "What are the four main types of packet delays?", answer: "Sir, the four main types of delays are Processing delay, Queuing delay, Transmission delay, and Propagation delay. Together, they make up the total nodal delay." },
{ question: "What is Queuing Delay?", answer: "Sir, queuing delay is the time a packet spends waiting in a router's buffer before it can be transmitted. It depends heavily on the congestion level of the network." },
{ question: "What is Transmission Delay?", answer: "Sir, transmission delay is the amount of time required to push all the packet's bits into the link. It is calculated as the packet length divided by the link's bandwidth." },
{ question: "What is Propagation Delay?", answer: "Sir, propagation delay is the time it takes for a bit to travel physically from one router to the next across the transmission medium. It depends on the distance and the speed of light in that medium." },
{ question: "What causes Packet Loss?", answer: "Sir, packet loss occurs when a packet arrives at a router whose buffer is already completely full due to heavy congestion. The router simply drops the packet." },
{ question: "What is Network Throughput?", answer: "Sir, throughput is the actual rate at which data is successfully transferred from the sender to the receiver. It is often limited by the bottleneck link, which is the slowest link in the path." },
{ question: "What is a layered architecture in networks?", answer: "Sir, layered architecture organizes network protocols into distinct layers, like the OSI or TCP/IP model. Each layer provides a specific service to the layer above it, making the system easier to design and troubleshoot." },
{ question: "What are the 5 layers of the Internet protocol stack?", answer: "Yes sir, the 5 layers from top to bottom are the Application layer, Transport layer, Network layer, Link layer, and Physical layer." },
{ question: "What is the role of the Physical Layer?", answer: "Sir, the physical layer is responsible for transmitting raw bits over a communication channel, like copper wires, fiber optics, or wireless frequencies." },
{ question: "What is encapsulation?", answer: "Sir, encapsulation is the process where each layer adds its own specific header information to the data payload received from the layer above it before passing it down." },
{ question: "Who coined the term 'packet switching'?", answer: "Sir, packet switching concepts were independently developed by Paul Baran and Donald Davies in the 1960s, which laid the foundation for ARPANET." },
{ question: "What was ARPANET?", answer: "Sir, ARPANET was the first wide-area packet-switched network with distributed control and one of the first networks to implement the TCP/IP protocol suite. It is the precursor to the modern Internet." },
{ question: "What is the difference between a LAN and a WAN?", answer: "Sir, a LAN (Local Area Network) connects computers in a small geographical area like a single building, whereas a WAN (Wide Area Network) covers large physical distances, connecting multiple LANs across cities or countries." },
{ question: "What is a bottleneck link?", answer: "Sir, the bottleneck link is the specific link on an end-to-end path that constrains the maximum overall data throughput. It's essentially the slowest pipe in the connection." }
],
mcqs: [
{ question: "Which of the following resides at the Network Edge?", options: ["Core Routers", "Smartphones and PCs", "Undersea fiber cables", "Switches"], answer: "Smartphones and PCs" },
{ question: "Which switching technique reserves a dedicated path for the entire session?", options: ["Packet Switching", "Message Switching", "Circuit Switching", "Datagram Switching"], answer: "Circuit Switching" },
{ question: "The time taken to push all bits of a packet into the link is called:", options: ["Propagation Delay", "Transmission Delay", "Queuing Delay", "Processing Delay"], answer: "Transmission Delay" },
{ question: "Which layer is at the very top of the Internet protocol stack?", options: ["Transport Layer", "Network Layer", "Application Layer", "Physical Layer"], answer: "Application Layer" },
{ question: "Packet loss typically occurs due to:", options: ["High bandwidth", "Empty router buffers", "Router buffer overflow", "Fast processing speed"], answer: "Router buffer overflow" },
{ question: "What defines the rules for communication between network devices?", options: ["Hardware", "Topology", "Protocol", "Medium"], answer: "Protocol" },
{ question: "Which of the following limits the end-to-end throughput?", options: ["The fastest link", "The bottleneck link", "The propagation delay", "The physical distance"], answer: "The bottleneck link" },
{ question: "ARPANET was primarily based on which concept?", options: ["Circuit Switching", "Packet Switching", "Optical Switching", "Manual Routing"], answer: "Packet Switching" },
{ question: "Adding headers to data as it moves down the layers is called:", options: ["Decapsulation", "Encoding", "Encapsulation", "Multiplexing"], answer: "Encapsulation" },
{ question: "Which delay is highly variable depending on network congestion?", options: ["Processing Delay", "Transmission Delay", "Propagation Delay", "Queuing Delay"], answer: "Queuing Delay" },
{ question: "Which of these is considered the 'Network Core'?", options: ["Web Browsers", "Mobile Phones", "Interconnected Routers", "Local Printers"], answer: "Interconnected Routers" },
{ question: "What does the Physical Layer transmit?", options: ["Packets", "Frames", "Raw Bits", "Segments"], answer: "Raw Bits" },
{ question: "How many layers are in the standard TCP/IP Internet model?", options: ["7", "5", "4", "6"], answer: "5" },
{ question: "The distance between two routers primarily affects which delay?", options: ["Propagation Delay", "Transmission Delay", "Queuing Delay", "Processing Delay"], answer: "Propagation Delay" },
{ question: "A network covering a large geographic area like a country is a:", options: ["LAN", "PAN", "WAN", "CAN"], answer: "WAN" },
{ question: "Which is not an end system?", options: ["Web Server", "Router", "IoT Thermostat", "Laptop"], answer: "Router" },
{ question: "What is the primary unit of data at the Network Layer?", options: ["Frame", "Segment", "Datagram/Packet", "Message"], answer: "Datagram/Packet" },
{ question: "Which topology uses a central hub or switch to connect all devices?", options: ["Ring", "Mesh", "Bus", "Star"], answer: "Star" },
{ question: "Internet service models rely heavily on:", options: ["Best-effort delivery", "Guaranteed delivery time", "Zero packet loss", "Dedicated bandwidth"], answer: "Best-effort delivery" },
{ question: "The formula (Length of packet / Link bandwidth) calculates:", options: ["Propagation Delay", "Round Trip Time", "Transmission Delay", "Throughput"], answer: "Transmission Delay" }
]
},
{
chapterNumber: 2,
chapterName: "Application Layer",
vivaQuestions: [
{ question: "What is the function of the Application Layer?", answer: "Sir, the application layer is the topmost layer that provides interfaces and protocols directly to the software applications, allowing them to communicate over the network. It handles things like web browsing and email." },
{ question: "What is HTTP?", answer: "Yes sir, HTTP stands for Hypertext Transfer Protocol. It is the foundation of data communication on the World Wide Web, defining how messages are formatted and transmitted between a web browser and a web server." },
{ question: "Is HTTP a stateless protocol?", answer: "Yes sir, HTTP is perfectly stateless. This means the server does not retain any information about the client's past requests. Every request is treated as a completely independent transaction." },
{ question: "How do websites remember users if HTTP is stateless?", answer: "Sir, websites use Cookies. A cookie is a small piece of data sent by the server and stored on the client's browser, which is then sent back with future requests to maintain a session." },
{ question: "What is the difference between Persistent and Non-Persistent HTTP?", answer: "Sir, in non-persistent HTTP, a new TCP connection is opened for every single object requested. In persistent HTTP, multiple objects can be sent over a single, kept-alive TCP connection, saving time and overhead." },
{ question: "What is SMTP?", answer: "Sir, SMTP is the Simple Mail Transfer Protocol. It is used to reliably and efficiently push or send outgoing emails from a client to a mail server, or between mail servers." },
{ question: "If SMTP pushes email, how do we pull or receive email?", answer: "Sir, to retrieve or pull emails from the server to the client's inbox, we use protocols like POP3 (Post Office Protocol version 3) or IMAP (Internet Message Access Protocol)." },
{ question: "What is DNS and why is it needed?", answer: "Sir, DNS stands for Domain Name System. It acts like the phonebook of the internet. We use it because humans remember domain names like google.com, but computers route traffic using IP addresses like 142.250.190.46." },
{ question: "What transport protocol does DNS typically use?", answer: "Sir, DNS primarily uses UDP at port 53. Since DNS queries are small and require fast responses, the overhead of TCP's connection setup is avoided, though it can use TCP for large zone transfers." },
{ question: "What are the types of DNS records?", answer: "Sir, some common DNS records include Type A for IPv4 addresses, Type AAAA for IPv6 addresses, CNAME for canonical aliases, and MX for mail exchange servers." },
{ question: "What is Socket Programming?", answer: "Sir, socket programming allows us to write applications that communicate over a network. A socket is an endpoint for sending or receiving data across a computer network." },
{ question: "What is the difference between TCP and UDP sockets?", answer: "Sir, TCP sockets require a connection to be established first and ensure reliable, ordered delivery of streams. UDP sockets are connectionless, sending independent datagrams without guaranteeing delivery or order." },
{ question: "What is a Port Number?", answer: "Sir, a port number is a 16-bit logical identifier that helps the transport layer direct incoming data to the correct specific application process running on a host." },
{ question: "What port number does HTTP use?", answer: "Sir, by default, unencrypted HTTP uses port 80, whereas secure HTTPS uses port 443." },
{ question: "What port does SMTP use?", answer: "Sir, SMTP traditionally operates on port 25 for server-to-server communication, though submission ports like 587 are common for clients." },
{ question: "What is a Web Cache or Proxy Server?", answer: "Sir, a web cache is a server that stores copies of recently requested web objects. When a user requests an object, the cache serves it locally if available, which reduces response time and saves network bandwidth." },
{ question: "What is the difference between POP3 and IMAP?", answer: "Sir, POP3 typically downloads emails to the local device and deletes them from the server, making syncing across multiple devices hard. IMAP keeps emails on the server, allowing seamless syncing across many devices." },
{ question: "What are HTTP methods?", answer: "Sir, HTTP methods indicate the desired action. Common ones are GET to retrieve data, POST to submit data, and HEAD to get only the HTTP headers without the body." },
{ question: "What is an Iterative vs Recursive DNS query?", answer: "Sir, in a recursive query, the local DNS server takes the full burden of resolving the IP for the client. In an iterative query, the server just gives the best hint to the next server, forcing the client to ask the next server itself." },
{ question: "Why do we need application layer protocols?", answer: "Sir, application protocols define the syntax, semantics, and synchronization of communication. They specify how software like browsers and mail clients structure messages so the receiving software understands them." }
],
mcqs: [
{ question: "Which protocol resolves domain names to IP addresses?", options: ["SMTP", "FTP", "DNS", "HTTP"], answer: "DNS" },
{ question: "HTTP operates at which layer of the protocol stack?", options: ["Transport Layer", "Network Layer", "Application Layer", "Link Layer"], answer: "Application Layer" },
{ question: "Which protocol is used to SEND emails to a mail server?", options: ["POP3", "IMAP", "HTTP", "SMTP"], answer: "SMTP" },
{ question: "DNS primarily uses which transport layer protocol?", options: ["TCP", "UDP", "SCTP", "ICMP"], answer: "UDP" },
{ question: "Which mechanism allows HTTP to maintain user state/sessions?", options: ["Sockets", "Cookies", "Caches", "MAC Addresses"], answer: "Cookies" },
{ question: "What is the default port number for HTTP?", options: ["21", "25", "80", "443"], answer: "80" },
{ question: "Which protocol allows you to sync emails across multiple devices while keeping them on the server?", options: ["SMTP", "POP3", "IMAP", "FTP"], answer: "IMAP" },
{ question: "A DNS 'A' record maps a hostname to a(n):", options: ["IPv6 address", "IPv4 address", "Mail server", "Alias name"], answer: "IPv4 address" },
{ question: "Which socket programming method relies on connectionless, best-effort delivery?", options: ["TCP Sockets", "UDP Sockets", "Stream Sockets", "Raw Sockets"], answer: "UDP Sockets" },
{ question: "Which HTTP method is used to submit form data to the server?", options: ["GET", "POST", "HEAD", "TRACE"], answer: "POST" },
{ question: "Persistent HTTP uses how many TCP connections to fetch multiple objects?", options: ["One for each object", "One single connection", "No TCP connections", "Two parallel connections"], answer: "One single connection" },
{ question: "What is the default port for SMTP?", options: ["80", "22", "25", "110"], answer: "25" },
{ question: "Web caches (Proxy servers) primarily help to:", options: ["Encrypt traffic", "Reduce response time and traffic", "Translate IP addresses", "Manage email"], answer: "Reduce response time and traffic" },
{ question: "Which is a 'pull' protocol?", options: ["SMTP", "POP3", "FTP (Upload)", "SNMP"], answer: "POP3" },
{ question: "In socket programming, a server must 'listen' on a specific:", options: ["IP Address only", "MAC Address", "Port Number", "Protocol type"], answer: "Port Number" },
{ question: "A CNAME DNS record is used for:", options: ["IPv4 address", "Mail exchange", "Canonical/Alias names", "Name server identification"], answer: "Canonical/Alias names" },
{ question: "Which is NOT an Application Layer protocol?", options: ["HTTP", "DNS", "TCP", "SMTP"], answer: "TCP" },
{ question: "HTTP is described as a ____ protocol.", options: ["Stateful", "Stateless", "Connectionless", "Lossy"], answer: "Stateless" },
{ question: "The combination of an IP address and a port number forms a:", options: ["Socket", "Segment", "Frame", "Datagram"], answer: "Socket" },
{ question: "To get the HTML of a webpage, a browser sends an HTTP ____ request.", options: ["POST", "PUT", "GET", "DELETE"], answer: "GET" }
]
},
{
chapterNumber: 3,
chapterName: "Transport Layer",
vivaQuestions: [
{ question: "What is the role of the Transport Layer?", answer: "Sir, the transport layer provides logical end-to-end communication between application processes running on different hosts. It takes data from applications, breaks it into segments, and passes them to the network layer." },
{ question: "What are the two main Transport Layer protocols?", answer: "Sir, the two main protocols are TCP (Transmission Control Protocol), which is reliable and connection-oriented, and UDP (User Datagram Protocol), which is unreliable and connectionless." },
{ question: "What is Multiplexing in the Transport Layer?", answer: "Sir, multiplexing is gathering data chunks from different sockets, adding transport header information, and passing it all to the network layer to be transmitted." },
{ question: "What is Demultiplexing?", answer: "Sir, demultiplexing is the reverse process. It happens at the receiving end where the transport layer examines the port numbers in the header to direct the incoming segments to the correct application socket." },
{ question: "Why would an application choose UDP over TCP?", answer: "Sir, an application like video streaming or online gaming might choose UDP because it has no connection establishment delay and no congestion control, allowing data to be pumped out as fast as possible, even if some packets are lost." },
{ question: "What makes TCP a reliable protocol?", answer: "Sir, TCP provides reliable data transfer through mechanisms like sequence numbers to order packets, acknowledgments (ACKs) to confirm receipt, and retransmissions of any lost or corrupted packets." },
{ question: "What is the TCP 3-way handshake?", answer: "Sir, it's the process TCP uses to establish a connection. The client sends a SYN packet, the server replies with a SYN-ACK, and finally, the client sends an ACK back. This ensures both sides are ready to communicate." },
{ question: "What is Flow Control in TCP?", answer: "Sir, flow control is a speed-matching mechanism. TCP prevents a fast sender from overwhelming a slow receiver by using a receive window, which tells the sender how much free buffer space the receiver has." },
{ question: "What is Congestion Control?", answer: "Sir, while flow control protects the receiver, congestion control protects the entire network. TCP monitors packet loss and delays, and throttles back its sending rate to avoid clogging the network's routers." },
{ question: "What is AIMD in TCP congestion control?", answer: "Sir, AIMD stands for Additive Increase, Multiplicative Decrease. TCP slowly increases its sending rate linearly until loss occurs, then it drastically cuts its sending rate in half to alleviate network congestion." },
{ question: "What is TCP Slow Start?", answer: "Sir, Slow Start is the initial phase of TCP connection where the sending rate increases exponentially. Despite its name, it grows very fast to quickly find the network's available capacity before switching to congestion avoidance." },
{ question: "How does TCP detect a lost packet?", answer: "Sir, TCP detects loss primarily in two ways: either a timeout expires before an ACK is received, or it receives three duplicate ACKs for the same packet, triggering a fast retransmit." },
{ question: "What is Fast Retransmit in TCP?", answer: "Sir, if a sender receives three duplicate ACKs, it assumes the packet immediately following the ACKed sequence number was lost, and retransmits it before the timer expires, saving time." },
{ question: "What is the UDP Checksum used for?", answer: "Sir, the checksum provides basic error detection. It is used to determine whether bits within the UDP segment have been altered as it moved from source to destination." },
{ question: "Are TCP and UDP port numbers the same?", answer: "No sir, TCP and UDP have separate, independent port spaces. TCP port 53 is completely different from UDP port 53, though applications like DNS may use the same number on both for convenience." },
{ question: "What is a 'connection-oriented' protocol?", answer: "Sir, it means that before any actual data is transferred, the two end points must first exchange control packets to establish a logical connection and agree on parameters, just like dialing a phone number before talking." },
{ question: "What is Pipelining in reliable data transfer?", answer: "Sir, pipelining allows the sender to transmit multiple packets without waiting for an acknowledgment for each one. This keeps the network link busy and drastically improves throughput compared to stop-and-wait." },
{ question: "What is Go-Back-N (GBN)?", answer: "Sir, Go-Back-N is a pipelining protocol where the sender can send N packets. If a packet is lost, the receiver discards all subsequent packets, and the sender must 'go back' and retransmit the lost packet and all packets that followed it." },
{ question: "What is Selective Repeat (SR)?", answer: "Sir, Selective Repeat is a more efficient pipelining method where the receiver acknowledges correctly received packets individually. The sender only retransmits the specific packets that were lost, rather than everything." },
{ question: "What information is needed to identify a TCP connection?", answer: "Sir, a TCP connection is uniquely identified by a 4-tuple: the Source IP, Source Port, Destination IP, and Destination Port." }
],
mcqs: [
{ question: "Which protocol provides reliable, connection-oriented service?", options: ["UDP", "IP", "TCP", "HTTP"], answer: "TCP" },
{ question: "Which transport protocol is best suited for real-time video streaming?", options: ["TCP", "UDP", "FTP", "SMTP"], answer: "UDP" },
{ question: "Directing incoming segments to the correct application socket is called:", options: ["Multiplexing", "Encapsulation", "Routing", "Demultiplexing"], answer: "Demultiplexing" },
{ question: "TCP connection establishment uses which mechanism?", options: ["2-way handshake", "3-way handshake", "4-way handshake", "Timer expiration"], answer: "3-way handshake" },
{ question: "Which TCP mechanism prevents a fast sender from overwhelming a slow receiver?", options: ["Congestion Control", "Flow Control", "Error Detection", "Routing"], answer: "Flow Control" },
{ question: "Which TCP mechanism prevents overwhelming the core network routers?", options: ["Flow Control", "Congestion Control", "Checksum", "Multiplexing"], answer: "Congestion Control" },
{ question: "In TCP AIMD, when packet loss is detected, the sending window is:", options: ["Increased additively", "Decreased additively", "Decreased multiplicatively", "Set to zero"], answer: "Decreased multiplicatively" },
{ question: "During TCP Slow Start, the congestion window size increases:", options: ["Linearly", "Exponentially", "Logarithmically", "It remains constant"], answer: "Exponentially" },
{ question: "A fast retransmit in TCP is triggered by:", options: ["Timeout", "3 duplicate ACKs", "1 duplicate ACK", "Window size 0"], answer: "3 duplicate ACKs" },
{ question: "Which pipelining protocol requires the sender to resend ALL packets starting from the lost one?", options: ["Selective Repeat", "Stop-and-Wait", "Go-Back-N", "UDP"], answer: "Go-Back-N" },
{ question: "Which pipelining protocol only retransmits the specific lost packet?", options: ["Go-Back-N", "Selective Repeat", "Stop-and-Wait", "CSMA/CD"], answer: "Selective Repeat" },
{ question: "What is the length of a TCP or UDP port number?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "16 bits" },
{ question: "A TCP connection is uniquely identified by a:", options: ["2-tuple", "3-tuple", "4-tuple", "5-tuple"], answer: "4-tuple" },
{ question: "Which field in the UDP header is used for error detection?", options: ["Sequence number", "Acknowledgment number", "Checksum", "Window size"], answer: "Checksum" },
{ question: "TCP guarantees:", options: ["Minimum bandwidth", "In-order, reliable delivery", "Maximum delay", "Security"], answer: "In-order, reliable delivery" },
{ question: "UDP guarantees:", options: ["Reliability", "Order of delivery", "Congestion control", "None of the above"], answer: "None of the above" },
{ question: "The unit of data at the Transport layer is called a:", options: ["Frame", "Segment", "Packet", "Bit"], answer: "Segment" },
{ question: "TCP acknowledges data using:", options: ["Cumulative ACKs", "Negative ACKs", "MAC addresses", "Routing tables"], answer: "Cumulative ACKs" },
{ question: "If the TCP receive window is 0, what does it mean?", options: ["Network is congested", "Receiver buffer is full", "Connection closed", "Packet lost"], answer: "Receiver buffer is full" },
{ question: "Which phase of TCP congestion control probes linearly for bandwidth?", options: ["Slow Start", "Fast Recovery", "Congestion Avoidance", "Connection Establishment"], answer: "Congestion Avoidance" }
]
},
{
chapterNumber: 4,
chapterName: "Network Layer",
vivaQuestions: [
{ question: "What is the primary function of the Network Layer?", answer: "Sir, the network layer is responsible for moving datagrams from the sending host to the receiving host across multiple interconnected networks. Its main tasks are routing and forwarding." },
{ question: "What is the difference between Routing and Forwarding?", answer: "Sir, routing is the network-wide process of determining the best end-to-end path for a packet, which builds the routing tables. Forwarding is the local, router-specific action of moving an arriving packet from an input link to the appropriate output link." },
{ question: "What is an IPv4 address?", answer: "Sir, an IPv4 address is a 32-bit logical address used to uniquely identify devices on an IP network. It is usually represented in dotted-decimal format, like 192.168.1.1." },
{ question: "What is an IPv6 address?", answer: "Sir, due to the depletion of IPv4 addresses, IPv6 was created. It is a 128-bit address, represented in hexadecimal format, providing an unimaginably vast number of unique IP addresses." },
{ question: "What is a Subnet Mask?", answer: "Sir, a subnet mask is used to divide an IP address into two parts: the network portion and the host portion. It helps routers determine which network a particular IP address belongs to." },
{ question: "What does DHCP do?", answer: "Sir, DHCP stands for Dynamic Host Configuration Protocol. It automatically assigns IP addresses, subnet masks, and default gateway info to devices as they join a network, saving manual configuration effort." },
{ question: "What is NAT?", answer: "Sir, NAT stands for Network Address Translation. It allows a router to translate private, internal IP addresses into a single public IP address when communicating with the internet, preserving the global IPv4 address space." },
{ question: "What is the difference between Virtual Circuit and Datagram networks?", answer: "Sir, virtual circuit networks establish a dedicated path (connection) before sending data, keeping state in routers. Datagram networks, like the Internet, route each packet independently without maintaining connection states in routers." },
{ question: "What are Routing Algorithms?", answer: "Sir, routing algorithms are mathematical methods used by routers to calculate the optimal path through the network to reach a destination. The two main types are Link-State and Distance-Vector." },
{ question: "What is a Link-State routing algorithm?", answer: "Sir, in a Link-State algorithm, like OSPF, every router has a complete map or topology of the entire network. They calculate the shortest path to all nodes using Dijkstra's algorithm." },
{ question: "What is a Distance-Vector routing algorithm?", answer: "Sir, in Distance-Vector algorithms, like RIP, a router only knows its direct neighbors and the costs to reach them. Routers iteratively share and update their routing tables with neighbors based on the Bellman-Ford equation." },
{ question: "What is ICMP?", answer: "Sir, ICMP is the Internet Control Message Protocol. It is used by network devices, like routers, to send error messages and operational information, such as when a requested service is not available. Tools like 'ping' use ICMP." },
{ question: "What is Broadcast Routing?", answer: "Sir, broadcast routing is a technique where the network delivers a single packet from one source node to all other nodes on the network simultaneously." },
{ question: "What is Multicast Routing?", answer: "Sir, multicast routing is where a single packet is delivered to a specific, select subset of nodes in the network, rather than everyone, which is highly efficient for things like live video streaming." },
{ question: "What is CIDR?", answer: "Sir, CIDR stands for Classless Inter-Domain Routing. It abolished the rigid Class A, B, and C networks, allowing subnet masks to be of variable length, represented with a slash like /24, to assign IP blocks more flexibly." },
{ question: "What is the role of a Router?", answer: "Sir, a router is a layer 3 device that interconnects different networks. It examines the destination IP address of incoming packets and uses its forwarding table to send them out the correct interface." },
{ question: "What is the Time to Live (TTL) field in an IP packet?", answer: "Sir, TTL is a counter used to prevent packets from looping endlessly in the network. Every router decrements the TTL by 1. If it reaches 0, the packet is dropped." },
{ question: "What is fragmentation in the Network Layer?", answer: "Sir, if an IP packet is too large to pass over a specific link (larger than the MTU), the router fragments the packet into smaller pieces. They are reassembled only at the final destination." },
{ question: "What is BGP?", answer: "Sir, BGP is the Border Gateway Protocol. It is the inter-domain routing protocol of the internet, used to route traffic between entirely different autonomous systems or ISPs." },
{ question: "Why is the Internet Service Model 'Best-Effort'?", answer: "Sir, 'best-effort' means the network layer tries its best to deliver IP packets to their destination, but makes zero guarantees regarding delivery, order, timing, or bandwidth." }
],
mcqs: [
{ question: "The primary functions of the Network layer are:", options: ["Error control and flow control", "Routing and forwarding", "Framing and MAC", "Session establishment"], answer: "Routing and forwarding" },
{ question: "The length of an IPv4 address is:", options: ["16 bits", "32 bits", "64 bits", "128 bits"], answer: "32 bits" },
{ question: "The length of an IPv6 address is:", options: ["32 bits", "64 bits", "128 bits", "256 bits"], answer: "128 bits" },
{ question: "Moving a packet from a router's input to its output link is called:", options: ["Routing", "Forwarding", "Multiplexing", "Switching"], answer: "Forwarding" },
{ question: "Determining the end-to-end path through the network is called:", options: ["Forwarding", "Routing", "Encapsulation", "Addressing"], answer: "Routing" },
{ question: "Which protocol dynamically assigns IP addresses to devices?", options: ["DNS", "NAT", "DHCP", "ICMP"], answer: "DHCP" },
{ question: "Which technology translates private IP addresses to a public IP address?", options: ["DHCP", "BGP", "OSPF", "NAT"], answer: "NAT" },
{ question: "Dijkstra's algorithm is used in which type of routing?", options: ["Distance-Vector", "Link-State", "Multicast", "Broadcast"], answer: "Link-State" },
{ question: "The Bellman-Ford equation is used in which routing algorithm?", options: ["Link-State", "Distance-Vector", "Hierarchical", "Source routing"], answer: "Distance-Vector" },
{ question: "Which network model maintains a connection state inside the routers?", options: ["Datagram network", "Virtual Circuit network", "Ethernet network", "Wireless network"], answer: "Virtual Circuit network" },
{ question: "The Internet uses which type of network model at the network layer?", options: ["Virtual Circuit", "Datagram", "Circuit Switched", "Token Ring"], answer: "Datagram" },
{ question: "Which protocol is used by the 'ping' command for network diagnostics?", options: ["TCP", "UDP", "ICMP", "HTTP"], answer: "ICMP" },
{ question: "Sending a packet to all nodes in the network is called:", options: ["Unicast", "Multicast", "Broadcast", "Anycast"], answer: "Broadcast" },
{ question: "Sending a packet to a specific group of nodes is called:", options: ["Broadcast", "Multicast", "Unicast", "Datagram"], answer: "Multicast" },
{ question: "What field prevents an IP packet from looping infinitely?", options: ["Header Checksum", "Fragment Offset", "Time to Live (TTL)", "Protocol ID"], answer: "Time to Live (TTL)" },
{ question: "CIDR stands for:", options: ["Classless Inter-Domain Routing", "Classful Internet Data Routing", "Common Interface Design Rules", "None of the above"], answer: "Classless Inter-Domain Routing" },
{ question: "If a packet is larger than the link's MTU, what does a router do?", options: ["Compress it", "Fragment it", "Encrypt it", "Drop it immediately"], answer: "Fragment it" },
{ question: "Which protocol is used to route between different Autonomous Systems (ISPs)?", options: ["OSPF", "RIP", "BGP", "ICMP"], answer: "BGP" },
{ question: "OSPF is an example of a(n):", options: ["Distance-Vector protocol", "Link-State protocol", "Path-Vector protocol", "Application protocol"], answer: "Link-State protocol" },
{ question: "The IP protocol provides which type of service?", options: ["Guaranteed delivery", "In-order delivery", "Best-effort delivery", "Secure delivery"], answer: "Best-effort delivery" }
]
},
{
chapterNumber: 5,
chapterName: "The Link layer and Local area networks",
vivaQuestions: [
{ question: "What is the primary function of the Link Layer?", answer: "Sir, the link layer is responsible for transferring datagrams across a single, direct communication link between physically adjacent nodes, like from your computer to the Wi-Fi router." },
{ question: "What is a MAC address?", answer: "Sir, MAC stands for Media Access Control. It is a 48-bit physical address burnt into the network interface card (NIC) by the manufacturer, ensuring every device in the world has a unique hardware identity." },
{ question: "How does the Link layer handle errors?", answer: "Sir, the link layer uses error-detection and sometimes error-correction techniques. It adds extra parity bits or a Cyclic Redundancy Check (CRC) to the frame to detect if bits were flipped by noise during transmission." },
{ question: "What is ARP?", answer: "Yes sir, ARP is the Address Resolution Protocol. It translates an IP address, which is logical, into a MAC address, which is physical. A device uses ARP to find the MAC address of another device on the same local network." },
{ question: "What is a Multiple Access Protocol?", answer: "Sir, when multiple devices share a single broadcast medium, like air for Wi-Fi or a single cable, they might talk at the same time, causing collisions. Multiple access protocols dictate rules on how nodes share this channel to minimize collisions." },
{ question: "What is CSMA/CD?", answer: "Sir, CSMA/CD stands for Carrier Sense Multiple Access with Collision Detection. Used in wired Ethernet, it means a device listens to the cable before sending. If a collision occurs while sending, it stops, waits a random backoff time, and tries again." },
{ question: "What is CSMA/CA?", answer: "Sir, CSMA/CA uses Collision Avoidance and is heavily used in Wireless LANs like Wi-Fi. Because wireless nodes can't easily detect collisions, they use 'request to send' and 'clear to send' messages to avoid them entirely." },
{ question: "What is Ethernet?", answer: "Sir, Ethernet is the most dominant and widely used wired Local Area Network (LAN) technology. It is highly successful because it's cheap, fast, and easy to maintain." },
{ question: "What is the difference between a Hub and a Switch?", answer: "Sir, a Hub is a dumb layer 1 device that simply repeats incoming electrical signals out to all ports, causing collisions. A Switch is a smart layer 2 device that learns MAC addresses and forwards frames only to the specific intended port." },
{ question: "How does a Switch learn MAC addresses?", answer: "Sir, a switch maintains a switch table. Whenever it receives a frame, it reads the Source MAC address and records it along with the port it arrived on. This way, it learns where devices are located over time." },
{ question: "What is a VLAN?", answer: "Sir, VLAN stands for Virtual Local Area Network. It is a logical grouping of network devices on a switch. Even if devices are on the same physical switch, separating them into different VLANs isolates their broadcast traffic for security and performance." },
{ question: "Why do we use VLANs?", answer: "Sir, VLANs reduce broadcast storms, improve network security by isolating sensitive departments, and simplify network management without having to physically move cables." },
{ question: "What is a CRC?", answer: "Sir, Cyclic Redundancy Check is a powerful error-detection technique. It treats the data as a large polynomial and divides it by a fixed generator. The remainder is attached to the frame, allowing the receiver to easily check for corruption." },
{ question: "What is a frame?", answer: "Sir, a frame is the Data Link Layer's unit of data. The link layer takes a network layer datagram and encapsulates it with a link layer header, containing MAC addresses, and a trailer, containing error detection codes, to form a frame." },
{ question: "Is MAC address flat or hierarchical?", answer: "Sir, unlike IP addresses which are hierarchical and reflect your location on the internet, MAC addresses are completely flat. If you move your laptop to another country, its MAC address stays exactly the same." },
{ question: "What happens if an Ethernet switch doesn't know the destination MAC address?", answer: "Sir, if the destination MAC is not in its switch table, the switch will 'flood' the frame, meaning it broadcasts it out to every port except the one it arrived on." },
{ question: "What is a broadcast MAC address?", answer: "Sir, a broadcast MAC address is composed of all 1s, represented in hexadecimal as FF:FF:FF:FF:FF:FF. Any frame sent to this address will be received and processed by all devices on the local network." },
{ question: "What is the purpose of the preamble in an Ethernet frame?", answer: "Sir, the preamble is a sequence of alternating 1s and 0s added to the beginning of the frame. It allows the receiver's hardware clock to synchronize with the sender's clock before reading the actual data." },
{ question: "Are switches transparent to end systems?", answer: "Yes sir, switches are completely transparent. The end devices, like our computers, do not know that a switch is forwarding their frames. They just think they are communicating directly over the LAN." },
{ question: "What is polling in multiple access?", answer: "Sir, polling is a controlled access method where a central 'master' node invites each 'slave' node to transmit in turn, ensuring no collisions happen, though it adds overhead." }
],
mcqs: [
{ question: "The primary unit of data at the Link Layer is called a:", options: ["Packet", "Segment", "Frame", "Datagram"], answer: "Frame" },
{ question: "A MAC address is how many bits long?", options: ["16", "32", "48", "128"], answer: "48" },
{ question: "Which protocol translates an IP address into a MAC address?", options: ["DNS", "DHCP", "ARP", "NAT"], answer: "ARP" },
{ question: "Which is a robust error-detection technique used at the link layer?", options: ["Parity Check", "Checksum", "CRC", "AES"], answer: "CRC" },
{ question: "Which protocol dictates how devices share a single communication channel?", options: ["Routing Protocol", "Multiple Access Protocol", "Transport Protocol", "Application Protocol"], answer: "Multiple Access Protocol" },
{ question: "Wired Ethernet uses which multiple access protocol?", options: ["CSMA/CA", "CSMA/CD", "Token Passing", "Slotted ALOHA"], answer: "CSMA/CD" },
{ question: "Wireless LANs (Wi-Fi) use which multiple access protocol?", options: ["CSMA/CA", "CSMA/CD", "FDMA", "TDMA"], answer: "CSMA/CA" },
{ question: "Which device operates at the Link Layer (Layer 2)?", options: ["Hub", "Router", "Switch", "Repeater"], answer: "Switch" },
{ question: "Unlike an IP address, a MAC address is:", options: ["Hierarchical", "Flat", "Dynamic", "Variable length"], answer: "Flat" },
{ question: "What does a switch do if it doesn't know the destination MAC address?", options: ["Drops the frame", "Sends it back", "Floods it out all other ports", "Holds it forever"], answer: "Floods it out all other ports" },
{ question: "VLAN stands for:", options: ["Virtual Local Area Network", "Variable Local Area Network", "Video Local Area Network", "Voice Local Area Network"], answer: "Virtual Local Area Network" },
{ question: "The primary purpose of a VLAN is to:", options: ["Increase internet speed", "Isolate broadcast domains on a single switch", "Assign IP addresses", "Find MAC addresses"], answer: "Isolate broadcast domains on a single switch" },
{ question: "The Ethernet frame starts with a sequence for clock synchronization called the:", options: ["CRC", "Payload", "Preamble", "Header"], answer: "Preamble" },
{ question: "What is the broadcast MAC address?", options: ["00:00:00:00:00:00", "FF:FF:FF:FF:FF:FF", "11:11:11:11:11:11", "AA:BB:CC:DD:EE:FF"], answer: "FF:FF:FF:FF:FF:FF" },
{ question: "Which device simply repeats signals to all ports, causing collisions?", options: ["Switch", "Router", "Hub", "Gateway"], answer: "Hub" },
{ question: "Switches populate their MAC address tables by looking at the:", options: ["Source IP address", "Destination IP address", "Destination MAC address", "Source MAC address"], answer: "Source MAC address" },
{ question: "Which Multiple Access strategy divides the channel into time slots or frequencies?", options: ["Random Access", "Channel Partitioning", "Taking Turns", "CSMA"], answer: "Channel Partitioning" },
{ question: "In CSMA/CD, what happens when a collision is detected?", options: ["Senders transmit faster", "Senders abort and wait a random time", "Switch crashes", "Data is recovered instantly"], answer: "Senders abort and wait a random time" },
{ question: "ARP requests are sent using:", options: ["Unicast", "Multicast", "Broadcast", "Anycast"], answer: "Broadcast" },
{ question: "Switches are considered 'plug-and-play' and:", options: ["Need IP configuration", "Are transparent to hosts", "Route packets globally", "Decrease network throughput"], answer: "Are transparent to hosts" }
]
}
]
};