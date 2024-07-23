import './floating-button.css'
import AddIcon from '@mui/icons-material/Add';

export default function FloatingButton() {
    return (
        <button className={'floating-button'}>
            <AddIcon className={"floating-button-plus-icon"}/>
        </button>
    )
}
