// Receive the result title and description from the page that uses this card.
function ResultCard({ title, description }) {
    return (
        <article className="mt-4 rounded-2xl bg-white p-6 shadow-sm border-t-4 border-[var(--color-accent-gold)]">
            <h2 className="text-xl font-semibold text-[var(--color-nsu-green)]">
                {title}
            </h2>
            <p>{description}</p>
        </article>
    );
}

//allow other files to import this component
export default ResultCard;