import React from 'react';
import Question from '../../component/cards/Question/Question';
import Wellcome1 from '../../component/cards/Wellcome1/Wellcome1';
import styles from './QuestionPage.module.css';
import SideBar from '../../component/bars/SideBar/SideBar';

export default function QuestionPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.Sidebar}><SideBar /></div>
                <div className={styles.questionPageContainer}>
                    <div className={styles.imageNavigation}>
                        <a href="#html-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                                alt="HTML Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                        <a href="#css-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
                                alt="CSS Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                        <a href="#react-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                                alt="React Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                        <a href="#database-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/9850/9850774.png"
                                alt="Database Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                    </div>

                    <div className={styles.total}>
                        <div className={styles.well}>
                            <Wellcome1
                                className={styles.title}
                                title="WELCOME TO HTML QUESTIONS ✨"
                                image="https://cdn-icons-png.flaticon.com/128/743/743217.png"
                            />
                        </div>
                        <div>
                        <div>
                        <div>
    <div id="html-section" className={styles.htmlcard}>
        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 1. What is HTML's role in web development?"
                    backText="HTML structures web content and works with CSS and JavaScript."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 2. How do HTML elements and attributes function in web development?"
                    backText="Elements structure content; attributes define properties."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 3. How do you create hyperlinks in HTML, and what are the best practices?"
                    backText="Use `<a>` with `href`; use descriptive text and test links."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 4. What is a semantic HTML element, and why is it important?"
                    backText="Semantic elements like `<header>` enhance accessibility and SEO."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 5. How do HTML attributes enhance element functionality?"
                    backText="Attributes like `id` and `class` add behavior and style."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 6. What are the differences between HTML and XHTML?"
                    backText="HTML is more lenient; XHTML is stricter with syntax."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div class={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 7. How does HTML5 improve web development?"
                    backText="HTML5 adds new elements and APIs for better functionality."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 8. What is the purpose of the `<meta>` tag in HTML?"
                    backText="`<meta>` provides metadata like descriptions and viewport settings."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 9. How do you embed multimedia in an HTML document?"
                    backText="Use `<img>`, `<video>`, and `<audio>` tags."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 10. What is the role of the `<form>` element in HTML?"
                    backText="`<form>` collects and submits user input."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 11. How does the `<table>` element work in HTML?"
                    backText="`<table>` displays data in rows and columns."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 12. What are HTML void elements, and can you give examples?"
                    backText="Void elements like `<img>` don't have closing tags."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 13. What is the importance of the `<doctype>` declaration in HTML?"
                    backText="`<!DOCTYPE html>` ensures standards mode in browsers."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 14. How do you create a responsive web design using HTML and CSS?"
                    backText="Use CSS media queries and the viewport `<meta>` tag."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="👉 15. What are ARIA roles, and how do they enhance web accessibility?"
                    backText="ARIA roles like `role='button'` improve accessibility."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="👉 16. How do you include external resources in an HTML document?"
                    backText="Use `<link>` for CSS and `<script>` for JavaScript."
                />
            </div>
        </div>
    </div>
</div>

</div>

                        </div>

                            <div className={styles.well}>
                                <Wellcome1
                                    title="WELCOME TO CSS QUESTIONS ✨"
                                    image="https://cdn-icons-png.flaticon.com/128/982/982997.png"
                                />
                            </div>
                            <div id="css-section" className={styles.csscard}>
    <div>
        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="⭐ 1. What is CSS, and why is it important in web development?"
                    backText="CSS styles HTML, controlling layout, colors, and fonts."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="⭐ 2. How does the cascading mechanism work in CSS?"
                    backText="CSS resolves style conflicts based on specificity and order."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="⭐ 3. What are the advantages of using CSS in web development?"
                    backText="CSS separates content from presentation, enhancing maintainability."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="⭐ 4. How does CSS affect the presentation of HTML documents?"
                    backText="CSS controls layout, typography, colors, and visual effects."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="⭐ 5. How does CSS contribute to user experience?"
                    backText="CSS enables responsive design, improving usability and accessibility."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="⭐ 6. What is the purpose of CSS selectors?"
                    backText="Selectors target HTML elements to apply styles."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="⭐ 7. How do CSS classes and IDs differ?"
                    backText="Classes style multiple elements; IDs style unique elements."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="⭐ 8. What is the box model in CSS?"
                    backText="The box model includes margins, borders, padding, and content."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontTitle=""
                    frontText="⭐ 9. How does CSS Flexbox layout work?"
                    backText="Flexbox arranges items in a flexible and responsive layout."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontTitle=""
                    frontText="⭐ 10. What are CSS media queries?"
                    backText="Media queries apply styles based on device characteristics."
                />
            </div>
        </div>
    </div>
</div>


                            <div className={styles.well}>
                                <Wellcome1
                                    title="WELCOME TO REACT QUESTIONS ✨"
                                    image="https://cdn-icons-png.flaticon.com/128/1791/1791307.png"
                                />
                            </div>
                            <div id="react-section" className={styles.reactcard}>
    <div>
        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 1. What is React, and why is it significant in web development?"
                    backText="React is a JavaScript library for building UIs with components."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 2. How do components contribute to user interface development in React?"
                    backText="Components are reusable UI building blocks in React."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 3. What is JSX, and how does it simplify React development?"
                    backText="JSX lets you write HTML-like code in JavaScript."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 4. What is 'state' in React, and how is it utilized?"
                    backText="State manages dynamic data in React components."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 5. How do props facilitate communication between components in React?"
                    backText="Props pass data from parent to child components."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 6. What is a React hook, and why is it useful?"
                    backText="Hooks add state and lifecycle features to function components."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 7. What is the Virtual DOM in React?"
                    backText="The Virtual DOM updates UI efficiently by diffing and patching."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 8. How does the React component lifecycle work?"
                    backText="Lifecycle methods manage component creation, update, and removal."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 9. What is React Router, and why is it used?"
                    backText="React Router manages navigation in single-page applications."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 10. How do you handle form inputs in React?"
                    backText="Use controlled components to manage form inputs."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 11. What are React keys, and why are they important?"
                    backText="Keys help React identify which items have changed, are added, or are removed."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 12. How do you handle events in React?"
                    backText="Events in React are handled similarly to standard DOM events but with camelCase naming."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌠 13. What are React context and when would you use it?"
                    backText="Context provides a way to pass data through the component tree without having to pass props down manually at every level."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌠 14. How do you optimize performance in React applications?"
                    backText="Performance can be optimized using techniques like memoization, minimizing renders, and lazy loading."
                />
            </div>
        </div>
    </div>
</div>


                            <div className={styles.well}>
                                <Wellcome1
                                    title="WELCOME TO DATABASE QUESTIONS ✨"
                                    image="https://cdn-icons-png.flaticon.com/128/8944/8944490.png"
                                />
                            </div>
                            <div id="database-section" className={styles.databasecard}>
    <div>
        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌟 1. What is the role of databases in full-stack development?"
                    backText="Databases store and manage data for web applications, ensuring persistence and efficient data retrieval."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌟 2. How does NoSQL differ from traditional SQL databases?"
                    backText="NoSQL databases are schema-less and better suited for unstructured data, while SQL databases use a structured query language and are ideal for relational data."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌟 3. What are the advantages of using an ORM (Object-Relational Mapping)?"
                    backText="ORMs simplify database interactions by mapping database objects to programming language objects, abstracting away SQL and enhancing code maintainability."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌟 4. How does indexing improve database performance?"
                    backText="Indexes speed up data retrieval by creating a quick lookup structure, reducing the need for full-table scans."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌟 5. What is ACID in database transactions?"
                    backText="ACID (Atomicity, Consistency, Isolation, Durability) ensures database transactions are reliable, consistent, and maintain data integrity."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌟 6. How do you handle database migrations in full-stack applications?"
                    backText="Database migrations manage schema changes and data transformations while maintaining application functionality and data integrity."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌟 7. What is the CAP theorem, and how does it apply to databases?"
                    backText="The CAP theorem states that a distributed system can only guarantee two out of three properties: consistency, availability, and partition tolerance, influencing database design choices."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌟 8. How does caching improve database performance?"
                    backText="Caching stores frequently accessed data in memory, reducing database load and improving response times."
                />
            </div>
        </div>

        <div className={styles.question0}>
            <div className={styles.question1}>
                <Question
                    frontText="🌟 9. What are the different types of database backups?"
                    backText="Database backups include full, differential, and transaction log backups, ensuring data recovery in case of system failure or data loss."
                />
            </div>
            <div className={styles.question2}>
                <Question
                    frontText="🌟 10. How do you secure sensitive data in databases?"
                    backText="Data encryption, access control, and regular audits help secure sensitive data stored in databases from unauthorized access and breaches."
                />
            </div>
        </div>
    </div>
</div>

                    </div>
                </div>
            </div>
        </>
    );
}
