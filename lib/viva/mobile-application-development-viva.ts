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

export const gtuMobileApplicationDevelopmentViva: SubjectData = {
  subjectName: "MOBILE APPLICATION DEVELOPMENT",
  totalChapters: 8,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction to Android",
      vivaQuestions: [
        {
          question: "What is Android?",
          answer: "Sir, Android is an open-source, Linux-based operating system primarily designed for touchscreen mobile devices, developed by Google and the Open Handset Alliance."
        },
        {
          question: "What are the main layers of the Android Architecture?",
          answer: "Sir, the architecture consists of the Linux Kernel, Hardware Abstraction Layer (HAL), Android Runtime (ART) & Native Libraries, Application Framework, and System/User Applications."
        },
        {
          question: "What is an Activity in Android?",
          answer: "Sir, an Activity represents a single screen with a user interface in an Android application. It acts as the entry point for interacting with the user."
        },
        {
          question: "What is the Activity Lifecycle?",
          answer: "Sir, the activity lifecycle consists of various states that an activity passes through during its existence, such as onCreate, onStart, onResume, onPause, onStop, and onDestroy."
        },
        {
          question: "What is an Intent?",
          answer: "Sir, an Intent is a messaging object you can use to request an action from another app component. It is mainly used to start activities, start services, or deliver broadcasts."
        },
        {
          question: "What is a Fragment?",
          answer: "Sir, a Fragment represents a reusable portion of the user interface in an Activity. It allows for more modular activity designs that can adapt to different screen sizes."
        },
        {
          question: "What is the role of the AndroidManifest.xml file?",
          answer: "Sir, the manifest file provides essential information about the app to the Android system, including the app's components (activities, services), permissions, and hardware requirements."
        },
        {
          question: "What are the Building Blocks of an Android Application?",
          answer: "Sir, the core building blocks are Activities, Services, Broadcast Receivers, and Content Providers."
        },
        {
          question: "What is an Implicit Intent?",
          answer: "Sir, an implicit intent does not name a specific component, but instead declares a general action to perform, which allows the Android system to resolve which app component should handle the request."
        },
        {
          question: "What is an Explicit Intent?",
          answer: "Sir, an explicit intent explicitly defines the specific component (class name) that should be started by the intent."
        }
      ],
      mcqs: [
        { question: "Android is based on which OS kernel?", options: ["Windows", "MacOS", "Linux", "Unix"], answer: "Linux" },
        { question: "Which file contains the app's configuration and permissions?", options: ["strings.xml", "build.gradle", "AndroidManifest.xml", "MainActivity.java"], answer: "AndroidManifest.xml" },
        { question: "A single screen in an Android application is called:", options: ["Intent", "Service", "Activity", "Broadcast Receiver"], answer: "Activity" },
        { question: "Which intent is used to explicitly name the component to start?", options: ["Implicit", "Explicit", "Fragment", "Action"], answer: "Explicit" },
        { question: "Which component represents a part of an Activity UI?", options: ["Intent", "Fragment", "Service", "Manifest"], answer: "Fragment" },
        { question: "What is the first method called in the Activity lifecycle?", options: ["onStart", "onResume", "onCreate", "onPause"], answer: "onCreate" },
        { question: "Which component is primarily used for background processing?", options: ["Activity", "Service", "Fragment", "View"], answer: "Service" },
        { question: "What type of intent does not name a specific component?", options: ["Implicit", "Explicit", "Internal", "Local"], answer: "Implicit" },
        { question: "What is the build tool primarily used for Android projects?", options: ["Maven", "Ant", "Gradle", "Make"], answer: "Gradle" },
        { question: "Which layer in Android architecture provides high-level Java APIs?", options: ["Linux Kernel", "Native Libraries", "Application Framework", "HAL"], answer: "Application Framework" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Android UI and Components",
      vivaQuestions: [
        { question: "What is a Layout in Android?", answer: "Sir, a layout defines the visual structure of a user interface, determining how UI components (views) are positioned and sized on the screen." },
        { question: "What is LinearLayout?", answer: "Sir, LinearLayout arranges its children in a single direction, either vertically or horizontally." },
        { question: "What is RelativeLayout?", answer: "Sir, RelativeLayout allows child views to be positioned relative to each other or to the parent container." },
        { question: "What is the difference between Recycler View and List View?", answer: "Sir, Recycler View is a more advanced and flexible version of List View; it efficiently recycles view objects, making it much better for large datasets." },
        { question: "What is a CardView?", answer: "Sir, CardView is a UI component that provides a card-like look with rounded corners and shadow, commonly used to present information in a clean, consistent way." },
        { question: "What are Android Menus?", answer: "Sir, Android menus (like Options Menu or Context Menu) provide an easy way for users to access common app actions without cluttering the main screen." },
        { question: "What is an Options Menu?", answer: "Sir, it is the primary collection of menu items for an activity, typically displayed in the app's toolbar." },
        { question: "What is the Toolbar/Action Bar?", answer: "Sir, the Toolbar is a customizable widget that replaces the traditional Action Bar, providing a place for the app title, navigation, and menu items." },
        { question: "How do you handle UI events?", answer: "Sir, UI events are handled by registering 'Listeners' (like View.OnClickListener) on the specific view component, which trigger defined methods when the user interacts with them." },
        { question: "What is a custom layout?", answer: "Sir, a custom layout is a UI structure created by the developer, either by nesting standard layouts or by extending the ViewGroup class to define unique positioning logic." }
      ],
      mcqs: [
        { question: "Which layout arranges children in a single row or column?", options: ["RelativeLayout", "FrameLayout", "LinearLayout", "TableLayout"], answer: "LinearLayout" },
        { question: "Which component is most efficient for displaying large lists?", options: ["ListView", "RecyclerView", "ScrollView", "GridLayout"], answer: "RecyclerView" },
        { question: "What is used to handle a button click?", options: ["Event Listener", "Adapter", "Manifest", "Intent"], answer: "Event Listener" },
        { question: "Which view component displays information inside a card with shadows?", options: ["ImageView", "CardView", "TextView", "Button"], answer: "CardView" },
        { question: "Where are UI layouts typically defined?", options: ["Java files", "XML files", "Manifest files", "Gradle files"], answer: "XML files" },
        { question: "Which menu usually appears when you long-press a UI element?", options: ["Options Menu", "Context Menu", "Toolbar", "ActionBar"], answer: "Context Menu" },
        { question: "What component is used to display an image?", options: ["TextView", "ImageView", "Button", "EditText"], answer: "ImageView" },
        { question: "The component at the top of an activity for navigation and actions is the:", options: ["Status Bar", "Toolbar", "ScrollView", "RadioGroup"], answer: "Toolbar" },
        { question: "Which layout positions views relative to their parent or siblings?", options: ["LinearLayout", "RelativeLayout", "TableLayout", "FrameLayout"], answer: "RelativeLayout" },
        { question: "What is the function of the Adapter in RecyclerView?", options: ["To store data", "To bind data to the views", "To handle network calls", "To define the layout"], answer: "To bind data to the views" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "Database Connectivity and Storage",
      vivaQuestions: [
        { question: "What is Shared Preferences?", answer: "Sir, Shared Preferences is a lightweight storage mechanism used to save small collections of primitive key-value data, like user settings or preferences." },
        { question: "How do you store data in Android locally?", answer: "Sir, common ways include Shared Preferences for simple settings, internal storage for private files, external storage for public files, and SQLite for structured relational data." },
        { question: "What is SQLite in Android?", answer: "Sir, SQLite is an open-source, lightweight, serverless relational database engine built directly into the Android OS, used to manage structured application data." },
        { question: "What is Realm NoSQL Database?", answer: "Sir, Realm is an alternative, object-oriented database for Android that is often faster and easier to use than SQLite, allowing direct mapping of objects to the database." },
        { question: "What is run-time permission?", answer: "Sir, since Android 6.0 (Marshmallow), apps must request dangerous permissions (like accessing contacts or camera) at run-time rather than just at installation." },
        { question: "How do you access the SD Card?", answer: "Sir, we access the SD card using the Environment.getExternalStorageDirectory() path, ensuring that the app has requested and been granted 'READ_EXTERNAL_STORAGE' or 'WRITE_EXTERNAL_STORAGE' permissions." },
        { question: "What is the lifecycle of a database connection?", answer: "Sir, the connection should be opened when needed (e.g., inside an activity's onCreate or a helper class), used for queries, and then explicitly closed to prevent memory leaks." },
        { question: "When should you use Shared Preferences vs SQLite?", answer: "Sir, use Shared Preferences for simple, small key-value pairs (e.g., 'isLoggedIn' flag). Use SQLite for large, structured, or relational data requiring complex queries." },
        { question: "What is a Content Provider?", answer: "Sir, a Content Provider manages access to a structured set of data, allowing an application to share its data securely with other applications." },
        { question: "What is internal storage?", answer: "Sir, internal storage is a private storage area on the device where files are only accessible to the application that created them; it is cleared when the app is uninstalled." }
      ],
      mcqs: [
        { question: "Which storage is best for simple key-value pairs?", options: ["SQLite", "Shared Preferences", "Internal Storage", "Content Provider"], answer: "Shared Preferences" },
        { question: "What is the lightweight, relational database built into Android?", options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"], answer: "SQLite" },
        { question: "Android 6.0+ requires permissions for dangerous actions to be requested:", options: ["At compile time", "At install time", "At run time", "Never"], answer: "At run time" },
        { question: "Which database engine is an object-oriented alternative to SQLite?", options: ["Realm", "Oracle", "MariaDB", "DB2"], answer: "Realm" },
        { question: "Which of the following is NOT an Android storage option?", options: ["Shared Preferences", "SQLite", "Internal Storage", "Centralized Cloud OS"], answer: "Centralized Cloud OS" },
        { question: "Where are private app files stored?", options: ["SD Card", "Internal Storage", "Public Downloads", "System Root"], answer: "Internal Storage" },
        { question: "What does SQLite NOT support?", options: ["SQL queries", "Relational data", "Client-server architecture", "Data indexing"], answer: "Client-server architecture" },
        { question: "Shared Preferences store data as:", options: ["Tables", "Key-Value pairs", "Graphs", "XML trees"], answer: "Key-Value pairs" },
        { question: "What component allows sharing data between different apps?", options: ["Activity", "Content Provider", "Service", "Shared Prefs"], answer: "Content Provider" },
        { question: "Which permission is needed to save files on the SD card?", options: ["INTERNET", "CAMERA", "WRITE_EXTERNAL_STORAGE", "ACCESS_FINE_LOCATION"], answer: "WRITE_EXTERNAL_STORAGE" }
      ]
    },
    {
      chapterNumber: 4,
      chapterName: "Web Services and Parsing",
      vivaQuestions: [
        { question: "What is a Web Service?", answer: "Sir, a web service is a method of communication between two electronic devices over the internet, allowing an app to fetch data or perform actions on a remote server." },
        { question: "What is JSON?", answer: "Sir, JSON (JavaScript Object Notation) is a lightweight, human-readable format used for storing and exchanging data between a server and an application." },
        { question: "What is Retrofit?", answer: "Sir, Retrofit is a popular type-safe HTTP client library for Android that simplifies the process of making network requests and parsing JSON responses into Java/Kotlin objects." },
        { question: "What is an AsyncTask?", answer: "Sir, AsyncTask was a class used to perform background operations and publish results on the UI thread without manipulating threads directly. (Note: it is now deprecated)." },
        { question: "Why is network operation forbidden on the main thread?", answer: "Sir, if you perform long-running network operations on the main (UI) thread, the app will freeze and trigger an 'Application Not Responding' (ANR) error." },
        { question: "What is Parsing?", answer: "Sir, parsing is the process of analyzing a string of data (like JSON or XML) and converting it into a usable object structure within the programming language." },
        { question: "What is the difference between JSON and XML?", answer: "Sir, JSON is generally lighter, less verbose, and faster to parse than XML, making it the preferred choice for most modern mobile APIs." },
        { question: "What does type-safe mean in Retrofit?", answer: "Sir, it means Retrofit checks the data types during compilation, ensuring that the JSON response matches the expected object structure, which prevents many runtime errors." },
        { question: "What is an API?", answer: "Sir, an API (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate with each other." },
        { question: "How does Retrofit handle JSON parsing?", answer: "Sir, Retrofit integrates with converters like GSON or Moshi, which automatically deserialize the JSON response into pre-defined model classes." }
      ],
      mcqs: [
        { question: "Which lightweight data format is most common for Android APIs?", options: ["XML", "JSON", "YAML", "Binary"], answer: "JSON" },
        { question: "What is the primary purpose of Retrofit in Android?", options: ["UI design", "Local storage", "Making network requests", "Playing audio"], answer: "Making network requests" },
        { question: "Why is network work not allowed on the main thread?", options: ["To save battery", "To prevent ANR (Application Not Responding) errors", "To increase speed", "It is not forbidden"], answer: "To prevent ANR (Application Not Responding) errors" },
        { question: "What is an API?", options: ["A hardware driver", "Application Programming Interface", "Android Phone Installation", "Activity Processing Interface"], answer: "Application Programming Interface" },
        { question: "What does parsing mean?", options: ["Deleting data", "Converting data strings into objects", "Encrypting files", "Compressing images"], answer: "Converting data strings into objects" },
        { question: "Which library is commonly used with Retrofit for JSON conversion?", options: ["GSON", "SQLite", "CameraX", "WorkManager"], answer: "GSON" },
        { question: "AsyncTask was primarily used for:", options: ["Main thread work", "Background operations", "Layout design", "Permission requests"], answer: "Background operations" },
        { question: "JSON is more _____ than XML.", options: ["Verbose", "Lightweight", "Complex", "Strict"], answer: "Lightweight" },
        { question: "Retrofit is known for being:", options: ["Slow", "Type-safe", "Error-prone", "Hard to implement"], answer: "Type-safe" },
        { question: "A web service enables communication between:", options: ["Two devices over the internet", "Two files on the same disk", "The CPU and RAM", "Two buttons in an app"], answer: "Two devices over the internet" }
      ]
    },
    {
      chapterNumber: 5,
      chapterName: "Advanced Android Development (Maps & Location)",
      vivaQuestions: [
        { question: "What is the Google Maps API?", answer: "Sir, it is a service that allows developers to embed Google Maps into their Android applications, supporting markers, camera controls, and custom map styles." },
        { question: "How do you access GPS data?", answer: "Sir, we use the LocationManager or the Google Play Services 'Fused Location Provider' to request updates about the device's latitude and longitude." },
        { question: "What is Geocoding?", answer: "Sir, geocoding is the process of converting an address (e.g., '123 Main St') into geographic coordinates (latitude and longitude)." },
        { question: "What is Reverse Geocoding?", answer: "Sir, it is the reverse process: converting geographic coordinates back into a human-readable address." },
        { question: "What is the Fused Location Provider?", answer: "Sir, it is part of Google Play Services that intelligently combines data from GPS, Wi-Fi, and cellular networks to provide the most accurate and power-efficient location." },
        { question: "What are Location Services?", answer: "Sir, these are system services that provide the application with the device's geographical position, requiring fine or coarse location permissions." },
        { question: "Why is GPS power-intensive?", answer: "Sir, because the GPS radio must actively communicate with satellites, which consumes significant battery power compared to network-based location providers." },
        { question: "What is an API Key for Google Maps?", answer: "Sir, an API key is a unique identifier required to authenticate the app's requests to Google's server to ensure authorized usage of the Maps service." },
        { question: "How do you display a location on a map?", answer: "Sir, we use a 'Marker' object added to the GoogleMap object at the specific LatLng (latitude, longitude) coordinate." },
        { question: "What permission is needed for precise location?", answer: "Sir, you need 'ACCESS_FINE_LOCATION' for high-precision GPS data, or 'ACCESS_COARSE_LOCATION' for lower-precision network-based data." }
      ],
      mcqs: [
        { question: "Which service converts an address to coordinates?", options: ["Reverse Geocoding", "Geocoding", "GPS tracking", "Maps Rendering"], answer: "Geocoding" },
        { question: "What is the best, power-efficient location provider in Google Play Services?", options: ["GPS Provider", "Fused Location Provider", "Network Provider", "Passive Provider"], answer: "Fused Location Provider" },
        { question: "To use Google Maps in an app, what must you provide?", options: ["User password", "API Key", "Credit card", "Local database"], answer: "API Key" },
        { question: "Which permission is required for accurate GPS data?", options: ["ACCESS_COARSE_LOCATION", "ACCESS_FINE_LOCATION", "INTERNET", "CAMERA"], answer: "ACCESS_FINE_LOCATION" },
        { question: "Converting coordinates to an address is called:", options: ["Geocoding", "Reverse Geocoding", "Mapping", "Marker pointing"], answer: "Reverse Geocoding" },
        { question: "A specific location on a map is represented by a:", options: ["Marker", "Button", "Text", "Service"], answer: "Marker" },
        { question: "GPS consumes significant battery because it:", options: ["Uses Wi-Fi", "Communicates with satellites", "Runs on the main thread", "Is a small file"], answer: "Communicates with satellites" },
        { question: "What object represents the map in the code?", options: ["MapView", "GoogleMap", "MapButton", "LocationManager"], answer: "GoogleMap" },
        { question: "What is the result of Geocoding?", options: ["A street name", "A Latitude/Longitude pair", "A picture", "A database query"], answer: "A Latitude/Longitude pair" },
        { question: "Fused Location Provider combines data from:", options: ["Only GPS", "GPS, Wi-Fi, and Cellular", "Only Cellular", "Only Wi-Fi"], answer: "GPS, Wi-Fi, and Cellular" }
      ]
    },
    {
      chapterNumber: 6,
      chapterName: "Graphics, Multimedia & Background Tasks",
      vivaQuestions: [
        { question: "How do you play Audio in Android?", answer: "Sir, we use the MediaPlayer class, which provides high-level APIs to load, play, pause, and stop audio files from resources or local storage." },
        { question: "How do you play Video in Android?", answer: "Sir, we use the VideoView component or the ExoPlayer library, which handle the decoding and rendering of video streams." },
        { question: "What is a Service?", answer: "Sir, a Service is an application component that performs long-running operations in the background without a user interface." },
        { question: "What is a Broadcast Receiver?", answer: "Sir, a Broadcast Receiver is a component that enables the app to listen for system-wide announcements or events, like low battery or screen turned off, even when the app isn't running." },
        { question: "What is a Notification?", answer: "Sir, a Notification is a message displayed outside the app's normal UI (in the status bar) to inform the user about important events or background activity." },
        { question: "What is Frame Animation?", answer: "Sir, frame animation displays a sequence of drawable resources one after another, similar to a flipbook." },
        { question: "What is Tween Animation?", answer: "Sir, tween animation performs a series of transformations—like rotation, fading, moving, or resizing—on a single image over a set time." },
        { question: "What is Firebase?", answer: "Sir, Firebase is a platform developed by Google that provides backend services like database (Realtime/Firestore), authentication, and notifications, making it easy to build apps without managing servers." },
        { question: "What is a CRUD operation?", answer: "Sir, CRUD stands for Create, Read, Update, and Delete; these are the four basic functions needed to manage data in any database." },
        { question: "What is an Accelerometer Sensor?", answer: "Sir, the accelerometer measures the device's acceleration (speed change) and orientation, often used to detect tilt or shaking gestures." }
      ],
      mcqs: [
        { question: "Which class is used to play audio files?", options: ["SoundPlayer", "MediaPlayer", "AudioView", "VideoPlayer"], answer: "MediaPlayer" },
        { question: "A component running in the background without a UI is a:", options: ["Activity", "Service", "Fragment", "Dialog"], answer: "Service" },
        { question: "What component listens for system-wide events?", options: ["Service", "Broadcast Receiver", "Activity", "View"], answer: "Broadcast Receiver" },
        { question: "Notifications appear in the:", options: ["App content", "Status bar", "Settings", "Database"], answer: "Status bar" },
        { question: "Which animation performs transformations on a single image?", options: ["Frame", "Tween", "View", "Drawable"], answer: "Tween" },
        { question: "Which animation works like a flipbook?", options: ["Tween", "Frame", "Rotation", "Fading"], answer: "Frame" },
        { question: "CRUD stands for:", options: ["Create, Read, Update, Delete", "Copy, Run, Use, Data", "Check, Review, Undo, Do", "Call, Request, Upload, Download"], answer: "Create, Read, Update, Delete" },
        { question: "Firebase provides:", options: ["Backend services", "Hardware", "OS Kernels", "Layout editors"], answer: "Backend services" },
        { question: "Which sensor measures device tilt and shaking?", options: ["Light sensor", "Accelerometer", "Barometer", "Proximity"], answer: "Accelerometer" },
        { question: "What is the primary function of a Broadcast Receiver?", options: ["Play audio", "Respond to system announcements", "Manage layout", "Save files"], answer: "Respond to system announcements" }
      ]
    },
    {
      chapterNumber: 7,
      chapterName: "Android System Features",
      vivaQuestions: [
        { question: "What is Text-to-Speech (TTS)?", answer: "Sir, TTS is a service that allows an Android device to synthesize and speak text content, making apps more accessible to visually impaired users." },
        { question: "How do you access the Camera?", answer: "Sir, we use the CameraX library or Camera API, requesting 'CAMERA' permissions, to preview images and take photos or videos." },
        { question: "What is Bluetooth in Android?", answer: "Sir, Android provides the Bluetooth API, which allows apps to discover other devices, pair, and exchange data securely." },
        { question: "How do you manage Wi-Fi connections?", answer: "Sir, we use the WifiManager class to scan for networks, enable/disable Wi-Fi, and check the status of current connections." },
        { question: "What is a Gyroscope sensor?", answer: "Sir, the gyroscope measures the device's rotation around its axes, essential for tracking device orientation, like in VR/AR games." },
        { question: "What is Text-to-Speech engine initialization?", answer: "Sir, we must initialize the TextToSpeech object by passing an OnInitListener to ensure the engine is loaded and ready before trying to speak text." },
        { question: "What permissions are required for camera usage?", answer: "Sir, the 'android.permission.CAMERA' is required in the manifest, and since Android 6.0, it must be requested at runtime." },
        { question: "What is the Bluetooth pairing process?", answer: "Sir, it involves discovering devices, creating a bond via a secure handshake, and establishing a socket connection for data transfer." },
        { question: "What is the role of the Gyroscope?", answer: "Sir, while the accelerometer detects linear motion, the gyroscope detects angular rotation, which is more accurate for gaming and motion sensing." },
        { question: "What is the purpose of Bluetooth Profiles?", answer: "Sir, profiles like A2DP (for audio) or GATT (for low energy data) define the standard behavior and features for a specific type of Bluetooth connection." }
      ],
      mcqs: [
        { question: "Which service speaks text aloud?", options: ["SpeechRecognizer", "TextToSpeech", "AudioPlayer", "VoiceCommand"], answer: "TextToSpeech" },
        { question: "Which permission is required to use the camera?", options: ["WIFI", "CAMERA", "AUDIO", "LOCATION"], answer: "CAMERA" },
        { question: "The Gyroscope measures:", options: ["Linear acceleration", "Angular rotation", "Ambient light", "Temperature"], answer: "Angular rotation" },
        { question: "Which class is used to manage Wi-Fi settings?", options: ["WifiManager", "WifiService", "WifiConnector", "WifiHandler"], answer: "WifiManager" },
        { question: "Bluetooth pairing establishes:", options: ["A trusted relationship", "A faster network", "A system update", "A layout"], answer: "A trusted relationship" },
        { question: "Android 6.0+ requires which type of permission?", options: ["Manifest permission", "Runtime permission", "Install permission", "Root permission"], answer: "Runtime permission" },
        { question: "A2DP is a Bluetooth profile for:", options: ["Data transfer", "High-quality audio", "File management", "Location"], answer: "High-quality audio" },
        { question: "Before using Text-to-Speech, what must you do?", options: ["Restart the phone", "Initialize the engine", "Delete preferences", "Clear cache"], answer: "Initialize the engine" },
        { question: "Which API is commonly used for modern Camera management?", options: ["CameraX", "OldCamera", "LegacyCamera", "VideoEngine"], answer: "CameraX" },
        { question: "What helps apps interact with Bluetooth?", options: ["Bluetooth API", "WifiManager", "SensorManager", "CameraAPI"], answer: "Bluetooth API" }
      ]
    },
    {
      chapterNumber: 8,
      chapterName: "Development and Deployment",
      vivaQuestions: [
        { question: "What is Logcat?", answer: "Sir, Logcat is a tool in Android Studio that displays system and application logs, crucial for debugging crashes and tracking app flow." },
        { question: "What is the Dalvik Debug Monitor Server (DDMS)?", answer: "Sir, it was an old debugging tool that provided features like process monitoring, log viewing, and screen capturing. It is now largely replaced by the Android Profiler in Android Studio." },
        { question: "What is ADB?", answer: "Sir, ADB stands for Android Debug Bridge. It is a command-line tool that lets you communicate with a device, perform actions like installing apps, and debug them." },
        { question: "What is an Emulator?", answer: "Sir, an emulator is a virtual device that mimics the hardware and software behavior of a physical Android device on your computer for testing." },
        { question: "How do you connect a real device for debugging?", answer: "Sir, we enable 'Developer Options' and 'USB Debugging' on the physical phone, connect it via USB, and Android Studio detects it automatically." },
        { question: "What is the Android Profiler?", answer: "Sir, the Android Profiler is an integrated tool in Android Studio that monitors real-time CPU, memory, network, and battery usage of the running application." },
        { question: "What is an APK?", answer: "Sir, APK stands for Android Package Kit. It is the file format used by Android to distribute and install mobile applications." },
        { question: "How do you publish an application?", answer: "Sir, we generate a signed APK or Android App Bundle (AAB), create a developer account on Google Play Console, and upload the artifact for review." },
        { question: "What is a 'Signed' APK?", answer: "Sir, a signed APK includes a digital certificate from the developer, which ensures the integrity of the app and proves the developer's identity to the system." },
        { question: "What is the difference between an emulator and a real device?", answer: "Sir, an emulator is virtual and good for testing many versions, but a real device is necessary for testing real-world performance, sensors, and hardware-software interaction." }
      ],
      mcqs: [
        { question: "What displays system and app logs?", options: ["Emulator", "Logcat", "Manifest", "Gradle"], answer: "Logcat" },
        { question: "ADB stands for:", options: ["Android Debug Bridge", "App Data Base", "Advanced Data Bridge", "Android Device Box"], answer: "Android Debug Bridge" },
        { question: "What is the file format for Android app distribution?", options: [".exe", ".jar", ".apk", ".ios"], answer: ".apk" },
        { question: "What mimics a real phone on your computer?", options: ["Logcat", "Debugger", "Emulator", "SDK"], answer: "Emulator" },
        { question: "What must be enabled on a phone to debug via USB?", options: ["Developer Options", "Sound", "Wi-Fi", "Bluetooth"], answer: "Developer Options" },
        { question: "Which tool tracks CPU and memory usage in real-time?", options: ["Android Profiler", "Emulator", "Manifest", "Toast"], answer: "Android Profiler" },
        { question: "A signed APK is required for:", options: ["Testing only", "Publishing to the Play Store", "Formatting the phone", "Editing files"], answer: "Publishing to the Play Store" },
        { question: "Which tool allows installing apps via command-line?", options: ["ADB", "Toast", "Logcat", "Profiler"], answer: "ADB" },
        { question: "Testing on a real device is necessary to verify:", options: ["Hardcoded strings", "Real-world sensor performance", "XML layout", "Java syntax"], answer: "Real-world sensor performance" },
        { question: "What does signing an app prove?", options : ["The app size", "The developer's identity", "The app speed", "The RAM usage"], answer: "The developer's identity" }
      ]
    }
  ]
};
