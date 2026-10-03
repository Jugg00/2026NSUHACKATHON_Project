// Receive the result title and description from the page that uses this card.
function ResultCard({ title, description }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    );
}

//allow other files to import this component
export default ResultCard;