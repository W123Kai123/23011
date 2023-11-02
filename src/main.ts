import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import vant from 'vant'
import 'vant/lib/index.css';
import { Button,Form, Field, CellGroup,Tabbar, TabbarItem,Icon, Swipe, SwipeItem ,Grid, GridItem ,Checkbox, Sidebar, SidebarItem,ActionBar,Empty, ActionBarIcon, ActionBarButton} from 'vant';
createApp(App).use(Form).use(Field).use(Tabbar).use(Icon).use(Swipe).use(SwipeItem).use(Sidebar).use(Checkbox).use(SidebarItem).use(Grid).use(ActionBar).use(Empty).use(ActionBarIcon).use(ActionBarButton).use(GridItem).use(TabbarItem).use(CellGroup).use(Button).use(store).use(router).mount('#app')
    