
import { memo } from 'react'

const ProfileChildComponentSecond = () => {
    console.log('__CHILD_COMPONENT_SECOND_RENDER__')
    const fs = Math.round(Math.random() * 50) + 10
    return (
        <h2 style={{
            fontSize: fs
        }}>
            Profile Components
        </h2>
    )
}
export default memo(ProfileChildComponentSecond)