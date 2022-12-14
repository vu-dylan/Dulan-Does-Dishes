import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/about/About.module.css";
import titleStyles from "../styles/common/title.module.css";



const About: NextPage = () => {
    const takeAways: string[] = ["Dynamic Routes using Next.js and server-side rendering", "First legit full-stack project I built by myself from scratch, also with TypeScript and Next.js", "Scrollable Observers", "A bit more difficult CSS styling (those tiltled pictures tilted me)", "Using more Chakra UI components", "Drag and drop UI and creating a field editor from scratch", "Working with a filtering and tagging system"];

    const techstack: string[] = ["Next.js", "TypeScript", "Firestore", "Chakra UI", "JSON Web Tokens"]

    const improve: string[] = ["Plan out my inheritance, interfaces, and classes better and see how they would integrate between frontend and backend", "Try to rip out more logic from the frontend components", "Figure out a better way to organize common functions shared between frontend and backend"];

    return (
        <div className={styles["about"]}>
            <Head>
                <title>Dulan Does Dishes</title>
                <meta name="description" content="Cooking, Life Stories, and more!" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon.ico"></link>
            </Head>

            <main id="main" className={styles["about-main"]}>
                <h1 className={titleStyles["generic-h1"]}>About the Dishwasher</h1>
                <div className={styles["about-picture-container"]}>
                    <Image src="/static/img/logo.png" width="400vw" height="400vw" alt="Dulan Does Dishes Logo" />
                </div>
                <div className={styles["bio"]}>
                    Heyo, I&apos;m Dylan. My &quot;name&quot; (Dulan) comes from a common typo I used to make on accident, and how I somehow always end up being the dishwasher when I cook with my friends. I drew this raccoon (yes, it&apos;s a raccoon) while designing a shirt for UCSB AIChE.
                    <br />
                    <br />
                    I started actually cooking after I started interning for a software and engineering company in December 2020 and wanted to make my own lunches. My approach to cooking is how I approach coding: I pick a central ingredient or theme, and make dishes entirely solely surrounding that ingredient or theme for about a month while trying to gradually ramp up the difficulty/complexity of the dish. I have an Instagram too: @DulanDoesDishes
                    <br />
                    <br />
                    Enjoy my life stories, bad plating, and alright food!
                </div>
                <br />
                <br />
                <br />

                <h1 className={titleStyles["generic-h1"]} id="github">For the Coding Nerds Only</h1>
                <div className={styles["bio"]}>
                    You know what I like as much as cooking?
                    <br />
                    <br />
                    Coding.
                    <br />
                    <br />
                    This website was my way of learning Next.js and beefing (heh) up my UI skills. Kind of like how I approach learning how to cook. I think cooking&apos;s a bit like coding actually. Maybe this is why cooking is a pretty stereotypical hobby for CS majors. I&apos;m most proud especially with the recipe editor/creator. This website&apos;s currently the culmination of my standard web development knowledge (excluding things I know about websockets) as of the end of December 2022 (so nearly 2 years or so since I learned React.js and started coding) and I think this sort of serves as a landmark/checkpoint in my current abilities. I developed most of this website over the 2022 winter break.
                    <br />
                    <br />
                    Here are the things I learned/took away/advanced in from this project:
                    <br />
                    <br />
                    <ul>
                        {takeAways.map((lesson, index) => {
                            return (
                                <li key={"takeaway-" + index}>
                                    {lesson}
                                </li>
                            )
                        })}
                    </ul>
                    <br />
                    <br />
                    Tech Stack
                    <br />
                    <br />
                    <ul>
                        {techstack.map((lesson, index) => {
                            return (
                                <li key={"takeaway-" + index}>
                                    {lesson}
                                </li>
                            )
                        })}
                    </ul>
                    <br />
                    <br />
                    Things I&apos;d Improve
                    <br />
                    <br />
                    <ul>
                        {improve.map((lesson, index) => {
                            return (
                                <li key={"takeaway-" + index}>
                                    {lesson}
                                </li>
                            )
                        })}
                    </ul>
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </main>
        </div>
    )
}

export default About