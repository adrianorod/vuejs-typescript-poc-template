import { Component, Vue } from 'vue-property-decorator';
import { Constants } from '@/utils/constants.utils';
import exampleComponent from '@/components/example.component/index.vue';
import DOMUtils from '@/utils/dom.utils';
import DateUtils from '@/utils/date.utils';

@Component({
  components: {
  exampleComponent
  }
  })
export default class TrocaTemporariaView extends Vue {

  constructor() {
    super();
  }

  mounted() {
  }

  exampleMethod() {
    console.log('Example method called');
  }
}
