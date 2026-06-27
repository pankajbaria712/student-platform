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

export const gtuIpdc1Viva: SubjectData = {
subjectName: "INTEGRATED PERSONALITY DEVELOPMENT COURSE (IPDC-1)",
totalChapters: 7,
chapters: [
{
chapterNumber: 1,
chapterName: "Remaking Yourself",
vivaQuestions: [
{ question: "What is the primary objective of the IPDC course?", answer: "Sir, the primary objective of IPDC is to provide a holistic, value-based education that prepares students for modern challenges, helping them develop into self-aware, sincere, and successful professionals and considerate citizens." },
{ question: "What does 'Restructuring Yourself' mean in this course?", answer: "Sir, it means intentionally developing our thought processes to secure a bright future. It involves working on our intellectual, physical, emotional, and spiritual quotients to achieve a well-rounded personality." },
{ question: "Can you name the four quotients necessary for holistic development?", answer: "Yes sir, the four quotients are Intelligence Quotient (IQ), Emotional Quotient (EQ), Physical Quotient (PQ), and Spiritual Quotient (SQ)." },
{ question: "How do habits work according to the course?", answer: "Sir, habits work in a loop consisting of a cue, a routine, and a reward. Understanding this loop allows us to break bad habits and consciously build positive ones that lead to professional and personal success." },
{ question: "Why is it important to learn about the 'Power of Habit'?", answer: "Sir, our daily lives are largely dictated by our habits. By learning the habits of highly successful professionals, we can apply practical techniques to transform our own routines and achieve our goals." },
{ question: "How does social media affect our lives?", answer: "Sir, while useful, social media can become highly addictive, leading to time-wasting, distraction, and sometimes depression. It takes away our focus from our primary academic and personal goals." },
{ question: "How can we handle social media addiction?", answer: "Sir, we can handle it by taking back control through simple methods like setting specific time limits, turning off non-essential notifications, and prioritizing real-life interactions over virtual ones." },
{ question: "What is the role of values in our daily life?", answer: "Sir, values act as our moral compass. They give us self-discipline amidst distractions and fortitude in the face of failures, ensuring we remain reliable and ethical in all our roles." },
{ question: "Why is self-improvement considered a continuous process?", answer: "Sir, because the world and its challenges are constantly evolving. Continuous self-improvement ensures we adapt, learn new soft skills, and maintain our emotional and spiritual stability." },
{ question: "What does taking 'back control' of your mind mean?", answer: "Sir, it means not letting external stimuli, like smartphones and social media, dictate your attention and mood, but rather consciously directing your focus towards productive and meaningful tasks." }
],
mcqs: [
{ question: "What is the full form of IPDC?", options: ["Internal Personality Development Course", "Integrated Personality Development Course", "Integrated Professional Development Course", "International Personality Development Course"], answer: "Integrated Personality Development Course" },
{ question: "Which of the following is NOT one of the four quotients for holistic growth?", options: ["Emotional Quotient (EQ)", "Spiritual Quotient (SQ)", "Financial Quotient (FQ)", "Physical Quotient (PQ)"], answer: "Financial Quotient (FQ)" },
{ question: "The habit loop consists of Cue, Routine, and:", options: ["Reward", "Reaction", "Result", "Reason"], answer: "Reward" },
{ question: "What is a major negative impact of unmanaged social media use?", options: ["Increased focus", "Addiction and distraction", "Better physical health", "Enhanced spiritual growth"], answer: "Addiction and distraction" },
{ question: "According to the syllabus, what is the core focus of student growth?", options: ["Only getting high grades", "Morality and character development", "Earning maximum money", "Memorizing textbooks"], answer: "Morality and character development" },
{ question: "To secure a bright future, students must focus on:", options: ["Ignoring family", "Restructuring themselves", "Using more social media", "Avoiding teamwork"], answer: "Restructuring themselves" },
{ question: "Which book is highly recommended for understanding habits?", options: ["The Power of Habit by Charles Duhigg", "Physics in Ancient India", "The Wit and Wisdom of Ratan Tata", "Long Walk to Freedom"], answer: "The Power of Habit by Charles Duhigg" },
{ question: "Values help a person become:", options: ["Selfish and isolated", "A considerate citizen and reliable employee", "Addicted to technology", "Fearful of failures"], answer: "A considerate citizen and reliable employee" },
{ question: "Taking back control refers primarily to managing our:", options: ["Bank accounts", "Diet plans", "Social media and screen time", "College syllabus"], answer: "Social media and screen time" },
{ question: "Self-discipline is most required to:", options: ["Sleep all day", "Overcome daily distractions", "Watch movies", "Eat junk food"], answer: "Overcome daily distractions" }
]
},
{
chapterNumber: 2,
chapterName: "Learning from Legends",
vivaQuestions: [
{ question: "Who are the two legends discussed in the early modules of IPDC?", answer: "Sir, the course highlights the inspirational lives of India's legendary cricketer Sachin Tendulkar and the renowned industrialist Ratan Tata." },
{ question: "What can we learn from Sachin Tendulkar's life?", answer: "Sir, from Sachin Tendulkar, we learn about immense dedication, the ability to handle extreme pressure and expectations, and maintaining humility despite achieving monumental success." },
{ question: "What leadership qualities does Ratan Tata exemplify?", answer: "Sir, Ratan Tata exemplifies visionary leadership, ethical business practices, compassion for employees, and a deep commitment to philanthropy and nation-building." },
{ question: "Who is the other major legend studied for his legendary qualities?", answer: "Sir, Dr. A.P.J. Abdul Kalam, the former President of India and a great scientist, is studied for his extraordinary life and character." },
{ question: "What are the five legendary qualities of Dr. A.P.J. Abdul Kalam mentioned in the course?", answer: "Yes sir, the five qualities are: Dare to Dream, Work Hard, Get Good Guidance, Humility, and Use Your Talents for the Benefit of Others." },
{ question: "What does Dr. Kalam mean by 'Dare to Dream'?", answer: "Sir, it means having the courage to set high, visionary goals for yourself and your country, regardless of your current circumstances or humble beginnings." },
{ question: "Why did Dr. Kalam emphasize getting 'Good Guidance'?", answer: "Sir, he believed that hard work alone isn't enough; having a mentor or guru provides the right direction, corrects our mistakes, and accelerates our path to success." },
{ question: "How did Dr. Kalam use his talents for others?", answer: "Sir, despite being a top space and defense scientist, he used his knowledge to develop lightweight calipers for polio-affected children, showing that true talent should serve humanity." },
{ question: "Why is humility a common trait among these legends?", answer: "Sir, humility keeps a person grounded, open to learning, and respectful of others. Both Tata, Tendulkar, and Kalam achieved global fame but remained incredibly humble and approachable." },
{ question: "How can implementing lessons from these legends help a student?", answer: "Sir, by studying relatable case studies of these legends, students can imbibe their work ethic, moral integrity, and resilience, which directly helps in overcoming academic and professional hurdles." }
],
mcqs: [
{ question: "Which legendary scientist and President's life is studied in IPDC?", options: ["Dr. Homi Bhabha", "Dr. A.P.J. Abdul Kalam", "Dr. Vikram Sarabhai", "Dr. C.V. Raman"], answer: "Dr. A.P.J. Abdul Kalam" },
{ question: "Which of the following is NOT one of Dr. Kalam's 5 qualities mentioned in the syllabus?", options: ["Dare to Dream", "Work Hard", "Seek Revenge", "Humility"], answer: "Seek Revenge" },
{ question: "Sachin Tendulkar's life primarily teaches us about:", options: ["Business management", "Political strategy", "Dedication and handling pressure", "Cooking"], answer: "Dedication and handling pressure" },
{ question: "Ratan Tata is globally renowned for his:", options: ["Ethical business and philanthropy", "Acting skills", "Sports achievements", "Singing"], answer: "Ethical business and philanthropy" },
{ question: "According to Dr. Kalam, what is essential alongside working hard?", options: ["Sleeping less than 3 hours", "Getting Good Guidance", "Ignoring family", "Watching TV"], answer: "Getting Good Guidance" },
{ question: "Dr. Kalam advised using your talents for:", options: ["Self-glorification", "Making only money", "The Benefit of Others", "Defeating competitors unfairly"], answer: "The Benefit of Others" },
{ question: "Which trait is common among Tendulkar, Tata, and Kalam?", options: ["Arrogance", "Humility", "Laziness", "Dishonesty"], answer: "Humility" },
{ question: "Dr. Kalam's rule 'Dare to Dream' implies that students should:", options: ["Daydream in class", "Set high, visionary goals", "Sleep more", "Avoid reality"], answer: "Set high, visionary goals" },
{ question: "Which book is associated with Sachin Tendulkar in the references?", options: ["Playing It My Way", "Wings of Fire", "The Wit and Wisdom of Ratan Tata", "Atomic Habits"], answer: "Playing It My Way" },
{ question: "Studying the lives of legends is intended to:", options: ["Make students jealous", "Inspire a higher sense of character", "Help them memorize history dates", "Waste time"], answer: "Inspire a higher sense of character" }
]
},
{
chapterNumber: 3,
chapterName: "From House to Home",
vivaQuestions: [
{ question: "What is the difference between a 'House' and a 'Home'?", answer: "Sir, a house is merely a physical structure made of bricks and cement. A home is created by the people living inside it, bound by love, unity, understanding, and strong family relationships." },
{ question: "What is 'Active Listening'?", answer: "Sir, active listening is a communication technique where the listener fully concentrates, understands, responds, and remembers what is being said, rather than just passively hearing the words." },
{ question: "How does one listen with their eyes, ears, mind, and heart?", answer: "Sir, listening with ears captures words; eyes observe body language; the mind processes the logic and context; and the heart empathizes with the speaker's emotions. Together, this is holistic active listening." },
{ question: "Why is active listening essential for academic progress?", answer: "Sir, in academics, active listening helps students fully grasp complex concepts, ask better questions, avoid misunderstandings, and build a strong rapport with their professors." },
{ question: "What is the 'Generation Gap'?", answer: "Sir, the generation gap refers to the difference in opinions, values, and understanding between different generations, often between parents and their children, causing friction in the family." },
{ question: "How can students overcome the generation gap with their parents?", answer: "Sir, students can overcome it through open, respectful communication, practicing active listening, showing empathy towards their parents' perspectives, and spending quality time together." },
{ question: "Why is bonding within the family important?", answer: "Sir, a strong family bond provides emotional stability, a support system during difficult times, and fosters qualities like unity and forgiveness that are crucial for a peaceful life." },
{ question: "What causes discord in modern families?", answer: "Sir, discord is often caused by a lack of time spent together, excessive use of smartphones isolating members, misunderstandings due to poor listening, and ego." },
{ question: "How does effective communication build a 'Home'?", answer: "Sir, effective communication ensures that conflicts are resolved peacefully, every member feels valued and heard, and mutual respect is maintained, turning a mere living space into a loving home." },
{ question: "What is empathy in the context of family?", answer: "Sir, empathy means putting yourself in your family members' shoes, understanding their stress, struggles, and emotions, rather than just judging them from your own perspective." }
],
mcqs: [
{ question: "Active listening requires listening with:", options: ["Only ears", "Ears and mouth", "Eyes, ears, mind, and heart", "Only the mind"], answer: "Eyes, ears, mind, and heart" },
{ question: "What transforms a 'House' into a 'Home'?", options: ["Expensive furniture", "Strong family relationships and love", "High-speed internet", "Large square footage"], answer: "Strong family relationships and love" },
{ question: "The difference in opinions and values between parents and children is called:", options: ["Communication gap", "Generation gap", "Technology gap", "Wealth gap"], answer: "Generation gap" },
{ question: "Which of the following helps in overcoming family discord?", options: ["Holding grudges", "Forgiveness and effective communication", "Avoiding family members", "Arguing constantly"], answer: "Forgiveness and effective communication" },
{ question: "Active listening is an essential part of:", options: ["Academic progress and communications", "Physical exercise", "Cooking", "Driving"], answer: "Academic progress and communications" },
{ question: "Listening with the 'heart' means:", options: ["Checking heart rate", "Empathizing with the speaker's emotions", "Ignoring the speaker", "Memorizing words"], answer: "Empathizing with the speaker's emotions" },
{ question: "A strong family provides a student with:", options: ["Unlimited money", "Emotional stability and support", "Better internet", "College degrees"], answer: "Emotional stability and support" },
{ question: "To resolve conflicts at home, one must practice:", options: ["Ego", "Empathy and understanding", "Shouting", "Isolation"], answer: "Empathy and understanding" },
{ question: "According to the course, listening is a key component to:", options: ["Bonding the family", "Breaking relationships", "Creating generation gaps", "Ignoring parents"], answer: "Bonding the family" },
{ question: "A major modern distraction causing family members to disconnect is:", options: ["Reading books", "Excessive use of social media and phones", "Playing outdoor sports", "Cooking together"], answer: "Excessive use of social media and phones" }
]
},
{
chapterNumber: 4,
chapterName: "Facing Failures",
vivaQuestions: [
{ question: "How should a student view failure?", answer: "Sir, instead of seeing failure as a source of fear or depression, a student should view it as a formative learning experience and a stepping stone to future success." },
{ question: "Why is failure considered a necessity?", answer: "Sir, failures are necessary because they teach us resilience, expose our weaknesses so we can improve them, and ultimately build the strong character required to sustain success." },
{ question: "Which famous figures are studied in the context of facing failures?", answer: "Sir, the course covers the lives of Walt Disney, Abraham Lincoln, and Amitabh Bachchan, who all faced massive rejections and bankruptcies before achieving legendary success." },
{ question: "What can we learn from Abraham Lincoln's life?", answer: "Sir, Abraham Lincoln faced numerous business failures, nervous breakdowns, and lost multiple elections. His life teaches us extraordinary perseverance and the power of never giving up." },
{ question: "How did Walt Disney face his challenges?", answer: "Sir, Walt Disney was once fired for 'lacking imagination' and faced bankruptcy. He welcomed these challenges, maintained a positive perspective, and used his failures to fuel the creation of his empire." },
{ question: "What is the 'Power of Faith' in daily life?", answer: "Sir, the power of faith refers to having a strong belief in oneself, in the process, and in a higher power. Faith provides inner strength and hope when everything else seems to be falling apart." },
{ question: "How does a positive perspective change a difficult situation?", answer: "Sir, a positive perspective shifts our focus from 'Why is this happening to me?' to 'What can I learn from this?'. It turns a paralyzing obstacle into an actionable challenge." },
{ question: "Why do students often face depression regarding failures?", answer: "Sir, students face depression because society often equates their self-worth with their grades. They lack the constructive skills to process failure and fear being judged by their peers and family." },
{ question: "What constructive skills can help process failure?", answer: "Sir, skills like self-reflection, analyzing mistakes without self-pity, seeking feedback, and maintaining mental fortitude through daily positive habits and faith." },
{ question: "What does 'Welcoming Challenges' mean?", answer: "Sir, welcoming challenges means stepping out of our comfort zone voluntarily and not being afraid of difficult tasks, knowing that overcoming them is the only way to grow." }
],
mcqs: [
{ question: "According to the course, failure should be understood as:", options: ["The end of the road", "A formative learning experience", "A reason to quit", "A mark of incompetence"], answer: "A formative learning experience" },
{ question: "Which American President is studied for his extreme perseverance through multiple failures?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John F. Kennedy"], answer: "Abraham Lincoln" },
{ question: "Walt Disney was once famously fired for allegedly lacking:", options: ["Punctuality", "Imagination", "Money", "Technical skills"], answer: "Imagination" },
{ question: "What gives a person inner strength to push through hard times?", options: ["Fear", "Depression", "The Power of Faith", "Arrogance"], answer: "The Power of Faith" },
{ question: "A positive perspective helps turn obstacles into:", options: ["Bigger problems", "Actionable challenges", "Excuses", "Permanent failures"], answer: "Actionable challenges" },
{ question: "The syllabus aims to promote what quality in the face of failures?", options: ["Fortitude", "Cowardice", "Anger", "Laziness"], answer: "Fortitude" },
{ question: "Failure is often a student's daily source of:", options: ["Joy", "Fear, negativity, and depression", "Wealth", "Entertainment"], answer: "Fear, negativity, and depression" },
{ question: "Amitabh Bachchan is cited as an example of someone who:, bounced: false", options: ["Never failed", "Faced massive financial failure and bounced back", "Quit acting after one flop", "Avoided all challenges"], answer: "Faced massive financial failure and bounced back" },
{ question: "To overcome failure, one must shift their perspective to ask:", options: ["Why me?", "Who can I blame?", "What can I learn from this?", "How can I hide this?"], answer: "What can I learn from this?" },
{ question: "Welcoming challenges means:", options: ["Avoiding hard work", "Stepping out of the comfort zone", "Complaining about tasks", "Waiting for things to get easy"], answer: "Stepping out of the comfort zone" }
]
},
{
chapterNumber: 5,
chapterName: "My India My Pride",
vivaQuestions: [
{ question: "Why is it important to study India's glorious past?", answer: "Sir, studying India's glorious past instills a strong sense of pride and passion for our nation. It helps us understand our advanced cultural and scientific roots, boosting our national identity." },
{ question: "What were the contributions of India's ancient Rishis and scholars?", answer: "Sir, ancient Indian Rishis and scholars made tremendous contributions in fields like mathematics, astronomy, metallurgy, medicine (Ayurveda), and philosophy, forming the bedrock of modern sciences." },
{ question: "Can you name an ancient Indian text related to mathematics and astronomy?", answer: "Yes sir, the Aryabhatiya, written by the great mathematician and astronomer Aryabhata, is a foundational text that introduced groundbreaking concepts like the approximation of Pi and planetary motions." },
{ question: "How old is the Indian culture and civilization?", answer: "Sir, Indian civilization is thousands of years old. It is one of the oldest, continuous, and most sophisticated civilizations in the world, dating back to the Indus Valley and Vedic periods." },
{ question: "How can ancient concepts generate modern inspiration?", answer: "Sir, ancient Indian concepts like holistic living, sustainable coexistence with nature, and profound philosophical inquiry can inspire revolutionary ideas to solve today's global environmental and mental health crises." },
{ question: "What does the course mean by 'Appreciating the need to read, research, and share'?", answer: "Sir, it means we shouldn't just passively listen to historical facts. We must actively read our history, research its scientific validity, and share this knowledge globally to preserve our heritage." },
{ question: "Who was Sushruta?", answer: "Sir, Sushruta is widely considered the 'Father of Surgery'. His ancient text, the Sushruta Samhita, details complex surgical procedures, including plastic surgery, developed in ancient India." },
{ question: "What is the global value of Indian civilization?", answer: "Sir, Indian civilization has always promoted universal values like 'Vasudhaiva Kutumbakam' (The world is one family), non-violence, and spiritual harmony, which are highly relevant globally today." },
{ question: "How does knowing our past make us better citizens?", answer: "Sir, when we realize the greatness of our ancestors, we feel a responsibility to uphold their legacy. It motivates us to work hard, act ethically, and contribute to the betterment of our nation." },
{ question: "What is the relation between ancient India and modern physics?", answer: "Sir, many ancient Indian philosophical texts and scholars proposed concepts about atoms (Anu), the nature of the universe, and time that parallel several theories in modern physics." }
],
mcqs: [
{ question: "Studying India's glorious past helps students develop:", options: ["Inferiority complex", "A strong passion and pride for the nation", "Disinterest in history", "Fear of the future"], answer: "A strong passion and pride for the nation" },
{ question: "Who wrote the ancient Indian work on mathematics and astronomy called 'Aryabhatiya'?", options: ["Sushruta", "Chanakya", "Aryabhata", "Kalidasa"], answer: "Aryabhata" },
{ question: "India's ancient civilization is characterized as being:", options: ["Primitive and uneducated", "Advanced and sophisticated", "Only a few centuries old", "Copied from others"], answer: "Advanced and sophisticated" },
{ question: "Ancient Indian concepts can be used to generate:", options: ["Boredom", "Revolutionary ideas and inspiration", "Technological regression", "Pollution"], answer: "Revolutionary ideas and inspiration" },
{ question: "To develop a deeper interest in our past, the course suggests we should:", options: ["Ignore it", "Read about it, research it, and share it", "Only watch movies about it", "Rewrite it"], answer: "Read about it, research it, and share it" },
{ question: "Which ancient Indian scholar is renowned for early works in surgery?", options: ["Aryabhata", "Sushruta", "Panini", "Patanjali"], answer: "Sushruta" },
{ question: "The global values of India promote the idea that the world is:", options: ["A battlefield", "One family (Vasudhaiva Kutumbakam)", "A marketplace", "An illusion"], answer: "One family (Vasudhaiva Kutumbakam)" },
{ question: "Ancient Indian Rishis made tremendous contributions to:", options: ["Only religion", "Mathematics, astronomy, and science", "Only poetry", "Only warfare"], answer: "Mathematics, astronomy, and science" },
{ question: "According to the references, which subject was significantly developed in ancient India alongside math?", options: ["Computer Science", "Physics and Astronomy", "Robotics", "Automobile Engineering"], answer: "Physics and Astronomy" },
{ question: "Awareness of India's glory creates citizens who strive for the betterment of:", options: ["Only themselves", "Their family, workforce, and nation", "Foreign countries", "Only politicians"], answer: "Their family, workforce, and nation" }
]
},
{
chapterNumber: 6,
chapterName: "Soft Skills",
vivaQuestions: [
{ question: "Why are soft skills important for engineering students?", answer: "Sir, while hard skills (technical knowledge) get you an interview, soft skills like communication, leadership, and teamwork help you excel in the job, making you highly marketable in the workforce." },
{ question: "What is professional networking?", answer: "Sir, networking is the process of building and maintaining mutually beneficial relationships with other professionals in your field. It opens doors for mentorship, collaborations, and career opportunities." },
{ question: "How does one build a 'Leadership Attitude'?", answer: "Sir, a leadership attitude is built by taking responsibility, showing empathy towards team members, leading by example, and maintaining a clear vision even during times of crisis." },
{ question: "What is Project Management?", answer: "Sir, project management is the practice of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria at the specified time." },
{ question: "Which case study is used to teach Project Management in the course?", answer: "Sir, the course uses the Akshardham case study. It highlights how a massive, complex architectural marvel was completed flawlessly through exceptional planning, teamwork, and execution." },
{ question: "What are the key secrets of project management learned from the Akshardham case study?", answer: "Sir, the key secrets include meticulous resource planning, unwavering dedication, clear communication among thousands of volunteers, and visionary leadership without ego." },
{ question: "How do soft skills complement hard skills?", answer: "Sir, if a programmer (hard skill) cannot effectively explain their code to the client or work peacefully with their team (soft skills), their technical expertise becomes severely limited in its impact." },
{ question: "What is the role of teamwork in modern organizations?", answer: "Sir, modern problems are too complex for one individual. Teamwork ensures diverse ideas are pooled together, tasks are distributed efficiently, and collective goals are achieved faster." },
{ question: "How can a student practice project management in daily life?", answer: "Sir, a student can practice by organizing college fests, managing their study schedules, or executing a final year project by setting deadlines, allocating tasks, and tracking progress." },
{ question: "What does 'Team of Teams' refer to?", answer: "Sir, it refers to an organizational structure where small, highly adaptable teams are connected in a network, sharing a common purpose, allowing them to tackle complex and rapidly changing challenges efficiently." }
],
mcqs: [
{ question: "Soft skills are intended to:", options: ["Replace hard skills", "Complement hard skills", "Be ignored by engineers", "Only be used by managers"], answer: "Complement hard skills" },
{ question: "Building professional relationships for mutual benefit is called:", options: ["Nepotism", "Networking", "Programming", "Data mining"], answer: "Networking" },
{ question: "Which case study is used in IPDC to teach Project Management?", options: ["Taj Mahal", "Eiffel Tower", "Akshardham", "Statue of Unity"], answer: "Akshardham" },
{ question: "A leadership attitude involves:", options: ["Blaming others", "Taking responsibility and guiding others", "Avoiding teamwork", "Working alone"], answer: "Taking responsibility and guiding others" },
{ question: "Project management involves initiating, planning, executing, controlling, and:", options: ["Closing the work", "Ignoring deadlines", "Canceling the project", "Hiding mistakes"], answer: "Closing the work" },
{ question: "Which of the following is a soft skill?", options: ["Coding in Python", "Database management", "Effective communication", "Circuit design"], answer: "Effective communication" },
{ question: "The Akshardham project succeeded massively due to:", options: ["Unlimited budget", "Meticulous planning and volunteer teamwork", "Use of alien technology", "Lack of deadlines"], answer: "Meticulous planning and volunteer teamwork" },
{ question: "To become highly marketable when entering the workforce, a student needs:", options: ["Only high grades", "Only technical skills", "A mix of hard and soft skills", "Only a good resume font"], answer: "A mix of hard and soft skills" },
{ question: "In a 'Team of Teams' environment, the key to success is:", options: ["Strict dictatorship", "Adaptability and shared purpose", "Working in isolation", "Hiding information"], answer: "Adaptability and shared purpose" },
{ question: "Practicing project management in student life can be done by:", options: ["Sleeping in class", "Organizing a college fest", "Watching TV", "Avoiding group assignments"], answer: "Organizing a college fest" }
]
},
{
chapterNumber: 7,
chapterName: "Selfless Service",
vivaQuestions: [
{ question: "What does 'Seva' mean?", answer: "Sir, Seva is a Sanskrit word that translates to selfless service. It means performing acts of kindness and helping others without expecting any reward, recognition, or return." },
{ question: "How does performing Seva benefit the individual?", answer: "Sir, research shows that performing Seva is highly beneficial to one's own health, wellbeing, and happiness. It reduces stress, creates a sense of purpose, and brings immense inner peace." },
{ question: "What is the 'Physiological Power of Altruism'?", answer: "Sir, altruism—or selfless concern for others—triggers the release of endorphins and oxytocin in the brain. This 'helper's high' lowers blood pressure and physically improves our physiological health." },
{ question: "What is the 'Seva Cafe' mentioned in the course?", answer: "Sir, Seva Cafe in Ahmedabad is an experiment in the 'gift economy'. Volunteers serve food with love, and there are no prices on the menu; guests pay whatever they wish to keep the chain of generosity going." },
{ question: "How does Seva inspire others?", answer: "Sir, selfless service creates a ripple effect. When people see someone helping others without selfish motives, it restores their faith in humanity and inspires them to perform similar acts of kindness." },
{ question: "Why is selfless service an important value for university students?", answer: "Sir, students often get trapped in a highly competitive, self-centered mindset. Seva grounds them, builds empathy, and makes them considerate citizens who care for societal welfare." },
{ question: "What is the difference between service and selfless service (Seva)?", answer: "Sir, service is often a transaction done for a salary, a certificate, or praise. Selfless service is driven purely by love and compassion, with zero expectations of personal gain." },
{ question: "How can a student practice Seva in college?", answer: "Sir, a student can practice Seva by tutoring a struggling classmate, participating in campus clean-up drives, helping juniors with guidance, or volunteering at local NGOs." },
{ question: "Can Seva impact professional life?", answer: "Yes sir. A professional who practices Seva naturally develops high emotional intelligence, becomes a supportive team player, and builds deep, trust-based relationships at the workplace." },
{ question: "What role does 'warmth and love' play in Seva?", answer: "Sir, mechanical help is just an action, but help given with warmth and love touches the heart. It uplifts the dignity of the receiver and brings true spiritual joy to the giver." }
],
mcqs: [
{ question: "The word 'Seva' translates to:", options: ["Paid work", "Selfless service", "Government service", "Hard labor"], answer: "Selfless service" },
{ question: "Performing Seva is known to be beneficial for a person's:", options: ["Bank balance", "Health, wellbeing, and happiness", "Ego", "Social media followers"], answer: "Health, wellbeing, and happiness" },
{ question: "The 'Physiological Power of Altruism' refers to how selfless acts:", options: ["Make you physically tired", "Improve your physical and mental health", "Cause stress", "Damage the brain"], answer: "Improve your physical and mental health" },
{ question: "Which unique establishment in Ahmedabad is used as a case study for serving with love?", options: ["Profit Cafe", "Seva Cafe", "Tech Cafe", "Student Cafe"], answer: "Seva Cafe" },
{ question: "Altruism triggers the release of 'feel-good' chemicals in the brain, often called the:", options: ["Helper's high", "Runner's high", "Stress response", "Fight or flight"], answer: "Helper's high" },
{ question: "Selfless service means acting without expecting:", options: ["To do any work", "Any reward or recognition", "To help anyone", "To get tired"], answer: "Any reward or recognition" },
{ question: "Seva Cafe operates on the principle of a:", options: ["Monopoly", "Gift economy", "Stock market", "Fixed-price menu"], answer: "Gift economy" },
{ question: "When others witness an act of genuine Seva, it often creates a:", options: ["Ripple effect of inspiration", "Sense of jealousy", "Desire to steal", "Feeling of anger"], answer: "Ripple effect of inspiration" },
{ question: "Practicing Seva helps university students become more:", options: ["Self-centered", "Considerate citizens with empathy", "Arrogant", "Isolated"], answer: "Considerate citizens with empathy" },
{ question: "Mechanical help lacks the true essence of Seva, which requires:", options: ["A camera to record it", "A certificate of appreciation", "Warmth and love", "Payment"], answer: "Warmth and love" }
]
}
]
};