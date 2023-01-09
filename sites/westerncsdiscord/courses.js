var header = {
    "first": {
        title: "First Year",
        description: "1000-1999 level courses. Introduction to programming courses. Enjoy your stay!"
    },
    "second": {
        title: "Second Year",
        description: "2000-2999 level courses. Conceptual courses."
    },
    "third": {
        title: "Third Year",
        description: "3000-3999 level courses. Theoretical courses."
    },
    "fourth": {
        title: "Fourth Year",
        description: "4000-4999 level courses. Application courses."
    }
}

var courses = {
    "first": {
        "CS 1026": {
            name: "Computer Science Fundamentals I",
            tags: ["Easy", "Python"],
            experience: "Intro level course to Python and programming. Simple stuff but there's a learning curve if you've never programmed before.",
            description: "The nature of Computer Science as a discipline; the design and analysis of algorithms and their implementation as modular, reliable, well-documented programs written in a modern programming language. Intended for students with little or no background in programming.",
            positives: ["No programming experience necessary"],
            negatives: ["Can be a struggle to those who have no programming experience"],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_006440_1",
            resources: []
        },
        "CS 1027": {
            name: "Computer Science Fundamentals II",
            tags: ["Easy", "Java"],
            experience: "Java programming. Semi-Advanced level course that delves a little deeper into conceptual CS than 1026 but again, super straight forward. Do the labs, quizzes, and assignments and you can get a >70 without a problem. People seem to find this easier than 1026 as you’re accustomed to programming now but some of the concepts will be new (i.e. Trees, ADTs, etc.)",
            description: "A continuation for both Computer Science 1025A/B and Computer Science 1026A/B. Data organization and manipulation; abstract data types and their implementations in a modern programming language; lists, stacks, queues, trees; recursion; file handling and storage.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_007954_1",
            resources: []
        },
        "CS 1032": {
            name: "Information Systems and Design",
            tags: ["Easy"],
            experience: "",
            description: "Techniques used for determining technological needs of businesses; building and managing systems to meet those needs; development roles of individuals and organizations; planning and management of concepts, personnel and processes; related software tools (spreadsheets, databases). Intended primarily for Management and Organizational Studies students.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_017018_1",
            resources: []
        },
        "CS 1033": {
            name: "Multimedia and Communication I",
            tags: ["Easy", "Image Manipulation", "HTML/CSS/JavaScript"],
            experience: "",
            description: "This course explores the use of different types of media (e.g., text, images, sound, animation) to convey ideas and facilitate interaction. Topics include the design and use of a range of software tools for media creation and editing, covering image, sound, animation and video. This knowledge will be applied to authoring web sites.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_020008_1",
            resources: []
        },
        "MATH 1600": {
            name: "Linear Algebra I",
            tags: ["Medium"],
            experience: "",
            description: "Properties and applications of vectors; matrix algebra; solving systems of linear equations; determinants; vector spaces; orthogonality; eigenvalues and eigenvectors.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_023092_1",
            resources: []
        },
        "CALC 1000": {
            name: "Calculus I",
            tags: ["Medium"],
            experience: "",
            description: "Review of limits and derivatives of exponential, logarithmic and rational functions. Trigonometric functions and their inverses. The derivatives of the trig functions and their inverses. L'Hospital's rules. The definite integral. Fundamental theorem of Calculus. Simple substitution. Applications including areas of regions and volumes of solids of revolution.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_013890_1",
            resources: []
        }
    },
    "second": {
        "CS 2033": {
            name: "Multimedia and Communication II",
            tags: ["Easy", "Image Manipulation", "HTML/CSS/JavaScript"],
            experience: "",
            description: "This course continues the exploration of popular media and Internet technologies. Topics include advanced photo editing techniques; website development with HTML, CSS, and JavaScript; making websites more interactive; form validation; Bootstrap websites; and the significance of CMS's and e-commerce platforms.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_023957_1",
            resources: []
        },
        "CS 2208": {
            name: "Introduction to Computer Organization and Architecture",
            tags: ["Medium", "Assembly"],
            experience: "Definitely one of the harder CS courses you'll ever take but completely doable. Labs, assignments, and quizzes are super straight forward. This course is a lot of work if you're unfamiliar with the conceptual sides of CS. You work in a super bare bones software (ARM Big Endian) that can be a pain but with practice, its alright. Highly suggest doing really well on the first midterm; usually students do poorly with the second midterm so keeping the balance really helps.",
            description: "This course gives an understanding of what a modern computer can do. It covers the internal representation of various data types and focuses on the architectural components of computers (how these components are interconnected and the nature of the information flow between them). Assembly language is used to reinforce these issues.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_009552_1",
            resources: []
        },
        "CS 2209": {
            name: "Applied Logic for Computer Science",
            tags: ["Medium", "Assembly"],
            experience: "Logic, you'll be working with lots of conceptual stuff such as predicate, propositions, and proofs. Its straight forward enough that you'll do well but challenging enough that it requires practice. Like I said, taking 1600 before can be a help as it covers some similar proof-esque topics but its not required.",
            description: "Propositional and predicate logic; representing static and dynamic properties of real-world systems; logic as a tool for representation, reasoning and calculation; logic and programming.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_010277_1",
            resources: []
        },
        "CS 2210": {
            name: "Data Structures and Algorithms",
            tags: ["Medium", "Assembly"],
            experience: "Another tough one but its one of the most useful. You work with a decent amount of math (pretty basic algebra and summations but nothing crazy). This one requires some work to get right too. Definitely get assignments done ASAP and go to lecture if you're having trouble self-teaching. This course codes entirely in Java so a good foundation in 1027 goes a long way.",
            description: "Lists, stacks, queues, priority queues, trees, graphs, and their associated algorithms; file structures; sorting, searching, and hashing techniques; time and space complexity.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_015753_1",
            resources: []
        },
        "CS 2211": {
            name: "Software Tools and Systems Programming",
            tags: ["Medium", "C/Unix"],
            experience: "This course as 2 components: C and Unix. Unix sucks, C sucks but not as bad. Half of the course is dedicated to shell scripting and working the Unix command line. This is really important and useful stuff. C is less useful but provides a great foundation for higher level programming. You, again, build off of a lot of concepts introduced in 1027 (Trees, ADTs, Lists, Arrays)",
            description: "An introduction to software tools and systems programming. Topics include: understanding how programs execute (compilation, linking and loading); an introduction to a complex operating system (UNIX); scripting languages; the C programming language; system calls; memory management; libraries; multi-component program organization and builds; version control; debuggers and profilers.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_015754_1",
            resources: []
        },
        "CS 2212": {
            name: "Introduction to Software Engineering",
            tags: ["Medium", "Java"],
            experience: "This is a group project course. There's a predetermined project that you must complete 3 assignments for. The assignments are incremental and you don't actually code until the last assignment. Your communication skills should be pretty strong as you'll be talking to your group of 4 ppl pretty often. Think of this course as a team building exercise where the ship is sinking but no matter what you do, it wont be able to stop sinking. NOTE: 2210 and 2211 are requisites for the course so ensure you have the credits before the semester starts",
            description: "A team project course that provides practical experience in the software engineering field. Introduction to the structure and unique characteristics of large software systems, and concepts and techniques in the design, management and implementation of large software systems.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_015755_1",
            resources: []
        },
        "CS 2214": {
            name: "Discrete Structures for Computing",
            tags: ["Easy"],
            experience: "Cake walk if you've taken 2209 and 1600. There's lots of overlap from those two courses. This course cover a lot of mathematical proofs but they're not as challenging as you think. Think of them as algebra puzzles that require you to explain each step. Assignments can be challenging but they're worth almost nothing (~5% each). You will have a 25% midterm and 50% final. There's a rule (now I can't guarantee it will be used) that states if your final exam grade is higher than your midterm grade, the midterm grade will be raised to match the final exam grade. (i.e. you get a 60 on the midterm but a 75 on the final exam => midterm is now 75 and final exam is now 75)",
            description: "This course presents an introduction to the mathematical foundations of computer science, with an emphasis on mathematical reasoning, combinatorial analysis, discrete structures, applications and modeling, and algorithmic thinking. Topics include sets, functions, relations, algorithms, number theory, matrices, mathematical reasoning, counting, graphs and trees.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_024784_1",
            resources: []
        },
        "MATH 2155": {
            name: "Mathematical Structures",
            tags: [],
            experience: "This is an essay course, you need 2.0 essay credits (at least 1.0 of these credits must be from a 2000-level or above) to be eligible for graduation. Essay courses can be from any faculty/ category so this is NOT a mandatory course.",
            description: "This course provides an introduction to logical reasoning and proofs. Topics include sets, counting (permutations and combinations), mathematical induction, relations and functions, partial order relations, equivalence relations, binary operations, elementary group theory and applications to error-correcting codes.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_012129_1",
            resources: []
        },
        "STATS 2244": {
            name: "Statistics for Science",
            tags: ["R"],
            experience: "This course is not a requirement but it is the most common Stats course taken by CS students. It's very comprehensive and really useful if you have zero data management/ statistical science knowledge. You do some light coding in R that's honestly not too bad. ONE WARNING: the structure of this course has been absolutely FUCKED for years. the professor, who will remain unnamed, is really bad at getting assignments, quizzes, and feedback back to students so you will spend the entire term not knowing if you're doing well. Proceed with caution but you will most likely pass this course",
            description: "An introductory course in the application of statistical methods, intended for honours students in departments other than Statistical and Actuarial Sciences, Applied Mathematics, Mathematics, or students in the Faculty of Engineering. Topics include sampling, confidence intervals, analysis of variance, regression and correlation. Cannot be taken for credit in any module in Data Science, Statistics, Actuarial Science, or Financial Modelling other than the Minor in Applied Statistics.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_023253_1",
            resources: []
        },
        "WRITING 2111": {
            name: "Writing in the World: Introduction to Professional Writing",
            tags: [],
            experience: "Much like STATS 2244, this course is not required but its one of the most common writing courses from the list on the module requirements. This writing course is a cake walk. Depending on the year, you will, most likely, write 3 assignments. They're not really 'essays' but more like correspondence (emails, letters, etc.) and formal reports that you would write during your first internship or first job. Keep the notes, materials, and assignments from this course in your back pocket, they're super useful when you're in the work force.",
            description: "This course will introduce students to various genres of workplace writing such as letters, memos, and reports. Topics include: employment communications (application letters and resumes); business writing style; positive, negative, and persuasive messages; cross-cultural communication; oral communication.",
            positives: [],
            negatives: [],
            calendar: "https://www.westerncalendar.uwo.ca/Courses.cfm?CourseAcadCalendarID=MAIN_019986_1",
            resources: []
        },
    },
    "third": {},
    "fourth": {}
}