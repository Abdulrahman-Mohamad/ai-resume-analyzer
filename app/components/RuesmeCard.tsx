import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const RuesmeCard = ({resume: {id, companyName, jobTitle, feedback, resumePath}}: { resume: Resume }) => {
    return (
        <Link to={`/reusme/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold wrap-break-word">{companyName}</h2>
                    <h2 className="text-lg wrap-break-word">{jobTitle}</h2>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore}/>
                </div>
            </div>
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={resumePath}
                        alt="resume"
                        className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                    />
                </div>
            </div>
        </Link>
    )
}
export default RuesmeCard
