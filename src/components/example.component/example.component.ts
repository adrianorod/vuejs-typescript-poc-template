import { Component, Vue } from 'vue-property-decorator';
import { Constants } from '@/utils/constants.utils';

@Component({
  components: {},
  })
export default class HeaderComponent extends Vue {
  title: string;

  constructor() {
    super();
    this.title = 'Example Component';
  }

  mounted() {
  }

}
