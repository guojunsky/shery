import { SheryComponent } from '../../dist/index';

SheryComponent({
    classes: ['title-class', 'label-class', 'value-class'],
  pure:true,
    props: {
      title: null,
      value: null,
      url: String,
      icon: String,
      label: String,
      center: Boolean,
      isLink: Boolean,
      required: Boolean,
      clickable: Boolean,
      titleWidth: String,
      customStyle: String,
      linkType: {
        type: String,
        value: 'navigateTo'
      },
      border: {
        type: Boolean,
        value: true
      }
    },
    data: {
      ok:1,
      cellClass: function cellClass(ctx) {
        var data = this;
        console.log(this, ctx);
        return this.classNames('custom-class', 'van-cell', {
          'van-hairline': data.border,
          'van-cell--center': data.center,
          'van-cell--required': data.required,
          'van-cell--clickable': data.isLink || data.clickable
        });
      },
      titleStyle: function titleStyle() {
        var titleWidth = this.titleWidth;
        return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
      }
    },
    methods: {
      onClick: function onClick() {
        var url = this.data.url;
  
        if (url) {
          wx[this.data.linkType]({
            url: url
          });
        }
        console.log('55555', this.store);
        this.store.data.ok='89893849343';
        this.store.update();
        this.$emit('click');
      }
    }

})