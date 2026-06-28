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

export const gtuMobileComputingAndWirelessCommunicationViva: SubjectData = {
  subjectName: "MOBILE COMPUTING AND WIRELESS COMMUNICATION",
  totalChapters: 6,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction, Transmission Fundamentals & Communication Networks",
      vivaQuestions: [
        { question: "What is mobile computing?", answer: "Sir, mobile computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link." },
        { question: "What are the main components of mobile computing?", answer: "Yes sir, it primarily involves three components: mobile communication, mobile hardware (like smartphones or laptops), and mobile software." },
        { question: "What is the difference between analog and digital data transmission?", answer: "Sir, analog transmission sends continuous signals representing data, whereas digital transmission sends discrete, discontinuous signals like 0s and 1s, which are less prone to noise." },
        { question: "What is Channel Capacity?", answer: "Sir, channel capacity refers to the maximum rate at which data can be transmitted over a given communication path or channel under given conditions, usually measured in bits per second (bps)." },
        { question: "What is multiplexing?", answer: "Sir, multiplexing is a technique where multiple analog or digital signals are combined into a single signal over a shared medium. It helps to efficiently utilize the available bandwidth." },
        { question: "Can you name some common multiplexing techniques?", answer: "Yes sir, the most common ones are Time Division Multiplexing (TDM), Frequency Division Multiplexing (FDM), and Space Division Multiplexing (SDM)." },
        { question: "What is a Local Area Network (LAN)?", answer: "Sir, a LAN is a computer network that interconnects computers within a limited area such as a residence, school, or office building." },
        { question: "What is a Wide Area Network (WAN)?", answer: "Sir, a WAN covers a large geographic area, such as a country or continent, often connecting multiple smaller networks like LANs or MANs using leased telecommunication lines." },
        { question: "What is Circuit Switching?", answer: "Sir, circuit switching is a method where a dedicated physical path is established between the sender and receiver for the entire duration of the communication, like in traditional telephone networks." },
        { question: "What is Packet Switching?", answer: "Sir, packet switching breaks data into small blocks called packets, which are sent independently over the network and reassembled at the destination. It doesn't require a dedicated path." },
        { question: "Why is packet switching preferred for data networks?", answer: "Sir, because it optimizes the use of the channel capacity. Multiple users can share the same network resources dynamically, which makes it much more efficient for bursty data." },
        { question: "What is a Metropolitan Area Network (MAN)?", answer: "Sir, a MAN is a network that spans a physical area larger than a LAN but smaller than a WAN, typically covering a city or a large campus." },
        { question: "What is the role of Transmission Media?", answer: "Sir, transmission media is the physical path between a transmitter and a receiver in a data transmission system. It carries the signals, and can be guided (like cables) or unguided (like air)." },
        { question: "What is attenuation?", answer: "Sir, attenuation is the gradual loss of signal strength or energy as the signal travels over a distance through a transmission medium." },
        { question: "What does modulation mean?", answer: "Sir, modulation is the process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that contains information to be transmitted." },
        { question: "What is Baseband transmission?", answer: "Sir, baseband transmission means sending digital signals directly over the transmission medium without modulating them onto a carrier frequency." },
        { question: "What is Broadband transmission?", answer: "Sir, broadband transmission involves modulating digital signals onto a high-frequency analog carrier signal, allowing multiple signals to be sent simultaneously using FDM." },
        { question: "How does noise affect data transmission?", answer: "Sir, noise is any unwanted electrical or electromagnetic energy that interferes with the transmitted signal, which can cause errors or corrupt the data being sent." },
        { question: "What is half-duplex communication?", answer: "Sir, in half-duplex communication, data can travel in both directions, but only in one direction at a time, like a walkie-talkie." },
        { question: "What is full-duplex communication?", answer: "Sir, full-duplex allows data to travel in both directions simultaneously, like a standard telephone call." }
      ],
      mcqs: [
        { question: "Which technique is used to combine multiple signals into one over a shared medium?", options: ["Demultiplexing", "Modulation", "Multiplexing", "Encoding"], answer: "Multiplexing" },
        { question: "The maximum rate at which data can be transmitted over a communication channel is called:", options: ["Bandwidth", "Channel Capacity", "Baud rate", "Frequency"], answer: "Channel Capacity" },
        { question: "Which switching technique establishes a dedicated path for the entire session?", options: ["Packet Switching", "Message Switching", "Cell Switching", "Circuit Switching"], answer: "Circuit Switching" },
        { question: "Which network typically covers a single building or campus?", options: ["LAN", "MAN", "WAN", "PAN"], answer: "LAN" },
        { question: "What is the primary advantage of packet switching over circuit switching?", options: ["Dedicated bandwidth", "Higher security", "Efficient resource utilization", "Constant delay"], answer: "Efficient resource utilization" },
        { question: "Which of the following is an unguided transmission medium?", options: ["Coaxial Cable", "Optical Fiber", "Free space (air)", "Twisted Pair"], answer: "Free space (air)" },
        { question: "The loss of signal strength over distance is termed as:", options: ["Amplification", "Attenuation", "Distortion", "Noise"], answer: "Attenuation" },
        { question: "A network covering an entire city is most likely a:", options: ["LAN", "WAN", "MAN", "SAN"], answer: "MAN" },
        { question: "Which communication mode allows two-way traffic but only one direction at a time?", options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"], answer: "Half-duplex" },
        { question: "In which transmission type is the digital signal sent without modulation?", options: ["Broadband", "Baseband", "Passband", "Spread Spectrum"], answer: "Baseband" },
        { question: "Which of these is NOT a type of multiplexing?", options: ["FDM", "TDM", "WDM", "CSMA"], answer: "CSMA" },
        { question: "What carries continuous values over a range?", options: ["Digital signal", "Discrete signal", "Analog signal", "Binary signal"], answer: "Analog signal" },
        { question: "Unwanted electromagnetic energy that degrades a signal is called:", options: ["Gain", "Noise", "Capacity", "Bandwidth"], answer: "Noise" },
        { question: "A telephone conversation is an example of:", options: ["Simplex", "Half-duplex", "Full-duplex", "Baseband"], answer: "Full-duplex" },
        { question: "Which switching method breaks data into datagrams?", options: ["Circuit Switching", "Packet Switching", "Frame Relay", "ATM"], answer: "Packet Switching" },
        { question: "Which of the following determines the theoretical maximum data rate of a noisy channel?", options: ["Nyquist Theorem", "Shannon Capacity Formula", "Fourier Transform", "Faraday's Law"], answer: "Shannon Capacity Formula" },
        { question: "Broadband transmission primarily uses which multiplexing technique?", options: ["TDM", "FDM", "SDM", "CDM"], answer: "FDM" },
        { question: "A Walkie-Talkie is an example of which transmission mode?", options: ["Simplex", "Half-duplex", "Full-duplex", "Complex"], answer: "Half-duplex" },
        { question: "Which medium provides the highest bandwidth and lowest attenuation?", options: ["Twisted Pair", "Coaxial Cable", "Fiber Optic Cable", "Microwave"], answer: "Fiber Optic Cable" },
        { question: "Sending data as discrete 1s and 0s is called:", options: ["Analog transmission", "Digital transmission", "Amplitude modulation", "Frequency modulation"], answer: "Digital transmission" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Cellular Wireless Networks, Antennas, Propagation & Coding",
      vivaQuestions: [
        { question: "What is the concept of a Cellular Network?", answer: "Sir, a cellular network divides a large geographical area into smaller cells, each served by its own low-power base station. This allows for frequency reuse and serves many users efficiently." },
        { question: "What is Frequency Reuse?", answer: "Sir, frequency reuse means using the same radio frequencies in different cells that are far enough apart so they do not interfere with each other, greatly increasing network capacity." },
        { question: "How does 1G differ from 2G?", answer: "Sir, 1G was an analog system meant purely for voice calls. 2G introduced digital signals, allowing for SMS, better security, and basic data services using TDMA and CDMA." },
        { question: "What technology did 3G bring?", answer: "Sir, 3G brought significantly higher data rates, enabling mobile internet, video calling, and multimedia services, largely based on advanced CDMA technologies like W-CDMA." },
        { question: "What is a Base Station?", answer: "Sir, a base station is a fixed transmitter/receiver in a cell that communicates directly with mobile devices within its coverage area." },
        { question: "What causes fading in a mobile environment?", answer: "Sir, fading is caused by multipath propagation, where the signal reflects off buildings or obstacles and arrives at the receiver via multiple paths, causing phase differences and signal cancellation." },
        { question: "What is Line-of-Sight (LoS) transmission?", answer: "Sir, Line-of-Sight transmission requires a clear, unobstructed path between the transmitting and receiving antennas, common in microwave and satellite communications." },
        { question: "What is Spread Spectrum?", answer: "Sir, spread spectrum is a technique where the transmitted signal is spread over a much wider frequency band than strictly necessary, making it highly resistant to jamming, noise, and interception." },
        { question: "What is Frequency Hopping Spread Spectrum (FHSS)?", answer: "Yes sir, in FHSS, the signal is broadcast over a seemingly random series of radio frequencies, rapidly jumping from frequency to frequency based on a pseudorandom sequence." },
        { question: "What is Direct Sequence Spread Spectrum (DSSS)?", answer: "Sir, in DSSS, each bit of original data is combined with a higher-rate bit sequence called a chipping code, which spreads the data across a wide frequency band." },
        { question: "Why do we use Error Control coding?", answer: "Sir, wireless channels are prone to errors due to noise and fading. Error control adds redundant bits so the receiver can detect or even correct errors without retransmission." },
        { question: "What is a Block Error Correction Code?", answer: "Sir, block coding breaks data into fixed-size blocks and adds redundant bits to each block. The receiver uses these extra bits to detect and correct errors in that specific block." },
        { question: "What is a Convolutional Code?", answer: "Sir, unlike block codes, convolutional codes process data bits continuously as a stream, generating parity bits based on a sliding window of the current and past input bits." },
        { question: "What does ARQ stand for?", answer: "Sir, ARQ stands for Automatic Repeat Request. It is an error-control protocol that uses acknowledgements and timeouts to automatically request retransmission of corrupted or lost data packets." },
        { question: "What is the difference between an Isotropic antenna and a Directional antenna?", answer: "Sir, an isotropic antenna radiates power equally in all directions spherically. A directional antenna focuses the radiated power in a specific direction for a longer reach." },
        { question: "What is Multipath Propagation?", answer: "Sir, it occurs when radio signals reach the receiving antenna by two or more paths. The signals reflect off buildings or mountains, causing them to arrive at slightly different times." },
        { question: "What is the difference between slow fading and fast fading?", answer: "Sir, slow fading is caused by large obstacles like hills blocking the signal (shadowing). Fast fading is caused by rapid changes in multipath components due to the mobile user moving quickly." },
        { question: "What is Handoff or Handover?", answer: "Sir, handoff is the seamless process of transferring an ongoing call or data session from one base station to another as the mobile user moves across cell boundaries." },
        { question: "What was the dominant multiple access technology in 2G networks?", answer: "Sir, 2G predominantly used TDMA (Time Division Multiple Access) in systems like GSM, and CDMA (Code Division Multiple Access) in other standards." },
        { question: "What does error detection guarantee?", answer: "Sir, error detection only guarantees that the receiver will know if the data was corrupted during transmission, but it cannot fix the data; it must usually ask for a retransmission." }
      ],
      mcqs: [
        { question: "Which concept allows the same radio frequencies to be used in distant cells?", options: ["Modulation", "Frequency Reuse", "Handoff", "Multiplexing"], answer: "Frequency Reuse" },
        { question: "1G cellular networks were primarily based on which technology?", options: ["Digital TDMA", "Analog", "Digital CDMA", "Packet Switching"], answer: "Analog" },
        { question: "Which generation introduced digital voice and SMS?", options: ["1G", "2G", "3G", "4G"], answer: "2G" },
        { question: "The phenomenon where a signal takes multiple paths to reach the receiver is called:", options: ["Line of sight", "Multipath propagation", "Attenuation", "Broadcasting"], answer: "Multipath propagation" },
        { question: "Which spread spectrum technique changes the carrier frequency rapidly in a pseudorandom order?", options: ["DSSS", "FHSS", "CDMA", "OFDM"], answer: "FHSS" },
        { question: "Which coding technique continuously processes data as a stream rather than fixed blocks?", options: ["Block coding", "Convolutional coding", "Parity check", "CRC"], answer: "Convolutional coding" },
        { question: "ARQ stands for:", options: ["Automatic Request Query", "Automatic Repeat Request", "Analog Routing Query", "Active Repeat Queue"], answer: "Automatic Repeat Request" },
        { question: "Which antenna radiates power equally in all directions?", options: ["Directional", "Parabolic", "Isotropic", "Yagi"], answer: "Isotropic" },
        { question: "Which fading is caused by the rapid motion of the receiver?", options: ["Slow fading", "Fast fading", "Flat fading", "Shadow fading"], answer: "Fast fading" },
        { question: "DSSS spreads the signal by multiplying the data with a:", options: ["Carrier frequency", "Chipping code", "Hopping sequence", "Parity bit"], answer: "Chipping code" },
        { question: "A cell is typically represented by which geometric shape in network planning?", options: ["Circle", "Square", "Hexagon", "Triangle"], answer: "Hexagon" },
        { question: "Which error control method automatically requests retransmission of bad packets?", options: ["FEC", "ARQ", "CRC", "Hamming Code"], answer: "ARQ" },
        { question: "3G networks primarily relied on which multiple access technique?", options: ["FDMA", "TDMA", "W-CDMA", "SDMA"], answer: "W-CDMA" },
        { question: "Line-of-Sight (LoS) is strictly required for:", options: ["Low frequency radio", "Microwave and satellite", "Underwater acoustic", "AM radio"], answer: "Microwave and satellite" },
        { question: "Which coding technique adds redundant bits to a fixed-size chunk of data?", options: ["Convolutional Coding", "Block Coding", "Stream Coding", "Source Coding"], answer: "Block Coding" },
        { question: "The process of moving a call from one base station to another is called:", options: ["Roaming", "Handoff", "Paging", "Fading"], answer: "Handoff" },
        { question: "Spread spectrum provides strong resistance against:", options: ["Attenuation", "Jamming and interception", "Data limits", "Battery drain"], answer: "Jamming and interception" },
        { question: "Which of the following is NOT an error detection technique?", options: ["Parity check", "Checksum", "CRC", "FHSS"], answer: "FHSS" },
        { question: "The 'pseudorandom sequence' is critical for the operation of:", options: ["FDMA", "TDMA", "Spread Spectrum", "Circuit Switching"], answer: "Spread Spectrum" },
        { question: "What is the primary benefit of dividing a region into cells?", options: ["Requires fewer antennas", "Allows higher power transmission", "Enables frequency reuse and supports more users", "Eliminates all noise"], answer: "Enables frequency reuse and supports more users" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "Multiple Access, GSM, GPRS & Mobile IP",
      vivaQuestions: [
        { question: "What is FDMA?", answer: "Sir, FDMA stands for Frequency Division Multiple Access. It divides the total available bandwidth into separate, non-overlapping frequency bands, assigning one to each user for the duration of the call." },
        { question: "What is TDMA?", answer: "Sir, TDMA is Time Division Multiple Access. It allows multiple users to share the same frequency band by dividing the signal into different time slots, letting users transmit in rapid succession." },
        { question: "What is CDMA?", answer: "Sir, CDMA is Code Division Multiple Access. Here, multiple users transmit simultaneously over the entire frequency band. Each user's signal is encoded with a unique pseudorandom code to separate them at the receiver." },
        { question: "What does GSM stand for and what multiple access does it use?", answer: "Sir, GSM stands for Global System for Mobile Communications. It primarily uses a combination of FDMA and TDMA to allocate frequencies and time slots to users." },
        { question: "What are the main components of the GSM Architecture?", answer: "Sir, the GSM architecture consists of the Mobile Station (MS), the Base Station Subsystem (BSS), the Network and Switching Subsystem (NSS), and the Operation and Support Subsystem (OSS)." },
        { question: "What is the role of the MSC in GSM?", answer: "Sir, the Mobile Switching Center (MSC) is the heart of the network. It handles call routing, call setup, switching, and interacts with other networks like the public telephone network." },
        { question: "What are HLR and VLR?", answer: "Sir, HLR (Home Location Register) is the main database storing permanent subscriber data. VLR (Visitor Location Register) is a temporary database holding data about subscribers currently roaming in a specific MSC's area." },
        { question: "What is the function of the AUC in GSM?", answer: "Sir, the Authentication Center (AUC) provides the parameters needed for authentication and encryption to verify a user's identity and ensure secure communication." },
        { question: "What does GPRS stand for?", answer: "Sir, GPRS stands for General Packet Radio Service. It was introduced to 2G GSM networks to provide packet-switched data services, allowing for 'always-on' internet access." },
        { question: "How does GPRS differ from standard GSM?", answer: "Sir, standard GSM is circuit-switched, holding a dedicated line, mostly for voice. GPRS is packet-switched, sharing network resources dynamically, making it much more efficient for internet data." },
        { question: "What new nodes did GPRS introduce to the GSM architecture?", answer: "Sir, GPRS introduced the SGSN (Serving GPRS Support Node) for routing data packets and mobility management, and the GGSN (Gateway GPRS Support Node) to interface with external internet networks." },
        { question: "What is Mobile IP?", answer: "Sir, Mobile IP is a protocol that allows a mobile device to move from one network to another while keeping its original IP address, ensuring continuous active connections without dropping sessions." },
        { question: "What is a Home Agent and a Foreign Agent in Mobile IP?", answer: "Sir, the Home Agent acts as an anchor in the device's home network, forwarding packets to it. The Foreign Agent resides in the visited network and delivers the forwarded packets to the mobile device." },
        { question: "What is WAP?", answer: "Sir, WAP stands for Wireless Application Protocol. It is an older standard used to provide mobile phones with basic access to information services like the internet and emails over limited mobile networks." },
        { question: "What is WiMAX?", answer: "Sir, WiMAX (Worldwide Interoperability for Microwave Access) is based on the IEEE 802.16 standard. It is a broadband wireless access technology designed to deliver high-speed internet over long distances." },
        { question: "What is SDMA?", answer: "Sir, Space Division Multiple Access (SDMA) uses highly directional antennas or smart antenna arrays to direct different signals to different users in different physical locations simultaneously, reusing the same frequency." },
        { question: "What is a PLMN?", answer: "Sir, a Public Land Mobile Network (PLMN) is the entire mobile network established and operated by an administration or recognized operating agency, essentially the operator's network." },
        { question: "What is the IMEI in GSM?", answer: "Sir, the International Mobile Equipment Identity (IMEI) is a unique number given to every single piece of mobile phone hardware to identify valid devices and block stolen ones." },
        { question: "What is the IMSI?", answer: "Sir, the International Mobile Subscriber Identity (IMSI) is a unique number associated with all cellular network users, securely stored on the SIM card." },
        { question: "How does billing work differently in GPRS compared to GSM?", answer: "Sir, in traditional GSM, billing is mostly time-based (duration of the call). In GPRS, billing is usually volume-based, meaning you pay for the amount of data (megabytes) downloaded or uploaded." }
      ],
      mcqs: [
        { question: "Which multiple access technique assigns unique codes to users?", options: ["FDMA", "TDMA", "CDMA", "SDMA"], answer: "CDMA" },
        { question: "GSM primarily uses a combination of which two access techniques?", options: ["CDMA and FDMA", "TDMA and FDMA", "SDMA and CDMA", "CSMA and TDMA"], answer: "TDMA and FDMA" },
        { question: "The central database that stores permanent subscriber information in GSM is the:", options: ["VLR", "AUC", "HLR", "EIR"], answer: "HLR" },
        { question: "Which component is responsible for authenticating the subscriber in GSM?", options: ["HLR", "AUC", "MSC", "VLR"], answer: "AUC" },
        { question: "GPRS upgrades GSM networks by providing:", options: ["Circuit-switched voice", "Packet-switched data", "Analog video", "Satellite TV"], answer: "Packet-switched data" },
        { question: "Which GPRS node acts as a gateway to external packet data networks (like the Internet)?", options: ["SGSN", "MSC", "GGSN", "HLR"], answer: "GGSN" },
        { question: "Mobile IP allows a node to maintain the same _____ even when moving across networks.", options: ["MAC address", "IP address", "Subnet mask", "Port number"], answer: "IP address" },
        { question: "In Mobile IP, the router in the visited network that assists the mobile node is the:", options: ["Home Agent", "Gateway Agent", "Foreign Agent", "Border Router"], answer: "Foreign Agent" },
        { question: "WiMAX is defined by which IEEE standard?", options: ["802.11", "802.15", "802.16", "802.3"], answer: "802.16" },
        { question: "WAP stands for:", options: ["Wireless Access Point", "Wireless Application Protocol", "Wide Area Protocol", "Wireless Authentication Procedure"], answer: "Wireless Application Protocol" },
        { question: "SDMA uses which physical property to separate users?", options: ["Time slots", "Frequency bands", "Spatial location (directional antennas)", "Pseudorandom codes"], answer: "Spatial location (directional antennas)" },
        { question: "The temporary database that tracks roaming users in a specific MSC area is:", options: ["HLR", "EIR", "AUC", "VLR"], answer: "VLR" },
        { question: "A unique hardware identifier for a mobile device is the:", options: ["IMSI", "IMEI", "IP", "MAC"], answer: "IMEI" },
        { question: "Billing in GPRS is generally based on:", options: ["Time connected", "Data volume transferred", "Distance from base station", "Number of calls"], answer: "Data volume transferred" },
        { question: "The interface between the mobile station and the base station in GSM is called the:", options: ["Air interface (Um)", "A-bis interface", "A interface", "PLMN interface"], answer: "Air interface (Um)" },
        { question: "Which database stores lists of blocked or stolen mobile devices?", options: ["HLR", "VLR", "AUC", "EIR"], answer: "EIR" },
        { question: "Which of the following is NOT a subsystem in GSM?", options: ["BSS", "NSS", "OSS", "GGSN"], answer: "GGSN" },
        { question: "A technique where multiple users transmit at the exact same time and frequency using codes is:", options: ["FDMA", "TDMA", "CDMA", "CSMA"], answer: "CDMA" },
        { question: "The 'Care-of Address' (CoA) in Mobile IP is provided by the:", options: ["Home Agent", "Foreign Agent", "DNS Server", "Web Server"], answer: "Foreign Agent" },
        { question: "Which technology provides 'Always On' internet access for 2G mobile devices?", options: ["GSM Voice", "GPRS", "Cordless Systems", "Paging"], answer: "GPRS" }
      ]
    },
    {
      chapterNumber: 4,
      chapterName: "Wi-Fi and the IEEE 802.11 Wireless LAN Standard",
      vivaQuestions: [
        { question: "What does the IEEE 802.11 standard define?", answer: "Sir, IEEE 802.11 defines the standards for Wireless Local Area Networks (WLANs), detailing both the Medium Access Control (MAC) layer and the Physical (PHY) layer. We commonly know it as Wi-Fi." },
        { question: "What is an Access Point (AP)?", answer: "Sir, an Access Point is a networking hardware device that acts as a central hub, allowing wireless devices (like laptops and phones) to connect to a wired network." },
        { question: "What is a BSS in IEEE 802.11?", answer: "Sir, BSS stands for Basic Service Set. It is the fundamental building block of an 802.11 network, consisting of an Access Point and the wireless stations associated with it." },
        { question: "What is an ESS?", answer: "Sir, ESS stands for Extended Service Set. It is created by connecting multiple BSSs together via a distribution system (usually a wired LAN) to form a larger wireless network." },
        { question: "What multiple access protocol does 802.11 use?", answer: "Sir, 802.11 uses CSMA/CA, which stands for Carrier Sense Multiple Access with Collision Avoidance, because collision detection is extremely difficult in wireless environments." },
        { question: "How does CSMA/CA avoid collisions?", answer: "Sir, before transmitting, a station listens to the channel. If it's busy, it backs off for a random time. It also uses explicit 'Request to Send' (RTS) and 'Clear to Send' (CTS) control frames to reserve the channel." },
        { question: "What is the Hidden Terminal Problem?", answer: "Sir, it occurs when two stations can communicate with the same Access Point, but cannot hear each other due to distance or obstacles. They might transmit simultaneously, causing a collision at the AP." },
        { question: "How does 802.11 solve the Hidden Terminal Problem?", answer: "Sir, it solves it using the RTS/CTS mechanism. Station A sends an RTS to the AP. The AP broadcasts a CTS to all stations. This tells the hidden Station B to remain silent while A transmits." },
        { question: "What is an Ad-Hoc network (or IBSS)?", answer: "Sir, an Ad-Hoc network (Independent BSS) is a temporary wireless network where stations communicate directly with each other without the use of a centralized Access Point." },
        { question: "What are the two main sublayers of the 802.11 MAC layer?", answer: "Sir, the two sublayers are the Distributed Coordination Function (DCF), which uses contention-based access (CSMA/CA), and the Point Coordination Function (PCF), which uses contention-free polling." },
        { question: "What is the DCF in 802.11?", answer: "Sir, the Distributed Coordination Function (DCF) is the mandatory default MAC protocol. It forces all stations to compete for the channel using CSMA/CA." },
        { question: "What is Wi-Fi Protected Access (WPA)?", answer: "Sir, WPA is a security standard developed by the Wi-Fi Alliance to secure wireless computer networks, replacing the older, vulnerable WEP standard with stronger encryption like TKIP and later AES." },
        { question: "What is an SSID?", answer: "Sir, SSID stands for Service Set Identifier. It is essentially the public name of a wireless network that users see when trying to connect their devices to Wi-Fi." },
        { question: "What is a MAC frame?", answer: "Sir, a MAC frame is the data packet used at the MAC layer. In 802.11, it contains multiple MAC addresses, frame control info, sequence numbers, and the actual data payload." },
        { question: "Why does an 802.11 MAC frame have four address fields?", answer: "Sir, because wireless frames might need to specify the source station, the destination station, the transmitting Access Point, and the receiving Access Point in a bridged network setup." },
        { question: "What are Beacon frames?", answer: "Sir, beacon frames are management frames broadcast periodically by an Access Point to announce its presence, containing the SSID, capabilities, and network parameters to help devices connect." },
        { question: "What physical layer technologies does 802.11 use?", answer: "Sir, early 802.11 used Infrared, FHSS, and DSSS. Later standards like 802.11a/g/n primarily use OFDM (Orthogonal Frequency Division Multiplexing) for high data rates." },
        { question: "What does the Distribution System (DS) do?", answer: "Sir, the Distribution System is the backbone (usually Ethernet) that connects different Access Points together, allowing traffic to be routed between different BSSs." },
        { question: "What is Active Scanning?", answer: "Sir, in active scanning, a mobile station actively searches for a network by broadcasting a Probe Request frame and waiting for a Probe Response from a nearby Access Point." },
        { question: "What is Passive Scanning?", answer: "Sir, in passive scanning, a mobile station does not transmit anything. It simply tunes into a channel and listens for the periodic Beacon frames sent by Access Points." }
      ],
      mcqs: [
        { question: "IEEE 802.11 is the standard for:", options: ["Bluetooth", "WiMAX", "Wireless LAN (Wi-Fi)", "Cellular 3G"], answer: "Wireless LAN (Wi-Fi)" },
        { question: "The basic building block of an 802.11 network consisting of an AP and stations is the:", options: ["ESS", "BSS", "DS", "MAC"], answer: "BSS" },
        { question: "Which MAC protocol is used by IEEE 802.11 to avoid collisions?", options: ["CSMA/CD", "CSMA/CA", "Token Passing", "ALOHA"], answer: "CSMA/CA" },
        { question: "Which mechanism solves the hidden terminal problem in Wi-Fi?", options: ["RTS/CTS", "Error Correction", "Beaconing", "Encryption"], answer: "RTS/CTS" },
        { question: "A network where wireless stations communicate directly without an Access Point is called:", options: ["Infrastructure BSS", "Ad-Hoc Network (IBSS)", "Extended Service Set", "Distribution System"], answer: "Ad-Hoc Network (IBSS)" },
        { question: "The mandatory contention-based sublayer of the 802.11 MAC is the:", options: ["PCF", "DCF", "LLC", "PHY"], answer: "DCF" },
        { question: "Which standard was introduced to fix the security flaws in WEP?", options: ["WAP", "WPA (Wi-Fi Protected Access)", "CDMA", "ARQ"], answer: "WPA (Wi-Fi Protected Access)" },
        { question: "The public name of a Wi-Fi network is known as its:", options: ["MAC Address", "IP Address", "SSID", "BSSID"], answer: "SSID" },
        { question: "How many address fields can an 802.11 data frame contain?", options: ["2", "3", "4", "6"], answer: "4" },
        { question: "The periodic management frame broadcast by an AP to announce its presence is a:", options: ["Probe Request", "RTS frame", "CTS frame", "Beacon frame"], answer: "Beacon frame" },
        { question: "When a client actively sends a frame searching for an AP, it uses:", options: ["Passive scanning", "Active scanning", "Polling", "Beaconing"], answer: "Active scanning" },
        { question: "The wired backbone that connects multiple Access Points is the:", options: ["Distribution System (DS)", "Basic Service Set (BSS)", "Extended Service Set (ESS)", "Wireless Medium (WM)"], answer: "Distribution System (DS)" },
        { question: "The optional polling-based, contention-free MAC sublayer in 802.11 is the:", options: ["DCF", "PCF", "CSMA", "RTS"], answer: "PCF" },
        { question: "In 802.11, the ACK frame is used to:", options: ["Find an AP", "Confirm the successful receipt of a data frame", "Reserve the channel", "Broadcast the SSID"], answer: "Confirm the successful receipt of a data frame" },
        { question: "Which physical layer technique allows high data rates in modern Wi-Fi (like 802.11a/g/n)?", options: ["Infrared", "FHSS", "OFDM", "Amplitude Modulation"], answer: "OFDM" },
        { question: "If a station listens and finds the channel busy, in CSMA/CA it must:", options: ["Transmit immediately", "Back off for a random amount of time", "Increase power", "Change channel"], answer: "Back off for a random amount of time" },
        { question: "Connecting multiple BSSs via a distribution system creates an:", options: ["IBSS", "Ad-Hoc Network", "ESS (Extended Service Set)", "PAN"], answer: "ESS (Extended Service Set)" },
        { question: "Which frame tells all other stations to remain silent while a transmission occurs?", options: ["Probe", "CTS (Clear To Send)", "Beacon", "Authentication"], answer: "CTS (Clear To Send)" },
        { question: "WPA uses which encryption protocol originally to replace WEP?", options: ["AES", "TKIP", "DES", "RSA"], answer: "TKIP" },
        { question: "Which layer handles the actual transmission of bits over the radio waves in 802.11?", options: ["MAC layer", "LLC layer", "Physical (PHY) layer", "Network layer"], answer: "Physical (PHY) layer" }
      ]
    },
    {
      chapterNumber: 5,
      chapterName: "Bluetooth",
      vivaQuestions: [
        { question: "What is Bluetooth?", answer: "Sir, Bluetooth is a short-range wireless communication technology standard used for exchanging data between fixed and mobile devices over short distances using UHF radio waves." },
        { question: "Which IEEE standard is associated with Bluetooth?", answer: "Sir, Bluetooth is standardized under the IEEE 802.15.1 specification for Wireless Personal Area Networks (WPANs)." },
        { question: "What is a Piconet?", answer: "Sir, a piconet is the basic unit of a Bluetooth network. It consists of one primary device acting as a 'Master' and up to seven active 'Slave' devices connected to it." },
        { question: "What is a Scatternet?", answer: "Sir, a scatternet is formed when two or more piconets overlap. A device can act as a slave in one piconet and a master in another, linking the two networks." },
        { question: "How does Bluetooth avoid interference?", answer: "Sir, Bluetooth uses Frequency Hopping Spread Spectrum (FHSS). It divides the frequency band into 79 channels and hops between them 1600 times per second, making it highly resistant to interference." },
        { question: "What are the core layers of the Bluetooth architecture?", answer: "Sir, the core architecture includes the Radio layer, the Baseband layer, the Link Manager Protocol (LMP), and the Logical Link Control and Adaptation Protocol (L2CAP)." },
        { question: "What does the Bluetooth Radio layer do?", answer: "Sir, the radio layer specifies the details of the air interface, including frequency, transmission power classes, and modulation techniques. It operates in the 2.4 GHz ISM band." },
        { question: "What is the function of the Baseband layer?", answer: "Sir, the baseband layer manages physical channels and links. It handles error correction, hopping sequence generation, and establishes connections (like SCO and ACL links) between devices." },
        { question: "What are SCO and ACL links?", answer: "Sir, SCO (Synchronous Connection-Oriented) is a symmetric, point-to-point link typically used for real-time voice data. ACL (Asynchronous Connection-Less) is a packet-switched link used for general bursty data transfer." },
        { question: "What is the role of the Link Manager Protocol (LMP)?", answer: "Sir, the LMP is responsible for link setup, authentication, link configuration, and managing the security and power modes between Bluetooth devices." },
        { question: "What does L2CAP stand for?", answer: "Sir, L2CAP stands for Logical Link Control and Adaptation Protocol. It acts as an interface between higher-level protocols and the lower baseband layer." },
        { question: "What are the primary functions of L2CAP?", answer: "Sir, L2CAP handles multiplexing of multiple logical channels, segmentation and reassembly of large data packets, and Quality of Service (QoS) management." },
        { question: "How many active slaves can a Bluetooth master communicate with simultaneously?", answer: "Sir, a single Bluetooth master can actively communicate with up to 7 slave devices simultaneously within a piconet." },
        { question: "What happens if there are more than 7 slaves in a piconet?", answer: "Sir, any additional slaves must be placed in a 'parked' state. They remain synchronized with the master's clock but cannot actively transfer data until a slot opens up." },
        { question: "What are the power classes in Bluetooth?", answer: "Sir, Bluetooth devices are divided into 3 power classes. Class 1 has the highest range (up to 100 meters), Class 2 is standard (up to 10 meters), and Class 3 is short-range (up to 1 meter)." },
        { question: "What is the ISM band?", answer: "Sir, ISM stands for Industrial, Scientific, and Medical band. Bluetooth operates in the 2.4 GHz ISM band, which is globally unlicensed and freely available." },
        { question: "How does the master control communication in a piconet?", answer: "Sir, the master dictates the frequency hopping sequence and the timing. Slaves can only transmit data when explicitly polled or allowed by the master." },
        { question: "What is Pairing in Bluetooth?", answer: "Sir, pairing is the process of establishing a trusted relationship between two Bluetooth devices by exchanging and verifying a secret PIN or passkey." },
        { question: "Can a master in one piconet be a master in another?", answer: "No sir, a device can only be a master of one piconet at a time, but it can act as a slave in multiple other piconets to form a scatternet." },
        { question: "Does L2CAP handle voice data?", answer: "No sir, L2CAP is primarily designed for data packets (ACL links). Real-time voice data (SCO links) usually bypasses L2CAP and goes directly to the baseband layer." }
      ],
      mcqs: [
        { question: "Bluetooth is standardized under which IEEE specification?", options: ["802.11", "802.15.1", "802.16", "802.3"], answer: "802.15.1" },
        { question: "A basic Bluetooth network with one master and up to seven slaves is called a:", options: ["Scatternet", "LAN", "Piconet", "BSS"], answer: "Piconet" },
        { question: "When multiple piconets overlap and connect, they form a:", options: ["WAN", "Scatternet", "ESS", "Mesh"], answer: "Scatternet" },
        { question: "Which spread spectrum technique does Bluetooth use to avoid interference?", options: ["DSSS", "OFDM", "FHSS", "CDMA"], answer: "FHSS" },
        { question: "How many active slaves can simultaneously connect to one Bluetooth master?", options: ["3", "7", "15", "255"], answer: "7" },
        { question: "Which Bluetooth link type is primarily used for real-time voice communication?", options: ["ACL", "L2CAP", "SCO", "TCP"], answer: "SCO" },
        { question: "Which Bluetooth link type is used for asynchronous data transfer?", options: ["SCO", "ACL", "UDP", "LMP"], answer: "ACL" },
        { question: "Which layer establishes the physical connection and generates the frequency hopping sequence?", options: ["Radio Layer", "Baseband Layer", "L2CAP", "LMP"], answer: "Baseband Layer" },
        { question: "Which protocol handles link setup, security, and authentication between devices?", options: ["L2CAP", "SDP", "LMP (Link Manager Protocol)", "IP"], answer: "LMP (Link Manager Protocol)" },
        { question: "L2CAP provides services like:", options: ["Frequency hopping", "Multiplexing and segmentation/reassembly", "Radio modulation", "Antenna tracking"], answer: "Multiplexing and segmentation/reassembly" },
        { question: "Bluetooth operates in which unlicensed frequency band?", options: ["900 MHz", "2.4 GHz ISM", "5 GHz ISM", "1.8 GHz"], answer: "2.4 GHz ISM" },
        { question: "Additional slaves beyond the maximum 7 active ones are placed in a _____ state.", options: ["Destroyed", "Active", "Parked", "Master"], answer: "Parked" },
        { question: "A device in a Scatternet can act as a master in how many piconets simultaneously?", options: ["One", "Two", "Seven", "Unlimited"], answer: "One" },
        { question: "Class 1 Bluetooth devices have an approximate maximum range of:", options: ["1 meter", "10 meters", "100 meters", "1 kilometer"], answer: "100 meters" },
        { question: "The process of verifying devices using a PIN to create a trusted link is called:", options: ["Hopping", "Paging", "Pairing", "Multiplexing"], answer: "Pairing" },
        { question: "Bluetooth frequency hopping occurs at a rate of:", options: ["100 hops/sec", "1600 hops/sec", "5000 hops/sec", "10 hops/sec"], answer: "1600 hops/sec" },
        { question: "Which layer acts as an interface between upper-level protocols and the baseband?", options: ["Radio", "LMP", "L2CAP", "Physical"], answer: "L2CAP" },
        { question: "In a piconet, the timing and hopping sequence are completely determined by the:", options: ["First slave", "Master", "Base station", "Router"], answer: "Master" },
        { question: "Which of the following bypasses L2CAP entirely?", options: ["Data packets", "SCO (Voice) traffic", "Video streaming", "File transfers"], answer: "SCO (Voice) traffic" },
        { question: "The Bluetooth Radio layer is roughly equivalent to which OSI layer?", options: ["Network", "Transport", "Physical", "Application"], answer: "Physical" }
      ]
    },
    {
      chapterNumber: 6,
      chapterName: "Android Application Development",
      vivaQuestions: [
        { question: "What is Android?", answer: "Sir, Android is an open-source, Linux-based mobile operating system primarily designed for touchscreen mobile devices like smartphones and tablets, developed by Google." },
        { question: "What are the main layers of the Android Architecture?", answer: "Sir, the architecture consists of the Linux Kernel, Hardware Abstraction Layer (HAL), Android Runtime (ART) & Native C/C++ Libraries, Java API Framework, and System/User Applications." },
        { question: "What does the Android Application Framework do?", answer: "Sir, the application framework provides the high-level Java APIs needed to build Android apps. It includes managers like the Activity Manager, Resource Manager, and Content Providers." },
        { question: "What are the four core Application Components in Android?", answer: "Yes sir, the core components are Activities, Services, Broadcast Receivers, and Content Providers." },
        { question: "What is an Activity in Android?", answer: "Sir, an Activity represents a single screen with a user interface. For example, an email app might have one activity that shows a list of new emails, and another to compose an email." },
        { question: "What is the AndroidManifest.xml file?", answer: "Sir, the manifest file describes essential information about the app to the Android build tools and OS. It declares the app's components, required permissions, and hardware requirements." },
        { question: "What is Android Studio?", answer: "Sir, Android Studio is the official Integrated Development Environment (IDE) for Android app development, built on JetBrains' IntelliJ IDEA, providing code editing, debugging, and testing tools." },
        { question: "What is a Layout in Android?", answer: "Sir, a layout defines the visual structure for an Activity's user interface. It dictates how the views (UI controls) are positioned on the screen, usually defined in an XML file." },
        { question: "What is a LinearLayout?", answer: "Sir, a LinearLayout arranges its child views sequentially, either in a single row (horizontally) or a single column (vertically)." },
        { question: "What is a RelativeLayout?", answer: "Sir, a RelativeLayout allows child views to specify their position relative to each other (like 'below' or 'to the right of') or relative to the parent container." },
        { question: "What is a FrameLayout?", answer: "Sir, a FrameLayout is designed to block out an area on the screen to display a single item. If you add multiple children, they are drawn stacked on top of each other." },
        { question: "What is a ScrollView?", answer: "Sir, a ScrollView is a special layout used to contain views that are larger than the physical screen, allowing the user to swipe vertically to see the hidden content." },
        { question: "What is a TextView?", answer: "Sir, a TextView is a basic user interface control that displays text to the user. It is essentially a label that is usually not editable by the user." },
        { question: "What is an EditText?", answer: "Sir, an EditText is a subclass of TextView that allows the user to type and edit text input, like a text box in a web form." },
        { question: "What is the difference between a RadioButton and a CheckBox?", answer: "Sir, RadioButtons are used in a group where only one option can be selected at a time. CheckBoxes allow the user to select multiple options independently." },
        { question: "What is an Options Menu?", answer: "Sir, the Options Menu is the primary collection of menu items for an activity. It usually appears in the app bar (action bar) and provides global actions like 'Settings' or 'Search'." },
        { question: "What is a Context Menu?", answer: "Sir, a Context Menu is a floating menu that appears when the user performs a 'long-press' on a specific UI element, providing actions related specifically to that element." },
        { question: "How does Android handle execution of the first application?", answer: "Sir, Android uses the Android Runtime (ART) or Dalvik virtual machine to execute the APK file, managing memory and process lifecycles automatically." },
        { question: "What is a TableLayout?", answer: "Sir, a TableLayout groups views into rows and columns, similar to an HTML table. You use TableRow elements to build the layout grid." },
        { question: "What is an ImageButton?", answer: "Sir, an ImageButton is a standard button widget that displays an image instead of text. Users can click it just like a regular button to trigger an action." }
      ],
      mcqs: [
        { question: "Android is based on which operating system kernel?", options: ["Windows", "MacOS", "Linux", "Unix"], answer: "Linux" },
        { question: "Which file provides essential information like app permissions and components to the Android OS?", options: ["build.gradle", "strings.xml", "AndroidManifest.xml", "MainActivity.java"], answer: "AndroidManifest.xml" },
        { question: "A single screen with a user interface in an Android app is called an:", options: ["Intent", "Activity", "Service", "Broadcast Receiver"], answer: "Activity" },
        { question: "Which layout arranges children in a single horizontal row or vertical column?", options: ["RelativeLayout", "FrameLayout", "TableLayout", "LinearLayout"], answer: "LinearLayout" },
        { question: "Which layout aligns child views relative to each other or to the parent?", options: ["LinearLayout", "RelativeLayout", "ScrollView", "AbsoluteLayout"], answer: "RelativeLayout" },
        { question: "Which component allows users to input and edit text?", options: ["TextView", "Button", "EditText", "ImageView"], answer: "EditText" },
        { question: "If you want the user to select ONLY ONE option from a list, you should use:", options: ["CheckBoxes", "RadioButtons (in a RadioGroup)", "TextViews", "ToggleButtons"], answer: "RadioButtons (in a RadioGroup)" },
        { question: "Which layout is best for stacking views directly on top of one another?", options: ["FrameLayout", "TableLayout", "LinearLayout", "GridLayout"], answer: "FrameLayout" },
        { question: "Which component displays text but is typically non-editable by the user?", options: ["EditText", "Button", "TextView", "CheckBox"], answer: "TextView" },
        { question: "A menu that appears when you 'long-press' on a specific screen element is the:", options: ["Options Menu", "Context Menu", "Popup Menu", "Dropdown Menu"], answer: "Context Menu" },
        { question: "The official IDE recommended by Google for Android development is:", options: ["Eclipse", "Visual Studio", "Android Studio", "NetBeans"], answer: "Android Studio" },
        { question: "Which layout allows content to be swiped vertically if it exceeds the screen size?", options: ["FrameLayout", "TableLayout", "ScrollView", "LinearLayout"], answer: "ScrollView" },
        { question: "In Android architecture, which layer provides high-level Java APIs to developers?", options: ["Linux Kernel", "HAL", "Application Framework", "Native Libraries"], answer: "Application Framework" },
        { question: "Which view allows users to provide a rating using stars?", options: ["ProgressBar", "SeekBar", "RatingBar", "CheckBox"], answer: "RatingBar" },
        { question: "An ImageButton acts like a standard button but displays a(n):", options: ["Text label", "Image or icon", "Dropdown list", "Checkbox"], answer: "Image or icon" },
        { question: "Which application component is primarily used for background processing without a UI?", options: ["Activity", "Service", "Content Provider", "Layout"], answer: "Service" },
        { question: "Android applications are typically packaged into a file with which extension?", options: [".exe", ".jar", ".apk", ".ios"], answer: ".apk" },
        { question: "Which layout structures its children into rows and columns?", options: ["LinearLayout", "TableLayout", "RelativeLayout", "FrameLayout"], answer: "TableLayout" },
        { question: "Global actions for an Activity (like Settings or Search) are usually placed in the:", options: ["Context Menu", "Options Menu", "RadioGroup", "ScrollView"], answer: "Options Menu" },
        { question: "Which layer sits at the very bottom of the Android software stack?", options: ["Application Framework", "Android Runtime", "Linux Kernel", "System Apps"], answer: "Linux Kernel" }
      ]
    }
  ]
};

