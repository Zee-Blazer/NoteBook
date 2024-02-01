
// Material UI Icon
import QueueIcon from '@mui/icons-material/Queue';

// Component
import { MainNavComponent } from '../MainNav/mainnav.component';

export const HomeMainNavComponent = () => {

    return (
        <MainNavComponent>
            <div className='flex__display flex__design'>
                <QueueIcon />
                <div>
                    Main Nav
                </div>
            </div>

            <div>
                <div>Note 1</div>
                <div>Note 2</div>
            </div>
        </MainNavComponent>
    )
}
