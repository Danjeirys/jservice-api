export default function Trivial({ trivia }) {
    return (
        <div id="trivia">
            {
                trivia ?
                    <>
                        <div className="centerText">
                            <span className="title">Category</span>
                            <span className="value">{trivia.category.title}</span>
                        </div>
                        <div className="centerText">
                            <h4 className="title">Points</h4>
                            <span className="value">{trivia.value}</span>
                        </div>
                        <div className="centerText">
                            <h4 className="title">Answer</h4>
                            <span className="value">{trivia.question}</span>
                        </div>
                    </>
                    : "Loading ..."
            }
        </div>
    )
}
