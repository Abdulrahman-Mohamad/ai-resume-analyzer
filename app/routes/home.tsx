import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {resume} from "react-dom/server";
import RuesmeCard from "~/components/RuesmeCard";


export function meta({}: Route.MetaArgs) {
    return [
        {title: "Resumind"},
        {name: "description", content: "Smart feedback for your dream job!"},
    ];
}

export default function Home() {
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar/>
        <section className='main-section'>
            <div className='page-heading py-16'>
                <h1>Track Your Applications <br/>& Resume Rating</h1>
                <h2>Review Your submissions and check AI-powered feedback.</h2>
            </div>
            {resumes.length > 0 && <>
                <div className="resumes-section">
                    {resumes.map((resume) => (
                        <RuesmeCard key={resume.id} resume={resume}/>
                    ))}
                </div>
            </>}

        </section>
    </main>;
}
