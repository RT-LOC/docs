// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
import Vuetify from 'vuetify/lib'
import lodash from "@shared/js/plugins/lodash_alt";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({})

    Vue.filter('capitalize', function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    })

    Vue.use(lodash)
};