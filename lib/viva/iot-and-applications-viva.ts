export const iotAndApplicationsViva = [
  {
    chapterNumber: 1,
    chapterName: "Introduction to Internet of Things",
    questions: [
      {
        question: "What is the Internet of Things (IoT)?",
        answer: "IoT is a network of interconnected physical devices embedded with sensors, software, and network connectivity. It allows these 'things' to collect, exchange, and act on data without human intervention."
      },
      {
        question: "What are the primary characteristics of IoT?",
        answer: "Key characteristics include dynamic and self-adapting nature, unique identity (like an IP address), integrated information network, scalability, and interconnectivity of diverse devices."
      },
      {
        question: "What is meant by 'Things' in IoT?",
        answer: "'Things' refer to the physical objects or smart devices (like wearables, smart appliances, or industrial machines) that are equipped with sensors and microcontrollers to connect to the internet."
      },
      {
        question: "Explain the IoT architecture stack.",
        answer: "The IoT stack typically consists of four layers: the Device/Perception Layer (sensors), the Network/Transport Layer (gateways/routers), the Processing/Data Management Layer (Cloud), and the Application Layer (user interfaces)."
      },
      {
        question: "What are the main enabling technologies for IoT?",
        answer: "Enabling technologies include Wireless Sensor Networks (WSN), Cloud Computing, Big Data Analytics, Embedded Systems, and communication protocols like RFID and Bluetooth."
      },
      {
        question: "What is a Wireless Sensor Network (WSN)?",
        answer: "WSN is a group of spatially dispersed and dedicated sensors for monitoring and recording the physical conditions of the environment and organizing the collected data at a central location."
      },
      {
        question: "How does IoT differ from WSN?",
        answer: "WSN is a subset of IoT focused only on sensing and gathering data via sensor nodes. IoT is a broader concept that includes WSNs, cloud computing, data analytics, and user applications to take actions."
      },
      {
        question: "What are the major challenges in IoT implementation?",
        answer: "Major challenges include data security and privacy, interoperability between different standards, power management for remote sensors, network scalability, and handling massive data volumes."
      },
      {
        question: "Describe IoT Level 1.",
        answer: "IoT Level 1 systems have a single node/device that performs sensing and/or actuation, stores data locally, and hosts the application. It is used for simple, low-complexity applications."
      },
      {
        question: "What is the difference between IoT Level 1 and Level 6?",
        answer: "Level 1 involves a single local node doing everything. Level 6 contains multiple independent end nodes, centralized cloud storage, cloud-based analytics, and centralized controllers, used for complex systems like smart cities."
      },
      {
        question: "What is a Cyber-Physical System (CPS)?",
        answer: "CPS represents an integration of computation, networking, and physical processes. Embedded computers and networks monitor and control the physical processes, often with feedback loops."
      },
      {
        question: "How is IoT related to Cyber-Physical Systems (CPS)?",
        answer: "IoT is essentially the networking infrastructure that enables CPS. While IoT focuses on connecting devices to the internet, CPS focuses on the intersection and control of the physical and digital worlds."
      },
      {
        question: "Name some common application areas of IoT.",
        answer: "IoT is widely used in Smart Homes, Healthcare (remote monitoring), Agriculture (smart farming), Industrial Automation (IIoT), Smart Grids, and Smart City infrastructure."
      },
      {
        question: "What role does Big Data play in IoT?",
        answer: "IoT devices generate massive amounts of continuous data. Big Data analytics is required to process, store, and extract meaningful insights from this data to enable smart decision-making."
      },
      {
        question: "What is the function of an IoT Gateway?",
        answer: "An IoT gateway acts as a bridge between the local edge devices (sensors/actuators) and the cloud. It often translates protocols, filters data, and provides localized security."
      },
      {
        question: "Why is interoperability a challenge in IoT?",
        answer: "Because IoT devices are manufactured by many different vendors using diverse hardware, operating systems, and communication protocols, making them work together seamlessly is difficult."
      },
      {
        question: "Explain the concept of 'Unique Identity' in IoT.",
        answer: "Every connected device in an IoT ecosystem must have a unique identifier, such as an IPv6 address or a MAC address, so it can be distinctly recognized and managed over the internet."
      },
      {
        question: "What is the role of Actuators in an IoT system?",
        answer: "While sensors collect data from the environment, actuators do the opposite; they take electrical inputs from the IoT system and convert them into physical actions (like turning on a motor or valve)."
      },
      {
        question: "What are IoT levels based on?",
        answer: "IoT levels (1 to 6) are categorized based on the system's complexity, the number of nodes, where the data is stored (local vs cloud), where the analysis happens, and the application scale."
      },
      {
        question: "How does IPv6 enable the expansion of IoT?",
        answer: "IPv4 has a limited number of addresses which are exhausted. IPv6 provides a 128-bit address space, allowing virtually unlimited unique IP addresses for billions of new IoT devices."
      }
    ],
    mcqs: [
      {
        question: "What does IoT stand for?",
        options: ["Intranet of Things", "Internet of Things", "Information of Things", "Interconnection of Technology"],
        correctAnswer: "Internet of Things"
      },
      {
        question: "Which of the following is an essential characteristic of an IoT device?",
        options: ["Must have a screen", "Must be battery powered", "Must have a unique identity", "Must be stationary"],
        correctAnswer: "Must have a unique identity"
      },
      {
        question: "Which layer in the IoT architecture is responsible for gathering data from the environment?",
        options: ["Network Layer", "Application Layer", "Perception/Device Layer", "Processing Layer"],
        correctAnswer: "Perception/Device Layer"
      },
      {
        question: "What is the primary function of WSN in IoT?",
        options: ["Data rendering", "Cloud storage", "Sensing and gathering environmental data", "Protocol translation"],
        correctAnswer: "Sensing and gathering environmental data"
      },
      {
        question: "CPS stands for:",
        options: ["Cyber-Physical System", "Core Processing System", "Cyber Protocol Service", "Control Processing Sensor"],
        correctAnswer: "Cyber-Physical System"
      },
      {
        question: "Which IoT level is best suited for a single, localized smart home appliance without cloud storage?",
        options: ["Level 1", "Level 3", "Level 5", "Level 6"],
        correctAnswer: "Level 1"
      },
      {
        question: "Which technology allows billions of IoT devices to have unique IP addresses?",
        options: ["IPv4", "IPv6", "MAC filtering", "Bluetooth"],
        correctAnswer: "IPv6"
      },
      {
        question: "What converts electrical signals into physical movement in an IoT system?",
        options: ["Sensor", "Router", "Actuator", "Gateway"],
        correctAnswer: "Actuator"
      },
      {
        question: "Which of the following acts as a bridge between sensor nodes and the Cloud?",
        options: ["Actuator", "IoT Gateway", "Database", "Dashboard"],
        correctAnswer: "IoT Gateway"
      },
      {
        question: "A major challenge in IoT involving different devices communicating with each other is called:",
        options: ["Scalability", "Interoperability", "Latency", "Storage"],
        correctAnswer: "Interoperability"
      },
      {
        question: "Which IoT level involves multiple independent nodes, cloud storage, and centralized controllers used for Smart Cities?",
        options: ["Level 1", "Level 2", "Level 4", "Level 6"],
        correctAnswer: "Level 6"
      },
      {
        question: "Which technology is considered the 'brain' of IoT for analyzing massive datasets?",
        options: ["RFID", "Big Data Analytics", "Sensors", "Actuators"],
        correctAnswer: "Big Data Analytics"
      },
      {
        question: "What converts physical environmental changes into measurable electrical signals?",
        options: ["Actuators", "Sensors", "Gateways", "Routers"],
        correctAnswer: "Sensors"
      },
      {
        question: "The concept where physical objects are tightly integrated with the internet and computational networks is:",
        options: ["Intranet", "Cyber-Physical Systems", "Local Area Network", "Virtual Reality"],
        correctAnswer: "Cyber-Physical Systems"
      },
      {
        question: "Which of the following is NOT a fundamental component of an IoT system?",
        options: ["Sensors", "Connectivity", "User Interface", "CD-ROM Drive"],
        correctAnswer: "CD-ROM Drive"
      },
      {
        question: "What is the primary concern for users adopting IoT in their homes?",
        options: ["Device color", "Security and Privacy", "Screen resolution", "Device weight"],
        correctAnswer: "Security and Privacy"
      },
      {
        question: "RFID stands for:",
        options: ["Radio Frequency Identification", "Random Frequency Indicator", "Radio Fast ID", "Remote Frequency ID"],
        correctAnswer: "Radio Frequency Identification"
      },
      {
        question: "In the IoT stack, which layer provides user-centric services like smart home apps?",
        options: ["Perception Layer", "Network Layer", "Application Layer", "Hardware Layer"],
        correctAnswer: "Application Layer"
      },
      {
        question: "IoT systems are inherently dynamic. This means:",
        options: ["They never change state", "Devices adapt to changing contexts and environments", "They only work during the day", "They require manual resets constantly"],
        correctAnswer: "Devices adapt to changing contexts and environments"
      },
      {
        question: "The collection of interconnected sensors routing data to a central hub is known as:",
        options: ["VPN", "WSN", "FTP", "HTTP"],
        correctAnswer: "WSN"
      }
    ]
  },
  {
    chapterNumber: 2,
    chapterName: "Sensors, Microcontrollers, and Their Interfacing",
    questions: [
      {
        question: "What is a sensor?",
        answer: "A sensor is an electronic device that detects and responds to some type of input from the physical environment, such as light, heat, motion, moisture, or pressure, converting it into an electrical signal."
      },
      {
        question: "What is the difference between an active and a passive sensor?",
        answer: "Active sensors require an external power source to operate and emit energy (like an ultrasonic sensor). Passive sensors do not require external power and simply detect environmental energy (like a thermistor)."
      },
      {
        question: "Differentiate between analog and digital sensors.",
        answer: "Analog sensors produce a continuous voltage signal proportional to the measured quantity. Digital sensors convert the measured quantity into discrete digital signals (0s and 1s) internally before sending them."
      },
      {
        question: "What is a Microcontroller?",
        answer: "A microcontroller is a compact integrated circuit designed to govern a specific operation in an embedded system. It includes a processor, memory (RAM/ROM), and programmable input/output peripherals on a single chip."
      },
      {
        question: "How does a Microcontroller differ from a Microprocessor?",
        answer: "A microprocessor is just a CPU and needs external memory and I/O components. A microcontroller has the CPU, memory, and I/O integrated onto a single chip, making it ideal for compact, low-power IoT devices."
      },
      {
        question: "What is Sensor Interfacing?",
        answer: "Sensor interfacing is the hardware and software process of connecting a sensor to a microcontroller, allowing the microcontroller to read, process, and act upon the sensor's electrical signals."
      },
      {
        question: "What is the role of an ADC in sensor interfacing?",
        answer: "ADC stands for Analog-to-Digital Converter. Since microcontrollers only understand digital data (0s and 1s), an ADC translates the continuous voltage from analog sensors into digital numbers."
      },
      {
        question: "What is the ARM architecture?",
        answer: "ARM (Advanced RISC Machine) is a family of reduced instruction set computing (RISC) architectures for computer processors. It is highly valued in IoT for its low cost, low power consumption, and high efficiency."
      },
      {
        question: "Why are ARM microcontrollers widely used in IoT?",
        answer: "ARM microcontrollers are preferred because of their low power consumption, compact size, high processing speed, and extensive ecosystem, making them perfect for battery-operated edge devices."
      },
      {
        question: "Give examples of commonly used IoT sensors.",
        answer: "Common sensors include Temperature (LM35), Humidity (DHT11), Ultrasonic (HC-SR04 for distance), PIR (motion detection), IR (obstacle detection), and LDR (light intensity)."
      },
      {
        question: "How does a PIR sensor work?",
        answer: "A Passive Infrared (PIR) sensor measures infrared light radiating from objects in its field of view. It is primarily used to detect the motion of warm bodies, like humans or animals."
      },
      {
        question: "How does an Ultrasonic sensor measure distance?",
        answer: "It emits high-frequency sound waves (ping) and calculates the time it takes for the echo to return after bouncing off an object. Distance is calculated using the speed of sound and time."
      },
      {
        question: "What are GPIO pins?",
        answer: "General-Purpose Input/Output (GPIO) pins are uncommitted digital signal pins on an integrated circuit or microcontroller that can be controlled by the user at runtime to read sensors or drive actuators."
      },
      {
        question: "What is I2C protocol in sensor interfacing?",
        answer: "I2C (Inter-Integrated Circuit) is a synchronous, multi-master, multi-slave, packet-switched serial communication bus. It is widely used for attaching lower-speed peripheral ICs to processors in short-distance communication."
      },
      {
        question: "What is SPI in sensor interfacing?",
        answer: "Serial Peripheral Interface (SPI) is a synchronous serial communication interface specification used for short-distance communication, primarily in embedded systems, offering higher speeds than I2C."
      },
      {
        question: "What is Pulse Width Modulation (PWM) used for?",
        answer: "PWM is a technique for getting analog results with digital means. It is used to control the amount of power delivered to an actuator, such as dimming an LED or controlling motor speed."
      },
      {
        question: "How do you control an actuator using a microcontroller?",
        answer: "The microcontroller executes a program to evaluate sensor data, then sends a digital signal (HIGH/LOW or PWM) to a specific GPIO pin connected to the actuator (often via a relay or motor driver)."
      },
      {
        question: "What is a relay and why is it used in IoT?",
        answer: "A relay is an electrically operated switch. It is used in IoT to allow a low-voltage microcontroller to safely control high-voltage household appliances (like AC lights or fans)."
      },
      {
        question: "What does RISC stand for in ARM?",
        answer: "RISC stands for Reduced Instruction Set Computer. It is an architecture designed to execute a smaller number of highly optimized instructions, making the processor fast and power-efficient."
      },
      {
        question: "What is sensor calibration?",
        answer: "Calibration is the process of adjusting or mapping the raw output values of a sensor to ensure they accurately represent the physical quantity being measured against a known standard."
      }
    ],
    mcqs: [
      {
        question: "Which of the following converts a physical parameter into an electrical signal?",
        options: ["Actuator", "Sensor", "Gateway", "Router"],
        correctAnswer: "Sensor"
      },
      {
        question: "Which of the following components are found inside a Microcontroller?",
        options: ["CPU only", "Memory only", "CPU, Memory, and I/O peripherals", "Power supply only"],
        correctAnswer: "CPU, Memory, and I/O peripherals"
      },
      {
        question: "Which architecture is highly popular in IoT devices due to low power consumption?",
        options: ["x86", "ARM", "PowerPC", "MIPS"],
        correctAnswer: "ARM"
      },
      {
        question: "What does ADC stand for in embedded systems?",
        options: ["Analog Data Control", "Automated Digital Compute", "Analog to Digital Converter", "Advanced Device Controller"],
        correctAnswer: "Analog to Digital Converter"
      },
      {
        question: "Which sensor is specifically used to detect human motion?",
        options: ["LDR", "DHT11", "PIR Sensor", "Ultrasonic Sensor"],
        correctAnswer: "PIR Sensor"
      },
      {
        question: "An LDR (Light Dependent Resistor) is used to detect:",
        options: ["Temperature", "Light intensity", "Humidity", "Sound"],
        correctAnswer: "Light intensity"
      },
      {
        question: "A sensor that requires an external power source to operate is called:",
        options: ["Passive Sensor", "Active Sensor", "Digital Sensor", "Blind Sensor"],
        correctAnswer: "Active Sensor"
      },
      {
        question: "Which communication protocol is known as a 2-wire protocol (SDA and SCL)?",
        options: ["SPI", "UART", "I2C", "PCIe"],
        correctAnswer: "I2C"
      },
      {
        question: "Which of the following is an actuator?",
        options: ["Thermistor", "DC Motor", "Photodiode", "Microphone"],
        correctAnswer: "DC Motor"
      },
      {
        question: "What technique is used to dim an LED using a digital pin?",
        options: ["ADC", "I2C", "PWM", "SPI"],
        correctAnswer: "PWM"
      },
      {
        question: "Which sensor emits sound waves to measure distance?",
        options: ["PIR", "LDR", "Ultrasonic", "IR Sensor"],
        correctAnswer: "Ultrasonic"
      },
      {
        question: "ARM stands for:",
        options: ["Advanced RISC Machine", "Automated RISC Machine", "Advanced Robot Machine", "Analog Reading Mechanism"],
        correctAnswer: "Advanced RISC Machine"
      },
      {
        question: "RISC architecture is designed to:",
        options: ["Use complex instructions", "Use a reduced, optimized instruction set", "Maximize power consumption", "Require large cooling fans"],
        correctAnswer: "Use a reduced, optimized instruction set"
      },
      {
        question: "Which component is needed to control a 220V AC appliance using a 5V microcontroller?",
        options: ["Resistor", "Capacitor", "Relay", "Diode"],
        correctAnswer: "Relay"
      },
      {
        question: "Which type of sensor outputs continuous voltage levels?",
        options: ["Digital Sensor", "Analog Sensor", "Binary Sensor", "Boolean Sensor"],
        correctAnswer: "Analog Sensor"
      },
      {
        question: "What does GPIO stand for?",
        options: ["General Purpose Input Output", "Global Processing Internal Operations", "Generic Pin Input Output", "Global Pin Input Output"],
        correctAnswer: "General Purpose Input Output"
      },
      {
        question: "The DHT11 sensor is commonly used to measure:",
        options: ["Distance", "Temperature and Humidity", "Light and Color", "Gas concentration"],
        correctAnswer: "Temperature and Humidity"
      },
      {
        question: "Which protocol provides a faster data transfer rate?",
        options: ["I2C", "SPI", "UART", "RS232"],
        correctAnswer: "SPI"
      },
      {
        question: "A microprocessor lacks which of the following internal components compared to a microcontroller?",
        options: ["ALU", "Registers", "Built-in RAM and ROM", "Control Unit"],
        correctAnswer: "Built-in RAM and ROM"
      },
      {
        question: "Which of the following is NOT a characteristic of ARM processors?",
        options: ["Low power consumption", "High heat generation", "Compact size", "RISC architecture"],
        correctAnswer: "High heat generation"
      }
    ]
  },
  {
    chapterNumber: 3,
    chapterName: "Protocols for IoT",
    questions: [
      {
        question: "What is a messaging protocol in IoT?",
        answer: "A messaging protocol governs how data is formatted and exchanged between IoT devices and servers. Examples include MQTT, CoAP, AMQP, and HTTP."
      },
      {
        question: "What is MQTT?",
        answer: "MQTT (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe messaging protocol designed for constrained devices and low-bandwidth, high-latency networks."
      },
      {
        question: "Explain the Publish-Subscribe model in MQTT.",
        answer: "In MQTT, devices (publishers) send messages to a central server (Broker) on a specific 'topic'. Other devices (subscribers) listen to that topic to receive the messages, decoupling the sender and receiver."
      },
      {
        question: "What is CoAP?",
        answer: "CoAP (Constrained Application Protocol) is a specialized web transfer protocol designed to translate the HTTP model into constrained environments, typically running over UDP."
      },
      {
        question: "What is the primary difference between MQTT and CoAP?",
        answer: "MQTT uses a Publish/Subscribe model running over TCP, ideal for multi-device messaging. CoAP uses a Request/Response model running over UDP, ideal for direct device-to-device state transfers."
      },
      {
        question: "What is a Transport Protocol?",
        answer: "Transport protocols operate at the transport layer of the network stack, responsible for end-to-end communication services. The two main protocols are TCP (reliable) and UDP (fast, unreliable)."
      },
      {
        question: "Why is UDP sometimes preferred over TCP in IoT?",
        answer: "UDP is connectionless and lacks error-checking overhead, making it faster and much less power-intensive than TCP, which is ideal for small, battery-powered sensors sending non-critical data."
      },
      {
        question: "What is IPv4?",
        answer: "IPv4 is the fourth version of the Internet Protocol. It uses a 32-bit address scheme, providing roughly 4.3 billion unique IP addresses, which is insufficient for the billions of IoT devices."
      },
      {
        question: "What is IPv6 and why is it essential for IoT?",
        answer: "IPv6 is the latest Internet Protocol using a 128-bit address space. It provides an almost infinite number of unique addresses, fulfilling the primary requirement for the massive scale of IoT ecosystems."
      },
      {
        question: "What is a URI?",
        answer: "A URI (Uniform Resource Identifier) is a string of characters used to unambiguously identify a particular resource. It encompasses both URLs (locators) and URNs (names)."
      },
      {
        question: "What is AMQP?",
        answer: "Advanced Message Queuing Protocol (AMQP) is an open standard application layer protocol for message-oriented middleware. It provides high reliability, security, and queuing, often used in backend IoT servers."
      },
      {
        question: "What is the role of an MQTT Broker?",
        answer: "The Broker is the central hub in MQTT. It receives all published messages, filters them by topic, and distributes them to all clients subscribed to those topics."
      },
      {
        question: "What does QoS mean in MQTT?",
        answer: "Quality of Service (QoS) in MQTT defines the guarantee of message delivery. QoS 0 is 'at most once', QoS 1 is 'at least once', and QoS 2 is 'exactly once'."
      },
      {
        question: "How does CoAP relate to REST architecture?",
        answer: "CoAP is designed to be a lightweight version of RESTful HTTP. It supports standard REST methods like GET, POST, PUT, and DELETE but is optimized for minimal overhead on constrained devices."
      },
      {
        question: "What is HTTP and why is it not always suitable for IoT?",
        answer: "HTTP is the foundational protocol of the web. It is often too heavy and power-consuming for small IoT sensors because of its large headers and reliance on continuous TCP connections."
      },
      {
        question: "What is XMPP?",
        answer: "Extensible Messaging and Presence Protocol (XMPP) is an XML-based protocol primarily used for real-time human-to-human communication (chat) but adapted in IoT for device presence and messaging."
      },
      {
        question: "Explain the difference between URI and URL.",
        answer: "A URI identifies a resource either by location, name, or both. A URL is a specific type of URI that identifies a resource exclusively by specifying its exact location on the network (e.g., http://...)."
      },
      {
        question: "What port does MQTT typically run on?",
        answer: "MQTT typically runs on TCP port 1883 for unencrypted communication, and port 8883 for secure, encrypted communication (MQTT over TLS)."
      },
      {
        question: "What is IP addressing?",
        answer: "IP addressing assigns a unique numerical label to every device connected to a computer network, allowing devices to locate and communicate with each other over the internet."
      },
      {
        question: "Why do we use messaging protocols instead of direct IP communication in IoT?",
        answer: "Messaging protocols provide essential features like formatting, delivery guarantees (QoS), security, and routing (like publish/subscribe), which raw IP/TCP packets do not inherently provide."
      }
    ],
    mcqs: [
      {
        question: "Which IoT protocol uses a Publish/Subscribe architecture?",
        options: ["HTTP", "CoAP", "MQTT", "FTP"],
        correctAnswer: "MQTT"
      },
      {
        question: "What acts as a central hub in the MQTT protocol?",
        options: ["Router", "Broker", "Gateway", "Subscriber"],
        correctAnswer: "Broker"
      },
      {
        question: "Which of the following transport protocols is connectionless and faster?",
        options: ["TCP", "UDP", "HTTP", "MQTT"],
        correctAnswer: "UDP"
      },
      {
        question: "CoAP primarily runs over which transport layer protocol?",
        options: ["TCP", "UDP", "IPSec", "SCTP"],
        correctAnswer: "UDP"
      },
      {
        question: "How many bits does an IPv6 address use?",
        options: ["32-bit", "64-bit", "128-bit", "256-bit"],
        correctAnswer: "128-bit"
      },
      {
        question: "How many bits does an IPv4 address use?",
        options: ["32-bit", "64-bit", "128-bit", "256-bit"],
        correctAnswer: "32-bit"
      },
      {
        question: "URI stands for:",
        options: ["Uniform Resource Identifier", "Universal Routing Interface", "Uniform Remote Interface", "Universal Resource Indicator"],
        correctAnswer: "Uniform Resource Identifier"
      },
      {
        question: "Which QoS level in MQTT guarantees a message is delivered 'exactly once'?",
        options: ["QoS 0", "QoS 1", "QoS 2", "QoS 3"],
        correctAnswer: "QoS 2"
      },
      {
        question: "Which protocol translates RESTful HTTP principles for constrained IoT devices?",
        options: ["AMQP", "XMPP", "CoAP", "MQTT"],
        correctAnswer: "CoAP"
      },
      {
        question: "What is the default unencrypted port for MQTT?",
        options: ["80", "443", "1883", "8883"],
        correctAnswer: "1883"
      },
      {
        question: "Which protocol is heavily based on XML?",
        options: ["MQTT", "CoAP", "XMPP", "UDP"],
        correctAnswer: "XMPP"
      },
      {
        question: "In MQTT, devices subscribe to a specific ____ to receive messages.",
        options: ["IP Address", "Topic", "Port", "Payload"],
        correctAnswer: "Topic"
      },
      {
        question: "Which of the following ensures reliable, ordered, and error-checked delivery of a stream of bytes?",
        options: ["UDP", "TCP", "IPv4", "IPv6"],
        correctAnswer: "TCP"
      },
      {
        question: "Which is considered a heavy-weight protocol not usually ideal for battery-powered IoT edge nodes?",
        options: ["MQTT", "CoAP", "HTTP", "UDP"],
        correctAnswer: "HTTP"
      },
      {
        question: "URL is a specific type of:",
        options: ["IP", "URI", "MAC", "HTTP"],
        correctAnswer: "URI"
      },
      {
        question: "Which level of QoS provides a 'fire and forget' message delivery?",
        options: ["QoS 0", "QoS 1", "QoS 2", "QoS 3"],
        correctAnswer: "QoS 0"
      },
      {
        question: "AMQP stands for:",
        options: ["Asynchronous Message Queuing Protocol", "Advanced Message Queuing Protocol", "Automated Messaging Quick Protocol", "Application Message Query Protocol"],
        correctAnswer: "Advanced Message Queuing Protocol"
      },
      {
        question: "Which feature makes IPv6 essential for the future of IoT?",
        options: ["Slower speeds", "32-bit addresses", "Massive address space", "Analog routing"],
        correctAnswer: "Massive address space"
      },
      {
        question: "A device sending sensor data to an MQTT Broker is acting as a:",
        options: ["Subscriber", "Publisher", "Router", "Gateway"],
        correctAnswer: "Publisher"
      },
      {
        question: "Which protocol uses standard methods like GET, PUT, POST, and DELETE?",
        options: ["CoAP", "MQTT", "AMQP", "TCP"],
        correctAnswer: "CoAP"
      }
    ]
  },
  {
    chapterNumber: 4,
    chapterName: "Cloud for IoT",
    questions: [
      {
        question: "What is the role of Cloud Computing in IoT?",
        answer: "Cloud computing provides massive, scalable storage and vast processing power to handle the huge volumes of data generated by IoT devices, enabling complex analytics and remote access."
      },
      {
        question: "What is Fog Computing?",
        answer: "Fog computing is an extension of cloud computing to the edge of the network. It brings computing, storage, and networking closer to the IoT devices (at the gateway level) to reduce latency."
      },
      {
        question: "Why is Fog Computing necessary for some IoT applications?",
        answer: "Applications requiring real-time responses (like autonomous driving or industrial safety) cannot afford the latency of sending data back and forth to a distant cloud server. Fog computing processes this data locally."
      },
      {
        question: "What is the main difference between Cloud and Fog computing?",
        answer: "Cloud computing is centralized in distant data centers, causing higher latency. Fog computing is decentralized, pushing processing closer to the edge devices, resulting in lower latency and bandwidth savings."
      },
      {
        question: "What are the common service models provided by the Cloud?",
        answer: "The three main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)."
      },
      {
        question: "Name some popular IoT Cloud Platforms.",
        answer: "Popular platforms include Amazon Web Services (AWS) IoT Core, Microsoft Azure IoT, Google Cloud IoT, IBM Watson IoT, and ThingSpeak."
      },
      {
        question: "What are the primary security challenges in Cloud IoT?",
        answer: "Challenges include data breaches during transmission, insecure cloud APIs, data loss, unauthorized access, and ensuring data privacy across multi-tenant cloud environments."
      },
      {
        question: "How is data transmitted securely to the cloud?",
        answer: "Data is secured using encryption protocols like SSL/TLS during transmission, ensuring that even if intercepted, the data cannot be read by unauthorized parties."
      },
      {
        question: "What is Edge Computing?",
        answer: "Edge computing is similar to fog computing but pushes processing even closer to the source—right onto the IoT device or sensor itself, rather than a local gateway."
      },
      {
        question: "How does Cloud Computing aid in Big Data Analytics for IoT?",
        answer: "The cloud provides scalable data warehouses and machine learning tools that can instantly process terabytes of historical IoT data to find patterns and make predictive models."
      },
      {
        question: "What is SaaS in the context of IoT?",
        answer: "Software as a Service (SaaS) in IoT refers to fully developed web applications provided by a cloud vendor to view and manage IoT data, like an online smart home dashboard."
      },
      {
        question: "What is PaaS in the context of IoT?",
        answer: "Platform as a Service (PaaS) provides developers with a framework and tools to build, deploy, and manage IoT applications without worrying about underlying servers or storage."
      },
      {
        question: "Why is bandwidth conservation an advantage of Fog computing?",
        answer: "Instead of sending gigabytes of raw sensor data to the cloud continuously, the fog node processes the data locally and only sends vital summaries or alerts to the cloud, saving massive internet bandwidth."
      },
      {
        question: "Explain the concept of 'Multi-tenancy' in cloud computing.",
        answer: "Multi-tenancy is a software architecture where a single instance of software runs on a cloud server and serves multiple customers (tenants), partitioning their data securely."
      },
      {
        question: "How do Cloud platforms manage device connectivity?",
        answer: "Cloud platforms use 'Device Twins' or 'Shadows' (virtual representations of physical devices) and secure protocols like MQTT to maintain persistent, bidirectional connections with devices."
      },
      {
        question: "What is a 'Device Shadow' in AWS IoT?",
        answer: "A Device Shadow is a JSON document used to store and retrieve current state information for an IoT device. It allows apps to interact with the device even if the device is currently offline."
      },
      {
        question: "What is the importance of Data Integrity in the cloud?",
        answer: "Data integrity ensures that the sensor data has not been altered or tampered with during transmission or while resting in the cloud database."
      },
      {
        question: "How does Cloud elasticity benefit IoT systems?",
        answer: "Cloud elasticity allows the system to automatically scale up computing resources during peak data bursts and scale down during quiet times, optimizing costs."
      },
      {
        question: "What is a major disadvantage of relying solely on Cloud computing for IoT?",
        answer: "Relying solely on the cloud introduces latency, dependence on continuous internet connectivity, and high bandwidth costs, which can be fatal for mission-critical systems."
      },
      {
        question: "How does Fog computing enhance security?",
        answer: "Fog computing can act as a local firewall, filtering out malicious traffic and keeping sensitive or private data localized so it never has to travel over the public internet."
      }
    ],
    mcqs: [
      {
        question: "Which of the following pushes computing capabilities closer to the edge of the network?",
        options: ["Cloud Computing", "Fog Computing", "Quantum Computing", "Mainframe Computing"],
        correctAnswer: "Fog Computing"
      },
      {
        question: "What is the primary reason to use Fog computing instead of Cloud computing?",
        options: ["To increase latency", "To reduce latency for real-time applications", "To increase bandwidth usage", "To centralize all data"],
        correctAnswer: "To reduce latency for real-time applications"
      },
      {
        question: "SaaS stands for:",
        options: ["Storage as a Service", "System as a Service", "Software as a Service", "Security as a Service"],
        correctAnswer: "Software as a Service"
      },
      {
        question: "AWS, Azure, and Google Cloud are providers of:",
        options: ["Local Area Networks", "Cloud Computing platforms", "Microcontrollers", "Sensors"],
        correctAnswer: "Cloud Computing platforms"
      },
      {
        question: "Which cloud service model provides developers with a framework to build IoT applications?",
        options: ["IaaS", "PaaS", "SaaS", "DaaS"],
        correctAnswer: "PaaS"
      },
      {
        question: "The virtual representation of a physical IoT device in the cloud is often called a:",
        options: ["Device Shadow / Twin", "Cloud Node", "Fog Entity", "Virtual Machine"],
        correctAnswer: "Device Shadow / Twin"
      },
      {
        question: "What secures IoT data while it travels from the gateway to the cloud?",
        options: ["SSID", "SSL/TLS Encryption", "HTML", "USB"],
        correctAnswer: "SSL/TLS Encryption"
      },
      {
        question: "Which architecture is highly centralized?",
        options: ["Cloud Computing", "Fog Computing", "Edge Computing", "P2P Network"],
        correctAnswer: "Cloud Computing"
      },
      {
        question: "Fog computing helps in:",
        options: ["Increasing internet bandwidth usage", "Conserving internet bandwidth", "Eliminating the need for sensors", "Replacing local gateways with the cloud"],
        correctAnswer: "Conserving internet bandwidth"
      },
      {
        question: "Which scenario heavily relies on Fog/Edge computing rather than Cloud computing?",
        options: ["Monthly temperature logging", "Autonomous vehicle braking system", "Yearly crop yield analysis", "Website hosting"],
        correctAnswer: "Autonomous vehicle braking system"
      },
      {
        question: "In cloud computing, IaaS stands for:",
        options: ["Information as a Service", "Infrastructure as a Service", "Internet as a Service", "IoT as a Service"],
        correctAnswer: "Infrastructure as a Service"
      },
      {
        question: "What is a major security challenge in cloud IoT environments?",
        options: ["Too much processing power", "Insecure APIs and data breaches", "Hardware size", "Wired sensors"],
        correctAnswer: "Insecure APIs and data breaches"
      },
      {
        question: "Cloud elasticity provides the ability to:",
        options: ["Physically stretch cables", "Automatically scale computing resources up and down", "Change IP addresses constantly", "Prevent all cyber attacks"],
        correctAnswer: "Automatically scale computing resources up and down"
      },
      {
        question: "Which of the following resides closest to the physical sensors?",
        options: ["Cloud Server", "Fog Gateway", "Edge Device", "Database"],
        correctAnswer: "Edge Device"
      },
      {
        question: "Multi-tenancy in cloud means:",
        options: ["Multiple buildings", "Software serving multiple customers securely", "Multiple routers", "Multiple hard drives in one PC"],
        correctAnswer: "Software serving multiple customers securely"
      },
      {
        question: "What is the consequence of losing internet connection in a purely Cloud-based IoT system?",
        options: ["Devices work faster", "The system loses control and analytics capability", "Data is automatically printed", "Nothing changes"],
        correctAnswer: "The system loses control and analytics capability"
      },
      {
        question: "Which protocol is typically used to securely transmit MQTT data to the cloud?",
        options: ["HTTP", "TLS/SSL", "FTP", "ICMP"],
        correctAnswer: "TLS/SSL"
      },
      {
        question: "What is 'Big Data' in relation to IoT Cloud?",
        options: ["A large physical server", "The massive volume of sensor data collected over time", "A wide network cable", "A computer virus"],
        correctAnswer: "The massive volume of sensor data collected over time"
      },
      {
        question: "Which cloud feature is used to train machine learning models on historical IoT data?",
        options: ["Cloud Compute/Analytics", "Cloud Storage", "Load Balancer", "DNS"],
        correctAnswer: "Cloud Compute/Analytics"
      },
      {
        question: "Fog nodes are typically located:",
        options: ["In centralized data centers", "At the network edge, like routers or gateways", "Inside the cloud database", "In another country"],
        correctAnswer: "At the network edge, like routers or gateways"
      }
    ]
  },
  {
    chapterNumber: 5,
    chapterName: "Application Building with IoT",
    questions: [
      {
        question: "How is IoT applied in Healthcare?",
        answer: "IoT enables remote patient monitoring using wearable sensors (heart rate, BP). Data is sent to the cloud, allowing doctors to monitor patients continuously and triggering alerts during emergencies."
      },
      {
        question: "What sensors are commonly used in IoT Healthcare applications?",
        answer: "Common sensors include Pulse Oximeters, ECG sensors, Body Temperature sensors, and Accelerometers (for fall detection in the elderly)."
      },
      {
        question: "Explain the application of IoT in the Food industry.",
        answer: "IoT monitors the supply chain using temperature and humidity sensors to ensure perishable food is stored and transported in optimal conditions, preventing spoilage."
      },
      {
        question: "How does IoT help in Smart Lavatory maintenance?",
        answer: "IoT sensors monitor ammonia levels, soap dispenser levels, water leaks, and foot traffic. It alerts janitors exactly when cleaning or restocking is needed, improving efficiency."
      },
      {
        question: "What parameters are monitored in Water Quality IoT applications?",
        answer: "Water quality applications monitor pH levels, turbidity (cloudiness), dissolved oxygen, and temperature using specialized submerged sensors to ensure drinking water safety."
      },
      {
        question: "How is IoT used in Warehouse management?",
        answer: "IoT uses RFID tags and barcode scanners to track inventory location and count in real-time. It also uses automated guided vehicles (AGVs) and environmental sensors to protect goods."
      },
      {
        question: "What is the benefit of IoT in Retail?",
        answer: "Retail IoT uses beacons for personalized customer marketing, smart shelves to detect out-of-stock items, and automated checkout systems (like Amazon Go) to improve customer experience."
      },
      {
        question: "How does IoT enable Driver Assistance?",
        answer: "IoT sensors (LIDAR, radar, cameras) gather data about the vehicle's surroundings. The system processes this to provide lane departure warnings, adaptive cruise control, and blind-spot detection."
      },
      {
        question: "Explain IoT's role in Collision Impact applications.",
        answer: "In a crash, accelerometers and pressure sensors instantly detect the collision impact. The IoT module automatically transmits the vehicle's GPS location to emergency services for immediate dispatch."
      },
      {
        question: "What is an RFID tag?",
        answer: "Radio Frequency Identification (RFID) tags contain microchips that store data and transmit it to an RFID reader via radio waves. They are crucial for warehouse and retail inventory tracking."
      },
      {
        question: "How does Smart Farming utilize IoT?",
        answer: "Smart farming uses soil moisture, temperature, and nutrient sensors. The data automates irrigation systems and helps farmers optimize crop yield while saving water."
      },
      {
        question: "What is a Smart Grid?",
        answer: "A smart grid uses IoT to monitor electricity consumption in real-time. It balances power loads, detects outages instantly, and integrates renewable energy sources efficiently."
      },
      {
        question: "How do beacons work in Retail IoT?",
        answer: "Beacons are small Bluetooth devices placed in stores. When a customer with a specific app walks nearby, the beacon triggers targeted discounts or product information on their smartphone."
      },
      {
        question: "What sensor is used to measure water clarity in quality monitoring?",
        answer: "A Turbidity sensor is used. It measures the amount of light scattered by suspended particles in the water to determine its clarity or cloudiness."
      },
      {
        question: "How does predictive maintenance work in IoT?",
        answer: "By continuously monitoring machinery vibrations and temperatures, IoT systems predict when a machine is likely to fail, allowing repairs to be scheduled before a breakdown occurs."
      },
      {
        question: "What is a wearable device in IoT?",
        answer: "Wearables are smart electronic devices worn on the body (like smartwatches). They contain sensors to track physical activity, heart rate, and sleep patterns, syncing data to smartphones/cloud."
      },
      {
        question: "How does IoT optimize supply chain logistics?",
        answer: "GPS trackers and environmental sensors on cargo trucks provide real-time location tracking and ensure sensitive goods (like vaccines) remain at required temperatures during transit."
      },
      {
        question: "What is the role of an accelerometer in Collision Impact detection?",
        answer: "An accelerometer measures rapid changes in velocity. In a crash, it detects the sudden deceleration spike and triggers the deployment of airbags and emergency IoT SOS signals."
      },
      {
        question: "What are Smart Shelves?",
        answer: "Smart shelves use weight sensors or RFID readers to constantly monitor the number of products on a shelf. They alert store managers immediately when restocking is needed."
      },
      {
        question: "Why is low latency crucial for Driver Assistance systems?",
        answer: "Driver assistance requires split-second decision-making (like automatic braking). High latency could result in the vehicle failing to stop in time, leading to accidents."
      }
    ],
    mcqs: [
      {
        question: "Which IoT application focuses on monitoring patient heart rates remotely?",
        options: ["Smart Agriculture", "Healthcare", "Smart Retail", "Smart Grid"],
        correctAnswer: "Healthcare"
      },
      {
        question: "Which technology is heavily used in Warehouse inventory tracking?",
        options: ["RFID", "Turbidity Sensors", "ECG", "LIDAR"],
        correctAnswer: "RFID"
      },
      {
        question: "Which sensor is crucial for detecting a car crash in Collision Impact applications?",
        options: ["Temperature Sensor", "Accelerometer", "LDR", "Humidity Sensor"],
        correctAnswer: "Accelerometer"
      },
      {
        question: "What is used to measure the cloudiness or haziness of a fluid in Water Quality IoT?",
        options: ["pH Sensor", "Turbidity Sensor", "Ultrasonic Sensor", "PIR Sensor"],
        correctAnswer: "Turbidity Sensor"
      },
      {
        question: "In Smart Retail, small Bluetooth devices used to send proximity-based offers to smartphones are called:",
        options: ["Routers", "Beacons", "Actuators", "Relays"],
        correctAnswer: "Beacons"
      },
      {
        question: "Monitoring ammonia and soap levels is an application of IoT in:",
        options: ["Lavatory Maintenance", "Driver Assistance", "Warehouse Logistics", "Agriculture"],
        correctAnswer: "Lavatory Maintenance"
      },
      {
        question: "Which sensor would be used to ensure frozen food does not spoil during transport?",
        options: ["Temperature Sensor", "Light Sensor", "Proximity Sensor", "Heart Rate Monitor"],
        correctAnswer: "Temperature Sensor"
      },
      {
        question: "Which system uses cameras, LIDAR, and radar to help navigate vehicles safely?",
        options: ["Smart Shelves", "Driver Assistance", "Water Quality", "Wearables"],
        correctAnswer: "Driver Assistance"
      },
      {
        question: "Smart Shelves in retail typically use which sensors to detect out-of-stock items?",
        options: ["Weight sensors / RFID", "pH sensors", "Gas sensors", "Turbidity sensors"],
        correctAnswer: "Weight sensors / RFID"
      },
      {
        question: "IoT in healthcare can help the elderly by using accelerometers for:",
        options: ["Counting money", "Fall detection", "Checking vision", "Reading blood pressure"],
        correctAnswer: "Fall detection"
      },
      {
        question: "Which of the following is considered an IoT Wearable?",
        options: ["Smartwatch", "Smart Fridge", "Smart TV", "Smart Meter"],
        correctAnswer: "Smartwatch"
      },
      {
        question: "A pH sensor in water quality monitoring measures:",
        options: ["Water flow rate", "Acidity or Alkalinity", "Water level", "Water temperature"],
        correctAnswer: "Acidity or Alkalinity"
      },
      {
        question: "What is the primary goal of predictive maintenance in factories?",
        options: ["To fire employees", "To fix machines after they break down completely", "To predict and prevent machine failures before they occur", "To increase electricity usage"],
        correctAnswer: "To predict and prevent machine failures before they occur"
      },
      {
        question: "In collision impact applications, what data is immediately sent to emergency services?",
        options: ["Radio station playing", "Vehicle's GPS location", "Fuel level", "Tire pressure"],
        correctAnswer: "Vehicle's GPS location"
      },
      {
        question: "Which technology is the foundation of automated checkout stores like Amazon Go?",
        options: ["IoT Sensors and Computer Vision", "Manual cash registers", "Fax machines", "Pagers"],
        correctAnswer: "IoT Sensors and Computer Vision"
      },
      {
        question: "How does IoT save water in agriculture?",
        options: ["By stopping rain", "By watering crops continuously", "Using soil moisture sensors to automate irrigation only when needed", "By painting crops green"],
        correctAnswer: "Using soil moisture sensors to automate irrigation only when needed"
      },
      {
        question: "What helps automated guided vehicles (AGVs) navigate in a smart warehouse?",
        options: ["Wind", "IoT Sensors and LIDAR", "Strings", "Magnets alone"],
        correctAnswer: "IoT Sensors and LIDAR"
      },
      {
        question: "Which of the following is vital for the cold chain food supply?",
        options: ["High latency", "Continuous temperature and humidity tracking", "Loud sirens", "Bright lights"],
        correctAnswer: "Continuous temperature and humidity tracking"
      },
      {
        question: "A smart grid uses IoT to:",
        options: ["Monitor and balance electricity consumption", "Filter drinking water", "Control traffic lights", "Sell groceries"],
        correctAnswer: "Monitor and balance electricity consumption"
      },
      {
        question: "Which of the following is NOT a typical IoT healthcare application?",
        options: ["Remote patient monitoring", "Smart pacemakers", "Automated surgery scheduling", "X-ray film development"],
        correctAnswer: "X-ray film development"
      }
    ]
  },
  {
    chapterNumber: 6,
    chapterName: "Arduino and Raspberry Pi",
    questions: [
      {
        question: "What is an Arduino?",
        answer: "Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of a physical programmable circuit board (microcontroller) and the Arduino IDE."
      },
      {
        question: "What microcontroller is used in the Arduino Uno?",
        answer: "The Arduino Uno uses the ATmega328P microcontroller, which is an 8-bit AVR RISC-based microcontroller from Atmel (now Microchip)."
      },
      {
        question: "What is a Raspberry Pi?",
        answer: "Raspberry Pi is a series of small single-board computers (SBCs) that function like a mini desktop PC. It runs a full operating system (typically Linux) and has a microprocessor."
      },
      {
        question: "What is the primary difference between Arduino and Raspberry Pi?",
        answer: "Arduino is a microcontroller designed for executing a single repetitive task directly interfacing with hardware. Raspberry Pi is a microprocessor with a full OS designed for multiple complex computing tasks."
      },
      {
        question: "What programming language is primarily used for Arduino?",
        answer: "Arduino uses a simplified version of C++ programmed via the Arduino IDE using specific functions like setup() and loop()."
      },
      {
        question: "What programming language is widely used for Raspberry Pi?",
        answer: "Python is the most popular and officially recommended programming language for Raspberry Pi, though it supports C, C++, Java, and others since it runs a full OS."
      },
      {
        question: "Describe the architecture of Arduino Uno.",
        answer: "It features the ATmega328P chip, 14 digital I/O pins (6 PWM), 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, and an ICSP header."
      },
      {
        question: "Describe the architecture of Raspberry Pi.",
        answer: "It features a Broadcom ARM Cortex-A CPU, RAM (1GB-8GB), USB ports, Ethernet, HDMI out, audio jack, MicroSD slot for storage/OS, and a 40-pin GPIO header."
      },
      {
        question: "What are the two main functions in an Arduino sketch?",
        answer: "The two main functions are `setup()` which runs once at startup to initialize pins/variables, and `loop()` which runs continuously to execute the main logic."
      },
      {
        question: "What is the default Operating System for Raspberry Pi?",
        answer: "The official supported operating system is Raspberry Pi OS (formerly Raspbian), which is a Debian-based Linux distribution optimized for the Pi hardware."
      },
      {
        question: "How do you provide power to an Arduino?",
        answer: "An Arduino can be powered via the USB connection from a computer, or via an external power supply/battery connected to the DC power jack (usually 7-12V)."
      },
      {
        question: "What are Analog Input pins on an Arduino used for?",
        answer: "They read continuous varying voltage (0 to 5V) from analog sensors (like a temperature sensor or potentiometer) and convert it into integer values (0 to 1023) using the internal 10-bit ADC."
      },
      {
        question: "Why does the Raspberry Pi need a MicroSD card?",
        answer: "Unlike a typical PC with a hard drive, the Raspberry Pi relies on a MicroSD card to store its operating system, software programs, and user data."
      },
      {
        question: "Can an Arduino run multiple programs simultaneously?",
        answer: "No, an Arduino does not have an operating system. It simply executes the single compiled program flashed into its memory in a continuous loop."
      },
      {
        question: "What is the purpose of the GPIO pins on a Raspberry Pi?",
        answer: "The General-Purpose Input/Output pins allow the Raspberry Pi to connect and communicate with physical electronic components like LEDs, sensors, and motors, bridging software and hardware."
      },
      {
        question: "When would you choose a Raspberry Pi over an Arduino for an IoT project?",
        answer: "Choose Raspberry Pi when the project requires heavy processing, networking, video/camera processing, running a database, or requires a full operating system."
      },
      {
        question: "When would you choose an Arduino over a Raspberry Pi?",
        answer: "Choose Arduino for simple hardware control, reading analog sensors, low power requirements, and strict real-time execution without the overhead of booting an OS."
      },
      {
        question: "What is the `analogWrite()` function in Arduino?",
        answer: "The `analogWrite()` function is used to generate a Pulse Width Modulation (PWM) wave on specific digital pins to simulate an analog output, like fading an LED."
      },
      {
        question: "What library is commonly used in Python to control Raspberry Pi GPIOs?",
        answer: "The `RPi.GPIO` library or the newer `gpiozero` library is commonly used in Python scripts to control the GPIO pins on the Raspberry Pi."
      },
      {
        question: "Can Arduino and Raspberry Pi work together?",
        answer: "Yes. In complex projects, Arduino handles strict real-time sensor reading and motor control, and sends the data via USB/Serial to the Raspberry Pi, which handles cloud communication and heavy processing."
      }
    ],
    mcqs: [
      {
        question: "Which of the following describes Arduino?",
        options: ["Microprocessor", "Microcontroller platform", "Supercomputer", "Cloud Server"],
        correctAnswer: "Microcontroller platform"
      },
      {
        question: "Which of the following describes Raspberry Pi?",
        options: ["Single-Board Computer (SBC)", "Analog Sensor", "Microcontroller", "Actuator"],
        correctAnswer: "Single-Board Computer (SBC)"
      },
      {
        question: "Which microcontroller is at the heart of the Arduino Uno?",
        options: ["ARM Cortex-A", "ATmega328P", "Intel Core i3", "Broadcom BCM2837"],
        correctAnswer: "ATmega328P"
      },
      {
        question: "What is the official/most popular programming language for Raspberry Pi?",
        options: ["Python", "HTML", "C#", "Swift"],
        correctAnswer: "Python"
      },
      {
        question: "Which function in Arduino code runs repeatedly in an endless sequence?",
        options: ["main()", "setup()", "start()", "loop()"],
        correctAnswer: "loop()"
      },
      {
        question: "What does the Raspberry Pi use for its primary data storage and OS booting?",
        options: ["SATA Hard Drive", "Floppy Disk", "MicroSD Card", "CD-ROM"],
        correctAnswer: "MicroSD Card"
      },
      {
        question: "The standard Arduino Uno operates primarily at what logic voltage?",
        options: ["1.8V", "3.3V", "5V", "12V"],
        correctAnswer: "5V"
      },
      {
        question: "Which board is better suited for intensive video processing and running a database?",
        options: ["Arduino Uno", "Arduino Nano", "Raspberry Pi", "NodeMCU"],
        correctAnswer: "Raspberry Pi"
      },
      {
        question: "How many analog input pins does an Arduino Uno have?",
        options: ["4", "6", "8", "14"],
        correctAnswer: "6"
      },
      {
        question: "Raspberry Pi OS is based on which operating system family?",
        options: ["Windows", "macOS", "Linux (Debian)", "Android"],
        correctAnswer: "Linux (Debian)"
      },
      {
        question: "What is the standard clock speed of the Arduino Uno?",
        options: ["1 MHz", "16 MHz", "1.5 GHz", "3 GHz"],
        correctAnswer: "16 MHz"
      },
      {
        question: "Which Arduino function is used to configure a pin as an INPUT or OUTPUT?",
        options: ["setPin()", "pinMode()", "configPin()", "digitalRead()"],
        correctAnswer: "pinMode()"
      },
      {
        question: "Unlike Arduino, Raspberry Pi lacks a built-in hardware feature crucial for reading analog sensors directly. What is it?",
        options: ["USB ports", "HDMI", "Analog-to-Digital Converter (ADC)", "GPIO pins"],
        correctAnswer: "Analog-to-Digital Converter (ADC)"
      },
      {
        question: "In Python for Raspberry Pi, which library makes it easy to control hardware pins?",
        options: ["RPi.GPIO", "Tkinter", "Numpy", "Pandas"],
        correctAnswer: "RPi.GPIO"
      },
      {
        question: "Which of the following is true about Arduino?",
        options: ["It runs Windows 10", "It has no Operating System", "It requires a monitor to run", "It has 4GB RAM"],
        correctAnswer: "It has no Operating System"
      },
      {
        question: "To output a digital HIGH or LOW signal in Arduino, which function is used?",
        options: ["digitalWrite()", "analogWrite()", "print()", "sendDigital()"],
        correctAnswer: "digitalWrite()"
      },
      {
        question: "Which board features an HDMI port for connecting a monitor?",
        options: ["Arduino Uno", "Raspberry Pi", "Arduino Mega", "ESP8266"],
        correctAnswer: "Raspberry Pi"
      },
      {
        question: "Arduino programming language is a simplified framework heavily based on:",
        options: ["Python", "Java", "C/C++", "Ruby"],
        correctAnswer: "C/C++"
      },
      {
        question: "What is the typical use case for the 'setup()' function in Arduino?",
        options: ["To do complex math calculations endlessly", "To initialize variables and pin modes once", "To send emails", "To shut down the board"],
        correctAnswer: "To initialize variables and pin modes once"
      },
      {
        question: "Which processor architecture does the Raspberry Pi use?",
        options: ["x86", "AVR 8-bit", "ARM", "PowerPC"],
        correctAnswer: "ARM"
      }
    ]
  },
  {
    chapterNumber: 7,
    chapterName: "IoT Security",
    questions: [
      {
        question: "Why is IoT security a major challenge?",
        answer: "IoT devices often have limited processing power and memory, making it hard to implement strong encryption. Additionally, many devices have hardcoded default passwords and lack update mechanisms."
      },
      {
        question: "What is the CIA triad in security?",
        answer: "The CIA triad stands for Confidentiality, Integrity, and Availability. It is the core model designed to guide policies for information security within an organization."
      },
      {
        question: "What does Confidentiality mean in IoT security?",
        answer: "Confidentiality ensures that sensitive IoT data is accessed only by authorized individuals or systems, usually achieved through data encryption and access controls."
      },
      {
        question: "What does Integrity mean in IoT security?",
        answer: "Integrity ensures that the data sent by a sensor is the exact same data received by the cloud, meaning it has not been altered, tampered with, or corrupted in transit."
      },
      {
        question: "What does Availability mean in IoT security?",
        answer: "Availability ensures that the IoT devices, network, and cloud services are consistently accessible and operational for authorized users when needed, protecting against DDoS attacks."
      },
      {
        question: "What is a DDoS attack?",
        answer: "A Distributed Denial of Service (DDoS) attack involves flooding a target server or network with an overwhelming amount of traffic from multiple compromised devices, causing it to crash or become unavailable."
      },
      {
        question: "What is a Botnet?",
        answer: "A botnet is a network of compromised, malware-infected devices (often vulnerable IoT devices) controlled remotely by an attacker to execute massive coordinated attacks, like DDoS."
      },
      {
        question: "Explain the Mirai Botnet incident.",
        answer: "The Mirai botnet was a massive cyberattack that scanned the internet for IoT devices (like IP cameras) using default factory passwords, infected them, and used them to launch massive DDoS attacks."
      },
      {
        question: "What is Device Authentication?",
        answer: "Authentication is the process of verifying the identity of an IoT device before allowing it to connect to the network or cloud, usually using certificates or secure tokens."
      },
      {
        question: "What is the difference between Authentication and Authorization?",
        answer: "Authentication verifies *who* the device is. Authorization determines *what* that authenticated device is permitted to do (e.g., read-only access vs. write access)."
      },
      {
        question: "What is Encryption?",
        answer: "Encryption is the process of scrambling readable data (plaintext) into an unreadable format (ciphertext) using an algorithm and a key, so only those with the decryption key can read it."
      },
      {
        question: "Name a common Symmetric encryption algorithm.",
        answer: "AES (Advanced Encryption Standard) is a highly secure and widely used symmetric encryption algorithm where the same key is used for both encrypting and decrypting data."
      },
      {
        question: "Name a common Asymmetric encryption algorithm.",
        answer: "RSA (Rivest-Shamir-Adleman) is a widely used asymmetric algorithm that utilizes two different keys: a public key for encryption and a private key for decryption."
      },
      {
        question: "What is Physical Security in IoT?",
        answer: "Physical security involves protecting the actual IoT hardware from tampering, theft, or destruction. If an attacker physically accesses a device, they might extract keys or alter firmware."
      },
      {
        question: "What is OTA Firmware Update?",
        answer: "Over-The-Air (OTA) updates allow manufacturers to remotely send software patches and security updates to IoT devices over the internet to fix newly discovered vulnerabilities."
      },
      {
        question: "Why is securing the IoT Gateway critical?",
        answer: "The gateway is the bridge between vulnerable local sensors and the public internet. If a gateway is compromised, the attacker gains control over all connected local devices."
      },
      {
        question: "What is a 'Man-in-the-Middle' (MitM) attack?",
        answer: "In a MitM attack, the attacker secretly intercepts and relays communication between two parties (e.g., a sensor and the cloud) who believe they are directly communicating with each other."
      },
      {
        question: "How does SSL/TLS protect IoT data?",
        answer: "Secure Sockets Layer / Transport Layer Security (TLS) encrypts the communication channel between an IoT device and a server, preventing eavesdropping and MitM attacks."
      },
      {
        question: "What is 'Hardcoding' and why is it a security risk?",
        answer: "Hardcoding means embedding passwords or encryption keys directly into the device's source code. It is a major risk because hackers can extract these codes and compromise all devices of that model."
      },
      {
        question: "What is the principle of Least Privilege?",
        answer: "It is a security practice requiring that an IoT device or user is granted only the minimum levels of access or permissions needed to perform its specific function, limiting potential damage."
      }
    ],
    mcqs: [
      {
        question: "Which model forms the core foundation of information security?",
        options: ["OSI Model", "TCP/IP Model", "CIA Triad", "IoT Stack"],
        correctAnswer: "CIA Triad"
      },
      {
        question: "What does the 'C' in the CIA triad stand for?",
        options: ["Control", "Confidentiality", "Computation", "Cloud"],
        correctAnswer: "Confidentiality"
      },
      {
        question: "Ensuring that data has not been altered in transit relates to which security concept?",
        options: ["Availability", "Integrity", "Confidentiality", "Authentication"],
        correctAnswer: "Integrity"
      },
      {
        question: "A network of compromised IoT devices controlled by a hacker is called a:",
        options: ["Subnet", "VLAN", "Botnet", "Intranet"],
        correctAnswer: "Botnet"
      },
      {
        question: "Which famous botnet used default passwords on IoT cameras to launch massive DDoS attacks?",
        options: ["Stuxnet", "Mirai", "WannaCry", "Zeus"],
        correctAnswer: "Mirai"
      },
      {
        question: "Which type of attack overwhelms a server with excessive traffic causing it to crash?",
        options: ["Phishing", "DDoS", "SQL Injection", "Eavesdropping"],
        correctAnswer: "DDoS"
      },
      {
        question: "Which term describes the process of proving a device's identity?",
        options: ["Authorization", "Encryption", "Authentication", "Hashing"],
        correctAnswer: "Authentication"
      },
      {
        question: "Which term dictates what an authenticated device is allowed to do?",
        options: ["Authorization", "Authentication", "Integrity", "Confidentiality"],
        correctAnswer: "Authorization"
      },
      {
        question: "Which of the following is a widely used symmetric encryption algorithm?",
        options: ["RSA", "SHA-256", "AES", "MD5"],
        correctAnswer: "AES"
      },
      {
        question: "Which of the following is an asymmetric encryption algorithm?",
        options: ["AES", "DES", "RSA", "Blowfish"],
        correctAnswer: "RSA"
      },
      {
        question: "A security attack where the hacker intercepts communications between two parties secretly is called:",
        options: ["DDoS", "Man-in-the-Middle (MitM)", "Ransomware", "Brute Force"],
        correctAnswer: "Man-in-the-Middle (MitM)"
      },
      {
        question: "What is a major vulnerability common in cheap IoT devices?",
        options: ["Too much RAM", "Hardcoded default passwords", "Biometric scanners", "Advanced encryption"],
        correctAnswer: "Hardcoded default passwords"
      },
      {
        question: "What does OTA stand for in the context of device updates?",
        options: ["Over-The-Air", "Open-To-All", "Optimal-Time-Access", "Operational-Test-Area"],
        correctAnswer: "Over-The-Air"
      },
      {
        question: "Why is implementing standard encryption difficult on some IoT edge devices?",
        options: ["They don't have screens", "They lack processing power and memory", "They are too physically large", "They only use Bluetooth"],
        correctAnswer: "They lack processing power and memory"
      },
      {
        question: "Which protocol is standard for securing internet communications (like HTTPS) in IoT?",
        options: ["FTP", "SMTP", "TLS/SSL", "ICMP"],
        correctAnswer: "TLS/SSL"
      },
      {
        question: "Granting an IoT device only the minimum permissions necessary to function is known as:",
        options: ["Maximum Access", "Zero Trust", "Principle of Least Privilege", "Data Hiding"],
        correctAnswer: "Principle of Least Privilege"
      },
      {
        question: "Protecting the actual hardware of a sensor from being dismantled or stolen is called:",
        options: ["Network Security", "Application Security", "Physical Security", "Cloud Security"],
        correctAnswer: "Physical Security"
      },
      {
        question: "Scrambling data into an unreadable format is called:",
        options: ["Decryption", "Encryption", "Routing", "Switching"],
        correctAnswer: "Encryption"
      },
      {
        question: "In asymmetric encryption, how many keys are used?",
        options: ["One", "Two", "Three", "None"],
        correctAnswer: "Two"
      },
      {
        question: "If an attacker prevents users from accessing an IoT service, which part of the CIA triad is violated?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correctAnswer: "Availability"
      }
    ]
  }
];