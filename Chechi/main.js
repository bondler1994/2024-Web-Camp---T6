
//第三方組件
//1.載入
import Swiper from './node_modules/swiper/swiper-bundle.esm.browser.js';
/* import './node_modules/swiper/swiper-bundle.css'; */

/* import HeaderTop from '../../components/HeaderTop/HeaderTop';
import ShopList from '../../components/ShopList/ShopList'; */
export default {
    //2.創建Swiper實力對象,來實現輪播
    mounted() {
        //3.找html有沒有swiper-container這個class
        new Swiper('.swiper', {
            // 4.循環模式選項
            loop: true,
            
            // 5.配置對象:分頁器(要有相對應的swiper-pagination)
            pagination: {
                el: '.swiper-pagination',
            },

        })
    },
    components: {
        HeaderTop,
        ShopList
    }
}
