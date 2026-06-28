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
export const gtuInformationSecurityViva: SubjectData = {
subjectName: "INFORMATION SECURITY",
totalChapters: 9,
chapters: [
{
chapterNumber: 1,
chapterName: "Symmetric Cipher Model and Techniques",
vivaQuestions: [
{ question: "What is Cryptography?", answer: "Sir, cryptography is the study and application of techniques to secure communication by converting plaintext into ciphertext, ensuring confidentiality and integrity." },
{ question: "What is Cryptanalysis?", answer: "Sir, cryptanalysis is the art of breaking or attempting to break cryptographic systems to recover the plaintext without knowing the secret key." },
{ question: "What is the difference between substitution and transposition techniques?", answer: "Sir, in substitution, each letter or group of letters in plaintext is replaced by other letters, while in transposition, the letters are rearranged or reordered in a different sequence." },
{ question: "What is a Symmetric Cipher Model?", answer: "Sir, it is a model where the same secret key is used by both the sender and the receiver for both encryption and decryption." },
{ question: "What are the essential ingredients of a symmetric cipher?", answer: "Sir, the five ingredients are: Plaintext, Encryption Algorithm, Secret Key, Ciphertext, and Decryption Algorithm." },
{ question: "Define a passive attack.", answer: "Sir, a passive attack involves monitoring the transmissions to obtain information without altering the data, such as traffic analysis or eavesdropping." },
{ question: "Define an active attack.", answer: "Sir, an active attack involves attempting to alter system resources or affect their operation, such as masquerade, replay, modification of messages, or denial of service." },
{ question: "What is a Caesar Cipher?", answer: "Sir, the Caesar cipher is a simple substitution technique where each letter in the plaintext is shifted a fixed number of positions down the alphabet." },
{ question: "What is the limitation of the Caesar Cipher?", answer: "Sir, it has a very small key space, only 25 possible shifts, making it extremely easy to break using a simple brute-force attack." },
{ question: "What is a Polyalphabetic Cipher?", answer: "Sir, unlike a monoalphabetic cipher that uses a single substitution alphabet, polyalphabetic ciphers use multiple substitution alphabets to make frequency analysis much harder." }
],
mcqs: [
{ question: "Which cipher rearranges the positions of letters?", options: ["Substitution", "Transposition", "Stream", "Block"], answer: "Transposition" },
{ question: "Cryptanalysis refers to:", options: ["Creating keys", "Breaking ciphers", "Encoding data", "Hashing"], answer: "Breaking ciphers" },
{ question: "In symmetric cryptography, the key used for encryption and decryption is:", options: ["Different", "The same", "Public", "Non-existent"], answer: "The same" },
{ question: "Monitoring transmission to gain information is a(n):", options: ["Active attack", "Passive attack", "Authentic access", "Authorized path"], answer: "Passive attack" },
{ question: "The Caesar cipher is an example of a:", options: ["Transposition cipher", "Substitution cipher", "Block cipher", "Hash function"], answer: "Substitution cipher" },
{ question: "Modifying a message during transit is a(n):", options: ["Active attack", "Passive attack", "Eavesdropping", "Traffic analysis"], answer: "Active attack" },
{ question: "Which of these is NOT an ingredient of a symmetric cipher?", options: ["Secret Key", "Encryption Algorithm", "Digital Signature", "Ciphertext"], answer: "Digital Signature" },
{ question: "Substitution techniques replace:", options: ["Positions", "Values", "Memory addresses", "Time stamps"], answer: "Values" },
{ question: "Transposition techniques change the:", options: ["Identity of characters", "Order of characters", "Length of message", "Encryption algorithm"], answer: "Order of characters" },
{ question: "The Caesar Cipher is vulnerable to what type of attack?", options: ["Brute force", "Side-channel", "Replay", "Man-in-the-Middle"], answer: "Brute force" }
]
},
{
chapterNumber: 2,
chapterName: "Block Ciphers (DES & AES)",
vivaQuestions: [
{ question: "What is the difference between block and stream ciphers?", answer: "Sir, block ciphers process data in fixed-size blocks (e.g., 64 or 128 bits), while stream ciphers process data one bit or byte at a time continuously." },
{ question: "What is the Data Encryption Standard (DES)?", answer: "Sir, DES is a symmetric block cipher that uses a 64-bit block size and a 56-bit key, applying a Feistel network structure over 16 rounds." },
{ question: "What is the main weakness of DES?", answer: "Sir, the main weakness is its small 56-bit key size, which makes it vulnerable to brute-force attacks by modern computers." },
{ question: "What is the AES structure?", answer: "Sir, AES (Advanced Encryption Standard) is a non-Feistel block cipher. It operates on 128-bit blocks and supports key sizes of 128, 192, or 256 bits." },
{ question: "What are the transformation functions in AES?", answer: "Sir, the four main transformation functions in each AES round are SubBytes, ShiftRows, MixColumns, and AddRoundKey." },
{ question: "How does the AES key expansion work?", answer: "Sir, the AES key expansion algorithm derives a set of round keys from the initial cipher key, ensuring each round uses a unique, derived key." },
{ question: "What is the Feistel structure?", answer: "Sir, a Feistel structure splits a block into two halves, processes one half using a function, and XORs the result with the other half, swapping them in each round." },
{ question: "Why is AES considered more secure than DES?", answer: "Sir, AES uses a larger key size, a more complex transformation structure, and is not based on the aging Feistel network, making it resistant to known cryptanalysis attacks." },
{ question: "What is the purpose of the SubBytes step in AES?", answer: "Sir, SubBytes is a non-linear substitution step where each byte is replaced by another according to a lookup table, known as the S-box." },
{ question: "What is the shift rows transformation in AES?", answer: "Sir, in the ShiftRows step, the rows of the AES state matrix are cyclically shifted by different offsets to provide diffusion across the columns." }
],
mcqs: [
{ question: "What is the block size of DES?", options: ["32 bits", "64 bits", "128 bits", "256 bits"], answer: "64 bits" },
{ question: "How many rounds are there in the DES algorithm?", options: ["8", "12", "16", "32"], answer: "16" },
{ question: "What is the effective key size of DES?", options: ["56 bits", "64 bits", "128 bits", "1024 bits"], answer: "56 bits" },
{ question: "Which cipher structure uses a splitting approach in its rounds?", options: ["AES", "Feistel Network", "RSA", "SHA-1"], answer: "Feistel Network" },
{ question: "What is the block size of AES?", options: ["64 bits", "128 bits", "256 bits", "512 bits"], answer: "128 bits" },
{ question: "Which of these is NOT an AES transformation function?", options: ["SubBytes", "ShiftRows", "PermutationBox", "MixColumns"], answer: "PermutationBox" },
{ question: "AES is a:", options: ["Feistel cipher", "Non-Feistel cipher", "Stream cipher", "Hash function"], answer: "Non-Feistel cipher" },
{ question: "Which AES step provides diffusion by changing byte positions within rows?", options: ["SubBytes", "ShiftRows", "AddRoundKey", "Key Expansion"], answer: "ShiftRows" },
{ question: "What makes DES vulnerable to modern attacks?", options: ["Small key size", "Too many rounds", "Feistel structure", "Complex key expansion"], answer: "Small key size" },
{ question: "The S-box in AES is used during which transformation?", options: ["ShiftRows", "AddRoundKey", "SubBytes", "MixColumns"], answer: "SubBytes" }
]
},
{
chapterNumber: 3,
chapterName: "Block Cipher Modes of Operation",
vivaQuestions: [
{ question: "What is the Electronic Code Book (ECB) mode?", answer: "Sir, ECB mode encrypts each plaintext block independently using the same key. Identical plaintext blocks result in identical ciphertext blocks." },
{ question: "What is the primary security flaw in ECB mode?", answer: "Sir, because identical plaintext blocks result in identical ciphertext, ECB does not hide data patterns, making it vulnerable to analysis." },
{ question: "What is Cipher Block Chaining (CBC) mode?", answer: "Sir, in CBC mode, each block of plaintext is XORed with the previous ciphertext block before being encrypted, ensuring each ciphertext block depends on all preceding blocks." },
{ question: "What is an Initialization Vector (IV)?", answer: "Sir, an IV is a random or unique block used at the start of encryption (like in CBC mode) to ensure that the same plaintext encrypted multiple times results in different ciphertexts." },
{ question: "What is Cipher Feedback (CFB) mode?", answer: "Sir, CFB mode turns a block cipher into a self-synchronizing stream cipher. The previous ciphertext block is encrypted and then XORed with the plaintext to produce the current ciphertext." },
{ question: "What is Output Feedback (OFB) mode?", answer: "Sir, OFB mode turns a block cipher into a stream cipher by repeatedly encrypting the IV (or the output of the previous encryption), which is then XORed with the plaintext." },
{ question: "What is Counter (CTR) mode?", answer: "Sir, CTR mode turns a block cipher into a stream cipher by encrypting a successive counter value and XORing the result with each plaintext block." },
{ question: "Why is triple DES (3DES) used?", answer: "Sir, 3DES is used to overcome the short key length of DES by applying the DES algorithm three times to each data block, effectively increasing the key length." },
{ question: "Which modes allow parallelization in block ciphers?", answer: "Sir, ECB and CTR modes support parallel encryption and decryption because they do not depend on the previous block's output." },
{ question: "Which mode is best for encrypting data streams?", answer: "Sir, stream-like modes such as CFB, OFB, or CTR are better suited for data streams because they do not require padding blocks to a fixed size." }
],
mcqs: [
{ question: "Which mode encrypts identical plaintext blocks into identical ciphertext blocks?", options: ["CBC", "ECB", "CFB", "CTR"], answer: "ECB" },
{ question: "What is used in CBC to ensure unique ciphertext for the same plaintext?", options: ["Key", "Padding", "Initialization Vector (IV)", "Counter"], answer: "Initialization Vector (IV)" },
{ question: "Which mode turns a block cipher into a stream cipher using an incrementing counter?", options: ["ECB", "CBC", "CTR", "OFB"], answer: "CTR" },
{ question: "Which mode supports parallel encryption?", options: ["CBC", "CFB", "ECB", "OFB"], answer: "ECB" },
{ question: "3DES applies the DES algorithm how many times per block?", options: ["One", "Two", "Three", "Four"], answer: "Three" },
{ question: "In CBC mode, each block depends on:", options: ["Only the current block", "Only the key", "The previous ciphertext block", "The previous key"], answer: "The previous ciphertext block" },
{ question: "Which mode is self-synchronizing?", options: ["ECB", "CFB", "CTR", "OFB"], answer: "CFB" },
{ question: "CTR mode is popular because it allows:", options: ["Parallelization", "Error propagation", "No padding", "Both A and C"], answer: "Both A and C" },
{ question: "Which mode is NOT suitable for pattern hiding?", options: ["CBC", "ECB", "CTR", "CFB"], answer: "ECB" },
{ question: "What does the 'O' in OFB mode stand for?", options: ["Output", "Offset", "Ordered", "Original"], answer: "Output" }
]
},
{
chapterNumber: 4,
chapterName: "Public Key Cryptography",
vivaQuestions: [
{ question: "What is Public Key Cryptography?", answer: "Sir, public key cryptography, or asymmetric cryptography, uses two different keys: a public key for encryption and a private key for decryption." },
{ question: "What is the RSA algorithm?", answer: "Sir, RSA (Rivest-Shamir-Adleman) is a widely used public-key cryptosystem that bases its security on the difficulty of factoring the product of two large prime numbers." },
{ question: "What is the Diffie-Hellman Key Exchange?", answer: "Sir, it is a method for two parties to securely establish a shared secret key over an insecure communication channel without having met before." },
{ question: "What is a Man-in-the-Middle (MITM) attack?", answer: "Sir, a MITM attack occurs when an attacker intercepts and potentially alters the communication between two parties who believe they are talking directly to each other." },
{ question: "Why is public key cryptography slower than symmetric cryptography?", answer: "Sir, public key operations involve complex mathematical exponentiations on very large numbers, which are computationally more expensive than symmetric bitwise operations." },
{ question: "What is the primary requirement for public key cryptosystems?", answer: "Sir, the requirements include: it must be computationally easy to generate key pairs, easy to encrypt with the public key, and easy to decrypt with the private key, but impossible to derive the private key from the public key." },
{ question: "How is RSA security maintained?", answer: "Sir, RSA security is maintained as long as the prime factorization of a very large integer remains computationally infeasible for attackers." },
{ question: "What is the Diffie-Hellman vulnerability?", answer: "Sir, the standard Diffie-Hellman exchange is vulnerable to Man-in-the-Middle attacks because it does not authenticate the parties involved." },
{ question: "Can a private key be derived from a public key in RSA?", answer: "Sir, theoretically no, as it would require solving the integer factorization problem, which is currently computationally infeasible for large keys." },
{ question: "What is the application of public key cryptosystems?", answer: "Sir, they are used for digital signatures, secure key distribution, and establishing secure connections like HTTPS (TLS/SSL)." }
],
mcqs: [
{ question: "In asymmetric cryptography, the encryption key is:", options: ["Private", "Public", "Shared", "Secret"], answer: "Public" },
{ question: "RSA security is based on the difficulty of:", options: ["Discrete logarithms", "Integer factorization", "Hashing", "Symmetric keys"], answer: "Integer factorization" },
{ question: "Diffie-Hellman is primarily used for:", options: ["Digital signatures", "Key exchange", "Data encryption", "Hashing"], answer: "Key exchange" },
{ question: "Which attack intercepts communication between two parties?", options: ["Brute force", "Man-in-the-Middle", "Frequency analysis", "Replay attack"], answer: "Man-in-the-Middle" },
{ question: "Asymmetric cryptography is usually _____ than symmetric cryptography.", options: ["Faster", "Slower", "Equally fast", "Less secure"], answer: "Slower" },
{ question: "In RSA, which key is kept secret?", options: ["Public key", "Private key", "Session key", "Modulus"], answer: "Private key" },
{ question: "The Diffie-Hellman protocol is vulnerable because it lacks:", options: ["Authentication", "Encryption", "Key generation", "Exponentiation"], answer: "Authentication" },
{ question: "Public key systems solve the problem of:", options: ["Key distribution", "Encryption speed", "Memory usage", "Message length"], answer: "Key distribution" },
{ question: "Which of these is a public key algorithm?", options: ["DES", "AES", "RSA", "3DES"], answer: "RSA" },
{ question: "Public keys can be known by:", options: ["Only the sender", "Only the receiver", "Anyone", "The government only"], answer: "Anyone" }
]
},
{
chapterNumber: 5,
chapterName: "Cryptographic Hash Functions",
vivaQuestions: [
{ question: "What is a Cryptographic Hash Function?", answer: "Sir, a hash function is an algorithm that takes an input of any size and produces a fixed-size, unique-looking output, known as a hash or message digest." },
{ question: "What are the main requirements of a hash function?", answer: "Sir, the requirements are: it should be one-way (pre-image resistance), collision-resistant (hard to find two inputs with same hash), and result in a fixed-size output." },
{ question: "What is the 'Birthday Attack'?", answer: "Sir, a birthday attack exploits the mathematics of the birthday paradox to find two different inputs that produce the same hash value, thus breaking collision resistance." },
{ question: "What is SHA?", answer: "Sir, SHA stands for Secure Hash Algorithm, a family of cryptographic hash functions designed by the NSA for message integrity." },
{ question: "What are hash functions based on Cipher Block Chaining (CBC)?", answer: "Sir, these use block ciphers like AES in a CBC-like mode to convert an arbitrary length message into a fixed-length hash value." },
{ question: "Why are hash functions considered one-way?", answer: "Sir, they are one-way because it is computationally infeasible to reconstruct the original input given only the resulting hash value." },
{ question: "What is collision resistance?", answer: "Sir, it means it is computationally infeasible to find any two different inputs, x and y, such that Hash(x) = Hash(y)." },
{ question: "Can hash functions be used for password storage?", answer: "Sir, yes, storing a hash of a password instead of the actual password ensures that even if the database is breached, the original passwords remain secure." },
{ question: "What is pre-image resistance?", answer: "Sir, pre-image resistance means given a hash value 'h', it should be computationally infeasible to find any input 'x' such that Hash(x) = h." },
{ question: "What is a message digest?", answer: "Sir, a message digest is another name for the output of a hash function, representing a unique digital fingerprint of the original data." }
],
mcqs: [
{ question: "The output of a hash function is:", options: ["Variable size", "Fixed size", "Compressed plaintext", "Encrypted plaintext"], answer: "Fixed size" },
{ question: "Which of the following is a requirement for a secure hash function?", options: ["Reversibility", "Collision resistance", "Variable output length", "Efficiency"], answer: "Collision resistance" },
{ question: "What attack targets the collision resistance of hash functions?", options: ["Man-in-the-Middle", "Birthday attack", "Brute force", "Side-channel"], answer: "Birthday attack" },
{ question: "SHA stands for:", options: ["Secure Hash Algorithm", "Standard Hashing Application", "Secret Hash Agent", "System Hash Analysis"], answer: "Secure Hash Algorithm" },
{ question: "A hash function is considered 'one-way' because it is:", options: ["Reversible", "Not reversible", "Very slow", "Highly encrypted"], answer: "Not reversible" },
{ question: "Hash functions produce a unique digital ________ of the data.", options: ["Certificate", "Fingerprint", "Signature", "Password"], answer: "Fingerprint" },
{ question: "If Hash(x) = Hash(y) where x != y, it is called a:", options: ["Conflict", "Collision", "Digest", "Digest match"], answer: "Collision" },
{ question: "Which is a valid application of hash functions?", options: ["Password storage", "Encryption", "Key distribution", "Authentication"], answer: "Password storage" },
{ question: "Pre-image resistance means it is hard to find:", options: ["The original input from the hash", "The hash from the input", "A secret key", "A symmetric cipher"], answer: "The original input from the hash" },
{ question: "Which of these is a secure hash algorithm family?", options: ["DES", "AES", "SHA", "RSA"], answer: "SHA" }
]
},
{
chapterNumber: 6,
chapterName: "Message Authentication Codes (MAC)",
vivaQuestions: [
{ question: "What is a Message Authentication Code (MAC)?", answer: "Sir, a MAC is a cryptographic checksum of a message that uses a secret key to ensure both the integrity and the authenticity of the message." },
{ question: "What are the requirements for a MAC?", answer: "Sir, a MAC must ensure integrity (the message wasn't altered), authenticity (the sender is who they claim to be), and it must be impossible to forge without the secret key." },
{ question: "How does a MAC differ from a hash function?", answer: "Sir, a hash function is public and unkeyed, providing integrity but not authenticity. A MAC uses a secret key, providing both integrity and authenticity." },
{ question: "What are MACs based on hash functions called?", answer: "Sir, MACs based on hash functions are called HMACs (Hash-based Message Authentication Codes)." },
{ question: "How do MACs based on block ciphers work?", answer: "Sir, they encrypt the message using a block cipher in a specific mode (like CBC) and use the final ciphertext block (or a portion of it) as the authentication code." },
{ question: "Can a receiver verify a MAC?", answer: "Sir, yes, the receiver uses the same secret key to compute a MAC on the received message and compares it with the received MAC. If they match, the message is authentic." },
{ question: "What is data integrity?", answer: "Sir, data integrity ensures that a message has not been altered, modified, or corrupted during transmission." },
{ question: "What is data authentication?", answer: "Sir, data authentication verifies the identity of the sender, confirming that the message actually came from the claimed source." },
{ question: "What is the primary vulnerability if the secret key for a MAC is stolen?", answer: "Sir, if the key is stolen, an attacker can generate perfectly valid MACs for any forged message, completely breaking the authenticity and integrity checks." },
{ question: "Are MACs used for encryption?", answer: "No sir, MACs are used for authentication and integrity checking. They do not hide the content of the message; the message itself is often sent in plaintext." }
],
mcqs: [
{ question: "A MAC uses which of the following to provide authenticity?", options: ["A public key", "A secret key", "No key", "A random seed"], answer: "A secret key" },
{ question: "MACs provide both integrity and:", options: ["Encryption", "Authentication", "Compression", "Key distribution"], answer: "Authentication" },
{ question: "HMAC stands for:", options: ["Hash-based Message Authentication Code", "Hardened Message Authentication Code", "Hidden Message Authentication Code", "Hashed Message Access Code"], answer: "Hash-based Message Authentication Code" },
{ question: "Unlike a hash function, a MAC is:", options: ["Public", "Keyed", "Fixed-size only", "Irreversible"], answer: "Keyed" },
{ question: "A MAC is used to verify that the message:", options: ["Is encrypted", "Has not been altered", "Is fast", "Is compressed"], answer: "Has not been altered" },
{ question: "If the secret key of a MAC is compromised, the attacker can:", options: ["Decrypt all messages", "Forge messages", "Read the message content", "Only guess the hash"], answer: "Forge messages" },
{ question: "MACs based on block ciphers often use which mode?", options: ["ECB", "CBC", "CTR", "OFB"], answer: "CBC" },
{ question: "Which is a primary requirement for a secure MAC?", options: ["Easy to forge", "Impossible to forge without the key", "Must be very long", "Must use public keys"], answer: "Impossible to forge without the key" },
{ question: "MACs protect against which type of attacks?", options: ["Eavesdropping", "Modification and masquerade", "Traffic analysis", "Resource exhaustion"], answer: "Modification and masquerade" },
{ question: "The output of a MAC is sometimes called a:", options: ["Tag", "Digest", "Plaintext", "Key"], answer: "Tag" }
]
},
{
chapterNumber: 7,
chapterName: "Digital Signatures",
vivaQuestions: [
{ question: "What is a Digital Signature?", answer: "Sir, a digital signature is a cryptographic value that attaches to a document, allowing the receiver to verify the sender's identity and ensure the document has not been altered." },
{ question: "What are the properties of digital signatures?", answer: "Sir, properties include authenticity (identity verification), integrity (no modification), and non-repudiation (the sender cannot deny having signed the message)." },
{ question: "What is the difference between a MAC and a Digital Signature?", answer: "Sir, a MAC uses a secret key shared by parties, so only they can verify. A digital signature uses public-key cryptography, so anyone with the sender's public key can verify the signature." },
{ question: "What is the NIST Digital Signature Algorithm (DSA)?", answer: "Sir, DSA is a standardized algorithm used for generating digital signatures, based on the difficulty of computing discrete logarithms." },
{ question: "What is non-repudiation?", answer: "Sir, non-repudiation is the assurance that the signer of a document cannot later deny having signed it, because the private key used to sign it is held only by them." },
{ question: "How does Elgamal digital signature work?", answer: "Sir, Elgamal is a signature scheme based on the discrete logarithm problem. It creates a signature that involves two parts, allowing for secure verification." },
{ question: "What is Schnorr signature?", answer: "Sir, Schnorr is an efficient digital signature scheme known for its simplicity and security, also based on discrete logarithms." },
{ question: "What happens if a signed document is modified?", answer: "Sir, if even one bit of the document is altered, the verification process will fail, signaling that the integrity has been compromised." },
{ question: "Why is non-repudiation important in e-commerce?", answer: "Sir, it is vital because it prevents a buyer or seller from denying their transaction, which is essential for legal validity in electronic contracts." },
{ question: "How is a digital signature verified?", answer: "Sir, the receiver decrypts the signature using the sender's public key to recover the message hash, and then computes a new hash of the received message to see if they match." }
],
mcqs: [
{ question: "Which cryptographic primitive is used for non-repudiation?", options: ["Symmetric encryption", "Digital signature", "Hash function", "MAC"], answer: "Digital signature" },
{ question: "Digital signatures use which key to sign?", options: ["Public key", "Private key", "Shared key", "Session key"], answer: "Private key" },
{ question: "Who can verify a digital signature?", options: ["Only the sender", "Only the receiver", "Anyone with the public key", "No one"], answer: "Anyone with the public key" },
{ question: "Non-repudiation means the sender cannot:", options: ["Modify the message", "Deny having signed the message", "Encrypt the message", "Share their public key"], answer: "Deny having signed the message" },
{ question: "Digital signatures ensure data:", options: ["Integrity and authenticity", "Speed", "Availability", "Confidentiality"], answer: "Integrity and authenticity" },
{ question: "Which of the following is a digital signature scheme?", options: ["DES", "RSA (for signing)", "AES", "ECB"], answer: "RSA (for signing)" },
{ question: "What is verified by a digital signature?", options: ["The recipient's identity", "The sender's identity", "The network speed", "The key length"], answer: "The sender's identity" },
{ question: "NIST DSA is based on the difficulty of:", options: ["Factorization", "Discrete logarithms", "Hash collisions", "Symmetric key search"], answer: "Discrete logarithms" },
{ question: "If a signed document is modified, verification will:", options: ["Succeed", "Fail", "Fix the document", "Ignore the modification"], answer: "Fail" },
{ question: "Schnorr signatures are known for their:", options: ["Complexity", "Efficiency", "Size", "Weakness"], answer: "Efficiency" }
]
},
{
chapterNumber: 8,
chapterName: "Key Management and Infrastructure",
vivaQuestions: [
{ question: "What is Key Management?", answer: "Sir, key management is the administration of cryptographic keys, including generation, exchange, storage, replacement, and revocation of keys during their lifecycle." },
{ question: "How are symmetric keys distributed?", answer: "Sir, symmetric keys are distributed using a Key Distribution Center (KDC), where each user shares a master key with the KDC, which then generates and distributes temporary session keys." },
{ question: "What is an X.509 Certificate?", answer: "Sir, an X.509 certificate is a digital document that binds a public key to an identity (like a user or organization), signed by a trusted Certificate Authority (CA)." },
{ question: "What is Public Key Infrastructure (PKI)?", answer: "Sir, PKI is a framework of roles, policies, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption." },
{ question: "What is a Certificate Authority (CA)?", answer: "Sir, a CA is a trusted entity that issues, manages, and revokes digital certificates, verifying the identity of the entity requesting the certificate." },
{ question: "Why is key revocation needed?", answer: "Sir, revocation is needed when a private key is compromised or an employee leaves the company, ensuring the associated certificate is no longer trusted before it expires." },
{ question: "What is the role of a Certificate Revocation List (CRL)?", answer: "Sir, a CRL is a list of digital certificates that have been revoked by the CA and should no longer be trusted by users." },
{ question: "What is the difference between symmetric and asymmetric key distribution?", answer: "Sir, symmetric key distribution relies on a centralized KDC to distribute keys. Asymmetric distribution relies on a public-key infrastructure where public keys are widely available." },
{ question: "Why is public key distribution easier than symmetric key distribution?", answer: "Sir, because public keys don't need to be kept secret, they can be distributed over insecure channels, whereas symmetric keys require a secure, established channel for distribution." },
{ question: "What is a trust anchor?", answer: "Sir, a trust anchor is a trusted root certificate that acts as the starting point for verifying a chain of certificates in a PKI system." }
],
mcqs: [
{ question: "What is the primary role of a Certificate Authority (CA)?", options: ["Issuing and managing certificates", "Encrypting passwords", "Cracking keys", "Generating hashes"], answer: "Issuing and managing certificates" },
{ question: "An X.509 certificate binds a public key to:", options: ["A private key", "An identity", "A hash", "A MAC"], answer: "An identity" },
{ question: "PKI stands for:", options: ["Public Key Infrastructure", "Private Key Interface", "Public Knowledge Integration", "Password Key Identification"], answer: "Public Key Infrastructure" },
{ question: "What is used to track revoked certificates?", options: ["KDC", "CRL", "RSA", "SHA"], answer: "CRL" },
{ question: "Symmetric key distribution often requires a:", options: ["Certificate Authority", "Key Distribution Center", "Public Key", "Digital Signature"], answer: "Key Distribution Center" },
{ question: "Which of the following is a primary lifecycle phase of a key?", options: ["Generation", "Deletion", "Distribution", "All of the above"], answer: "All of the above" },
{ question: "A trust anchor is typically a:", options: ["Root certificate", "Session key", "Symmetric key", "MAC"], answer: "Root certificate" },
{ question: "Public keys can be distributed over:", options: ["Secure channels only", "Insecure channels", "No channels", "Physical mail only"], answer: "Insecure channels" },
{ question: "Why would you revoke a certificate before it expires?", options: ["Because it's old", "Because the private key was compromised", "To save memory", "To change the algorithm"], answer: "Because the private key was compromised" },
{ question: "What does X.509 define?", options: ["The DES algorithm", "Public-key certificate format", "The hash structure", "Network protocols"], answer: "Public-key certificate format" }
]
},
{
chapterNumber: 9,
chapterName: "User Authentication and Kerberos",
vivaQuestions: [
{ question: "What is User Authentication?", answer: "Sir, user authentication is the process of verifying the identity of a user, ensuring they are who they claim to be before granting access to a system." },
{ question: "What is Kerberos?", answer: "Sir, Kerberos is a network authentication protocol designed to provide strong authentication for client/server applications by using secret-key cryptography." },
{ question: "What is a Ticket Granting Server (TGS) in Kerberos?", answer: "Sir, the TGS is a Kerberos server that issues tickets to clients, which the clients then use to request access to other services in the network." },
{ question: "What is a Kerberos Ticket?", answer: "Sir, a ticket is a temporary credential issued by the authentication server that proves a user's identity and allows them to access a specific network service." },
{ question: "Why is Kerberos considered secure?", answer: "Sir, Kerberos is secure because it does not send passwords over the network; instead, it uses encrypted tickets and timestamps to prevent replay attacks." },
{ question: "What is the role of an Authentication Server (AS) in Kerberos?", answer: "Sir, the AS verifies the user's initial login and issues a Ticket Granting Ticket (TGT), which the user then uses to get service tickets." },
{ question: "How does symmetric encryption work for remote authentication?", answer: "Sir, both parties share a pre-agreed secret key. The authentication involves challenges and responses encrypted with this key, proving identity without revealing the key itself." },
{ question: "What is an Authenticator in Kerberos?", answer: "Sir, an authenticator is information that can be proven to have been generated by a client at the time of a request, used to prevent unauthorized replay of tickets." },
{ question: "What is the primary advantage of Kerberos?", answer: "Sir, it provides single sign-on capabilities, where a user authenticates once and gets access to all network services without re-entering credentials for each one." },
{ question: "What is a replay attack?", answer: "Sir, a replay attack occurs when an attacker captures a valid authentication transmission and replays it later to gain unauthorized access, which Kerberos prevents using timestamps." }
],
mcqs: [
{ question: "What is the purpose of user authentication?", options: ["Data encryption", "Identity verification", "Key generation", "Hashing"], answer: "Identity verification" },
{ question: "Kerberos uses which type of cryptography?", options: ["Symmetric", "Asymmetric", "No cryptography", "Quantum"], answer: "Symmetric" },
{ question: "In Kerberos, what issues tickets to clients?", options: ["The server", "The Authentication Server (AS)", "The user", "The network"], answer: "The Authentication Server (AS)" },
{ question: "A Kerberos ticket is used for:", options: ["Storing passwords", "Proving identity to a service", "Generating keys", "Encrypting files"], answer: "Proving identity to a service" },
{ question: "Kerberos prevents replay attacks using:", options: ["Passwords", "Timestamps", "Public keys", "Fingerprints"], answer: "Timestamps" },
{ question: "The Ticket Granting Server (TGS) in Kerberos provides:", options: ["Login tickets", "Service tickets", "Passwords", "MACs"], answer: "Service tickets" },
{ question: "Kerberos is designed to provide:", options: ["Single sign-on", "Data compression", "File system backup", "Firewall security"], answer: "Single sign-on" },
{ question: "Information proving a client's request is fresh is called an:", options: ["Authenticator", "Hash", "Certificate", "Counter"], answer: "Authenticator" },
{ question: "Symmetric remote authentication uses a ________ shared between parties.", options: ["Public key", "Secret key", "Digital signature", "Hash"], answer: "Secret key" },
{ question: "Kerberos does not send ________ over the network.", options: ["Tickets", "Timestamps", "Passwords", "Authenticators"], answer: "Passwords" }
]
}
]
};
