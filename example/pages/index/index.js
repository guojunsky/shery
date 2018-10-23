import { SheryPage } from '../../dist/index';
import store from '../../store';

SheryPage(store, {
  data: {
    index: {
      'op': '0000'
    }
  },
  onLoad() {
    console.log(this);
  }
});
