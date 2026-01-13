import RightCardContent from './RightCardContent.jsx'

function RightCard(props) {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-60 rounded-4xl'>
            <img className='object-cover w-full h-full' src={props.img} alt="" srcset="" />
            <RightCardContent id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard