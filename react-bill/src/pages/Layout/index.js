import { TabBar } from 'antd-mobile'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
    BillOutline,
    CalculatorOutline,
    AddCircleOutline
} from 'antd-mobile-icons'
import { useDispatch } from 'react-redux'
import { getBillList } from '@/store/modules/billStore'
import { useEffect } from 'react'
import './index.scss'

const tabs = [
    {
        key: '/',
        title: '月度账单',
        icon: <BillOutline />,
    },
    {
        key: '/new',
        title: '记账',
        icon: <AddCircleOutline />,
    },
    {
        key: '/year',
        title: '年度账单',
        icon: <CalculatorOutline />,
    },
]

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])
    // 切换菜单跳转路由
    const navigate = useNavigate()
    const switchRoute = (path) => {
        console.log(path)
        navigate(path)
    }
    return (
        <div className="kaLayout">
            <div className="page">
                {/* 二级路由出口 */}
                <Outlet />
            </div>

            <TabBar
                className="tabbar"
                onChange={switchRoute}
            >
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    )
}

export default Layout
