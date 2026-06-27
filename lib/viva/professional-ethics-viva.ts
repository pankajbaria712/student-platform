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

export const gtuProfessionalEthicsViva: SubjectData = {
subjectName: "PROFESSIONAL ETHICS",
totalChapters: 6,
chapters: [
{
chapterNumber: 1,
chapterName: "Concepts and theories of Business Ethics",
vivaQuestions: [
{ question: "What is the definition of Ethics?", answer: "Sir, ethics is a branch of philosophy dealing with values relating to human conduct, focusing on the rightness and wrongness of actions and the goodness and badness of motives." },
{ question: "What is the difference between Personal Ethics and Business Ethics?", answer: "Sir, personal ethics refer to an individual's own moral principles that guide their daily life, while business ethics are the moral rules and codes of conduct that guide the behavior of a company and its employees." },
{ question: "How does Morality differ from Law?", answer: "Sir, morality is based on inner conscience and societal values about what is right or wrong, whereas law is a formal system of rules enforced by the state. Not everything legal is moral, and not everything moral is legal." },
{ question: "How are moral standards formed?", answer: "Sir, moral standards are formed through a combination of childhood upbringing, cultural and societal norms, religious beliefs, education, and personal experiences over time." },
{ question: "What is the relationship between Religion and Morality?", answer: "Sir, for many people, religion provides the foundational framework and scriptures that define their moral values, though morality can also exist independently of religion through secular ethics." },
{ question: "What is Etiquette?", answer: "Yes sir, etiquette refers to the customary code of polite behavior in society or among members of a particular profession or group. It is more about manners than deep moral issues." },
{ question: "What are Professional Codes?", answer: "Sir, professional codes are formal documents established by professional organizations that outline the ethical standards, expectations, and rules of conduct for their members." },
{ question: "What are Indian Ethical Traditions?", answer: "Sir, Indian ethical traditions are heavily rooted in concepts like Dharma (duty/righteousness), Karma (action and its consequences), and Ahimsa (non-violence), emphasizing holistic well-being." },
{ question: "Can a business be considered a moral agent?", answer: "Yes sir, a business can be considered a moral agent because it makes decisions and takes actions that impact society, employees, and the environment, holding it accountable for its behavior." },
{ question: "What is descriptive ethics?", answer: "Sir, descriptive ethics is the empirical study of the moral beliefs and practices of different people and cultures, simply describing what people believe is right or wrong." },
{ question: "What is normative ethics?", answer: "Sir, normative ethics involves determining what moral standards should be followed. It tries to establish norms or rules for what makes an action right or wrong." },
{ question: "Why do we need ethics in business?", answer: "Sir, ethics in business are crucial to build trust with customers, maintain a good reputation, ensure fair treatment of employees, and sustain long-term profitability." },
{ question: "Is ethics highly subjective?", answer: "Sir, while personal values can be subjective, professional and business ethics are usually objective and codified to ensure a standard level of behavior across an organization." },
{ question: "What is the role of family in forming moral standards?", answer: "Sir, the family is the first institution where a child learns basic values, empathy, and the difference between right and wrong through observation and instruction." },
{ question: "Can law perfectly replace ethics?", answer: "No sir, the law is often a minimum standard of acceptable behavior. Ethics goes beyond the law, guiding us to do what is fair, just, and good even when the law is silent." },
{ question: "What is a 'Code of Conduct'?", answer: "Sir, it is a written set of guidelines issued by an organization to its workers and management to help them conduct their actions in accordance with its primary values and ethical standards." },
{ question: "How does culture influence ethics?", answer: "Sir, culture shapes our worldview, traditions, and collective values, heavily influencing what a particular society deems as acceptable or unacceptable behavior." },
{ question: "What does 'Dharma' mean in Indian ethics?", answer: "Sir, Dharma generally means duty, righteousness, and moral law. It signifies the right way of living and fulfilling one's responsibilities in society." },
{ question: "Are etiquette and morality the same?", answer: "No sir. Chewing with your mouth open is a breach of etiquette, but stealing is a breach of morality. Morality deals with significant human well-being, while etiquette deals with social decorum." },
{ question: "Who primarily enforces professional codes?", answer: "Sir, professional codes are usually enforced by the respective professional bodies or associations, such as the Medical Council for doctors or the Bar Council for lawyers." }
],
mcqs: [
{ question: "Ethics is a branch of which field of study?", options: ["Psychology", "Philosophy", "Sociology", "Economics"], answer: "Philosophy" },
{ question: "Which of the following refers to formal rules enforced by the state?", options: ["Morality", "Etiquette", "Law", "Values"], answer: "Law" },
{ question: "Which term describes polite behavior and social manners?", options: ["Ethics", "Morality", "Etiquette", "Legality"], answer: "Etiquette" },
{ question: "What provides a formal framework of rules for members of a specific profession?", options: ["Personal values", "Professional codes", "Etiquette", "Religious scriptures"], answer: "Professional codes" },
{ question: "In Indian ethical traditions, what does 'Dharma' primarily refer to?", options: ["Wealth", "Desire", "Duty and righteousness", "Liberation"], answer: "Duty and righteousness" },
{ question: "Normative ethics focuses on:", options: ["Describing what people do", "Establishing what people SHOULD do", "Ignoring moral rules", "Studying animal behavior"], answer: "Establishing what people SHOULD do" },
{ question: "Which is the first source of moral standards for a human being?", options: ["Workplace", "Family", "University", "Government"], answer: "Family" },
{ question: "Can an action be legal but unethical?", options: ["Yes, always", "Yes, sometimes", "No, never", "Law and ethics are exactly the same"], answer: "Yes, sometimes" },
{ question: "Which concept emphasizes that every action has a corresponding consequence?", options: ["Ahimsa", "Karma", "Moksha", "Artha"], answer: "Karma" },
{ question: "What is the primary goal of Business Ethics?", options: ["Maximum profit at any cost", "Avoiding all taxes", "Ethical decision making in corporate environment", "Eliminating competition"], answer: "Ethical decision making in corporate environment" },
{ question: "Descriptive ethics is:", options: ["Prescriptive", "Empirical", "Illegal", "A branch of law"], answer: "Empirical" },
{ question: "Which of the following strongly shapes an individual's personal ethics?", options: ["Company policy", "Upbringing and culture", "Stock market trends", "Competitors"], answer: "Upbringing and culture" },
{ question: "A medical doctor strictly following patient confidentiality is an example of:", options: ["Personal ethics", "Etiquette", "Professional ethics", "Business strategy"], answer: "Professional ethics" },
{ question: "If a company uses misleading advertisements that are not strictly illegal, it is:", options: ["Ethical and legal", "Legal but unethical", "Illegal but ethical", "Both illegal and unethical"], answer: "Legal but unethical" },
{ question: "The study of moral beliefs of different cultures without judging them is:", options: ["Descriptive ethics", "Normative ethics", "Applied ethics", "Meta-ethics"], answer: "Descriptive ethics" },
{ question: "Religion typically influences morality by providing:", options: ["Financial rewards", "Moral guidelines and texts", "Legal immunity", "Stock options"], answer: "Moral guidelines and texts" },
{ question: "Professional codes of ethics are usually created by:", options: ["The Supreme Court", "Professional associations", "The Police", "Individual employees"], answer: "Professional associations" },
{ question: "Which of the following is NOT a characteristic of moral standards?", options: ["They deal with matters that can seriously injure or benefit humans", "They are established by law makers", "They are preferred to other values including self-interest", "They are based on impartial considerations"], answer: "They are established by law makers" },
{ question: "Saying 'Thank you' and 'Please' falls under:", options: ["Criminal Law", "Morality", "Etiquette", "Constitutional Law"], answer: "Etiquette" },
{ question: "Indian ethical traditions emphasize a balance between material wealth and:", options: ["Spiritual and moral well-being", "Political power", "Technological advancement", "Monopoly"], answer: "Spiritual and moral well-being" }
]
},
{
chapterNumber: 2,
chapterName: "Business Ethics",
vivaQuestions: [
{ question: "What are the Principles of Personal Ethics?", answer: "Sir, principles of personal ethics include honesty, integrity, respect for others, fairness, and accountability. They are the core values a person uses to navigate their daily life." },
{ question: "What are the Principles of Professional Ethics?", answer: "Yes sir, professional ethics include principles like competence, confidentiality, loyalty, objectivity, and adherence to the profession's specific code of conduct." },
{ question: "How have Business Ethics evolved over the years?", answer: "Sir, initially business was purely about profit maximization. Over time, particularly after major corporate scandals, it evolved to include corporate social responsibility, stakeholder well-being, and strict ethical compliance." },
{ question: "Why is Honesty considered a touchstone of Business Ethics?", answer: "Sir, honesty builds trust with customers, employees, and investors. Without truthful communication and fair dealing, a business cannot survive in the long term." },
{ question: "What does Integrity mean in a business context?", answer: "Sir, integrity means doing the right thing even when no one is watching. In business, it means adhering strictly to moral and ethical principles and keeping promises." },
{ question: "What is Transparency in Business Ethics?", answer: "Sir, transparency means operating in such a way that it is easy for others to see what actions are performed. It involves open, clear communication and not hiding crucial information from stakeholders." },
{ question: "What is the distinction between Values and Ethics?", answer: "Sir, values are personal beliefs about what is important or good, whereas ethics are specific rules or standards of conduct that dictate how one should behave based on those values." },
{ question: "What are the roots of unethical behavior in business?", answer: "Sir, unethical behavior often stems from extreme pressure to meet unrealistic performance goals, personal greed, a toxic corporate culture, or a lack of strict ethical leadership." },
{ question: "What is Ethical Decision Making?", answer: "Sir, ethical decision making is the process of evaluating and choosing among alternatives in a manner consistent with ethical principles, balancing the needs of all stakeholders." },
{ question: "How does pressure lead to unethical behavior?", answer: "Sir, when employees are threatened with losing their jobs or heavily incentivized to meet impossible targets, they may cut corners or falsify data to survive, leading to severe ethical breaches." },
{ question: "What role does leadership play in business ethics?", answer: "Sir, leadership sets the 'tone at the top'. If leaders act unethically, employees will follow. Ethical leaders inspire trust and strictly enforce the company's code of conduct." },
{ question: "Can you give an example of lacking transparency?", answer: "Yes sir, a company hiding the side effects of its pharmaceutical drug or secretly dumping toxic waste is a severe lack of transparency and highly unethical." },
{ question: "Is maximizing profit inherently unethical?", answer: "No sir, maximizing profit is the goal of business, but it becomes unethical when it is done through fraud, exploitation of workers, or environmental destruction." },
{ question: "What is 'Corporate Social Responsibility' (CSR)?", answer: "Sir, CSR is a business model where companies integrate social and environmental concerns in their business operations, giving back to the community." },
{ question: "How does greed act as a root of unethical behavior?", answer: "Sir, personal greed makes individuals prioritize their own extreme financial gain over the well-being of the company, customers, and society, often leading to fraud or embezzlement." },
{ question: "What is the difference between a moral and a value?", answer: "Sir, morals are specific rules of right and wrong, while values are broader concepts of what an individual or society considers important, like 'freedom' or 'wealth'." },
{ question: "How does transparency affect investor relations?", answer: "Sir, transparency gives investors confidence that the financial statements are accurate and the company is being managed responsibly, which attracts more investment." },
{ question: "What is 'whistleblowing'?", answer: "Sir, whistleblowing is when an employee reports illegal or unethical activities occurring within their organization to higher authorities or the public to stop the wrongdoing." },
{ question: "Why is objectivity important in professional ethics?", answer: "Sir, objectivity ensures that professionals, like auditors or engineers, make decisions based on facts and evidence, rather than personal bias or conflicts of interest." },
{ question: "What happens if a company lacks integrity?", answer: "Sir, a lack of integrity eventually leads to scandals, loss of customer trust, massive legal fines, and often the complete collapse of the business, like in the case of Enron." }
],
mcqs: [
{ question: "Which of the following is considered a touchstone of Business Ethics?", options: ["Greed", "Deception", "Transparency", "Monopoly"], answer: "Transparency" },
{ question: "Values are defined as:", options: ["Strict laws enacted by the government", "Personal beliefs about what is important or good", "Rules of etiquette", "Mathematical principles"], answer: "Personal beliefs about what is important or good" },
{ question: "Integrity in business implies:", options: ["Maximizing profit at all costs", "Doing the right thing even when unseen", "Hiding financial losses", "Stealing competitor secrets"], answer: "Doing the right thing even when unseen" },
{ question: "Which of the following is a common root of unethical behavior?", options: ["High personal values", "Unrealistic performance targets", "Excessive transparency", "Strong ethical leadership"], answer: "Unrealistic performance targets" },
{ question: "Professional ethics for an auditor strictly demands:", options: ["Emotional attachment", "Objectivity", "Subjectivity", "Ignoring fraud"], answer: "Objectivity" },
{ question: "Corporate Social Responsibility (CSR) reflects the evolution of business ethics towards:", options: ["Exploiting natural resources", "Stakeholder and societal well-being", "Zero taxation", "Child labor"], answer: "Stakeholder and societal well-being" },
{ question: "The phrase 'Tone at the top' refers to:", options: ["The pitch of the CEO's voice", "The ethical climate set by leadership", "The highest floor of the office", "Maximum profit margins"], answer: "The ethical climate set by leadership" },
{ question: "Ethics differs from Values in that:", options: ["Values are rules of conduct, ethics are beliefs", "Ethics are specific standards of conduct based on values", "They are exactly the same", "Ethics are legal, values are illegal"], answer: "Ethics are specific standards of conduct based on values" },
{ question: "Operating openly and providing clear information to stakeholders is known as:", options: ["Confidentiality", "Secrecy", "Transparency", "Bribery"], answer: "Transparency" },
{ question: "Which of the following is a principle of personal ethics?", options: ["Fiduciary duty", "Respect for others", "Corporate strategy", "Market share expansion"], answer: "Respect for others" },
{ question: "When an employee reports unethical behavior within their company, it is called:", options: ["Marketing", "Whistleblowing", "Insider trading", "Embezzlement"], answer: "Whistleblowing" },
{ question: "What drives a person to commit corporate fraud for personal enrichment?", options: ["Altruism", "Greed", "Transparency", "Empathy"], answer: "Greed" },
{ question: "The evolution of business ethics has moved from pure profit maximization to:", options: ["Pure charity", "Ethical and sustainable business practices", "Government ownership", "Ignoring shareholders"], answer: "Ethical and sustainable business practices" },
{ question: "Confidentiality is highly critical in which of these professions?", options: ["Lawyers and Doctors", "Retail cashiers", "Construction workers", "Delivery drivers"], answer: "Lawyers and Doctors" },
{ question: "Ethical decision making requires:", options: ["Ignoring stakeholders", "Evaluating alternatives based on moral principles", "Flipping a coin", "Choosing the most illegal option"], answer: "Evaluating alternatives based on moral principles" },
{ question: "A toxic corporate culture is a major source of:", options: ["High employee morale", "Unethical behavior", "Increased transparency", "Legal compliance"], answer: "Unethical behavior" },
{ question: "Which of these is NOT a pillar of business ethics?", options: ["Honesty", "Integrity", "Deceit", "Transparency"], answer: "Deceit" },
{ question: "Keeping promises and fulfilling contracts represents which ethical principle?", options: ["Integrity/Reliability", "Objectivity", "Confidentiality", "Subjectivity"], answer: "Integrity/Reliability" },
{ question: "If a manager forces employees to manipulate accounting books, the root cause is likely:", options: ["A desire for transparency", "Pressure to meet financial targets", "Strict ethical training", "Corporate Social Responsibility"], answer: "Pressure to meet financial targets" },
{ question: "Personal values heavily influence:", options: ["The laws of physics", "Ethical decision making", "Historical dates", "The alphabet"], answer: "Ethical decision making" }
]
},
{
chapterNumber: 3,
chapterName: "Ethical Dilemmas, Sources and Their resolutions",
vivaQuestions: [
{ question: "What is an Ethical Dilemma?", answer: "Sir, an ethical dilemma is a complex situation where a person must choose between two or more competing moral principles, where choosing one means violating the other. There is no clear 'right' or 'wrong' answer." },
{ question: "Can you give an example of an Ethical Dilemma in business?", answer: "Yes sir. For instance, an HR manager discovers a loyal, hardworking employee has been stealing small amounts of company money to pay for his child's urgent medical bills. The dilemma is between compassion and enforcing company rules." },
{ question: "What are the main Sources of Ethical Behavior?", answer: "Sir, sources of ethical behavior include family upbringing, religious and cultural background, education, legal systems, and the professional codes of conduct an individual follows." },
{ question: "What is a Code of Personal Ethics for Employees?", answer: "Sir, it is a personal framework of moral rules that an employee sets for themselves, such as vowing never to accept bribes, always being punctual, and maintaining honesty in all reports." },
{ question: "How does one start to Resolve an Ethical Problem?", answer: "Sir, the first step is to accurately identify and define the ethical problem, gather all relevant facts, and identify the stakeholders who will be affected by the decision." },
{ question: "What is the next step in resolving an ethical dilemma?", answer: "Sir, after gathering facts, one must identify the available alternatives, evaluate them against ethical principles or company policies, and weigh the consequences of each option." },
{ question: "Why is it important to identify stakeholders in an ethical dilemma?", answer: "Sir, identifying stakeholders ensures that you consider how your decision will impact everyone involved—such as employees, customers, shareholders, and the community—before taking action." },
{ question: "What is the 'Golden Rule' in ethical resolution?", answer: "Sir, the Golden Rule is 'Do unto others as you would have them do unto you.' It helps individuals evaluate if a decision is fair by putting themselves in the shoes of the affected party." },
{ question: "How can consulting others help resolve a dilemma?", answer: "Sir, discussing the dilemma with a trusted mentor, ethics officer, or legal advisor provides an objective perspective and helps uncover alternatives or consequences you might have missed." },
{ question: "What is a 'Conflict of Interest'?", answer: "Sir, a conflict of interest occurs when an individual's personal interests—usually financial—could compromise their judgment or actions in their professional duties." },
{ question: "Is an ethical dilemma a choice between right and wrong?", answer: "No sir, a choice between right and wrong is a moral temptation. A true ethical dilemma is a choice between 'right and right' or 'wrong and wrong', making it very difficult to resolve." },
{ question: "How does company policy assist in resolving ethical problems?", answer: "Sir, company policies and codes of conduct provide standardized guidelines and precedents, offering a clear framework for how the organization expects specific dilemmas to be handled." },
{ question: "What is the role of 'Transparency' in resolving dilemmas?", answer: "Sir, making a transparent decision means you are willing to have your choice scrutinized by the public. If you are ashamed of people finding out, it's likely the wrong ethical choice." },
{ question: "What is 'Rationalization' in ethical problems?", answer: "Sir, rationalization is a dangerous psychological trap where a person invents a seemingly plausible, but fake, excuse to justify unethical behavior, like saying 'everyone else is doing it'." },
{ question: "What does it mean to evaluate consequences?", answer: "Sir, it means looking ahead at the short-term and long-term impacts of your decision to see who benefits and who gets harmed, ensuring the least amount of overall harm." },
{ question: "Why is 'gathering facts' crucial?", answer: "Sir, acting on assumptions or rumors can lead to unjust decisions. Gathering facts ensures the ethical analysis is grounded in reality, not emotion or bias." },
{ question: "What is the 'Sleep Test'?", answer: "Sir, the sleep test is a simple ethical check. If a decision keeps you awake at night feeling guilty, it is probably not the right ethical choice." },
{ question: "Can legal teams solve all ethical dilemmas?", answer: "No sir. Legal teams ensure compliance with the law, but a dilemma might be completely legal yet still deeply unethical. Ethics goes beyond legal compliance." },
{ question: "What is an 'Ethics Officer'?", answer: "Sir, an ethics officer is a designated executive in a company responsible for overseeing ethical compliance, providing guidance on dilemmas, and managing whistleblowing channels." },
{ question: "Why do ethical dilemmas cause stress?", answer: "Sir, because whatever choice you make, someone might be negatively affected, or a personal value might have to be compromised, creating severe internal moral conflict." }
],
mcqs: [
{ question: "An ethical dilemma is fundamentally a choice between:", options: ["Right and Wrong", "Two competing moral principles (Right vs Right)", "Legal and Illegal", "Profit and Loss"], answer: "Two competing moral principles (Right vs Right)" },
{ question: "Which of the following is the first step in resolving an ethical dilemma?", options: ["Punish the employee", "Flip a coin", "Gather all relevant facts", "Call the media"], answer: "Gather all relevant facts" },
{ question: "When a manager's personal financial interests clash with the company's interests, it is called a:", options: ["Conflict of interest", "Golden rule", "Whistleblowing", "Transparency"], answer: "Conflict of interest" },
{ question: "The 'Golden Rule' advises us to:", options: ["Maximize profits instantly", "Treat others as we wish to be treated", "Always side with the boss", "Ignore all stakeholders"], answer: "Treat others as we wish to be treated" },
{ question: "Who are 'stakeholders' in an ethical dilemma?", options: ["Only the shareholders", "Only the CEO", "Anyone affected by the decision", "Only the competitors"], answer: "Anyone affected by the decision" },
{ question: "Which psychological trap involves making excuses to justify bad behavior?", options: ["Transparency", "Objectivity", "Rationalization", "Integrity"], answer: "Rationalization" },
{ question: "A personal framework of moral rules an individual sets for themselves at work is:", options: ["Code of Personal Ethics", "Corporate Law", "Government Policy", "Market Strategy"], answer: "Code of Personal Ethics" },
{ question: "Which simple test asks if you would be comfortable if your decision was published in the newspaper?", options: ["The Sleep Test", "The Disclosure/Publicity Test", "The Legal Test", "The Profit Test"], answer: "The Disclosure/Publicity Test" },
{ question: "If an action is legal, does it mean it automatically resolves the ethical dilemma?", options: ["Yes, law covers everything", "No, ethics often goes beyond the law", "Yes, legality and ethics are identical", "No, but you should ignore ethics"], answer: "No, ethics often goes beyond the law" },
{ question: "Consulting an Ethics Officer is helpful because they provide:", options: ["Loans", "Objective guidance on company policy and ethics", "Marketing advice", "Stock tips"], answer: "Objective guidance on company policy and ethics" },
{ question: "Which of the following is a common source of ethical behavior?", options: ["Family and cultural upbringing", "Traffic laws", "Stock market indices", "Weather patterns"], answer: "Family and cultural upbringing" },
{ question: "Evaluating consequences means:", options: ["Guessing the stock price", "Analyzing the potential harm and benefit of alternatives", "Ignoring the future", "Only looking at short-term profits"], answer: "Analyzing the potential harm and benefit of alternatives" },
{ question: "What makes a dilemma 'ethical' rather than just a business problem?", options: ["It involves moral values and principles", "It involves money", "It involves technology", "It involves hiring staff"], answer: "It involves moral values and principles" },
{ question: "Which is a common rationalization for unethical behavior?", options: ["'It's the right thing to do.'", "'Everyone else is doing it.'", "'It will benefit the community.'", "'It aligns with our core values.'"], answer: "'Everyone else is doing it.'" },
{ question: "After generating alternatives, the next step is to:", options: ["Ignore them", "Evaluate them against ethical guidelines", "Choose the fastest one", "Choose the cheapest one"], answer: "Evaluate them against ethical guidelines" },
{ question: "A dilemma where a doctor must choose between saving a mother or her child is a classic:", options: ["Business problem", "Ethical dilemma", "Legal loophole", "Etiquette issue"], answer: "Ethical dilemma" },
{ question: "Company codes of conduct help resolve dilemmas by providing:", options: ["Standardized ethical guidelines", "Unlimited funds", "Excuses", "Legal immunity"], answer: "Standardized ethical guidelines" },
{ question: "The 'Sleep Test' is a check on one's:", options: ["Physical fatigue", "Conscience and internal guilt", "Mattress quality", "Work hours"], answer: "Conscience and internal guilt" },
{ question: "Which of these is NOT a step in resolving ethical dilemmas?", options: ["Identify the problem", "Evaluate alternatives", "Fabricate evidence", "Make a decision"], answer: "Fabricate evidence" },
{ question: "If two ethical principles are in direct conflict, the individual must:", options: ["Resign immediately", "Prioritize one based on context and moral weight", "Commit a crime", "Ignore the problem"], answer: "Prioritize one based on context and moral weight" }
]
},
{
chapterNumber: 4,
chapterName: "Ethical Decision marking in Business",
vivaQuestions: [
{ question: "What are Ethical Models in decision making?", answer: "Sir, ethical models are structured frameworks, like Utilitarianism, Deontology, or Virtue Ethics, that guide individuals in analyzing dilemmas and making morally sound decisions." },
{ question: "What is Kohlberg's Model of Cognitive Moral Development?", answer: "Yes sir, Lawrence Kohlberg proposed a model showing how human moral reasoning develops in three main levels: Pre-conventional, Conventional, and Post-conventional, each containing two stages." },
{ question: "What is the Pre-conventional level in Kohlberg's model?", answer: "Sir, at the pre-conventional level, usually in children, moral reasoning is based entirely on self-interest. Actions are judged by their direct consequences, like avoiding punishment or gaining a reward." },
{ question: "What is the Conventional level in Kohlberg's model?", answer: "Sir, at the conventional level, which most adults reach, morality is judged by comparing actions to society's views and expectations. People obey rules to maintain social order and be seen as a 'good boy/girl'." },
{ question: "What is the Post-conventional level in Kohlberg's model?", answer: "Sir, at the highest level, the post-conventional, individuals are guided by their own deeply held universal ethical principles, like justice and human rights, even if they conflict with societal laws." },
{ question: "What are Cross-holder conflicts?", answer: "Sir, cross-holder conflicts occur when the interests of different stakeholder groups—like shareholders wanting high profits versus employees wanting higher wages—are in direct opposition." },
{ question: "How should a business handle cross-holder conflicts?", answer: "Sir, the business must balance these interests ethically, prioritizing transparency, fair negotiations, and finding solutions that minimize harm while fulfilling its core obligations." },
{ question: "How does competition influence ethical decision making?", answer: "Sir, intense competition can unfortunately tempt businesses to cut corners, lower quality, or engage in false advertising to survive, severely testing their ethical resilience." },
{ question: "What influences Ethical Decision Making?", answer: "Sir, it is influenced by individual factors like personal values and moral development, and organizational factors like corporate culture, leadership, and reward systems." },
{ question: "How do personal values affect ethical decision making?", answer: "Sir, personal values act as an internal compass. If an individual highly values honesty, they are much less likely to engage in fraud, regardless of the corporate pressure." },
{ question: "What does it mean to 'Apply Moral Philosophy'?", answer: "Sir, it means using established philosophical theories, like evaluating the consequences (Teleology) or duties (Deontology), as a lens to analyze a complex business problem." },
{ question: "What is the Utilitarian approach?", answer: "Sir, Utilitarianism is a model that says the most ethical decision is the one that produces the greatest good for the greatest number of people." },
{ question: "What is the Rights approach?", answer: "Sir, the Rights approach dictates that an ethical decision must respect and protect the fundamental moral rights of anyone affected, like the right to privacy or truth." },
{ question: "What is the Justice approach?", answer: "Sir, the Justice approach focuses on fairness. It states that ethical decisions must treat all human beings equally, or if unequally, then fairly based on a defensible standard." },
{ question: "Why might someone at the pre-conventional level commit fraud?", answer: "Sir, because they only care about rewards and avoiding punishment. If they think they won't get caught (no punishment) and will get rich (reward), they will commit fraud." },
{ question: "Why is Kohlberg's model important in business?", answer: "Sir, it helps management understand why employees make certain choices and shows that to improve corporate ethics, the organization must foster higher levels of moral reasoning." },
{ question: "Which approach to use when making an ethical decision?", answer: "Sir, one should ideally use a combination. Check if the decision yields good outcomes (Utilitarian), respects human rights (Rights), and is fair to everyone (Justice)." },
{ question: "How does corporate culture influence decision making?", answer: "Sir, if a culture rewards aggressive sales tactics regardless of how they are achieved, employees will likely make unethical decisions. Culture strongly shapes behavior." },
{ question: "What is a 'moral blind spot'?", answer: "Sir, a moral blind spot is an instance where a person fails to see the ethical dimensions of a decision, often because they are entirely focused on financial or operational metrics." },
{ question: "How can training improve ethical decision making?", answer: "Sir, regular training helps employees recognize ethical dilemmas, teaches them how to apply ethical models, and familiarizes them with company policies and reporting mechanisms." }
],
mcqs: [
{ question: "Lawrence Kohlberg's model describes the development of:", options: ["Physical strength", "Cognitive Moral Development", "Financial accounting", "Marketing strategies"], answer: "Cognitive Moral Development" },
{ question: "In Kohlberg's model, the level where morality is based on avoiding punishment and seeking rewards is:", options: ["Pre-conventional", "Conventional", "Post-conventional", "Super-conventional"], answer: "Pre-conventional" },
{ question: "Most adults operate at which level of Kohlberg's model, where they follow rules to maintain social order?", options: ["Pre-conventional", "Conventional", "Post-conventional", "Non-conventional"], answer: "Conventional" },
{ question: "The highest level of moral development, guided by universal ethical principles, is:", options: ["Pre-conventional", "Conventional", "Post-conventional", "Sub-conventional"], answer: "Post-conventional" },
{ question: "Conflicts where the interests of shareholders clash with the interests of employees are known as:", options: ["Cross-holder conflicts", "Time conflicts", "Legal conflicts", "Software conflicts"], answer: "Cross-holder conflicts" },
{ question: "The ethical model focusing on 'the greatest good for the greatest number' is:", options: ["Deontology", "Utilitarianism", "Virtue Ethics", "Egoism"], answer: "Utilitarianism" },
{ question: "Which approach demands that ethical decisions treat all people equally and fairly?", options: ["Utilitarian approach", "Justice approach", "Rights approach", "Profit approach"], answer: "Justice approach" },
{ question: "Intense market competition often negatively influences ethics by creating:", options: ["More transparency", "Pressure to cut corners and act unethically", "Higher salaries", "Better quality"], answer: "Pressure to cut corners and act unethically" },
{ question: "Personal values heavily influence ethical decision making because they act as:", options: ["An internal moral compass", "A legal contract", "A financial budget", "A corporate policy"], answer: "An internal moral compass" },
{ question: "Failing to see the ethical dimensions of a business problem is known as a:", options: ["Moral blind spot", "Strategic advantage", "Visionary trait", "Legal loophole"], answer: "Moral blind spot" },
{ question: "According to Kohlberg, a person who breaks a law because it violates fundamental human rights is at the:", options: ["Pre-conventional level", "Conventional level", "Post-conventional level", "Infant stage"], answer: "Post-conventional level" },
{ question: "Which of the following is an organizational factor influencing ethical decisions?", options: ["Employee's age", "Corporate culture and reward systems", "Employee's religion", "Employee's childhood"], answer: "Corporate culture and reward systems" },
{ question: "The Rights approach to ethics emphasizes protecting:", options: ["The company's profit", "Fundamental moral rights of individuals", "The CEO's bonus", "Competitor secrets"], answer: "Fundamental moral rights of individuals" },
{ question: "Applying moral philosophy to business means:", options: ["Ignoring philosophy entirely", "Using ethical theories to analyze business problems", "Writing a philosophy book", "Only caring about logic"], answer: "Using ethical theories to analyze business problems" },
{ question: "If a company decides to pollute a river because 'it saves money and we won't get fined', they are reasoning at Kohlberg's:", options: ["Pre-conventional level", "Conventional level", "Post-conventional level", "Spiritual level"], answer: "Pre-conventional level" },
{ question: "Cross-holder conflicts require businesses to:", options: ["Ignore all stakeholders", "Balance competing interests ethically", "Shut down operations", "Only listen to shareholders"], answer: "Balance competing interests ethically" },
{ question: "Which of these is NOT an ethical model guiding decision making?", options: ["Utilitarianism", "Deontology", "Astrology", "Virtue Ethics"], answer: "Astrology" },
{ question: "A strong ethical corporate culture reduces the likelihood of:", options: ["Charity work", "Unethical decision making", "Employee retention", "Customer trust"], answer: "Unethical decision making" },
{ question: "Which level of moral development is most common in young children?", options: ["Post-conventional", "Conventional", "Pre-conventional", "Universal"], answer: "Pre-conventional" },
{ question: "The Justice approach is most concerned with:", options: ["Utility", "Fairness and equity", "Punishment", "Profit"], answer: "Fairness and equity" }
]
},
{
chapterNumber: 5,
chapterName: "Individual factors: Moral Philosophies and values",
vivaQuestions: [
{ question: "What is Moral Philosophy?", answer: "Sir, moral philosophy refers to the specific principles or rules that individuals use to decide what is right or wrong. It provides the logical foundation for ethical decision making." },
{ question: "What are the two major categories of Moral Philosophies?", answer: "Sir, the two major categories are Teleology, which judges actions based on their consequences, and Deontology, which judges actions based on inherent duties and rules." },
{ question: "What is Teleology?", answer: "Sir, Teleology is consequence-based ethics. It argues that an act is morally right if it produces a desired outcome or maximum benefit. Utilitarianism is a famous teleological theory." },
{ question: "What is Deontology?", answer: "Sir, Deontology is duty-based ethics. It argues that certain actions are inherently right or wrong regardless of their consequences. For example, lying is always wrong, even if it brings a good result." },
{ question: "What is Ethical Relativism?", answer: "Sir, Ethical Relativism is the belief that moral truths are not absolute, but vary depending on individual cultures, societies, or personal circumstances." },
{ question: "What is Virtue Ethics?", answer: "Sir, Virtue Ethics focuses on the moral character of the decision-maker rather than the rules or consequences. It asks 'What would a person of good character, like honesty and courage, do?'" },
{ question: "What is White-Collar Crime?", answer: "Sir, white-collar crime refers to non-violent, financially motivated crimes committed by business or government professionals, such as fraud, embezzlement, insider trading, and bribery." },
{ question: "Who coined the term 'White-Collar Crime'?", answer: "Sir, the term was coined by sociologist Edwin Sutherland in 1939, defining it as a crime committed by a person of respectability and high social status in the course of their occupation." },
{ question: "How do individual factors affect Business Ethics?", answer: "Sir, individual factors like personal moral philosophy, stage of cognitive moral development, age, education, and locus of control heavily dictate how a person will react to ethical dilemmas at work." },
{ question: "What is Locus of Control?", answer: "Sir, locus of control relates to how people view their destiny. Those with an internal locus believe they control their outcomes, while those with an external locus believe fate, luck, or superiors control their actions." },
{ question: "How does Locus of Control relate to ethics?", answer: "Sir, individuals with an internal locus of control take personal responsibility for their actions and are generally more resistant to pressure to commit unethical acts compared to those with an external locus." },
{ question: "Why is White-Collar Crime so damaging?", answer: "Sir, while it lacks physical violence, it destroys trust, devastates economies, wipes out pensions and savings, and often affects thousands or millions of victims simultaneously." },
{ question: "Can a person's moral philosophy change?", answer: "Yes sir, through life experiences, education, and cognitive moral development, a person can transition from ego-centric philosophies to more universal, duty-based or utilitarian philosophies." },
{ question: "What is Egoism?", answer: "Sir, Egoism is a teleological theory which states that an action is right if it maximizes good consequences specifically for the individual making the decision, essentially prioritizing self-interest." },
{ question: "How does one apply Deontology in business?", answer: "Sir, applying deontology means adhering strictly to rules, laws, and duties. For example, never deceiving a customer because deception violates the fundamental duty of honesty, regardless of lost profit." },
{ question: "What is the primary motivation behind white-collar crime?", answer: "Sir, the primary motivations are greed, financial pressure, a sense of entitlement, and a corporate culture that prioritizes profit over legal and ethical compliance." },
{ question: "Is insider trading a white-collar crime?", answer: "Yes sir. Insider trading involves trading a public company's stock by someone who has non-public, material information about that stock, which is highly illegal and unethical." },
{ question: "What is meant by 'Cognitive Moral Development'?", answer: "Sir, it is the psychological process through which individuals learn to distinguish right from wrong, maturing from simple obedience to complex, principle-based reasoning." },
{ question: "How does Relativism complicate global business?", answer: "Sir, relativism makes global business difficult because a practice considered normal and ethical in one country (like small 'facilitation payments') might be considered an illegal bribe in another." },
{ question: "Can good values prevent white-collar crime?", answer: "Yes sir, strong personal values and high moral philosophies act as a powerful deterrent against white-collar crime, overriding the temptation of financial gain." }
],
mcqs: [
{ question: "Which moral philosophy focuses on the consequences or outcomes of an action?", options: ["Deontology", "Teleology", "Virtue Ethics", "Relativism"], answer: "Teleology" },
{ question: "Which moral philosophy argues that actions are inherently right or wrong based on duties and rules, regardless of consequences?", options: ["Teleology", "Egoism", "Deontology", "Utilitarianism"], answer: "Deontology" },
{ question: "Utilitarianism is a sub-category of which moral philosophy?", options: ["Deontology", "Teleology", "Virtue Ethics", "Relativism"], answer: "Teleology" },
{ question: "The belief that moral rules are not absolute and depend on the culture or situation is known as:", options: ["Ethical Relativism", "Absolute Deontology", "Strict Utilitarianism", "Universalism"], answer: "Ethical Relativism" },
{ question: "Non-violent, financially motivated crimes committed by professionals are called:", options: ["Blue-collar crimes", "Violent crimes", "White-collar crimes", "Street crimes"], answer: "White-collar crimes" },
{ question: "Who first defined 'White-Collar Crime'?", options: ["Lawrence Kohlberg", "Edwin Sutherland", "Aristotle", "Immanuel Kant"], answer: "Edwin Sutherland" },
{ question: "Which of the following is an example of a white-collar crime?", options: ["Robbery", "Assault", "Embezzlement", "Burglary"], answer: "Embezzlement" },
{ question: "A person who believes they are entirely in control of their own fate has an:", options: ["External locus of control", "Internal locus of control", "Apathetic locus", "Egocentric locus"], answer: "Internal locus of control" },
{ question: "Individuals with an external locus of control are more likely to:", options: ["Take personal responsibility", "Blame fate, luck, or superiors for their actions", "Resist unethical pressure", "Act as whistleblowers"], answer: "Blame fate, luck, or superiors for their actions" },
{ question: "The moral philosophy focusing on the character of the decision maker (e.g., being brave, honest) is:", options: ["Teleology", "Deontology", "Virtue Ethics", "Egoism"], answer: "Virtue Ethics" },
{ question: "Egoism defines a right action as one that maximizes good consequences for:", options: ["The whole society", "The individual making the decision", "The environment", "The competitors"], answer: "The individual making the decision" },
{ question: "Insider trading is classified as:", options: ["A moral virtue", "A blue-collar crime", "A white-collar crime", "A legal business strategy"], answer: "A white-collar crime" },
{ question: "Which is a major individual factor influencing business ethics?", options: ["Company budget", "Locus of control and moral philosophy", "Office architecture", "Competitor pricing"], answer: "Locus of control and moral philosophy" },
{ question: "According to Deontology, lying to a customer to save their feelings is:", options: ["Ethical if it brings happiness", "Ethical because of the good consequence", "Unethical because lying violates a fundamental duty", "Subject to relativism"], answer: "Unethical because lying violates a fundamental duty" },
{ question: "What is the primary damage caused by white-collar crimes like Enron's fraud?", options: ["Physical injuries", "Massive financial loss and destruction of trust", "Noise pollution", "Traffic congestion"], answer: "Massive financial loss and destruction of trust" },
{ question: "Applying moral philosophy to a business decision helps a manager:", options: ["Guess the stock market", "Evaluate the ethical validity of their choices", "Avoid paying taxes", "Write computer code"], answer: "Evaluate the ethical validity of their choices" },
{ question: "Cognitive moral development suggests that moral reasoning:", options: ["Is fixed at birth", "Matures and evolves through different stages over time", "Disappears in adulthood", "Is irrelevant in business"], answer: "Matures and evolves through different stages over time" },
{ question: "A business relying on Teleology would justify a decision by proving:", options: ["It followed all strict rules", "It resulted in the greatest net benefit", "The CEO ordered it", "It is an ancient tradition"], answer: "It resulted in the greatest net benefit" },
{ question: "If a manager says 'bribery is wrong here, but acceptable in another country', they are applying:", options: ["Universal Deontology", "Virtue Ethics", "Ethical Relativism", "Internal locus of control"], answer: "Ethical Relativism" },
{ question: "Strong personal values and an internal locus of control:", options: ["Encourage white-collar crime", "Act as a defense against engaging in unethical behavior", "Have no impact on ethics", "Guarantee corporate bankruptcy"], answer: "Act as a defense against engaging in unethical behavior" }
]
},
{
chapterNumber: 6,
chapterName: "Human Values for Indian Managers",
vivaQuestions: [
{ question: "What are Human Values for Indian Managers?", answer: "Sir, human values for Indian managers are drawn from ancient Indian ethos and scriptures, focusing on holistic development, self-discipline, duty (Dharma), and viewing work as worship (Karma Yoga)." },
{ question: "What lessons can be learned from the Ancient Indian Education system?", answer: "Sir, the ancient Gurukul system emphasized holistic education, character building, strict discipline, simple living, and a deep, respectful bond between the teacher (Guru) and student (Shishya)." },
{ question: "What is the Law of Karma?", answer: "Yes sir, the Law of Karma states that every action has an equal reaction. Good actions yield good results, and bad actions bring bad results. It teaches absolute accountability for one's deeds." },
{ question: "How does the Law of Karma apply to business?", answer: "Sir, in business, it implies that unethical practices like cheating customers will eventually destroy the company's reputation and profitability, while ethical conduct builds long-term success." },
{ question: "What is 'Quality of Working Life' (QWL)?", answer: "Sir, QWL refers to the overall satisfaction, well-being, and work environment of an employee. It includes fair compensation, safe conditions, and opportunities for growth and self-realization." },
{ question: "What are the core ethics of Swami Vivekananda?", answer: "Sir, Swami Vivekananda emphasized fearlessness, strength, self-belief, and the idea of serving humanity as serving God (Daridra Narayan). He believed weakness is a sin." },
{ question: "How can Vivekananda's teachings help modern managers?", answer: "Sir, his teachings inspire managers to develop immense self-confidence, lead with courage, maintain high moral character, and focus on the welfare and upliftment of their subordinates." },
{ question: "What are the core ethics of Mahatma Gandhi?", answer: "Sir, Gandhiji's core ethical principles were Truth (Satya) and Non-violence (Ahimsa). In business, he strongly advocated for the concept of 'Trusteeship'." },
{ question: "What is Gandhiji's concept of Trusteeship?", answer: "Sir, Trusteeship is the idea that wealthy individuals and business owners should view their wealth not as personal property, but as a trust held on behalf of society, to be used for the welfare of the people." },
{ question: "What are the ethics of Sri Aurobindo?", answer: "Sir, Sri Aurobindo emphasized 'Integral Yoga' and spiritual evolution. He believed that inner transformation and elevating human consciousness are essential for establishing a harmonious society and workplace." },
{ question: "What are the ethics of Rabindranath Tagore?", answer: "Sir, Tagore emphasized humanism, creative freedom, harmony with nature, and universal brotherhood. He believed education and work should liberate the mind, not enslave it." },
{ question: "What does 'Nishkama Karma' mean?", answer: "Sir, Nishkama Karma, a key concept in the Bhagavad Gita, means doing one's duty without attachment to the fruits or results. It encourages managers to focus on excellence rather than just rewards." },
{ question: "How did the Gurukul system view knowledge?", answer: "Sir, knowledge was viewed not just as information for making a living, but as a tool for liberation (Vidya) and self-realization, integrating spiritual and practical life." },
{ question: "Why is self-discipline important for an Indian manager?", answer: "Sir, according to Indian ethos, mastering one's own mind and desires (self-management) is the first step before one can effectively manage an organization or other people." },
{ question: "How does Indian ethos view the environment?", answer: "Sir, Indian ethos views nature as sacred and interconnected with humanity. Therefore, sustainable business practices that do not harm the environment are highly emphasized." },
{ question: "What did Gandhi mean by 'Commerce without morality is a sin'?", answer: "Sir, he meant that doing business solely for profit while ignoring ethical principles, exploiting workers, or harming society is deeply immoral and destructive." },
{ question: "How does Tagore's idea of creative freedom apply to management?", answer: "Sir, it suggests that managers should foster an environment where employees are not treated like machines, but are given the freedom to innovate, think creatively, and express themselves." },
{ question: "What is the role of a 'Guru' in modern management?", answer: "Sir, in modern terms, a Guru is equivalent to a mentor. A manager should act as a mentor, guiding the personal and professional growth of their team members with wisdom and care." },
{ question: "How does Aurobindo's 'inner transformation' help a business?", answer: "Sir, if managers undergo inner transformation to overcome greed and ego, they will automatically create a highly ethical, transparent, and harmonious corporate culture." },
{ question: "Why is 'Quality of Working Life' rooted in human values?", answer: "Sir, because treating employees as mere resources is unethical. QWL recognizes the human dignity of workers, ensuring their physical, mental, and spiritual well-being is respected." }
],
mcqs: [
{ question: "The 'Law of Karma' fundamentally teaches:", options: ["That laws are made by kings", "Absolute accountability: every action has a consequence", "That luck dictates business success", "That actions don't matter"], answer: "Absolute accountability: every action has a consequence" },
{ question: "The ancient Indian education system was known as the:", options: ["Factory system", "Gurukul system", "Corporate system", "Feudal system"], answer: "Gurukul system" },
{ question: "Which of the following was a primary focus of the Gurukul system?", options: ["Stock trading", "Character building and holistic education", "Industrial manufacturing", "Political campaigning"], answer: "Character building and holistic education" },
{ question: "Mahatma Gandhi's concept regarding wealth and business is known as:", options: ["Monopoly", "Trusteeship", "Capitalism", "Communism"], answer: "Trusteeship" },
{ question: "Trusteeship implies that business owners hold their wealth:", options: ["For their own exclusive luxury", "As a trust on behalf of society for public welfare", "To hide it from the government", "To crush competitors"], answer: "As a trust on behalf of society for public welfare" },
{ question: "Swami Vivekananda strongly emphasized the virtues of:", options: ["Fear, submission, and greed", "Strength, fearlessness, and serving humanity", "Deceit and manipulation", "Isolating oneself from work"], answer: "Strength, fearlessness, and serving humanity" },
{ question: "Who propounded the philosophy of 'Integral Yoga' and spiritual evolution?", options: ["Rabindranath Tagore", "Mahatma Gandhi", "Sri Aurobindo", "Swami Vivekananda"], answer: "Sri Aurobindo" },
{ question: "Rabindranath Tagore's philosophy heavily emphasized:", options: ["Strict industrialization", "Humanism, creative freedom, and harmony with nature", "Violence", "Corporate greed"], answer: "Humanism, creative freedom, and harmony with nature" },
{ question: "Quality of Working Life (QWL) refers to:", options: ["How fast a worker types", "The physical, mental, and social well-being of employees at work", "The number of hours worked without sleep", "The quality of the company's products"], answer: "The physical, mental, and social well-being of employees at work" },
{ question: "The principle of doing one's duty without attachment to the results is known as:", options: ["Ahimsa", "Nishkama Karma", "Trusteeship", "Satyagraha"], answer: "Nishkama Karma" },
{ question: "Indian ethos dictates that before managing others, a manager must first master:", options: ["Accounting", "Their own mind and self (Self-management)", "Foreign languages", "Computer programming"], answer: "Their own mind and self (Self-management)" },
{ question: "Gandhiji listed 'Commerce without ______' as a deadly social sin.", options: ["Profit", "Morality", "Marketing", "Technology"], answer: "Morality" },
{ question: "According to Vivekananda, the greatest sin is:", options: ["Poverty", "Weakness", "Working hard", "Taking risks"], answer: "Weakness" },
{ question: "In the context of Indian values, work is often equated with:", options: ["Punishment", "Worship (Karma Yoga)", "Exploitation", "Boredom"], answer: "Worship (Karma Yoga)" },
{ question: "Which value is central to Gandhiji's ethics alongside Truth (Satya)?", options: ["Ahimsa (Non-violence)", "Krodh (Anger)", "Lobha (Greed)", "Moha (Attachment)"], answer: "Ahimsa (Non-violence)" },
{ question: "Tagore believed that education and work should:", options: ["Enslave the human mind", "Be purely for making money", "Liberate the mind and foster creativity", "Ignore nature entirely"], answer: "Liberate the mind and foster creativity" },
{ question: "A modern manager acting as a 'Guru' means they act as a:", options: ["Dictator", "Mentor and guide", "Silent observer", "Financial auditor"], answer: "Mentor and guide" },
{ question: "Sri Aurobindo believed that creating a better society and workplace requires:", options: ["More laws", "Inner transformation and elevated consciousness", "More weapons", "Only financial investments"], answer: "Inner transformation and elevated consciousness" },
{ question: "Indian managerial ethos views the environment as:", options: ["A resource to be completely exploited", "Sacred and interconnected with humanity", "Irrelevant to business", "An obstacle to profit"], answer: "Sacred and interconnected with humanity" },
{ question: "Applying the Law of Karma to business implies that:", options: ["Unethical behavior yields long-term rewards", "Ethical behavior leads to sustainable, positive outcomes", "Actions have no consequences", "Only the CEO is accountable"], answer: "Ethical behavior leads to sustainable, positive outcomes" }
]
}
]
};