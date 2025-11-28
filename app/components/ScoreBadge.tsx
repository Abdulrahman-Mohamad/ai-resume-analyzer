import React from 'react'

type ScoreBadgeProps = {
    score: number
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    const isStrong = score > 70
    const isGood = !isStrong && score > 49

    const bgClass = isStrong
        ? 'bg-badge-green'
        : isGood
            ? 'bg-badge-yellow'
            : 'bg-badge-red'

    const textClass = isStrong
        ? 'text-green-600'
        : isGood
            ? 'text-yellow-600'
            : 'text-red-600'

    const label = isStrong ? 'Strong' : isGood ? 'Good Start' : 'Need Work'

    return (
        <div className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full ${bgClass}`}>
            <p className={`text-xs font-medium ${textClass}`}>{label}</p>
        </div>
    )
}
export default ScoreBadge
