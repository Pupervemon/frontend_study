import { Button } from 'antd-mobile'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <Outlet />
            this is layout
            <Button color='primary'>测试全局</Button>
            <div>
                <Button color='primary'>测试局部</Button>
            </div>
        </div>
    )
}
export default Layout