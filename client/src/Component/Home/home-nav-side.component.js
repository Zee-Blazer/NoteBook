
// Material UI Icon
import SearchIcon from '@mui/icons-material/Search';

export const HomeNavSideComponent = () => {

    return (
        <>
            <div className='flex__display'>
                <input 
                    placeholder='Search'
                />
                <SearchIcon />
            </div>

            <div>
                <div>All Notes</div>
                <div>Collaborate</div>
                <div>Favorites</div>
            </div>
        </>
    )
}
