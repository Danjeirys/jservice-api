export default function Play( {catchTrivia, SetQuestion} ) {

    const handleCatchTrivia = () => {
        catchTrivia()
        SetQuestion('')
    }

    return (
        <div>
            <h3>Let's play!</h3>
            <button onClick={handleCatchTrivia} className='question'>Get Question </button>
        </div>
    )
}