import { SheryPage } from '../../dist/index';
import store from '../../store';

SheryPage(store, {
  data: {
    a: {
      c: 'sssssss'
    }
  },
  onLoad() {
    console.log(this);
    this.store.data.a = {
      c: 'ss5555555ss888888777777777777'
    };
    this.store.update();
  }
});
